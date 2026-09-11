import { BarChart3, Cloud, GraduationCap, Radar, Workflow } from "lucide-react";

export const services = [
  {
    number: "01",
    title: "Market Intelligence",
    description: "Turn market data into clear insights that support strategic decisions and help businesses better understand their competitive landscape.",
    items: ["Market Analysis", "Strategic Insights", "Competitive Intelligence"],
    icon: Radar,
  },
  {
    number: "02",
    title: "Power BI",
    description: "Transform complex data into interactive dashboards and clear performance indicators that make business information easier to understand and act on.",
    items: ["Interactive Dashboards", "KPI Tracking", "Data Visualization", "Executive Reporting"],
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Process Automation",
    description: "Automate repetitive workflows and optimize business processes to improve productivity, reduce manual effort, and increase operational efficiency.",
    items: ["Workflow Automation", "Productivity Enhancement", "Process Optimization"],
    icon: Workflow,
  },
  {
    number: "04",
    title: "Cloud Computing",
    description: "Leverage cloud technologies to build scalable, efficient, and reliable solutions that support modern business operations and digital growth.",
    items: ["Cloud Solutions", "Infrastructure Optimization", "Cloud Adoption Support"],
    icon: Cloud,
  },
  {
    number: "05",
    title: "Technology Training",
    description: "Develop practical technology skills that help teams work more effectively with modern tools, data, and digital solutions.",
    items: [],
    icon: GraduationCap,
  },
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
  { value: "5+", label: "Anos de experiência" },
  { value: "0+", label: "Projetos entregues" },
  { value: "0+", label: "Clientes atendidos" },
];

export const contacts = {
  email: "contact@birdsoncloud.com",
  linkedin: "https://www.linkedin.com/company/birds-on-cloud/",
  instagram: "https://www.instagram.com/birdsoncloud/",
};
