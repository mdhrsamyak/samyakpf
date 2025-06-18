function Sidebar() {
  return (
    <div className="flex flex-col items-end gap-5 fixed top-10 right-0 px-10 h-screen pointer-events-none">
      <div className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out">
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

      <div className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out">
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

      <div className="h-16 w-16 rounded-full bg-white pointer-events-auto">
        S
      </div>
      <div className="h-16 w-16 rounded-full bg-white pointer-events-auto">
        S
      </div>
    </div>
  );
}

export default Sidebar;
