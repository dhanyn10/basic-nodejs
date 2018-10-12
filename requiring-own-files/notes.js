console.log('starting notes.js');

module.exports.age = 110;
module.exports.addNote = () => {
    console.log('add note');
    return 'New Note';
};
module.exports.add = (a, b) => {
    return a + b;
}