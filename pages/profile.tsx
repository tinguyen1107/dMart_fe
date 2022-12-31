//import '../styles/less/app.less'
import EditProfileModal from '../components/modal/EditProfileModal';
import React from 'react';
import ProfileTab from '../components/tabs/ProfileTab';
import { NavBar } from '../components';
import { Footer } from '../components';

const Profile = () => {
  return (
    <div className=" shadow bg-[#2B2B2B] h-screen max-h-fit">
      <NavBar/>
      <div className='overflow-auto bg-inherit' >
      <div className=" w-full flex justify-center" style={{ height: '348px' }}>
        <div className="flex flex-col ">
          <div
            className="md:relative bg-gray-100 md:rounded
                      bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400 "
            style={{ width: '1200px', height: '348px' }}
          >
            {/* // cover photo */}
            <div className="flex justify-center">
              {/* profile photo */}
              <EditProfileModal />
              <img
                src="https://www.playtoearn.online/wp-content/uploads/2021/10/Clone-X-NFT-avatar.png"
                className="rounded-full md:absolute top-48 border-4 border-white w-40 h-40 "
                style={{ width: '168px', height: '168px' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* // INFOS */}
      <div className="flex justify-center flex-col mt-5 mb-3.5">
        <h1 className="text-center font-bold text-3xl text-white">kevin</h1>
        <a href="#" className="text-center text-[#A259FF] font-semibold">
          Citizen of dMart
        </a>
        <hr className="full flex self-center w-2/3 mt-2" />
      </div>

      <div className="w-full flex justify-center">
        <div className="flex justify-between mb-2.5 ">
          <ul className="flex px-5 py-1.5 divide-x">
            <li className="px-3 text-2xl font-semibold text-white hover:text-sky-400">
              <a href="#"> 0 Follower</a>
            </li>
            <li className="px-3 text-2xl font-semibold text-white hover:text-sky-400">
              <a href="#">0 Following</a>
            </li>
          </ul>
        </div>
      </div>
     
      {/* // END INFOS */}
      {/* // TABS */}
      <div className=" w-full flex justify-center ">
        <ProfileTab />
      </div>
      <Footer/>
    </div>
  
    </div>
  );
};

export default Profile;
