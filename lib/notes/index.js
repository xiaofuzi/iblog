const path = require('path');
const sander = require('sander');
const FetchNotes = require('./fetchNotes.js');

// fetchNote
function FetchNote (key) {
    let p = new Promise(function(resolve, reject) {
        FetchNotes()
            .then((notes) => {
                let note = notes.all.filter((item) => {
                    return item.key == key;
                })
                resolve(note[0])
            })
    });
    
    return p;
}

module.exports = {
  fetchNotes: FetchNotes,
  fetchNote: FetchNote
};