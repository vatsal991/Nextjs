import React from 'react'
import styles from '../styles/Home.module.css'

const Footer =()=>{
return(
    <footer class="bg-dark text-light text-center text-md-left footer">
	<div class="container">
		<div class="row pt-4">
			<div class="col-sm-6 col-md-3 pb-4">
				<h4 class="mb-4">
					Dubbed Languages
				</h4>
				<ul class="list-unstyled">
					<li>
						<a className={styles.link} href="/search/hindi/1?" class="text-light">Hindi</a>
					</li>
					<li>
						<a className={styles.link} href="/search/telugu/1?" class="text-light">Telugu</a>
					</li>
					<li>
						<a className={styles.link} href="/search/tamil/1?" class="text-light">Tamil</a>
					</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-3 pb-4">
				<h4 class="mb-4">
					Quality
				</h4>
				<ul class="list-unstyled">
					<li>
						<a className={styles.link} href="/search/480p/1" class="text-light">480p</a>
					</li>
					<li>
						<a className={styles.link} href="/search/720p/1?" class="text-light">720p</a>
					</li>
					<li>
						<a className={styles.link} href="/search/1080p/1?" class="text-light">1080p</a>
					</li>
				</ul>
			</div>
			<div class="col-md-6 pb-4">
				<h4 class="mb-4">
					Download Movies And Web-Series
				</h4>
				<ul class="list-unstyled">
					<li>
						<a className={styles.link} class="text-light">We Do Not Contains Any Copy-Right Files</a>
					</li>
					<li>
						<a className={styles.link} class="text-light">We Just Provide And Share</a>
					</li>
					<li>
						<a className={styles.link} class="text-light">Links Available On Internet</a>
					</li>
				</ul>
			</div>
		</div>
		<p class="text-center text-secondary border-top border-secondary py-4">
			HDMovies
		</p>
	</div>
</footer>
)
}

export default Footer