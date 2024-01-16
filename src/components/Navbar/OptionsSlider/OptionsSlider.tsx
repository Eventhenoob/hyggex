import { useState } from "react";
import Player from "../../Player";

const OptionsSlider = () => {
  const [currentSelected, setCurrentSelected] = useState(0);
  return (
    <div className="w-full flex flex-col items-center shrink-0">
      <ul className="flex justify-center font-main gap-5">
        <li
          className={
            "text-blue-950 transition-all duration-300 " +
            (currentSelected === 0 && "border-b-2 font-bold border-blue-950")
          }
        >
          <button
            onClick={() => setCurrentSelected(0)}
            className=""
            type="button"
          >
            Study
          </button>
        </li>

        <li
          className={
            "text-blue-950 transition-all duration-300 " +
            (currentSelected === 1 && " font-bold border-b-2 border-blue-950")
          }
        >
          <button
            onClick={() => setCurrentSelected(1)}
            className=""
            type="button"
          >
            Quiz
          </button>
        </li>

        <li
          className={
            "text-blue-950 transition-all duration-300 " +
            (currentSelected === 2 && "font-bold border-b-2 border-blue-950")
          }
        >
          <button
            onClick={() => setCurrentSelected(2)}
            className=""
            type="button"
          >
            Test
          </button>
        </li>

        <li
          className={
            "text-blue-950 transition-all duration-300 " +
            (currentSelected === 3 && "font-bold border-b-2 border-blue-950")
          }
        >
          <button
            onClick={() => setCurrentSelected(3)}
            className=""
            type="button"
          >
            Game
          </button>
        </li>

        <li
          className={
            "text-blue-950 transition-all duration-300 " +
            (currentSelected === 4 && "font-bold border-b-2 border-blue-950")
          }
        >
          <button
            onClick={() => setCurrentSelected(4)}
            className=""
            type="button"
          >
            Others
          </button>
        </li>
      </ul>

      <div className="w-[40rem] ">
        <Player />
      </div>
    </div>
  );
};

export default OptionsSlider;
