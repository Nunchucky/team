import '/Users/22HOP2D-Chintushig/Desktop/code/projects/team/my-first-app/src/App.css'
import { NavBar } from './NavBar';
import styles from '../styles/contact.module.css'
import axios from 'axios';
import { useEffect } from 'react';

export const Contact = () =>{
        const baseUrl = "https://dummyapi.io/data/v1/";
          useEffect(() => {
            axios 
            .get(baseUrl + "user", {
              headers: {
                "app-id": "636f2fc3e8d0ff08493fc54f",
              },
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          }, []);
    return(
        <>
        <div className={styles.hhhe}>
          <NavBar />
        </div>
        </>

    )
}