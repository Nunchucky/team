import styles from '../styles/fourthPage.module.css'
import { Button, Card, Container } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import star from '../images/star.svg'


const baseUrl = "https://dummyapi.io/data/v1/";


export const FourthPage = () => {
    const Item = (props) => {
        return (
          <Card style={{ minHeight: 400, minWidth: 300,   maxHeight: 400, maxWidth: 300, marginRight: 16,display:"inline-block" }}>
            <Card.Body>
              <img src={star}></img>
              <p className={styles.text}>Nice</p>
              <Card.Text>{props.message}</Card.Text>
              <Card.Title className={styles.names}>{props.firstName}{' '}
              {props.lastName}</Card.Title>
            </Card.Body>
          </Card>
        )
    }
        const [pos, setPos] = useState(0);
        const [data, setData] = useState(null);
      
        const goRight = () => setPos((prev) => prev + 1);
        const goLeft = () => setPos((prev) => prev - 1);
      
        useEffect(() => {
          axios
            .get(baseUrl + "user", {
              headers: {
                "app-id": "636f2f24e8d0ffd9c83fc52f",
              },
            })
            .then((res) => {
              setData(res.data);
              console.log(res.data)
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);
    return(
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='bru     '>
                <h1 style={{
                  display:"flex",
                  justifyContent:"center"
                }}>What People Say About Us</h1>
            </div>
            <div className={styles.reviewCont}>
                <Container>
                    <div className={styles.cards}>
                        <div
                        style={{
                            transform: `translateX(${-25 * pos}%)`,
                            transition: "300ms",
                            display:"flex",
                            flexDirection:"row",
                            marginBottom: 10
                        }}
                        >
                        {data && data.data.map((item) => <Item {...item} />)}

                        </div>
                    </div>
                    <div className={styles.btnCont}>
                      <Button onClick={goLeft}>Left</Button>
                      <Button onClick={goRight}>Right</Button>
                    </div>
                </Container>
            </div>
            <div className={styles.contactCont}></div>
        </>
    )
}
    