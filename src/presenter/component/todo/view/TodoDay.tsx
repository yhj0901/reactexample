'use client';

import { todoStateText, todoList } from '@/lib/recoil/Recoil';
import { useRecoilValue, useRecoilState } from 'recoil';
import cn from 'clsx';
import { use, useEffect, useState } from 'react';
import { todo } from 'node:test';

type TodoDayProps = {
  todoType: string;
  todoText: string;
};

const TodoDay = () => {
  const stateText = useRecoilValue(todoStateText);
  const [todoListText] = useRecoilState(todoList);
  const [todoItems, setTodoItems] = useState<TodoDayProps[]>([]);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    console.log('todoListText', todoListText);
    console.log('todoItems', todoItems);
  }, [todoListText, todoItems]);

  const handleInputChange = (
    item: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValues({
      ...inputValues,
      [item]: e.target.value, // 특정 item에 대한 값을 업데이트
    });
  };

  const handleAddCard = (item: string) => {
    const todoDay = { todoType: item, todoText: inputValues[item] };
    setTodoItems([...todoItems, todoDay]);
    setInputValues({ ['']: '' });
  };

  const handleDeleteCard = (type: string, index: number) => {
    // 먼저, 해당 type을 가진 항목들의 인덱스를 찾기
    const targetIndexes = todoItems
      .map((item, idx) => (item.todoType === type ? idx : -1))
      .filter((idx) => idx !== -1);

    // targetIndexes 배열에서 실제 삭제할 대상 인덱스 구하기
    const realIndexToDelete = targetIndexes[index];

    // realIndexToDelete가 유효한 경우에만 삭제 진행
    if (realIndexToDelete !== undefined) {
      // 새로운 배열 생성: realIndexToDelete에 해당하는 항목 제외
      const newTodoItems = todoItems.filter(
        (_, idx) => idx !== realIndexToDelete
      );

      // 상태 업데이트
      setTodoItems(newTodoItems);
    }
  };

  return (
    <div>
      {stateText.map((item, index) => (
        <div
          key={index}
          className={cn(
            'relative flex flex-col mt-6 text-gray-700 bg-white shadow-md',
            'bg-clip-border rounded-xl w-96'
          )}
        >
          <div className="p-6">
            <h5
              className={cn(
                'block mb-2 font-sans text-xl antialiased',
                'font-semibold leading-normal text-blue-gray-900'
              )}
            >
              {item}
            </h5>
            <div>
              <input
                id={`inputValue-${item}`}
                type="text"
                className="border-solid border-[1px] border-[#000]"
                value={inputValues[item] || ''} // 특정 item의 값을 사용
                onChange={(e) => handleInputChange(item, e)}
              />
              <button onClick={() => handleAddCard(item)} className="m-[10px]">
                추가
              </button>
            </div>
          </div>
          {todoItems.length !== 0 &&
            todoItems
              .filter((card) => card.todoType === item)
              .map((card, index) => (
                <div
                  key={index}
                  className="ml-[25px] mb-[25px] flex justify-between"
                >
                  <p className="">
                    {index + 1} : {card.todoText}
                  </p>
                  <button
                    className="mr-[30px]"
                    onClick={() => handleDeleteCard(card.todoType, index)}
                  >
                    삭제
                  </button>
                </div>
              ))}
        </div>
      ))}
    </div>
  );
};

export default TodoDay;