import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between m-4">
      <Link to="/" className="text-3xl font-bold">
        <img
          src="/docker.svg"
          alt="logo javascript"
          className="w-14 h-14 rounded-md"
        />
      </Link>
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/install"
            className="px-3 py-1.5 hover:bg-muted rounded-md"
          >
            Instalación
          </Link>
          <Link
            to="/postgres-docker"
            className="px-3 py-1.5 hover:bg-muted rounded-md"
          >
            Postgres
          </Link>
        </div>
        <div className="sm:hidden">
          <Button
          aria-label="menu"
          size="icon"
          variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>
        {isOpen && (
          <div className="sm:hidden absolute top-16 right-0 bg-muted w-full py-4 rounded-md shadow-md">
            <Link
              onClick={() => setIsOpen(false)}
              to="/install"
              className="flex justify-center items-center w-full hover:bg-background py-2"
            >
              Instalación
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/postgres-docker"
              className="flex justify-center items-center w-full hover:bg-background py-2"
            >
              Postgres
            </Link>
          </div>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;