/**
 * Props types for the SearchComponent component.
 */
export interface ISearchComponentProps {}

/**
 * Component definition for the SearchComponent component.
 *
 * @param props The properties for the search component.
 * @returns The SearchComponent component.
 * 
 * use this snippet to launch a search component.
 * onClick={() => document.getElementById("my_modal_2").showModal()}

 */
export default function SearchComponent(props: ISearchComponentProps) {
  return (
    <>
      <label htmlFor="my_modal_6" className="">
        <div
          className={`btn btn-ghost btn-circle hover:scale-110 ml-1 drop-shadow-lg aria-pressed:scale-95`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle " />
      <div className="modal h-screen w-screen " role="dialog">
        <div className="modal-box h-3/4 text-center rounded-sm">
          <h3 className="font-bold text-lg mb-10">Search AI Apps</h3>
          <input
            type="text"
            placeholder={"Search AI Apps, feature, tags, pricing etc."}
            className="bg-base-100 rounded-box w-full p-2  mr-2 md:block hidden outline drop-shadow-lg"
          />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_6">
          Close
        </label>
      </div>
    </>
  );
}
