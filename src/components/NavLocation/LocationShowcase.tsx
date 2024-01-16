import { GrHomeRounded } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  locations: string[];
}
const LocationShowcase = ({ locations }: Props) => {
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <GrHomeRounded className="" />
      {locations.map((location, index) => (
        <span className="flex items-center">
          {" "}
          <MdKeyboardArrowRight className="text-blue-950" />
          <span
            className={
              "" +
              (index === locations.length - 1 && " font-bold text-blue-950")
            }
          >
            {location}
          </span>
        </span>
      ))}
    </div>
  );
};

export default LocationShowcase;
