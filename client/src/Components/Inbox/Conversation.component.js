const { useParams } = require("react-router-dom");

const Conversation = () => {
    const { id } = useParams();
    return <>{id}</>;
};

export default Conversation;
