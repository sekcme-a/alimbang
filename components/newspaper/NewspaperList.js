'use client'


import { Grid } from "@mui/material"
import { firestore as db } from "firebase/firebase"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useEffect } from "react"


const NewspaperList = () => {
  const [newspapers, setNewspapers] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const snapShot = await db.collection("type").doc("alimbang").collection("newspapers").orderBy("createdAt", "desc").get()

      if(!snapShot.empty){
        const list = snapShot.docs.map(doc => ({...doc.data(), id: doc.id}))
        setNewspapers(list)
      }
    }
    fetchData()
  },[])

  return(
    <Grid container spacing={2}>
      
      {newspapers?.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={2} sx={{mt:5, position:"relative",width:'100%', height:"unset"}}>
          <Link href={item.newsUrl} target="_blank">
            <Image
              src={item.thumbnailUrl}
              alt={item.date}
              width={400}
              height={500}
              sizes="100vw"
              loading="lazy"
              style={{cursor:"pointer", borderRadius:'5px', overflow:"hidden", border:"2px solid rgb(200,200,200)"}}
            />
          </Link>
          <p style={{textAlign:'center', fontWeight:"bold"}}>{item.date}</p>
        </Grid>
      ))}


    </Grid>
  )
}

export default NewspaperList

