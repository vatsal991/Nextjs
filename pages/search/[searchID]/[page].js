import React from "react";
import { useState } from "react";
import Navbar from "../../../src/navbar";
import { useRouter } from "next/router";
import styles from '../../../styles/Home.module.css'
import Footer from "../../../src/footer";
export default function Search(props){
   
    const router = useRouter()
    const { page } = router.query
    const { searchID } = router.query
    const next = parseInt(page)+1
    const previous = parseInt(page)-1


    const [data,setdata]=useState(props.data)
 
    // const getData=async()=>{
    //  await axios.get(`https://onlinetoolscave.in/70c85aae-6632-481b-91b2-1297072df818/${searchID}&${page}`).then((resp)=>{
    //     setdata(resp.data)
    //   })
    //   setloading(true)
    // }
   
return(
   <>
   <Navbar />
      <div className={styles.maincontainer}>
   {
   data.map((Movies)=>{
      const {title,id} =Movies
      const images = JSON.stringify(Movies.image).replace(/"/g, '')

      return(
         <div className="col-lg-2 col-md-3 col-sm-4 col-6">
         <div className={styles.container1}>
         <img className={styles.image1} src={images.replace("lol","sbs")} 
         onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src="https://cdn.dribbble.com/users/841193/screenshots/4109909/media/c8f817c63e688fe303705c35c9ef46ae.gif";
            }} />
         <div className={styles.tester}> <a style={{ textDecoration: 'none' }} href={`/post/${id}`}><text className={styles.text}>{title}</text></a></div>
         </div>

      </div>
      )
      })
   }
</div>
<div className='ButtonContaine'>
<a href={`/search/${searchID}/${previous}`}><button type="button" class="btn btn-danger">Previous Page</button></a>
<a href={`/search/${searchID}/${next}`}><button type="button" class="btn btn-danger">Next Page</button></a>
</div>
<Footer />
</>
) 
}

export async function getServerSideProps({query}){
    const {searchID} = query;
    const {page} = query
    const res =  await fetch(`https://onlinetoolscave.in/70c85aae-6632-481b-91b2-1297072df818/${searchID}&${page}`)
    const data = await res.json()

    return{
        props:{data}
    }
}

