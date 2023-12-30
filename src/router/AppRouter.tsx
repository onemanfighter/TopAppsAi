import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import {
  Lazy404ScreenComponent,
  LazyAboutScreenComponent,
  LazyBlogScreenComponent,
  LazyCategoryScreenComponent,
  LazyDetailsScreenComponent,
  LazyDisclaimerScreenComponent,
  LazyFaqScreenComponent,
  LazyHomeScreenComponent,
  LazyNewsfeedScreenComponent,
  LazyPrivacyScreenComponent,
  LazyTermsScreenComponent,
  LazyTopAppsScreenComponent,
} from "../Provider/LazyProvider/LazyScreens";

/**
 * Router for the application.
 */
export const AppRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<App />}>
      <Route path="" element={<LazyHomeScreenComponent />} />
      <Route path="top" element={<LazyTopAppsScreenComponent />} />
      <Route path="category" element={<LazyCategoryScreenComponent />} />
      <Route path="blog" element={<LazyBlogScreenComponent />} />
      <Route path="newsfeed" element={<LazyNewsfeedScreenComponent />} />
      <Route path="details" element={<LazyDetailsScreenComponent />}>
        <Route path=":id" element={<LazyDetailsScreenComponent />} />
      </Route>

      <Route path="contact" element={<LazyAboutScreenComponent />} />
      <Route path="faq" element={<LazyFaqScreenComponent />} />
      <Route path="terms" element={<LazyTermsScreenComponent />} />
      <Route path="privacy" element={<LazyPrivacyScreenComponent />} />
      <Route path="disclaimer" element={<LazyDisclaimerScreenComponent />} />
      <Route path="about" element={<LazyAboutScreenComponent />} />
      <Route path="*" element={<Lazy404ScreenComponent />} />
    </Route>
  )
);
