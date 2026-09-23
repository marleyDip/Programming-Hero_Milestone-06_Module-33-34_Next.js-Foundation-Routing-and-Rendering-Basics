import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/blogs">Blogs</NavLink>
      </li>

      <li>
        <NavLink href="/foods">Foods</NavLink>
      </li>

      <li>
        <NavLink href="/users">Users</NavLink>
      </li>

      <li>
        <details>
          <summary>About</summary>

          <ul className="space-y-2">
            <li>
              <NavLink href="/about">About</NavLink>
            </li>

            <li>
              <NavLink href="/about/image">Image</NavLink>
            </li>

            <li>
              <NavLink href="/about/image/component">Image Properties</NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink href="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-1.5"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl">
          Marley Dip
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1.5">{links}</ul>
      </div>

      {/* Navbar End - anchor tag navigates somewhere and if inside this site, used Link */}
      <div className="navbar-end">
        {/* <a className="btn">Button</a> */}
        <input
          type="text"
          placeholder="Search"
          className="input w-64 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Navbar;
