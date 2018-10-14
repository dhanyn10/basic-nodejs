console.log('starting notes.js');

var addNote = (title, body) => {
    console.log('adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('getting note', title);
}

var removeNote = (title) => {
    console.log('removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};