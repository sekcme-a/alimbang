'use client'
import { useState, useEffect } from "react"
import { firestore as db } from "firebase/firebase"
import Link from "next/link"
import Image from "next/image"

const SidebarBanner = () => {


  const [banners, setBanners] = useState([])

  useEffect(()=> {
    const fetchData = async () => {

      const snapShot = await db.collection("type").doc("alimbang").collection("banners").orderBy("savedAt", "desc").get()

      if(!snapShot.empty){
        const list = snapShot.docs.map(doc => ({...doc.data()}))
        setBanners([...list])
      }

    }

    fetchData()
  },[])

  return(
    <>
        {
      banners.map((item, index)=> (
        <Link key={index} target="_blank" href={item.url}>
          <div style={{marginBottom:"25px", cursor:"pointer", padding: "0 10px"}}>
            <Image
              loading='lazy'
              width={400}
              height={0}
              src={item.imgUrl}
              alt={`배너광고 ${index}`}
            />
          </div>
        </Link>
      ))
    }
    </>
  )
}


export default SidebarBanner