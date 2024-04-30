import Link from 'next/link';
import React, { useState } from 'react';
import { MenuData } from '../LeftSidebarMenu';
import Image from 'next/image';
import cn from 'clsx';

type MenuItemProps = {
  item: MenuData;
};

const MenuItem = (props: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { item } = props;

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(item);
  return (
    <div>
      <div className="flex justify-between p-4" onClick={toggleSubMenu}>
        <Link className="block hover:text-[#000] focus:text-[#000] " href="">
          {item.title}
        </Link>
        {isOpen ? (
          <Image
            className={cn({
              ['hidden']: item.subMenu?.length === 0,
            })}
            src="/images/sideMenu/arrowDown.png"
            alt="arrow-down"
            height={10}
            width={10}
          />
        ) : (
          <Image
            className={cn({
              ['hidden']: item.subMenu?.length === 0,
            })}
            src="/images/sideMenu/arrowSide.png"
            alt="arrow-side"
            height={1}
            width={10}
          />
        )}
      </div>

      {isOpen && item.subMenu?.length > 0 && (
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
