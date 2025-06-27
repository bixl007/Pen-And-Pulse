import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import { Nav } from "@/components/Nav";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import LandingButton from "@/components/LandingButton";
import ConditionalBlobCursor from "@/components/ConditionalBlobCursor";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";

const Landing = () => {

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <ConditionalBlobCursor
      blobType="circle"
      fillColor="#5227FF"
      trailCount={3}
      sizes={[60, 125, 75]}
      innerSizes={[20, 35, 25]}
      innerColor="rgba(255,255,255,0.8)"
      opacities={[0.6, 0.6, 0.6]}
      shadowColor="rgba(0,0,0,0.75)"
      shadowBlur={5}
      shadowOffsetX={10}
      shadowOffsetY={10}
      filterStdDeviation={30}
      useFilter={true}
      fastDuration={0.1}
      slowDuration={0.5}
      zIndex={100}
    >
      <div>
        <Nav />
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 px-4 md:px-8 py-6 max-w-screen-xl mx-auto">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <TrueFocus
              sentence="Blog Create Connect"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />

            <BlurText
              text="Discover, write, and share your voice with Pen-And-Pulse — where every story finds its reader."
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg md:text-2xl font-medium my-8 text-center md:text-left"
            />
            <div className="text-base md:text-lg font-semibold text-gray-600 mb-4 text-center md:text-left">
              A dynamic platform for writers and readers to connect. Seamless
              writing. Effortless discovery.
            </div>
            <LandingButton />
          </div>
          <div className="flex-1 flex justify-center">
            <img
              className="w-full max-w-xs md:max-w-md lg:max-w-lg"
              src="https://res.cloudinary.com/dqlku2tfk/image/upload/v1751039950/Illustration_1_ijqh6k.svg"
              alt="Pen and Pulse Illustration"
            />
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-2xl px-6 py-10 md:px-16 md:py-12 my-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4 flex-1">
              <div className="bg-red-100 rounded-full p-4 mb-2 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-gray-500">Users</p>
              </div>
            </div>
            <div className="hidden md:block border-l border-gray-200 h-20"></div>
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4 flex-1">
              <div className="bg-red-100 rounded-full p-4 mb-2 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold">30+</p>
                <p className="text-gray-500">Locations</p>
              </div>
            </div>
            <div className="hidden md:block border-l border-gray-200 h-20"></div>
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4 flex-1">
              <div className="bg-red-100 rounded-full p-4 mb-2 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-gray-500">Servers</p>
              </div>
            </div>
          </div>
        </div>
        <ScrollVelocity
          texts={["Pen & Pulse", "Scroll Down"]}
          className="custom-scroll-text"
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-4 md:px-8 py-10 max-w-screen-xl mx-auto">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              className="w-full max-w-xs md:max-w-md lg:max-w-lg"
              src="https://res.cloudinary.com/dqlku2tfk/image/upload/v1751042953/Illustration_2_h0lbvh.svg"
              alt="Pen and Pulse Illustration"
            />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center md:text-left">
              Powerful Tools for Writers and Readers
            </h2>
            <p className="text-gray-600 mb-6 text-center md:text-left max-w-lg">
              You can explore the features that Pen-And-Pulse provides to help
              you express ideas and dive into meaningful stories.
            </p>
            <ul className="space-y-4 w-full max-w-md">
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1.5 mr-3 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Seamless user login & registration
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1.5 mr-3 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Effortless blog writing & publishing
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1.5 mr-3 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Engage with your favorite writers
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1.5 mr-3 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">No specific time limits</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ConditionalBlobCursor>
  );
};

export default Landing;
