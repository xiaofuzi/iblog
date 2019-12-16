const sander = require('sander')
const path = require('path')
const CSON = require('@rokt33r/season')
const marked = require('marked');
const Config = require('../../config');
const utils = require('./utils.js');
const dayjs = require('dayjs');

const _path = Config.storgePath || "/Users/yangxiaofu/Boostnote";
const _boostnotercPath = path.join(
  _path,
  "boostnote.json"
);

function parse(boostnotercPath = _boostnotercPath) {
  if (!sander.existsSync(boostnotercPath)) return {};
  try {
    return JSON.parse(sander.readFileSync(boostnotercPath).toString());
  } catch (e) {
    console.warn(e);
    console.warn("Your .boostnoterc is broken so it's not used.");
    return {};
  }
}
// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

function resolveStorageNotes (storage = {}) {
    const notesDirPath = path.join(storage.path || _path, 'notes')
    let notePathList
    try {
        notePathList = sander.readdirSync(notesDirPath)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(notesDirPath, ' doesn\'t exist.')
            sander.mkdirSync(notesDirPath)
        } else {
            console.warn('Failed to find note dir', notesDirPath, err)
        }
        notePathList = []
    }
    const notes = notePathList
      .filter(function filterOnlyCSONFile(notePath) {
        return /\.cson$/.test(notePath);
      })
      .map(function parseCSONFile(notePath) {
        try {
          const data = CSON.readFileSync(path.join(notesDirPath, notePath));
          data.key = path.basename(notePath, ".cson");
          data.storage = storage.key;
          return data;
        } catch (err) {
          console.error(`error on note path: ${notePath}, error: ${err}`);
        }
      })
      .filter(function filterOnlyNoteObject(noteObj) {
        return typeof noteObj === "object" && noteObj.type === "MARKDOWN_NOTE";
      })
      .map(function processMd(noteObj) {
        noteObj.content = marked(noteObj.content);
          noteObj.createdAt = dayjs(noteObj.createdAt).format('YYYY-MM-DD HH:mm:ss');
        return noteObj;
      })
        .sort(function (a, b) {
            return utils.sortByCreatedAt(a, b);
        })
        .map(function processMd(noteObj) {
            noteObj.createdAt = dayjs(noteObj.createdAt).format('YYYY-MM-DD HH:mm:ss');
            return noteObj;
        })

    // classify notes
    let folderObj = {}, notesObj = {};

    parse().folders.forEach(el => {
        folderObj[el.key] = el;
    });
      
    notes.forEach((note) => {
        note.folderName = folderObj[note.folder].name;
        notesObj[note.folderName] = notesObj[note.folderName] || [];
        notesObj[note.folderName].push(note);
    });
    notesObj.all = notes;
    return Promise.resolve(notesObj);
}

module.exports = resolveStorageNotes

