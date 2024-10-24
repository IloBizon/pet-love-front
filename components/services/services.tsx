"use client"
import styles from "@/styles/services/services.module.scss"
import Filters from "./filters"
import Pagination from "./pagination"
import { useRef, useState } from "react"
import Modal from "../modal"

export default function Services() {


    return(
        <>
            <section className={styles.services}>
                <div className="container">
                    <div className={styles.services__wrap}>
                        <Filters/>
                        <Pagination/>
                        
                    </div>
                </div>
            </section>
        </>
    )
}