import styles from "./index.module.scss";
import { useState, useEffect } from "react";

import {GET, DELETE} from "../../utils/api"

import Link from "next/link";

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
        <div className={styles.wrapper}>
            {messagesList &&
            orderListByTime(messagesList).map((message) => (
            <div className={styles.wrapper__message} key={message.id}>
                <Link href={`/messages/${message.id}`}><a className={styles.wrapper__message__title}><h3>{message.sender}</h3></a></Link>
                <p className={styles.wrapper__message__text}>{message.text}</p>
                <p className={styles.wrapper__message__date}>{message.date}</p>
                <button className={styles.wrapper__message__btn} onClick={() => onMessageDelete(message.id)}>x</button>
            </div>
            ) )}       
        </div>
    )
}

export default MessagesList;