import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css"
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

function List() {

  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [options,setOptions] = useState(location.state.options);
  const [openDate,setOpenDate] = useState(false);
  console.log(location);
  return <div>
    <Navbar/>
    <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsitem">
            <label>Destination</label>
            <input type="text" placeholder={destination}/>
          </div>
          <div className="lsitem">
            <label>Check-in Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item=>setDate([item.selection])}
              ranges={date}
              minDate={new Date()} />}
          </div>
          <div className="lsitem">
            <label>Options</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
              <span className="lsOptionText">Min Price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Max Price <small>per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Adult
              </span>
              <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Children
              </span>
              <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Rooms
              </span>
              <input type="number"min={1} className="lsOptionInput" placeholder={options.room}/>
            </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
    </div>
  </div>;
}

export default List;
