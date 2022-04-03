import { formatDate } from "../utils/formatDate";

const Comment = (props) => {
    const newDate = formatDate(props.comment_date);
    // console.log(newDate);
    return (
        <section>
            {newDate} {props.comment_user_name} wrote: {props.comment_body}
        </section>
    );
};

export default Comment;
