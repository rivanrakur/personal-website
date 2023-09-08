import Typed from "typed.js";
import confetti from "canvas-confetti";

new Typed("#headingTyped", {
  strings: [
    "<i>Hey There!</i>",
    "I am a PHP Developer",
    "Full Stack Dev Soon!",
    "Thanks Devscale!",
  ],
  typeSpeed: 78,
  backSpeed: 90,
  cursorChar: "_",
  loop: true,
});

const form = document.getElementById("form");
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const myCanvas = document.createElement("canvas");
    document.body.appendChild(myCanvas);

    confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });
    confetti({
      particleCount: 400,
      spread: 260,
    });
    myCanvas.remove();
  }
});
