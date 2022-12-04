import { Tab } from '@headlessui/react';
import { useState } from 'react';

const ProfileTab = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }
  let [categories] = useState({
    Collectibles: [
      {
        id: 1,
        content: 'Does drinking coffee make you smarter?',
      },
    ],
    Creation: [
      {
        id: 1,
        content: 'Is tech making coffee better or worse?',
      },
    ],
    Favorite: [
      {
        id: 1,
        content: 'Ask Me Anything: 10 answers to your questions about coffee',
      },
    ],
    Collections: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
      },
    ],
    Publication: [
      {
        id: 1,
        content: 'Ask Me Anything: 10 answers to your questions about coffee',
      },
    ],
  });
  return (
    <div className=" max-w-md px-4 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#A259FF] p-1 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 px-2 text-3xl text-sm font-medium  leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow '
                    : 'text-blue-100 text-3xl hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="text-white">Content 1</Tab.Panel>
          <Tab.Panel className="text-white">Content 2</Tab.Panel>
          <Tab.Panel className="text-white">Content 3</Tab.Panel>
          <Tab.Panel className="text-white">Content 4</Tab.Panel>
          <Tab.Panel className="text-white">Content 5</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProfileTab;
