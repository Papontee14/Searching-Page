import "./App.css";
import "./Component/TypeName";
import TypeName from "./Component/TypeName";
import Label from "./Component/Label";
import { useState, useEffect } from "react";
import mockData from "./data/data.json"

function App() {
  const [info, setInfo] = useState(null);
  const [selectGender, setSelectGender] = useState("");
  const [selectCountry, setSelectCountry] = useState("");

  const [search, setSearch] = useState("");
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    setInfo(mockData);
  }, []);

  const handleOnClear = () => {
    setSelectCountry("");
    setSelectGender("");
    setSearch("");
    setIsClear(true);
  };

  const handleOnSearch = (e) => {
    handleOnClear();

    setSearch(e.target.value);
  };

  const renderContent = () => {
    let allData = info;

    if (search) {
      allData = info?.filter((data) => {
        if (
          data.first_name.search(search) !== -1 ||
          data.last_name.search(search) !== -1
        ) {
          return data;
        }
      });
    }

    if (selectGender) {
      allData = allData?.filter(
        (data) => data?.gender?.toLowerCase() === selectGender?.toLowerCase()
      );
    }
    if (selectCountry) {
      allData = allData?.filter(
        (data) => data?.country?.toLowerCase() === selectCountry?.toLowerCase()
      );
    }

    return allData?.map((item) => (
      <Label
        key={item.id}
        fullname={`${item.first_name} ${item.last_name}`}
        gender={item.gender}
        email={item.email}
        country={item.country}
        image={item.image}
      />
    ));
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <TypeName
        setSelectGender={setSelectGender}
        setSelectCountry={setSelectCountry}
        isClear={isClear}
        setIsClear={setIsClear}
      />
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="search"
          onChange={handleOnSearch}
          value={search}
        />
        <button
          onClick={handleOnClear}
          style={{
            height: "12px",
            color: "blue",
            backgroundColor: "inherit",
            border: "none",
            fontSize: "16px",
          }}
        >
          CLEAR
        </button>
      </div>
      <div className="container">
        <div className="row row-cols-3">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
