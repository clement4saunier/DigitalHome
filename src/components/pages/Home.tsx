import type { Component } from "solid-js";
import Page from "../layout/Page";
import Grid from "../layout/Grid";
import avatar from "../../assets/avatar.png";
import Profile from "../cards/Profile";
import ImageCard from "../cards/ImageCard";
import styles from "./Home.module.css";

import reactLogo from '../../assets/icons/react.png';
import solidLogo from '../../assets/icons/solid.png';
import nextLogo from '../../assets/icons/next.png';
import unityLogo from '../../assets/icons/unity.jpg';
import ipfsLogo from '../../assets/icons/ipfs.png';
import solidityLogo from '../../assets/icons/solidity.png';
import epitechLogo from '../../assets/icons/epitech.jpg';
import vaulthLogo from '../../assets/icons/vaulth.svg';
import breakfirstLogo from '../../assets/icons/breakfirst.png';
import b2expandLogo from '../../assets/icons/b2expand.png';
import defactoLogo from '../../assets/icons/defacto.png';
import quickstarterLogo from '../../assets/icons/quickstarter.png';
import websiteLogo from '../../assets/icons/website.png';

const Home: Component = () => (
  <Page>
    <h1>Sheykei's Digital Home</h1>
    <p>
      My personal website, including projects, portfolio, social links etc...
    </p>
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
    <h1>Favorite Stack</h1>
    <div className={styles.gridTech}>
      <ImageCard src={reactLogo}>
        <h2>React.js</h2>
        <p>Front-end development framework</p>
      </ImageCard>
      <ImageCard src={solidLogo}>
        <h2>Solid.js</h2>
        <p>Front-end development framework</p>
      </ImageCard>
      <ImageCard src={nextLogo}>
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
      <ImageCard src={unityLogo}>
        <h2>Unity</h2>
        <p>Game engine.</p>
      </ImageCard>
    </div>
    <h1>Projects</h1>
    <div className={styles.gridProjects}>
      <ImageCard src={websiteLogo}>
        <h2>This website</h2>
        <p>Portfolio website</p>
      </ImageCard>
      <ImageCard src={vaulthLogo}>
        <h2>Vaulth</h2>
        <p>Decentralized certificate of authenticity mangagment plaform</p>
      </ImageCard>
      <ImageCard src={quickstarterLogo}>
        <h2>Quickstarter</h2>
        <p>
          Decentralized crowd-funding and community project management for
          #StartonHackathon
        </p>
      </ImageCard>
      <ImageCard src={defactoLogo}>
        <h2>Defacto</h2>
        <p>
          Decentralized fact-checking and journalism platform for
          #StartonHackaton
        </p>
      </ImageCard>
    </div>
    <h1>Experiences</h1>
    <div className={styles.gridExperiences}>
      <ImageCard src={epitechLogo}>
        <h2>{"{EPITECH.}"}</h2>
        <p>Master in software development</p>
      </ImageCard>
      <ImageCard src={breakfirstLogo}>
        <h2>Unity developer @ BreakFirst</h2>
        <p>Feature development for prototypes on Nintendo Switch and Mobile platforms.</p>
      </ImageCard>
      <ImageCard src={b2expandLogo}>
        <h2>Solidity/React developer @ B2Expand</h2>
        <p>Full-stack development of NFT-related projects</p>
      </ImageCard>
    </div>
  </Page>
);

export default Home;
