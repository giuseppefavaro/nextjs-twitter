import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

import { GET, DELETE } from "../../utils/api";


const DynamicMessage = () => {

    //definisco l'hook
    const router = useRouter();

    //Id dinamico
    const { id } = router.query;


    const [messageData, setMessageData] = useState({});


    const onMessageDelete = (id) => {  
        const deleteIt = confirm("Sei sicuro di volerlo cancellare?");
    
        deleteIt &&  
        DELETE("messages", id).then(() => {
        router.push("/");
        });
    };


    useEffect(() => {
        GET(`messages/${id}`).then((data) => {
            setMessageData(data);
        });
    }, []);
    

    return (
        <>
        <div className={styles.wrapper}>
            <h3>{messageData.text}</h3>
            <p>{messageData.sender}</p>
            <p>{messageData.date}</p>
            <button onClick={() => onMessageDelete(messageData.id)}> x </button>
        </div>
        </>

    )
}

export default DynamicMessage;