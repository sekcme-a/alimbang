import useData from "context/data";
import Link from "next/link";
// import {
//   blogItems,
//   candidateItems,
//   employerItems,
//   findJobItems,
//   pageItems,
//   shopItems,
// } from "data/mainMenuData"
// import {
//   isActiveParent,
//   isActiveLink,
//   isActiveParentChaild,
// } from "utils/linkActiveChecker";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
  const {handleSelectedQuery } = useData()
  const router = useRouter();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li>
            <span className={router.asPath==="/" ? "current" : ""} onClick={()=>router.push("/")}>Home</span> 
          </li>
          {/* End homepage menu items */}

          <li>
            <span className={router.asPath==="/job" ? "current" : ""} onClick={()=>{handleSelectedQuery("jobSelect","전체");router.push("/job")}}>구인구직</span>
          </li>
          <li>
            <span className={router.asPath==="/house" ? "current" : ""} onClick={()=>router.push("/house")}>부동산</span>
          </li>
          <li>
            <span className={router.asPath==="/car" ? "current" : ""} onClick={()=>router.push("/car")}>중고차</span>
          </li>
          <li>
            <span className={router.asPath==="/newspaper" ? "current" : ""} onClick={()=>router.push("/newspaper")}>신문보기</span>
          </li>
          {/* <li>
            <span className={router.asPath==="/guide" ? "current" : ""} onClick={()=>router.push("/guide")}>상품안내</span>
          </li> */}
          {/* End findjobs menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
