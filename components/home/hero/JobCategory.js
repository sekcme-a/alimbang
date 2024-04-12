import Link from "next/link";
import jobCatContent from "data/job-categories";
import { useRouter } from "next/router";
import useData from "context/data";

const JobCategory = () => {
  const router = useRouter()
  const {handleSelectedQuery, selectedQuery} = useData()

  const onClick = (item) => {
    if(item.type==="더보기") {
      handleSelectedQuery("jobSelect","전체")
    }
    else{
      handleSelectedQuery("jobSelect",item.type)
    }
    router.push("/job")
  }

  return (
    <>
      {jobCatContent.slice(0, 6).map((item) => (
        <div className="item" key={item.id} onClick={()=>onClick(item)} style={{cursor:"pointer"}}>
            <div className="icon-wrap">
              <div className={`icon ${item.icon}`}></div>
            </div>

            <div className="title">{item.catTitle}</div>
        </div>
      ))}
    </>
  );
};

export default JobCategory;
