import Image from "next/image";
import { useState, useRef } from "react";
import styles from "./index.module.scss";

const Hero = () => {
  const [imgPos, setImgPos] = useState(0);
  // const [isFade, setFade] = useState(false);

  const rightBtn = useRef();
  const leftBtn = useRef();
  const imageEl = useRef();

  const images = [
    "https://picsum.photos/1500/800?1",
    "https://picsum.photos/1500/800?2",
    "https://picsum.photos/1500/800?3",
  ];


  const imgSwipe = (e) => {
    // setFade(true);

    if (e.target.textContent === ">") {
      imgPos < images.length - 1
        ? setImgPos((prev) => (prev += 1))
        : setImgPos(0);
    } else {
      imgPos > 0
        ? setImgPos((prev) => (prev -= 1))
        : setImgPos(images.length - 1);
    }

    // setTimeout(() => {
    //   setFade(false);
    // }, 80);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.wrapper__hero}`} ref={imageEl}>
      {/* <div className={`${styles.wrapper__hero} ${isFade && styles.fade}`} ref={imageEl}> */}
        <Image className={styles.hero__image} src={images[imgPos]} layout="fill" />
      </div>

      <div className={styles.wrapper__btns}>
        <button ref={leftBtn} onClick={imgSwipe}>{"<"}</button>
        <button ref={rightBtn} onClick={imgSwipe}>{">"}</button>
      </div>
    </div>
  );
};

export default Hero;