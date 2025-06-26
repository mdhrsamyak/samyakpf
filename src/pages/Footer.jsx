function Footer() {
  return (
    <div className="relative overflow-hidden bg-[#181F20] text-white font-extrabold">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start  md:px-20 py-10 h-full">
        <div>Version: 2025</div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <a
            href="https://www.instagram.com/samyak_mdhr/"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/samyak-manandhar-1a6248210/"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <span className="hover:text-gray-400 cursor-default">
            manandharsamyak7@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
