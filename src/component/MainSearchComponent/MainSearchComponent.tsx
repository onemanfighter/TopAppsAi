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
export default function MainSearchComponent(props: IMainSearchComponentProps) {
  return (
    <div className="flex flex-1 justify-center items-center">
      <input
        type="text"
        placeholder={"Search AI Apps, feature, tags, pricing etc."}
        className="bg-base-100 rounded-box w-full font-medium text-lg p-5  mr-2 outline drop-shadow-lg h-10 md:h-12 m-6 mt-28"
      />
    </div>
  );
}
