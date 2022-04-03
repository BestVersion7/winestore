import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-QNF41EPSPL"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QNF41EPSPL', { page_path: window.location.pathname });
            `,
                }}
            />
            <title>{props.title}</title>
            <meta name="keywords" content={props.keywords} />
            <meta name="description" content={props.description} />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Header",
    keywords: "Key",
    description: "Desc",
};

export default Meta;
