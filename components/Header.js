import Link from "next/link";
import Signin from "./Signin";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Link href="/">
                <a>
                    <Image
                        height={50}
                        width={50}
                        // layout="fixed"
                        alt="home"
                        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/wine.png"
                    />
                </a>
            </Link>
            <Signin />
        </header>
    );
};

export default Header;
