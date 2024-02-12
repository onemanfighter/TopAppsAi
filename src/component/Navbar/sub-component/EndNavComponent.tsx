import { useDispatch, useSelector } from "react-redux";
import SearchComponent from "../../search-component/SearchComponent";
import { useEffect, useState } from "react";
import { RootState } from "../../../store/Store";
import { Theme, setTheme } from "../../../store/slices/ThemeSlice";

export interface IEndNavComponentProps {}

export default function EndNavComponent(props: IEndNavComponentProps) {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.theme);
  const [themeCheckState, setThemeCheckState] = useState(
    themeState.theme === Theme.DARK ? true : false
  );

  useEffect(() => {
    if (themeCheckState) {
      dispatch(setTheme({ theme: Theme.DARK }));
    } else {
      dispatch(setTheme({ theme: Theme.LIGHT }));
    }
  }, [dispatch, themeCheckState]);
  return (
    <div className="navbar-end">
      <div className="dropdown">
        <SearchComponent />
      </div>
      <button className="btn btn-ghost btn-circle hover:scale-110 drop-shadow-lg mx-1 aria-pressed:scale-95">
        <div className="px-2">
          <input
            checked={themeCheckState}
            type="checkbox"
            value="night"
            onChange={(e: any) => {
              setThemeCheckState((prev) => !prev);
            }}
            className=" toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          />
        </div>
      </button>
    </div>
  );
}
