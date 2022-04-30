import React from "react";
import { useState,useEffect } from "react";
import styles from '../../styles/Home.module.css'
import Navbar from "../../src/navbar";
import { useRouter } from 'next/router'
import Link from "next/dist/client/link";
import Image from 'next/image';




export default function Page(props){

    const router = useRouter()
    const { id } = router.query
    const next = parseInt(id)+1
    const previous = parseInt(id)-1
   
    const [data,setdata]=useState(props.data)

return(
   <>
   <Navbar />
      <div className={styles.maincontainer}>
   {data.map((Movies)=>{
      const {title,id} =Movies
      const images = JSON.stringify(Movies.image).replace(/"/g, '')
      return(
         <div key={id} className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className={styles.container1}>
            <Image className={styles.image1} src={images.replace("lol","sbs")} 
            onError={({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src="https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
               }} />
            <div className={styles.tester}> <Link style={{ textDecoration: 'none' }} href={`/post/${id}`}><text className="text">{title}</text></Link></div>
            </div>

         </div>
      )
      })
   }
</div>
<div className='ButtonContaine'>
<Link href={`/page/${previous}`}><button type="button" className="btn btn-danger">Previous Page</button></Link>
<Link href={`/page/${next}`}><button type="button" className="btn btn-danger">Next Page</button></Link>
</div>
</>
) 
}

export async function getServerSideProps({query}){
    const { id } = query
    const res = await fetch(`https://onlinetoolscave.in/9138ed02-c179-4e32-a04e-b004beb52f77/${id}`)
    const data = await res.json();
   
    return{
       props:{data}
    }
}
