import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import ThemeProvider from "./providers/theme_provider/ThemeProvider";
import ReduxServiceProvider from "./providers/redux-service-provider/ReduxServiceProvider";

/**
 * Component definition for the App component.
 * @returns The App component.
 */
function App() {
  return (
    <ReduxServiceProvider>
      <ThemeProvider>
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </ReduxServiceProvider>
  );
}

export default App;
