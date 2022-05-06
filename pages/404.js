import React from "react";
import styles from '../styles/Home.module.css'
import Navbar from "../src/navbar";
import Footer from "../src/footer";
import Link from "next/link";
import Head from "next/head";

const None = ()=>{
return(
    <>
	<Head>
      <meta name="google-site-verification" content="h_dFPTdMOYmQep_iGDWyn4fS4bttdgFZ7D8Ql3uMuTw" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>
          HDMoviesPro | Not Found
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
    <div id={styles.notfound}>
		<div className={styles.notfound}>
			<div className={styles.notfound404}>
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<Link href="/">Homepage</Link>
		</div>
	</div>
	<Footer />
    </>
)
}

export default None