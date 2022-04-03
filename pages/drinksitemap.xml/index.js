import { getServerSideSitemap } from "next-sitemap";
import { fetchAllDrinks } from "../../utils/apiCall";

let siteUrl = "https://winestore.vercel.app";
if (process.env.NODE_ENV === "development") {
    siteUrl = "http://localhost:3000";
}
export const getServerSideProps = async (ctx) => {
    const data2 = await fetchAllDrinks();
    const data = JSON.parse(JSON.stringify(data2));
    const fields = data?.map((data) => ({
        loc: `${siteUrl}/drinks/${data.drink_id}/${data.drink_name}`,
        // lastmod: data.lastmod,
    }));

    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Site() {}
