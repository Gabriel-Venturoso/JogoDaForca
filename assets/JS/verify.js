const button = document.querySelector("#submitLetter");
const inputLetter = document.querySelector("#letter")
const inputError = document.querySelector("#input-error");
const alreadyError = document.querySelector("#already-error");
const lives = document.querySelectorAll(".lives");
const usedLeters = document.querySelector(".used-letters");

button.onclick = () => {
    const spaces = document.querySelectorAll(".letter-space");
    let letter = inputLetter.value.toLowerCase();
    if (letter && !/[^a-zç]/.test(letter)){
        if (!usedLeters.textContent.includes(letter)){
            inputError.classList.add("hideDisplay");
            alreadyError.classList.add("hideDisplay");
            let haveLeter = false;
            for(space of spaces){
                if(letter == space.textContent){
                    haveLeter = true;
                    space.classList.remove("hide-letter");
                }
            }
            let haslives = false;
            for (live of lives){
                if (!live.classList.contains("hide-letter")){
                    haslives = true;
                }
            }
            if (haveLeter){
                verifyVictory(spaces);
            }else if(haslives){
                for (i in lives){
                    i = Number(i);
                    if(lives[i+1] == undefined || lives[i+1].classList.contains("hide-letter")){
                        lives[i].classList.add("hide-letter");
                        break;
                    }
                }
            }else{
                let firstLive = document.querySelector("#first-live");
                firstLive.classList.add("hide-letter");
                callPopUp("Você perdeu");
            }
            usedLeters.textContent += letter;
        }else{
            alreadyError.classList.remove("hideDisplay");
            inputLetter.value = "";
        }
    }else{
        inputError.classList.remove("hideDisplay");
    }
}

const verifyVictory = (spaces) => {
    let victory = true;
    for(space of spaces){
        if (space.classList.contains("hide-letter")){
            victory = false;
        }
    }
    if(victory){
        callPopUp("Parabéns, você ganhou!")
    }
}

const callPopUp = (message) => {
    const popUp = document.querySelector(".popUp");
    const victoryText = document.querySelector(".popUp p");
    popUp.classList.remove("hide");
    victoryText.classList.remove("hide");
    victoryText.textContent = message;
}