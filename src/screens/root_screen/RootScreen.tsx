import { Outlet } from "react-router-dom";
import FooterComponent from "../../component/footer/FooterComponent";
import NavbarComponent from "../../component/navbar/NavbarComponent";

/**
 * Props for the root screen component.
 */
export interface IRootScreenProps {}

export default function RootScreen(props: IRootScreenProps) {
  return (
    <div>
      <div className="sticky top-0 z-50 flex-col flex">
        <NavbarComponent />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
