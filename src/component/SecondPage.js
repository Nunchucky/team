import img2 from "../images/hhe.svg"
import styles from "../styles/SecondPage.module.css";

export const SecondPage = () => {
    return(
        <div className={styles.idgaf}>
                <div className={styles.fuckme}>
                    <h1>
                    Your Hub for teamwork
                    </h1>
                    <p>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                    <a href="home">Learn More</a>
                </div>
            <div className={styles.idk}>
                <img src={img2} className={styles.hhe}/>
            </div>
        </div>
    )
}