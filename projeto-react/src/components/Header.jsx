import style from "./header.module.css"
import ignitelogo from "../assets/ignite-logo.png"
export function Header(){
    return(
        <header className={style.header}>
            <img src={ignitelogo} alt="logo Ignite" />
            <h2>Ignite Feed</h2>
           
        </header>
    )
}