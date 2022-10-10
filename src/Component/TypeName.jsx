import { useState, useEffect } from "react";
import "./TypeName.css";

const TypeName = ({
  setSelectGender,
  setSelectCountry,
  isClear,
  setIsClear,
}) => {
  const [currentGender, setCurrentGender] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");

  useEffect(() => {
    if (isClear) {
      setCurrentGender("");
      setCurrentCountry("");
      setIsClear(false);
    }
  }, [isClear]);

  const commonGender = [
    { id: "male", display: "Male" },
    { id: "female", display: "Female" },
    { id: "bigender", display: "Bigender" },
    { id: "nonBinary", display: "Non-binary" },
    { id: "polygender", display: "Polygender" },
    { id: "agender", display: "Agender" },
    { id: "genderfluid", display: "Genderfluid" },
    { id: "genderqueer", display: "Genderqueer" },
  ];

  const commonCountry = [
    { id: "brazil", display: "Brazil" },
    { id: "thailand", display: "Thailand" },
    { id: "sweden", display: "Sweden" },
    { id: "japan", display: "Japan" },
    { id: "netherlands", display: "Netherlands" },
  ];

  const selectGender = (e) => {
    const { id } = e.target;
    setSelectGender(id);
    setCurrentGender(id);
  };

  const selectCountry = (e) => {
    const { id } = e.target;
    setSelectCountry(id);
    setCurrentCountry(id);
  };

  return (
    <div>
      <div className="gender">
        {commonGender.map((gender) => {
          let style = {};

          if (currentGender === gender.id) {
            style = {
              backgroundColor: "black",
              color: "white",
            };
          }

          return (
            <button
              className="box"
              style={style}
              onClick={selectGender}
              id={gender.id}
            >
              {gender.display}
            </button>
          );
        })}
      </div>
      <div className="country">
        {commonCountry.map((country) => {
          let style = {};

          if (currentCountry === country.id) {
            style = {
              backgroundColor: "black",
              color: "white",
            };
          }

          return (
            <button
              className="box"
              style={style}
              onClick={selectCountry}
              id={country.id}
            >
              {country.display}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TypeName;
