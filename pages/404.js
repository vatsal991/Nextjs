import React from "react";
import styles from '../styles/Home.module.css'
import Navbar from "../src/navbar";
import Footer from "../src/footer";

const None = ()=>{
return(
    <>
    <Navbar />
    <div id={styles.notfound}>
		<div class={styles.notfound}>
			<div class={styles.notfound404}>
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<a href="/">Homepage</a>
		</div>
	</div>
	<Footer />
    </>
)
}

export default None