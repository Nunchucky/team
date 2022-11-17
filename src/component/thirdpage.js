import styles from "../styles/thirdPage.module.css";
import img from "../images/hhe2.svg"


export const ThirdPage = () => {
    return(
        <>
        <div className={styles.idgaf}>
            <div>
                <img src={img} className={styles.response}/>
            </div>
            <div className={styles.fuckme}>
                <h1>Simple task management</h1>
                <p>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                <a href="home">Learn More</a>            
            </div>
        </div>
        </>
    )
}