import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const CommentForm = ({ drink_id, reload, setReload }) => {
    const [commentBody, setCommentBody] = useState("");
    const { data: session } = useSession();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/comment", {
            drink_id,
            comment_body: commentBody,
        });
        setReload(!reload);
        setCommentBody("");
    };

    return (
        <>
            <p>Post comment here:</p>
            {session ? (
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Type in your comment here"
                        value={commentBody}
                        onChange={(e) => setCommentBody(e.target.value)}
                        cols="30"
                        rows="3"
                        disabled={!session}
                    />
                    <button type="submit" disabled={!session}>
                        Post
                    </button>
                </form>
            ) : (
                <div>
                    <button
                        className="signin-btn"
                        onClick={() =>
                            signIn(null, {
                                callbackUrl: `${router.asPath}`,
                            })
                        }
                    >
                        Sign in to Comment
                    </button>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={commentBody}
                            onChange={(e) => setCommentBody(e.target.value)}
                            cols="30"
                            rows="3"
                            disabled={!session}
                        />
                        <button type="submit" disabled={!session}>
                            Post
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default CommentForm;
