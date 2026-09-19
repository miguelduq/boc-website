import { BarChart3, Database, Layers, Radar, Workflow } from "lucide-react";

// Brand positioning — sourced from the BoC Q&A and LinkedIn strategy documents.
export const brand = {
  tagline: "Technology and data solutions designed to turn complexity into business performance.",
  positioning: "Birds On Cloud is a technology and data consulting company that helps organizations increase data maturity, automate complex processes and transform information into better business decisions.",
  location: "Rio de Janeiro, Brazil",
  since: "2021",
};

export const services = [
  {
    number: "01",
    title: "Data & Business Intelligence",
    description: "Integrate data from different sources and turn it into dashboards, analytics and reporting that leadership can act on.",
    items: ["Data integration", "Dashboards & analytics", "Executive reporting", "Decision support"],
    tools: ["Power BI", "DAX", "QuickSight"],
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Data Engineering & Governance",
    description: "Ingest, structure and govern information so every report and decision stands on a reliable foundation.",
    items: ["Ingestion & integration", "Data architecture", "Data quality", "Data governance"],
    tools: ["Microsoft Fabric", "Data Factory", "Airflow", "Fivetran"],
    icon: Database,
  },
  {
    number: "03",
    title: "Process Automation",
    description: "Remove repetitive manual work, from recurring reports to extensive presentations, reducing hours spent and human error.",
    items: ["Reporting automation", "Automated presentations", "Workflow automation"],
    tools: ["Power Automate", "Python", "VBA"],
    icon: Workflow,
  },
  {
    number: "04",
    title: "Market Intelligence",
    description: "Transform internal and external information into strategic intelligence that supports marketing and business decisions.",
    items: ["Market analysis", "Competitive intelligence", "Marketing intelligence"],
    tools: [],
    icon: Radar,
  },
  {
    number: "05",
    title: "End-to-End Technology Solutions",
    description: "Projects that combine multiple technologies and competencies to solve a complete business problem, from source systems to the final business-ready output.",
    items: ["Source-to-decision workflows", "Cloud-based data platforms", "Multidisciplinary delivery team"],
    tools: ["SAP", "Salesforce", "Azure", "AWS"],
    icon: Layers,
  },
];

// Real situations that make companies look for BoC (Q&A: questions 10 and 11).
export const painPoints = [
  "Teams spending hours consolidating reports manually.",
  "Different departments working with different versions of the same information.",
  "Repetitive processes consuming time that could be used for higher-value work.",
  "Data spread across multiple systems, platforms and spreadsheets.",
  "Business questions taking too long to answer.",
  "Technology teams facing more demand than their internal capacity can absorb.",
];

// Stack mentioned by the team for end-to-end projects (Q&A: questions 21 and 22).
export const dataJourney = [
  { step: "01", title: "Sources", copy: "We connect to the systems the business already runs on.", tools: ["SAP", "Salesforce", "FTP", "Databases", "Spreadsheets"] },
  { step: "02", title: "Ingestion & engineering", copy: "Information is collected, integrated and structured in the cloud.", tools: ["Data Factory", "Airflow", "Fivetran", "Microsoft Fabric", "AWS", "Azure"] },
  { step: "03", title: "Transformation & automation", copy: "Manual, repetitive steps become reliable, repeatable flows.", tools: ["Python", "SQL", "Power Automate", "VBA"] },
  { step: "04", title: "BI & analytics", copy: "Prepared data becomes dashboards, reports and indicators.", tools: ["Power BI", "DAX", "QuickSight"] },
  { step: "05", title: "Decision", copy: "Leadership receives consistent, business-ready information.", tools: ["Dashboards", "Reports", "Automated presentations"] },
];

// Why BoC — the space between large consultancies and individual freelancers (Q&A: questions 23 to 25).
export const differentiators = {
  specialists: {
    label: "Close to your business",
    items: [
      "Close, personalized service instead of a one-size-fits-all process.",
      "Specialization focused on business results, not only on tools.",
      "Operational efficiency, with competitive pricing as a result of a lean structure.",
    ],
  },
  company: {
    label: "Structured to deliver",
    items: [
      "Compliance, legal and operational security.",
      "Delivery guaranteed with quality and continuity, including easy replacement of professionals.",
      "Multidisciplinary support, not limited to the skills of a single consultant.",
    ],
  },
};

// Point of view — ideas the team defined for the brand.
export const beliefs = [
  { title: "Solution-first, not tool-first.", copy: "Technology comes after the problem. Every project starts with a business question." },
  { title: "Most companies don't lack data.", copy: "They lack data maturity: integrated sources, reliable processes and information that reaches decision-makers." },
  { title: "Automation removes unnecessary work.", copy: "It is not about replacing people. It is about giving teams time for analysis instead of preparation." },
  { title: "A bad process automated is just faster.", copy: "That is why we understand and structure the process before we automate it." },
];

export const startingQuestions = [
  "Where is time being lost?",
  "Where are manual processes creating unnecessary effort?",
  "Where is fragmented information making decisions harder?",
  "Where could data create more value?",
];

// Areas where the team has already automated processes (Q&A: question 12).
export const automationAreas = ["Marketing", "Commercial", "Operations", "Logistics", "Energy", "Salesforce", "Manufacturing", "IT", "Software factory"];

export const whoFeelsThePain = [
  "The analyst losing hours building reports.",
  "The manager without consolidated data.",
  "The director waiting for a manual closing.",
  "The finance team working in spreadsheets.",
];

export const values = [
  { number: "01", title: "Customer Success", description: "Our customers' goals drive everything we do. We build trusted partnerships and deliver solutions that create measurable impact." },
  { number: "02", title: "Innovation", description: "We embrace curiosity, continuous learning, and emerging technologies to solve complex challenges with creativity and efficiency." },
  { number: "03", title: "Excellence", description: "We are committed to delivering high-quality solutions with precision, reliability, and attention to detail." },
  { number: "04", title: "Integrity", description: "We act with honesty, transparency, and accountability in every relationship and every decision." },
  { number: "05", title: "Collaboration", description: "We believe the best outcomes come from teamwork, open communication, and shared knowledge across people and organizations." },
  { number: "06", title: "Agility", description: "We adapt quickly to change, embracing flexibility and continuous improvement to meet evolving business needs." },
  { number: "07", title: "Sustainability", description: "We develop technology with a long-term perspective, creating solutions that support responsible growth for our clients, our people, and our communities." },
];

export const statistics = [
  { value: "5+", label: "Years of experience" },
  { value: "0+", label: "Projects delivered" },
  { value: "0+", label: "Clients served" },
];

export const contacts = {
  email: "contact@birdsoncloud.com",
  linkedin: "https://www.linkedin.com/company/birds-on-cloud/",
  instagram: "https://www.instagram.com/birdsoncloud/",
};
