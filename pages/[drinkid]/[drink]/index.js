import { useRouter } from "next/router";
import { fetchOneDrink, fetchAllDrinks } from "../../../utils/apiCall";

const Drink = ({ data }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return <div>{data.drink_name}</div>;
};

export default Drink;

export const getStaticProps = async ({ params }) => {
    const data = await fetchOneDrink(parseInt(params.drinkid));
    if (data === null) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
        revalidate: 36000,
    };
};

export const getStaticPaths = async () => {
    const data = await fetchAllDrinks();
    // console.log(data)
    const paths = data.map(({ drink_id, drink_name }) => ({
        params: {
            drinkid: drink_id.toString(),
            drink: drink_name.replace(/ /g, "_").toLowerCase(),
        },
    }));
    return {
        paths,
        fallback: true,
    };
};
