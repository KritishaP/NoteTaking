const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main')

//function to save notes
const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes)
  const data = [];
  notes.forEach(
    (note) => {
      data.push(note.value)
    }
  )
  if (data.length === 0) {
    localStorage.removeItem('notes')
  }
  else {
    localStorage.setItem('notes', JSON.stringify(data))
  }

  //adding to local storage

}

//adding functionality to button
addBtn.addEventListener('click', () => {
  addNote();
})



//function to add note
const addNote = (text = '') => {
  const note = document.createElement('div')
  note.classList.add('note');
  note.innerHTML = `
  <div class="tool">
          <i class="save fa-regular fa-floppy-disk"></i>
          <i class="trash fa-regular fa-trash-can"></i>
        </div>
        <textarea>${text}</textarea>`

  //script for deleting note
  note.querySelector('.trash').addEventListener('click', () => {
    note.remove();
    saveNotes();
  })

  //script to enable function of save
  note.querySelector('.save').addEventListener('click', () => {
    saveNotes();
  })
  note.querySelector('textarea').addEventListener('focusout', () => {
    saveNotes();
  })
  main.appendChild(note);
  saveNotes();
}
//function to show notes

const show = () => {
  const Lsnotes = JSON.parse(localStorage.getItem('notes'));
  if (Lsnotes === null) {
    addNote();
  }
  else {
    Lsnotes.forEach(
      (Lsnote) => {
        addNote(Lsnote)
      }
    )
  }


}
show()