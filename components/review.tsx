"use client"
import Star from "@/icons/star"
import styles from "@/styles/review.module.scss"

interface ReviewProps {
    name: string,
    stars: number
}

export default function Review(props: ReviewProps) {
    let starsArr = Array.apply(null, { length: props.stars })
    return (
        <>
        <div className={styles.review}>
            <p className={styles.review__name}>{props.name}</p>
            <div className={styles.review__stars}>
                {starsArr.map((el,i)=>{
                    return(
                        <>
                        <Star key={"star" + i}></Star>
                        </>
                    )
                })}
            </div>

        </div>

        </>
    )
}