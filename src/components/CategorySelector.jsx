import React from 'react';

const CategorySelector = ({ selectedType, onSelect }) => {
  const types = ['Flats / Apartments', 'Independent / Builder Floors', 'Farm House', 'House & Villa'];
  return (
    <div className="d-flex flex-wrap gap-2">
      {types.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onSelect(type)}
          className={`btn ${selectedType === type ? 'btn-primary' : 'btn-outline-secondary'}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
