// import FooterDefault from "../../footer/common-footer";
// import LoginPopup from "../../common/form/login/LoginPopup";
import Header2 from "components/header/Header2";
import MobileMenu from "components/header/MobileMenu";
// import FilterJobsBox from "./FilterJobsBox";
import FilterSideBar from "./FilterSideBar";
import Footer from "components/footer/Footer";
import { Grid, FormControl, InputLabel,Select, MenuItem } from "@mui/material";
import Breadcrumb from "components/common/Breadcrumb"
import { useEffect, useState } from "react";
import JobBox from "components/common/JobBox";
import useData from "context/data";
import HeaderNav from "components/house/HeaderNav"
import TextNavi from "./TextNavi"


const JobList = () => {
    const [values, setValues] = useState({
        sortBy: "기본순"
    })
    const onValuesChange = (prop) => (event) => {
        setValues(prevValues => ({...prevValues, [prop]: event.target.value}))
    }
    const {selectedList, get_level_list, addDamBang2} = useData()
    const [premiumList, setPremiumList] = useState([])
    const [specialList, setSpecialList] = useState([])
    const [normalList, setNormalList] = useState([])
    const [noCommercial, setNoCommercial] = useState(false)

    //***모니터 크기 측정 */
    const [monitorSize, setMonitorSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setMonitorSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    //**모니터 크기 측정 끝 */

    useEffect(()=>{
        const prem = addDamBang2("house", get_level_list(selectedList, "프리미엄 구인", "부동산"))
        const spe = addDamBang2("house", [...get_level_list(selectedList, "스페셜+ 구인", "부동산"),...get_level_list(selectedList, "스페셜 구인", "부동산")])
        const nor = [...get_level_list(selectedList, "일반+ 구인", "부동산"),...get_level_list(selectedList, "일반 구인", "부동산")]
        setPremiumList(prem)
        setSpecialList(spe)
        setNormalList(nor)

        //광고가 없을때 땜빵
        if(prem.length+spe.length+nor.length===0){
            setPremiumList([{
                id: "asdf",
                companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
                title: "효과 빠른 부동산! 안산 가로수",
                salary: "시급 10만원",
                date: "주 5일",
                time: "8시간",
                location: "영흥도",
                level:"스페셜+ 구인",
                type: "dambang"
              },{
                id: "asdf",
                companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
                title: "효과 빠른 부동산! 안산 가로수",
                salary: "시급 10만원",
                date: "주 5일",
                time: "8시간",
                location: "영흥도",
                level:"스페셜+ 구인",
                type: "dambang"
              },{
                id: "asdf",
                companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
                title: "효과 빠른 부동산! 안산 가로수",
                salary: "시급 10만원",
                date: "주 5일",
                time: "8시간",
                location: "영흥도",
                level:"스페셜+ 구인",
                type: "dambang"
              }])
            setSpecialList([{
            id: "asdf",
            companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
            title: "효과 빠른 부동산! 안산 가로수",
            salary: "시급 10만원",
            date: "주 5일",
            time: "8시간",
            location: "영흥도",
            level:"스페셜+ 구인",
            type: "dambang"
            },{
            id: "asdf",
            companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
            title: "효과 빠른 부동산! 안산 가로수",
            salary: "시급 10만원",
            date: "주 5일",
            time: "8시간",
            location: "영흥도",
            level:"스페셜+ 구인",
            type: "dambang"
            },{
            id: "asdf",
            companyValues: {companyName: "안산 가로수", logoUrl:"/images/ansangarosu-logo.png" },
            title: "효과 빠른 부동산! 안산 가로수",
            salary: "시급 10만원",
            date: "주 5일",
            time: "8시간",
            location: "영흥도",
            level:"스페셜+ 구인",
            type: "dambang"
            }])
        }
    },[selectedList])


    return (
        <>
            {/* <!-- Header Span --> */}
            <span className="header-span"></span>

            {/* <LoginPopup /> */}
            {/* End Login Popup Modal */}

            <Header2 />
            {/* End Header with upload cv btn */}

            <MobileMenu />
            {/* End MobileMenu */}

            {/* <Breadcrumb title="안산가로수 구인구직" meta="구인구직" /> */}
           


            <section className="ls-section style-one" style={{padding: 0}}>
                <div className="row no-gutters">
                    <div
                        className="offcanvas offcanvas-start"
                        tabIndex="-1"
                        id="filter-sidebar"
                        aria-labelledby="offcanvasLabel"
                    >
                        <div className="filters-column hide-left">
                            <FilterSideBar />
                        </div>
                    </div>
                    {/* End filter column for tablet and mobile devices */}

                    <div className="filters-column hidden-1023 col-xl-3 col-lg-4 col-md-12 col-sm-12">
                        <FilterSideBar />
                    </div>
                    {/* <!-- End Filters Column --> */}



                    <div className="content-column col-xl-9 col-lg-8 col-md-12 col-sm-12" style={monitorSize>1024 ? {padding:"0px"} : {padding: "0 12px"}}>
                    <HeaderNav />
                        <div className="ls-outer" style={monitorSize>1024 ? {paddingRight:"12px"} : {}}>
                        {/* <div className="ls-switcher"> */}
                            {/* <div className="show-result"> */}
                            {monitorSize<600 &&
                                <div className="show-1023" style={{display:'flex', justifyContent:'center'}}>
                                    <button
                                        type="button"
                                        className="theme-btn toggle-filters "
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#filter-sidebar"
                                        style={{width:'100%', margin:'10px 10px 0 10px'}}
                                    >
                                        <span className="flaticon-search-1" style={{fontWeight:"bold"}}></span>상세 검색
                                    </button>
                                </div>
                            }
                                {/* Collapsible sidebar button */}
                                {monitorSize>600 ? 
                                    <div style={{display:"flex", justifyContent:'space-between', width:'100%', padding:"0 10px", marginTop:"20px"}}>
                                        <div className="text" style={{textAlign:"center", fontSize:'13px'}}>
                                            <TextNavi />
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div className="text" style={{textAlign:"start", paddingLeft:"10px", fontSize:"13px"}}>
                                            <TextNavi />
                                        </div>
                                    </>
                                }
 
                            {/* </div> */}
                        {/* </div> */}


                        



                            {/* <FilterJobsBox /> */}
                            {premiumList.length!==0 && 
                                <>
                                    <h4 style={{fontWeight:"bold", paddingLeft:"10px", marginBottom:"5px"}}>프리미엄 부동산정보</h4>
                                    <Grid container spacing={{md:2, sm: 1, xs:1}} sx={{mt:"0px !important", padding: "0 10px", mb:"50px"}}>
                                        {
                                            
                                            premiumList.map((item, index) => {
                                                return(
                                                    <Grid item xs={12} sm={4} md={4} key={`${index}_${item.id}`}>
                                                        <JobBox item={item}/>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </>
                            }

                            {specialList.length!==0 && 
                                <>
                                    <h4 style={{marginTop:"30px", fontWeight:"bold", paddingLeft:"10px", marginBottom:"5px"}}>스페셜 부동산정보</h4>
                                    <Grid container spacing={{md:2, sm: 1, xs:1}} sx={{mt:"0px !important", padding: "0 10px", mb:"50px"}}>
                                        {
                                            
                                            specialList.map((item, index) => {
                                                return(
                                                    <Grid item xs={12} sm={4} md={4} key={`${index}_${item.id}`}>
                                                        <JobBox item={item}/>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </>
                            }

                            {normalList.length!==0 &&   
                                <>
                                    <h4 style={{marginTop:"30px", fontWeight:"bold", paddingLeft:"10px", marginBottom:"5px"}}>일반 부동산정보</h4>
                                    <Grid container sx={{mt:"10px !important", padding: "0 10px"}}>
                                        {
                                                    
                                            normalList.map((item, index) => {
                                                return(
                                                    <Grid item xs={12} sm={6} md={4} key={`${index}_${item.id}`}>
                                                        <JobBox item={item}/>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </>
                            }
                        </div>
                    </div>
                    {/* <!-- End Content Column --> */}
                </div>
                {/* End row */}
            </section>
            {/* <!--End Listing Page Section --> */}

            <Footer />
            {/* <!-- End Main Footer --> */}
        </>
    );
};

export default JobList;
