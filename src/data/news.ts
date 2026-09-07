export interface NewsItem {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  category: 'AI & Automation' | 'M&A' | 'Regulatory' | 'Standards' | 'Product Launch';
  badge?: string;
  source: string;
  summary: string;
  link: string;
  linkText?: string;
  featured?: boolean;
}

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'veeva-vault-mcp',
    title: 'Veeva Releases Native Vault MCP Server & AI Agents in GA 26R2',
    date: 'August 2026',
    isoDate: '2026-08-18',
    category: 'AI & Automation',
    badge: 'Protocol Breakthrough',
    source: 'Veeva Systems',
    summary: 'Veeva Systems has made its Vault Model Context Protocol (MCP) Server and autonomous Veeva AI Agents generally available in the 26R2 release. Regulated biopharmas can now connect external AI agents directly to Vault Validation Management and QualityDocs with complete 21 CFR Part 11 audit trails.',
    link: '/ai-trends',
    linkText: 'Read Architectural Analysis',
    featured: true,
  },
  {
    id: 'kneat-thoma-bravo',
    title: 'Thoma Bravo Finalizes Definitive Acquisition of Kneat Gx',
    date: 'June 2026',
    isoDate: '2026-06-12',
    category: 'M&A',
    badge: 'Enterprise PE Buyout',
    source: 'Thoma Bravo & Kneat Inc.',
    summary: 'Private equity giant Thoma Bravo takes Kneat Inc. (formerly TSE:KSI) private. Kneat Gx, trusted by 8 of the top 10 global biopharmas, accelerates its enterprise AI roadmap and rollout of its "Five Pillars of AI Governance" framework.',
    link: '/ai-trends',
    linkText: 'Read M&A Breakdown',
    featured: false,
  },
  {
    id: 'valgenesis-val-launch',
    title: 'ValGenesis Debuts VAL™ Autonomous Validation Agent at INTERPHEX 2026',
    date: 'April 14, 2026',
    isoDate: '2026-04-14',
    category: 'Product Launch',
    badge: 'First Validation Agent',
    source: 'INTERPHEX NYC',
    summary: 'ValGenesis launched VAL™, the first purpose-built autonomous AI agent for life sciences validation. VAL™ automates IQ/OQ/PQ protocol generation, requirement-to-test trace matrices, and pre-QA test execution evidence analysis.',
    link: '/ai-trends',
    linkText: 'Explore Agent Features',
    featured: false,
  },
  {
    id: 'saram-ai-readiness-tracker',
    title: 'Saram Releases 2026 CSV AI Readiness & Walled Garden Benchmark',
    date: 'September 2026',
    isoDate: '2026-09-01',
    category: 'AI & Automation',
    badge: 'New Benchmark',
    source: 'Saram Consulting',
    summary: 'A first-of-its-kind benchmark assessing 20+ CSV/CSA vendors on Anthropic Model Context Protocol (MCP) support, REST/GraphQL API openness, Part 11 agent audit logging, and data portability.',
    link: '/ai-readiness-tracker',
    linkText: 'View 20+ Vendor Scores',
    featured: false,
  },
  {
    id: 'fda-csa-ai-clarification',
    title: 'FDA Reaffirms Risk-Based Automated & AI Testing under CSA Guidance',
    date: 'March 2026',
    isoDate: '2026-03-22',
    category: 'Regulatory',
    badge: 'FDA Guidance',
    source: 'FDA CDER / CDRH',
    summary: 'The FDA clarifies that Computer Software Assurance (CSA) principles support automated testing pipelines and algorithmic test case generation without burdensome manual screenshots for non-direct-impact quality systems.',
    link: '/csv-vs-csa',
    linkText: 'Compare CSV vs CSA',
    featured: false,
  },
  {
    id: 'mastercontrol-iso-42001',
    title: 'MasterControl Certifies AI Trust Center Under ISO/IEC 42001:2023',
    date: 'July 15, 2025',
    isoDate: '2025-07-15',
    category: 'Standards',
    badge: 'ISO Certified',
    source: 'MasterControl Inc.',
    summary: 'MasterControl becomes the first major life sciences QMS and validation platform vendor to secure formal ISO/IEC 42001 certification for Artificial Intelligence Management Systems (AIMS), enabling automated transfer of risk assessments directly into validation execution.',
    link: '/ai-trends',
    linkText: 'Read Standards Report',
    featured: false,
  },
];
