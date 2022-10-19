const addBtn = document.querySelector("#addBtn");
const main = document.querySelector('#main');
const saveNotes = ()=>{
    const notes = document.querySelectorAll('.note textarea');
    console.log(notes);
    const data = [];
        notes.forEach(
            (note)=>{
                data.push(note.value)
            }
            )
         console.log(data)
         if(data.length==0){
            localStorage.removeItem('notes')
         }else{
            localStorage.setItem('notes',JSON.stringify(data))
         }
        localStorage.setItem("notes",JSON.stringify(data))
}
addBtn.addEventListener('click', function(){
    
    addNote();
})

{/* <div class="note">
<div class="tool">
    <span class="material-symbols-outlined">
        file_download
        </span>
    <span class="material-symbols-outlined">
        delete
        </span>
</div>
<textarea name="" id="" cols="30" rows="10"></textarea>
</div> */}



const addNote=(text='')=>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = ` 
    <div class="tool">
    <span class="material-symbols-outlined">
eco
</span>
<span class="material-symbols-outlined">
eco
</span>
        <span class="save material-symbols-outlined">
            file_download
            </span>
        <span class="trash material-symbols-outlined">
            close
            </span>
    </div>
    <textarea name="" id="" cols="30" rows="10">${text}</textarea>
`;
note.querySelector('.trash').addEventListener('click',function(){
    note.remove();
    saveNotes();
})
note.querySelector('.save').addEventListener('click',function(){
   saveNotes();
})
main.appendChild(note);
saveNotes();

}

(
    function(){
        const notes = JSON.parse(localStorage.getItem("notes"));
        if(notes===null){
            addNote();
        }else{ 
        console.log(notes);
        notes.forEach((notes)=>{
            addNote(notes);
        

        })

    }}
)()