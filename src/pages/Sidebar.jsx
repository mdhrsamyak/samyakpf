import { useState } from "react";
import { scrollToSection } from "../components/ScrollTo";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((prev) => !prev);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Samyak_Manandhar_Resume_2025.pdf";
    link.download = "Samyak_Manandhar_Resume_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="fixed top-5 right-2 z-1000 md:hidden">
        <button onClick={toggleSidebar} className="p-2 z-50">
          <div
            className={`w-6 h-0.5 bg-white transition-transform ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white my-1 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-transform ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`flex flex-col items-end gap-5 fixed top-10 right-0 px-10 h-screen 
      pointer-events-none transition-transform duration-500 z-1000 ${
        open ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0 md:flex md:flex-col gap-5 
        px-10`}
      >
        <div
          className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
          >
            <path
              d="M29.5312 14.5833C29.5312 14.344 29.484 14.1069 29.3924 13.8857C29.3008 13.6646 29.1665 13.4636 28.9972 13.2944C28.828 13.1251 28.627 12.9908 28.4058 12.8992C28.1847 12.8076 27.9476 12.7604 27.7082 12.7604C27.4689 12.7604 27.2318 12.8076 27.0106 12.8992C26.7895 12.9908 26.5885 13.1251 26.4192 13.2944C26.25 13.4636 26.1157 13.6646 26.0241 13.8857C25.9325 14.1069 25.8853 14.344 25.8853 14.5833H29.5312ZM9.1145 14.5833C9.1145 14.0999 8.92244 13.6362 8.58058 13.2944C8.23871 12.9525 7.77505 12.7604 7.29158 12.7604C6.80811 12.7604 6.34445 12.9525 6.00258 13.2944C5.66072 13.6362 5.46866 14.0999 5.46866 14.5833H9.1145ZM29.3357 18.7892C29.6777 19.1311 30.1414 19.3232 30.6249 19.3232C31.1084 19.3232 31.5722 19.1311 31.9141 18.7892C32.256 18.4473 32.4481 17.9835 32.4481 17.5C32.4481 17.0165 32.256 16.5528 31.9141 16.2108L29.3357 18.7892ZM17.4999 4.37501L18.7891 3.08585C18.6198 2.91652 18.4188 2.78221 18.1976 2.69056C17.9764 2.59892 17.7393 2.55176 17.4999 2.55176C17.2605 2.55176 17.0234 2.59892 16.8022 2.69056C16.581 2.78221 16.38 2.91652 16.2107 3.08585L17.4999 4.37501ZM3.08575 16.2108C2.74384 16.5528 2.55176 17.0165 2.55176 17.5C2.55176 17.9835 2.74384 18.4473 3.08575 18.7892C3.42766 19.1311 3.89138 19.3232 4.37491 19.3232C4.85845 19.3232 5.32217 19.1311 5.66408 18.7892L3.08575 16.2108ZM10.2082 32.4479H24.7916V28.8021H10.2082V32.4479ZM29.5312 27.7083V14.5833H25.8853V27.7083H29.5312ZM9.1145 27.7083V14.5833H5.46866V27.7083H9.1145ZM31.9141 16.2108L18.7891 3.08585L16.2107 5.66418L29.3357 18.7892L31.9141 16.2108ZM16.2107 3.08585L3.08575 16.2108L5.66408 18.7892L18.7891 5.66418L16.2107 3.08585ZM24.7916 32.4479C26.0486 32.4479 27.2541 31.9486 28.143 31.0597C29.0318 30.1709 29.5312 28.9654 29.5312 27.7083H25.8853C25.8853 27.9984 25.7701 28.2766 25.565 28.4817C25.3599 28.6869 25.0817 28.8021 24.7916 28.8021V32.4479ZM10.2082 28.8021C9.91817 28.8021 9.63997 28.6869 9.43485 28.4817C9.22973 28.2766 9.1145 27.9984 9.1145 27.7083H5.46866C5.46866 28.9654 5.96801 30.1709 6.85686 31.0597C7.7457 31.9486 8.95123 32.4479 10.2082 32.4479V28.8021Z"
              fill="black"
            />
          </svg>
          <p
            className="
            font-bold
            opacity-0 invisible pointer-events-none                       
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
          >
            Home
          </p>
        </div>

        <div
          className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => scrollToSection("project")}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
          >
            <path
              d="M5.83366 29.1668C5.03158 29.1668 4.34519 28.8815 3.77449 28.3108C3.2038 27.7401 2.91796 27.0532 2.91699 26.2502V8.75016C2.91699 7.94808 3.20283 7.26169 3.77449 6.691C4.34616 6.1203 5.03255 5.83447 5.83366 5.8335H13.3805C13.7694 5.8335 14.1403 5.90641 14.4932 6.05225C14.8462 6.19808 15.1558 6.40468 15.4222 6.67204L17.5003 8.75016H29.167C29.9691 8.75016 30.656 9.036 31.2276 9.60766C31.7993 10.1793 32.0846 10.8657 32.0837 11.6668V26.2502C32.0837 27.0522 31.7983 27.7391 31.2276 28.3108C30.6569 28.8825 29.97 29.1678 29.167 29.1668H5.83366ZM5.83366 26.2502H29.167V11.6668H16.2972L13.3805 8.75016H5.83366V26.2502Z"
              fill="black"
            />
          </svg>

          <p
            className="
            font-bold
            opacity-0 invisible pointer-events-none                       
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
          >
            Projects
          </p>
        </div>

        {/* <div className="h-16 w-16 rounded-full bg-white pointer-events-auto">
        S
      </div> */}
        <div
          className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          <svg
            width="35"
            height="28"
            viewBox="0 0 35 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
          >
            <path
              d="M17.6859 4.65937L12.3922 8.94688C11.5117 9.65781 11.3422 10.9375 12.0094 11.8508C12.7148 12.8242 14.0875 13.0156 15.0336 12.2773L20.4641 8.05547C20.8469 7.76016 21.3938 7.82578 21.6945 8.20859C21.9953 8.59141 21.9242 9.13828 21.5414 9.43906L20.3984 10.325L28 17.325V7H27.9617L27.7484 6.86328L23.7781 4.32031C22.9414 3.78437 21.9625 3.5 20.9672 3.5C19.775 3.5 18.6156 3.91016 17.6859 4.65937ZM18.9328 11.4625L16.1055 13.6609C14.3828 15.0063 11.8836 14.6563 10.593 12.8844C9.37891 11.2164 9.68516 8.88672 11.2875 7.59063L15.8375 3.91016C15.2031 3.64219 14.5195 3.50547 13.825 3.50547C12.7969 3.5 11.7961 3.80625 10.9375 4.375L7 7V19.25H8.54219L13.5406 23.8109C14.6125 24.7898 16.2695 24.7133 17.2484 23.6414C17.5492 23.3078 17.7516 22.9195 17.8555 22.5148L18.7852 23.368C19.8516 24.3469 21.5141 24.2758 22.493 23.2094C22.7391 22.9414 22.9195 22.6297 23.0344 22.307C24.0953 23.018 25.5391 22.8703 26.4305 21.8969C27.4094 20.8305 27.3383 19.168 26.2719 18.1891L18.9328 11.4625ZM0.875 7C0.39375 7 0 7.39375 0 7.875V19.25C0 20.218 0.782031 21 1.75 21H3.5C4.46797 21 5.25 20.218 5.25 19.25V7H0.875ZM2.625 17.5C2.85706 17.5 3.07962 17.5922 3.24372 17.7563C3.40781 17.9204 3.5 18.1429 3.5 18.375C3.5 18.6071 3.40781 18.8296 3.24372 18.9937C3.07962 19.1578 2.85706 19.25 2.625 19.25C2.39294 19.25 2.17038 19.1578 2.00628 18.9937C1.84219 18.8296 1.75 18.6071 1.75 18.375C1.75 18.1429 1.84219 17.9204 2.00628 17.7563C2.17038 17.5922 2.39294 17.5 2.625 17.5ZM29.75 7V19.25C29.75 20.218 30.532 21 31.5 21H33.25C34.218 21 35 20.218 35 19.25V7.875C35 7.39375 34.6063 7 34.125 7H29.75ZM31.5 18.375C31.5 18.1429 31.5922 17.9204 31.7563 17.7563C31.9204 17.5922 32.1429 17.5 32.375 17.5C32.6071 17.5 32.8296 17.5922 32.9937 17.7563C33.1578 17.9204 33.25 18.1429 33.25 18.375C33.25 18.6071 33.1578 18.8296 32.9937 18.9937C32.8296 19.1578 32.6071 19.25 32.375 19.25C32.1429 19.25 31.9204 19.1578 31.7563 18.9937C31.5922 18.8296 31.5 18.6071 31.5 18.375Z"
              fill="black"
            />
          </svg>

          <p
            className="
            font-bold
            opacity-0 invisible pointer-events-none                       
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
          >
            Contact
          </p>
        </div>
        <div
          className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={handleDownload}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
          >
            <path
              d="M18.959 13.1253H26.9798L18.959 5.10449V13.1253ZM8.75065 2.91699H20.4173L29.1673 11.667V29.167C29.1673 29.9405 28.86 30.6824 28.313 31.2294C27.7661 31.7764 27.0242 32.0837 26.2507 32.0837H8.75065C7.9771 32.0837 7.23524 31.7764 6.68826 31.2294C6.14128 30.6824 5.83398 29.9405 5.83398 29.167V5.83366C5.83398 4.21491 7.1319 2.91699 8.75065 2.91699ZM20.4173 29.167V27.7087C20.4173 25.7691 16.5236 24.792 14.584 24.792C12.6444 24.792 8.75065 25.7691 8.75065 27.7087V29.167H20.4173ZM14.584 17.5003C13.8104 17.5003 13.0686 17.8076 12.5216 18.3546C11.9746 18.9016 11.6673 19.6434 11.6673 20.417C11.6673 21.1905 11.9746 21.9324 12.5216 22.4794C13.0686 23.0264 13.8104 23.3337 14.584 23.3337C15.3575 23.3337 16.0994 23.0264 16.6464 22.4794C17.1934 21.9324 17.5007 21.1905 17.5007 20.417C17.5007 19.6434 17.1934 18.9016 16.6464 18.3546C16.0994 17.8076 15.3575 17.5003 14.584 17.5003Z"
              fill="black"
            />
          </svg>

          <p
            className="
            font-bold
            opacity-0 invisible pointer-events-none                       
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
          >
            Download CV
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
