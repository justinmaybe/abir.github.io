// Typing effect
const quoteText = "MY BRAIN RUNS FASTER THAN THE COMPUTER.";
let i = 0;
const speed = 80;
function typeWriter() {
  if (i < quoteText.length) {
    document.getElementById("quote").innerHTML += quoteText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Funny avatar spin and alert
const avatar = document.getElementById("avatar");
const funnyMessages = [
  "Detective mode: ON 🕵️‍♂️",
  "Stop staring at me 🐱",
  "Hacked your brain... just kidding!",
  "Did you just try to pet me?",
  "I’m watching you 👁️👁️"
];

avatar.addEventListener("click", () => {
  avatar.style.transition = "transform 1s";
  avatar.style.transform = "rotate(360deg)";
  setTimeout(() => {
    avatar.style.transform = "rotate(0deg)";
    alert(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
  }, 1000);
});
