'use client'

import { createContext, useState, useEffect,  useContext } from "react";
import { firestore as db } from "firebase/firebase";
import { useRouter } from "next/navigation";

const dataContext = createContext()

export default function useData(){
    return useContext(dataContext)
}

const jobTypes = ['기술/생산직','사무/경리','전문직','교사강사/교육정보','영업직','서비스직','운전직','배달직','현장직','아르바이트/기타구인','요리음식업','유흥서비스업']
const houseTypes = ['주택매매','주택임대','상가매매','상가임대','공장매매','공장임대','창고매매','창고임대','기타매매','기타임대']
const carTypes = ['현대','기아','르노코리아','쌍용','쉐보래(대우)','기타']



export function DataProvider(props){
  const [isLoading, setIsLoading] = useState(true)
  const [type, setType] = useState("job")
  const [commercialList, setCommercialList] = useState({
    all:[],
    premium: {},
    specialPlus: {},
    special: {},
    commonPlus: {},
    common: {},
    emergency: {}
  })
  const [selectedQuery, setSelectedQuery] = useState({
    searchBox: "",
    jobSelect: "전체",
    locationSelect:"전체"
  })
  const handleSelectedQuery = (type, input) =>{
    setSelectedQuery({...selectedQuery, [type]: input})
  }
  const [selectedList, setSelectedList] = useState([])

  const router = useRouter()


  //type: 구인, 중고차, 부동산   level: 프리미엄 구인 etc
  const get_level_list = (commercialListData, level, type) => {
    let list = []
    if(type==="구인")
      list = commercialListData.filter((obj) => obj.level === level && jobTypes.includes(obj.commercialType))
    if(type==="중고차")
      list = commercialListData.filter((obj) => obj.level === level && carTypes.includes(obj.commercialType))
    if(type==="부동산")
      list = commercialListData.filter((obj) => obj.level === level && houseTypes.includes(obj.commercialType))
    return list
  }

  useEffect(()=>{



    const fetchData = async() => {
      const query = await db.collection("type").doc("garosu").collection("commercials").where("mode","==","게재중").orderBy("savedAt","desc").get()
      const commercialListData = query.docs.map(doc => ({...doc.data(), id: doc.id}))

      setCommercialList({
        all: commercialListData,
        premium: {
          job: get_level_list(commercialListData, "프리미엄 구인", "구인"),
          car: get_level_list(commercialListData, "프리미엄 구인", "자동차"),
          house: get_level_list(commercialListData, "프리미엄 구인", "부동산"),
        },
        specialPlus: {
          job: get_level_list(commercialListData, "스페셜+ 구인", "구인"),
          car: get_level_list(commercialListData, "스페셜+ 구인", "자동차"),
          house: get_level_list(commercialListData, "스페셜+ 구인", "부동산"),
        },
        special: {
          job: get_level_list(commercialListData, "스페셜 구인", "구인"),
          car: get_level_list(commercialListData, "스페셜 구인", "자동차"),
          house: get_level_list(commercialListData, "스페셜 구인", "부동산"),
        },
        commonPlus: {
          job: get_level_list(commercialListData, "일반+ 구인", "구인"),
          car: get_level_list(commercialListData, "일반+ 구인", "자동차"),
          house: get_level_list(commercialListData, "일반+ 구인", "부동산"),
        },
        common: {
          job: get_level_list(commercialListData, "일반 구인", "구인"),
          car: get_level_list(commercialListData, "일반 구인", "자동차"),
          house: get_level_list(commercialListData, "일반 구인", "부동산"),
        },
        emergency: {
          job: get_level_list(commercialListData, "긴급 구인", "구인"),
          car: get_level_list(commercialListData, "긴급 구인", "자동차"),
          house: get_level_list(commercialListData, "긴급 구인", "부동산"),
        }
      })

      setIsLoading(false)
    }
    fetchData()
  },[])



  //검색 검색링
  useEffect(()=>{
    console.log(selectedQuery)
    const sortBySelection = (item) => {
      return  (selectedQuery.searchBox===""
                ||item.title.includes(selectedQuery.searchBox)
                ||item.companyValues.companyName.includes(selectedQuery.searchBox)
                ||item.companyValues.phoneNumber.includes(selectedQuery.searchBox)
                ||item.commercialType.includes(selectedQuery.searchBox)
              )
              &&
              (selectedQuery.jobSelect==="전체"||selectedQuery.jobSelect===item.commercialType)
              &&
              (selectedQuery.locationSelect==="전체"||selectedQuery.locationSelect===item.locationType)
              
    }
    const sortedList = commercialList.all.filter(sortBySelection)
    console.log(sortedList)
    setSelectedList(sortedList)
  },[selectedQuery, type, commercialList])


  //메인페이지 땜빵 (한줄당 광고4개)
  //tpe = "job || car || house"
  const addDamBang = (tpe, lst) => {
    function computeOutput(input) {
      const remainder = input % 4;
      switch (remainder) {
        case 0:
          return 0;
        case 1:
          return 3;
        case 2:
          return 2;
        case 3:
          return 1;
        default:
          return -1; // Handle invalid input (optional)
      }
    }
    let tempList = lst
    const count = computeOutput(tempList.length)
    let text = ""
    if(tpe==="job")
      text = "구인"
    else if(tpe==="house")
      text = "부동산"
    else
      text = "중고차"
    for(let i = 0; i<count;i++){
      tempList.push({
        id: "guide",
        companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
        title: `효과 빠른 ${text}! 안산 가로수`,
        salary: "시급 10만원",
        date: "주 5일",
        time: "8시간",
        location: "영흥도",
        level:"스페셜+ 구인",
        type: "dambang"
      })
    }
    return tempList
  }
  

  //상세페이지 땜빵(한줄당 광고 3개)
  const addDamBang2 = (tpe, lst) => {
    function computeOutput(input) {
      // if(input===0)
      //   return 3;
      const remainder = input % 3;
      switch (remainder) {
        case 0:
          return 0;
        case 1:
          return 2;
        case 2:
          return 1;
        default:
          return -1; // Handle invalid input (optional)
      }
    }
    let tempList = lst
    const count = computeOutput(tempList.length)
    let text = ""
    if(tpe==="job")
      text = "구인"
    else if(tpe==="house")
      text = "부동산"
    else
      text = "중고차"

    for(let i = 0; i<count;i++){
      tempList.push({
        id: "asdf",
        companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
        title: `효과 빠른 ${text}! 안산 가로수`,
        salary: "시급 10만원",
        date: "주 5일",
        time: "8시간",
        location: "영흥도",
        level:"스페셜+ 구인",
        type: "dambang"
      })
    }
    return tempList
  }
  

  const fetch_from_id = (id) => {
    let data = {}
    commercialList.all.forEach((commercial) => {
      if(commercial.id === id)
        data = commercial
    })
    return data
  }


  const value = {
    commercialList,
    addDamBang,
    addDamBang2,
    selectedQuery,
    handleSelectedQuery,
    setSelectedQuery,
    type,
    setType,
    get_level_list,
    selectedList,
    fetch_from_id
  }

  return <dataContext.Provider value={value} {...props} />
}
