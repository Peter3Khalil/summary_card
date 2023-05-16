import React from "react";

const DetailsBox = ({bg,icon,textColor,title,value}) => {
  return (
    <>
      <div
        className={`
          w-[100%]
          ${bg}
          h-12
          rounded-lg
          flex
          justify-between
          items-center
          px-4`}
      >
        {/* left */}
        <div
          className={`
              flex
              justify-center
              items-center
              ${textColor}
            `}
        >
          {icon}
          <h1
            className="
              font-[700]
              ml-2
              "
          >
            {title}
          </h1>
        </div>

        {/* Right */}
        <div
          className="

            "
        >
          <span
            className="
              font-[700]
              "
          >
            {value}
          </span>
          <span className="text-neutral-darkGrayBlue opacity-70"> / 100</span>
        </div>
      </div>
    </>
  );
};

export default DetailsBox;
