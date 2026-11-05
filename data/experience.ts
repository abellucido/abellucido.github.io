export type Job = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const jobs: Job[] = [
  {
    title: "Simulation Specialist Intern",
    company: "Roche",
    location: "Spain",
    start: "Sep 2025",
    end: "Aug 2026",
    highlights: [
      "Analyzed key performance variables across discrete event simulation projects to determine optimal model parameters.",
      "Identified and resolved simulation bottlenecks, improving pipeline reliability and throughput.",
      "Designed data visualizations that accelerated stakeholder decision-making.",
    ],
  },
  {
    title: "Computational Researcher",
    company: "Molecular Biology Institute of Barcelona (IBMB)",
    location: "Spain",
    start: "Dec 2024",
    end: "May 2025",
    highlights: [
      "Applied protein language models to design novel gene editing tools and optimize viral vectors for gene therapy.",
      "Used HPC infrastructure to engineer gene editors and evaluate viral vectors as therapeutic candidates.",
    ],
  },
  {
    title: "Researcher",
    company: "Instituto de Investigación Biomédica de Lleida (IRBLleida)",
    location: "Spain",
    start: "Oct 2020",
    end: "Dec 2024",
    highlights: [
        "Built an ODE-based mathematical model of the strigolactone metabolic pathway; sensitivity and stability analyses led to a simulation achieving a 4× increase in desirable strigolactone yield over undesirable variants.",
        "Developed STRIGROOT, a Wolfram Mathematica package for multiscale modeling coupling strigolactone biosynthesis with 3D maize root system architecture, enabling visualization and quantification of root traits (length, branching, volume, surface area).",
        "Constructed a 3D RSA simulation; identified that strigolactone concentrations of 0.25–2.5 µM maximized primary and seminal root length and lateral branching.",
        "Synthesized and reviewed mathematical models for a multiscale framework in plant synthetic biology, contributing to a collaborative computational pipeline.",
        "Published 4 first-author articles in peer-reviewed journals (Frontiers in Plant Science, Plants).",
    ]
  },
  {
    title: "Visiting Researcher",
    company: "Forschungszentrum Jülich (FZJ)",
    location: "Germany",
    start: "Jan 2023",
    end: "Apr 2023",
    highlights: [
        "Extended the OpenSimRoot plant simulation model using C++, navigating a large scientific codebase via WSL and XML-based configuration.",
        "Collaborated with an international computational biology team, gaining experience in cross-institutional research workflows.",
    ]
  },
  {
    title: "Senior Science Research Specialist",
    company: "Department of Science and Technology–Science Education Institute (DOST-SEI)",
    location: "Philippines",
    start: "Mar 2019",
    end: "Jun 2020",
    highlights: [
        "Applied optimal control theory to a mathematical model of H5N6 avian influenza spread; results showed culling reduced infected birds by 84%, isolation by 50%, and vaccination by 22%, providing actionable guidance for policymakers.",
        "Authored a peer-reviewed publication on epidemic modeling and intervention strategies.",
        "Organized international scientific conferences: managed participant registration, produced books of abstracts, and served on technical committees.",
    ]
  },
];