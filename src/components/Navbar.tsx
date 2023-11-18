import Logo from "@/components/Logo";
import Searchbar from "@/components/Searchbar";
import Location from "@/components/Location";
import User from "@/components/User";
import Cart from "@/components/Cart";

export default function Navbar() {
    return (
        <nav className={"flex w-full justify-center shadow-lg sticky"}>
            <header
                id="nav-wrapper"
                className={"flex container max-w-5xl w-full my-5 gap-5"}
            >
                <Logo />
                <Searchbar />
                <Location />
                <User />
                <Cart />
            </header>
        </nav>
    );
}
