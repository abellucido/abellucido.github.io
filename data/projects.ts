export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  image?: string;
  link?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "strigroot",
    title: "STRIGROOT: A Wolfram Mathematica Package",
    summary:
      "Multiscale modeling package coupling strigolactone biosynthesis with 3D maize root system architecture.",
    tech: ["Wolfram Mathematica", "ODEs", "Multiscale Modeling"],
    image: "/projects/package.png",
    link: "https://community.wolfram.com/groups/-/m/t/3145876",
    featured: true,
  },
  {
    slug: "roche-des",
    title: "Discrete Event Simulation at Roche",
    summary:
      "Optimized simulation parameters, resolved throughput bottlenecks and built visualizations for stakeholder decisions at Roche.",
    tech: ["Discrete Event Simulation", "Python", "Data Visualization"],
    featured: true,
  },
];