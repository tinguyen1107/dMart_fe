import React, { useState } from 'react';
import { FaBeer, FaEdit } from 'react-icons/fa';
const EditProfileModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="absolute bottom-5 left-10 bg-[#A259FF] text-white font-bold py-2 px-8 md:rounded-lg inline-flex items-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FaEdit /> Edit profile
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-slate-600/30">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h4 className="text-3xl font=semibold text-white">
                    Edit Profile
                  </h4>
                </div>

                <div className="relative p-6 flex-auto h-fit">
                  <div
                    className="md:relative bg-gray-100 md:rounded 
                      bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400 "
                    style={{ height: '130px' }}
                  ></div>
                  <div className="flex justify-center -mt-16">
                    <img
                      src="https://www.playtoearn.online/wp-content/uploads/2021/10/Clone-X-NFT-avatar.png"
                      className="rounded-full md:absolute border-4 border-white w-24 h-24 "
                    />
                  </div>

                  <form className="bg-inherit mt-24   rounded w-full">
                    <label className="block text-white text-sm font-bold mb-1 ">
                      Bio
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 h-16 text-black"
                      placeholder="Tell us about yourself"
                    />
                    <label className="block text-white text-sm font-bold mb-1">
                      Website
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      placeholder="Website"
                    />
                    <label className="block text-white text-sm font-bold mb-1">
                      Weibo
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      placeholder="Weibo URL"
                    />
                    <div className="flex">
                      <div className="w-1/2 mr-2">
                        <label className="block text-white text-sm font-bold mb-1">
                          Instagram
                        </label>
                        <input
                          className="shadow appearance-none border rounded  py-2 px-2 text-black w-full"
                          placeholder="Username"
                        />
                      </div>

                      <div className="w-1/2">
                        <label className="block text-white text-sm font-bold mb-1">
                          Twitter
                        </label>
                        <input
                          className="shadow appearance-none border rounded  py-2 px-2 text-black w-full"
                          placeholder="Twitter"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-[#A259FF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditProfileModal;
