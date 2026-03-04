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
