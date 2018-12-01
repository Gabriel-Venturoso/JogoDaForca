const getWord = () => {
    const popUp = document.querySelector(".popUp");
    const button = popUp.querySelector("#submitWord");
    const inputWord = popUp.querySelector("#word");
    const messageError = popUp.querySelector(".error");
    const popUpSection = popUp.querySelector("section");
    
    button.onclick = () => {
        let word = inputWord.value.toLowerCase();
        if(word && !/[^a-zç\s]/.test(word)){
            messageError.classList.add("hide");
            popUp.classList.add("hide");
            popUpSection.classList.add("hideDisplay");
            buildSpaces(word);
        }else{
            messageError.classList.remove("hide");
        }
    }
}

const buildSpaces = (word) => {
    const letters = document.querySelector(".letters");
    for (letter of word){
        if (/\s+/.test(letter)){
            let space = document.createElement("div");
            space.textContent = "-";
            letters.appendChild(space);
        }else{
            let space = document.createElement("div");
            space.classList.add("letter-space");
            space.classList.add("hide-letter");
            space.textContent = letter;
            letters.appendChild(space);
        }
    }
}

getWord();