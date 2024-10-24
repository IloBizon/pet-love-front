"use client"
import { useEffect, useState } from "react";
import {contacts} from "@/mocks/contacts"
import styles from "@/styles/main/banner.module.scss"
import variables from "@/styles/vars.module.scss"

async function getCity() {
    await new Promise(r => setTimeout(r, 2000));
    return contacts.city
}


export default function Banner() {
    const [city, setCity] = useState("")
    useEffect(()=>{
        getCity().then((c)=>{setCity(c)})
    });
    return(
        <>
        <section className={styles.banner} style={{backgroundColor: variables.baseColor}}>
            <div className={styles.banner__wrap}>
                <div className={styles.banner__block}>
                    <h1 className={styles.banner__title}>Настоящий друг</h1>
                    <p className={styles.banner__text}>Город: {city != "" ? city : "Загрузка..."}</p>
                </div>
            </div>
        </section>
        </>
    )

}