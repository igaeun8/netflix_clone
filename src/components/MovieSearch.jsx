import React from "react";
import "../styles/MovieSearch.css";

const MovieSearch = ({
  dropdownEntries,
  selectedOptions,
  onOptionSelect,
  onClearOptions,
}) => {
  const handleSelect = (key, value) => {
    onOptionSelect(key, value);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
      </div>
      {dropdownEntries.map((dropdown) => (
        <div className="dropdown-group" key={dropdown.key}>
          <label className="filter-label">{dropdown.key}</label>
          <select
            value={selectedOptions[dropdown.key] || ""}
            onChange={(e) => handleSelect(dropdown.key, e.target.value)}
            className="dropdown-select"
          >
            <option value="" disabled>
              선택하세요
            </option>

            {dropdown.options.map((option) =>
              typeof option === "string" ? (
                <option key={option} value={option}>
                  {option}
                </option>
              ) : (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              )
            )}
          </select>
        </div>
      ))}
           <button className="clear-options" onClick={onClearOptions}>
          초기화
        </button>
    </div>
  );
};

export default MovieSearch;
