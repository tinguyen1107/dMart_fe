//import '../styles/less/app.less'
import EditProfileModal from '../components/modal/editProfileModal';
import React from 'react';

const Profile = () => {
  return (
    <div className=" shadow bg-gradient-to-br from-gray-700 via-gray-900 to-black h-screen">
      <div className=" w-full flex justify-center" style={{ height: '348px' }}>
        <div className="flex flex-col ">
          <div
            className="md:relative bg-gray-100 md:rounded-bl-lg md:rounded-br-lg
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
        <a href="#" className="text-center text-blue-700 font-semibold">
          Citizen of dMart
        </a>
        <hr className="full flex self-center w-2/3 mt-2" />
      </div>
      {/* // END INFOS */}
      {/* // TABS */}
      <div className="w-full flex justify-center">
        <div className="flex justify-between mb-2.5">
          <ul className="flex px-5 py-1.5">
            <li className="px-3 font-semibold text-slate-400 hover:text-sky-400">
              <a href="#">Follower</a>
            </li>
            <li className="px-3 font-semibold text-slate-400 hover:text-sky-400">
              <a href="#">Following</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex justify-between mb-2.5">
          <ul className="flex px-5 py-1.5">
            <li className="px-3 font-semibold text-slate-400 hover:text-sky-400">
              <a href="#">Collectibles</a>
            </li>
            <li className="px-3 font-semibold text-slate-400 hover:text-sky-400">
              <a href="#">Creation</a>
            </li>
            <li className="px-3 font-semibold text-slate-400 hover:text-sky-400">
              <a href="#">Favorite</a>
            </li>
            <li className="px-3 font-semibold text-slate-400 hover:text-sky-400">
              <a href="#">Collections</a>
            </li>
            <li className="px-3 font-semibold text-slate-400 hover:text-sky-400">
              <a href="#">Publication</a>
            </li>
          </ul>
        </div>
      </div>
      {/* // END TABS */}
    </div>
  );
};

export default Profile;
