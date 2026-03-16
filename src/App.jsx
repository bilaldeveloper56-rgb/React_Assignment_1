import img from "../public/img.jpg";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="m-auto my-4 rounded flex px-3 py-3 flex-col gap-5 bg-gray-100">
        <h1 className="text-3xl font-bold">Muhammad Bilal Khan</h1>
        <p>
          I belong to Lakki Marwat. I currently completed Fsc in Darra Pezu in
          Jawad Medical Instituite. And nowaday i learning Mern Stack Developer
          Course in Peshawar in SMIT.
        </p>
        <h2 className="text-2xl font-bold">SKILLS</h2>
        <ul className="list-decimal leading-7 list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
        </ul>
        <footer className="bg-black text-white rounded p-3">
          <p>This is footer</p>
        </footer>
      </div>
      <div className=" w-90 border m-auto my-4 rounded flex px-3 py-3 flex-col gap-5 hover:shadow-2xl hover:cursor-pointer bg-gray-100">
        <h1 className="text-3xl font-bold">Muhammad Bilal Khan</h1>
        <p>
          I belong to Lakki Marwat. I currently completed Fsc in Darra Pezu in
          Jawad Medical Instituite. And nowaday i learning Mern Stack Developer
          Course in Peshawar in SMIT.
        </p>
        <h2 className="text-2xl font-bold">SKILLS</h2>
        <ul className="list-decimal leading-7 list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
        </ul>
        <footer className="bg-black text-white rounded p-3">
          <p>This is footer</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
