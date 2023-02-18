import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import './MultiSelectDropdown.css';

const MultiSelectDropdown = ({ options, label, placeholder, onChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedValues, setSelectedValues] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOptionClick = (option) => {
        if (selectedValues.includes(option)) {
            setSelectedValues(selectedValues.filter((value) => value !== option));
        } else {
            setSelectedValues([...selectedValues, option]);
        }
    };


    const handleRemoveValue = (value) => {
        const updatedValues = selectedValues.filter((option) => option !== value);
        setSelectedValues(updatedValues);
        onChange(updatedValues);
    };

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="multi-select-dropdown">
            <label className="multi-select-dropdown__label">{label}</label>
            <div className="multi-select-dropdown__input-container">
                <input
                    className="multi-select-dropdown__input"
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
            <div className="multi-select-dropdown__opti ons">
                {filteredOptions.map((option) => (
                    <div
                        key={option}
                        className={`multi-select-dropdown__option ${selectedValues.includes(option) ? 'selected' : ''
                            }`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <div className="selected-values-wrapper">
                {selectedValues.map((value, index) => (
                    <div className="selected-value" key={index}>
                        <span>{value}</span>
                        <Button variant="outline-secondary" size="sm" onClick={() => handleRemoveValue(value)}>
                            &times;
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiSelectDropdown;
