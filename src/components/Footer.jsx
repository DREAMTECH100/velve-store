import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-20 mt-24">

      <div className="grid md:grid-cols-4 gap-12">

        <div>
          <h3 className="text-xl tracking-[0.3em] mb-6">
            VELVÉ
          </h3>
          <p className="text-gray-400 text-sm">
            Luxury fragrance house redefining modern elegance and bold identity.
          </p>
        </div>

        <div>
          <h4 className="tracking-widest text-sm mb-6 text-red-600">
            SHOP
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/fragrances">Fragrances</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/collections">Collections</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="tracking-widest text-sm mb-6 text-red-600">
            SUPPORT
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="tracking-widest text-sm mb-6 text-red-600">
            NEWSLETTER
          </h4>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-xl text-black"
          />
          <button className="mt-4 w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl text-sm tracking-widest">
            SUBSCRIBE
          </button>
        </div>

      </div>

      <div className="text-center text-gray-500 text-xs mt-16">
        © 2026 Velvé. All rights reserved.
      </div>

    </footer>
  );
}