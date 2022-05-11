import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import {GET} from "../../utils/api"

const MessagesList = ({ reloadData }) => {

    const [messagesList, setMessagesList] = useState([]);
  
    useEffect(() => {
      GET("messages").then((data) => setMessagesList(data));
      console.log("ho rieffettuato il get")
    }, [reloadData]);


    return (
        <div className={styles.MessagesList}>

            {messagesList &&
            messagesList.map((message) => (
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