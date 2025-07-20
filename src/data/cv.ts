export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ResearchLine {
  title: string;
  shortDesc: string;
  description: string;
  topics: string[];
  keyPublications?: { title: string; url: string }[];
}

export interface ExperienceItem {
  role: string;
  period: string;
  institution: string;
  location: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
  location: string;
  supervisors?: string;
  thesis?: {
    title: string;
    url?: string;
  };
  cgpa?: string;
}

export interface PublicationItem {
  authors: string;
  year: number | string;
  title: string;
  venue: string;
  details?: string;
  badgeType?: 'journal' | 'conference' | 'preprint' | 'workshop';
  links: {
    label: string;
    url: string;
  }[];
}

export interface PresentationItem {
  title: string;
  event: string;
  year: number | string;
  location?: string;
  type: 'talk' | 'panel' | 'poster' | 'presentation';
  links: {
    label: string;
    url: string;
  }[];
}

export interface WorkshopItem {
  name: string;
  event: string;
  location: string;
  year: number | string;
  url: string;
  role?: string;
  description?: string;
}

export const siteConfig = {
  name: "Milton Llera Montero, PhD",
  shortName: "Milton L. Montero",
  title: "Milton Llera Montero | Academic Website",
  description: "Researcher studying mechanisms that support generalization and adaptability in biological and artificial systems.",
  avatarPlaceholderText: "MLM",
  showBlog: false, // Initially hidden as requested; set to true when ready
  emails: [
    { address: "milton.llera@icloud.com", primary: true },
    { address: "mlle@itu.dk", primary: false }
  ],
  socials: [
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=mTcxP70AAAAJ&hl=en", icon: "scholar" },
    { name: "GitHub", url: "https://www.github.com/miltonllera", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/milton-l-montero/", icon: "linkedin" },
    { name: "ORCID", url: "https://orcid.org/0000-0002-7440-3510", icon: "orcid" },
    { name: "YouTube", url: "https://www.youtube.com/@miltonllera1437/featured", icon: "youtube" }
  ]
};

export const summaryText = `I am broadly interested in the mechanisms that support generalization and adaptability in both biological and artificial systems. Specifically, my research has covered a broad range of topics including Cognitive Science, Computer Vision, Artificial Life and Synthetic Biology. Recently, I was a Postdoctoral Researcher at the REAL Lab with Sebastian Risi studying theoretical models of self-organization in the context of biological development. Previously I completed my PhD in Psychology at the University of Bristol under the supervision of Jeffrey Bowers, Rui Ponte Costa, and Gaurav Malhotra, where I studied the combinatorial generalization properties and (dis)similarities between humans and Deep Learning models of vision. My work combines computational modeling, mainly using Deep Learning, along with behavioral and mechanistic interpretability approaches to answer fundamental questions in the aforementioned domains of inquiry.`;

export const researchLines: ResearchLine[] = [
  {
    title: "Self-Organization, Morphogenesis & Artificial Life",
    shortDesc: "Theoretical models of self-organization, developmental scaffolds, and cellular mechanisms that drive robust, open-ended biological development and artificial agents.",
    description: "Investigating how simple local rules give rise to complex, adaptive, and self-repairing morphological structures. This research focuses on learning developmental scaffolds for self-organizing systems, language-guided cellular automata, meta-learning evolvable developmental encodings, and identifying reusable regulatory handles to control phenotypic variation.",
    topics: ["Self-Organization", "Morphogenetic Scaffolds", "Cellular Automata", "Evolvable Encodings", "Synthetic Biology"],
    keyPublications: [
      { title: "Learning developmental scaffolds for self-organising systems (ALife 2026)", url: "https://arxiv.org/abs/2605.14998" },
      { title: "On Growth and Form, and Function: Reusable Regulatory Handles Control Phenotypic Variation (2026)", url: "https://arxiv.org/pdf/2609.29755" },
      { title: "Meta-learning an evolvable developmental encoding (ALife 2024)", url: "https://direct.mit.edu/isal/proceedings/isal2024/36/50/123543" }
    ]
  },
  {
    title: "Combinatorial Generalization & Cognitive Vision",
    shortDesc: "Exploring the combinatorial generalization properties and (dis)similarities between human vision and deep neural networks.",
    description: "Critically examining deep neural networks as models of human vision and cognition. This line investigates the role of disentangled latent representations, limitations of object-centric models in compositional generalization tasks, and rigorous testing frameworks (such as MindSet: Vision) comparing biological perception with machine vision.",
    topics: ["Compositional Learning", "Object-Centric Vision", "Disentangled Representations", "Psychophysics Testing of DNNs", "Cognitive Science"],
    keyPublications: [
      { title: "Deep problems with neural network models of human vision (BBS 2023)", url: "https://doi.org/10.1017/S0140525X22002813" },
      { title: "Lost in Latent Space: Disentangled Models and Combinatorial Generalisation (NeurIPS 2022)", url: "https://arxiv.org/abs/2204.02283" },
      { title: "Successes and Limitations of Object-centric Models at Compositional Generalisation (2024)", url: "https://arxiv.org/pdf/2412.18743" }
    ]
  },
  {
    title: "Adaptive Neural Architectures & Neuroevolution",
    shortDesc: "Designing neural architectures and biologically-inspired mechanisms for memory, gating, and transfer learning.",
    description: "Investigating fundamental computational mechanisms such as subtractive and divisive gating in recurrent networks, plastic probabilistic synapses, self-assembling neural networks, and self-evolving hypernetworks. Comparing neuroevolution and reinforcement learning across complex adaptation and transfer regimes.",
    topics: ["Neuroevolution", "Gating Mechanisms", "Synaptic Plasticity", "Hypernetworks", "Transfer Learning"],
    keyPublications: [
      { title: "When Does Neuroevolution Outcompete Reinforcement Learning in Transfer Tasks? (GECCO 2025)", url: "https://dl.acm.org/doi/pdf/10.1145/3712256.3726475" },
      { title: "Hypernetworks That Evolve Themselves (ALife 2025)", url: "https://arxiv.org/abs/2512.16406" },
      { title: "Computational roles of plastic probabilistic synapses (Curr. Opin. Neurobiol. 2019)", url: "https://doi.org/10.1016/j.conb.2018.09.002" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Postdoctoral Researcher",
    period: "June 2023 – September 2026",
    institution: "REAL Lab, IT University of Copenhagen",
    location: "Copenhagen, Denmark",
    description: "Studying the mechanisms that enable robust, open-ended development and adaptation in biological and artificial systems."
  },
  {
    role: "Applied Scientist Intern",
    period: "July 2022 – December 2022",
    institution: "Causal Representation Learning Lablet, Amazon Web Services (AWS)",
    location: "Tübingen, Germany",
    description: "Worked as an intern focusing on action recognition from videos using motion cues with Carl-Johann Simon-Gabriel, Thomas Brox, and Francesco Locatello."
  },
  {
    role: "Teaching Assistant",
    period: "October 2018 – July 2020",
    institution: "Department of Computer Science, University of Bristol",
    location: "Bristol, UK",
    description: "Teaching assistant for Information Processing in the Brain (COMSM034), covering information theory, deep learning, and data analysis relevant to computational neuroscience."
  },
  {
    role: "Research Assistant",
    period: "August 2017 – May 2018",
    institution: "School of Engineering, Technical University of Madrid (UPM)",
    location: "Madrid, Spain",
    description: "Implemented software tools for the Human Brain Project through the Cajal Blue Brain affiliate project."
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Doctor of Philosophy (PhD) in Psychology",
    period: "September 2018 – May 2023",
    institution: "School of Psychological Science, University of Bristol",
    location: "Bristol, UK",
    supervisors: "Prof. Jeffrey S. Bowers, Dr. Rui Ponte Costa, Dr. Gaurav Malhotra",
    thesis: {
      title: "Combinatorial Generalisation in Machine Vision",
      url: "https://research-information.bris.ac.uk/en/studentTheses/combinatorial-generalisation-in-machine-vision/"
    }
  },
  {
    degree: "Master's Degree (MSc) in Artificial Intelligence",
    period: "September 2016 – July 2017",
    institution: "School of Engineering, Technical University of Madrid (UPM)",
    location: "Madrid, Spain",
    supervisors: "Prof. Concha Bielza, Prof. Pedro Larrañaga",
    cgpa: "8.8 / 10",
    thesis: {
      title: "A Novel Multi-dimensional Regression Model Based on Gaussian Networks",
      url: "https://cig.fi.upm.es/wp-content/uploads/2024/01/TFM_MILTON_LLERA_MONTERO.pdf"
    }
  },
  {
    degree: "Bachelor's Degree (BS) in Computer Science",
    period: "September 2011 – July 2016",
    institution: "Department of Mathematics and Computer Science, University of Havana",
    location: "Havana, Cuba",
    supervisors: "Dr. Alejandro Piad Morffis",
    cgpa: "4.52 / 5",
    thesis: {
      title: "Example-based Terrain Modeling for Procedural Content Generation"
    }
  }
];

export const journalArticles: PublicationItem[] = [
  {
    authors: "Bowers, J. S., Malhotra, G., Dujmović, M., Montero, M. L., Tsvetkov, C., Biscione, V., ... & Blything, R.",
    year: 2023,
    title: "Deep problems with neural network models of human vision",
    venue: "Behavioral and Brain Sciences, 46, e385",
    badgeType: "journal",
    links: [
      { label: "Target Article DOI", url: "https://doi.org/10.1017/S0140525X22002813" }
    ]
  },
  {
    authors: "Bowers, J. S., Malhotra, G., Dujmović, M., Montero, M. L., Tsvetkov, C., Biscione, V., ... & Blything, R.",
    year: 2023,
    title: "Clarifying status of DNNs as models of human vision (Authors' Response)",
    venue: "Behavioral and Brain Sciences, 46, e412",
    badgeType: "journal",
    links: [
      { label: "Response DOI", url: "https://doi.org/10.1017/S0140525X23002777" }
    ]
  },
  {
    authors: "Bowers, J. S., Malhotra, G., Adolfi, F., Dujmović, M., Montero, M. L., Biscione, V., ... & Heaton, R. F.",
    year: 2023,
    title: "On the importance of severely testing deep learning models of cognition",
    venue: "Cognitive Systems Research, 82, 101158",
    badgeType: "journal",
    links: [
      { label: "Journal DOI", url: "https://doi.org/10.1016/j.cogsys.2023.101158" }
    ]
  },
  {
    authors: "Bykowska, O., Gontier, C., Sax, A.-L., Jia, D. W., Montero, M. L., Bird, A. D., Houghton, C., Pfister, J.-P., & Costa, R. P.",
    year: 2019,
    title: "Model-based inference of synaptic transmission",
    venue: "Frontiers in Synaptic Neuroscience, 11, 21",
    badgeType: "journal",
    links: [
      { label: "Journal DOI", url: "https://doi.org/10.3389/fnsyn.2019.00021" }
    ]
  },
  {
    authors: "Montero, M. L., Sacramento, J., & Costa, R. P.",
    year: 2019,
    title: "Computational roles of plastic probabilistic synapses",
    venue: "Current Opinion in Neurobiology, 54, 90–97",
    badgeType: "journal",
    links: [
      { label: "Journal DOI", url: "https://doi.org/10.1016/j.conb.2018.09.002" }
    ]
  }
];

export const conferenceProceedings: PublicationItem[] = [
  {
    authors: "Montero, M. L., Najarro, E., Schauser, J., & Risi, S.",
    year: 2026,
    title: "Learning developmental scaffolds for self-organising systems",
    venue: "Artificial Life Conference Proceedings 38 (Vol. 2026, No. 1, p. 36). MIT Press",
    badgeType: "conference",
    links: [
      { label: "MIT Press Proceedings", url: "https://direct.mit.edu/isal/proceedings/isal2026/38/44/138194" },
      { label: "arXiv:2605.14998", url: "https://arxiv.org/abs/2605.14998" }
    ]
  },
  {
    authors: "Nisioti, E., Plantec, E., Montero, M., Pedersen, J., & Risi, S.",
    year: 2025,
    title: "When Does Neuroevolution Outcompete Reinforcement Learning in Transfer Learning Tasks?",
    venue: "Proceedings of the Genetic and Evolutionary Computation Conference (GECCO 2025), pp. 48–57. ACM",
    badgeType: "conference",
    links: [
      { label: "ACM Proceedings (PDF)", url: "https://dl.acm.org/doi/pdf/10.1145/3712256.3726475" }
    ]
  },
  {
    authors: "Pedersen, J. W., Plantec, E., Nisioti, E., Barylli, M., Montero, M. L., Korte, K., & Risi, S.",
    year: 2025,
    title: "Hypernetworks That Evolve Themselves",
    venue: "Artificial Life Conference Proceedings 37 (ALife 2025), Vol. 2025, No. 1, p. 17. MIT Press",
    badgeType: "conference",
    links: [
      { label: "MIT Press Proceedings", url: "https://direct.mit.edu/isal/proceedings/isal2025/37/17/134104" },
      { label: "arXiv:2512.16406", url: "https://arxiv.org/abs/2512.16406" }
    ]
  },
  {
    authors: "Montero, M. L., Plantec, E., Nisioti, E., Pedersen, J. W., & Risi, S.",
    year: 2024,
    title: "Meta-learning an evolvable developmental encoding",
    venue: "Artificial Life Conference Proceedings 36 (Vol. 2024, No. 1, p. 50). MIT Press",
    badgeType: "conference",
    links: [
      { label: "MIT Press Proceedings", url: "https://direct.mit.edu/isal/proceedings/isal2024/36/50/123543" },
      { label: "Conference Program", url: "https://2024.alife.org/detailed_program.html" }
    ]
  },
  {
    authors: "Plantec, E., Pedersen, J. W., Montero, M. L., Nisioti, E., & Risi, S.",
    year: 2024,
    title: "Evolving Self-Assembling Neural Networks: From Spontaneous Activity to Experience-Dependent Learning",
    venue: "Artificial Life Conference Proceedings 36 (Vol. 2024, No. 1, p. 37). MIT Press",
    badgeType: "conference",
    links: [
      { label: "MIT Press Proceedings", url: "https://direct.mit.edu/isal/proceedings/isal2024/36/37/123555" }
    ]
  },
  {
    authors: "Pedersen, J. W., Plantec, E., Nisioti, E., Montero, M. L., & Risi, S.",
    year: 2024,
    title: "Structurally flexible neural networks: Evolving the building blocks for general agents",
    venue: "Proceedings of the Genetic and Evolutionary Computation Conference (GECCO 2024), pp. 1119–1127. ACM",
    badgeType: "conference",
    links: [
      { label: "ACM Proceedings (PDF)", url: "https://dl.acm.org/doi/pdf/10.1145/3638529.3654113" },
      { label: "arXiv:2404.15193", url: "https://arxiv.org/abs/2404.15193" }
    ]
  },
  {
    authors: "Nisioti, E., Plantec, E., Montero, M. L., Pedersen, J., & Risi, S.",
    year: 2024,
    title: "Growing artificial neural networks for control: the role of neuronal diversity",
    venue: "Proceedings of the Genetic and Evolutionary Computation Conference Companion (GECCO 2024 Companion), pp. 175–178. ACM",
    badgeType: "conference",
    links: [
      { label: "ACM Proceedings (PDF)", url: "https://dl.acm.org/doi/pdf/10.1145/3638530.3654356" }
    ]
  },
  {
    authors: "Montero, M. L., Bowers, J. S., Ludwig, C. J., Costa, R. P., & Malhotra, G.",
    year: 2022,
    title: "Lost in Latent Space: Disentangled Models and the Challenge of Combinatorial Generalisation",
    venue: "Proceedings of the 36th Conference on Neural Information Processing Systems (NeurIPS 2022). New Orleans, USA",
    badgeType: "conference",
    links: [
      { label: "NeurIPS Program & Poster", url: "https://neurips.cc/virtual/2022/poster/52961" },
      { label: "OpenReview", url: "https://openreview.net/pdf?id=7yUxTNWyQGf" },
      { label: "arXiv:2204.02283", url: "https://arxiv.org/abs/2204.02283" }
    ]
  },
  {
    authors: "Montero, M. L., Ludwig, C. J., Costa, R. P., Malhotra, G., & Bowers, J. S.",
    year: 2020,
    title: "The role of disentanglement in generalisation",
    venue: "International Conference on Learning Representations (ICLR 2021)",
    badgeType: "conference",
    links: [
      { label: "ICLR Program & Poster", url: "https://iclr.cc/virtual/2021/poster/3173" },
      { label: "OpenReview", url: "https://openreview.net/pdf?id=qbH974jKUVy" }
    ]
  }
];

export const preprintsAndWorkshops: PublicationItem[] = [
  {
    authors: "Hartl, B., Montero, M. L., Barilly, M., Risi, S., & Levin, M.",
    year: 2026,
    title: "On Growth and Form, and Function: Reusable Regulatory Handles Control Phenotypic Variation",
    venue: "Preprint",
    badgeType: "preprint",
    links: [
      { label: "arXiv:2609.29755", url: "https://arxiv.org/pdf/2609.29755" }
    ]
  },
  {
    authors: "Montero, M. L., Bowers, J., & Malhotra, G.",
    year: 2024,
    title: "Successes and Limitations of Object-centric Models at Compositional Generalisation",
    venue: "NeurIPS 2024 Workshop on Compositional Learning: Perspectives, Methods, and Paths Forward",
    badgeType: "workshop",
    links: [
      { label: "arXiv:2412.18743", url: "https://arxiv.org/pdf/2412.18743" },
      { label: "Workshop Talk (SlidesLive)", url: "https://slideslive.com/39031181/successes-and-limitations-of-objectcentric-models-at-compositional-generalisation?ref=folder-163258" }
    ]
  },
  {
    authors: "Biscione, V., Montero, M. L., Dujmović, M., Yin, D., Malhotra, G., Puebla, G., ... & Bowers, J. S.",
    year: 2024,
    title: "MindSet: Vision. A toolbox for testing DNNs on key psychological experiments",
    venue: "Preprint",
    badgeType: "preprint",
    links: [
      { label: "arXiv:2404.05290", url: "https://arxiv.org/pdf/2404.05290" }
    ]
  }
];

export const invitedTalks: PresentationItem[] = [
  {
    title: "No, NeuroAI is not adopting the right methods to advance our understanding of the mind and brain",
    event: "GAC Kickoff debate presentation, Cognitive Computational Neuroscience (CCN 2026), New York, USA",
    year: 2026,
    type: "presentation",
    links: [
      { label: "Talk & Slides", url: "https://youtu.be/kYESqAKLGhA?si=vNGPbsdhHVvX91J8&t=131" },
      { label: "Panel Discussion", url: "https://youtu.be/kYESqAKLGhA?si=8GGyCruh40tr0-QB&t=2514" }
    ]
  },
  {
    title: "Morphogenetic Scaffolds in Self-organizing Systems",
    event: "Invited talk at the Levin Lab (Online)",
    year: 2026,
    type: "talk",
    links: [
      { label: "Talk & Slides (YouTube)", url: "https://youtu.be/X9dK7UKBICE?si=zwaakCn40DeKZKt0" }
    ]
  },
  {
    title: "Panel Discussion on Compositional Learning",
    event: "Panel speaker alongside Thomas Kipf (Google DeepMind) and Yilun Du (Harvard University). Workshop on Compositional Learning, NeurIPS 2024, Vancouver, Canada",
    year: 2024,
    type: "panel",
    links: [
      { label: "Panel Discussion (SlidesLive)", url: "https://slideslive.com/39031182/panel-discussion?ref=folder-163258" }
    ]
  }
];

export const contributedPresentations: PresentationItem[] = [
  {
    title: "Language Cellular Automata: Guiding Morphogenesis with Natural Language",
    event: "Poster presentation, ALife Proceedings Companion (pp. 99–101), Kyoto, Japan",
    year: 2025,
    type: "poster",
    links: [
      { label: "Conference Program", url: "https://drive.google.com/file/d/1Sg_MLUVagck_DdcrU3eNWUGTpK8RsYRT/view" }
    ]
  },
  {
    title: "Scaffolding Development via Morphogenetic Gradients",
    event: "Poster presentation, ALife Proceedings Companion (pp. 287–289), Kyoto, Japan",
    year: 2025,
    type: "poster",
    links: [
      { label: "Conference Program", url: "https://drive.google.com/file/d/1Sg_MLUVagck_DdcrU3eNWUGTpK8RsYRT/view" }
    ]
  },
  {
    title: "Curriculum learning with a hierarchical cellular encoding",
    event: "GECCO 2025 Companion, ACM",
    year: 2025,
    type: "presentation",
    links: [
      { label: "ACM Proceedings (PDF)", url: "https://dl.acm.org/doi/pdf/10.1145/3712255.3726672" }
    ]
  },
  {
    title: "Division versus subtraction: task-specific gating in recurrent neural networks",
    event: "Cognitive and Systems Neuroscience (Cosyne 2021), Online",
    year: 2021,
    type: "presentation",
    links: [
      { label: "Conference Program", url: "https://static1.squarespace.com/static/6102ca347474c263c40150cd/t/610870a432c9d257a80cace4/1627943077187/Cosyne2021_program_book.pdf" },
      { label: "Talk & Slides (YouTube)", url: "https://www.youtube.com/watch?v=r8kVb1yDV44" }
    ]
  },
  {
    title: "Deep Generative Models as Perceptual Front-ends for Decision Making",
    event: "Poster presentation, 53rd Annual Meeting of the Society for Mathematical Psychology (MathPsych 2020), Online",
    year: 2020,
    type: "poster",
    links: [
      { label: "YouTube Video", url: "https://youtu.be/9Sje1N35dM0?si=ciZ4ExxLT_0BC-UO" }
    ]
  },
  {
    title: "Subtractive gating improves generalization in working memory tasks",
    event: "Conference on Cognitive Computational Neuroscience (CCN 2019), Berlin, Germany",
    year: 2019,
    type: "presentation",
    links: [
      { label: "Extended Abstract", url: "https://pdfs.semanticscholar.org/fb2b/329a6d27bcea8f58749f2ff04c353402ad8d.pdf" }
    ]
  }
];

export const presentations: PresentationItem[] = [
  ...invitedTalks,
  ...contributedPresentations
];

export const workshopsOrganized: WorkshopItem[] = [
  {
    name: "Artificial Life, Intelligence, Complexity & Evolution (ALICE)",
    event: "ALICE Workshop 2027",
    location: "Geilo, Norway",
    year: 2027,
    url: "https://aliceworkshop.org"
  },
  {
    name: "ALife for Science and Engineering",
    event: "Special Session at ALife 2026",
    location: "Waterloo, Canada",
    year: 2026,
    url: "https://alifeforscience.github.io"
  },
  {
    name: "Generative Adversarial Collaboration: Is NeuroAI adopting the right methods and theoretical frameworks to advance our understanding of mind and brain?",
    event: "GAC at CCN 2026",
    location: "New York, USA",
    year: 2026,
    url: "https://sites.google.com/ccneuro.org/gac2020/gacs-by-year/2026-gacs/2026-1?authuser=0"
  },
  {
    name: "Artificial Life, Intelligence, Complexity & Evolution (ALICE)",
    event: "ALICE Workshop 2026",
    location: "Copenhagen, Denmark",
    year: 2026,
    url: "https://2026.aliceworkshop.org"
  },
  {
    name: "Self-Organizing Neural Intelligences",
    event: "Special Session at ALife 2025",
    location: "Kyoto, Japan",
    year: 2025,
    url: "https://sites.google.com/view/soni-alife"
  },
  {
    name: "Evolving Self-Organisation",
    event: "Workshop at GECCO 2025",
    location: "Malaga, Spain",
    year: 2025,
    url: "https://gecco-2025.sigevo.org/Workshopb2fc.html?itemId=5097"
  }
];

export const skillsAndService = {
  technical: "Extensive experience with programming in Python (primary language). Within the AI ecosystem, proficient with both PyTorch and JAX, as well as libraries for scientific computing (NumPy, SciPy) and visualization (Matplotlib). Familiarity with C/C++, C#, R, JavaScript, and MATLAB.",
  behavioral: "Design and execution of calibrated psychophysics experiments using PsychoPy; experience with pre-registration frameworks such as the Open Science Framework (OSF) model.",
  reviewing: "Active reviewer for NeurIPS, ICLR, ICML, AAAI, GECCO, ALife, and TMLR. Experienced in academic speaking and public dissemination.",
  languages: "Native speaker of both English and Spanish."
};
