'use client';
import { useRecoilState } from 'recoil';
import { sidebarState } from '@/store/sidebarState';
import Link from 'next/link';

const HeaderNavBar = () => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row items-center justify-between h-[50px] bg-gray-700 ">
      <button
        className="logo w-[50px] m-[10px] items-start"
        onClick={toggleSidebar}
      >
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </button>
      <nav className="flex items-center">
        <Link className="" href="/">
          <strong className="text-[20px]">인터뷰</strong>
        </Link>
      </nav>
      <div className="search w-auto items-end m-[10px]">
        <input
          type="text"
          placeholder="검색..."
          className=" rounded bg-gray-500 border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default HeaderNavBar;
