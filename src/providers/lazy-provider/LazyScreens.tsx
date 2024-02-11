import { lazy } from "react";
import LazyComponentProvider from "./LazyComponents";

const HomeScreen = lazy(() => import("../../screens/home_screen/HomeScreen"));
const TopAppsScreen = lazy(
  () => import("../../screens/top_apps_screen/TopAppsScreen")
);
const CategoryScreen = lazy(
  () => import("../../screens/category_screen/CategoryScreen")
);
const NewsFeedsScreen = lazy(
  () => import("../../screens/feeds_screen/FeedsScreen")
);
const BlogScreen = lazy(() => import("../../screens/blog_screen/BlogScreen"));
const DetailsScreen = lazy(
  () => import("../../screens/details_creen/DetailsScreen")
);

// Static screens components.
const AboutScreen = lazy(() => import("../../screens/static_screen/About"));
const ContactScreen = lazy(() => import("../../screens/static_screen/Contact"));
const DisclaimerScreen = lazy(
  () => import("../../screens/static_screen/Disclaimer")
);
const FaqScreen = lazy(() => import("../../screens/static_screen/Faq"));
const PrivacyScreen = lazy(() => import("../../screens/static_screen/Privacy"));
const TermsScreen = lazy(() => import("../../screens/static_screen/Terms"));
const Error404 = lazy(() => import("../../screens/static_screen/404"));

/**
 * Component definition for the lazy home screen component.
 * @returns The LazyHomeScreenComponent component.
 */
export function LazyHomeScreenComponent() {
  return (
    <LazyComponentProvider>
      <HomeScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy top apps screen component.
 * @returns The LazyTopAppsScreenComponent component.
 */
export function LazyTopAppsScreenComponent() {
  return (
    <LazyComponentProvider>
      <TopAppsScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy category screen component.
 * @returns The LazyCategoryScreenComponent component.
 */
export function LazyCategoryScreenComponent() {
  return (
    <LazyComponentProvider>
      <CategoryScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy feeds screen component.
 * @returns The LazyFeedsScreenComponent component.
 */
export function LazyFeedsScreenComponent() {
  return (
    <LazyComponentProvider>
      <NewsFeedsScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy blog screen component.
 * @returns The LazyBlogScreenComponent component.
 */
export function LazyBlogScreenComponent() {
  return (
    <LazyComponentProvider>
      <BlogScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy details screen component.
 * @returns The LazyDetailsScreenComponent component.
 */
export function LazyDetailsScreenComponent() {
  return (
    <LazyComponentProvider>
      <DetailsScreen />
    </LazyComponentProvider>
  );
}

// Static screens.

/**
 * Component definition for the lazy about screen component.
 * @returns The LazyAboutScreenComponent component.
 */
export function LazyAboutScreenComponent() {
  return (
    <LazyComponentProvider>
      <AboutScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy contact screen component.
 * @returns The LazyContactScreenComponent component.
 */
export function LazyContactScreenComponent() {
  return (
    <LazyComponentProvider>
      <ContactScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy disclaimer screen component.
 * @returns The LazyDisclaimerScreenComponent component.
 */
export function LazyDisclaimerScreenComponent() {
  return (
    <LazyComponentProvider>
      <DisclaimerScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy faq screen component.
 * @returns The LazyFaqScreenComponent component.
 */
export function LazyFaqScreenComponent() {
  return (
    <LazyComponentProvider>
      <FaqScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy privacy screen component.
 * @returns The LazyPrivacyScreenComponent component.
 */
export function LazyPrivacyScreenComponent() {
  return (
    <LazyComponentProvider>
      <PrivacyScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy terms screen component.
 * @returns The LazyTermsScreenComponent component.
 */
export function LazyTermsScreenComponent() {
  return (
    <LazyComponentProvider>
      <TermsScreen />
    </LazyComponentProvider>
  );
}

/**
 * Component definition for the lazy 404 screen component.
 * @returns The Lazy404ScreenComponent component.
 */
export function Lazy404ScreenComponent() {
  return (
    <LazyComponentProvider>
      <Error404 />
    </LazyComponentProvider>
  );
}
