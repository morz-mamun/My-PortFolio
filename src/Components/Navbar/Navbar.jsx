import { Link, NavLink } from "react-router-dom";
import './navStyle.css'

const Navbar = () => {
    const navLinks = <>
    <li className="font-bold"><NavLink to={'/'} >Home</NavLink></li>
    <li className="font-bold"><NavLink to={'/about'}>About</NavLink></li>
    <li className="font-bold"><NavLink to={'/work'}>Work</NavLink></li>
    <li className="font-bold"><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to={'/'}><button className="hover:text-red-600">𝕄𝕆ℝ𝕊ℍ𝔼𝔻 <span className="text-warning font-bold">𝔸𝕃𝔸𝕄</span></button></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Lets Talk</a>
  </div>
</div>
    );
};

export default Navbar;