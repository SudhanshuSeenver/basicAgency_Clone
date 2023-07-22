import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";

import styles from "./Home.module.css";
import videoReelHero from "../../assets/videos/reel-loop.mp4";
import videoHero from "../../assets/videos/reel_220409_001451.mp4";

import { ReactComponent as AdAgeLogo } from "../../assets/logos/adAge.svg";
import { ReactComponent as WebbyLogo } from "../../assets/logos/webbyLogo.svg";
import { ReactComponent as CampaignLogo } from "../../assets/logos/campaignLogo.svg";
import AwardCard from "../../components/AwardCard/AwardCard";

function Home() {
  const heroRef = useRef(null);
  const navH = useRef(null);
  const videoRef = useRef(null);
  const reelRef = useRef(null);

  const awards = [
    {
      name: "AdAge",
      Logo: AdAgeLogo,
      text: "Design and Branding Agency of the Year",
    },
    {
      name: "Webby_awards",
      Logo: WebbyLogo,
      text: "Agency of the Year",
    },
    {
      name: "Campaign",
      Logo: CampaignLogo,
      text: "Digital Innovation Agency of the Year Finalist",
    },
  ];

  const [cursorPos, setCursorPos] = useState([
    window.innerWidth / 2 + "px",
    window.innerHeight / 2 + "px",
  ]);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [playReelVid, setPlayReelVid] = useState(false);
  const [duration, setDuration] = useState(0.001);
  const [seekPos, setSeekPos] = useState(0);
  const [curTimeVid, setCurTimeVid] = useState(0);

  function handleReelClick(e) {
    if (videoRef.current) console.log(1);

    if (!playReelVid) {
      videoRef.current.play();
      reelRef.current.pause();
    } else {
      if (videoRef.current.duration === videoRef.current.currentTime)
        setSeekPos(0);
      videoRef.current.pause();
      reelRef.current.play();
    }
    setPlayReelVid(!playReelVid);
  }

  function handleTimeUpdate(e) {
    setCurTimeVid(Math.floor(e.target.currentTime));
    const skPos = Math.floor((e.target.currentTime / duration) * innerWidth);
    setSeekPos(skPos);
  }

  function handleMetaDataLoad(e) {
    setDuration(Math.floor(e.target.duration));
  }

  function handleWindowResize(e) {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
    setSeekPos(Math.floor((curTimeVid / duration) * window.innerWidth));
  }

  function handleMouseMoveOut(e) {
    setCursorPos([window.innerWidth / 2 + "px", window.innerHeight / 2 + "px"]);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    setCursorPos([window.innerWidth / 2 + "px", window.innerHeight / 2 + "px"]);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--grid-height",
      `${window.innerHeight}px`
    );
    console.log(window.innerHeight);
    console.log(
      document.documentElement.style.getPropertyValue("--grid-height")
    );
  }, [innerHeight]);

  function handleMouseMove(e) {
    // console.log(e.clientY);
    // console.log(e.clientX);
    setCursorPos([e.clientX + "px", e.clientY + window.scrollY + "px"]);
  }
  //   console.log(navH.current.offsetHeight);
  return (
    <div className={styles.container}>
      <div className={styles.nav_hero_s}>
        <Header navH={navH} innerWidth={innerWidth} />
        <div
          ref={heroRef}
          id="hero_s"
          onClick={handleReelClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseMoveOut}
          className={`${styles.hero_section} ${
            playReelVid ? styles.pointerAll : ""
          }`}
        ></div>
        <div
          className={styles.cursor_outerLayer}
          style={{ height: innerHeight }}
        >
          <div
            className={styles.cursor_wr}
            style={{
              transform: `translate(${cursorPos[0]}, ${cursorPos[1]})`,
            }}
          >
            <div
              className={`${styles.custom_cursor} ${
                playReelVid ? styles.none : ""
              }`}
            >
              <div className={styles.cursor_c}>Watch Reel</div>
              <p>basic/Dept&#xae; 2010-&#8734;</p>
            </div>
          </div>
        </div>
        <div className={styles.videoplayer_cont}>
          <div
            className={`${styles.vid_box} ${
              playReelVid ? styles.pause_true : ""
            }`}
          >
            <video
              className={styles.video_reel}
              style={{ height: innerHeight }}
              src={videoReelHero}
              autoPlay={true}
              ref={reelRef}
              muted
              loop
            />
          </div>
          <div
            className={`${styles.vid_box} ${
              !playReelVid ? styles.pause_true : ""
            }`}
          >
            <video
              className={styles.video_reel}
              style={{ height: innerHeight }}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleMetaDataLoad}
              src={videoHero}
              ref={videoRef}
            />
            <div
              style={{
                transform: `translateX(${seekPos}px)`,
              }}
              className={styles.vid_seekerbar}
            >
              <div className={styles.vid_seek}>
                <span>
                  00:
                  {curTimeVid.toLocaleString("en-IN", {
                    minimumIntegerDigits: 2,
                  })}
                </span>
                /<span>00:{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.award_section}>
        <ul className={styles.award_list}>
          {awards.map((award) => (
            <li>
              <AwardCard data={award} key={award.name} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
