import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import {GET, DELETE} from "../../utils/api"

const MessagesList = ({ reloadData, setReloadData }) => {

    const [messagesList, setMessagesList] = useState([]);
  
    useEffect(() => {
      GET("messages").then((data) => setMessagesList(data));
      console.log("ho rieffettuato il get")
    }, [reloadData]);


    const onMessageDelete = (id) => {
        const deleteIt = confirm("Sei sicuro di volerlo cancellare?");
    
        deleteIt &&
          DELETE("messages", id).then(() => {
            setReloadData(!reloadData);
          });
      };


    const orderListByTime = (list) => list.slice(0).reverse();

    return (
        <div className={styles.MessagesList}>

            {messagesList &&
            orderListByTime(messagesList).map((message) => (
            <div className={styles.MessagesList__message} key={message.id}>
                <h3>{message.text}</h3>
                <p>{message.sender}</p>
                <p>{message.date}</p>
                <button onClick={() => onMessageDelete(message.id)}> x </button>
            </div>
            ) )}
            
        </div>
    )
}

export default MessagesList;