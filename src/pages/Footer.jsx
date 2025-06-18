import React from "react";

function Footer() {
  return (
    <div className="flex justify-between px-20 py-10 bg-black text-white font-extrabold">
      <div className="">Version: 2025</div>
      <div className="flex gap-10">
        <a href="https://www.instagram.com/samyak_mdhr/">Instagram</a>
        <a href="https://www.linkedin.com/in/samyak-manandhar-1a6248210/">
          LinkedIn
        </a>
        {/* <a href="https://www.instagram.com/samyak_mdhr/">Instagram</a> */}
      </div>
    </div>
  );
}

export default Footer;
