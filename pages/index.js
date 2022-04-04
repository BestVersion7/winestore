import { fetchAllDrinks } from "../utils/apiCall";
import Meta from "../components/Meta";
import DrinkCard from "../components/DrinkCard";

export default function Home({ champagneData, wineData, beerData }) {
    return (
        <>
            <Meta
                title={"Wine Blog"}
                keywords={"how to make drinks"}
                description={"How to make drinks."}
            />
            <h1>Welcome to Wine Store</h1>
            <i>Last update 4 April 2022</i> <br />
            <p>
                Link to repo: <span> </span>
                <a
                    href="https://github.com/bestversion7/winestore"
                    target="_blank"
                    rel="noopener"
                >
                    https://github.com/bestversion7/winestore
                </a>
            </p>
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
