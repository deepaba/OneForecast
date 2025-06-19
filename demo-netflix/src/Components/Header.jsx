import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">One Forecast</h1>
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
        <li><Link to="/aboutus" className="hover:text-blue-300">About Us</Link></li>
        <li><Link to="/contactus" className="hover:text-blue-300">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Header;