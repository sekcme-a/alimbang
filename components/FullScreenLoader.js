import Image from "next/image"
import styles from "./fullscreenloader.module.css"
import useData from "context/data"
const FullScreenLoader = () => {
  const {isLoading} = useData()

  if(isLoading)
  return(
    <div className={styles.main_container}>
        <div className={styles.loader} />
        <Image
          style={{marginLeft:"40px"}}
          src="/images/alimbang_logo.png"
          alt="시흥알림방 로고"
          width={300}
          height={40}
          objectFit="contain"
        />
    </div>
  )
}

export default FullScreenLoader