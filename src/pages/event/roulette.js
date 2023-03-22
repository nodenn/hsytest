import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import r from "@/styles/event/Roulette.module.css";
import { getRandomInt } from "@/components/event/utils.ts";
import { Wheel } from "@/components/event/wheel.js";
import { TopBtn } from "@/components/ui/topBtn.js";
import styled from "styled-components";

import eventImg0 from "@/assets/img/event/roulette/event_image0.png";
import eventImg1 from "@/assets/img/event/roulette/event_image1.png";
import eventImg2 from "@/assets/img/event/roulette/event_image2.png";
import roulette1 from "@/assets/img/event/roulette/roulette.png";
import roulette_btn0 from "@/assets/img/event/roulette/roulette_btn.png";
import roulette_btn1 from "@/assets/img/event/roulette/roulette_btn1.png";
import roulette_btn2 from "@/assets/img/event/roulette/roulette_btn2.png";
import roulette_pin from "@/assets/img/event/roulette/roulette_pin.png";

// style
const eventContt = {
  position: "relative",
  textAlign: "center",
};
const image = {
  width: "800px",
};
const rouletteBg = {
  backgroundImage: `url(${eventImg1.src})`,
  backgroundRepeat: "no-repeat",
  height: "1281px",
  width: "800px",
  margin: "0 auto",
  position: "relative",
  backgroundSize: "100%",
};
// style end

const roulette = () => {
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);

  const bot = useRef(null);
  const executeScroll = () =>
    bot.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const mockData = {
    1: "롯시관람권",
    2: "꽝1",
    3: "무배쿠폰",
    4: "꽝2",
    5: "금액권",
    6: "편의점",
    7: "꽝3",
    8: "치킨세트",
  };

  const onClick = () => {
    if (!spinning) {
      setSpinning(true);
      const newCouponNum = getRandomInt(1, 8);
      setCouponNum(newCouponNum);
      // console.log(newCouponNum);
      setMustSpin(true);
      setTimeout(() => alert(mockData[newCouponNum]), 5000);
    } else {
      alert("끝");
    }
  };

  return (
    <>
      <div className="eventContt" style={eventContt}>
        <p>
          <span href="" onClick={executeScroll}>
            아래로
          </span>
        </p>
        <Image src={eventImg0} style={image} />
        <div className="rouletteBg" style={rouletteBg} ref={bot}>
          <div className={r.roulette}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={couponNum}
              onClick={() => onClick()}
              onStopSpinning={() => {
                setSpinning(true);
                setMustSpin(true);
              }}
            />
          </div>
          <div className={r.rouletteBtn}>
            <a href="">
              <Image src={roulette_btn1} />
            </a>
            <a href="">
              <Image src={roulette_btn2} />
            </a>
          </div>
        </div>
        <Image src={eventImg2} />
        <TopBtn />
      </div>
    </>
  );
};

export default roulette;
