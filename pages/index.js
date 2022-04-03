import { fetchAllDrinks } from "../utils/apiCall";
import Image from "next/image";
import Link from "next/link";

const DrinkCard = (props) => {
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

export default function Home({ champagneData, wineData, beerData }) {
    return (
        <>
            <h3>Welcome to Wine Store</h3>
            <i>Last update 2 April 2022</i> <br />
            <p>
                Link to repo: <span> </span>
                <a href="https://github.com/bestversion7/winestore">
                    https://github.com/bestversion7/winestore
                </a>
            </p>
            <>
                <h2>Champagne</h2>
                <div className="drink-body">
                    {champagneData.map((item) => (
                        <DrinkCard
                            key={item.drink_id}
                            drink_id={item.drink_id}
                            drink_name={item.drink_name}
                            drink_url={item.drink_url}
                        />
                    ))}
                </div>
            </>
            <>
                <h2>Beer</h2>
                <div className="drink-body">
                    {beerData.map((item) => (
                        <DrinkCard
                            key={item.drink_id}
                            drink_id={item.drink_id}
                            drink_name={item.drink_name}
                            drink_url={item.drink_url}
                        />
                    ))}
                </div>
            </>
            <>
                <h2>Wine</h2>
                <div className="drink-body">
                    {wineData.map((item) => (
                        <DrinkCard
                            key={item.drink_id}
                            drink_id={item.drink_id}
                            drink_name={item.drink_name}
                            drink_url={item.drink_url}
                        />
                    ))}
                </div>
            </>
            <br />
            <br />
        </>
    );
}

export const getStaticProps = async () => {
    const data = await fetchAllDrinks();
    const champagneData = data.filter(
        (item) => item.drink_group == "champagne"
    );
    const beerData = data.filter((item) => item.drink_group == "beer");
    const wineData = data.filter((item) => item.drink_group == "wine");
    // console.log(champagneData);
    return {
        props: {
            champagneData,
            beerData,
            wineData,
        },
    };
};
