import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import {
  Lazy404ScreenComponent,
  LazyAboutScreenComponent,
  LazyBlogScreenComponent,
  LazyCategoryScreenComponent,
  LazyDetailsScreenComponent,
  LazyDisclaimerScreenComponent,
  LazyFaqScreenComponent,
  LazyHomeScreenComponent,
  LazyFeedsScreenComponent,
  LazyPrivacyScreenComponent,
  LazyTermsScreenComponent,
  LazyTopAppsScreenComponent,
} from "../providers/lazy-provider/LazyScreens";
import RootScreen from "../screens/root_screen/RootScreen";

/**
 * Router for the application.
 */
export const AppRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<RootScreen />}>
      <Route path="" element={<LazyHomeScreenComponent />} />
      <Route path="top" element={<LazyTopAppsScreenComponent />} />
      <Route path="category" element={<LazyCategoryScreenComponent />} />
      <Route path="blog" element={<LazyBlogScreenComponent />} />
      <Route path="feeds" element={<LazyFeedsScreenComponent />} />
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
