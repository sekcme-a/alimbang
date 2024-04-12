import styles from "./HeaderNav.module.css"
import useData from "context/data";
import { useEffect, useState } from "react";

import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

const FONT_SIZE={fontSize:"30px"}
const data = [
  {title: "전체", value:"전체", icon: ()=><ReorderOutlinedIcon sx={FONT_SIZE}/>},
  {title: "기술/생산", value:"기술/생산직", icon: ()=><SettingsSuggestOutlinedIcon sx={FONT_SIZE}/>},
  {title: "사무/경리", value:"사무/경리", icon: ()=><DevicesOutlinedIcon sx={FONT_SIZE}/>},
  {title: "전문직", value:"전문직", icon: ()=><CoPresentOutlinedIcon sx={FONT_SIZE}/>},
  {title: "교사강사", value:"교사강사/교육정보", icon: ()=><SchoolOutlinedIcon sx={FONT_SIZE}/>},
  {title: "영업직", value:"영업직", icon: ()=><PointOfSaleOutlinedIcon sx={FONT_SIZE}/>},
  {title: "서비스직", value:"서비스직", icon: ()=><ForumOutlinedIcon sx={FONT_SIZE}/>},
  {title: "운전직", value:"운전직", icon: ()=><DriveEtaOutlinedIcon sx={FONT_SIZE}/>},
  {title: "배달직", value:"배달직", icon: ()=><DeliveryDiningOutlinedIcon sx={FONT_SIZE}/>},
  {title: "현장직", value:"현장직", icon: ()=><WorkOutlineOutlinedIcon sx={FONT_SIZE}/>},
  {title: "아르바이트", value:"아르바이트/기타구인", icon: ()=><AccessTimeOutlinedIcon sx={FONT_SIZE}/>},
  {title: "요리음식업", value:"요리음식업", icon: ()=><RestaurantOutlinedIcon sx={FONT_SIZE}/>},
  {title: "유흥서비..", value:"유흥서비스업", icon: ()=><LibraryMusicOutlinedIcon sx={FONT_SIZE}/>},
]

const HeaderNav = () => {
  const [selectedValue, setSelectedValue] = useState("")
  const {handleSelectedQuery, selectedQuery} = useData()

  const onIconClick = (value) => {
    //이미 선택되어있던 아이콘일 경우, 모든 선택 해제
    if(selectedValue===value){
      setSelectedValue("")
      handleSelectedQuery("jobSelect","전체")
    } else {
      setSelectedValue(value)
      handleSelectedQuery("jobSelect",value)
    }
  }

  return(
    <div className={styles.main_container}> 
      {data.map((item, index) => {
        if(selectedQuery.jobSelect===item.value)
          return(
            <div key={index} className={styles.item_container} onClick={()=>onIconClick(item.value)}>
              <div style={{color: "rgb(94, 90, 216)"}}>{item.icon()}</div>
              <p style={{color:"rgb(94, 90, 216)"}}>{item.title}</p>
            </div>
          )
        else
          return(
            <div key={index} className={styles.item_container} onClick={()=>onIconClick(item.value)}>
              <div>{item.icon()}</div>
              <p >{item.title}</p>
            </div>
          )
        }
      )}
    </div>
  )
}

export default HeaderNav