import Image from "next/image"
import styles from "./fullscreenloader.module.css"
const FullScreenLoader = () => {


  return(
    <div className={styles.main_container}>
        <div className={styles.loader} />
        <Image
          style={{marginLeft:"40px"}}
          src="/images/alimbang_logo.png"
          alt="시흥알림방 로고"
          width={300}
          height={40}
        />
    </div>
  )
}

export default FullScreenLoader