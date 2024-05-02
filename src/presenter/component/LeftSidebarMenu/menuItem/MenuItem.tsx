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
  const [data, setData] = useState<MenuData>(item);

  // 세션 스토리지에서 메뉴 데이터를 가져와서 item의 title와 level을 확인해서 동일한 값을 찾아 해당 값의 isOpen을 초기 상태로 셋팅하고
  // 해당 상태가 변경될때마다 스토리지에서 가져온 데이터를 업데이트해서 세션스토리지에 저장한다.
  let menuData: MenuData[] = JSON.parse(
    sessionStorage.getItem('menuData') ?? ''
  );

  // 특정 title과 level을 가진 메뉴의 isOpen 값을 변경하는 함수
  function updateMenuOpenStatus(menus: MenuData[], id: number): void {
    menus.forEach((menu) => {
      if (menu.id === id) {
        if (menu.isOpen) {
          menu.isOpen = false;
        } else {
          menu.isOpen = true;
        }
        setData(menu);
      }
      if (menu.subMenu.length > 0) {
        updateMenuOpenStatus(menu.subMenu, id);
      }
    });
  }

  const router = useRouter();

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
      <div className="flex justify-between p-4" onClick={toggleSubMenu}>
        {data.title}
        {data.isOpen ? (
          <Image
            className={cn(' aspect-square ', {
              ['hidden']: data.subMenu?.length === 0,
            })}
            src="/images/sideMenu/arrowDown.png"
            alt="arrow-down"
            height={25}
            width={25}
          />
        ) : (
          <Image
            className={cn({
              ['hidden']: data.subMenu?.length === 0,
            })}
            src="/images/sideMenu/arrowSide.png"
            alt="arrow-side"
            height={15}
            width={5}
          />
        )}
      </div>

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
