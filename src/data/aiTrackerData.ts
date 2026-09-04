export interface AiTrackerEntry {
  vendorId: string;
  vendorName: string;
  product: string;
  tier: 1 | 2 | 3 | 4;
  tierLabel: string;
  walledGardenPosture: 
    | 'Open Protocol Pioneer'
    | 'Proprietary AI Moat'
    | 'Ecosystem Walled Garden'
    | 'API Gated / Restricted'
    | 'Closed Fortress';
  mcpStatus: 
    | 'GA Native MCP Server'
    | 'Roadmap / In Dev'
    | 'Proprietary Only (No MCP)'
    | 'Ecosystem Bound'
    | 'None / Unsupported';
  apiOpenness: 
    | 'Open REST / GraphQL & Webhooks'
    | 'Gated Enterprise REST'
    | 'Legacy / Restricted SOAP / SQL'
    | 'None / Air-Gapped';
  dataPortability: 
    | 'Full Structured JSON / Graph'
    | 'Semi-Structured CSV / XML'
    | 'Proprietary / PDF Only';
  part11AiAttribution: 
    | 'Native Agent Tool-Calling Log'
    | 'Service Account Proxy'
    | 'Manual Human Copy-Paste'
    | 'Unsupported';
  opennessGrade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  readinessScore: number; // 0 to 100
  willingnessToOpenData: 'High' | 'Moderate' | 'Low' | 'Hostile / Defensively Closed';
  walledGardenAnalysis: string;
  buyerTakeaway: string;
}

export const AI_TRACKER_DATA: AiTrackerEntry[] = [
  // --- TIER 1 PURE-PLAY VALIDATION PLATFORMS ---
  {
    vendorId: 'veeva',
    vendorName: 'Veeva Systems',
    product: 'Vault Validation Management',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'GA Native MCP Server',
    apiOpenness: 'Open REST / GraphQL & Webhooks',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'A+',
    readinessScore: 94,
    willingnessToOpenData: 'High',
    walledGardenAnalysis: 
      'Veeva made the most decisive move in the validation industry by releasing the native Vault MCP Server in 26R2 (August 2026). Rather than forcing customers into a closed AI silo, Veeva adopted Anthropic\'s open Model Context Protocol. External AI agents can invoke standardized Vault tools with Part 11 compliant audit trail recording. While Vault remains a massive enterprise platform, its protocol-level openness establishes the gold standard for regulated software interoperability.',
    buyerTakeaway: 
      'Strongest choice for biopharmas building multi-agent internal orchestration. Demand MCP tool-level permission matrix in enterprise agreements to control agentic read/write scopes.'
  },
  {
    vendorId: 'valgenesis',
    vendorName: 'ValGenesis',
    product: 'ValGenesis VLMS + VAL™ AI Agent',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Proprietary Only (No MCP)',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'B',
    readinessScore: 78,
    willingnessToOpenData: 'Moderate',
    walledGardenAnalysis: 
      'ValGenesis launched VAL™ at INTERPHEX 2026 as a dedicated, named validation AI agent. However, VAL™ is architected as an internal walled garden feature: all protocol generation, risk mapping, and test execution review happen strictly inside ValGenesis\'s proprietary ecosystem. ValGenesis provides enterprise REST APIs, but has resisted open MCP endpoints, preferring to capture high-margin AI subscription tiers per user/system.',
    buyerTakeaway: 
      'Exceptional out-of-the-box validation agent functionality, but locks you into ValGenesis as your sole AI runtime. Negotiate explicit API data export rights and inquire on MCP server roadmap commitments before signing.'
  },
  {
    vendorId: 'kneat',
    vendorName: 'Kneat',
    product: 'Kneat Gx + Kneat AI',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Proprietary Only (No MCP)',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'C',
    readinessScore: 68,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'Following its 2026 acquisition agreement with Thoma Bravo, Kneat launched Kneat AI under a "Five Pillars of AI Governance" banner. Historically, Kneat Gx has operated as a classic enterprise walled garden: high barrier to external data extraction, guarded REST APIs, and strict per-seat commercial models. The Thoma Bravo playbook emphasizes SaaS monetization; opening free MCP access or unmetered external agent interfaces is directly antithetical to their private equity margin objectives.',
    buyerTakeaway: 
      'High risk of AI vendor lock-in. Ensure contract protects against steep AI add-on price escalation. Require guarantees that validation logs and trace matrices can be extracted in open structured formats without punitive export fees.'
  },
  {
    vendorId: 'mastercontrol',
    vendorName: 'MasterControl',
    product: 'Validation Excellence (Vx)',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Roadmap / In Dev',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'B',
    readinessScore: 75,
    willingnessToOpenData: 'Moderate',
    walledGardenAnalysis: 
      'MasterControl established strong governance credentials by achieving ISO/IEC 42001 certification for its AI Trust Center in July 2025. While their core Vx platform has historically been closed to external agents, MasterControl has recognized customer demand for unified AI pipelines and is prototyping MCP connectors for their Quality Excellence cloud. Their automated transfer of risk assessments is technically advanced, but external developer access remains partner-gated.',
    buyerTakeaway: 
      'Ask for early access to their MCP developer preview if pursuing enterprise multi-agent architectures. MasterControl\'s ISO 42001 certification gives QA teams solid audit defense for AI governance.'
  },
  {
    vendorId: 'sparta-trackwise',
    vendorName: 'Sparta Systems (Honeywell)',
    product: 'TrackWise Digital Validation Engine',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'C',
    readinessScore: 62,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'TrackWise Digital operates inside Honeywell\'s Forge enterprise cloud. AI investments are directed toward Honeywell\'s proprietary industrial analytics and shop-floor IoT telemetry rather than open agent protocols. While Salesforce-based APIs exist under the hood for TrackWise Digital, opening data access to third-party LLMs is restricted by Honeywell\'s industrial data fortification strategy.',
    buyerTakeaway: 
      'Well-suited if you are standardizing across Honeywell industrial plant automation; poorly suited if you want open, composable AI agent orchestration across multi-vendor validation stacks.'
  },

  // --- TIER 2 ADJACENT PLATFORMS (MES / PLM / ALM / ERP) ---
  {
    vendorId: 'werum-pas-x',
    vendorName: 'Werum IT Solutions (Körber)',
    product: 'PAS-X MES Validation Suite',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'C',
    readinessScore: 59,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'Körber’s PAS-X is the titan of pharma MES, but its validation accelerators and Master Batch Record (MBR) templates are guarded proprietary assets. AI capabilities (PAS-X Savvy) are focused on internal batch analytics. Körber treats batch validation data as mission-critical intellectual property and shows minimal willingness to open real-time MCP server endpoints to unvetted external agents.',
    buyerTakeaway: 
      'MES validation data will remain largely siloed. Plan for batch-based ETL extraction or custom validated middleware if integrating with enterprise CSA agents.'
  },
  {
    vendorId: 'siemens-opcenter',
    vendorName: 'Siemens',
    product: 'Opcenter Execution Pharma',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'B',
    readinessScore: 71,
    willingnessToOpenData: 'Moderate',
    walledGardenAnalysis: 
      'Siemens has embraced generative AI through its Siemens Industrial Copilot (partnered with Microsoft Azure). However, this AI framework is heavily tied to Siemens\' own industrial ecosystem. While Siemens provides robust OPC UA and Industrial IoT APIs, open MCP support for validation document management is not a primary roadmap priority.',
    buyerTakeaway: 
      'Leverage Siemens Industrial Copilot if you are deeply invested in the Siemens/Azure ecosystem. For independent validation tools, rely on Siemens REST web services with custom wrappers.'
  },
  {
    vendorId: 'rockwell-pharmasuite',
    vendorName: 'Rockwell Automation',
    product: 'FactoryTalk PharmaSuite MES',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'C',
    readinessScore: 61,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'FactoryTalk PharmaSuite links closely with Allen-Bradley hardware and FactoryTalk Hub cloud services. AI is centered on predictive maintenance and operational telemetry. Rockwell maintains a tightly protected industrial perimeter with zero published plans for open Model Context Protocol validation servers.',
    buyerTakeaway: 
      'Strictly an industrial OT validation platform. High switching barriers and heavy data fencing around batch records.'
  },
  {
    vendorId: 'ptc-codebeamer',
    vendorName: 'PTC',
    product: 'Windchill + Codebeamer (ALM) + Jama',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    apiOpenness: 'Open REST / GraphQL & Webhooks',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'A',
    readinessScore: 88,
    willingnessToOpenData: 'High',
    walledGardenAnalysis: 
      'Because Codebeamer originates from software engineering ALM, it has one of the most open, developer-friendly API architectures in the regulated space. PTC has actively embraced developer ecosystems, providing comprehensive Swagger/OpenAPI documentation, webhooks, and active experimentation with MCP servers for requirements-to-test traceability in MedTech software validation (IEC 62304).',
    buyerTakeaway: 
      'Prime candidate for engineering and software validation teams who want open, programmable access for autonomous QA coding agents.'
  },
  {
    vendorId: 'dassault-enovia',
    vendorName: 'Dassault Systèmes',
    product: 'ENOVIA / 3DEXPERIENCE Life Sciences',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Proprietary Only (No MCP)',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'C',
    readinessScore: 64,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'Dassault\'s 3DEXPERIENCE platform is an archetypal walled garden. Validation of Device History Files (DHF) and Virtual Twin simulations are tightly bound to Dassault\'s proprietary data formats and heavy desktop/cloud clients. Dassault heavily pushes its own internal generative AI engines and resists open third-party agent protocols.',
    buyerTakeaway: 
      'Expect severe data lock-in. Any agentic integration requires specialized Dassault enterprise services or cumbersome CAA/REST adapters.'
  },
  {
    vendorId: 'aras-innovator',
    vendorName: 'Aras',
    product: 'Aras Innovator PLM',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    apiOpenness: 'Open REST / GraphQL & Webhooks',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'A',
    readinessScore: 86,
    willingnessToOpenData: 'High',
    walledGardenAnalysis: 
      'Aras has built its reputation on open architecture and non-punitive licensing. Its open data model and comprehensive OData/REST APIs make it trivial for external AI agents to query ItemTypes, relationships, and validation items. Community and partner MCP adapters are already emerging around Aras Innovator.',
    buyerTakeaway: 
      'The most open enterprise PLM platform for life sciences organizations wanting to avoid vendor lock-in and build custom agentic pipelines.'
  },
  {
    vendorId: 'arena-solutions',
    vendorName: 'Arena Solutions (PTC)',
    product: 'Arena PLM + Quality',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'B',
    readinessScore: 72,
    willingnessToOpenData: 'Moderate',
    walledGardenAnalysis: 
      'Arena offers modern cloud REST APIs with good documentation, but lacks native MCP support or fine-grained AI agent attribution logging. While friendly to MedTech startups, its validation functionality is standard SaaS without specialized open agent tooling.',
    buyerTakeaway: 
      'Good baseline API access for custom scripts, but requires custom middleware to bridge with modern agentic frameworks.'
  },
  {
    vendorId: 'opentext-documentum',
    vendorName: 'OpenText',
    product: 'Documentum for Life Sciences',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent DMS / Content',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'Legacy / Restricted SOAP / SQL',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'D',
    readinessScore: 48,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'Documentum remains a legacy content bastion. While OpenText is marketing its "Aviator" AI co-pilot, the underlying DFC/REST APIs are notoriously complex and rigid. Documentum retains validation master plans inside heavily guarded document repositories, with zero native MCP integration.',
    buyerTakeaway: 
      'Legacy silo with high friction for AI agents. Most customers use Documentum purely as an archival vault while migrating active validation to modern VLMS.'
  },
  {
    vendorId: 'sap-s4hana',
    vendorName: 'SAP',
    product: 'S/4HANA Quality Management (QM)',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent ERP',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'B',
    readinessScore: 70,
    willingnessToOpenData: 'Moderate',
    walledGardenAnalysis: 
      'SAP is aggressively building out its Joule copilot and Business AI foundation. However, SAP\'s business model centers on keeping enterprise transactional data within the SAP Business Technology Platform (BTP). Opening third-party MCP endpoints directly into S/4HANA QM is subject to SAP\'s indirect access licensing policies.',
    buyerTakeaway: 
      'Beware SAP indirect access licensing when connecting third-party AI agents. Prefer certified SAP BTP AI connectors if ERP validation data must be queried.'
  },
  {
    vendorId: 'oracle-health-sciences',
    vendorName: 'Oracle',
    product: 'Oracle Health Sciences (Argus, InForm)',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent Clinical / Safety',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    opennessGrade: 'C',
    readinessScore: 56,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'Oracle safety and clinical databases are locked down due to severe HIPAA and 21 CFR Part 11 requirements. Oracle offers generative AI inside OCI, but maintains a walled garden around Argus and InForm databases with high licensing costs for external API extraction.',
    buyerTakeaway: 
      'Clinical validation records remain behind substantial vendor fencing. Requires dedicated database extract jobs rather than live agentic tool calling.'
  },

  // --- TIER 3 SPECIALIST / NICHE PLATFORMS ---
  {
    vendorId: 'goval',
    vendorName: 'GoVal',
    product: 'GoVal Paperless Validation Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    apiOpenness: 'Open REST / GraphQL & Webhooks',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'A',
    readinessScore: 89,
    willingnessToOpenData: 'High',
    walledGardenAnalysis: 
      'GoVal has emerged as a disruptive alternative to Tier 1 walled gardens. Built natively around hybrid CSV and CSA workflows, GoVal has embraced open APIs and dynamic automated test script generation. As a nimble challenger competing against Kneat and ValGenesis at accounts like Pfizer, Novartis, and J&J, GoVal has strong incentive to support open protocols like MCP to enable seamless enterprise agent orchestration.',
    buyerTakeaway: 
      'Highly receptive to customer requests for open API integration, custom webhooks, and MCP development. Excellent agile choice for biopharmas seeking to avoid mega-vendor lock-in.'
  },
  {
    vendorId: 'compliancequest',
    vendorName: 'ComplianceQuest',
    product: 'ComplianceQuest GxP-Validation',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    apiOpenness: 'Open REST / GraphQL & Webhooks',
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    opennessGrade: 'B',
    readinessScore: 76,
    willingnessToOpenData: 'Moderate',
    walledGardenAnalysis: 
      'Because ComplianceQuest is 100% native to Salesforce, its openness is tied directly to Salesforce\'s architecture. It enjoys world-class Salesforce REST/GraphQL APIs and native integration with Salesforce Agentforce. However, Agentforce is itself a walled garden designed to bill per agent conversation, which disincentivizes non-Salesforce external MCP orchestration.',
    buyerTakeaway: 
      'Outstanding if your enterprise is already standardized on Salesforce and Agentforce; costly and restrictive if attempting multi-cloud independent agent architectures.'
  },
  {
    vendorId: 'eqcm-xybion',
    vendorName: 'eQCM (Xybion)',
    product: 'eQCM Compliance Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'Gated Enterprise REST',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Manual Human Copy-Paste',
    opennessGrade: 'C',
    readinessScore: 58,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'Specialized in preclinical GLP and laboratory instrument validation. Xybion provides standard cloud REST APIs, but has not developed AI agent connectors or open MCP support. Customer data extraction relies primarily on traditional scheduled report exports.',
    buyerTakeaway: 
      'Specialized niche tool with traditional SaaS boundaries. Not currently architected for autonomous agentic workflows.'
  },
  {
    vendorId: 'regional-specialists',
    vendorName: 'Regional CSV Consultancies',
    product: 'Simsiphi, ParagonVX, Logic GXP, GxP-CC, Eliquent',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'None / Air-Gapped',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Manual Human Copy-Paste',
    opennessGrade: 'D',
    readinessScore: 52,
    willingnessToOpenData: 'Low',
    walledGardenAnalysis: 
      'Consultancy-led CSV tooling is built around proprietary document templates, static spreadsheets, and manual staff augmentation. Their commercial model relies on billing hourly consulting fees, creating an inherent business model conflict with autonomous AI validation agents that eliminate manual paperwork.',
    buyerTakeaway: 
      'Valuable for audit defense and human QA strategy, but their tooling does not offer programmatic AI readiness or open protocol access.'
  },

  // --- TIER 4 LEGACY / SUNSETTING ---
  {
    vendorId: 'sparta-v8-onprem',
    vendorName: 'Sparta TrackWise v8 (On-Prem)',
    product: 'TrackWise v8 Legacy On-Premise',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'Legacy / Restricted SOAP / SQL',
    dataPortability: 'Proprietary / PDF Only',
    part11AiAttribution: 'Unsupported',
    opennessGrade: 'F',
    readinessScore: 18,
    willingnessToOpenData: 'Hostile / Defensively Closed',
    walledGardenAnalysis: 
      'The classic closed fortress. On-premise relational databases with complex schemas, customized stored procedures, and zero modern REST/MCP interfaces. Direct agent access is technically unfeasible without brittle direct database queries that violate 21 CFR Part 11 software qualification boundaries.',
    buyerTakeaway: 
      'Decommission immediately. Running legacy on-prem TrackWise v8 paralyzes modern AI initiatives and incurs massive ongoing validation overhead.'
  },
  {
    vendorId: 'atlas-csp',
    vendorName: 'Atlas CSP / Compliance-Alliance',
    product: 'Atlas CSV Authoring Suite',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'None / Air-Gapped',
    dataPortability: 'Proprietary / PDF Only',
    part11AiAttribution: 'Unsupported',
    opennessGrade: 'F',
    readinessScore: 15,
    willingnessToOpenData: 'Hostile / Defensively Closed',
    walledGardenAnalysis: 
      'Desktop-era protocol authoring tool. Produces static Word and PDF files with zero live API access or agentic capability.',
    buyerTakeaway: 
      'Legacy artifact nearing full obsolescence.'
  },
  {
    vendorId: 'bespoke-inhouse',
    vendorName: 'Bespoke In-House CSV Tools',
    product: 'Custom Pharma Internal Scripts & Macros',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'None / Air-Gapped',
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Manual Human Copy-Paste',
    opennessGrade: 'F',
    readinessScore: 25,
    willingnessToOpenData: 'Hostile / Defensively Closed',
    walledGardenAnalysis: 
      'Fragmented internal scripts, Access databases, and custom web portals built a decade ago. Lack structured OpenAPI definitions, authentication federations, or modern agent security wrappers. Sinks hundreds of internal engineering hours without scalability.',
    buyerTakeaway: 
      'Migrate to modern cloud VLMS with open APIs or native MCP before attempting to layer generative AI co-pilots.'
  },
  {
    vendorId: 'paper-excel-sharepoint',
    vendorName: 'Paper / Excel / SharePoint Validation',
    product: 'Manual Document-Based CSV',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    apiOpenness: 'None / Air-Gapped',
    dataPortability: 'Proprietary / PDF Only',
    part11AiAttribution: 'Unsupported',
    opennessGrade: 'F',
    readinessScore: 10,
    willingnessToOpenData: 'Hostile / Defensively Closed',
    walledGardenAnalysis: 
      'The ultimate analog walled garden: physical binders, scanned wet-ink PDFs, and disconnected Excel trace matrices. Infeasible to connect to autonomous AI agents safely without breaking Part 11 electronic record provenance and risking severe FDA Form 483 warning letters.',
    buyerTakeaway: 
      'Transitioning to CSA on an open paperless platform is an absolute prerequisite before AI can deliver any tangible ROI.'
  }
];
