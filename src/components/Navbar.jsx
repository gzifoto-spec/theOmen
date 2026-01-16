import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-indigo-400 text-white px-6 py-4 flex justify-between items-center">

            <h1 className="text-xl font-semibold">
                My Library
            </h1>

            <ul className="flex gap-6">
                <li className="hover:text-yellow-300 cursor-pointer">
                    <Link to="/">
                        Home
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar