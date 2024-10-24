import styles from "@/styles/services_card.module.scss"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface ServicesCardProps {
    imgLink: string,
    title: string,
    description: string,
    price: number
}



export default function ServicesCard(props: ServicesCardProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    function showModal() {
        const params = new URLSearchParams(searchParams.toString())
        params.set("open", "true")
        params.append("product",props.title)
        router.push(pathname + '?' + params, {
            scroll: false
          })
    }


    return (
        <>
            <div className={styles.card}>
                <Image className={styles.card__img} src={props.imgLink} alt="image" width={300} height={300}></Image>
                <h4 className={styles.card__title}>{props.title}</h4>
                <p className={styles.card__desc}>{props.description}</p>
                <div className={styles.card__info}>
                    <button className={styles.card__button} onClick={showModal}>Записаться</button>
                    <p className={styles.card__price}>{props.price}р</p>
                </div>

            </div>
        </>
    )

}