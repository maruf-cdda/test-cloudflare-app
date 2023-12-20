import React from "react";

const Badge = ({ icon, content }) => {
  return (
    <div className="absolute bg-primary-light -right-16 top-[296px] flex items-center gap-[6px] py-1 px-3 rounded-3xl shadow-md">
      {icon}
      <span>{content}</span>
    </div>
  );
};

export default Badge;
