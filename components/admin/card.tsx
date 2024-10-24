import st from "@/styles/admin/bids.module.scss"
import { Button } from "../ui/button"
import { usePathname, useRouter } from "next/navigation"
interface CardProps {
    card_id:string,
    date:string,
    email:string,
    name: string,
    petName: string,
    phone: string,
    product: string
}


export default function BidsCard(props: CardProps) {
    const router = useRouter()

    async function deleteCard() {
        let resp = await fetch(process.env.NEXT_PUBLIC_API_IP + "/bids/delete-bid/" + props.card_id,
            {
                method: "POST"
            }
        )
        window.location.reload()

    }


    return(
        <>
            <div className={st.card}>
                <p className={st.value}>Дата: {props.date}</p>
                <p className={st.value}>Услуга: {props.product}</p>
                <p className={st.value}>Имя: {props.name}</p>
                <p className={st.value}>Имя питомца: {props.petName}</p>
                <p className={st.value}>Телефон: {props.phone}</p>
                <p className={st.value}>Емейл: {props.email}</p>
                <Button onClick={deleteCard}>Отклонить</Button>
            </div>
        
        </>
    )
}