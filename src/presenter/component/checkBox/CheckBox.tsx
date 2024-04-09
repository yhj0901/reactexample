'use client';

import { checkBoxState, checkBoxStateText } from '@/lib/recoil/Recoil';
import cn from 'clsx';
import { useRecoilState, useRecoilValue } from 'recoil';

interface Props {
  options: string[];
}

const CheckBoxComponent = (props: Props) => {
  const { options } = props;
  // const [selected, setSelected] = useState<string[]>([]);
  const [checkBoxText, setCheckBoxText] = useRecoilState(checkBoxState);
  const selectText = useRecoilValue(checkBoxStateText);

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
      {options.map((option, index) => (
        <div key={index} className="m-[10px] gap-4">
          <input
            id={`checkbox-${index}`}
            className={cn('peer')}
            type="checkbox"
            value={option}
            name="checkbox-group"
            onChange={handleChange}
          />
          <label
            htmlFor={`checkbox-${index}`}
            className="mx-[10px] cursor-pointer peer-checked:text-red-500"
          >
            {option}
          </label>
        </div>
      ))}
      <p className="mt-[20px]">Selected Options: {selectText}</p>
    </div>
  );
};

export default CheckBoxComponent;
