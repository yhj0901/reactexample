'use client';

import { useState } from 'react';

interface Props {
  options: string[];
}

const RadioButtonComponent = (props: Props) => {
  const { options } = props;
  const [selected, setSelected] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex-col w-full m-[20px]">
      {options.map((option, index) => (
        <div key={index} className="m-[10px] gap-4">
          <input
            id={`radio-button-${index}`}
            className="peer"
            type="radio"
            value={option}
            checked={selected === option}
            onChange={handleChange}
            name="radio-button-group"
          />
          <label
            htmlFor={`radio-button-${index}`}
            className="mx-[10px] cursor-pointer peer-checked:text-red-500"
          >
            {option}
          </label>
        </div>
      ))}
      <p className="mt-[20px]">Selected Option: {selected}</p>
    </div>
  );
};

export default RadioButtonComponent;
