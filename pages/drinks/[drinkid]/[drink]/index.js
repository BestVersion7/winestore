import { fetchOneDrink, fetchAllDrinks } from "../../../../utils/apiCall";
import Signin from "../../../../components/Signin";
import Image from "next/image";
// import dynamic from "next/dynamic";
import Comment from "../../../../components/Comment";
import CommentForm from "../../../../components/CommentForm";
import axios from "axios";
import { useEffect, useState } from "react";

const Drink = ({ drinkData }) => {
    // comments
    const [comments, setComments] = useState([]);
    const [reload, setReload] = useState(true);

    const fetchComments = async () => {
        const { data } = await axios.get(
            `/api/comment?drink_id=${parseInt(drinkData.drink_id)}`
        );
        setComments(data);
    };

    useEffect(() => {
        fetchComments();
    }, [reload]);

    return (
        <section className="drink-body-page">
            <Image
                width={150}
                height={150}
                layout="fixed"
                src={drinkData.drink_url}
                alt={drinkData.drink_name}
            />
            <p>{drinkData.drink_name}</p>
            <CommentForm
                drink_id={drinkData.drink_id}
                reload={reload}
                setReload={setReload}
            />
            {/* mapping the comments using swr (no seo for update and refresh) */}
            {comments.length > 0 ? (
                comments.map((item) => (
                    <Comment key={item.comment_id} props={item} />
                ))
            ) : (
                <div>Be the first to comment!</div>
            )}
        </section>
    );
};

export default Drink;

export const getStaticProps = async ({ params }) => {
    const drinkData = await fetchOneDrink(parseInt(params.drinkid));
    if (drinkData === null) {
        return {
            notFound: true,
        };
    }
    return {
        props: { drinkData },
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
