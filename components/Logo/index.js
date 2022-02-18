import Image from "next/image";
import styles from './Logo.module.scss';

const Logo = () => {
    return <h1 className={styles.logo}>
        <Image
            className={styles.logo__image}
            src="/nespera.webp"
            alt="Nespera Logo"
            width={24}
            height={24}
        />
        <a href="#">nespera</a>
    </h1>
}

export default Logo;
