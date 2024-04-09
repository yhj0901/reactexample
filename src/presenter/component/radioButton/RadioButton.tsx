'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  options: string[];
}

const RadioButtonComponent = (props: Props) => {
  const router = useRouter();
  const { options } = props;
  const [selected, setSelected] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex-col w-full m-[20px]">
      <button
        className="flex items-center mb-[30px]"
        onClick={() => router.back()}
      >
        <Image
          src="/images/window/back-48.png"
          alt="radio-button"
          height={30}
          width={30}
        />
        <p>뒤로가기</p>
      </button>
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
