import DropBounceText from "../components/DropBounceText";
import TypeAnimation from "../components/TypeAnimation";
import MagneticIcon from "../components/MagneticIcon";
import { scrollToSection } from "../components/ScrollTo";

function HomePage() {
  return (
    <div className="flex min-h-screen" id="home">
      <main className="flex-1 bg-[#181F20] text-white py-[10vh] ">
        <div className="flex flex-col justify-between md:px-36 px-5 h-full">
          {/* <h1 className="text-9xl font-bold">
              I AM <br />
              SAMYAK
            </h1> */}
          <div className="flex flex-col">
            <DropBounceText
              text={"I AM"}
              className={"md:text-9xl font-bold text-6xl"}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
            <DropBounceText
              text={"SAMYAK"}
              className={"md:text-9xl font-bold text-6xl"}
              delay={0.4}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
          </div>

          <div className="flex gap-35 md:justify-between md:flex-row md:gap-0 flex-col ">
            <div className="flex flex-col items-center md:items-start ">
              <TypeAnimation className="text-xl mb-8 max-w-lg">
                I DEVELOP DESIGNS INTO A <br />
                WORKING WEBSITE FOR PEOPLE AND <br />
                HELP TO GROW THEIR BUSINEESS
              </TypeAnimation>

              <MagneticIcon>
                <button
                  className="bg-white text-black font-extrabold py-3 px-4 shadow-[0_10px_30px_rgba(255,0,0,0.5)]  rounded outline-none cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=manandharsamyak7@gmail.com&su=New%20Project%20Inquiry&body=Name%3A%0AOrganization%20Name%3A%0APhone%20Number%3A%0A%0AAbout%20the%20project%3A",
                      "_blank"
                    )
                  }
                >
                  START A PROJECT
                </button>
              </MagneticIcon>
            </div>

            <div className="flex flex-col w-full items-end md:items-start  md:w-auto">
              <DropBounceText
                text={"FRONTEND"}
                className={"md:text-9xl font-bold text-6xl"}
                delay={0.6}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              />
              <DropBounceText
                text={"DEV"}
                className={"md:text-9xl font-bold text-6xl"}
                delay={0.8}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
