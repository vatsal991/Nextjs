import React from "react";
import styles from '../styles/Home.module.css'
import Navbar from "../src/navbar";
import Footer from "../src/footer";
import Link from "next/link";

const None = ()=>{
return(
    <>
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