import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
interface Props {
  title: string;
  desc: string;
}

const FaqSlider = ({ title, desc }: Props) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowDesc((prev) => !prev)}
        className="rounded-md w-full p-2 border-2 flex justify-between border-blue-900"
      >
        {title} {!showDesc ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>

      {showDesc && (
        <p className="mt-2 bg-slate-200 p-3 rounded-md w-full">{desc}</p>
      )}
    </div>
  );
};

export default FaqSlider;
