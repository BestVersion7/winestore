import prisma from "../lib/prisma";

export const fetchAllDrinks = async () => {
    try {
        const data = await prisma.drinkdb.findMany({});
        return data;
    } catch (err) {
        return console.log(err);
    }
};

export const fetchOneDrink = async (drink) => {
    try {
        const data = await prisma.drinkdb.findUnique({
            where: { drink_id: drink },
        });
        return data;
    } catch (err) {
        return console.log(err);
    }
};
