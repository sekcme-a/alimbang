import Image from "next/image"
import styles from "./JobBox.module.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Button, Grid } from "@mui/material"


const redOutlinedButtonStyle = {
  color: 'green',           // Text color
  borderColor: 'green',     // Outline color
  '&:hover': {
    backgroundColor: 'green',    // Background color on hover (optional)
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

  useEffect(() => {
    if(item){
      setData(item)
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
      : screenWidth>600 ? 28-letterCount : 25-letterCount}px`, // Adjust the font size based on the letter count
    fontWeight:"bold"
  };



  


  //떔빵구인
  if(data.type==="dambang")
    return(
        <div className={`${styles.main_container} ${data.level==="프리미엄 구인" ? styles.premium : data.level==="스페셜+ 구인" ? styles.special : data.level==="일반+ 구인" ? styles.normal_plus : styles.normal}`} onClick={()=>router.push(`/${data.id}`)}>
        {data.level!=="일반 구인"&&data.level!=="일반+ 구인" &&
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
        }   
        {/* <h1 className={styles.companyName}>{data.companyName}</h1> */}
        <h2 className={styles.title}>{data.title}</h2>

        <div className={styles.button_container}>
          <Button
            fullWidth
            variant="outlined"
            onClick={()=>router.push(`/${data.id}`)}
            sx={{fontWeight:"bold"}}
            // color="pr"
            style={redOutlinedButtonStyle}
          >
            상품안내
          </Button>
        </div>

      </div>
    )

  //일반 구인
  if(data.level==="일반+ 구인"||data.level==="일반 구인")
    return(
      <div className={styles.common_container} onClick={()=>router.push(`/commercial/${data.id}`)}>
        <div>
          <h1>{data.companyValues.companyName}</h1>
          <h2>{data.title}</h2>
          <p><strong>{data.salary}</strong>{` | ${data.date} | ${data.time} | ${data.location}`}</p>
        </div>
      </div>
    )

  return(
    <div className={`${styles.main_container} ${data.level==="프리미엄 구인" ? styles.premium : data.level==="스페셜+ 구인" ? styles.special_plus : data.level==="스페셜 구인" ? styles.special : data.level==="일반+ 구인" ? styles.normal_plus : styles.normal}`} onClick={()=>router.push(`/commercial/${data.id}`)}>
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
      <h1 className={styles.companyName}>{data.companyName}</h1>
      <h2 className={styles.title}>{data.title}</h2>

      <Grid container sx={data.level==="일반 구인"||data.level==="일반+ 구인" ? {mt:"2px"} : {mt: "12px"}} rowSpacing={isMobile ? 0.5 : 0.8}>

        <Grid item md={6} xs={data.level==="프리미엄 구인"||data.level==="일반 구인"||data.level==="일반+ 구인" ? 6 : 12} className={`${styles.info_item} ${styles.salary}`}>
          <div className={`icon flaticon-money-1`}/>
          <p>{data.salary}</p>
        </Grid>

        <Grid item md={6} xs={data.level==="프리미엄 구인"||data.level==="일반 구인"||data.level==="일반+ 구인" ? 6 : (data.date+data.time).length>8 ? 12 : 6}  className={styles.info_item}>
          {
            data.type==="구인" ?
              <div className={`icon flaticon-confirm-schedule`}/>
            :
            data.type==="부동산" ?
              <div className={`icon flaticon-house-silhouette`}/>
            :
              <div className={`icon flaticon-confirm-schedule`}/>
          }
          <p>{data.date}</p>
        </Grid>

        <Grid item md={6} xs={6}  className={styles.info_item}>
          {
            data.type==="구인" ?
              <div className={`icon flaticon-clock-2`}/>
            :
            data.type==="부동산" ?
            <div className={`icon flaticon-map-locator`}/>
            :
              <div className={`icon flaticon-car`}/>
          }
          <p>{data.time}</p>
        </Grid>

        <Grid item md={6} xs={data.level==="프리미엄 구인"||data.level==="일반 구인"||data.level==="일반+ 구인"? 6 : 12}  className={styles.info_item}>
        {
            data.type==="구인" ?
              <div className={`icon flaticon-map-locator`}/>
            :
            data.type==="부동산" ?
              <div className={`icon flaticon-checked`}/>
            :
              <div className={`icon flaticon-maps-and-flags`}/>
          }
          <p>{data.location}</p>
        </Grid>

      </Grid>

    </div>
  )
}

export default JobBox