import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

import videoReelHero from "../../assets/videos/reel-loop.mp4";
import videoHero from "../../assets/videos/reel_220409_001451.mp4";

import cultureLoop from "../../assets/videos/Culture-Loop_v1.mp4";

import { ReactComponent as BDLogo } from "../../assets/logos/B_DLogo.svg";
import { ReactComponent as BDHalfLogo } from "../../assets/logos/BD_2Logo.svg";

import Header from "../../components/Header/Header";
import AwardCard from "../../components/AwardCard/AwardCard";
import Button from "../../components/Button/Button";
import WorkCard from "../../components/WorkCard/WorkCard";
import ClientCard from "../../components/ClientCard/ClientCard";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import {
  awards_data,
  works_data,
  clients_data,
  news_data,
} from "../../helpers/data";
import Footer from "../../components/Footer/Footer";

// const optionIntersection = {
//   root: spotlight;
// }

// const observer = 0;

function Home() {
  const heroRef = useRef(null);
  const navH = useRef(null);
  const videoRef = useRef(null);
  const reelRef = useRef(null);
  const spotlightRef = useRef(null);

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
  const [works, setWorks] = useState([]);
  const [awards, setawards] = useState([]);
  const [clients, setClients] = useState([]);
  const [news, setNews] = useState([]);
  const [scrollBarWidth, setScrollbarWidth] = useState(
    innerWidth - document.documentElement.clientWidth
  );
  const [observerSpotlight, setObserverSpotlight] = useState(null);
  // const [isSpotIntersect, setIsSpotIntersect] = useState(false);

  function handleReelClick(e) {
    // if (videoRef.current) console.log(1);

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

  function setCssVar(cssVar, cssVarVal) {
    document.documentElement.style.setProperty(cssVar, cssVarVal);
  }
  function getCssVars(cssVar) {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
  }
  // const getScrollbarWidth = () =>
  //   innerWidth - document.documentElement.clientWidth;

  function handleTimeUpdate(e) {
    setCurTimeVid(Math.floor(e.target.currentTime));
    const skPos = Math.floor(
      (e.target.currentTime / duration) * innerWidth - scrollBarWidth
    );
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
    // cssVarsEle.current = document.documentElement;
    setawards(awards_data);
    setWorks(works_data);
    setClients(clients_data);
    setNews(news_data);
    const options = {
      rootMargin: "40px 0px",
      threshold: [0.5],
    };
    setObserverSpotlight(
      new IntersectionObserver((element, observer) => {
        if (!element[0].isIntersecting) {
          setCssVar(
            "--color-background",
            getCssVars("--color-background-light")
          );
          setCssVar("--color-font", getCssVars("--color-font-dark"));
        } else {
          setCssVar(
            "--color-background",
            getCssVars("--color-background-dark")
          );
          setCssVar("--color-font", getCssVars("--color-background-pink"));
        }
      }, options)
    );
  }, []);
  // console.log(observerSpotlight);

  useEffect(() => {
    observerSpotlight && observerSpotlight.observe(spotlightRef.current);

    // console.log(spotlightRef.current.children[0]);
  }, [observerSpotlight]);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--grid-height",
      `${window.innerHeight}px`
    );
    // console.log(window.innerHeight);
    // console.log(
    //   document.documentElement.style.getPropertyValue("--grid-height")
    // );
  }, [innerHeight]);

  function handleMouseMove(e) {
    // console.log(e.clientY);
    // console.log(e.clientX);
    setCursorPos([e.clientX + "px", e.clientY + window.scrollY + "px"]);
  }
  //   console.log(navH.current.offsetHeight);
  return (
    <>
      <div className={styles.loadScreen}>
        <figure className={styles.loadScreenfig}>
          <BDHalfLogo />
        </figure>
      </div>
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
              <li key={award.name}>
                <AwardCard data={award} key={award.name} />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.about_section}>
          <div className={styles.about}>
            <div className={styles.about_desc}>
              <h3 className={styles.about_desc_txt}>
                BASIC/DEPT&reg; is a global branding and digital design agency
                building products, services, and eCommerce experiences that turn
                cultural values into company value.
              </h3>
              <Button custCls={styles.about_btnSee_work} primary>
                <a href="#">see the work</a>
              </Button>
            </div>
            <div className={styles.about_BD}>
              <figure className={styles.about_BD_logo}>
                <BDLogo />
              </figure>
            </div>
          </div>
        </section>
        <section className={styles.work_section}>
          <ul className={styles.work_list}>
            {works.map((work) => (
              <li key={work.name}>
                <WorkCard work={work} />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.client_section}>
          <div className={styles.client_content}>
            <div className={styles.client_count_bar}>
              <div className={styles.bar_col1}>
                <div>00</div>
              </div>
              <div className={styles.bar_col2}>
                <div>/05</div>
                <div>&#11044;</div>
              </div>
            </div>

            <h3 className={styles.client_heading}>Featured Engagements</h3>
            <ul className={styles.client_list}>
              {clients.map((client) => (
                <li key={client.name}>
                  <ClientCard data={client} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section ref={spotlightRef} className={styles.spotlight_section}>
          <div className={styles.spotlight}>
            <div className={styles.spotlight_colL}>
              <div className={styles.spotlight_static}>
                <q>basic/dept&reg; helps Brands &#11044; connect w/ culture</q>
                <p>
                  Adweek <span>Agency spotlight</span>
                </p>
                <Button custCls={styles.spotlight_btn} primary>
                  <a href="#">About Us</a>
                </Button>
              </div>
            </div>
            <div className={styles.spotlight_colR}>
              <video src={cultureLoop} autoPlay loop muted></video>
            </div>
          </div>
        </section>
        <section className={styles.news_section}>
          <div className={styles.news}>
            <div className={styles.news_head}>
              <h2>Featured news</h2>
              <Button custCls={styles.news_allBtn} primary>
                <a href="#">view all</a>
              </Button>
            </div>
            <ul className={styles.news_list}>
              {news_data.map((news) => (
                <li key={news.title}>
                  <FeaturedNews data={news} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
