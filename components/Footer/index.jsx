import styles from "./index.module.scss";

import Image from 'next/image';

import logo from "../../public/logo.png";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <Image src={logo} alt="Logo NexJs" width="50px" height="50px" />
            <p>Copyright 2022</p>
        </div>
    )
}

export default Footer;