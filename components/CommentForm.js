import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

export default ({ drink_id }) => {
    const [commentBody, setCommentBody] = useState("lalaland");
    const { data: session } = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/comment", {
            drink_id,
            comment_body: commentBody,
        });
    };

    return (
        <>
            <p>Post comment here:</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                    cols="30"
                    rows="3"
                    disabled={!session}
                />
                <button type="submit">Post</button>
            </form>
        </>
    );
};
