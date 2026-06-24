"use client";
import { useCallback, useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%.&+-*/=[]{}<>";

export function useTextScramble(trigger: boolean = true) {
  const [text, setText] = useState("");

  const scramble = useCallback((targetText: string, duration: number = 1.5) => {
    let isCanceled = false;
    const cyclesPerLetter = 3;
    const framesPerCycle = 2;
    
    let currentFrame = 0;
    const targetLength = targetText.length;
    
    const interval = setInterval(() => {
      if (isCanceled) return;

      let currentText = "";
      const lettersRevealed = Math.floor(currentFrame / (cyclesPerLetter * framesPerCycle));

      for (let i = 0; i < targetLength; i++) {
        if (i < lettersRevealed) {
          currentText += targetText[i];
        } else if (targetText[i] === " " || targetText[i] === "\n") {
          currentText += targetText[i];
        } else {
          currentText += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setText(currentText);
      currentFrame++;

      if (lettersRevealed >= targetLength) {
        setText(targetText);
        clearInterval(interval);
      }
    }, 20);

    return () => {
      isCanceled = true;
      clearInterval(interval);
    };
  }, []);

  return { text, scramble };
}