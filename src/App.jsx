import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
} from "lucide-react";

/* =======================
   LANDING PAGE COMPONENT
======================= */
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Velvé Noir",
      type: "Eau De Parfum",
      price: "$245",
      image:
        "https://images.unsplash.com/photo-1595425970377-2f0a4cda2b38?q=80&w=1200",
    },
    {
      id: 2,
      name: "Rouge Intense",
      type: "Extrait De Parfum",
      price: "$310",
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200",
    },
    {
      id: 3,
      name: "Éclipse",
      type: "Limited Edition",
      price: "$420",
      image:
        "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200",
    },
  ];

  const accessories = [
    {
      id: 1,
      name: "Leather Travel Case",
      price: "$95",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200",
    },
    {
      id: 2,
      name: "Gold Atomizer",
      price: "$75",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200",
    },
  ];

  return (
    <div className="bg-white text-black font-sans overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-gray-200 relative">
        
        <Link to="/" className="text-2xl tracking-[0.3em] font-semibold">
          VELVÉ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-sm tracking-widest">
          <Link to="/fragrances" className="hover:text-red-600 transition">
            FRAGRANCES
          </Link>
          <Link to="/accessories" className="hover:text-red-600 transition">
            ACCESSORIES
          </Link>
          <Link to="/collections" className="hover:text-red-600 transition">
            COLLECTIONS
          </Link>
          <Link to="/about" className="hover:text-red-600 transition">
            ABOUT
          </Link>
        </div>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-4">
          <Search className="cursor-pointer hover:text-red-600" />
          <Heart className="cursor-pointer hover:text-red-600" />
         <Link to="/cart">
  <ShoppingBag className="cursor-pointer hover:text-red-600" />
</Link>

          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center gap-6 py-8 text-sm tracking-widest md:hidden z-50"
          >
            <Link to="/fragrances" onClick={() => setMenuOpen(false)}>
              FRAGRANCES
            </Link>
            <Link to="/accessories" onClick={() => setMenuOpen(false)}>
              ACCESSORIES
            </Link>
            <Link to="/collections" onClick={() => setMenuOpen(false)}>
              COLLECTIONS
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
          </motion.div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="grid md:grid-cols-2 items-center px-6 md:px-12 py-16 md:py-28 gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            SCENT OF <span className="text-red-600">POWER</span>
          </h1>

          <p className="text-gray-600 max-w-md">
            Crafted for presence. Designed for dominance.
            Experience fragrance elevated to art.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/fragrances"
              className="bg-red-600 hover:bg-red-700 rounded-2xl px-8 py-4 text-white text-sm tracking-widest text-center"
            >
              SHOP NOW
            </Link>

            <Link
              to="/collections"
              className="border border-black rounded-2xl px-8 py-4 text-sm tracking-widest hover:bg-black hover:text-white transition text-center"
            >
              EXPLORE COLLECTION
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1400"
              alt="Luxury perfume"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="px-6 md:px-12 py-20 bg-gray-50">
        <h2 className="text-3xl font-light tracking-widest mb-16 text-center">
          FEATURED COLLECTION
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div key={product.id} whileHover={{ y: -10 }}>
              <div className="rounded-3xl shadow-xl overflow-hidden bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg tracking-wide">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.type}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">
                      {product.price}
                    </span>
                    <Link
  to="/cart"
  className="bg-black hover:bg-red-600 rounded-xl px-4 py-2 text-xs tracking-widest text-white transition"
>
  ADD
</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ACCESSORIES SECTION (RESTORED) ================= */}
      <section className="px-6 md:px-12 py-24">
        <h2 className="text-3xl font-light tracking-widest mb-16 text-center">
          PREMIUM ACCESSORIES
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {accessories.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 bg-white flex justify-between items-center">
                <div>
                  <h3 className="text-xl tracking-wide">{item.name}</h3>
                  <p className="text-red-600 font-semibold">{item.price}</p>
                </div>

                <button className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition text-sm tracking-widest">
                  SHOP
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}


function Cart() {
  return (
    <div className="px-6 md:px-12 py-24 text-center">
      <h1 className="text-4xl font-light mb-6">YOUR BAG</h1>
      <p className="text-gray-600 mb-10">
        Your selected items will appear here.
      </p>

      <Link
        to="/"
        className="border border-black px-8 py-4 rounded-xl hover:bg-black hover:text-white"
      >
        RETURN HOME
      </Link>
    </div>
  );
}

/* ================= SIMPLE PAGES ================= */
/* ================= FRAGRANCES PAGE ================= */
function Fragrances() {
  const products = [
    {
      id: 1,
      name: "Velvé Noir",
      price: "$245",
      image: "https://images.unsplash.com/photo-1595425970377-2f0a4cda2b38?q=80&w=1200",
    },
    {
      id: 2,
      name: "Rouge Intense",
      price: "$310",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200",
    },
    {
      id: 3,
      name: "Éclipse",
      price: "$420",
      image: "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200",
    },
    {
      id: 4,
      name: "Midnight Oud",
      price: "$380",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200",
    },
    {
      id: 5,
      name: "Crimson Elixir",
      price: "$460",
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200",
    },
    {
      id: 6,
      name: "Royal Amber",
      price: "$355",
      image: "https://images.unsplash.com/photo-1590080877777-1f4c9a2b805d?q=80&w=1200",
    },
  ];

  return (
    <div className="bg-white text-black">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 text-center bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light tracking-widest mb-6"
        >
          OUR FRAGRANCES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-600"
        >
          Discover powerful compositions crafted for confidence,
          elegance, and unforgettable presence.
        </motion.p>

        {/* RETURN HOME BUTTON */}
        <div className="mt-10">
          <Link
            to="/"
            className="border border-black px-8 py-3 rounded-xl text-sm tracking-widest hover:bg-black hover:text-white transition"
          >
            RETURN HOME
          </Link>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="px-6 md:px-12 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-red-600 font-semibold">
                    {product.price}
                  </p>
                </div>

                <Link
                  to="/cart"
                  className="bg-black hover:bg-red-600 text-white px-5 py-2 rounded-xl text-xs tracking-widest transition"
                >
                  ADD
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="bg-black text-white px-6 md:px-12 py-16 mt-20">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          <div>
            <h3 className="text-xl tracking-[0.3em] mb-4">
              VELVÉ
            </h3>
            <p className="text-gray-400 text-sm">
              Luxury fragrance house redefining modern elegance.
            </p>
          </div>

          <div>
            <h4 className="tracking-widest text-sm mb-4">
              SHOP
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
              <li><Link to="/collections">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="tracking-widest text-sm mb-4">
              CONNECT
            </h4>
            <p className="text-gray-400 text-sm">
              Instagram • Twitter • Email
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 text-xs mt-12">
          © 2026 Velvé. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

function Accessories() {
  const items = [
    {
      id: 1,
      name: "Leather Travel Case",
      price: "$95",
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200",
    },
    {
      id: 2,
      name: "Gold Atomizer",
      price: "$75",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200",
    },
    {
      id: 3,
      name: "Velvé Display Tray",
      price: "$140",
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200",
    },
    {
      id: 4,
      name: "Signature Gift Box",
      price: "$55",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200",
    },
    {
      id: 5,
      name: "Crystal Fragrance Stand",
      price: "$210",
      image: "https://images.unsplash.com/photo-1595425970377-2f0a4cda2b38?q=80&w=1200",
    },
  ];

  return (
    <div className="bg-white text-black">

      {/* HERO */}
      <section className="px-6 md:px-12 py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest mb-6"
        >
          ACCESSORIES
        </motion.h1>

        <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>

        <p className="max-w-2xl mx-auto text-gray-600">
          Crafted to elevate your fragrance ritual with bold elegance.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 border border-red-600 text-red-600 px-8 py-3 rounded-xl text-sm tracking-widest hover:bg-red-600 hover:text-white transition"
        >
          RETURN HOME
        </Link>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-12 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group border border-transparent hover:border-red-600 transition"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-red-600 font-semibold">
                    {item.price}
                  </p>
                </div>

                <Link
                  to="/cart"
                  className="bg-black hover:bg-red-600 text-white px-5 py-2 rounded-xl text-xs tracking-widest transition"
                >
                  ADD
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Collections() {
  const collections = [
    {
      id: 1,
      title: "Midnight Series",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1400",
    },
    {
      id: 2,
      title: "Royal Oud Line",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1400",
    },
    {
      id: 3,
      title: "Limited Edition Vault",
      image: "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1400",
    },
  ];

  return (
    <div className="bg-white text-black">

      <section className="px-6 md:px-12 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light tracking-widest mb-6"
        >
          EXCLUSIVE COLLECTIONS
        </motion.h1>

        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>

        <Link
          to="/"
          className="border border-red-600 text-red-600 px-8 py-3 rounded-xl text-sm tracking-widest hover:bg-red-600 hover:text-white transition"
        >
          RETURN HOME
        </Link>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="grid md:grid-cols-3 gap-10">
          {collections.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-black/40 to-black/20 group-hover:from-red-700/80 transition flex items-center justify-center">
                <h3 className="text-2xl tracking-widest">
                  {col.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="bg-white text-black">

      <section className="px-6 md:px-12 py-24 text-center bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-6">
          ABOUT VELVÉ
        </h1>

        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Velvé is a luxury fragrance house built on power, elegance,
          and identity. Each creation commands presence without noise.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 border border-red-600 text-red-600 px-8 py-3 rounded-xl text-sm tracking-widest hover:bg-red-600 hover:text-white transition"
        >
          RETURN HOME
        </Link>
      </section>

      <section className="px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1595425970377-2f0a4cda2b38?q=80&w=1400"
          alt="Velvé brand"
          className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
        />

        <div>
          <h2 className="text-3xl font-light mb-6 tracking-widest">
            OUR PHILOSOPHY
          </h2>

          <div className="w-16 h-1 bg-red-600 mb-6"></div>

          <p className="text-gray-600 leading-relaxed mb-6">
            We believe fragrance is identity. It is memory. It is power.
            Every Velvé creation is layered for depth, longevity,
            and projection.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From rare oud blends to modern gourmand signatures,
            we craft scents for leaders and visionaries.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================= MAIN APP ================= */
function App() {
  return (
    <>
      {/* NAVBAR shows on ALL pages */}
      <Navbar />

      {/* This padding prevents navbar from covering content */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      {/* FOOTER shows on ALL pages */}
      <Footer />
    </>
  );
}

export default App;