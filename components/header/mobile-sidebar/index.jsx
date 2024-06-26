"use client";
import Link from "next/link";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import styles from "./index.module.css"
import useData from "context/data";
import SidebarBanner from "./SidebarBanner";

const Index = () => {
  const router = useRouter();

  const {handleSelectedQuery, selectedQuery} = useData()


  // const onItemClick = (url) => {
  //   if(router.asPath===url)
  //     console.log("asdf")
  // }

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            <MenuItem onClick={()=>router.push("/")}>
              <div className={styles.item_container} data-bs-dismiss="offcanvas" >
                <h6>Home</h6>
                <p>{">"}</p>
              </div>
            </MenuItem>

            <MenuItem onClick={()=>{handleSelectedQuery("jobSelect","전체");router.push("/job")}}>
              <div className={styles.item_container} data-bs-dismiss="offcanvas">
                <h6>구인구직</h6>
                <p>{">"}</p>
              </div>
            </MenuItem>
            <MenuItem onClick={()=>router.push("/house")}>
              <div className={styles.item_container} data-bs-dismiss="offcanvas">
                <h6>부동산</h6>
                <p>{">"}</p>
              </div>
            </MenuItem>
            <MenuItem onClick={()=>router.push("/car")}>
              <div className={styles.item_container} data-bs-dismiss="offcanvas">
                <h6>중고차</h6>
                <p>{">"}</p>
              </div>
            </MenuItem>
            <MenuItem onClick={()=>router.push("/newspaper")}>
              <div className={styles.item_container} data-bs-dismiss="offcanvas">
                <h6>신문보기</h6>
                <p>{">"}</p>
              </div>
            </MenuItem>
            {/* <MenuItem onClick={()=>router.push("/")}>
              <div className={styles.item_container} data-bs-dismiss="offcanvas">
                <h6>상품안내</h6>
                <p>{">"}</p>
              </div>
            </MenuItem> */}

            {/* {mobileMenuData.map((item) => (
              <SubMenu
                className={
                  isActiveParentChaild(item.items, router.asPath)
                    ? "menu-active"
                    : ""
                }
                label={item.label}
                key={item.id}
              >
                {item.items.map((menuItem, i) => (
                  <MenuItem
                    className={
                      isActiveLink(menuItem.routePath, router.asPath)
                        ? "menu-active-link"
                        : ""
                    }
                    key={i}
                    routerLink={<Link href={menuItem.routePath} />}
                  >
                    {menuItem.name}
                  </MenuItem>
                ))}
              </SubMenu>
            ))} */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <SidebarBanner />

      <SidebarFooter />
    </div>
  );
};

export default Index;
