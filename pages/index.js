import styles from '../styles/Home.module.css'

import React from "react";
import { useState} from "react";
import Navbar from '../src/navbar';
import Footer from '../src/footer';
import Image from 'next/image';
import Link from 'next/dist/client/link';

export default function Home(props) {

    const [loading,setloading]=useState(false)
    const [data,setdata] = useState(props.data)

  return (
     <div>
      <Navbar />
      <div className={styles.maincontainer}>
   {data.map((Movies)=>{
      const {title,id} =Movies
      const images = JSON.stringify(Movies.image).replace(/"/g, '')
      const image = images.replace("lol","sbs")
      return(
         <div key={id} className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className={styles.container1}>
            <Image className={styles.image1} src={image} 
            alt='Test'
            onError={({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src="https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
               }} />
            <div className={styles.tester}> <Link style={{ textDecoration: 'none' }} href={`/post/${id}`}><text className={styles.text}>{title}</text></Link></div>
            </div>

         </div>
      )
      })
   }
</div>
<div className='ButtonContaine'>
<Link href="/"><button type="button" className="btn btn-danger" disabled>Previous Page</button></Link>
<Link href="/page/2"><button type="button" className="btn btn-danger">Next Page</button></Link>
</div>
<Footer />
</div>
  )
}


export async function getServerSideProps(){
    const res = await fetch(`https://onlinetoolscave.in/9138ed02-c179-4e32-a04e-b004beb52f77/1`)
    const data = await res.json();
   
    return{
       props:{data}
    }
}