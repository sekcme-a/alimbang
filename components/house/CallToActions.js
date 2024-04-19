'use client'

import { useEffect, useState } from "react";

import { firestore as db } from "firebase/firebase";
import Image from "next/image";
import Link from "next/link";

const CallToActions = () => {

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



if(banners.length===0)
  return (
    <div className="call-to-action-four ">
      <h5 style={{fontWeight:"bold"}}>구인중이세요?</h5>
      <p style={{fontWeight:"bold"}}>
        시흥알림방를 통해 효과좋고 빠른 구인을 경험해보세요!
      </p>
      <a href="#" className="theme-btn btn-style-one bg-blue">
        <span className="btn-title" style={{fontWeight:"bold"}}>구인하러 가기</span>
      </a>
      <div
        className="image"
        style={{ backgroundImage: "url(/images/resource/ads-bg-4.png)" }}
      ></div>
    </div>
  )

  return(
    <>
    {
      banners.map((item, index)=> (
        <Link key={index} target="_blank" href={item.url}>
          <div style={{marginBottom:"25px", cursor:"pointer"}}>
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
};

export default CallToActions;
