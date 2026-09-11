const assetBase = "/projects/end-to-end-data-automation";

export const projects = [
  {
    slug: "end-to-end-data-automation",
    title: "End-to-End Data Automation",
    category: "Project / Case Study",
    discipline: "Data & Business Intelligence",
    description: "From raw data to automated, decision-ready presentations.",
    featured: true,
    images: {
      cover: {
        src: "",
        targetPath: assetBase + "/cover.webp",
        alt: "Overview of the end-to-end data automation project",
        placeholder: "Project cover — temporary image",
        ratio: "16 / 9",
      },
      workflow: {
        src: "",
        targetPath: assetBase + "/workflow.webp",
        alt: "Anonymized end-to-end project workflow",
        placeholder: "Anonymized workflow diagram — temporary image",
        ratio: "16 / 9",
      },
      solution: {
        src: "",
        targetPath: assetBase + "/solution.webp",
        alt: "Business-ready output from the automated workflow",
        placeholder: "Project output — temporary image",
        ratio: "4 / 3",
      },
    },
    context: {
      title: "A complete workflow, not only a dashboard.",
      copy: "This case demonstrates how BoC can structure the flow from data sources to business consumption, connecting preparation, Business Intelligence, automation and presentation in one coherent process.",
      capabilityNote: "BoC can work across varied data environments. The examples below represent broader capabilities and do not imply that every source was used in this project.",
      capabilitySources: ["Salesforce", "SAP", "EFS", "Excel", "APIs", "Databases", "Structured data", "Unstructured data", "Different DBMS platforms"],
    },
    challenge: {
      title: "A manual, file-dependent process.",
      copy: "The responsible person had to locate, curate, prepare and transform information before moving it into Power BI and manually creating the final presentation. Several repetitive steps could extend the process across multiple days and increased the risk of human error.",
    },
    before: [
      "Different sources",
      "Manual data curation",
      "Manual preparation",
      "Power BI",
      "Manual presentation",
    ],
    solution: {
      title: "A structured path from source to presentation.",
      copy: "The solution standardized the workflow so data could be ingested, transformed and structured before reaching BI. Information from Power BI could then be used in an automated flow to generate a consistent PowerPoint presentation.",
    },
    after: [
      "Data sources",
      "Data ingestion",
      "Data transformation",
      "Structured database",
      "Power BI",
      "Automation",
      "PowerPoint",
    ],
    workflow: [
      { title: "Data sources", copy: "Information enters from the available business environment." },
      { title: "Ingestion", copy: "Data is collected through a repeatable entry layer." },
      { title: "Transformation", copy: "Information is curated and prepared before business consumption." },
      { title: "Database", copy: "Structured data reduces direct dependence on spreadsheets." },
      { title: "Power BI", copy: "The prepared information supports analysis and reporting." },
      { title: "Automation", copy: "Repetitive steps between BI and the final output are orchestrated." },
      { title: "PowerPoint", copy: "The flow produces a standardized, business-ready presentation." },
    ],
    benefits: [
      "Reduced manual work",
      "Greater process standardization",
      "Reduced risk of human error",
      "Better data governance",
      "Greater information consistency",
      "Structured data instead of direct spreadsheet dependence",
      "Standardized final presentation",
      "Automated flow between data, BI and presentation",
      "Greater operational efficiency",
    ],
    conclusion: "The project shows how BoC can connect data engineering, Business Intelligence and automation to transform a fragmented manual routine into a structured business workflow.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
