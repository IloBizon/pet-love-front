import { contacts } from "@/mocks/contacts";
import styles from "@/styles/main/contacts.module.scss"
async function getContacts() {
    await new Promise(r => setTimeout(r, 500));
    return contacts
}

export default function Contacts() {
    return (
        <>
            <section className={styles.contacts} id="contacts">
                <div className="container">
                    <h2 className={styles.contacts__title}>Контакты</h2>

                    <div className={styles.contacts__block}>
                        <p className={styles.contacts__contact}>Адрес: {contacts.address}</p>
                        <p className={styles.contacts__contact}>Телефон: {contacts.phone}</p>
                        <p className={styles.contacts__contact}>Email: {contacts.email}</p>
                    </div>
                </div>
            </section>
        </>
    )

}