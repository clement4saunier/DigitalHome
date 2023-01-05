import type { Component } from "solid-js";
import Page from "../layout/Page";
import Grid from "../layout/Grid";
import avatar from "../../assets/avatar.png";
import Profile from "../cards/Profile";
import ImageCard from "../cards/ImageCard";
import Tags from "../misc/Tags";

import styles from "./Home.module.css";

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

const Home: Component = () => (
  <Page header={<header><div className="divider"><div></div></div></header>}>
    <div className={styles.lifted}>
      <Profile
        footer={
          <>
            <button>Twitter</button>
            <button>Github</button>
          </>
        }
      >
        <h1>Clément SAUNIER</h1>
        <p>
          Hi 👋, I'm a developer interested in blockchain technology and gaming.
        </p>
      </Profile>
    </div>
    <h1>Favorite Stack</h1>
    <div className={styles.gridTech}>
      <ImageCard
        src={reactLogo}
        footer={<Tags values={["Javascript", "Typescript"]} />}
      >
        <h2>React.js</h2>
        <p>Front-end development framework</p>
      </ImageCard>
      <ImageCard
        src={solidLogo}
        footer={<Tags values={["Javascript", "Typescript"]} />}
      >
        <h2>Solid.js</h2>
        <p>Front-end development framework</p>
      </ImageCard>
      <ImageCard
        src={nextLogo}
        footer={<Tags values={["Javascript", "Typescript"]} />}
      >
        <h2>Next.js</h2>
        <p>Front-end development framework</p>
      </ImageCard>
      <ImageCard src={solidityLogo}>
        <h2>Solidity</h2>
        <p>Smart contract development language for EVM-based blockchains</p>
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
        <p>Decentralized certificate of authenticity mangagment plaform</p>
      </ImageCard>
      <ImageCard
        src={quickstarterLogo}
        footer={<Tags values={["Javascript", "React.js", "Ipfs"]} />}
      >
        <h2>Quickstarter</h2>
        <p>
          Decentralized crowd-funding and community project management for
          #StartonHackathon
        </p>
      </ImageCard>
      <ImageCard
        src={defactoLogo}
        footer={<Tags values={["Javascript", "React.js", "Ipfs"]} />}
      >
        <h2>Defacto</h2>
        <p>
          Decentralized fact-checking and journalism platform for
          #StartonHackaton
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
        <p>Master in software development</p>
      </ImageCard>
      <ImageCard
        src={breakfirstLogo}
        footer={<Tags values={["C#", "Unity"]} />}
      >
        <h2>Unity developer @ BreakFirst</h2>
        <p>
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
        <p>Full-stack development of NFT-related projects</p>
      </ImageCard>
    </div>
  </Page>
);

export default Home;
