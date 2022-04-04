import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
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
