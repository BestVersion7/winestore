import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
    const { data: session } = useSession();
    // console.log(session);
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button
                    onClick={() =>
                        signOut({
                            callbackUrl: "/",
                        })
                    }
                >
                    Sign out
                </button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button
                onClick={() =>
                    signIn(null, {
                        callbackUrl: "/",
                    })
                }
            >
                Sign in
            </button>
        </>
    );
}
