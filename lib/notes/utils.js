function sortByCreatedAt(a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt)
}

function sortByAlphabetical(a, b) {
    return a.title.localeCompare(b.title)
}

function sortByUpdatedAt(a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt)
}

function findNoteByKey(notes, noteKey) {
    return notes.find((note) => note.key === noteKey)
}

function findNotesByKeys(notes, noteKeys) {
    return notes.filter((note) => noteKeys.includes(getNoteKey(note)))
}

function getNoteKey(note) {
    return note.key
}

module.exports = {
    sortByCreatedAt
}