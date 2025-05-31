export default function NavBar() {
  return (
    <main>
      <nav className="w-full bg-white shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">Snapu</div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Services</a>
            <a href="#" className="hover:text-blue-500">Portfolio</a>
            <a href="#" className="hover:text-blue-500">About</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
}
