import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-[18px] m-[20px]">
      <div className=" border-solid border-[1px] bg-red-500 p-[5px] mb-[25px] text-center">
        <Link href={'/radioButton'}>
          <h1>라디오버튼</h1>
        </Link>
      </div>

      <div className=" border-solid border-[1px] bg-red-500 p-[5px] mb-[25px] text-center">
        <Link href={'/checkBox'}>
          <h1>체크박스</h1>
        </Link>
      </div>
      <div className=" border-solid border-[1px] bg-red-500 p-[5px] mb-[25px] text-center">
        <Link href={'/todo'}>
          <h1>TodoList</h1>
        </Link>
      </div>

      <div className=" border-solid border-[1px] bg-red-500 p-[5px] text-center">
        <Link href={'/auth'}>
          <h1>Google 로그인</h1>
        </Link>
      </div>
      <div className=" border-solid border-[1px] bg-red-500 p-[5px] text-center">
        <Link href={'/auth'}>
          <h1>네이버 로그인</h1>
        </Link>
      </div>
    </div>
  );
}
