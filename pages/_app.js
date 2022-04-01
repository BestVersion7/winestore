import "../styles/globals.scss";

import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <div className="container-wrapper">
                    <Component {...pageProps} />
                </div>
            </Layout>
        </SessionProvider>
    );
}
