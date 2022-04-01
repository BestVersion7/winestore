import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Signin() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        let image = session.user.image;
        if (image === null) {
            image =
                "https://res.cloudinary.com/crimson-flamingo/image/upload/v1555469707/1104%20profile/picture-1555469707786.png";
        }
        return (
            <div className="header-signin">
                <Image
                    height={50}
                    width={50}
                    // layout="responsive"
                    alt={image}
                    src={image}
                />{" "}
                <br />
                <button
                    onClick={() =>
                        signOut({
                            callbackUrl: `${router.asPath}`,
                        })
                    }
                >
                    Sign out
                </button>
            </div>
        );
    }
    return (
        <div className="header-signin">
            <button
                className="signin-btn"
                onClick={() =>
                    signIn(null, {
                        callbackUrl: `${router.asPath}`,
                    })
                }
            >
                Sign in
            </button>
        </div>
    );
}
