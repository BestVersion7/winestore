import ReactMarkdown from "react-markdown";
import prisma from "../lib/prisma";

const TestPage = ({ data }) => {
    return (
        <div>
            <ReactMarkdown>{data.article_post}</ReactMarkdown>,
        </div>
    );
};

export default TestPage;

export const getStaticProps = async (req, res) => {
    const data2 = await prisma.blog.findFirst({
        where: {
            article_id: 1,
        },
        select: {
            article_post: true,
        },
    });
    const data = JSON.parse(JSON.stringify(data2));
    console.log(data);
    return {
        props: { data },
    };
};
