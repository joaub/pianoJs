const keys = document.querySelectorAll(".key");
const notesArray = ["Do","Re","Mi","Fa","Sol","La","Si"];

document.onkeydown = (key) => {
    if(key.key <= 7 && key.key >= 1) {
        let pressedKey = notesArray[key.key - 1];/*almaceno la llave*/
        playNote(pressedKey); 
        let div = Array.from(keys)[key.key -1];
        div.classList.add("pressed");
    }
}

document.onkeyup = () => {
    keys.forEach((key)=>{key.classList.remove("pressed")});
}

keys.forEach(key => {
    key.addEventListener("click", function() {
        const note = this.getAttribute("data-note");      
        playNote(note);
        
    });
});

function playNote(note){
    const audio = new Audio("notes/" + note + ".mp3");
    audio.play();
}

