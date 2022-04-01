import { fetchAllDrinks } from "../utils/apiCall";
import Image from "next/image";
import Link from "next/link";

const DrinkCard = ({ props }) => {
    const drinkNameT = props.drink_name.replace(/ /g, "-").toLowerCase();
    // console.log(drinkNameT);
    return (
        <div className="drink-card">
            <Link href={`/drinks/${props.drink_id}/${drinkNameT}`}>
                <a className="drink-card-body">
                    <Image
                        width={6}
                        height={5}
                        layout="responsive"
                        src={props.drink_url}
                        alt={props.drink_name}
                    />
                    <>{props.drink_name}</>
                </a>
            </Link>
        </div>
    );
};

export default function Home({ data }) {
    return (
        <>
            <h3>Welcome to GoldenWine</h3>
            <i>Last update 2 April 2022</i> <br />
            <p>
                Link to repo: <span> </span>
                <a href="https://github.com/bestversion7/winestore">
                    https://github.com/bestversion7/winestore
                </a>
            </p>
            <div className="drink-body">
                {data.map((item) => (
                    <DrinkCard key={item.drink_id} props={item} />
                ))}
            </div>
            <br />
            <br />
        </>
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
