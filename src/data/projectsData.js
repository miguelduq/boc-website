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
        src: assetBase + "/cover.webp",
        targetPath: assetBase + "/cover.webp",
        alt: "Automated campaign reporting: data extracted from databases, spreadsheets and platforms, validated in a dashboard and turned into a finished presentation, from about 3 hours of manual work to about 10 minutes",
        placeholder: "Project cover — temporary image",
        ratio: "16 / 9",
      },
      workflow: {
        src: assetBase + "/workflow.webp",
        targetPath: assetBase + "/workflow.webp",
        alt: "Workflow with mock data: campaign platforms, cloud storage and data warehouse feed an automation flow that is triggered from the project board, fills a BI dashboard and a presentation template, and posts the link back to the board",
        placeholder: "Anonymized workflow diagram — temporary image",
        ratio: "16 / 9",
      },
      solution: {
        src: assetBase + "/solution.webp",
        targetPath: assetBase + "/solution.webp",
        alt: "A campaign recap is requested on the project board at 09:02 and the finished presentation for Veridia Group, a fictional company, is ready at 09:12 with no manual steps",
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
    workflowLegend: {
      title: "What can power each step",
      intro: "The diagram uses generic names on purpose. Each step can run on different tools, so you can map this flow to the stack your company already uses.",
      items: [
        { step: "1", name: "Campaign platforms", role: "Where campaign results are generated and exported", tools: ["Captiv8", "Influential", "CreatorIQ", "Meta Ads Manager", "Google Ads"] },
        { step: "2", name: "Cloud storage", role: "Receives the raw exports", tools: ["AWS S3", "Azure Blob Storage", "Google Cloud Storage", "SFTP"] },
        { step: "3", name: "Data warehouse", role: "Keeps validated, centralized data", tools: ["ClickHouse", "Microsoft Fabric", "Snowflake", "BigQuery", "Amazon Redshift"] },
        { step: "4", name: "Project board", role: "Where the team requests the recap", tools: ["Monday.com", "Jira", "Asana", "Microsoft Planner"] },
        { step: "5", name: "Automation flow", role: "Runs every step after the request", tools: ["Power Automate", "Azure Data Factory", "Apache Airflow", "Python"] },
        { step: "6", name: "BI dashboard", role: "Filters the data for the requested campaign", tools: ["Power BI", "Amazon QuickSight", "Tableau", "Looker Studio"] },
        { step: "7", name: "Presentation", role: "Company template filled automatically", tools: ["PowerPoint Online", "PowerPoint Desktop", "Google Slides"] },
        { step: "8", name: "Project board", role: "Receives the link to the finished deck, or it goes to another channel", tools: ["Monday.com", "Microsoft Teams", "Slack", "Email"] },
      ],
    },
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
