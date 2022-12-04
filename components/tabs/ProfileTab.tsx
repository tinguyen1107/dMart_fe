const ProfileTab = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex justify-between mb-2.5">
          <ul className="flex px-15 py-2">
            <li
              className="px-3 py-2 font-semibold text-slate-400 hover:border-transparent hover:bg-gray-300
      focus:border-transparent"
            >
              <a href="#Collectibles">Collectibles</a>
            </li>
            <li
              className="px-3 py-2 font-semibold text-slate-400 hover:border-transparent hover:bg-gray-300
      focus:border-transparent"
            >
              <a href="#Creation">Creation</a>
            </li>
            <li
              className="px-3 py-2 font-semibold text-slate-400 hover:border-transparent hover:bg-gray-300
      focus:border-transparent"
            >
              <a href="#Favorite">Favorite</a>
            </li>
            <li
              className="px-3 py-2 font-semibold text-slate-400 hover:border-transparent hover:bg-gray-300
      focus:border-transparent"
            >
              <a href="#Collections">Collections</a>
            </li>
            <li
              className="px-3 py-2 font-semibold text-slate-400 hover:border-transparent hover:bg-gray-300
      focus:border-transparent"
            >
              <a href="#Publication">Publication</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="tabs-tabContent">
        <div
          className="tab-pane fade show active flex justify-center text-slate-400"
          id="Collectibles"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          Tab 1 content
        </div>
        <div
          className="tab-pane fade flex  justify-center"
          id="Creation"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 2 content
        </div>
        <div
          className="tab-pane fade"
          id="Favorite"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 3 content
        </div>
        <div
          className="tab-pane fade"
          id="Collections"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab"
        >
          Tab 4 content
        </div>
        <div
          className="tab-pane fade"
          id="Publication"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab"
        >
          Tab 5 content
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
