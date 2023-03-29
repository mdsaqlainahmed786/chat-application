import React from "react";

type Props = {};

const Channels = (props: Props) => {
  return (
    <div className="py-4 cursor-pointer  ">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-[#3C393F]"
        >
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src="https://image-upload-nidx.onrender.com/uploads/angry.jpg" />
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-white font-semibold">Channel Name</h1>
              <p className="text-gray-400 text-sm">Last message</p>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-gray-400 text-sm">12:00</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Channels;
