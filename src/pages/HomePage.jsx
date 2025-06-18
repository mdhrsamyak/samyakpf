import DropBounceText from "../components/DropBounceText";
import TypeAnimation from "../components/TypeAnimation";
import MagneticIcon from "../components/MagneticIcon";

function HomePage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 bg-black text-white py-[10vh]">
        <div className="flex flex-col justify-between px-36 h-full">
          {/* <h1 className="text-9xl font-bold">
              I AM <br />
              SAMYAK
            </h1> */}
          <div className="flex flex-col">
            <DropBounceText
              text={"I AM"}
              className={"text-9xl font-bold"}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
            <DropBounceText
              text={"SAMYAK"}
              className={"text-9xl font-bold"}
              delay={0.4}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <TypeAnimation className="text-xl mb-8 max-w-lg">
                I DEVELOP DESIGNS INTO A <br />
                WORKING WEBSITE FOR PEOPLE AND <br />
                HELP TO GROW THEIR BUSINEESS
              </TypeAnimation>

              <MagneticIcon>
                <button className="bg-white text-black font-extrabold py-3 max-w-[200px] shadow-[0_10px_30px_rgba(255,0,0,0.5)]  rounded outline-none cursor-pointer hover:bg-gray-200">
                  START A PROJECT
                </button>
              </MagneticIcon>
            </div>

            <div className="flex flex-col">
              <DropBounceText
                text={"FRONTEND"}
                className={"text-9xl font-bold"}
                delay={0.6}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              />
              <DropBounceText
                text={"DEV"}
                className={"text-9xl font-bold"}
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
