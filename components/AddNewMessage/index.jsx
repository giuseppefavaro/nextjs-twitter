import { useState } from "react";

import styles from "./index.module.scss";

import { POST } from "../../utils/api";

const AddNewMessage = ({ setReloadData, reloadData }) => {

    const [messageInput, setmessageInput] = useState("");
    const [userInput, setUserInput] = useState("");

    const onSendData = (e) => {
        e.preventDefault();

        POST (
            "messages", 
            JSON.stringify({
                text: messageInput,
                sender: userInput
            }));

        alert("Il messaggio è stato inviato!");

        setReloadData(!reloadData);
    }


    return (
        <div className={styles.AddNewMessage}>
            <form onSubmit={onSendData}>

                <label htmlFor="user">Utente</label>
                <input class={styles.AddNewMessage__input}value={userInput} onChange={(e) => setUserInput(e.target.value) } type="text" id="user" name="user" placeholder="Inserisci nome utente" required />

                <label htmlFor="message">Messaggio</label>
                <textarea class={styles.AddNewMessage__textarea} value={messageInput} onChange={(e) => setmessageInput(e.target.value)} id="message" name="message" placeholder="Inserisci messaggio" required></textarea>

                <input class={styles.AddNewMessage__btn} type="submit" value="Invia" />
            </form>
        </div>
    )
}

export default AddNewMessage;