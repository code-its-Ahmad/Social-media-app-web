// Sidebar.js
import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

import {
  AiFillCompass,
  AiFillHeart,
  AiFillHome,
  AiFillMessage,
  AiFillPlusCircle,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch
} from 'react-icons/ai';

import { RiVideoFill, RiVideoLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useDisclosure } from '@chakra-ui/react';
import Search from '../../SearchComponents/Search';
import CreatePost from '../Post/CreatePost';  

export const Menu = [
  { title: "Home", icons: <AiOutlineHome className='text-2xl mr-5'></AiOutlineHome>, activeIcon: <AiFillHome className='text-2xl mr-5'></AiFillHome> },
  { title: "Search", icons: <AiOutlineSearch className='text-2xl mr-5'></AiOutlineSearch>, activeIcon: <AiOutlineSearch className='text-2xl mr-5'></AiOutlineSearch> },
  { title: "Explore", icons: <AiOutlineCompass className='text-2xl mr-5'></AiOutlineCompass>, activeIcon: <AiFillCompass className='text-2xl mr-5'></AiFillCompass> },
  { title: "Reels", icons: <RiVideoLine className='text-2xl mr-5'></RiVideoLine>, activeIcon: <RiVideoFill className='text-2xl mr-5'></RiVideoFill> },
  { title: "Message", icons: <AiOutlineMessage className='text-2xl mr-5'></AiOutlineMessage>, activeIcon: <AiFillMessage className='text-2xl mr-5'></AiFillMessage> },
  { title: "Notifications", icons: <AiOutlineHeart className='text-2xl mr-5'></AiOutlineHeart>, activeIcon: <AiFillHeart className='text-2xl mr-5'></AiFillHeart> },
  { title: "Create", icons: <AiOutlinePlusCircle className='text-2xl mr-5'></AiOutlinePlusCircle>, activeIcon: <AiFillPlusCircle className='text-2xl mr-5'></AiFillPlusCircle> },
  { title: "Profile", icons: <CgProfile className='text-2xl mr-5'></CgProfile>, activeIcon: <CgProfile className='text-2xl mr-5'></CgProfile> }
];

const Sidebar = () => {
  const [ActiveTab, setActive] = useState();
  const navigate = useNavigate();
  const [isSearchVisible, SetSearchVisible] = useState(false);
  const { isOpen,onOpen,onClose} = useDisclosure();

  const handleTabClick = (title) => {
    setActive(title);
    if (title === "Profile") {
      navigate("/Username");
    } else if (title === "Home") {
      navigate("/home");
    } else if (title === "Create") {
      onOpen();
    }else if (title === 'Search') {
      SetSearchVisible(true);
    } else {
      SetSearchVisible(false);
      onClose();
    }
  };

  return (
    <div className='sticky-top flex'>
      <div className='sidebar-container px-2'>
        <div>
          {ActiveTab !== "Search" && <div className='sidebar-header'>
            <img className='sidebar-logo' src='https://i.imgur.com/zqpwkLQ.png' alt='' />
          </div>}
          <div className='sidebar-menu '>
            {Menu.map((items) => (
              <div onClick={() => handleTabClick(items.title)} className='menu-item' key={items.title}>
                {ActiveTab === items.title ? items.activeIcon : items.icons}
                {ActiveTab !== "Search" && <p className={` ${ActiveTab === items.title ? "font-bold" : "font-semibold"}`}>{items.title}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className='more-section'>
          <IoReorderThreeOutline className='text-2xl' />
          {ActiveTab !== "Search" && <p className='ml-5'>More</p>}
        </div>
      </div>
      {isSearchVisible && <Search />}
      <CreatePost onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
