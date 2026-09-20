import Link from "next/link";

const Navbar = () => {
  // Here, used anchor tag <a></a>, thats refresh every page when click on link.
  /* const links = (
    <>
      <li>
        <a href="/docs">Docs</a>
      </li>

      <li>
        <a href="/showcase">Showcase</a>
      </li>

      <li>
        <a href="/about">About</a>
      </li>

      <li>
        <a href="/about/developer">Developer</a>
      </li>

      <li>
        <a href="/about/designer">Designer</a>
      </li>
    </>
  ); */

  // To solve this, refresh issue used Link
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/blogs">Blogs</Link>
      </li>

      <li>
        <Link href="/users">Users</Link>
      </li>

      <li>
        <details>
          <summary>About</summary>

          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/about/image">Image</Link>
            </li>

            <li>
              <Link href="/about/image/component">Image Properties</Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>

      <li>
        <Link href="/showcase">Showcase</Link>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <ul className="menu menu-horizontal px-1">{links}</ul>
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
