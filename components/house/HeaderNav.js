import styles from "./HeaderNav.module.css"
import useData from "context/data";
import { useEffect, useState } from "react";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import CorporateFareTwoToneIcon from '@mui/icons-material/CorporateFareTwoTone';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import FactoryTwoToneIcon from '@mui/icons-material/FactoryTwoTone';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import WarehouseRoundedIcon from '@mui/icons-material/WarehouseRounded';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import OtherHousesTwoToneIcon from '@mui/icons-material/OtherHousesTwoTone';


const FONT_SIZE={fontSize:"30px"}
const data = [
  {title: "주택매매", value:"주택매매", icon: ()=><HomeTwoToneIcon sx={FONT_SIZE}/>},
  {title: "주택임대", value:"주택임대", icon: ()=><HomeOutlinedIcon sx={FONT_SIZE}/>},
  {title: "상가매매", value:"상가매매", icon: ()=><CorporateFareTwoToneIcon sx={FONT_SIZE}/>},
  {title: "상가임대", value:"상가임대", icon: ()=><CorporateFareOutlinedIcon sx={FONT_SIZE}/>},
  {title: "공장매매", value:"공장매매", icon: ()=><FactoryTwoToneIcon sx={FONT_SIZE}/>},
  {title: "공장임대", value:"공장임대", icon: ()=><FactoryOutlinedIcon sx={FONT_SIZE}/>},
  {title: "창고매매", value:"창고매매", icon: ()=><WarehouseRoundedIcon sx={FONT_SIZE}/>},
  {title: "창고임대", value:"창고임대", icon: ()=><WarehouseOutlinedIcon sx={FONT_SIZE}/>},
  {title: "기타매매", value:"기타매매", icon: ()=><OtherHousesTwoToneIcon sx={FONT_SIZE}/>},
  {title: "기타임대", value:"기타임대", icon: ()=><OtherHousesOutlinedIcon sx={FONT_SIZE}/>},
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