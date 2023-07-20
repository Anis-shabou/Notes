let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notes');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
let date=document.querySelector("#date")
let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=desc.value;
    let dateval=date.value;
    if(obj){
        titleval=obj.title;
        descVal=obj.desc;
        dateval=obj.date;
    }
    if(titleval){
        card.innerHTML=`<h3>${titleval}</h3>
        <h5>${dateval}</h5>
                                    <p class="ptag">${descVal}</p>
                             <button class="del"><i class='bx bxs-trash-alt'></i>Delete</button>
                             `;
        notesElem.appendChild(card);
        updateLs()
    }
    let del=card.querySelector(".del");
    del.addEventListener('click', ()=>{
        card.remove();
        updateLs();
    })
}







function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText,
            date:element.children[2].innerText
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}

function addnote(){
 document.querySelector(".add").style.display="block"
}
function hide(){
 document.querySelector(".add").style.display="none";
}