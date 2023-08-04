

import SearchBox from "./SearchBox";
import JobSelect from "./JobSelect";
import LocationSelect from "./LocationSelect.js"
import CallToActions from "./CallToActions"

const FilterSidebar = () => {
  return (
    <div className="inner-column">
      <div className="filters-outer">
        <button
          type="button"
          className="btn-close text-reset close-filters show-1023"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        {/* End .close filter */}

        <div className="filter-block">
          <h4 style={{fontWeight:"bold"}}>중고차 검색</h4>
          <div className="form-group">
            <SearchBox />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        {/* <div className="filter-block">
          <h4>Location</h4>
          <div className="form-group">
            <LocationBox />
          </div>

          <p>Radius around selected destination</p>
          <DestinationRangeSlider />
        </div> */}
        {/* <!-- Filter Block --> */}

        <div className="checkbox-outer">
          <h4 style={{fontWeight:"bold"}}>차종 선택</h4>
          <div className="form-group">
            <JobSelect />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        {/* <!-- Switchbox Outer --> */}

        <div className="checkbox-outer">
          <h4 style={{fontWeight:"bold"}}>지역 선택</h4>
          <LocationSelect />
        </div>

      </div>
      <CallToActions />
      <div style={{marginBottom:"70px"}}/>
    </div>
  );
};

export default FilterSidebar;
