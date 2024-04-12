import styles from "./JobDetailDescriptions.module.css"

const JobDetailsDescriptions = ({data}) => {


  const checkIfHasData = (type) => {
    let totalLength = 0
    data[type]?.map((item) => {
      totalLength += item.content.length
    })
    if(totalLength>0) return true
    else return false
  }
  return (
    <div className="job-detail">
      <div className={styles.main_container} >
        {data.type==="구인" && checkIfHasData("info") &&
          <div className={styles.sub_container}>
            <h4>모집내용</h4>
            <ul>
              {data?.info?.map((item, index)=>{
                if(item.content!==""){
                  return(
                    <li key={`${index}_${item}`} >
                      <h5>{item.title}</h5>
                      <p>{item.content}</p>
                    </li>
                  )
                }
              }
              )}
            </ul>
          </div>
        }
        {data.type==="구인"  && checkIfHasData("condition") &&
          <div className={styles.sub_container}>
            <h4 style={{marginTop:"50px"}}>근무조건</h4>
            <ul>
              {data?.condition?.map((item, index)=>{
                if(item.content!==""){
                  return(
                    <li key={`${index}_${item}`} >
                      <h5>{item.title}</h5>
                      <p>{item.content}</p>
                    </li>
                  )
                }
              }
              )}
            </ul>
          </div>
        }
        <h4 style={{marginTop:"50px"}}>상세정보</h4>
        {data.commercialUrl && <img src={data.commercialUrl} alt={data.title}/>}
        <p className={styles.content}>{data.content}</p>
      </div>
    </div>
  );
};

export default JobDetailsDescriptions;
