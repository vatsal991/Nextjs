import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../src/navbar";
import styles from '../../styles/Single.module.css'
import style from '../../styles/Home.module.css'
import Footer from "../../src/footer";
import Image from 'next/image';



export default function Single (props) {

  const [data, setdata] = useState(props.data);
  const [data2, setdata2] = useState(props.data2);


  return (
    <>
    <Navbar />
      <div className={styles.SingleContainer}>
        {
          data.map((Movies) => {
            const {
              title,
              genre,
              rating,
              director,
              cast,
              release,
              story,
              id,
            } = Movies;
            const images = JSON.stringify(Movies.image).replace(/"/g, '')

            return (
              <>
                <div key={id} className={styles.info}>
                  <h1 className={styles.singleheader}>{title}</h1>
                  <div className={styles.SingleContainer2}>
                    <Image
                      className={styles.image}
                      alt=''
                      src={images.replace("lol","sbs")}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
                      }}
                    />
                    <div className={styles.textContainer}>
                      <h3 className={styles.about}>ABOUT:</h3>
                      <div className={styles.single}>
                        <div dangerouslySetInnerHTML={{ __html: story }} />
                      </div>
                    </div>
                  </div>
                    <h3 className={styles.about}>ABOUT SITE:</h3>
                  <div className={styles.MobileAds}>
                  </div>
                  <h6 className={styles.singleheader1}>
                    Download {title}. This is a Hindi movie and available in
                    720p & 480p qualities. This is one of the best movie based
                    on {genre}. This part of this series is now dubbed in Hindi.
                    Click on the Download links below to proceed👇
                  </h6>
                  <h6 className={styles.singleheader1}>
                    The Best Website/Platform For Hollywood HD Movies. We
                    Provide Direct Google Drive Download Links For Fast And
                    Secure Downloading. Just Click On Download Button And Follow
                    Steps To Download And Watch Movies Online For Free
                  </h6>
                </div>
              </>
            );
          })
        }
            <div className={styles.sidebar}>  
          {/* <div className="d-grid gap-2">
            <button className="btn btn-danger" type="button">
              Please Do Not Use VPN for Downloading Movies From Our Site.
            </button>
            <button className="btn btn-success" type="button">
              Click On The Below Download Button Download File.
            </button>
            <button className="btn btn-warning" type="button">
              If You Find Any Broken Link Then Report To Us.
            </button>
            <button className="btn btn-info" type="button">
              And Don't Forget To Enjoy Movies
            </button>
          </div> */}
        </div>
      </div>
      <div className={styles.related}>
        {data2.map((Movies) => {
          const { title, id } = Movies;
          const images = JSON.stringify(Movies.image).replace(/"/g, '')

          return (
            <div key={id} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className={style.container1}>
                <Image
                  className={style.image1}
                  alt=''
                  src={images.replace("lol","sbs")}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
                  }}
                />
                <div className={style.tester}>
                  {" "}
                  <a style={{ textDecoration: "none" }} href={`/post/${id}`}>
                    <text className={style.text}>{title}</text>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps({query}){
    const { id } = query
    const res = await fetch(`https://onlinetoolscave.in/576f5b62-e850-4071-84fa-6a05d5cf0d6e/${id}`)
    const data = await res.json();

    const res2 = await fetch(`https://onlinetoolscave.in/7fdc5422-400d-4574-8d22-c7abdea98f3c`)
    const data2 = await res2.json();
   
    return{
       props:{
           data:data,
           data2:data2
     }
    }
}

