import styles from "./index.module.scss";

import Link from 'next/link';
import Image from 'next/image';

import logo from "../../public/logo.png"

const Header = () => {

    return (
        <header className={styles.Header}>

            <div className={styles.Header__logo}>
                <Link href="/"><a><Image src={logo} alt="Logo NexJs" width="50px" height="50px" /></a></Link>
            </div>

            <ul className={styles.Header__menu}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/messages"><a>Messaggi</a></Link>
                </li>
                <li>
                    <Link href="/slider"><a>Slider</a></Link>
                </li>
            </ul>

        </header>
    )

}

export default Header;