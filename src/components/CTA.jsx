import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <div className="fixed inset-0  ">
      <section
        className="flex w-full h-full flex-col items-center justify-center pl-0
    duration-500 " 
      >
        <div className="h-[66%]"></div>
        <NavLink
          to="/contact"
          className="w-18 h-10 rounded-lg  items-center justify-center flex font-bold shadow-md"
        >
          <p className="pointer-events-auto py-4 px-8 bg-white text-blue-700 rounded-full hover:bg-blue-500 cursor-pointer transition-colors duration-500 hover:text-black" >
            Contact US
          </p>
        </NavLink>
      </section>
    </div>
  );
};

export default CTA;
