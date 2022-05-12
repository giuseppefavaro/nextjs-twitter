import styles from "./index.module.scss";

import MessagesList from '../../components/MessageList';
import LayoutStaticMessage from "../../components/LayoutStaticMessage";

const Message = () => {
    return (
        <LayoutStaticMessage>
            <div>
            <MessagesList />
            </div>
        </LayoutStaticMessage>

        
    )
}

export default Message;