import Head from "next/head";
import Script from "next/script";

const Meta = (props) => {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-QNF41EPSPL"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-QNF41EPSPL', { page_path: window.location.pathname });
                `}
            </Script>

            <Head>
                <title>{props.title}</title>
                <meta name="keywords" content={props.keywords} />
                <meta name="description" content={props.description} />
            </Head>
        </>
    );
};

Meta.defaultProps = {
    title: "Header",
    keywords: "Key",
    description: "Desc",
};

export default Meta;
