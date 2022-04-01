import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
    if (req.method === "GET") {
        // console.log(req.query);
        const drink_id = parseInt(req.query.drink_id);
        try {
            const commentData = await prisma.commenttb.findMany({
                where: {
                    drink_id,
                },
            });
            return res.json(commentData);
        } catch (err) {
            return res.status(500).send("internal2 issue");
        }
    } else if (req.method === "POST") {
        try {
            const session = await getSession({ req });
            if (session) {
                const {
                    user: { name },
                } = session;
                const { drink_id, comment_body } = req.body;
                const addComment = await prisma.commenttb.create({
                    data: {
                        drink_id,
                        comment_body,
                        comment_user_name: name,
                    },
                });
                // console.log(drink_id);
                // console.log(drink_id);
                return res.json(addComment);
            } else {
                return res.status(401).send("not signed in");
            }
        } catch (err) {
            return res.status(500).send("internal issue");
        }
    } else if (req.method === "DELETE") {
    } else {
        return res.status(500).send("internal");
    }
};

export default handler;
