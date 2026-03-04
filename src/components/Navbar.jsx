import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white z-50 shadow-lg">
      <div className="px-6 md:px-12 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl tracking-[0.3em] font-light hover:text-red-600 transition"
        >
          VELVÉ
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-sm tracking-widest">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <Link to="/fragrances" className="hover:text-red-600 transition">Fragrances</Link>
          <Link to="/accessories" className="hover:text-red-600 transition">Accessories</Link>
          <Link to="/collections" className="hover:text-red-600 transition">Collections</Link>
          <Link to="/about" className="hover:text-red-600 transition">About</Link>
          <Link to="/cart" className="hover:text-red-600 transition">Cart</Link>
        </div>

        {/* HAMBURGER */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-center py-6 space-y-6 text-sm tracking-widest"
        >
          <Link onClick={() => setOpen(false)} to="/">Home</Link><br />
          <Link onClick={() => setOpen(false)} to="/fragrances">Fragrances</Link><br />
          <Link onClick={() => setOpen(false)} to="/accessories">Accessories</Link><br />
          <Link onClick={() => setOpen(false)} to="/collections">Collections</Link><br />
          <Link onClick={() => setOpen(false)} to="/about">About</Link><br />
          <Link onClick={() => setOpen(false)} to="/cart">Cart</Link>
        </motion.div>
      )}
    </nav>
  );
}