import styles from "./Post.module.css"

export function Post(){
    return(
     <article className={styles.Post}>
        <header>
            <div className={styles.author}>
               <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/111073194?v=4" alt="" />
                             
                <div className={styles.authorInfor}>                    
                    <strong>Edson Fernando</strong>
                    <span>Dev Full Stack</span>
                </div>
            </div>

            <time title="14 de janeiro às 17:35h " dateTime="2025-01-14 17:35:02">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p> <a href="#">👉 jane.design/doctorcare</a></p>
            <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
        </div>
        <div className={styles.comment}> 
            <strong>Deixe seu FeedBack</strong>
            <textarea className={styles.InputTextComment} name="InseritComentario" id="commentPost" placeholder="Escreva seu feedback aqui..."></textarea>
            <button type="button">Publicar</button>
        </div>
     </article>
    )
}