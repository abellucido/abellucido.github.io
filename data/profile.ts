export type ProfileLink = {
  label: string;
  href: string;
};

export type Degree = {
  degree: string;
  school: string;
  year: number;
};

export const profile = {
  name: "Abel Lucido Garbulo",
  role: "Computational Scientist",
  photo: "/images/profile.jpg",
  email: "abellucido@gmail.com",
  intro:
    "Computational researcher and simulation specialist with a PhD in Bioinformatics, working on mathematical modeling, AI/ML and discrete event simulation for biotech and pharma.",
  research:
    "My doctoral research built a multiscale mathematical model of plants to investigate the effects of modulating strigolactone levels in maize, connecting a model of strigolactone biosynthesis to a 3D root system architecture model and packaging it for Wolfram Mathematica.",
};

export const profileLinks: ProfileLink[] = [
  { label: "GitHub", href: "https://github.com/abellucido" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abel-lucido-473b63156/",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=xNkLqgoAAAAJ&hl=en",
  },
];

export const education: Degree[] = [
  {
    degree: "PhD in Bioinformatics (Interuniversity)",
    school: "University of Lleida",
    year: 2024,
  },
  {
    degree: "MSc in Mathematics",
    school: "De La Salle University, Manila",
    year: 2018,
  },
  {
    degree: "BSc in Mathematics for Teachers",
    school: "Philippine Normal University",
    year: 2016,
  },
];
