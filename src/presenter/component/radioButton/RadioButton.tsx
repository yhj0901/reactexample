'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { radioButtonState } from '@/lib/recoil/Recoil';
import { useRecoilState, useRecoilValue } from 'recoil';

interface Props {
  options: string[];
}

const RadioButtonComponent = (props: Props) => {
  const router = useRouter();
  const { options } = props;
  const [selected, setSelected] = useRecoilState(radioButtonState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex-col w-full m-[20px]">
      <header id="header">
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
      </header>
      <main id="main">
        {options.map((option, index) => (
          <section key={index} className="m-[10px] gap-4">
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
          </section>
        ))}
        <p className="mt-[20px]">Selected Option: {selected}</p>
      </main>
    </div>
  );
};

export default RadioButtonComponent;
