import { useRouter } from "next/router";

const Drink = () => {
    const router = useRouter();
    console.log(router.drinkname);
    return <div>yo</div>;
};

export default Drink;
