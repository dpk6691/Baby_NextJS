import { useEffect, useRef } from "react";
import India from "./../../../pages/api/India";

const ParticleAnimation = () => {
  const { IndiaData } = India();
  const canvasRef = useRef(null);

  console.log(IndiaData);

  useEffect(() => {
    const namesByLetter = {};

    // Process IndiaData to categorize names by their first letter
    IndiaData.forEach((nameObj) => {
      if (nameObj && nameObj.name) {
        // Change from nameObj.Name to nameObj.name
        const firstLetter = nameObj.name[0].toLowerCase(); // Change from nameObj.Name to nameObj.name
        if (!namesByLetter[firstLetter]) {
          namesByLetter[firstLetter] = [];
        }
        namesByLetter[firstLetter].push(nameObj.name); // Change from nameObj.Name to nameObj.name
      }
    });

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const selectedNames = [];

    // Randomly select names from each category
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

    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");

    const w = window.innerWidth;
    const h = window.innerHeight / 3;
    canvas.width = w;
    canvas.height = h;

    selectedNames.forEach((name) => {
      string_handle(name, words, tempContext, w, h);
    });

    if (canvas.getContext) {
      const c = canvas.getContext("2d");

      function animation() {
        c.clearRect(0, 0, w, h);

        const wordKeys = Object.keys(words);
        wordKeys.sort((a, b) => {
          const wordA = words[a];
          const wordB = words[b];
          const colorOrder =
            getColorOrder(wordA.color) - getColorOrder(wordB.color);
          if (colorOrder !== 0) return colorOrder;
          return wordB.text.length - wordA.text.length;
        });

        for (let i = 0; i < wordKeys.length; i++) {
          const word = words[wordKeys[i]];
          c.font = word.font;
          c.fillStyle = word.color;
          c.fillText(word.text, word.x, word.y);
          c.strokeStyle = word.color;
          c.strokeText(word.text, word.x, word.y);
        }
        move();
      }

      function getColorOrder(color) {
        if (color === "rgb(244 114 182)") return 30;
        else if (color === "rgb(249 168 212)") return 20;
        else if (color === "rgb(251 207 232)") return 10;
        else return 0;
      }

      function move() {
        for (const key in words) {
          const word = words[key];
          if (word.direction === 1) {
            if (word.x > w) {
              word.x = -word.width;
            } else {
              word.x += word.speed;
            }
          } else {
            if (word.x < -word.width) {
              word.x = w;
            } else {
              word.x -= word.speed;
            }
          }
        }
      }

      const intervalId = setInterval(() => {
        animation();
      }, 24);

      return () => clearInterval(intervalId);
    }

    function string_handle(str, words, tempContext, canvasWidth, canvasHeight) {
      if (typeof str !== "string") {
        return;
      }

      const split_str = str.split(" ");
      for (let i = 0; i < split_str.length; i++) {
        const word = split_str[i];
        let fontSize, color;
        if (word.length >= 8) {
          fontSize = Math.floor(Math.random() * 20) + 10;
          color = "rgb(251, 207, 232)"; // Corrected color format
        } else if (word.length >= 6) {
          fontSize = Math.floor(Math.random() * 30) + 20;
          color = "rgb(249, 168, 212)"; // Corrected color format
        } else {
          fontSize = Math.floor(Math.random() * 40) + 30;
          color = "rgb(244, 114, 182)"; // Corrected color format
        }
        const speed = Math.random() * 2 + 0.5;

        tempContext.font = `${fontSize}px Arial`;
        const width = tempContext.measureText(word).width;

        const maxY = canvasHeight - fontSize;

        const x = Math.random() * (canvasWidth - width);
        const y = Math.random() * (maxY - fontSize) + fontSize;

        words[word] = {
          text: word,
          x: x,
          y: y,
          font: `${fontSize}px Arial`,
          speed: speed,
          direction: Math.random() < 0.5 ? -1 : 1,
          color: color,
          width: width,
        };
      }
    }
  }, [IndiaData]); // Added IndiaData as dependency

  return <canvas className="bg-pink-50" ref={canvasRef} id="c"></canvas>;
};

export default ParticleAnimation;
