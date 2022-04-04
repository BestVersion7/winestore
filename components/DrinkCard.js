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
                    {props.drink_name}
                </a>
            </Link>
        </div>
    );
};

export default DrinkCard;
