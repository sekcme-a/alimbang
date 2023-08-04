

const CompanyInfo = ({data}) => {
  return (
    <ul className="company-info" style={{wordBreak:"keep-all"}}>
      {data?.contact?.map((item, index) => {
        if(item.content && item.title!=="홈페이지"){
          return(
            <li key={`${item.title}_${index}`} style={{fontWeight:"bold"}}>
              {item.title}: <span style={{color:"#111", fontWeight:"normal"}}>{item.content}</span>
            </li>
          )
        }
      })}
    </ul>
  );
};

export default CompanyInfo;
