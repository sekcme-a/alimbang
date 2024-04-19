const JobOverView = ({data}) => {

  const filtered_text = (text) => {
    if(text==="")
      return "--"
    else
      return text
  }
  if(data.type==="구인")
    return (
      <ul>
        <li>
          <i className="icon icon-salary"></i>
          <h5 style={{fontWeight:"bold"}}>급여:</h5>
          <span style={{color: 'black', fontWeight:"bold"}}>{filtered_text(data.salary)}</span>
        </li>
        <li>
          <i className="icon icon-calendar"></i>
          <h5 style={{fontWeight:"bold"}}>요일:</h5>
          <span>{filtered_text(data.date)}</span>
        </li>
        <li>
          <i className="icon icon-clock"></i>
          <h5 style={{fontWeight:"bold"}}>시간:</h5>
          <span>{filtered_text(data.time)}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5 style={{fontWeight:"bold"}}>지역:</h5>
          <span>{filtered_text(data.location)}</span>
        </li>
      </ul>
    )
  else if(data.type==="부동산")
    return (
      <ul>
        <li>
          <i className="icon icon-salary"></i>
          <h5 style={{fontWeight:"bold"}}>매매/임대가:</h5>
          <span style={{color: 'red'}}>{filtered_text(data.salary)}</span>
        </li>
        <li>
          <i className="icon"><div style={{fontSize:"24px", color:"#1967D2"}} className={`icon flaticon-house-silhouette`}/></i>
          <h5 style={{fontWeight:"bold"}}>유형:</h5>
          <span>{filtered_text(data.date)}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5 style={{fontWeight:"bold"}}>지역:</h5>
          <span>{filtered_text(data.time)}</span>
        </li>
        <li>
          <i className="icon"><div style={{fontSize:"22px", color:"#1967D2"}} className={`icon flaticon-checked`}/></i>
          <h5 style={{fontWeight:"bold"}}>기타:</h5>
          <span>{filtered_text(data.location)}</span>
        </li>
      </ul>
    )
  else
    return (
      <ul>
        <li>
          <i className="icon icon-salary"></i>
          <h5 style={{fontWeight:"bold"}}>매매가:</h5>
          <span style={{color: 'red'}}>{filtered_text(data.salary)}</span>
        </li>
        <li>
          <i className="icon icon-calendar"></i>
          <h5 style={{fontWeight:"bold"}}>연식:</h5>
          <span>{filtered_text(data.date)}</span>
        </li>
        <li>
          <i className="icon"><div style={{fontSize:"24px", color:"#1967D2"}} className={`icon flaticon-car`}/></i>
          <h5 style={{fontWeight:"bold"}}>차종:</h5>
          <span>{filtered_text(data.time)}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5 style={{fontWeight:"bold"}}>주행거리:</h5>
          <span>{filtered_text(data.location)}</span>
        </li>
      </ul>
    )
};

export default JobOverView;
