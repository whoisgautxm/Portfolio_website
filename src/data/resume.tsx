import { Icons } from "@/components/icons";
import { title } from "process";

export const DATA = {
  name: "Gautam Kumar",
  initials: "GK",
  url: "https://whoisgautxm.vercel.app/",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi,+Delhi,+India/",
  description:
    "I am passionate about building softwares that solves problem without telling the solution. I am gaining experience in contributing to ZKP. I am currently looking for internships in ZK engineer .",
  summary:
    "I am a 3rd year undergraduate student at IIT Delhi. Figuring out how to contribute to Open Source projects related to ZK-VMs,Zk-Email,Zk-p2p.",
  avatarUrl: "/me.jpg",
  skills: ["React", "Python", "Solidity", "Rust", "Circom", "Halo2"],
  contact: {
    email: "whoisgautxm@gmail.com",
    tel: "+91 7906104503",
    social: {
      GitHub: {
        url: "https://github.com/whoisgautxm",
        icon: Icons.github,
      },
      X: {
        url: "https://x.com/0xgautxm",
        icon: Icons.x,
      },
    },
  },

  education: [
    {
      school: "Indian Institute of Technology (IIT) Delhi",
      href: "https://iitd.ac.in",
      degree: "B.Tech",
      logoUrl: "/iitd.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "ZKAttestify🟢",
      dates: "August 2024",
      active: true,
      description:
        "This project tackles a problem outlined by the EAS team as part of their developer tool track. We created a web application that leverages the RISC Zero VM to generate a Zero Knowledge Proof for attestation data, using the attestation UID. Both the proof generation and verification are handled locally on the user's system",
      technologies: ["Rust", "RISC0 VM"],
      links: [
        {
          type: "Source",
          href: "https://github.com/whoisgautxm/ZkAttestifyLocal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/0NwbyKhz/image.png",
      video: "",
    },

    {
      title: "Updated prover_main.cc in tachyon🟢",
      dates: "June 2024",
      active: true,
      description:
        "[Tachyon](https://github.com/kroma-network/tachyon) is a ZK prover written in C++. Tachyon is very fast in proof generation and verification comapred to Rapid-Snark. I had added benchmarking functionality to prover_main.cc . Further Details you can see in this [PR](https://github.com/kroma-network/tachyon/pull/452)",
      technologies: ["C++"],
      links: [
        {
          type: "Source",
          href: "https://github.com/kroma-network/tachyon/pull/452",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/kM0w0KW9/G6FKmc9W.jpg",
      video: "",
    },
    {
      title: "Changing ZK prover of ZK email from Rapid-Snark to Tachyon🟢",
      href: "https://llm.report",
      dates: "June 2024",
      active: true,
      description:
        "Currently I am working on this project. I am changing the ZK prover of ZK email from Rapid-Snark to Tachyon. This is the [issue](https://github.com/zkemail/email-wallet/issues/75)",
      technologies: ["Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/zkemail/email-wallet/pull/102",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/TP1rL3nC/0lG8k32G.jpg",
      video: "",
    },
    {
      title: "Image-Authentication Model Using Merkle-Tree🟢",
      dates: "June 2024",
      active: true,
      description:
        "This project is an implementation of an image authentication scheme using blockchain and Merkle tree mechanisms, developed in Rust. It is based on the [research paper](https://www.mdpi.com/1999-5903/11/7/149) 'An Image Authentication Scheme Using Merkle Tree Mechanisms' by Gaurav Malav and A. K. Sarje, published in Future Internet.",
      technologies: ["Rust", "IPFS", "Merkle Trees", "Blockchain"],
      links: [
        {
          type: "Source",
          href: "https://github.com/whoisgautxm/Image-Authentication-Model-in-Rust",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/3NHqCCq1/image-auth.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SuperHack 2024",
      dates: "August 2 – 16, 2024",
      location: "Virtual",
      description:
        "We are making a developer tool that  creates ZKP of the attestations from EAS . We had used the RISC Zero ZKVM for proof generation and verification.",
      image: "https://postimg.cc/xkZxNSHD",
      links: [
        {
          title: "SuperHack",
          icon: <Icons.globe className="h-4 w-4" />, // Add a globe or any other appropriate icon
          href: "https://ethglobal.com/showcase/zkattestify-1jxe4",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whoisgautxm/ZkAttestifyLocal",
        },
      ],
    },
    {
      title: "NeoXGrind 2024",
      dates: "August 2 – 16, 2024",
      location: "Offline",
      description:
        "This sophisticated decentralized application (dApp) represents a cutting-edge platform for the creation, trading, and management of meme-inspired cryptocurrency tokens.",
      image: "https://postimg.cc/xkZxNSHD",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whoisgautxm/neox-pump",
        },
      ],
    },
    {
      title: "Aligned Builders Hackathon",
      dates: "October 25 – 29, 2024",
      location: "Virtual",
      description:
        "A Decentralized Fiat-to-Crypto Escrow System Powered by Aligned Layer",
      image: "https://postimg.cc/xkZxNSHD",
      links: [
        {
          title: "Aligned Builders Hackathon",
          icon: <Icons.globe className="h-4 w-4" />, // Add a globe or any other appropriate icon
          href: "https://x.com/alignedlayer/status/1862163895542263824",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Shivannsh/ZkSetu",
        },
      ],
    },
    {
      title: "Polkadot Hacker House",
      dates: "November 26 – December 3, 2024",
      location: "Offline",
      description:
        "A PvP betting Dapp on Moonbeam using Chainlink Price feeds ",
      image: "https://postimg.cc/xkZxNSHD",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whoisgautxm/PvP-Betting-Frontend",
        },
      ],
    },
    {
      title: "zkVerify ZK App and Infra Builders",
      dates: "November 20 – December 10, 2024",
      location: "Virtual",
      description:
        "This project implements a system that allows users to obtain private attestations from reputable sources about their personal information, such as age without private information about themeselves.",
      image: "https://postimg.cc/xkZxNSHD",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whoisgautxm/AttestVerify",
        },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/attestverify-16f9",
        },
        {
          title: "Video",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/6f-EMcdC62Q",
        },
      ],
    },
    {
      title: "ZK Online Hackathon for Web3 Builders",
      dates: "January 27 – February 14, 2025",
      location: "Virtual",
      description:
        "ML model marketplace that provide predictions but maintains the privacy of ML model datasets.",
      image: "https://postimg.cc/xkZxNSHD",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whoisgautxm/ShadowML",
        },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/shadowml-e8e2",
        },
        {
          title: "Video",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=AfbtoJ8n_EQ",
        },
      ],
    },
  ],
} as const;
