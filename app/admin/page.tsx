"use client"
import { Button } from "@/components/ui/button";
import styles from "@/styles/admin/database.module.scss"
import st from "@/styles/admin/bids.module.scss"
import {  useEffect, useState } from "react";
import BidsCard from "@/components/admin/card";

export default function Admin() {
    const [bids, setBids] = useState([])
    async function fillDB() {
        let resp = await fetch(process.env.NEXT_PUBLIC_API_IP + "/products/insert-fake-products",{
            method: "POST"
        }
        )
        if(resp.ok){
            alert("Успешно добавлены документы в базу данных")
        }
        else {
            alert("В базе данных уже есть значения!")
        }
    }
    async function getBids() {
        let resp = await fetch(process.env.NEXT_PUBLIC_API_IP + "/bids/get-bids")
        setBids(await resp.json())

    }
    useEffect(()=>{
        getBids()
    },[])

    return(
        <>
            <section className={styles.database}>
                <div className={styles.database__wrap}>
                    <p className={styles.database__text}>Заполнить базу данных</p>
                    <Button  className={styles.database__button} onClick={fillDB}>Заполнить</Button>
                </div>
            </section>
            <section className={st.bids}>
                <div className="container">
                    <div className={st.title__wrap}>
                        <h2 className={st.title}>Заявки</h2>
                    </div>
                    <div className={st.bids__wrap}>
                        {bids.map(bid=>{
                            return (
                                <BidsCard card_id={bid.id} date={bid.date} email={bid.email} name={bid.name} petName={bid.petName} phone={bid.phone} product={bid.product}></BidsCard>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}