import {PencilLine} from "phosphor-react"
import styles from "./Sidebar.module.css"
import capa from "../assets/capa.jpg"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={capa} />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/111073194?v=4" alt="" />
                <strong>Edson Fernando</strong>
                <span> Dev Full Stack</span>
                <footer> 
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar Perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}