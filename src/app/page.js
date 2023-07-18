"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <main>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input id="randomText" />
        <label htmlFor="specificText">Enter Specific Text: </label>
        <input id="specificText" />
        <input
          value="AUDI Q5"
          onChange={() => {
            console.log("ironman");
          }}
        />
      </div>
      <button
        onClick={() =>
          setTimeout(() => {
            setShowText(!showText);
          }, 1100)
        }
      >
        Show Text
      </button>
      {showText && <span>This is the text!</span>}
    </main>
  );
}
