import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

/**
 * Component definition for the App component.
 * @returns The App component.
 */
function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
