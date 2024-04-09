'use client';
import { todoState } from '@/lib/recoil/Recoil';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

const todoComponent = () => {
  const router = useRouter();
  const [checkBoxText, setCheckBoxText] = useRecoilState(todoState);

  const onClickAction = () => {
    router.push('/todo/todoDay');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (checkBoxText.includes(value)) {
      setCheckBoxText(checkBoxText.filter((item) => item !== value));
    } else {
      // 정렬 순서 개인, 직장, 교육으로 설정되도록 함
      const order = ['개인', '직장', '교육'];
      let newCheckBoxText = [...checkBoxText, value];
      newCheckBoxText.sort((a, b) => order.indexOf(a) - order.indexOf(b));
      setCheckBoxText(newCheckBoxText);
    }
  };

  return (
    <div className="">
      <header id="header">
        <button
          id="backButton"
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
        <h1 className="text-center">TodoList를 어떻게 이용할 계획입니까?</h1>
        <section id="subTitle" className="text-center">
          해당하는 것을 모두 선택하세요.
        </section>
        <section id="todoList" className="mt-[25px] ">
          <article className="flex gap-x-[20px] items-center mb-[20px] border-solid border-[#dc4c3e] border-[1px] rounded-[5px] p-[10px] w-[350px] h-[70px]">
            <Image
              src="/images/todo/user-50.png"
              alt="todo1"
              width={25}
              height={25}
            />
            <div className="mr-[200px]">개인</div>
            <input
              type="checkbox"
              onChange={handleChange}
              value="개인"
              checked={checkBoxText.includes('개인')}
            />
          </article>
          <article className="flex gap-x-[20px] items-center mb-[20px] border-solid border-[#dc4c3e] border-[1px] rounded-[5px] p-[10px] w-[350px] h-[70px]">
            <Image
              src="/images/todo/company-50.png"
              alt="todo1"
              width={25}
              height={25}
            />
            <div className="mr-[200px]">직장</div>
            <input
              type="checkbox"
              onChange={handleChange}
              value="직장"
              checked={checkBoxText.includes('직장')}
            />
          </article>
          <article className="flex gap-x-[20px] items-center mb-[20px] border-solid border-[#dc4c3e] border-[1px] rounded-[5px] p-[10px] w-[350px] h-[70px]">
            <Image
              src="/images/todo/teaching-50.png"
              alt="todo1"
              width={25}
              height={25}
            />
            <div className="mr-[200px]">교육</div>
            <input
              type="checkbox"
              onChange={handleChange}
              value="교육"
              checked={checkBoxText.includes('교육')}
            />
          </article>
        </section>
        <button
          className="flex m-auto bg-blue-500 border-solid border-[1px] border-[#fff] p-[10px] rounded-[5px]"
          onClick={onClickAction}
        >
          TodoList 실행
        </button>
      </main>
    </div>
  );
};

export default todoComponent;
