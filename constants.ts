import { Member, NewsItem, Publication, ResearchPillar } from './types';

export const LAB_NAME = "QASCOM Lab";
export const LAB_FULL_NAME = "Quantum-AI-Space Communications Lab";
export const TAGLINE = "Bridging Quantum-Enhanced Intelligence with the Next Generation of Non-Terrestrial Networks (NTN).";

export const ABOUT_TEXT = `
The QASCOM Lab (Quantum-AI-Space Communications) is an independent, interdisciplinary research initiative dedicated to pioneering advanced computational solutions for future telecommunication systems. Founded and led by Phuc Hao Do, Ph.D. Candidate, the Lab operates at the critical intersection of Quantum Computing, Distributed Artificial Intelligence, and Space Communications.

Our Mission is to develop and validate novel Hybrid Quantum-Classical Algorithms and highly efficient Distributed AI frameworks (Federated Learning, GNNs) to overcome the unique computational, latency, and security challenges inherent in complex, resource-constrained Space-Air-Ground Integrated Networks (SAGINs) and Non-Terrestrial Networks (NTN). Our work aims to secure and optimize the foundational infrastructure for the 6G era.
`;

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: 'p1',
    title: 'Quantum Optimization and Routing in NTN',
    shortTitle: 'Quantum Optimization',
    description: 'Modeling and solving NP-hard resource management problems—including dynamic routing, multi-beam satellite resource allocation, and trajectory optimization—using sophisticated techniques like Variational Quantum Algorithms (VQA) and Quantum-Inspired Optimization (QIO).',
    goal: 'Demonstrate significant asymptotic improvements in computational efficiency and performance for large-scale LEO/MEO constellation operations.',
    iconName: 'Cpu'
  },
  {
    id: 'p2',
    title: 'Federated and Distributed Intelligence',
    shortTitle: 'Distributed AI',
    description: 'Advancing AI autonomy in decentralized network environments. We develop robust Federated Learning (FL) protocols for privacy-preserving data analysis and employ Graph Neural Networks (GNNs) and Spatio-Temporal GNNs (ST-GNNs) for real-time modeling and efficient traffic classification/prioritization.',
    goal: 'Enable secure, distributed machine intelligence at the network edge with minimal bandwidth and latency overhead.',
    iconName: 'Network'
  },
  {
    id: 'p3',
    title: 'Quantum-Enhanced Cybersecurity and Resilience',
    shortTitle: 'Quantum Security',
    description: 'Researching innovative security solutions by leveraging Hybrid Quantum Machine Learning (QML) for superior anomaly detection and zero-day threat identification. Evaluating Post-Quantum Cryptography (PQC) within latency-sensitive NTN infrastructure.',
    goal: 'Establish the necessary quantum-safe and resilient communication protocols for critical space assets.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'p4',
    title: 'Advanced Communications Technology Integration',
    shortTitle: 'Next-Gen Comms',
    description: 'Exploring the control plane and optimization mechanisms for next-generation hardware, such as developing AI and QIO-driven strategies for managing and optimizing Reconfigurable Intelligent Surfaces (RIS) in hybrid satellite-terrestrial links.',
    goal: 'Optimize physical layer performance through intelligent hardware control.',
    iconName: 'Satellite'
  }
];

export const TEAM_MEMBERS: Member[] = [
  {
    id: 'lead',
    name: 'Phuc Hao Do',
    role: 'Founder & Principal Investigator',
    bio: 'Ph.D. Candidate specializing in Quantum Computing, Distributed AI, and Space Communications. Leading QASCOM towards the future of 6G infrastructure.',
    imageUrl: 'https://ui-avatars.com/api/?name=Phuc+Hao+Do&background=0ea5e9&color=fff&size=256',
    links: {
      github: 'https://github.com/ailabteam',
      website: 'https://phuchaodo.coregenaihub.com/'
    }
  },
  // Placeholder for future members
  {
    id: 'm1',
    name: 'Future Collaborator',
    role: 'Research Assistant',
    bio: 'Position open for students passionate about Quantum AI and Satellite Networks.',
    imageUrl: 'https://ui-avatars.com/api/?name=Research+Assistant&background=334155&color=fff&size=256',
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: 'A Variational Quantum Algorithm for Latency-Minimal Routing in Mega-Constellation LEO Networks',
    authors: ['Phuc Hao Do', 'T. Q. Duong', 'et al.'],
    venue: 'IEEE Journal on Selected Areas in Communications (JSAC)',
    year: 2025,
    tags: ['Quantum Computing', 'NTN', 'Routing Optimization']
  },
  {
    id: 'pub2',
    title: 'Robust Federated Learning against Model Poisoning in Space-Air-Ground Integrated Networks',
    authors: ['Phuc Hao Do', 'N. S. Vo', 'et al.'],
    venue: 'IEEE Transactions on Wireless Communications',
    year: 2024,
    tags: ['Federated Learning', 'Security', 'SAGIN']
  },
  {
    id: 'pub3',
    title: 'Spatio-Temporal Graph Neural Networks for Traffic Forecasting in Software-Defined Satellite Networks',
    authors: ['Phuc Hao Do', 'Collaborator A'],
    venue: 'IEEE Internet of Things Journal',
    year: 2024,
    tags: ['AI', 'GNN', 'Traffic Prediction']
  },
  {
    id: 'pub4',
    title: 'Quantum-Inspired Optimization for Reconfigurable Intelligent Surfaces in 6G',
    authors: ['Phuc Hao Do'],
    venue: 'IEEE Global Communications Conference (GLOBECOM)',
    year: 2023,
    tags: ['RIS', 'Optimization', '6G']
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-05-20',
    title: 'QASCOM Lab Founded',
    summary: 'Officially launching our interdisciplinary research initiative for 6G NTN systems.'
  },
  {
    id: 'n2',
    date: '2024-06-01',
    title: 'Open Collaboration Call',
    summary: 'We are actively seeking collaboration with academic and industry partners globally.'
  }
];