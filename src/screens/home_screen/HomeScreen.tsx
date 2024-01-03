/**
 * Proptypes for the home screen component.
 */
export interface IHomeScreenProps {}

/**
 * Component definition for the home screen component.
 * @param props The proptypes for the component.
 * @returns The HomeScreen component.
 */
export default function HomeScreen(props: IHomeScreenProps) {
  return (
    <div className="min-h-screen">
      <HeroComponent />
      <ContentComponent />
    </div>
  );
}

/**
 * Component definition for the hero component.
 * @returns The HeroComponent component.
 */
function HeroComponent() {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg)",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div
          className="max-w-md glass p-10 rounded-xl"
          style={{
            borderRadius: "45% 55% 54% 46% / 62% 28% 72% 38% ",
          }}
        >
          <h1 className="mb-5 text-5xl font-bold">TOP APPs POWERED BY AI</h1>
          <p className="mb-5">THE BEST AI POWERED WEB APPS</p>
          <button className="btn btn-primary">
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Component definition for the content component.
 * @returns The ContentComponent component.
 */
function ContentComponent() {
  return (
    <div
      className="min-h-screen -m-36 bg-base-300 z-20 drop-shadow-2xl"
      style={{
        borderRadius: "0% 100% 0% 100% / 100% 11% 89% 0%  ",
      }}
    ></div>
  );
}
