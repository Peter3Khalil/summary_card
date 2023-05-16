import DetailsBox from "components/DetailsBox";
import React from "react";
import { MdOutlineElectricBolt } from "react-icons/md";
import {FaBrain} from "react-icons/fa";
import {BiMessageRoundedMinus} from "react-icons/bi"
import {AiOutlineEye} from "react-icons/ai"
const Home = () => {
  return (
    // ##Container
    <div
      className="
    min-h-[100vh]
    w-[100%]
    bg-white
    flex
    flex-col
    justify-center
    items-center
    "
    >
      {/* Main Box */}
      <div
        className="
      w-[45%]
      h-[60vh]
      shadow-md
      rounded-[30px]
      flex
      "
      >
        {/* Left Box */}
        <div
          className="
        w-[50%]
        h-[100%]
        bg-gradient-to-t
        from-customColor
        to-lightBlue
        rounded-[inherit]
        flex
        flex-col
        items-center
        px-14
        py-10
        "
        >
          <h1
            className="
          font-[700]
          text-xl
          text-neutral-lightLavender
          "
          >
            Your Result
          </h1>
          {/* Circle */}
          <div
            className="
          w-40
          h-40
          bg-gradient-to-t
          from-circleColor2
          to-circleColor1
          rounded-full
          my-7
          flex
          flex-col
          justify-center
          items-center
          
          "
          >
            <h1
              className="
            font-[800]
            text-[60px]
            text-white
            "
            >
              76
            </h1>
            <p
              className="
            text-neutral-lightLavender
            "
            >
              of 100
            </p>
          </div>
          {/* Bottom */}
          <h1
            className="
          font-[700]
          text-white
          text-2xl
          mb-3
          "
          >
            Great
          </h1>
          <p
            className="
          text-center
          text-neutral-lightLavender
          "
          >
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        {/* Right Box */}
        <div
          className="
        w-[50%]
        h-[100%]
        bg-transparent
        p-10
        flex
        flex-col
        "
        >
          <h1
            className="
          text-neutral-darkGrayBlue
          font-[700]
          text-xl
          mb-7
          "
          >
            Summary
          </h1>
          {/* detialsBox */}
          <div className="
          flex
          flex-col
          gap-3
          ">
          <DetailsBox title="Reaction" bg="bg-reactionBox" value="75" textColor="text-lightRed" icon={<MdOutlineElectricBolt/>}/>
          <DetailsBox title="Memory" bg="bg-memoryBox" value="75" textColor="text-lightOrange" icon={<FaBrain/>}/>
          <DetailsBox title="Verbal" bg="bg-verbalBox" value="67" textColor="text-lightGreen" icon={<BiMessageRoundedMinus/>}/>
          <DetailsBox title="Visual" bg="bg-visualBox" value="88" textColor="text-lightBlue2" icon={<AiOutlineEye/>}/>
          </div>
          <button className="
          mt-7
          w-[100%]
          h-12
          bg-neutral-darkGrayBlue
          text-neutral-paleBlue
          rounded-full
          hover:bg-gradient-to-t
          hover:from-customColor
          hover:to-lightBlue
          ">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
