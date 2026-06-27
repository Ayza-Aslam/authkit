import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .navbar {
          width: 100%;
          background: #f0f2f5;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          font-family: 'Inter', sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-brand {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          letter-spacing: -0.4px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .navbar-brand-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #3b9fd8, #2980b9);
          border-radius: 50%;
          display: inline-block;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-links li a {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          background: transparent;
          border: 1.5px solid transparent;
          transition:
            background 0.18s,
            color 0.18s,
            border-color 0.18s,
            box-shadow 0.18s,
            transform 0.12s;
        }

        .navbar-links li a:hover {
          background: #ffffff;
          color: #1a1a2e;
          border-color: #e0e3e8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          transform: translateY(-1px);
        }

        .navbar-links li a.active-link,
        .navbar-links li a:active {
          background: linear-gradient(135deg, #3b9fd8, #2980b9);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 2px 8px rgba(59,159,216,0.3);
        }

        .navbar-links li.nav-cta a {
          background: linear-gradient(135deg, #3b9fd8, #2980b9);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 2px 8px rgba(59,159,216,0.3);
        }

        .navbar-links li.nav-cta a:hover {
          background: linear-gradient(135deg, #2e8ec4, #1e6fa0);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(59,159,216,0.4);
          transform: translateY(-1px);
        }
      `}</style>

      <nav className="navbar">
        <span className="navbar-brand">
        <span className="navbar-brand-dot" />
            AuthKit
        </span>

        <ul className="navbar-links">
          <li>
            <Link href="/login">Login</Link>
          </li>
          
          <li className="nav-cta">
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}