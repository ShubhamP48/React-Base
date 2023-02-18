import React, {useState} from "react";
import MultiSelectDropdown from "../common/input/searchInput";

const Demo = () => {
    const [searchResults, setSearchResults] = useState([]);

  const handleSelect = (searchTerm: any, selectedOptions: any[]) => {
    // perform search based on search term and selected options
    // and update searchResults state
    // setSearchResults([...searchResults, `${searchTerm}: ${selectedOptions.join(', ')}`]);
  };
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];


  return (
    <div>
      <MultiSelectDropdown
        options={options}
        label="Select options"
        placeholder="Select"
        onChange={(selectedValues: any) => console.log(selectedValues)}
        />
    </div>
  );
};

export default Demo;
