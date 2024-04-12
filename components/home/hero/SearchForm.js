import useData from "context/data";
import Router, { useRouter } from "next/router";

const SearchForm5 = () => {
  const router = useRouter()

  const {mainPageSearchInput, setMainPageSearchInput} = useData()


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row justify-content-center justify-content-md-between">
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-9">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="구인공고를 검색하세요!"
            value={mainPageSearchInput}
            onChange={(e)=>setMainPageSearchInput(e.target.value)}
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-auto">
          <button
            className="theme-btn btn-style-two"
            onClick={() => router.push("/job")}
            style={{fontWeight:"bold"}}
          >
            구인 검색
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm5;
