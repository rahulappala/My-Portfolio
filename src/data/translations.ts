export type Language = "en" | "de";

export interface Translations {
  nav: {
    about: string;
    career: string;
    work: string;
    skills: string;
    contact: string;
    toggleLabel: string;
    currentLang: string;
  };
  landing: {
    hello: string;
    name: string;
    surname: string;
    role: string;
    title1: string;
    title2: string;
    title3: string;
  };
  about: {
    title: string;
    tag: string;
    location: string;
    para: string;
    badges: {
      location: string;
      languages: string;
      education: string;
      dashboards: string;
      releases: string;
    };
  };
  whatIDo: {
    title1: string;
    title2: string;
    skillset: string;
    paas: {
      title: string;
      subtitle: string;
      desc: string;
    };
    bi: {
      title: string;
      subtitle: string;
      desc: string;
    };
  };
  career: {
    title1: string;
    title2: string;
    roles: Array<{
      title: string;
      company: string;
      period: string;
      desc: string;
    }>;
  };
  work: {
    title1: string;
    title2: string;
    toolsHeading: string;
    projects: Array<{
      number: string;
      title: string;
      category: string;
      tools: string;
      desc: string;
    }>;
  };
  techStack: {
    title: string;
    subtitle: string;
    domains: Array<{
      title: string;
      subtitle: string;
      desc: string;
      tags: string[];
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    letsConnect: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    profilesLabel: string;
    xingLabel: string;
    footerText: string;
  };
  social: {
    resume: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "ABOUT",
      career: "CAREER",
      work: "WORK",
      skills: "SKILLS",
      contact: "CONTACT",
      toggleLabel: "DE",
      currentLang: "EN",
    },
    landing: {
      hello: "Hello! I'm",
      name: "RAHUL",
      surname: "APPALA",
      role: "Senior Data Specialist",
      title1: "TECHNICAL",
      title2: "IMPLEMENTATION",
      title3: "& BI ARCHITECT",
    },
    about: {
      title: "About Me",
      tag: "Senior Data Specialist • BI Architect",
      location: "Grevenbroich, Germany • Passcon GmbH",
      para: "Technical implementation professional with hands-on responsibility for requirements analysis, platform configuration, and coordinating client-specific platform changes through production Go-Live. Translates business needs into technical specifications, evaluates configuration options and change requests, and aligns cross-functional teams across internally developed PaaS workflow platforms, project tracking, and enterprise data analytics.",
      badges: {
        location: "📍 Grevenbroich, Germany (Open to Relocation)",
        languages: "🌐 German: C1 | English: C1",
        education: "🎓 M.Sc. Computational Mechanics (Uni Duisburg-Essen)",
        dashboards: "🚀 250+ Power BI Dashboards | >90% Faster Variance Analysis",
        releases: "📋 PaaS Platform Releases across 6 Client Projects",
      },
    },
    whatIDo: {
      title1: "W",
      title2: "HAT I DO",
      skillset: "Skillset & tools",
      paas: {
        title: "IMPLEMENTATION & PAAS",
        subtitle: "Delivery & Platform Configuration",
        desc: "Translating business needs into technical specifications and maintaining master requirements in Confluence. Configuring platform roles, permissions, workflows, and customer-specific release environments across multi-client PaaS ecosystems with comprehensive Go-Live and post-production coordination.",
      },
      bi: {
        title: "DATA & BI ARCHITECTURE",
        subtitle: "Analytics & Process Automation",
        desc: "End-to-end design of scalable enterprise BI solutions, relational data modeling, and reporting automation via SQL, Python, and DAX. Experienced in orchestrating complex data landscapes and building 250+ interactive Power BI dashboards that accelerate variance analysis by over 90%.",
      },
    },
    career: {
      title1: "My career &",
      title2: "experience",
      roles: [
        {
          title: "Technical Implementation Consultant",
          company: "Passcon GmbH (AML RightSource) • Frankfurt am Main",
          period: "2025–26",
          desc: "Owned client-specific platform implementations, translating business needs into technical requirements and master documentation in Confluence. Configured platform roles, permissions, workflows, and environments across six projects (four in post-production and two in implementation). Authored release notes, manual test scenarios, and readiness checklists, coordinating defect resolution and Go-Live follow-up.",
        },
        {
          title: "Client Operations Coordinator",
          company: "Passcon GmbH (AML RightSource) • Frankfurt am Main",
          period: "2024–25",
          desc: "Coordinated day-to-day operations for an eight-person team, distributing tasks and aligning priorities across stakeholders. Managed delivery tracking and reporting tools across more than 15 projects, driving internal process standardisation, KPI maintenance, and business development support.",
        },
        {
          title: "IT Consultant",
          company: "Passcon GmbH (AML RightSource) • Frankfurt am Main",
          period: "2022–24",
          desc: "Developed over 250 Power BI dashboards for forecasting, budget-vs-actual reporting, and KPI monitoring; accelerated variance analysis by more than 90% through automated reporting workflows. Conducted AML/KYC transaction reviews, produced structured assessments, and led knowledge-sharing workshops.",
        },
        {
          title: "Technical Consultant",
          company: "SBES Technologies UG • Cologne",
          period: "2021",
          desc: "Analysed technical requirements, defined solution architectures, and supported enterprise customers in implementing suitable software solutions.",
        },
        {
          title: "CAE Analyst",
          company: "Numericx Engineering Services Pvt. Ltd.",
          period: "2020–21",
          desc: "Performed computational mechanics analysis, numerical simulation, and engineering evaluations to validate technical design performance and integrity.",
        },
        {
          title: "Engineering Trainee",
          company: "Neva Impex Pvt. Ltd.",
          period: "2013–14",
          desc: "Coordinated technical workflows, product development, component verification, and handover to assembly according to customer specifications.",
        },
      ],
    },
    work: {
      title1: "Featured",
      title2: "Projects",
      toolsHeading: "Tools & Highlights",
      projects: [
        {
          number: "01",
          title: "Enterprise PaaS Platform Implementation",
          category: "Platform Implementation & Go-Live",
          tools: "Confluence, Jira, PaaS Workflows, UAT, Release Notes",
          desc: "Configured roles, permissions, and workflows across six client projects (4 in post-production, 2 in implementation) through successful production Go-Live.",
        },
        {
          number: "02",
          title: "Enterprise BI & Variance Analytics Engine",
          category: "Business Intelligence & Data Architecture",
          tools: "Power BI, DAX, Power Query, SQL, Python, Git",
          desc: "Built 250+ interactive Power BI dashboards for budget-vs-actual forecasting and KPI monitoring, accelerating variance analysis by over 90%.",
        },
        {
          number: "03",
          title: "Multi-Source ETL Pipeline & Data Warehouse",
          category: "Data Engineering & Pipeline Automation",
          tools: "SQL, Python, PostgreSQL, REST APIs, Automation",
          desc: "Engineered automated data ingestion and transformation pipelines, harmonising fragmented operational data into unified relational warehouses.",
        },
        {
          number: "04",
          title: "Client Operations Tracking & Portfolio Governance",
          category: "Agile Project Delivery & Governance",
          tools: "Jira Service Management, Confluence, KPIs, MS Project",
          desc: "Standardised cross-functional delivery tracking across 15+ concurrent projects, establishing SLA controls and structured executive reporting.",
        },
        {
          number: "05",
          title: "Financial Crime & AML Transaction Intelligence",
          category: "Risk Analytics & Compliance Engineering",
          tools: "SQL Analytics, Pattern Recognition, Compliance Workflows",
          desc: "Designed detection models and compliance verification workflows for suspicious transaction activity across large-scale financial records.",
        },
        {
          number: "06",
          title: "Predictive Analytics & Computational Engineering",
          category: "Machine Learning & Numerical Computing",
          tools: "Python (NumPy, SciPy, Pandas), Scikit-Learn, Statistics",
          desc: "Applied numerical methods and computational models to complex operational datasets, delivering actionable forecasting and data-driven insights.",
        },
      ],
    },
    techStack: {
      title: "Technical Skills",
      subtitle: "Core competencies, architectures, and platforms I work with",
      domains: [
        {
          title: "PaaS & Technical Implementation",
          subtitle: "Enterprise Delivery & Platform Configuration",
          desc: "Specialized in mapping business processes to technical configurations, managing UAT cycles, authoring release documentation, and steering production rollouts across multi-tenant PaaS ecosystems.",
          tags: ["PaaS Configuration", "Confluence", "Jira", "Jira Service Management", "UAT Scenarios", "Release Notes", "Change Control", "Go-Live Readiness"],
        },
        {
          title: "Business Intelligence & Data Modeling",
          subtitle: "Enterprise Reporting & Executive Dashboards",
          desc: "Designed and maintained 250+ enterprise dashboards with advanced DAX calculations, star-schema data modeling, incremental refresh, and row-level security (RLS).",
          tags: ["Power BI", "DAX", "Power Query (M)", "Data Modeling", "Star Schema", "Variance Analysis", "KPI Dashboards", "RLS Security"],
        },
        {
          title: "Data Engineering & Databases",
          subtitle: "Relational Modeling, Query Optimization & ETL",
          desc: "Architecting efficient database schemas, writing complex analytical SQL queries, indexing, and designing automated data pipelines across enterprise DBMS.",
          tags: ["SQL (PostgreSQL / MSSQL)", "Relational Schemas", "Query Optimization", "Window Functions", "ETL / ELT", "Database Indexing", "Data Cleansing"],
        },
        {
          title: "Scripting & Process Automation",
          subtitle: "Python Pipelines & Workflow Automation",
          desc: "Developing Python scripts for automated data extraction, API integrations, data transformation pipelines, and scheduled reporting tasks.",
          tags: ["Python", "Pandas / NumPy", "REST APIs", "Power Automate", "JSON / XML", "Bash / Automation", "Cron Scheduling"],
        },
        {
          title: "Project Governance & Agile Tools",
          subtitle: "Operations Coordination & Cross-Functional Alignment",
          desc: "Driving agile project delivery, backlog prioritization, stakeholder management, requirement matrices, and SLA tracking across multi-team client portfolios.",
          tags: ["Agile / Scrum", "Confluence Master Specs", "Jira Backlog Grooming", "MS Project", "Stakeholder Alignment", "Resource Allocation", "SLA Monitoring"],
        },
        {
          title: "Computational Analysis & Engineering",
          subtitle: "Numerical Modeling, Simulation & Problem Solving",
          desc: "Strong academic foundation from M.Sc. in Computational Mechanics applying mathematical analysis, simulation models, and algorithmic problem-solving to technical systems.",
          tags: ["Numerical Analysis", "Computational Mechanics", "Finite Element Methods", "Data Simulation", "Statistical Testing", "Algorithm Design"],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's build scalable platforms and intelligent data architectures together.",
      letsConnect: "Let's Connect",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Grevenbroich, Germany (Open to Relocation)",
      profilesLabel: "Profiles",
      xingLabel: "XING Profile",
      footerText: "© 2026 Rahul Appala. All rights reserved.",
    },
    social: {
      resume: "RESUME",
    },
  },
  de: {
    nav: {
      about: "ÜBER MICH",
      career: "WERDEGANG",
      work: "PROJEKTE",
      skills: "KOMPETENZEN",
      contact: "KONTAKT",
      toggleLabel: "EN",
      currentLang: "DE",
    },
    landing: {
      hello: "Hallo! Ich bin",
      name: "RAHUL",
      surname: "APPALA",
      role: "Senior Data Specialist",
      title1: "TECHNISCHE",
      title2: "IMPLEMENTIERUNG",
      title3: "& BI-ARCHITEKT",
    },
    about: {
      title: "Über Mich",
      tag: "Senior Data Specialist • BI-Architekt",
      location: "Grevenbroich, Deutschland • Passcon GmbH",
      para: "Experte für technische Implementierung mit direkter Verantwortung für Anforderungsanalysen, Plattformkonfiguration und die Koordination kundenspezifischer Plattformanpassungen bis zum produktiven Go-Live. Übersetzt Geschäftsanforderungen in präzise technische Spezifikationen, evaluiert Konfigurationsoptionen sowie Change Requests und steuert cross-funktionale Teams für intern entwickelte PaaS-Workflow-Plattformen, Projektsteuerung und Enterprise Data Analytics.",
      badges: {
        location: "📍 Grevenbroich, Deutschland (Umzugsbereit)",
        languages: "🌐 Deutsch: C1 | Englisch: C1",
        education: "🎓 M.Sc. Computational Mechanics (Uni Duisburg-Essen)",
        dashboards: "🚀 250+ Power BI Dashboards | >90% schnellere Varianzanalyse",
        releases: "📋 PaaS-Plattform-Releases über 6 Kundenprojekte",
      },
    },
    whatIDo: {
      title1: "M",
      title2: "EINE SCHWERPUNKTE",
      skillset: "Kompetenzen & Werkzeuge",
      paas: {
        title: "IMPLEMENTIERUNG & PAAS",
        subtitle: "Delivery & Plattformkonfiguration",
        desc: "Übersetzung geschäftlicher Anforderungen in technische Spezifikationen und Pflege der Master-Dokumentation in Confluence. Konfiguration von Rollen, Berechtigungen, Workflows und mandantenspezifischen Release-Umgebungen in PaaS-Ökosystemen inklusive umfassender Go-Live- und Post-Production-Betreuung.",
      },
      bi: {
        title: "DATEN- & BI-ARCHITEKTUR",
        subtitle: "Analytics & Prozessautomatisierung",
        desc: "Ganzheitliche Konzeption skalierbarer Enterprise-BI-Lösungen, relationale Datenmodellierung und automatisierte Berichterstattung mittels SQL, Python und DAX. Erfahren in der Orchestrierung komplexer Datenlandschaften und dem Aufbau von über 250 interaktiven Power BI Dashboards mit mehr als 90 % Zeitersparnis bei Varianzanalysen.",
      },
    },
    career: {
      title1: "Mein Werdegang &",
      title2: "Erfahrung",
      roles: [
        {
          title: "Technical Implementation Consultant",
          company: "Passcon GmbH (AML RightSource) • Frankfurt am Main",
          period: "2025–26",
          desc: "Leitung kundenspezifischer Plattformimplementierungen; Übersetzung von Geschäftsanforderungen in technische Spezifikationen und Master-Dokumentationen in Confluence. Konfiguration von Plattformrollen, Berechtigungen, Workflows und Umgebungen für sechs Kundenprojekte (vier im Produktivbetrieb, zwei in der Implementierung). Erstellung von Release Notes, Testfallszenarien und Go-Live-Checklisten sowie Koordination des Defect-Managements.",
        },
        {
          title: "Client Operations Coordinator",
          company: "Passcon GmbH (AML RightSource) • Frankfurt am Main",
          period: "2024–25",
          desc: "Koordination des operativen Tagesgeschäfts eines achtköpfigen Teams, Aufgabenverteilung und Abstimmung strategischer Prioritäten mit Stakeholdern. Verwaltung von Tracking- und Reporting-Systemen über mehr als 15 Projekte hinweg, Etablierung interner Standardisierungen und KPI-Pflege.",
        },
        {
          title: "IT Consultant",
          company: "Passcon GmbH (AML RightSource) • Frankfurt am Main",
          period: "2022–24",
          desc: "Entwicklung von über 250 Power BI Dashboards für Prognosen, Soll-Ist-Vergleiche und KPI-Monitoring; Beschleunigung von Varianzanalysen um über 90 % durch automatisierte Workflows. Durchführung von AML/KYC-Transaktionsanalysen, Erstellung strukturierter Risikobewertungen und Leitung interner Schulungsworkshops.",
        },
        {
          title: "Technical Consultant",
          company: "SBES Technologies UG • Köln",
          period: "2021",
          desc: "Analyse technischer Anforderungen, Konzeption von Lösungsarchitekturen und Unterstützung von Unternehmenskunden bei der Einführung passgenauer Softwarelösungen.",
        },
        {
          title: "CAE Analyst",
          company: "Numericx Engineering Services Pvt. Ltd.",
          period: "2020–21",
          desc: "Durchführung numerischer Simulationen und strukturmechanischer Analysen zur Validierung technischer Designleistungen und Strukturintegritäten.",
        },
        {
          title: "Engineering Trainee",
          company: "Neva Impex Pvt. Ltd.",
          period: "2013–14",
          desc: "Koordination technischer Arbeitsabläufe, Produktentwicklung, Bauteilprüfung und termingerechte Übergabe an die Fertigung gemäß Kundenspezifikationen.",
        },
      ],
    },
    work: {
      title1: "Ausgewählte",
      title2: "Projekte",
      toolsHeading: "Tools & Highlights",
      projects: [
        {
          number: "01",
          title: "Enterprise PaaS-Plattformimplementierung",
          category: "Plattform-Implementierung & Go-Live",
          tools: "Confluence, Jira, PaaS-Workflows, UAT, Release Notes",
          desc: "Konfiguration von Rollen, Berechtigungen und Workflows über sechs Kundenprojekte hinweg (4 im Produktivbetrieb, 2 in Implementierung) bis zum erfolgreichen Go-Live.",
        },
        {
          number: "02",
          title: "Enterprise BI- & Varianzanalyse-Engine",
          category: "Business Intelligence & Datenarchitektur",
          tools: "Power BI, DAX, Power Query, SQL, Python, Git",
          desc: "Aufbau von über 250 interaktiven Power BI Dashboards für Soll-Ist-Prognosen und KPI-Monitoring mit über 90 % Zeitersparnis bei Varianzanalysen.",
        },
        {
          number: "03",
          title: "Multi-Source ETL-Pipeline & Data Warehouse",
          category: "Data Engineering & Pipeline-Automatisierung",
          tools: "SQL, Python, PostgreSQL, REST-APIs, Automatisierung",
          desc: "Entwicklung automatisierter Datenpipelines zur Harmonisierung heterogener operativer Datenquellen in ein einheitliches relationales Data Warehouse.",
        },
        {
          number: "04",
          title: "Client Operations Tracking & Governance",
          category: "Agile Projektsteuerung & Portfoliomanagement",
          tools: "Jira Service Management, Confluence, KPIs, MS Project",
          desc: "Standardisierung des lieferungsbezogenen Trackings über mehr als 15 parallele Projekte hinweg mit SLA-Steuerung und Führungs-Reporting.",
        },
        {
          number: "05",
          title: "AML-Transaktionsanalyse & Risikodetektion",
          category: "Risk Analytics & Compliance Engineering",
          tools: "SQL Analytics, Mustererkennung, Compliance-Workflows",
          desc: "Konzeption von Erkennungsmodellen und Prüfprozessen zur Identifizierung auffälliger Transaktionsmuster in umfangreichen Finanzdatenbeständen.",
        },
        {
          number: "06",
          title: "Prädiktive Analytik & Computational Engineering",
          category: "Machine Learning & Numerische Berechnung",
          tools: "Python (NumPy, SciPy, Pandas), Scikit-Learn, Statistik",
          desc: "Anwendung numerischer Modelle und mathematischer Algorithmen auf komplexe operative Datensätze zur Generierung datengestützter Prognosen.",
        },
      ],
    },
    techStack: {
      title: "Technische Kompetenzen",
      subtitle: "Kernbereiche, Architekturen und Technologien in meiner Praxis",
      domains: [
        {
          title: "PaaS & Technische Implementierung",
          subtitle: "Enterprise Delivery & Plattformkonfiguration",
          desc: "Spezialisiert auf die Übersetzung fachlicher Prozesse in technische Systemkonfigurationen, Steuerung von UAT-Zyklen, Erstellung von Release-Dokumentationen und Begleitung von Produktivstarts in mandantenfähigen PaaS-Umgebungen.",
          tags: ["PaaS-Konfiguration", "Confluence", "Jira", "Jira Service Management", "UAT-Szenarien", "Release Notes", "Change Control", "Go-Live Readiness"],
        },
        {
          title: "Business Intelligence & Datenmodellierung",
          subtitle: "Enterprise-Reporting & Führungs-Dashboards",
          desc: "Entwicklung und Betreuung von über 250 Enterprise-Dashboards mit komplexen DAX-Measures, Sternschema-Datenmodellen, inkrementeller Aktualisierung und Row-Level Security (RLS).",
          tags: ["Power BI", "DAX", "Power Query (M)", "Datenmodellierung", "Star Schema", "Varianzanalyse", "KPI Dashboards", "RLS Security"],
        },
        {
          title: "Data Engineering & Datenbanken",
          subtitle: "Relationale Modellierung, Abfrageoptimierung & ETL",
          desc: "Konzeption effizienter Datenbankschemata, Erstellung komplexer analytischer SQL-Abfragen, Indexierung und Aufbau automatisierter ETL/ELT-Pipelines.",
          tags: ["SQL (PostgreSQL / MSSQL)", "Relationale Schemata", "Abfrageoptimierung", "Window Functions", "ETL / ELT", "Indexierung", "Datenbereinigung"],
        },
        {
          title: "Skripting & Prozessautomatisierung",
          subtitle: "Python-Pipelines & Workflow-Automatisierung",
          desc: "Erstellung von Python-Skripten für Datenextraktion, REST-API-Integrationen, Transformationspipelines und zeitgesteuerte Auswertungen.",
          tags: ["Python", "Pandas / NumPy", "REST-APIs", "Power Automate", "JSON / XML", "Bash / Automatisierung", "Cron Scheduling"],
        },
        {
          title: "Projektsteuerung & Agile Tools",
          subtitle: "Operations-Koordination & Stakeholder-Alignment",
          desc: "Agile Projektumsetzung, Backlog-Priorisierung, Stakeholder-Kommunikation, Anforderungsmatrizen und SLA-Überwachung in Multi-Client-Portfolios.",
          tags: ["Agile / Scrum", "Confluence Master Specs", "Jira Backlog Grooming", "MS Project", "Stakeholder Alignment", "Ressourcenplanung", "SLA Monitoring"],
        },
        {
          title: "Numerische Berechnung & Engineering",
          subtitle: "Mathematische Modelle, Simulation & Problemlösung",
          desc: "Fundierte akademische Basis durch den M.Sc. in Computational Mechanics für mathematische Modellierung, algorithmische Datenanalyse und komplexe Simulationen.",
          tags: ["Numerische Mechanik", "Computational Mechanics", "Finite-Elemente-Methode", "Datensimulation", "Statistische Tests", "Algorithmenentwurf"],
        },
      ],
    },
    contact: {
      title: "Kontakt Aufnehmen",
      subtitle: "Lassen Sie uns gemeinsam skalierbare Plattformen und moderne Datenarchitekturen aufbauen.",
      letsConnect: "Vernetzen wir uns",
      phoneLabel: "Telefon",
      locationLabel: "Standort",
      locationValue: "Grevenbroich, Deutschland (Umzugsbereit)",
      profilesLabel: "Profile",
      xingLabel: "XING Profil",
      footerText: "© 2026 Rahul Appala. Alle Rechte vorbehalten.",
    },
    social: {
      resume: "LEBENSLAUF",
    },
  },
};

