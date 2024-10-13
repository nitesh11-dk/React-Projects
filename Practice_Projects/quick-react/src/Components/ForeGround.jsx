import React, { useRef } from 'react';
import Card from './Card';

const ForeGround = () => {
  let data = [
    {
      desc: "Complete React project for the client.",
      size: "2.1mb",
      close: false,
      tagDetls: {
        isOpen: true,
        tagColor: "green",
        tagContnt: "In Progress",
      },
    },
    {
      desc: "Write documentation for the new API.",
      size: "1.8mb",
      close: true,
      tagDetls: {
        isOpen: true,
        tagColor: "blue",
        tagContnt: "Pending Review",
      },
    },
    {
      desc: "Upload design assets to the shared folder.",
      size: "3.5mb",
      close: false,
      tagDetls: {
        isOpen: false,
        tagColor: "red",
        tagContnt: "Overdue",
      },
    },
    {
      desc: "Fix bugs reported in the last sprint.",
      size: "0.5mb",
      close: true,
      tagDetls: {
        isOpen: true,
        tagColor: "green",
        tagContnt: "On Track",
      },
    },
    {
      desc: "Finalize presentation for tomorrow's meeting.",
      size: "0.9mb",
      close: true,
      tagDetls: {
        isOpen: true,
        tagColor: "blue",
        tagContnt: "Ready",
      },
    },
    {
      desc: "Prepare release notes for version 2.0.",
      size: "2.4mb",
      close: false,
      tagDetls: {
        isOpen: true,
        tagColor: "green",
        tagContnt: "In Progress",
      },
    },
    {
      desc: "Migrate database to the new server.",
      size: "5.6mb",
      close: true,
      tagDetls: {
        isOpen: false,
        tagColor: "red",
        tagContnt: "Blocked",
      },
    },
  ];
  
  let ref = useRef(null)
  return (
    <div ref={ref} className='w-full h-full z-[3] p-4 flex  flex-wrap gap-4'>
      {data.map((elem, idx) => (
        <Card key={idx} data={elem} reference={ref} />
      ))}
    </div>
  );
};

export default ForeGround;
