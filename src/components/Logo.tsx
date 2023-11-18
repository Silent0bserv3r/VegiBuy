import Link from "next/link";
import { Pacifico } from "next/font/google";
const logoFont = Pacifico({ weight: "400", subsets: ["cyrillic"] });
export default function Logo() {
    return (
        <Link
            id="logo"
            href={"/"}
            className={`flex items-center leading-tight ${logoFont.className}`}
        >
            <h1 className={"text-2xl"}>
                <span className={"text-3xl text-green-500"}>V</span>egi
            </h1>
            <h2 className={"text-xl text-fuchsia-500"}>Buy</h2>
        </Link>
    );
}
