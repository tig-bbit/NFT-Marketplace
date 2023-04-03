import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import { useRouter } from 'next/router';

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button, Error } from '../componentsindex';
import images from '../../img';

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext';

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  // ---- FUNCTIONS
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == 'Discover') {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == 'Help Center') {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } 
  }

  const closeDiscover = () => {
    if (discover == true) {
      setDiscover(false);
    }
  }

  const closeHelp = () => {
    if (help == true) {
      setHelp(false);
    }
  }

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelp(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  //SMART CONTRACT SECTION
  const { currentAccount, connectWallet, openError } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* ---- START NAVBAR LEFT ---- */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
             src={images.logo}
             alt='NFT MARKET PLACE' 
             width={100}
             height={100}
             onClick={() => router.push('/')}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder='Search NFT' />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* ---- END NAVBAR LEFT ---- */}
        
        {/* ---- START NAVBAR RIGHT ---- */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* ---- DISCOVER MENU ---- */}
            <p onClick={(e) => { openMenu(e); closeDiscover(e)}}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* ---- HELP CENTER MENU ---- */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => { openMenu(e); closeHelp(e)}}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* ---- NOTIFICATION ---- */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={() => openNotification()} />
            {notification && <Notification />}
          </div>

          {/* ---- BUTTON SECTION ---- */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == '' ? (
              <Button btnName='Connect' handleClick={() => connectWallet()} />
            ) : ( 
              <Button btnName="Create" handleClick={() => router.push('/uploadNFT')} />             
            )}
          </div>

          {/* ---- USER PROFILE ---- */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image className={Style.navbar_container_right_profile} src={images.user1} alt="Profile" width={40} height={40} onClick={() => openProfile()} />
              {profile && <Profile currentAccount={currentAccount} />}
            </div>
          </div>

          {/* ---- MENU BUTTON ---- */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()} />
          </div>
        </div>
      </div>

      {/* ---- SIDEBAR COMPONENT MOBILE ---- */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}

      {openError && <Error/>}
    </div>
  );
};

export default NavBar;