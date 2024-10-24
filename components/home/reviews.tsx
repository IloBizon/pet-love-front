"use client"
import { useEffect, useState } from "react";
import { reviews } from "@/mocks/reviews";
import styles from "@/styles/main/reviews.module.scss"
import Review from "../review";

async function getReviews() {
    await new Promise(r => setTimeout(r, 1000));
    return reviews
}


export default function Reviews() {
    let [reviews, setReviews] = useState([])
    useEffect(()=>{
        getReviews().then((c)=>{
            setReviews(c)
        })
    })


    let reviewsMap = reviews.map((rev, i)=>{
        return(
            <>
            <Review key={"rev" + i} name={rev.name} stars={rev.stars}></Review>
            </>
        )
    })

    return (
        <>
        <section className={styles.reviews}>
            <div className="container">
                <h2 className={styles.reviews__title}>Отзывы</h2>
                <div className={styles.reviews__wrap}>
                    {reviews.length == 0 ? "Загрузка..." : reviewsMap }
                </div> 
            </div>
        </section>

        </>
    )

}