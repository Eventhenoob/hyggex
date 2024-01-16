import FaqSlider from "../components/FaqSlider";
import OptionsSlider from "../components/OptionsSlider";
import { HiOutlinePlusSmall } from "react-icons/hi2";
const FaqArr = [
  {
    heading: "can education flashcard be used for all age groups?",
    disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    heading: "How do education flash cards works?",
    disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    heading: "Can education flashcards be used for test preparation?",
    disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const RelationFactor = () => {
  return (
    <main className="pt-10 p-6">
      <h2 className="text-blue-950 font-bold text-4xl mt-4 bg-gradient-to-b from-blue-900 from-10% to-blue-700 text-transparent  bg-clip-text to-90%">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="flex justify-center w-full mt-10">
        <OptionsSlider />
      </div>

      <div className="flex mt-10 justify-between ">
        <div className=" flex items-center">
          <div className="p-4 rounded-full bg-slate-300 mr-3 drop-shadow-2xl ">
            <img
              src="/logo-trans.png"
              className="h-7 w-7  p-0 invert "
              alt="Logo"
            />
          </div>
          <div className="">
            <p className="text-[10px]">Published by</p>
            <span className="text-blue-900 font-main  text-xl">
              Hygge<span className="text-blue-950 font-bold">X</span>
            </span>
          </div>
        </div>
        <div className="">
          <button className="text-blue-950 justify-center items-center flex ">
            <span className="p-1  mr-2 flex bg-blue-800 rounded-full">
              <HiOutlinePlusSmall className="text-2xl font-bold text-white" />
            </span>
            <span className="font-bold">Create Flashcard</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-blue-900 mt-10 text-3xl font-bold">FAQ</h3>

        {FaqArr.map((faq) => (
          <FaqSlider title={faq.heading} desc={faq.disc} />
        ))}
      </div>
    </main>
  );
};

export default RelationFactor;
