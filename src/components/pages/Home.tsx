import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Page from "../layout/Page";
import Grid from "../layout/Grid";
import avatar from "../../assets/avatar.png";
import Profile from "../cards/Profile";
import ImageCard from "../cards/ImageCard";
import Tags from "../misc/Tags";

import styles from "./Home.module.css";
import { Search as SearchIcon } from 'solid-feather-icons'

import reactLogo from "../../assets/icons/react.png";
import solidLogo from "../../assets/icons/solid.png";
import nextLogo from "../../assets/icons/next.png";
import unityLogo from "../../assets/icons/unity.jpg";
import ipfsLogo from "../../assets/icons/ipfs.png";
import solidityLogo from "../../assets/icons/solidity.png";
import epitechLogo from "../../assets/icons/epitech.jpg";
import vaulthLogo from "../../assets/icons/vaulth.svg";
import breakfirstLogo from "../../assets/icons/breakfirst.png";
import b2expandLogo from "../../assets/icons/b2expand.png";
import defactoLogo from "../../assets/icons/defacto.png";
import quickstarterLogo from "../../assets/icons/quickstarter.png";
import websiteLogo from "../../assets/icons/website.png";

import PixelatedEthereum from "../frontshow/PixelatedEthereum.jsx";
import { useTheme } from "../context/ThemeProvider";

const Home: Component = () => {
  const { theme, setTheme } = useTheme();
  let liftedProfileRef;
  const [profileHeight, setProfileHeight] = createSignal(191);

  setTimeout(
    () => liftedProfileRef && setProfileHeight(liftedProfileRef.clientHeight)
  );

  window.onresize = (event) => {
    liftedProfileRef && setProfileHeight(liftedProfileRef.clientHeight);
  };

  const SkillCategory: Component = ({ onMouseEnter, highlight, t, children }) => {
    return <div class={["card", t === theme() && styles.highlight].join(" ")} onMouseEnter={onMouseEnter}>
      {children}
    </div>
  }

  function onMouseEnter(idx) {
    setTheme(idx);
  }

  const tagLines = { "blockchain": "blockchain", "web": "web", "videogame": "video game" }
  const content = [
    { name: "Blockchain", theme: "blockchain", description: "I dove into blockchain technology by building a decentralized protocol for giving authenticity proofs to digital certificates, and have been extremely interested and involved in the industry since." },
    { name: "Web", theme: "web", description: "Building website is an intergral part of building interfaces for blockchain protocols, I have explored a lot of web technologies as part of my web3 journey and front-end development is a skill in which I am proficient" },
    { name: "Video game", theme: "videogame", description: "Creating games is what brought me to programming in the first place and one of my early career goals, I have made prototypes, gamejams, internships..." }
  ];

  return (
    <Page
      header={
        <header class={theme()}>
          <div>
            <div class={[styles.trinity].join(" ")}>
              {content.map(({ name, description, theme: t }, idx) => <SkillCategory t={t} onMouseEnter={() => onMouseEnter(idx)}><h2>{name}</h2> <p>{description}</p></SkillCategory>)}
            </div>

            <div class={styles.mobileDescription}>
              <p>
                {content.find(({ theme: t }) => t === theme())?.description}
              </p>
            </div>
          </div>
          {/* <Profile
            ref={liftedProfileRef}
            footer={
              <>
                <form action="https://www.linkedin.com/in/cl%C3%A9ment-saunier-211453156/" target="_blank">
                  <button>LinkedIn</button>
                </form>
              </>
            }
          >
            <div>blockchain</div>
            <h1>Clément SAUNIER</h1>
            <p>
              Hi 👋, I'm a fullstack blockchain developer with a background in
              game development. I dug deep into Ethereum and blockchain
              technology in 2021 by building a decentralized project from
              scratch, and am now a strong believer in the power of
              decentralized open-source cryptography to build a trusted and
              private online realm.
              <br />
              <br />
              If you're looking for someone to work on your exciting project,
              please contact me trough:
            </p>
          </Profile> */}
          <div>

            <p class={styles.brief} style={{ "text-align": "center" }}>
              hi, my name is <b>clement</b>, nice to meet you :)
              <br />
              welcome to my <b>{tagLines[theme()]} developer</b> resume.
              <br />
              <br />
              for any professional inquiry please contact me on Linkedin.
            </p>
            <div class={styles.socials}>
              <form style={{ display: "flex" }}>
                <button class="card" type="submit" formaction="https://github.com/clement4saunier" formTarget="_blank">
                  <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible;"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                  GitHub</button>
                <button class="card" type="submit" formaction="https://www.linkedin.com/in/cl%C3%A9ment-saunier-211453156/" formTarget="_blank">
                  <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible;"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
                  LinkedIn</button>
                <button class="card" type="submit" formaction="https://twitter.com/sheykeidev" formTarget="_blank">
                  <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible;"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>
                  Twitter</button>
              </form>
            </div>
          </div>
          <div className={styles.graphic}>
            <PixelatedEthereum />
          </div>
          <div style={{ "height": "5vh" }}></div>
        </header>
      }
    >
      <div className={styles.divider}></div>
      <h1>Favorite Stack</h1>
      <div className={styles.gridTech}>
        <ImageCard
          src={reactLogo}
          footer={<Tags values={["Javascript", "Typescript"]} />}
        >
          <h2>React.js</h2>
          <p>Front-end development framework.</p>
        </ImageCard>
        <ImageCard
          src={solidLogo}
          footer={<Tags values={["Javascript", "Typescript"]} />}
        >
          <h2>Solid.js</h2>
          <p>Front-end development framework.</p>
        </ImageCard>
        <ImageCard
          src={nextLogo}
          footer={<Tags values={["Javascript", "Typescript"]} />}
        >
          <h2>Next.js</h2>
          <p>Front-end development framework.</p>
        </ImageCard>
        <ImageCard src={solidityLogo}>
          <h2>Solidity</h2>
          <p>Smart contract development language for EVM-based blockchains.</p>
        </ImageCard>
        <ImageCard src={ipfsLogo}>
          <h2>IPFS</h2>
          <p>Peer-to-peer file management system.</p>
        </ImageCard>
        <ImageCard src={unityLogo} footer={<Tags values={["C#"]} />}>
          <h2>Unity</h2>
          <p>Game engine.</p>
        </ImageCard>
      </div>
      <h1>Projects</h1>
      <div className={styles.gridProjects}>
        <ImageCard
          src={websiteLogo}
          footer={<Tags values={["Typescript", "Solid.js"]} />}
        >
          <h2>This website</h2>
          <p>Portfolio website</p>
        </ImageCard>
        <ImageCard
          src={vaulthLogo}
          footer={
            <Tags
              values={[
                "Javascript",
                "Solidity",
                "React.js",
                "React Native",
                "Ipfs"
              ]}
            />
          }
        >
          <h2>Vaulth</h2>
          <p>Decentralized certificate of authenticity mangagment plaform.</p>
        </ImageCard>
        <ImageCard
          src={quickstarterLogo}
          footer={<Tags values={["Javascript", "React.js", "Ipfs"]} />}
        >
          <h2>Quickstarter</h2>
          <p>
            Decentralized crowd-funding and community project management for
            #StartonHackathon.
          </p>
        </ImageCard>
        <ImageCard
          src={defactoLogo}
          footer={<Tags values={["Javascript", "React.js", "Ipfs"]} />}
        >
          <h2>Defacto</h2>
          <p>
            Decentralized fact-checking and journalism platform for
            #StartonHackaton.
          </p>
        </ImageCard>
      </div>
      <h1>Experiences</h1>
      <div className={styles.gridExperiences}>
        <ImageCard
          src={epitechLogo}
          footer={
            <Tags values={["C", "C++", "Python", "Haskell", "Javascript"]} />
          }
        >
          <h2>{"{EPITECH.}"}</h2>
          <p>
            Education · 2018 → 2024 <br /> <br />
            Master in software development.
          </p>
        </ImageCard>
        <ImageCard
          src={breakfirstLogo}
          footer={<Tags values={["C#", "Unity"]} />}
        >
          <h2>Unity developer @ BreakFirst</h2>
          <p>
            Internship · Sep 2019 → Dec 2019 <br />
            <br />
            Feature development for prototypes on Nintendo Switch and Mobile
            platforms.
          </p>
        </ImageCard>
        <ImageCard
          src={b2expandLogo}
          footer={
            <Tags
              values={["Javascript", "Solidity", "React.js", "Next.js", "Ipfs"]}
            />
          }
        >
          <h2>Solidity/React developer @ B2Expand</h2>
          <p>
            Internship · Apr 2022 → Jul 2024 <br />
            <br />
            Full-stack development of NFT-related projects.
          </p>
        </ImageCard>
      </div>
    </Page>
  );
};

export default Home;
