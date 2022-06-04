import ReactMarkdown from "react-markdown";

const TestPage = () => {
    return (
        <div>
            <ReactMarkdown>
                ### Love
                [Retool](https://retool.com) Man, imagine how *annoying* it
                would be to have to write **all** of this using HTML tags
            </ReactMarkdown>
            ,
        </div>
    );
};

export default TestPage;
