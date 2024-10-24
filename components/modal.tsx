"use client"
import styles from "@/styles/ui/modal.module.scss"
import { useSearchParams } from "next/navigation"

interface ModalProps {
    children: React.ReactNode,
}


export default function Modal({children}: ModalProps){
    
    const params = useSearchParams()
    const trigger = params?.get("open") == "true" ? true : false

    function close() {

    }


    return(
        trigger ? 
        <div className={styles.modal}>
            <div className={styles.modal__wrap}>
                <div className={styles.modal__children}>
                    {children}
                </div>
            </div>
        </div>  : ""


    )

}