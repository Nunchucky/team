import Button from 'react-bootstrap/Button'
import styles from "/Users/22HOP2D-Chintushig/Desktop/code/projects/team/my-first-app/src/styles/Email.css";


export const Email = () => {
    return(
        <div className='fuck'>
            <div>
                <h1 className='hehe'>Instant collaborations for remote teams</h1>
                <p className='hh'>All in one for your remote team chats, 
                collaboration and track projects</p>
            </div>
            <div>
                <input size='sm' type="text" placeholder="Email" className={styles.EmailInput}/>
                <Button variant="info" className='btn'>Get Early Access</Button>
            </div>
        </div>
    )
}