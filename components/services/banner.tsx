import styles from "@/styles/main/banner.module.scss"
import variables from "@/styles/vars.module.scss"

export default function Banner() {
    return(
        <>
        <section className={styles.banner} style={{backgroundColor: variables.baseColor}}>
            <div className={styles.banner__wrap}>
                <div className={styles.banner__block}>
                    <h1 className={styles.banner__title}>Услуги</h1>
                </div>
            </div>
        </section>
        </>
    )

}