'use client';

import { checkBoxState } from '@/lib/recoil/Recoil';
import cn from 'clsx';
import { useRecoilState, useRecoilValue } from 'recoil';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  options: string[];
}

const CheckBoxComponent = (props: Props) => {
  const router = useRouter();
  const { options } = props;
  const [exampleState, setExampleState] = useState<string[]>([]);
  const [checkBoxText, setCheckBoxText] = useRecoilState(checkBoxState);

  // next.js 에서 recoil을 사용해서 localStorage에 저장된 값을 가져올 때
  // 서버 사이드 랜더링 할때 window 객체가 없어서 hydration할때 모든 데이터가 다 가져와야 하기 때문에
  // 이 문제를 해결하기 위해 먼저 hydration 과정에서 [] 값으로 초기화를 해주고
  // 이후 localStorage에 저장된 값을 가져와서 set해주는 방식으로 해결
  // 참고 : https://blog.haenu.com/10
  useEffect(() => {
    setExampleState(checkBoxText);
  }, [checkBoxText]);

  // selected 배열에 값이 있으면 제거, 없으면 추가
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (checkBoxText.includes(value)) {
      setCheckBoxText(checkBoxText.filter((item) => item !== value));
    } else {
      setCheckBoxText([...checkBoxText, value]);
    }
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
              id={`checkbox-${index}`}
              className={cn('peer')}
              type="checkbox"
              value={option}
              name="checkbox-group"
              onChange={handleChange}
              checked={exampleState.includes(option)}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="mx-[10px] cursor-pointer peer-checked:text-red-500"
            >
              {option}
            </label>
          </section>
        ))}
        <p className="mt-[20px]">
          Selected Options :
          {exampleState.map((item, index) => (
            <span key={index} className="ml-[10px]">
              {item}
              {index !== exampleState.length - 1 && ', '}
            </span>
          ))}
        </p>
      </main>
    </div>
  );
};

export default CheckBoxComponent;
