'use client';

import React, { useEffect, useCallback, useState } from 'react';
import { MenuData } from '../LeftSidebarMenu';
import Image from 'next/image';
import cn from 'clsx';
import { useRouter } from 'next/navigation';

type MenuItemProps = {
  item: MenuData;
};

const MenuItem = (props: MenuItemProps) => {
  const { item } = props;
  const router = useRouter();
  const [data, setData] = useState<MenuData>(item);

  // sessionStorage에 저장된 메뉴 데이터를 가져옴
  let menuData: MenuData[] = JSON.parse(
    sessionStorage.getItem('menuData') ?? ''
  );

  /**
   * 메뉴의 isOpen 상태를 변경하는 함수
   * id가 같은 메뉴의 isOpen 상태를 변경
   * id가 일치 하는게 없으면 재귀함수로 다시 찾음
   * @param menus
   * @param id
   */

  function updateMenuOpenStatus(menus: MenuData[], id: number): void {
    menus.forEach((menu) => {
      if (menu.id === id) {
        if (menu.isOpen) {
          menu.isOpen = false;
        } else {
          menu.isOpen = true;
        }
        setData(menu);
        return;
      }
      if (menu.subMenu.length > 0) {
        updateMenuOpenStatus(menu.subMenu, id);
      }
    });
  }

  // 메뉴 클릭시 메뉴의 isOpen 상태를 변경 후 sessionStorage에 저장
  const toggleSubMenu = useCallback(() => {
    updateMenuOpenStatus(menuData, data.id);
    sessionStorage.setItem('menuData', JSON.stringify(menuData));

    if (data.link) {
      // 깜빡임이 있어...
      router.push(data.link);
    }
  }, [router, data]);

  return (
    <div>
      {/* 메뉴 리스트 */}
      <div
        className="flex justify-between items-center p-4 translate duration-300"
        onClick={toggleSubMenu}
      >
        {data.title}
        {data.isOpen ? (
          <Image
            className={cn('h-[8px] w-[8px]', {
              ['hidden']: data.subMenu?.length === 0,
            })}
            src="/images/sideMenu/down-arrow.png"
            alt="arrow-down"
            height={8}
            width={8}
          />
        ) : (
          <Image
            className={cn('h-[8px] w-[8px] ', {
              ['hidden']: data.subMenu?.length === 0,
            })}
            src="/images/sideMenu/right-arrow.png"
            alt="arrow-side"
            height={8}
            width={8}
          />
        )}
      </div>

      {/* 서브메뉴 리스트 */}
      {data.isOpen && data.subMenu?.length > 0 && (
        <div className="pl-[20px]">
          {item.subMenu.map((subItem: any) => (
            <MenuItem item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
