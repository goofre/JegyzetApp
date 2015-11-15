var addButton = document.getElementById("add");
var addTitle = document.getElementById("addtitle");
var addText = document.getElementById("addtxt");
var jegyzetek = document.getElementById("jegyzetek");
var titles=[];
var texts=[];
addButton.addEventListener("click",addNote,false);
function addNote(ev){
    ev.preventDefault();
    if (addTitle.value.length>=3 && addText.value.length>=3 ) {
        localStorage.setItem('n.title'+titles.push(addTitle.value),addTitle.value);
        localStorage.setItem('n.text'+texts.push(addText.value),addText.value);
        addText.value=null;
        addTitle.value=null;
        refreshNotes();
    }else{
        alert("Tölts ki minden mezőt!");
    }
    
}
function genHtml(id){
    return "<li><h1>"+titles[id]+"</h1><h2>"+texts[id]+"</h2></li>";
}
function refreshNotes(){
    if (titles.length>0) {
        jegyzetek.innerHTML=null;
        for(var i=0;i<titles.length;i++){
            jegyzetek.innerHTML=jegyzetek.innerHTML+genHtml(i);
        }
    }
}
function loadNotes(){
    var run=true;
    var i=1;
    while(run){
        if (localStorage.getItem("n.title"+i) && localStorage.getItem("n.text"+i) ) {
            titles.push(localStorage.getItem("n.title"+i));
            texts.push(localStorage.getItem("n.text"+i));
            i++;
        }else{
            run=false;
        }
    }
    refreshNotes();
}
loadNotes();