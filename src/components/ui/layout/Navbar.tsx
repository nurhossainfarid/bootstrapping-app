import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <h1 className="font-bold">Bootstrapping</h1>
            <Link to={"/"}>Tasks</Link>
            <Link to={"/users"}>Users</Link>
        </nav>
    )
};

export default Navbar;