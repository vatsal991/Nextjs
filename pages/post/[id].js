import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../src/navbar";
import styles from '../../styles/Single.module.css'
import style from '../../styles/Home.module.css'
import Footer from "../../src/footer";
import Image from 'next/image';
import Head from "next/head";


export default function Single (props) {

  const [data, setdata] = useState(props.data);
  const [data2, setdata2] = useState(props.data2);
  const loaderProp = ({ src }) => {
    return src;
  };

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
              <Head>
              <meta name="apple-mobile-web-app-capable" content="yes" />
                  <title>{title}</title>

                  <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                  />
                  <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                  />
                  <meta
                    name="description"
                    content={`${title} In Hindi Dubbed And 480p,720p & 1080p From HDMoviesPro`}
                  />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:title"
                    content="HDMoviesPro |KatMovies-300mb Movies, 480p Movies"
                  />
                  <meta
                    property="og:description"
                    content="HDMoviesPro,katmovies,ktmovieshd,kat movies ,MoviesFlix,moviesflix.com,moviesflixpro,moviesflix pro,moviesflix uri,themoviesflix.cc,themoviesflix.co,themoviesflix.in,themoviesflix.net,tamilrockers,moviesverse,movies verse,vegamovies,vega movies,KatMovieHd.sx,MovieskiDuniya,Entertainment 720p Movies, 1080p movies, Dual Audio Movies, Hindi Dubbed Series, Hollywood Movies"
                  />
                  <meta
                    property="og:site_name"
                    content="HDMoviesPro | HDMoviesPro-300mb Movies, 480p Movies"
                  />
              </Head>
                <div key={id} className={styles.info}>
                  <h1 className={styles.singleheader}>{title}</h1>
                  <div className={styles.SingleContainer2}>
                    <Image
                      alt=''
                      loader={loaderProp}
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

