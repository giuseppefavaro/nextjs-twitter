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
                <label htmlFor="message">Messaggio</label>
                <input value={messageInput} onChange={(e) => setmessageInput(e.target.value)} type="text" id="message" name="message" />

                <label htmlFor="user">Utente</label>
                <input value={userInput} onChange={(e) => setUserInput(e.target.value) } type="text" id="user" name="user" />

                <input type="submit" value="Invia" />
            </form>
        </div>
    )
}

export default AddNewMessage;