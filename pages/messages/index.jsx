import styles from "./index.module.scss";

import MessagesList from '../../components/MessageList';
import LayoutStaticMessage from "../../components/LayoutStaticMessage";

const Messages = () => {
    return (
        <LayoutStaticMessage>
            <MessagesList />
        </LayoutStaticMessage>
    )
}

export default Messages;