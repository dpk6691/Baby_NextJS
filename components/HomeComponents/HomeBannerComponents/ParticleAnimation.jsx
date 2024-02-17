import { useEffect, useRef } from "react";
import India from "./../../../pages/api/decrypt";

const ParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const namesByLetter = {};

    if (India && typeof India === "object") {
      for (const culture in India) {
        if (Array.isArray(India[culture]) && India[culture].length > 0) {
          India[culture].forEach((nameObj) => {
            if (nameObj && nameObj.Name) {
              const firstLetter = nameObj.Name[0].toLowerCase();
              if (!namesByLetter[firstLetter]) {
                namesByLetter[firstLetter] = [];
              }
              namesByLetter[firstLetter].push(nameObj.Name);
            }
          });
        }
      }
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const selectedNames = [];

    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      const namesStartingWithLetter = namesByLetter[letter];
      if (namesStartingWithLetter && namesStartingWithLetter.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * namesStartingWithLetter.length
        );
        selectedNames.push(namesStartingWithLetter[randomIndex]);
      }
    }

    const words = {};

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const w = window.innerWidth;
    const h = window.innerHeight / 3;
    canvas.width = w;
    canvas.height = h;

    selectedNames.forEach((name) => {
      string_handle(name, words, w, h);
    });

    if (canvas.getContext) {
      const c = canvas.getContext("2d");

      function animation() {
        const wordKeys = Object.keys(words);
        for (let i = wordKeys.length - 1; i >= 0; i--) {
          const word = words[wordKeys[i]];
          c.font = word.font;
          c.fillStyle = word.color; // Set fill color based on word color
          c.fillText(word.text, word.x, word.y);
          c.strokeStyle = word.color; // Set stroke color based on word color
          c.strokeText(word.text, word.x, word.y); // Add stroke for better visibility
        }
        move();
      }

      function move() {
        for (const key in words) {
          const word = words[key];
          if (word.direction === 1) {
            if (word.x > w) {
              word.x = -Math.random() * 100; // Start from the left side of the canvas
              word.y = Math.random() * h;
            } else {
              word.x += word.speed; // Move from left to right
            }
          } else {
            if (word.x < -100) {
              word.x = w; // Start from the right side of the canvas
              word.y = Math.random() * h;
            } else {
              word.x -= word.speed; // Move from right to left
            }
          }
        }
      }

      const intervalId = setInterval(() => {
        c.clearRect(0, 0, w, h);
        animation();
      }, 24);

      return () => clearInterval(intervalId);
    }

    function string_handle(str, words) {
      if (typeof str !== "string") {
        return;
      }

      const split_str = str.split(" ");
      for (let i = 0; i < split_str.length; i++) {
        const word = split_str[i];
        let fontSize, color;
        if (word.length <= 5) {
          fontSize = Math.floor(Math.random() * 20) + 10; // Small font size
          color = "rgb(51 65 85)"; // Small font color
        } else if (word.length <= 8) {
          fontSize = Math.floor(Math.random() * 30) + 20; // Medium font size
          color = "rgb(100 116 139)"; // Medium font color
        } else {
          fontSize = Math.floor(Math.random() * 40) + 30; // Large font size
          color = "rgb(148 163 184)"; // Large font color
        }
        const speed = Math.random() * 2 + 0.5;

        words[word] = {
          text: word,
          x: Math.random() * w,
          y: Math.random() * h,
          font: `${fontSize}px Arial`,
          speed: speed,
          direction: Math.random() < 0.5 ? -1 : 1,
          color: color,
        };
      }
    }
  }, []);

  return <canvas className="bg-slate-900" ref={canvasRef} id="c"></canvas>;
};

export default ParticleAnimation;
