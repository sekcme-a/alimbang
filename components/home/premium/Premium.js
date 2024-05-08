
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import styles from "./premium.module.css"
import Loader from "components/common/Loader"
import { Grid } from "@mui/material"
import useData from "context/data"

import JobBox from "components/common/JobBox"

const Component = () => {
  const router = useRouter()
  const {commercialList, addDamBang, setType} = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState("구인")
  const [list, setList] = useState([])


  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true)
      let tempList = []
      if(selected==="구인" && commercialList.all.length!==0){
        if(commercialList?.premium?.job?.length>8)
          tempList = addDamBang("job",commercialList.premium.job)
        else if(commercialList?.specialPlus?.job?.length+commercialList?.premium?.job?.length>16)
          tempList = addDamBang("job",[...commercialList?.premium?.job,...commercialList?.specialPlus?.job?.slice(0,8)])
        else
          tempList = addDamBang("job",[...commercialList?.premium?.job, ...commercialList?.specialPlus?.job])
      } else if (selected==="부동산"){
        if(commercialList?.premium?.house?.length>8)
          tempList = addDamBang("house",commercialList?.premium?.house)
        else if(commercialList?.specialPlus?.house?.length+commercialList?.premium?.house?.length>16)
          tempList = addDamBang("house",[...commercialList?.premium?.house,...commercialList?.specialPlus?.house?.slice(0,8)])
        else
          tempList = addDamBang("house",[...commercialList.premium.house, ...commercialList.specialPlus.house])
      } else if (selected==="중고차"){
        if(commercialList.premium.car.length>8)
          tempList = addDamBang("car",commercialList.premium.car)
        else if(commercialList.specialPlus.car.length+commercialList.premium.car.length>16)
          tempList = addDamBang("car",[...commercialList.premium.car,...commercialList.specialPlus.car.slice(0,8)])
        else
          tempList = addDamBang("car",[...commercialList.premium.car, ...commercialList.specialPlus.car])
      }
      setList([...tempList])
      setIsLoading(false)
    }
    fetchData()
  },[selected, commercialList])

  if(isLoading)
    return <div style={{height:"500px"}}><Loader /></div>
  
  return(
    <div className={styles.main_container}>
      <h2>프리미엄 {selected}</h2>
      <h3>
        시흥 알림방의 프리미엄 {selected}
        을 확인하세요!
      </h3>

      <div className={styles.button_container}>
        {/* <div className={styles.button_wrap} */}
        <div className={`${styles.moving_container} ${selected==="구인" ? styles.left : selected==="부동산" ? styles.middle : styles.right}`} />
        <div
          className={`${styles.button} ${selected==="구인" && styles.selected}`}
          onClick={()=>setSelected("구인")}  
        >
          구인구직
        </div>
        <div
          className={`${styles.button} ${selected==="부동산" && styles.selected}`}
          onClick={()=>setSelected("부동산")}  
        >
          부동산
        </div>
        <div
          className={`${styles.button} ${selected==="중고차" && styles.selected}`}
          onClick={()=>setSelected("중고차")}  
        >
          중고차
        </div>

      </div>

      <Grid container spacing={{md:3, sm: 2, xs:1}} sx={{mt:"20px !important"}}>

        {list.length!==0 && list.map((item, index) => {
          if(item.level==="프리미엄 구인"){
            return(
              <Grid item xs={12} sm={6} md={3} key={`${item.id}_${index}_${item.title}`}>
                <JobBox mode="premium" item={item}/>
              </Grid>
            )
          }
          else
            return(
              <Grid item xs={12} sm={6} md={3} key={`${item.id}_${index}_${item.title}`}>
                <JobBox mode="special+" item={item}/>
              </Grid>
            )
        })}

      </Grid>
    </div>
  )
}

export default Component