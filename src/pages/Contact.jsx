import React, { useState } from "react";
import MagneticIcon from "../components/MagneticIcon";

function Contact() {
  // const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div
        className="flex flex-col py-[10vh] px-5 md:px-36 bg-black text-white"
        id="contact"
      >
        <div className="text-6xl md:text-9xl font-extrabold">
          Let's <br />
          work together
        </div>
        <div className="relative w-full py-40">
          <div className=" h-0.5 w-full bg-gray-500"></div>
          <MagneticIcon>
            <button
              className="absolute top-1/2 right-40 -translate-y-1/2 w-35 h-35 md:w-50 md:h-50 bg-white text-black font-extrabold shadow-[0_10px_30px_rgba(255,0,0,0.5)] rounded-full cursor-pointer"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=manandharsamyak7@gmail.com&su=New%20Project%20Inquiry&body=Name%3A%0AOrganization%20Name%3A%0APhone%20Number%3A%0A%0AAbout%20the%20project%3A",
                  "_blank"
                )
              }
            >
              Get in touch
            </button>
          </MagneticIcon>
        </div>
        {/* {showForm && ( */}
        {/* <div className="flex">
          <div className="flex flex-col">

          </div>
        </div> */}
        {/* )} */}
      </div>
    </>
  );
}

export default Contact;
