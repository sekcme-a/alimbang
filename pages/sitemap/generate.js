'use client'

import { useEffect } from "react"

import { firestore as db } from "firebase/firebase"



const Generate = () => {


  useEffect(()=> {
    const fetchData = async () => {
      const URL = "https://alimbang.kr"
      const lastmod = new Date().toISOString()
    
      const snapShot = await db.collection("type").doc("alimbang").collection("commercials").where("mode","==","게재중").get()
    
    
      const defaultFields = [
        {
          loc: URL,
          changefreq: 'daily',
          priority: '1.0',
          lastmod
        },
        {
          loc: `${URL}/newspaper`,
          changefreq: 'daily',
          priority: '0.8',
          lastmod
        },
        {
          loc: `${URL}/car`,
          changefreq: 'daily',
          priority: '0.8',
          lastmod
        },
        {
          loc: `${URL}/house`,
          changefreq: 'daily',
          priority: '0.8',
          lastmod
        },
        {
          loc: `${URL}/job`,
          changefreq: 'daily',
          priority: '0.8',
          lastmod
        },
      ]
    
      const postsFields =  snapShot.docs.map(doc => ({
        loc: `${URL}/commercial/${doc.id}`,
        priority:"0.7",
        lastmod,
        changefreq: 'weekly'
      }))
    
      const fields = [...defaultFields, ...postsFields]
      let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`
      fields.map((field) => {
        sitemap = sitemap+
`
<url>
  <loc>${field.loc}</loc>
  <lastmod>${field.lastmod}</lastmod>
  <priority>${field.priority}</priority>
  <changefreq>${field.changefreq}</changefreq>
</url>
`
      })
      sitemap = sitemap+
`
</urlset>`
      console.log(sitemap)
    }
    fetchData()
  },[])

  return(
    <>
    </>
  )
}


export default Generate