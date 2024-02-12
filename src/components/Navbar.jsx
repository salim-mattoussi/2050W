import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <header className="flex justify-between items-center sm:px-2 px-2 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 " >
        <NavLink to="/" className="w-14 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="bg-gradient-to-r from-[#3b82f6] to-[#172554] bg-clip-text text-transparent">2050W</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            
            <NavLink to="/exemples" className={({ isActive})=> isActive ? 'text-blue-950':'text-white'}>
                Exemples
            </NavLink>
            <NavLink to="/contact" className={({ isActive})=> isActive ? 'text-blue-950':'text-white'}>
                Contact
            </NavLink>
            

        </nav>

    </header>
  )
}

export default Navbar