export interface Certification {
  id: string;
  name: string;
  authority: string;
  date: string;
  url: string;
  licenseNumber?: string;
  category: "ai" | "data" | "cloud" | "agile";
}

export const certificationsData: Certification[] = [
  {
    "id": "cert-01",
    "name": "Introduction to Python",
    "authority": "DataCamp",
    "date": "Sep 2020",
    "url": "https://drive.google.com/file/d/1I8JaS1x-hb9rhjARu9SlFBfjN8Iy57LV/view?usp=sharing",
    "licenseNumber": "#15679845",
    "category": "data"
  },
  {
    "id": "cert-02",
    "name": "Intermediate python",
    "authority": "DataCamp",
    "date": "Sep 2020",
    "url": "https://drive.google.com/file/d/188Ec9ewl8rxnDw4ziq3GVTXqs-GuFJLJ/view?usp=sharing",
    "licenseNumber": "#15801842",
    "category": "data"
  },
  {
    "id": "cert-03",
    "name": "Machine Learning For Everyone",
    "authority": "DataCamp",
    "date": "Sep 2020",
    "url": "https://drive.google.com/file/d/1pfuhdF-qdFDI743SVFb9JGWJoMOPjGyo/view?usp=sharing",
    "licenseNumber": "#15906461",
    "category": "ai"
  },
  {
    "id": "cert-04",
    "name": "Python Data Science Toolbox (Part 1)",
    "authority": "DataCamp",
    "date": "Sep 2020",
    "url": "https://drive.google.com/file/d/1vj3YpFoQTpdwXyfE76buPD3jK5y4WOIu/view?usp=sharing",
    "licenseNumber": "#16141647",
    "category": "data"
  },
  {
    "id": "cert-05",
    "name": "Scrum: The Basics",
    "authority": "LinkedIn",
    "date": "Dec 2020",
    "url": "https://www.linkedin.com/learning/certificates/878633270d43c007bd4c39c09b3294dfa41cb6be42d3bce7d688d48cf84ebdc6?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-06",
    "name": "Scrum: Advanced",
    "authority": "LinkedIn",
    "date": "Jan 2021",
    "url": "https://www.linkedin.com/learning/certificates/2f4469bed66db510ae3043a923e97149db7f0d18def093c47ae277d8e17f0585?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-07",
    "name": "Operational Excellence Foundations",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/11907478ee32ad1ac41ae427ba29ebbe885eb7d80cd116d04a01711d6ad40a84?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-08",
    "name": "Six Sigma Foundations",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/fce2251b8a5550512ad7621ef24ff608ba749ca4f523fa51bf58a330c6724249?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-09",
    "name": "Lean Six Sigma: Define and Measure Tools",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/1aa54073e878952c21ce2710be4f3f8735aa537e12e581743a00e2893412cc9e?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-10",
    "name": "Lean Six Sigma: Analyze, Improve, and Control Tools",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/482970c4caadcc7d615db027eec6e539252150a62a7e06f09bd0d9e57af6ca78?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-11",
    "name": "Operational Excellence Work-Out and Kaizen Facilitator",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/c801ac5d1a4e099de70f9b8ff928f17fa5447a5d238b0b85f766d7fd2e733132?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-12",
    "name": "Google Analytics for Beginners",
    "authority": "Google",
    "date": "May 2021",
    "url": "https://analytics.google.com/analytics/academy/certificate/wjfnrya9QBy1v39_aGM2ew",
    "licenseNumber": "",
    "category": "data"
  },
  {
    "id": "cert-13",
    "name": "Python Data Science Toolbox (Part 2)",
    "authority": "DataCamp",
    "date": "Oct 2020",
    "url": "https://drive.google.com/file/d/1lhFnKwbcaR_KdxwO8zCJfoBRsaa8abpy/view?usp=sharing",
    "licenseNumber": "#16,289,933",
    "category": "data"
  },
  {
    "id": "cert-14",
    "name": "Driving Measurable, Sustainable Change",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/2c55ee040896f9820d4e52f48c5a7db0ea1312db91f1daba80d2a2848a8857ea?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-15",
    "name": "Statistics Foundations: The Basics",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/5d175923e075c27cde9bfb02005ff0f4dbd45c8b76b37c853efc2bcd6df632aa?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "data"
  },
  {
    "id": "cert-16",
    "name": "Project Management Foundations",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/eafaf6f05f81d3137bebd1f876525c70623a619c28ad8013e9b414cbacdf30f1?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-17",
    "name": "Project Management Foundations: Teams",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/9d4196705c2d562fa3c941520a29a6036d9fec22c1c3cd647e9e1d88de0cab91?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-18",
    "name": "Become a Six Sigma Yellow Belt",
    "authority": "LinkedIn",
    "date": "May 2021",
    "url": "https://www.linkedin.com/learning/certificates/5b667b5d1191b81fc967afb5bed0e33281ced662b62c6cc0c5c61218b0703816?trk=backfilled_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-19",
    "name": "AWS Cloud Practitioner Essentials",
    "authority": "Amazon Web Services (AWS)",
    "date": "May 2021",
    "url": "https://drive.google.com/file/d/17KzRjSWT3BuQtvSDmUdlBnhFoCsTUFs5/view?usp=sharing",
    "licenseNumber": "",
    "category": "cloud"
  },
  {
    "id": "cert-20",
    "name": "AWS Cloud Computing",
    "authority": "Andhra Pradesh State Skill Development Corporation (APSSDC)",
    "date": "Jun 2021",
    "url": "https://drive.google.com/file/d/1hxbNHRmva7Nk2SEoNf8rZUCcGd-oAG3Z/view?usp=sharing",
    "licenseNumber": "AWS-OTB-803",
    "category": "cloud"
  },
  {
    "id": "cert-21",
    "name": "What Is Generative AI?",
    "authority": "LinkedIn",
    "date": "Apr 2025",
    "url": "https://www.linkedin.com/learning/certificates/1ef0b5cf2ffa0d08d0fe19fa3854e201eba939fc2765e44351248b3aad7fc0d9",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-22",
    "name": "Generative AI: The Evolution of Thoughtful Online Search",
    "authority": "LinkedIn",
    "date": "Apr 2025",
    "url": "https://www.linkedin.com/learning/certificates/3d07dc48ba7fd5ac484de94bdedcf3d4fd23ae6ba18871994a02c620f9bb35ac",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-23",
    "name": "Streamlining Your Work with Microsoft Copilot",
    "authority": "LinkedIn",
    "date": "Apr 2025",
    "url": "https://www.linkedin.com/learning/certificates/ffdab8345c1bfbb52212e135ee4afade31082f30bc824502d8f44d8dbb41d446",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-24",
    "name": "Learning Microsoft 365 Copilot and Business Chat",
    "authority": "LinkedIn",
    "date": "Apr 2025",
    "url": "https://www.linkedin.com/learning/certificates/c088e7df32c036dedb7be15a65453b23f8dabb114c591fe3423b43eb797f39e8",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-25",
    "name": "Ethics in the Age of Generative AI",
    "authority": "LinkedIn",
    "date": "Apr 2025",
    "url": "https://www.linkedin.com/learning/certificates/276b0e30eb41dbad63f099b803f8e096b2ed2eeee334ee9f7b1a9dfe244d42f3",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-26",
    "name": "Streamlining Your Work with Microsoft Copilot",
    "authority": "LinkedIn",
    "date": "Aug 2025",
    "url": "https://www.linkedin.com/learning/certificates/47b3ccc6cb581cacfd906e49ae94ba738a7d6a614f0ddea2c04d9b040b4e91da",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-27",
    "name": "Career Essentials in Generative AI by Microsoft and LinkedIn",
    "authority": "Microsoft",
    "date": "Dec 2025",
    "url": "https://www.linkedin.com/learning/certificates/74df231498166584f21e6d67acee4da9dd31e2554fcfa000fe651e5bd66e0614",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-28",
    "name": "Introduction to Artificial Intelligence",
    "authority": "LinkedIn",
    "date": "Dec 2025",
    "url": "https://www.linkedin.com/learning/certificates/1ca6752dd92d27210fa626b567104184315b4faf9c9533088b9c08364d10137e",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-29",
    "name": "Business Benefits Realization Foundations",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/0b9b9283ff0ba0e7f16141201cb1c55e894424b631757164c633767929d8472d",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-30",
    "name": "Business Analysis Foundations: Business Process Modeling",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/fffca1e1cf782a798085faab291544137fce6da75c9a5b5fba376154fce7a12a?trk=share_certificate",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-31",
    "name": "Modern Project Management in Microsoft 365",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/35cd4405d01d4fc35f4c60fde3aacdc5cf48ffa25f2cc6beb6766e46467d3b73",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-32",
    "name": "Managing Data with Microsoft 365",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/68b092299b5e636c09e08a0cbef4aa99f2453833fd8d8dd1ff3cbbd3e33d5026",
    "licenseNumber": "",
    "category": "data"
  },
  {
    "id": "cert-33",
    "name": "Business Analysis: Essential Tools and Techniques",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/3fb9f66117e0e06d26a10f8b510055ca4a8e04a5eb02cbee736121f5ad52b8e3",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-34",
    "name": "Introduction to Business Analysis",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/ed0438175cc04f3ada96cb6924432f960658ae38c2ac53a3d010fcf35d3fd7ad",
    "licenseNumber": "",
    "category": "agile"
  },
  {
    "id": "cert-35",
    "name": "Generative AI for Business Analysts",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/e90c6c19253bf53aa7f2bae00791359e7cd9f35dd3ac6f9453a77aa4b598560b",
    "licenseNumber": "",
    "category": "ai"
  },
  {
    "id": "cert-36",
    "name": "Agentic AI for Business Analysis",
    "authority": "LinkedIn",
    "date": "Aug 2026",
    "url": "https://www.linkedin.com/learning/certificates/36779c576aa977ae9647f9d325fa3748faa28c0fa7239a7956fe64703324b3a9",
    "licenseNumber": "",
    "category": "ai"
  }
];
