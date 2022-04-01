import { fetchAllDrinks } from "../utils/apiCall";
import Image from "next/image";
import Link from "next/link";

const DrinkCard = ({ props }) => {
    const drinkNameT = props.drink_name.replace(/ /g, "-").toLowerCase();
    // console.log(drinkNameT);
    return (
        <div className="drink-card">
            <Link href={`/drinks/${props.drink_id}/${drinkNameT}`}>
                <a>{props.drink_name}</a>
            </Link>
            <Image
                width={500}
                height={500}
                layout="responsive"
                src={props.drink_url}
                alt={props.drink_name}
            />
        </div>
    );
};

export default function Home({ data }) {
    return (
        <div className="drink-body">
            {data.map((item) => (
                <DrinkCard key={item.drink_id} props={item} />
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await fetchAllDrinks();
    // console.log(data);
    return {
        props: {
            data,
        },
    };
};
