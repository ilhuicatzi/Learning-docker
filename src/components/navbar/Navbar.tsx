import { Link } from "react-router-dom"
import { ModeToggle } from "./ModeToggle"

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
        <Link to="/" className="text-3xl font-bold">
        <img src="/docker.svg" alt="logo de docker" className="w-14 h-14" />
        </Link>
        <div className="flex items-center gap-3">
            <Link to="/install" className="px-3 py-1.5 hover:bg-muted rounded-md">Install</Link>
            <Link to="/about" className="px-3 py-1.5 hover:bg-muted rounded-md">About</Link>
            <ModeToggle />
        </div>
    </nav>
  )
}

export default Navbar