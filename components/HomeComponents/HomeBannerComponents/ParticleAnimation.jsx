import { useEffect, useRef } from "react";
import India from "./../../../pages/api/India";

const ParticleAnimation = () => {
  const { IndiaData, isLoading } = India();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const namesByLetter = {};
    if (IndiaData && IndiaData.length > 0) {
      IndiaData.forEach((nameObj) => {
        if (nameObj && nameObj.name) {
          const firstLetter = nameObj.name[0].toLowerCase();
          if (!namesByLetter[firstLetter]) {
            namesByLetter[firstLetter] = [];
          }
          namesByLetter[firstLetter].push(nameObj.name);
        }
      });
    }

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

    const w = window.innerWidth;
    const h = window.innerHeight / 3;
    canvas.width = w;
    canvas.height = h;

    selectedNames.forEach((name) => {
      string_handle(name, words, context, w, h);
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

    function string_handle(str, words, context, canvasWidth, canvasHeight) {
      if (typeof str !== "string") {
        return;
      }

      const split_str = str.split(" ");
      for (let i = 0; i < split_str.length; i++) {
        const word = split_str[i];
        let fontSize, color;
        if (word.length >= 8) {
          fontSize = Math.floor(Math.random() * 20) + 10;
          color = "rgb(251, 207, 232)";
        } else if (word.length >= 6) {
          fontSize = Math.floor(Math.random() * 30) + 20;
          color = "rgb(249, 168, 212)";
        } else {
          fontSize = Math.floor(Math.random() * 40) + 30;
          color = "rgb(244, 114, 182)";
        }
        const speed = Math.random() * 2 + 0.5;

        context.font = `${fontSize}px Arial`;
        const width = context.measureText(word).width;

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
  }, [IndiaData]);

  return (
    <div className="relative">
      <div
        className={`bg-blue-50 grid text-center animate-pulse  place-items-center ${
          isLoading ? "animate-fade-in" : "animate-fade-out"
        } w-full text-pink-500 text-4xl font-black h-[33vh] transition-opacity duration-1000`}
      >
        Worlds Laregest Baby Name Collection
      </div>
      <canvas
        className={`bg-blue-50 ${
          isLoading ? "animate-fade-out" : "animate-fade-in"
        } transition-opacity duration-1000 absolute top-0 left-0`}
        style={{ opacity: isLoading ? 0 : 1 }}
        ref={canvasRef}
        id="c"
      ></canvas>
    </div>
  );
};

export default ParticleAnimation;
