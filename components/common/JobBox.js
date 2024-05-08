import Image from "next/image"
import styles from "./JobBox.module.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Button, Grid } from "@mui/material"
import { useRef } from "react"


const redOutlinedButtonStyle = {
  color: "rgb(94, 90, 216)",           // Text color
  borderColor: "rgb(94, 90, 216)",     // Outline color
  '&:hover': {
    backgroundColor: "rgb(94, 90, 216)",    // Background color on hover (optional)
    color: 'white',             // Text color on hover (optional)
  },
};


const JobBox = ({item}) => {
  const router = useRouter()
  const randomInt = getRandomInt()
  const [screenWidth, setScreenWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [data, setData] = useState({})
  const [letterCount, setLetterCount] = useState(9)
  const cardRef = useRef()

  const [noDataCount, setNoDataCount] = useState(0) //시급/요일/근무지 그 4개 중에 몇개빠지면 다른데이터로 덮기

  useEffect(() => {
    if(item){
      setData(item)
      let count = 0
      if(item.salary==="" || !item.salary) count++
      if(item.date==="" || !item.date) count++
      if(item.time==="" || !item.time) count++
      if(item.location==="" || !item.location) count++
      setNoDataCount(count)

      if(data.companyValues?.companyName?.length)
        setLetterCount(data.companyValues?.companyName?.length)
    } else {
      setData({
        id: "asdf",
        logoUrl: "https://firebasestorage.googleapis.com/v0/b/garosualimbangdb.appspot.com/o/logo%2F20230523214538?alt=media&token=7721bf5f-5280-44ba-abb8-6412413df37c",
        companyValues: {companyName: "인너하임 그림이네"},
        title: "가나다라 하실 분 부탁드립니다.",
        salary: "시급 10만원",
        date: "주 5일",
        time: "8시간",
        location: "영흥도",
        level:"스페셜+ 구인"
      })
    }

    const checkWindowSize = () => {
      setScreenWidth(window.innerWidth)
      if(window.innerWidth<600)
        setIsMobile(true)
    };

    // 컴포넌트가 마운트될 때와 창 크기가 변경될 때마다 체크합니다.
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  function getRandomInt() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const getFontSize = () => {
    switch (randomInt) {
      case 0:
        return styles.font_1;
      case 1:
        return styles.font_2;
      case 2:
        return styles.font_3;
      case 3:
        return styles.font_4;
      case 4:
        return styles.font_5;
      case 5:
        return styles.font_6;
      default:
        return '';
    }
  };

  const textStyle = {
    fontSize: `${screenWidth>1200 ? 34- letterCount 
      : screenWidth>600 ? 28-letterCount : 33-letterCount}px`, // Adjust the font size based on the letter count
    fontWeight:"bold"
  };


  const [cardWidth, setCardWidth] = useState(0)
  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      console.log(width)
      setCardWidth(width)
    }
  }, [cardRef]); 
  


  //떔빵구인
  if(data.type==="dambang")
    return(
        <div className={styles.ddambang}>
          <div className={styles.img_container}>
              <Image
                src={data.companyValues.logoUrl}
                alt="로고"
                style={{ objectFit: 'contain' }}
                fill
              />
          </div>
        <h2 className={styles.title}>{data.title}</h2>
        <h3 className={styles.title}>031-313-9330 / 031-314-9330</h3>
      </div>
    )

  //일반 구인
  if(data.level==="일반+ 구인"||data.level==="일반 구인")
    return(
      <div className={styles.common_container} ref={cardRef} onClick={()=>router.push(`/commercial/${data.id}`)} style={data.level==="일반+ 구인" ? {border:"1.5px solid black", height:"90px"}: {}}>
        <div className={styles.con}>
          <h5>{data.companyValues.companyName}</h5>
          <h2 style={{width: `${cardWidth-30}px`}}>{data.title}</h2>
          <p style={{width: `${cardWidth-30}px`}}><strong>{data.salary}</strong>
            {data.date && ` | ${data.date}`}
            {data.time && ` | ${data.time}`}
            {data.location && ` | ${data.location}`}
          </p>
        </div>
      </div>
    )

  return(
    <div ref={cardRef} className={`${styles.main_container} ${data.level==="프리미엄 구인" ? styles.premium : data.level==="스페셜+ 구인" ? styles.special_plus : data.level==="스페셜 구인" ? styles.special : data.level==="일반+ 구인" ? styles.normal_plus : styles.normal}`} onClick={()=>router.push(`/commercial/${data.id}`)}>
        <div className={styles.img_container}>
          {data.companyValues?.logoUrl ? 
            <Image
              src={data.companyValues.logoUrl}
              alt="로고"
              style={{ objectFit: 'contain' }}
              fill
            />
            :
            <div
              className={styles.word_logo_container}>
              <p className={`${getFontSize()}`} style={textStyle}>
                {data?.companyValues?.companyName}
              </p>
            </div>
          }
        </div>
      <h2 className={styles.companyName}>{data.companyName}</h2>
      <h2 className={styles.title}>{data.title}</h2>

      <Grid container spacing={1} sx={data.level==="일반 구인"||data.level==="일반+ 구인" ? {mt:"2px"} : {mt: "12px"}}>
        {
          noDataCount===4 ?
            <p className={styles.content}>{data.content}</p>
            : 
            <>
            {noDataCount >1 && <p className={styles.content_oneline}>{data.content}</p>}
              {data.salary &&
              <Grid item md={noDataCount===3 ? 12 : 6} xs={data.level==="프리미엄 구인"||data.level==="일반 구인"||data.level==="일반+ 구인" ? 6 : 12} className={`${styles.info_item} ${styles.salary}`}>
                <div className={`icon flaticon-money-1`}/>
                <p style={{width:`${cardWidth-20}px`}}>{data.salary ?? "-"}</p>
              </Grid>
              }
              {data.date &&
              <Grid item md={noDataCount===3 ? 12 : 6} xs={data.level==="프리미엄 구인"||data.level==="일반 구인"||data.level==="일반+ 구인" ? 6 : (data.date+data.time).length>8 ? 12 : 6}  className={styles.info_item}>
                {
                  data.type==="구인" ?
                    <div className={`icon flaticon-icon-user-2`}/>
                  :
                  data.type==="부동산" ?
                    <div className={`icon flaticon-house-silhouette`}/>
                  :
                    <div className={`icon flaticon-confirm-schedule`}/>
                }
                <p>{data.date ?? `-`}</p>
              </Grid> 
              }
              {data.time && 
              <Grid item md={noDataCount===3 ? 12 : 6} xs={6}  className={styles.info_item}>
                {
                  data.type==="구인" ?
                    <div className={`icon flaticon-clock-2`}/>
                  :
                  data.type==="부동산" ?
                  <div className={`icon flaticon-map-locator`}/>
                  :
                    <div className={`icon flaticon-car`}/>
                }
                <p style={{width:`${cardWidth-20}px`}}>{data.time?? "-"}</p>
              </Grid>
              }
              {data.location && 
              <Grid item md={noDataCount===3 ? 12 : 6} xs={data.level==="프리미엄 구인"||data.level==="일반 구인"||data.level==="일반+ 구인"? 6 : 12}  className={styles.info_item}>
              {
                  data.type==="구인" ?
                    <div className={`icon flaticon-map-locator`}/>
                  :
                  data.type==="부동산" ?
                    <div className={`icon flaticon-checked`}/>
                  :
                    <div className={`icon flaticon-maps-and-flags`}/>
                }
                <p style={{width:`${cardWidth-20}px`}}>{data.location?? "-"}</p>
              </Grid>
              }
            </>
        }

      </Grid>

    </div>
  )
}

export default JobBox