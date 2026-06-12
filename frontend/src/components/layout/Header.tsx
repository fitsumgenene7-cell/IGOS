import { Car } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold text-gray-900"
        >
          <Car className="h-7 w-7" />
          <span>IGOMS</span>
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;