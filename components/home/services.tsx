"use client"
import styles from "@/styles/main/services.module.scss"
import ServicesCard from "../services/card"
import { useEffect, useState } from "react";
import { services } from "@/mocks/services";





export default function Services() {
    let [services,setServices] = useState([])

    useEffect(()=>{
        getServices()
    },[])
    
    async function getServices() {
        const response = await fetch(process.env.NEXT_PUBLIC_API_IP + "/products/get-selected-products")
        if(response.ok) {
            setServices(await response.json())
        }
    }


    

    let servicesMap = services.map((service,i)=>{
        return(
            <>
            <ServicesCard key={service.id} description={service.description}
                imgLink={"/img/vet.jpg"} title={service.title} price={service.price}/>
            </>
        )
    })


    return(
        <>
        <section className={styles.services}>
            <div className="container">
                <h2 className={styles.services__title}>Услуги</h2>
                <div className={styles.services__wrap}>
                    <div className={styles.services__cards}>
                        {services.length == 0 ? "Загрузка..." : servicesMap}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}