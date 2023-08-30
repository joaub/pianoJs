const keys = document.querySelectorAll(".key");

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

