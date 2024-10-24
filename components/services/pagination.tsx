import styles from "@/styles/services/pagination.module.scss"
import ServicesCard from "./card"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Modal from "../modal"


export default function Pagination() {
    const [services, setServices] = useState([])

    const searchParams = useSearchParams()
    
    async function onChangeFilter() {
        
        let response = await fetch(process.env.NEXT_PUBLIC_API_IP + "/products/get-products?sort=" + searchParams.get("sort") + "&category=" + searchParams.get("category"))
        setServices(await response.json())
    }


    useEffect(()=>{
        onChangeFilter()

    },[searchParams])



    return(
        <>
            <div className={styles.pagination}>
                {services.map((service => {
                    return(
                        <ServicesCard imgLink={"/img/vet.jpg"} title={service.title} description={service.description} price={service.price}/>
                    )
                }))}

            </div>
        </>
    )
}