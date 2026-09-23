export type PriceTransparencyRating = 'Transparent' | 'Moderate' | 'Opaque' | 'Non-Standard / N/A';

export interface PriceTransparency {
  rating: PriceTransparencyRating;
  score: 1 | 2 | 3 | 4 | 5; // 1 = Highly Opaque, 5 = Highly Transparent
  model: string;
  estimatedRange: string;
  details: string;
}

export interface Vendor {
  id: string;
  name: string;
  product: string;
  tier: 1 | 2 | 3 | 4;
  tierLabel: string;
  category: 'Pure-Play Validation' | 'MES Adjacent' | 'PLM / ALM Adjacent' | 'ERP / DMS / Clinical' | 'Specialist / Niche' | 'Legacy / Sunset';
  headquarters?: string;
  ownership: string;
  status2026: string;
  summary: string;
  scope: string[];
  aiFeatures?: string;
  aiReadiness: 'High (Agentic/MCP)' | 'High (Certified)' | 'Moderate (Roadmap/Feature)' | 'Adjacent/Sensor' | 'Emerging' | 'None/Legacy';
  priceTransparency: PriceTransparency;
  knownCustomers?: string[];
  keyDifferentiator: string;
  website?: string;
}

export const VENDORS: Vendor[] = [
  // --- TIER 1 ---
  {
    id: 'kneat',
    name: 'Kneat',
    product: 'Kneat Gx',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    headquarters: 'Limerick, Ireland / Halifax, NS',
    ownership: 'Thoma Bravo (Acquisition completed August 2026, formerly TSE:KSI)',
    status2026: 'Acquisition by Thoma Bravo completed (Aug 2026); showcased multi-site harmonization at ISPE Nordic-Baltic Summit (Sep 2026)',
    summary: 'The dominant paperless validation platform in life sciences. Purpose-built for equipment CSV, commissioning & qualification (C&Q), cleaning validation, analytical instrument validation, and process validation.',
    scope: [
      'Equipment CSV',
      'Commissioning & Qualification (C&Q)',
      'Cleaning Validation',
      'Analytical Instrument Validation',
      'Process Validation'
    ],
    aiFeatures: 'Kneat AI incorporating GRID model (AI Summary Assistant, AI Validation Expert, Author Assistant) and "Five Pillars of AI Governance" framework. Optional AI capabilities for validation content generation, protocol review, and deviation analysis.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Opaque',
      score: 2,
      model: 'Per-Named-User SaaS + Enterprise Core',
      estimatedRange: '$$$$ (Enterprise Custom)',
      details: 'Pricing requires sales qualification and multi-year minimum commitments. Tiered by user roles (Author, Reviewer, Execution). Following the 2026 Thoma Bravo acquisition, Kneat AI is sold as a closed, premium add-on rather than bundled into the base subscription.'
    },
    knownCustomers: ['Biogen', 'MSD', 'Takeda', 'Sanofi', 'Fujirebio', 'ElevateBio', 'Recipharm', 'C4 Therapeutics', 'AstraZeneca'],
    keyDifferentiator: 'Market share leader: 8 of the world\'s top 10 life sciences companies trust Kneat Gx.',
    website: 'https://kneat.com'
  },
  {
    id: 'valgenesis',
    name: 'ValGenesis',
    product: 'ValGenesis VLMS + Smart GxP Suite',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    headquarters: 'Santa Clara, California',
    ownership: 'Private (Raised $16M strategic financing in July 2025)',
    status2026: 'Launched VAL™ agentic AI at INTERPHEX; concluded ValConnect Mumbai Innovation Day on enterprise GxP AI; Eugia Pharmaceuticals live on VLMS (Sep 2026)',
    summary: 'The broadest dedicated validation lifecycle management system (VLMS). Covers Smart GxP, Process Validation, Cleaning Validation, Data Integrity, and Risk Manager under one roof.',
    scope: [
      'Enterprise VLMS',
      'Smart GxP Digitization',
      'Process & Cleaning Validation',
      'Data Integrity Governance',
      'GxP Risk Manager'
    ],
    aiFeatures: 'VAL™ (ValGenesis AI) launched Apr 14, 2026 at INTERPHEX: Named AI agent supporting governed human-led workflows, automated protocol and traceability generation, gap assessment, execution review, and test evidence analysis.',
    aiReadiness: 'High (Agentic/MCP)',
    priceTransparency: {
      rating: 'Opaque',
      score: 2,
      model: 'Modular Enterprise SaaS + Services',
      estimatedRange: '$$$$ (Enterprise Custom)',
      details: 'Quote-gated enterprise pricing tailored to deployment scale and specific modules (VLMS, Cleaning Validation, Process Validation, Risk Manager). The newly launched VAL™ agentic AI operates under negotiated enterprise add-on licensing.'
    },
    knownCustomers: ['Top 30 Global Pharma', 'Tier-1 CDMOs', 'Cell & Gene Therapy Innovators'],
    keyDifferentiator: 'Broadest dedicated validation suite with native agentic AI (VAL™) designed specifically for GAMP 5 and CSA execution.',
    website: 'https://valgenesis.com'
  },
  {
    id: 'veeva',
    name: 'Veeva Systems',
    product: 'Vault Validation Management',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    headquarters: 'Pleasanton, California',
    ownership: 'Public (NYSE: VEEV)',
    status2026: 'Veeva AI Agents + Vault MCP Server (GA 26R2, Aug 2026); Falcon Agent Suite (Falcon Safety & Falcon Router, Sep 2026)',
    summary: 'Part of the unified Veeva Quality Cloud, deeply integrated with Vault QualityDocs and Vault QMS. Governs commissioning, qualification, and validation across computerized systems, facilities, utilities, equipment, and manufacturing processes.',
    scope: [
      'Computerized Systems Validation (CSV/CSA)',
      'Facilities & Utilities Qualification',
      'Manufacturing Equipment Qualification',
      'Integrated Quality Management (QDocs & QMS)'
    ],
    aiFeatures: 'Veeva AI Agents paired with Vault MCP (Model Context Protocol) Server reaching General Availability in 26R2 (August 2026); introduced Veeva Falcon Agent Suite with Falcon Safety and Falcon Router for autonomous intake, triage, and cross-application GxP execution (September 2026).',
    aiReadiness: 'High (Agentic/MCP)',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Per-User Vault Quality Cloud Subscription',
      estimatedRange: '$$$$$ (Top-Tier Enterprise)',
      details: 'Consistent enterprise price-book per user per month across Vault Quality applications, providing predictability for existing Veeva customers. However, absolute annual expenditure is substantial with significant enterprise minimums; Vault MCP and Veeva AI Agents carry supplemental infrastructure fees.'
    },
    knownCustomers: ['Resilience', 'C4 Therapeutics', 'AstraZeneca'],
    keyDifferentiator: 'Native zero-integration consolidation for life science enterprises already standardized on Veeva Vault Quality.',
    website: 'https://veeva.com/products/vault-validation-management'
  },
  {
    id: 'mastercontrol',
    name: 'MasterControl',
    product: 'Validation Excellence (Vx)',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    headquarters: 'Salt Lake City, Utah',
    ownership: 'Private (Sixth Street backing)',
    status2026: 'Named Leader in 2026 Nucleus QMS Value Matrix (Sep 2026); ISO 42001 certified AI Trust Center',
    summary: 'Integrated validation module embedded in the MasterControl Quality Excellence platform alongside QMS, Manufacturing Excellence (MES), and CMMS. Delivers patented automated validation testing for core platform upgrades.',
    scope: [
      'Validation Excellence (Vx)',
      'Automated Transfer of Risk Assessments',
      'Upstream QMS Integration',
      'Execution Traceability'
    ],
    aiFeatures: 'Formal MasterControl AI Trust Center, certified under ISO/IEC 42001 (Artificial Intelligence Management System) on July 15, 2025.',
    aiReadiness: 'High (Certified)',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Tiered Per-Seat / Concurrent SaaS',
      estimatedRange: '$$$ - $$$$ (Mid to Enterprise)',
      details: 'Predictable user-tier subscription pricing bundled into the MasterControl Quality Excellence platform. Validation Excellence (Vx) provides pre-packaged automated validation testing that reduces third-party consulting spend, though ISO 42001 AI Trust Center tools carry supplemental tier costs.'
    },
    knownCustomers: ['Mid-market Pharma', 'MedTech Leaders', 'Contract Manufacturers'],
    keyDifferentiator: 'Turnkey validation for customers on MasterControl, slashing software release validation time from weeks to hours.',
    website: 'https://mastercontrol.com'
  },
  {
    id: 'sparta-trackwise',
    name: 'Sparta Systems (Honeywell)',
    product: 'TrackWise Digital Validation Engine',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    headquarters: 'Holmdel, New Jersey',
    ownership: 'Honeywell (Acquired for $1.3B)',
    status2026: 'Named Leader in 2026 Nucleus QMS Value Matrix (Sep 2026); migrating on-prem TrackWise to Honeywell Forge with QualityWise AI',
    summary: 'Pillar of enterprise complaints, quality event management, and compliance validation. Integrated into Honeywell Forge Life Sciences IIoT platform to harvest live shop-floor telemetry into validation logs.',
    scope: [
      'QMS-Embedded Validation',
      'Industrial-IoT Sensor Validation',
      'Complaint & Deviation Validation Traceability'
    ],
    aiFeatures: 'Pattern detection through Honeywell Forge AI; IIoT operational sensor data continuously feeds computerized system validation models.',
    aiReadiness: 'Adjacent/Sensor',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Complex Enterprise Licensing (Honeywell Forge)',
      estimatedRange: '$$$$$ (High-Burden Enterprise)',
      details: 'Highly opaque commercial structure inherited from enterprise QMS and industrial telemetry contracts. Deployment requires custom sales scoping, extensive professional services, and multi-tier server/database licensing.'
    },
    knownCustomers: ['Global 100 Pharma', 'Medical Device Conglomerates'],
    keyDifferentiator: 'Unites shop-floor industrial IoT automation with enterprise validation records.',
    website: 'https://spartasystems.com'
  },

  // --- TIER 2 ---
  {
    id: 'werum-pas-x',
    name: 'Werum IT Solutions (Körber)',
    product: 'PAS-X MES Validation Suite',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    category: 'MES Adjacent',
    headquarters: 'Lüneburg, Germany',
    ownership: 'Körber Group',
    status2026: 'Launched K.AI Assistant with PharmaGuardrails for GxP shop floor (Sep 2026); PAS-X Savvy batch analytics',
    summary: 'Global market leader in pharmaceutical and biopharmaceutical Manufacturing Execution Systems (MES). Features built-in validation packages and pre-validated MBR (Master Batch Record) content.',
    scope: ['Pharma MES Validation', 'Batch Record Qualification', 'EBR Compliance'],
    aiFeatures: 'K.AI Assistant featuring "PharmaGuardrails" for hallucination-free GxP execution, SOP guidance, and validation acceleration; PAS-X Savvy data analytics and AI-assisted batch recipe verification.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Capital Site License + 18-22% Maintenance',
      estimatedRange: '$$$$$ (Multi-Million Plant Scale)',
      details: 'Strictly gated industrial enterprise pricing calculated per manufacturing plant, site volume, and server instance. Out-of-the-box validation content, K.AI Assistant, and PAS-X Savvy AI verification modules require custom enterprise add-on agreements.'
    },
    knownCustomers: ['Top 20 Pharma Manufacturing Sites Worldwide'],
    keyDifferentiator: 'The undisputed standard for commercial biopharma batch manufacturing execution.',
    website: 'https://koerber-pharma.com'
  },
  {
    id: 'siemens-opcenter',
    name: 'Siemens',
    product: 'Opcenter Execution Pharma',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    category: 'MES Adjacent',
    headquarters: 'Munich, Germany',
    ownership: 'Siemens AG',
    status2026: 'Integrated validation accelerators for paperless shop floor',
    summary: 'High-performance MES tailored for pharmaceutical and biotech batch processing, complete with out-of-the-box validation documentation and test packages.',
    scope: ['MES Validation Documentation', 'ISA-88/95 Compliance', 'Electronic Work Instructions'],
    aiFeatures: 'Industrial Copilot integration for machine automation and diagnostic verification.',
    aiReadiness: 'Adjacent/Sensor',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Per-Plant / Machine Tag / Server Tier',
      estimatedRange: '$$$$$ (Industrial Scale)',
      details: 'Enterprise manufacturing automation pricing bundled with hardware controllers and SCADA tags. Pre-packaged validation documentation and industrial Copilot diagnostics involve complex enterprise quote matrices.'
    },
    knownCustomers: ['Enterprise Drug & Vaccine Manufacturers'],
    keyDifferentiator: 'Deep hardware/SCADA integration with Siemens automation hardware.',
    website: 'https://siemens.com'
  },
  {
    id: 'rockwell-pharmasuite',
    name: 'Rockwell Automation',
    product: 'FactoryTalk PharmaSuite MES',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    category: 'MES Adjacent',
    headquarters: 'Milwaukee, Wisconsin',
    ownership: 'Rockwell Automation',
    status2026: 'FactoryTalk Hub cloud validation framework',
    summary: 'Industrial-grade MES featuring automated recipe lifecycle validation and modular validation accelerators.',
    scope: ['Pharma MES', 'Equipment Tracking', 'Serialization & EBR Qualification'],
    aiFeatures: 'FactoryTalk Analytics AI tools for anomaly detection.',
    aiReadiness: 'Adjacent/Sensor',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Enterprise Site / Node License',
      estimatedRange: '$$$$$ (Industrial Scale)',
      details: 'Zero public pricing; contracts are negotiated as part of large-scale FactoryTalk industrial automation infrastructure with multi-year maintenance and validation accelerator packages.'
    },
    knownCustomers: ['Biopharma Fill-Finish & Packaging Plants'],
    keyDifferentiator: 'Unmatched integration with Allen-Bradley control systems.',
    website: 'https://rockwellautomation.com'
  },
  {
    id: 'ptc-codebeamer',
    name: 'PTC',
    product: 'Windchill + Codebeamer (ALM) + Jama',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    headquarters: 'Boston, Massachusetts',
    ownership: 'PTC Inc. (Acquired Codebeamer in 2022, Jama in 2023)',
    status2026: 'Unified MedTech Design Control & Validation Pipeline',
    summary: 'Powerhouse Application Lifecycle Management (ALM) and PLM suite. Derives validation evidence directly from engineering requirements, risk items, and design controls.',
    scope: ['Medical Device Software Validation (IEC 62304)', 'Requirements Traceability', 'Design Controls'],
    aiFeatures: 'Codebeamer AI requirements assistant and automated test generation.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Per-User ALM Subscription (Named / Floating)',
      estimatedRange: '$$$ (Mid to High)',
      details: 'Relatively transparent per-user software engineering licensing common to ALM tooling (named and concurrent floating seats). Regulated medical device validation templates (IEC 62304) and Jama integrations require specialized tier upgrades.'
    },
    knownCustomers: ['Medtronic', 'Philips', 'Roche Diagnostics'],
    keyDifferentiator: 'The standard for embedded SaMD (Software as a Medical Device) and hardware-software validation.',
    website: 'https://ptc.com'
  },
  {
    id: 'dassault-enovia',
    name: 'Dassault Systèmes',
    product: 'ENOVIA / 3DEXPERIENCE Life Sciences',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    headquarters: 'Vélizy-Villacoublay, France',
    ownership: 'Dassault Systèmes',
    status2026: 'Virtual Twin GxP validation suites',
    summary: 'PLM-centric validation environment linking CAD models, device history files (DHF), and validation verification tests in a single digital thread.',
    scope: ['DHF Validation', 'Design Transfer Qualification', 'Virtual Twin Verification'],
    aiFeatures: 'Generative design and simulation-based validation testing.',
    aiReadiness: 'Adjacent/Sensor',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Named User + Token-Based 3DEXPERIENCE',
      estimatedRange: '$$$$$ (Enterprise PLM)',
      details: 'Intricate role-based licensing matrix with token-based consumption for Virtual Twin simulation and qualification testing. Pricing is custom-quoted through Dassault enterprise sales or specialized value-added resellers (VARs).'
    },
    knownCustomers: ['Major Surgical & Orthopedic Device Manufacturers'],
    keyDifferentiator: 'Virtual Twin technology enabling simulated qualification prior to physical equipment build.',
    website: 'https://3ds.com'
  },
  {
    id: 'aras-innovator',
    name: 'Aras',
    product: 'Aras Innovator PLM',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    headquarters: 'Andover, Massachusetts',
    ownership: 'GI Partners',
    status2026: 'Low-code GxP compliance modules',
    summary: 'Open, flexible low-code PLM platform adopted in aerospace, defense, and medical devices. Validation assets are tracked as native configuration items.',
    scope: ['Low-Code Validation', 'BOM & Change Qualification', 'Quality Systems Traceability'],
    aiFeatures: 'Extensible AI plugins for requirement synthesis.',
    aiReadiness: 'Emerging',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Open Core / Unlimited Users + Enterprise Subscription',
      estimatedRange: '$$$ (Flexible Enterprise)',
      details: 'Differentiated commercial model offering free open-core data modeling without per-user penalties, paired with transparent annual subscription bands for regulated life sciences compliance modules, upgrades, and support.'
    },
    knownCustomers: ['Complex MedTech & Diagnostics Innovators'],
    keyDifferentiator: 'Open architecture without per-user licensing restrictions on core modeling.',
    website: 'https://aras.com'
  },
  {
    id: 'arena-solutions',
    name: 'Arena Solutions (PTC)',
    product: 'Arena PLM + Quality',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    headquarters: 'Foster City, California',
    ownership: 'PTC Inc.',
    status2026: 'Cloud-native BOM + Quality validation workflows',
    summary: 'Cloud-native product realization and quality management platform popular with high-growth medical device and diagnostics startups.',
    scope: ['Design Control Validation', 'BOM Change Qualification', 'Supplier Qualification'],
    aiFeatures: 'PTC shared AI analytics stack.',
    aiReadiness: 'Emerging',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Per-User Cloud SaaS (Annual)',
      estimatedRange: '$$$ (Startup & Mid-Market Friendly)',
      details: 'Standardized SaaS per-user pricing tailored for medical device and hardware startups. Offers predictable annual per-seat licensing, though automated validation maintenance and supplier quality packs involve tier upgrades.'
    },
    knownCustomers: ['High-growth MedTech Startups & Contract Manufacturers'],
    keyDifferentiator: 'Rapid time-to-value for fast-moving hardware and connected device startups.',
    website: 'https://arenasolutions.com'
  },
  {
    id: 'opentext-documentum',
    name: 'OpenText',
    product: 'Documentum for Life Sciences',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent DMS / Content',
    category: 'ERP / DMS / Clinical',
    headquarters: 'Waterloo, Ontario, Canada',
    ownership: 'OpenText Corporation',
    status2026: 'Cloud migrations from legacy on-prem repositories',
    summary: 'The historic system of record for life science document control. Still serves as the validation documentation repository for numerous legacy validation master plans.',
    scope: ['Validation Document Vaulting', 'Part 11 Electronic Records', 'Audit Trail Archives'],
    aiFeatures: 'OpenText Aviator AI content summarization.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Legacy CPU/Core + Named User Enterprise',
      estimatedRange: '$$$$ (High-Cost Legacy)',
      details: 'Historically opaque legacy document vault licensing with steep recurring maintenance fees (typically 20%+ annually) and complex migration consulting costs to transition to OpenText Cloud.'
    },
    knownCustomers: ['Legacy Tier-1 Pharma Enterprises'],
    keyDifferentiator: 'Decades of institutional document-control pedigree in enterprise pharma.',
    website: 'https://opentext.com'
  },
  {
    id: 'sap-s4hana',
    name: 'SAP',
    product: 'S/4HANA Quality Management (QM) & ETM',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent ERP',
    category: 'ERP / DMS / Clinical',
    headquarters: 'Walldorf, Germany',
    ownership: 'SAP SE',
    status2026: 'S/4HANA Cloud GxP validation best practices',
    summary: 'Enterprise Resource Planning backbone where validation is delivered as part of large-scale global ERP implementations and validated supply chains.',
    scope: ['ERP Computerized System Validation', 'Inspection Lot Qualification', 'Batch Release Validation'],
    aiFeatures: 'SAP Business AI (Joule) for supply chain process intelligence.',
    aiReadiness: 'Adjacent/Sensor',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Full User Equivalent (FUE) + Digital Access',
      estimatedRange: '$$$$$ (Megasuite Enterprise)',
      details: 'Infamously intricate enterprise licensing structured around FUE matrices, digital core capacity, and potential indirect access liabilities. Computerized system validation testing relies heavily on external systems integrator consulting.'
    },
    knownCustomers: ['Global Fortune 500 Life Sciences Corporations'],
    keyDifferentiator: 'Validating end-to-end commercial transactional and financial supply chains.',
    website: 'https://sap.com'
  },
  {
    id: 'oracle-health-sciences',
    name: 'Oracle',
    product: 'Oracle Health Sciences (Argus, InForm, OPA)',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent Clinical / Safety',
    category: 'ERP / DMS / Clinical',
    headquarters: 'Austin, Texas',
    ownership: 'Oracle Corporation',
    status2026: 'Oracle Cloud Infrastructure (OCI) life sciences validation suites',
    summary: 'Clinical trial management, electronic data capture (EDC), and pharmacovigilance safety suites backed by built-in Oracle validation packages.',
    scope: ['Clinical System Validation', 'EDC Qualification', 'Pharmacovigilance Part 11 Compliance'],
    aiFeatures: 'OCI Generative AI services for adverse event reporting.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Study-Based / Per-Subject / OCI Cloud Tier',
      estimatedRange: '$$$$$ (Clinical Enterprise)',
      details: 'Complex enterprise clinical trial licensing metered by study phase, active clinical sites, enrolled patients, and adverse event ingestion volume. Zero public rate cards.'
    },
    knownCustomers: ['Major CROs and Global Pharma Clinical Teams'],
    keyDifferentiator: 'Specialized validation for clinical trial data integrity and safety reporting.',
    website: 'https://oracle.com/life-sciences'
  },

  // --- TIER 3 ---
  {
    id: 'compliancequest',
    name: 'ComplianceQuest',
    product: 'ComplianceQuest GxP-Validation',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'Tampa, Florida',
    ownership: 'Private',
    status2026: 'Named Leader in 2026 Nucleus QMS Value Matrix (Sep 2026); adopts Salesforce Life Sciences MCP & Agentforce',
    summary: '100% native Salesforce enterprise QMS and validation suite. Popular with mid-market biotech and medical device organizations seeking an integrated CRM/QMS platform.',
    scope: ['Part 11 Validation on Salesforce', 'Audit & Change Management', 'Supplier Quality'],
    aiFeatures: 'Integration with Salesforce Agentforce and Einstein AI for quality event summarization.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Per-User / Tiered Salesforce AppExchange SaaS',
      estimatedRange: '$$$ (Mid-Market SaaS)',
      details: 'Built atop Salesforce Platform licensing with transparent user-bracket pricing for GxP validation and QMS modules. Clearer scoping for organizations already licensed on Salesforce, though Agentforce AI credits involve usage metering.'
    },
    knownCustomers: ['Mid-market Biotech', 'Specialty Pharma', 'Medical Device OEMs'],
    keyDifferentiator: 'Zero server infrastructure for organizations already committed to Salesforce.',
    website: 'https://compliancequest.com'
  },
  {
    id: 'goval',
    name: 'GoVal',
    product: 'GoVal Paperless Validation Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'Princeton, NJ / Hyderabad, India',
    ownership: 'Private (govalidation.com / goval.cloud)',
    status2026: 'AI-driven test automation and CSA risk algorithms',
    summary: 'Fast-growing paperless GAMP 5 validation tool engineered explicitly around hybrid CSV and CSA workflows. Highly competitive pricing and rapid onboarding.',
    scope: ['GAMP 5 Validation', 'CSA Hybrid Testing', 'Digital Protocol Execution', 'Auto Traceability'],
    aiFeatures: 'AI-driven automated test script generation and computerized requirement-to-protocol mapping.',
    aiReadiness: 'High (Agentic/MCP)',
    priceTransparency: {
      rating: 'Transparent',
      score: 4,
      model: 'Fixed Tier / User-Bracket SaaS Subscription',
      estimatedRange: '$$ (Cost-Disruptive)',
      details: 'Champion of transparent, cost-disruptive CSA-first pricing specifically designed to displace Tier 1 legacy VLMS. Includes out-of-the-box GAMP 5 templates and AI-driven automated test script generation without punitive export paywalls.'
    },
    knownCustomers: ['Pfizer', 'Novartis', 'Johnson & Johnson', 'Alembic', 'Sai Life Sciences', 'Advent Bioservices'],
    keyDifferentiator: 'Verified enterprise pharma deployment (Pfizer, Novartis, J&J) with dedicated CSA-first pricing and architecture.',
    website: 'https://govalidation.com'
  },
  {
    id: 'sware',
    name: 'Sware',
    product: 'Res_Q Validation Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'Chelsea, Massachusetts',
    ownership: 'Private (Venture-backed by First Analysis, LRVHealth)',
    status2026: 'Launched Res_Q Connect MCP integration platform; agentic AI validation automation and continuous compliance for life sciences',
    summary: 'A cloud-native, data-centric validation automation platform engineered to eliminate "validation debt". Transitions life sciences organizations from document-heavy CSV to agile, risk-proportionate FDA CSA execution.',
    scope: [
      'Computer Software Assurance (CSA)',
      'Model Context Protocol (MCP) Integration',
      'Cloud / SaaS GxP Qualification',
      'Automated Traceability & Risk Scoping',
      'Continuous Audit Readiness',
      'Integrations (Jira, ServiceNow, Veeva)'
    ],
    aiFeatures: 'Res_Q Connect open MCP integration platform, intelligent automated risk assessment, auto-generated testing evidence, and agentic plain-language workflow orchestration with Part 11 audit trails.',
    aiReadiness: 'High (Agentic/MCP GA)',
    priceTransparency: {
      rating: 'Transparent',
      score: 4,
      model: 'Modern Cloud SaaS (Seat + System Tier)',
      estimatedRange: '$$ - $$$ (Predictable Cloud)',
      details: 'Clear, modern SaaS commercial model aligned with risk-proportionate CSA principles. Eliminates "validation debt" with transparent bundled continuous compliance; no hidden fees for trace matrix exports or REST API integrations.'
    },
    knownCustomers: ['Modicus Prime', 'Emerging & Commercial Biopharma', 'Tier-2/3 CDMOs'],
    keyDifferentiator: 'Open Model Context Protocol (MCP) foundation and data-centric architecture treating compliance as structured data rather than digitized paper, cutting validation cycle times by up to 80%.',
    website: 'https://sware.com'
  },
  {
    id: 'tricentis-vera',
    name: 'Tricentis',
    product: 'Tricentis Vera (formerly Tx3 Vera)',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'Austin, Texas',
    ownership: 'Private (Insight Partners)',
    status2026: 'Automated CSA execution with Public API (v2026.2), Record Integrity reconciliation, and Tricentis Copilot',
    summary: 'The de facto standard for embedding 21 CFR Part 11 compliant digital signatures, audit history, and validation workflows directly into agile developer tooling (Jira, Azure DevOps) and test automation platforms (Tosca, qTest).',
    scope: [
      'Agile CSA Test Automation',
      '21 CFR Part 11 Digital Signatures',
      'Jira & Azure DevOps Integration',
      'qTest / Tosca GxP Qualification',
      'Automated Traceability & Approvals'
    ],
    aiFeatures: 'Tricentis Copilot for automated test generation, test-case optimization, and AI-assisted defect/traceability resolution.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Jira / DevOps Seat Add-on + Engine Surcharge',
      estimatedRange: '$$$ (Developer Add-on)',
      details: 'Transparent per-user add-on pricing for 21 CFR Part 11 electronic signature integration inside Atlassian Jira and Azure DevOps. Enterprise Tosca automation suites and Copilot AI modules require custom enterprise quoting.'
    },
    knownCustomers: ['Global Top 20 Pharma', 'Sanofi', 'Novartis', 'Merck', 'Allergan'],
    keyDifferentiator: 'Bridges the gap between modern agile/DevOps development and strict Part 11 compliance without forcing teams into siloed document authoring tools.',
    website: 'https://tricentis.com'
  },
  {
    id: 'ketryx',
    name: 'Ketryx',
    product: 'Ketryx Connected Lifecycle & Validation Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'Boston, Massachusetts',
    ownership: 'Private (Lightspeed Venture Partners)',
    status2026: 'Governed agentic AI workflows and automated FDA CSA / IEC 62304 validation',
    summary: 'Next-generation connected ALM and validation platform for regulated software (SaMD, digital health, and GxP systems). Enforces compliance-by-design by orchestrating Jira, GitHub, GitLab, and TestRail into a real-time living traceability matrix.',
    scope: [
      'FDA CSA Automation',
      'SaMD & IEC 62304 / ISO 14971 Compliance',
      'Real-Time Traceability & DHF Generation',
      'SBOM & Cybersecurity Qualification',
      'Governed AI Agent Verification'
    ],
    aiFeatures: 'Ketryx AI agents built specifically for regulated software development with strict Part 11 human-in-the-loop review, automated requirement drafting, and continuous test coverage verification.',
    aiReadiness: 'High (Agentic/MCP)',
    priceTransparency: {
      rating: 'Transparent',
      score: 4,
      model: 'Developer / Contributor Tiered Cloud SaaS',
      estimatedRange: '$$ - $$$ (Transparent Tech SaaS)',
      details: 'Modern developer-friendly pricing scaled by active engineering contributors on GitHub/GitLab/Jira. Turnkey FDA CSA, SaMD, and Part 11 compliance-by-design included without hidden validation execution surcharges.'
    },
    knownCustomers: ['Emerging SaMD Leaders', 'Medical Device Innovators', 'Digital Health Pioneers'],
    keyDifferentiator: 'Native developer-first architecture that eliminates manual validation paperwork (cutting documentation overhead by up to 90%) while embedding regulated AI agents directly into the CI/CD pipeline.',
    website: 'https://ketryx.com'
  },
  {
    id: 'dot-compliance',
    name: 'Dot Compliance',
    product: 'Dot Compliance Ready-to-Deploy eQMS & Validation',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'Phoenix, Arizona / Tel Aviv, Israel',
    ownership: 'Private (IGP Capital, Vertex Ventures)',
    status2026: 'Pre-validated Salesforce-native QMS with Dottie AI and Salesforce Life Sciences MCP integration roadmap',
    summary: 'Ready-to-deploy, pre-validated life sciences quality and validation platform built natively on Salesforce. Delivers turnkey GAMP 5 and CSA validation packages out-of-the-box, dramatically reducing deployment timelines.',
    scope: [
      'Pre-Validated GxP Workflows',
      'Computer Software Assurance (CSA)',
      'Document & Training Validation',
      'Audit & CAPA Management',
      'Salesforce Platform Security'
    ],
    aiFeatures: 'Dottie AI copilot for automated regulatory insights, non-conformance summaries, and quality event classification; integrated with Salesforce Agentforce.',
    aiReadiness: 'Moderate (Roadmap/Feature)',
    priceTransparency: {
      rating: 'Transparent',
      score: 4,
      model: 'All-Inclusive Pre-Validated SaaS',
      estimatedRange: '$$ (Predictable SME Biotech)',
      details: 'Explicitly marketed with turnkey, all-inclusive subscription packaging. Includes pre-validated GAMP 5 workflows, hosting, regular release validation documentation, and Dottie AI copilot without surprise validation service fees.'
    },
    knownCustomers: ['Mid-Market Biopharma', 'Medical Device OEMs', 'Contract Testing Labs'],
    keyDifferentiator: 'Pre-validated software model that shifts the validation burden from the customer to the vendor, enabling deployment in weeks rather than months.',
    website: 'https://dotcompliance.com'
  },
  {
    id: 'eqcm-xybion',
    name: 'eQCM (formerly Xybion QMS)',
    product: 'eQCM Compliance Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'Princeton, New Jersey',
    ownership: 'Public (TSXV: XYBN)',
    status2026: 'Pristima XD + eQCM unified lab and quality governance',
    summary: 'Cloud-based QMS and digital compliance suite for highly regulated GLP preclinical research and GxP manufacturing facilities.',
    scope: ['Preclinical GLP Validation', 'Lab Instrument Qualification', '21 CFR Part 11 Governance'],
    aiFeatures: 'Predictive quality analytics for non-conformance tracking.',
    aiReadiness: 'Emerging',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'User-Tiered Cloud SaaS Subscription',
      estimatedRange: '$$$ (Niche Lab/QMS)',
      details: 'Structured user-tier brackets for preclinical GLP and lab compliance environments. Standard subscription includes base audit trail and Part 11 tools, though custom lab instrument validation packages involve professional service fees.'
    },
    knownCustomers: ['Contract Research Organizations (CROs)', 'Preclinical Labs'],
    keyDifferentiator: 'Deep domain heritage in preclinical GLP and bioanalytical lab validation.',
    website: 'https://xybion.com'
  },
  {
    id: 'regional-specialists',
    name: 'Regional CSV Tooling & Consultancies',
    product: 'Simsiphi, ParagonVX, Logic GXP, GxP-CC, Eliquent, Mantra',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    headquarters: 'US / Europe / UK / DACH',
    ownership: 'Privately Held Boutique Consultancies',
    status2026: 'Delivering hands-on CSA transition services',
    summary: 'High-touch specialized advisory firms combining proprietary protocol templates, CSV accelerators, and staff augmentation.',
    scope: ['CSA Strategy & Policy Drafting', 'Validation Staff Augmentation', 'Audit Defense & Remediation'],
    aiFeatures: 'Assisting clients in validating third-party AI systems and establishing AI governance boards.',
    aiReadiness: 'Emerging',
    priceTransparency: {
      rating: 'Moderate',
      score: 3,
      model: 'Blended Hourly T&M / Fixed-Price SOW',
      estimatedRange: '$$ - $$$$ ($175–$325/hr or Project SOW)',
      details: 'Straightforward professional services billing based on published day/hourly rates or fixed milestone deliverables. High cost predictability for defined validation deliverables, though scaling validation volume directly inflates labor spend.'
    },
    knownCustomers: ['Emerging Biotech Startups', 'Regional European Pharma', 'MedTech Scaleups'],
    keyDifferentiator: 'Direct human accountability and deep regulatory audit defense expertise.',
    website: 'https://saram.io'
  },

  // --- TIER 4 ---
  {
    id: 'sparta-v8-onprem',
    name: 'Sparta TrackWise v8 (On-Prem)',
    product: 'TrackWise v8 Legacy',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    headquarters: 'Legacy On-Premise',
    ownership: 'Honeywell',
    status2026: 'Active client displacement and migration to TrackWise Digital or Veeva',
    summary: 'Classic on-premises enterprise quality system. Heavy relational database footprint with lengthy, expensive validation cycles for any patch or change.',
    scope: ['Legacy Deviation Tracking', 'Custom SQL Reporting', 'Manual IQ/OQ Protocols'],
    aiFeatures: 'None. Rigid relational architecture incompatible with modern agentic APIs.',
    aiReadiness: 'None/Legacy',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Legacy Perpetual + 22% Annual Maintenance',
      estimatedRange: '$$$$$ (High Maintenance Trap)',
      details: 'Legacy perpetual software pricing with punitive annual maintenance fees on unsupported on-premise instances. Minor configuration changes require costly custom re-validation and manual IQ/OQ execution.'
    },
    keyDifferentiator: 'Historic market footprint now facing sunset pressure and high maintenance burdens.'
  },
  {
    id: 'atlas-csp',
    name: 'Atlas CSP / Compliance-Alliance',
    product: 'Atlas CSV Authoring Suite',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    headquarters: 'Legacy Desktop / LAN',
    ownership: 'Legacy Vendors',
    status2026: 'Near-total displacement by cloud-native VLMS platforms',
    summary: 'Early-generation computerized validation authoring tools designed for static Word/PDF protocol assembly. Lack real-time concurrent collaborative execution.',
    scope: ['Document Generation', 'Static Traceability Matrices'],
    aiFeatures: 'None.',
    aiReadiness: 'None/Legacy',
    priceTransparency: {
      rating: 'Opaque',
      score: 1,
      model: 'Legacy Desktop License + Consulting',
      estimatedRange: '$$ - $$$ (Legacy Tooling)',
      details: 'Antiquated desktop licensing with custom pricing and mandatory third-party consulting for protocol execution. Opaque support terms due to widespread platform retirement.'
    },
    keyDifferentiator: 'Replaced by Kneat, ValGenesis, or Veeva cloud solutions.'
  },
  {
    id: 'bespoke-inhouse',
    name: 'Bespoke In-House CSV Tools',
    product: 'Custom Internal Systems & Scripts',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    headquarters: 'Enterprise IT Departments',
    ownership: 'Internal Pharma / Biotech IT',
    status2026: 'Decommissioning in favor of commercial off-the-shelf VLMS',
    summary: 'Proprietary internal validation tools developed by big pharma IT teams in the 2000s and 2010s. Now excessive technical debt.',
    scope: ['Custom Workflow Automation', 'Legacy Document Archiving'],
    aiFeatures: 'Unmaintainable without specialized internal teams.',
    aiReadiness: 'None/Legacy',
    priceTransparency: {
      rating: 'Non-Standard / N/A',
      score: 2,
      model: 'Internal CAPEX / OPEX IT Allocation',
      estimatedRange: 'Hidden High TCO (Internal IT Payroll)',
      details: 'Zero external software licensing fee creates a false impression of affordability. The true cost of ownership is concealed within internal IT payroll, manual re-validation cycles, bespoke patch maintenance, and regulatory audit exposure.'
    },
    keyDifferentiator: 'High total cost of ownership; rapid decommissioning underway across the industry.'
  },
  {
    id: 'paper-excel-sharepoint',
    name: 'Paper / Excel / SharePoint Validation',
    product: 'Manual Document-Based CSV',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    headquarters: 'Widespread',
    ownership: 'Unmanaged / Decentralized',
    status2026: 'Urgent regulatory pressure under FDA CSA guidance',
    summary: 'Traditional binder-based validation execution: printed protocols, physical wet signatures, cell-by-cell Excel traceability matrices, and unmanaged SharePoint folders.',
    scope: ['Wet-ink IQ/OQ/PQ Execution', 'Excel Trace Matrices', 'Scanned PDF Archives'],
    aiFeatures: 'Infeasible to govern safely due to high human error and data integrity vulnerabilities.',
    aiReadiness: 'None/Legacy',
    priceTransparency: {
      rating: 'Non-Standard / N/A',
      score: 2,
      model: 'Office 365 Standard / Consumables',
      estimatedRange: 'Nominal Direct / Extreme Labor Cost (80% Waste)',
      details: 'Direct software costs appear trivial (standard Office licenses and binder printing). However, labor-based validation overhead is maximal—diverting up to 80% of engineering hours into manual paper formatting, wet signatures, and spreadsheet cross-checking.'
    },
    keyDifferentiator: 'Highest labor burden (80% documentation / 20% testing). Prime candidate for immediate CSA transformation.'
  }
];
