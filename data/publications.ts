export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  image: string;
  imageAlt: string;
};

export const publications: Publication[] = [
  {
    title:
      "Multiscale Mathematical Modeling in Systems Biology: A Framework to Boost Plant Synthetic Biology",
    authors:
      "Lucido, A., Basallo, O., Marin-Sanguino, A., Eleiwa, A., Martinez, E.S., Vilaprinyo, E., Sorribas, A., & Alves, R.",
    journal: "Plants, 14(3)",
    year: 2025,
    doi: "10.3390/plants14030470",
    image: "/images/multiscale.png",
    imageAlt: "Multiscale workflow",
  },
  {
    title:
      "Modeling the effects of strigolactone levels on maize root system architecture",
    authors:
      "Lucido, A., Andrade, F., Basallo, O., Eleiwa, A., Marin-Sanguino, A., Vilaprinyo, E., Sorribas, A., & Alves, R.",
    journal: "Frontiers in Plant Science, 14",
    year: 2024,
    doi: "10.3389/fpls.2023.1329556",
    image: "/images/rsa.png",
    imageAlt: "3D root system architecture model",
  },
  {
    title: "A mathematical model for strigolactone biosynthesis in plants",
    authors:
      "Lucido, A., Basallo, O., Sorribas, A., Marin-Sanguino, A., Vilaprinyo, E., & Alves, R.",
    journal: "Frontiers in Plant Science, 13",
    year: 2022,
    doi: "10.3389/fpls.2022.979162",
    image: "/images/biosynthesis.png",
    imageAlt: "Strigolactone biosynthesis model",
  },
  {
    title: "Prevention of H5N6 outbreaks in the Philippines using optimal control",
    authors: "Lucido, A.G., Smith?, R., & Lao, A.R.",
    journal: "Philippine Science Letters, 13(2), 158–173",
    year: 2020,
    doi: "10.54645/2020132PGZ-12",
    image: "/images/bird.png",
    imageAlt: "Avian influenza model",
  },
  {
    title:
      "Modeling the effect of daytime duration on the biosynthesis of terpenoid precursors",
    authors:
      "Basallo, O., Lucido, A., Sorribas, A., Marin-Sanguino, A., Vilaprinyo, E., Martinez, E., Eleiwa, A., & Alves, R.",
    journal: "Frontiers in Plant Science, 15",
    year: 2024,
    doi: "10.3389/fpls.2024.1465030",
    image: "/images/daytime.jpg",
    imageAlt: "Effect of daytime duration on terpenoid precursors",
  },
  {
    title:
      "Changing biosynthesis of terpenoid precursors in rice through synthetic biology",
    authors:
      "Basallo, O., Perez, L., Lucido, A., Sorribas, A., Marin-Sanguino, A., Vilaprinyo, E., et al. & Alves, R.",
    journal: "Frontiers in Plant Science, 14, 1133299",
    year: 2023,
    doi: "10.3389/fpls.2023.1133299",
    image: "/images/rice.jpg",
    imageAlt: "Terpenoid model",
  },
  {
    title:
      "Hybrid assembly and comparative genomics unveil insights into the evolution and biology of the red-legged partridge",
    authors:
      "Eleiwa, A., Nadal, J., Vilaprinyo, E., Marin-Sanguino, A., Sorribas, A., Basallo, O., Lucido, A., et al. & Alves, R.",
    journal: "Scientific Reports, 14(1), 19531",
    year: 2024,
    doi: "10.1038/s41598-024-70018-0",
    image: "/images/assembly.webp",
    imageAlt: "Genome assembly",
  },
];