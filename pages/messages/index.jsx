import styles from "./index.module.scss";

import MessagesList from '../../components/MessageList';
import LayoutStaticMessage from "../../components/LayoutStaticMessage";

const Message = () => {
    return (
        <LayoutStaticMessage>
            <div className={styles.wrapper}>
            <MessagesList />
            </div>
        </LayoutStaticMessage>

        
    )
}

export default Message;