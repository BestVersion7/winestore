import { useRouter } from "next/router";
import {
    fetchOneDrink,
    fetchAllDrinks,
    fetchCommentsByDrink,
} from "../../../../utils/apiCall";
import Signin from "../../../../components/Signin";
import Image from "next/image";
import Comment from "../../../../components/Comment";
import CommentForm from "../../../../components/CommentForm";

const Drink = ({ data, commentData }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <section className="drink-body-page">
            <Signin />
            <br />
            <Image
                width={150}
                height={150}
                layout="fixed"
                src={data.drink_url}
                alt={data.drink_name}
            />
            <p>{data.drink_name}</p>
            <CommentForm drink_id={data.drink_id} />
            {commentData.map((item) => (
                <Comment key={item.comment_id} props={item} />
            ))}
        </section>
    );
};

export default Drink;

export const getStaticProps = async ({ params }) => {
    const data = await fetchOneDrink(parseInt(params.drinkid));
    const commentData2 = await fetchCommentsByDrink(parseInt(params.drinkid));
    // serialize because of date prisma
    const commentData = JSON.parse(JSON.stringify(commentData2));
    if (data === null) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data, commentData },
        revalidate: 36000,
    };
};

export const getStaticPaths = async () => {
    const data = await fetchAllDrinks();
    // console.log(data)
    const paths = data.map(({ drink_id, drink_name }) => ({
        params: {
            drinkid: drink_id.toString(),
            drink: drink_name.replace(/ /g, "-").toLowerCase(),
        },
    }));
    return {
        paths,
        // limit
        fallback: false,
    };
};
