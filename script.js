// ==========================
// Romantic Date Website
// Part 3A
// ==========================

// CHANGE THIS NAME ANYTIME
const girlName = "Sarah";

document.getElementById("girlName").textContent = girlName;

const container = document.querySelector(".container");
const questionSection = document.getElementById("questionSection");
const dateSection = document.getElementById("dateSection");
const successSection = document.getElementById("successSection");

const startButton = document.getElementById("startButton");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const funnyText = document.getElementById("funnyText");

const popup = document.getElementById("popup");
const countdown = document.getElementById("countdown");

const messages = [
"Wait... 🥺",
"Think about it again ❤️",
"I'll buy dessert 🍰",
"I promise it'll be fun 🌹",
"Just one date 😊",
"You'll make me smile 💖"
];

let dodgeCount = 0;

// Open button
startButton.addEventListener("click", () => {

container.style.display = "none";
questionSection.style.display = "flex";

});

// Floating Hearts

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

const hearts = ["💖","💕","❤️","🌸","🌹"];

heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left = Math.random()*100+"vw";

heart.style.fontSize = (18+Math.random()*18)+"px";

heart.style.animationDuration = (6+Math.random()*6)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},12000);

}

setInterval(createHeart,400);

// Cute breathing animation
setInterval(()=>{

yesBtn.style.transform="scale(1.05)";

setTimeout(()=>{

yesBtn.style.transform="scale(1)";

},600);

},2000);
// ==========================
// Romantic Date Website
// Part 3B
// ==========================

// Playful No button

function moveButton() {

    const maxX = 220;
    const maxY = 180;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

}

function dodgeMessage() {

    funnyText.textContent =
        messages[Math.floor(Math.random() * messages.length)];

}

noBtn.addEventListener("mouseenter", () => {

    if (dodgeCount < 6) {

        moveButton();
        dodgeMessage();
        dodgeCount++;

    }

});

noBtn.addEventListener("touchstart", (e) => {

    if (dodgeCount < 6) {

        e.preventDefault();

        moveButton();
        dodgeMessage();

        dodgeCount++;

    }

});

// After several dodges, let her click No

noBtn.addEventListener("click", () => {

    if (dodgeCount < 6) return;

    popup.style.display = "flex";

    let seconds = 5;

    countdown.textContent = seconds;

    const timer = setInterval(() => {

        seconds--;

        countdown.textContent = seconds;

        if (seconds <= 0) {

            clearInterval(timer);

            popup.style.display = "none";

            alert(
`Thank you for being honest ❤️

Even though this wasn't the answer I hoped for,
I appreciate you taking the time to answer.

Have a wonderful day 🌹`
            );

        }

    }, 1000);

});
// ==========================
// Romantic Date Website
// Part 3C
// ==========================

// YES BUTTON

yesBtn.addEventListener("click", () => {

    questionSection.style.display = "none";
    dateSection.style.display = "flex";

    createConfetti();

});

// SUBMIT BUTTON

document.getElementById("submitBtn").addEventListener("click", () => {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const robot = document.getElementById("robot").checked;

    if (!date || !time) {

        alert("Please choose both a date and time ❤️");

        return;

    }

    if (!robot) {

        alert("Please verify that you're not a robot 🤖");

        return;

    }

    dateSection.style.display = "none";
    successSection.style.display = "flex";

    typeWriter();

});


// TYPEWRITER EFFECT

const finalMessage =
"You know... ❤️\n\nI was honestly a little nervous asking you this.\n\nThank you for saying YES.\n\nI genuinely can't wait to spend time with you. 🌹";

function typeWriter(){

const area = document.getElementById("typeMessage");

area.innerHTML="";

let i=0;

const timer=setInterval(()=>{

area.innerHTML+=finalMessage.charAt(i);

i++;

if(i>=finalMessage.length){

clearInterval(timer);

}

},45);

}



// CONFETTI

function createConfetti(){

const emojis=["💖","💕","❤️","🌸","✨","🥰","🌹"];

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.className="heart";

piece.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

piece.style.left=Math.random()*100+"vw";

piece.style.fontSize=(18+Math.random()*20)+"px";

piece.style.animationDuration=(3+Math.random()*3)+"s";

document.getElementById("hearts").appendChild(piece);

setTimeout(()=>{

piece.remove();

},7000);

}

}



// REPLAY BUTTON

document.getElementById("restart").addEventListener("click",()=>{

location.reload();

});
