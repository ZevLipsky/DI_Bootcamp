const ITEM_KEY = 'notes';
const root = document.getElementById('root');
const input = document.getElementById('note');
const arr = [];

const saveNote = () => {
    const note = input.value;
    arr.push(note);
    //save to local storage
    creatNotes (arr);
}

const creatNotes = (arr) =>{
    const html = arr.map(note=> {
        return<div>${note}</div>
    })
    root.innerHTML = html.join('');
}