import styles from "@/styles/header/header.module.scss"

export default function Header() {
    return (
        <>
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrap}>
                    <p className={styles.header__logo}><a href="/">PetLove</a></p>
                    <nav className={styles.header__block}>
                        <ul className={styles.header__buttons}>
                            <li className={styles.header__button}><a href="/#">Главная</a></li>
                            <li className={styles.header__button}><a href="/services">Услуги</a></li>
                            <li className={styles.header__button}><a href="/#contacts">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        </>
    )
}