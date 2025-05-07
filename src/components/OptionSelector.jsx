import React from 'react';

const OptionSelector = ({ label, options, selected, onSelect }) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>
      <div className="d-flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`btn ${selected === option ? 'btn-primary' : 'btn-outline-secondary'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
