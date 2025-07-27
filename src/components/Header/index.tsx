import styles from './styles.module.css'

import { Mail } from "lucide-react";

export default function Header(){
    return (
        <div className={styles.header}>
            Gila Software - Notifications <Mail/>
        </div>
    )
}