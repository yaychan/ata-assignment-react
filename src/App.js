import React, { useEffect, useState } from "react";
import "./App.css";
import ExpandableTable from "./components/expandableTable/ExpandableTable";
import FetchData from "./services/fetch-data.services";

const App = () => {
  const [accountList, setAccountList] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    setAccountList(FetchData());
  }, []);

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleSearch = () => {
    const filtered = accountList.filter((row) => {
      const rowDate = new Date(row.date);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);
      return rowDate >= fromDateObj && rowDate <= toDateObj;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <div className="search-container">
        <div className="search-result">
          <p className="lbl-bold">Search</p>
          <p className="lbl-search-result">
            Search results:{filteredData?.length || accountList?.length}
          </p>
        </div>
        <div className="mb-16 search-elements">
          <label htmlFor="period">Period:</label>
          <select id="period" className="custom-select">
            <option value="transmission" selected>
              Transmission
            </option>
          </select>
          <label htmlFor="status">Status:</label>
          <select id="status" className="custom-select">
            <option value="waiting" selected>
              Waiting
            </option>
          </select>

          <label>
            From
            <input
              type="date"
              id="fromDate"
              className="ml-8"
              value={fromDate}
              onChange={handleFromDateChange}
            />
          </label>
          <label>
            To
            <input
              type="date"
              id="toDate"
              className="ml-8"
              value={toDate}
              onChange={handleToDateChange}
            />
          </label>
          <button onClick={handleSearch} className="search-button ml-8">
            Search
          </button>
        </div>
      </div>
      <div>
        <ExpandableTable data={filteredData || accountList} />
      </div>
    </div>
  );
};

export default App;
