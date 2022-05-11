import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import {GET} from "../../utils/api"

const MessagesList = () => {

    const [MessagesList, setMessagesList] = useState([]);

    useEffect(() => {
        GET("messages").then((data) => setMessagesList(data));
    }, [])


    return (
        <div className={styles.MessagesList}>

            {MessagesList.map((message) => (
            <div className={styles.MessagesList__message} key={message.id}>
                <h3>{message.text}</h3>
                <p>{message.sender}</p>
                <p>{message.date}</p>
            </div>
            ) )}
            
        </div>
    )
}

export default MessagesList;