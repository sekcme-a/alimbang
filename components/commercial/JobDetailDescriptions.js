import styles from "./JobDetailDescriptions.module.css"

const JobDetailsDescriptions = ({data}) => {
  return (
    <div className="job-detail">
      <div className={styles.main_container}>
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
        <h4 style={{marginTop:"50px"}}>상세정보</h4>
        {data.commercialUrl && <img src={data.commercialUrl} alt={data.title}/>}
        <p className={styles.content}>{data.content}</p>
      </div>
    </div>
  );
};

export default JobDetailsDescriptions;
