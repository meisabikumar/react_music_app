import React from "react";

function CenterMenu() {
  const LiStyle = "mr-[3rem] hover:cursor-pointer";

  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <li className={LiStyle}>Home</li>
        <li className={LiStyle}>About</li>
        <li className={LiStyle}>Preformer</li>
        <li className={LiStyle}>Event Shedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
