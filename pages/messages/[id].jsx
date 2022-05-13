import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import LayoutDynamicMessage from "../../components/LayoutDynamicMessages";
import Link from 'next/link';

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
        // Al refresh id è undefined
        id && localStorage.setItem("id", id);

        GET(`messages/${localStorage.getItem("id")}`).then((data) => 
            setMessageData(data)
        );

        // GET(`messages/${id}`).then((data) => {
        //     setMessageData(data);
        // });
    }, [id]);
    


    return (
        <LayoutDynamicMessage>
        <Link href="/messages">
          <a className={styles.backBtn}>Torna indietro</a>
        </Link>

        <div className={styles.wrapper}>
            <h3 className={styles.wrapper__title}>{messageData.sender}</h3>
            <p className={styles.wrapper__text}>{messageData.text}</p>
            <p className={styles.wrapper__date}>{messageData.date}</p>
            <button className={styles.wrapper__btn} onClick={() => onMessageDelete(messageData.id)}>x</button>
        </div>

        </LayoutDynamicMessage>

    )
}

export default DynamicMessage;
