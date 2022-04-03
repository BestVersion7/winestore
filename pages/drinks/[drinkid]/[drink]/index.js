import { fetchOneDrink } from "../../../../utils/apiCall";
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
    const {
        drink_id,
        drink_name,
        drink_group,
        drink_url,
        drink_ingredients,
        drink_directions,
    } = drinkData;

    const fetchComments = async () => {
        const { data } = await axios.get(`/api/comment?drink_id=${drink_id}`);
        setComments(data);
    };

    useEffect(() => {
        fetchComments();
    }, [reload]);

    return (
        <section className="drink-body-page">
            <br />
            <Image
                width={150}
                height={150}
                layout="fixed"
                src={drink_url}
                alt={drink_name}
            />
            <h3>Name</h3>
            <p>{drink_name}</p>
            <h3>Group</h3>
            <p>{drink_group}</p>
            <h3>Ingredients</h3>
            <p>{drink_ingredients}</p>
            <h3>Directions</h3>
            <p>{drink_directions}</p>
            <CommentForm
                drink_id={drink_id}
                reload={reload}
                setReload={setReload}
            />
            {/* mapping the comments using swr (no seo for update and refresh) */}
            {comments.length > 0 ? (
                comments.map((item) => (
                    <Comment
                        key={item.comment_id}
                        comment_user_name={item.comment_user_name}
                        comment_id={item.comment_id}
                        comment_date={item.comment_date}
                        comment_body={item.comment_body}
                    />
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
    // console.log(drinkData);
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
    // const data = await fetchAllDrinks();
    // console.log(data.drink_id);

    // const paths = data.map(({ drink_id, drink_name }) => ({
    //     params: {
    //         drinkid: drink_id.toString(),
    //         drink: drink_name.replace(/ /g, "-").toLowerCase(),
    //     },
    // }));
    const paths = [
        {
            params: {
                drinkid: "8",
                drink: "port-wine-flip",
            },
        },
    ];
    return {
        paths,
        // limit
        fallback: "blocking",
    };
};
