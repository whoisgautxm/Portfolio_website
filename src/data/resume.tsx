import { Icons } from "@/components/icons";

export const DATA = {
  name: "Gautam Kumar",
  initials: "GK",
  url: "https://dillion.io",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi,+Delhi,+India/",
  description:
    "I am passionate about building softwares that solves problem without telling the solution. I am gaining experience in contributing to ZKP. I am currently looking for internships in ZK engineer .",
  summary:
  "I am a 3rd year undergraduate student at IIT Delhi, and it's not a Computer Science Degree. It's best of both worlds 'BioTech Enginerring'😊. Figuring out how to contribute to Open Source projects related to ZK-Vms,Zk-Email,Zk-p2p.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Python",
    "C++",
    "Solidity",
    "Rust",
    "Circom",
    "Halo2"

  ],
  contact: {
    email: "whoisgautxm@gmail.com",
    tel: "+91 7906104503",
    social: {
      GitHub: {
        url: "https://github.com/whoisgautxm",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/gautam-kumar-052a52175/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/whoisgautxm",
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
      title: "Image-Authentication Model Using Merkle-Tree",
      dates: "June 2024",
      active: true,
      description:
        "This project is an implementation of an image authentication scheme using blockchain and Merkle tree mechanisms, developed in Rust. It is based on the [research paper](https://www.mdpi.com/1999-5903/11/7/149) 'An Image Authentication Scheme Using Merkle Tree Mechanisms' by Gaurav Malav and A. K. Sarje, published in Future Internet.",
      technologies: [
        "Rust",
        "IPFS",
        "Merkle Trees",
        "Blockchain"
      ],
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
    {
      title: "Zk-Dapp",
      dates: "June 2024",
      active: true,
      description:
      "Using this Dapp we can Input two numbers between 0 and 5, inclusive. The two numbers must not be equal. We'll generate a ZK proof locally in the browser, and only the proof will be sent to the blockchain so that no one watching the blockchain will know the two numbers.It is based on the research paper 'Writing a Zero Knowledge Dapp' by Yujiang Tham, published in Medium.",
      technologies: [
        "Circom",
        "Solidity",
        "JavaScript",
        "Next.js",
        "Typescript",

      ],
      links: [
        {
          type: "Article",
          href: "https://medium.com/@yujiangtham/writing-a-zero-knowledge-dapp-fd7f936e2d43",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/whoisgautxm/ZK-Dapp",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://i.postimg.cc/VkJqrQfF/Screenshot-2024-06-21-002333.png",
      video:"",
    },
    {
      title: "Blockchain Implementation in Rust",
      dates: "May 2024",
      active: true,
      description:
        "This project is an implementation of a blockchain in Rust by a article by [LogRocket](https://blog.logrocket.com/how-to-build-a-blockchain-in-rust/). It is a simple blockchain implementation that allows users to send and receive messages to and from the blockchain.",
      technologies: [
        "Rust",
        "libp2p"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/whoisgautxm/Blockchain-Implementation-in-Rust",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Article",
          href: "https://blog.logrocket.com/how-to-build-a-blockchain-in-rust/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://i.postimg.cc/SKjvxt30/blockchain.png",
      video: "",
    },
    {
      title: "Merkle Tree Implementation in Rust",
      href: "https://llm.report",
      dates: "June 2024",
      active: true,
      description:
      "This project is an implementation of a Merkle Tree in Rust. This helps users to traverse the tree and verify the authenticity of the data in logarithmic time. It helps to compare 2 Merkle Tree at variuos node levels.",
      technologies: [
        "Rust"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/whoisgautxm/Merkle_Tree/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/7YMcsz0R/Merkle-Tree.png",
      video: "",
    },
    
  ],
} as const;
