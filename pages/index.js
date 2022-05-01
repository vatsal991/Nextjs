import styles from "../styles/Home.module.css";

import React from "react";
import { useState } from "react";
import Navbar from "../src/navbar";
import Footer from "../src/footer";
import Image from "next/image";
import Link from "next/dist/client/link";
import Head from "next/head";

export default function Home(props) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState(props.data);
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <div>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>
          HDMoviesPro |Download Hindi Dubbed Movies-300mb Movies, 480p Movies
        </title>

        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content={`Download Any Movies And Web Series In Hindi Dubbed And 480p,720p & 1080p From HDMoviesPro`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="HDMoviesPro |HDMoviesPro-300mb Movies, 480p Movies"
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
      <Navbar />
      <div className={styles.maincontainer}>
        {data.map((Movies) => {
          const { title, id } = Movies;
          const images = JSON.stringify(Movies.image).replace(/"/g, "");
          return (
            <div key={id} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className={styles.container1}>
                <Image
                  className={styles.image1}
                  src={images.replace("lol", "sbs")}
                  alt=""
                  loader={loaderProp}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
                  }}
                />
                <div className={styles.tester}>
                  {" "}
                  <Link style={{ textDecoration: "none" }} href={`/post/${id}`}>
                    <text className={styles.text}>{title}</text>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ButtonContaine">
        <Link href="/">
          <button type="button" className="btn btn-danger" disabled>
            Previous Page
          </button>
        </Link>
        <Link href="/page/2">
          <button type="button" className="btn btn-danger">
            Next Page
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://onlinetoolscave.in/9138ed02-c179-4e32-a04e-b004beb52f77/1`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
