import prisma from "../../lib/prisma";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
    if (req.method === "POST") {
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
            res.json(addComment);
        } else {
            res.status(401).send("not signed in");
        }
    } else if (req.method === "DELETE") {
    } else {
        res.status(500).send("internal");
    }
};

export default handler;
