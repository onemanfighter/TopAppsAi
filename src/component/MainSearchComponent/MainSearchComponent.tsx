import { useState } from "react";
import ComponentWithCategories from "./SubComponent/CategoryComponent";

/**
 * Proptypes for the MainSearchComponent component.
 */
export interface IMainSearchComponentProps {}

/**
 * Component definition for the MainSearchComponent component.
 *
 * @param props The proptypes for the component.
 * @returns The MainSearchComponent component.
 */
export default function xMainSearchComponent(props: IMainSearchComponentProps) {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <div className="flex flex-row w-full justify-center items-center mt-20">
        <HiddenRadioComponent title={"All"} />
        <HiddenRadioComponent title={"Free"} />
        <HiddenRadioComponent title={"Freemium"} />
        <HiddenRadioComponent title={"Pricing"} />
        <HiddenRadioComponent title={"Paid"} />
        <HiddenRadioComponent title={"Contact for pricing"} />
      </div>
      <input
        type="text"
        placeholder={"Search AI Apps, feature, tags, pricing etc."}
        className="bg-base-100 rounded-box flex-1 w-full p-3 font-medium text-lg outline drop-shadow-lg h-10 md:h-12 m-6 mt-28"
      />
      <div className="">
        <ComponentWithCategories />
      </div>
    </div>
  );
}

interface IHiddenRadioComponentProps {
  title: string;
}

/**
 * Component definition for the HiddenRadioComponent component.
 *
 *
 * @returns The HiddenRadioComponent component.
 */
function HiddenRadioComponent(props: IHiddenRadioComponentProps) {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  return (
    <div className="main_search_component">
      <label
        className={`label cursor-pointer p-0 mx-1 rounded-2xl  outline hover:bg-primary hover:text-lg text-white hover:scale-110 transition-all duration-200 ${
          checked ? `bg-primary` : `bg-inherit`
        }`}
      >
        <span
          className={`label-text p-2 min-w-16 text-center selection:bg-black hover:text-white transition-colors duration-300 ${
            checked ? ` text-white` : `text-black`
          }`}
        >
          {props.title}
        </span>
        <input
          type="radio"
          name="radio-1"
          className="radio radio-primary hidden "
          checked={checked}
          onClick={() => setChecked((prev) => !prev)}
        />
      </label>
    </div>
  );
}
