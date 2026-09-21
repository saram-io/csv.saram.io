export type WalledGardenPosture = 
  | 'Open Protocol Pioneer'
  | 'Proprietary AI Moat'
  | 'Ecosystem Walled Garden'
  | 'API Gated / Restricted'
  | 'Closed Fortress';

export type McpStatus = 
  | 'GA Native MCP Server'
  | 'Roadmap / In Dev'
  | 'Proprietary Only (No MCP)'
  | 'Ecosystem Bound'
  | 'None / Unsupported';

export type ApiOpennessGrade = 
  | 'Grade A (Modern REST/GraphQL + Webhooks)'
  | 'Grade B (Gated Enterprise REST)'
  | 'Grade C (Legacy / Restricted SOAP / SQL)'
  | 'Grade D (None / Air-Gapped)';

export type DataPortability = 
  | 'Full Structured JSON / Graph'
  | 'Semi-Structured CSV / XML'
  | 'Proprietary / PDF Only';

export type Part11AiAttribution = 
  | 'Native Agent Tool-Calling Log'
  | 'Service Account Proxy'
  | 'Manual Human Copy-Paste'
  | 'Unsupported';

export type ByoAiPolicy = 
  | 'Full BYO-AI Allowed'
  | 'Connector Add-on Required'
  | 'Vendor AI Only (Locked)'
  | 'No AI Capability';

export type Iso42001Status = 
  | 'Certified'
  | 'In Audit / Self-Attested'
  | 'SOC 2 AI Trust Only'
  | 'Uncertified / None';

export type CommercialMoatRisk = 
  | 'Low (Open Protocols)'
  | 'Medium (Conditional Access)'
  | 'High (Severe Lock-in)';

export type ApiPricingPosture = 
  | 'Included in Base License'
  | 'Tiered / Usage Surcharges'
  | 'Expensive Add-on / Paywall';

export interface ScoreBreakdown {
  mcp: number;             // Max: 30 pts
  api: number;             // Max: 25 pts
  dataPortability: number; // Max: 15 pts
  part11Audit: number;     // Max: 15 pts
  byoAiFreedom: number;    // Max: 15 pts
}

export interface AiTrackerEntry {
  vendorId: string;
  vendorName: string;
  ticker?: string;
  product: string;
  tier: 1 | 2 | 3 | 4;
  tierLabel: string;
  category?: string;
  walledGardenPosture: WalledGardenPosture;
  mcpStatus: McpStatus;
  mcpDetails: string;
  apiOpenness: ApiOpennessGrade;
  apiDetails: string;
  webhooksSupported: boolean;
  dataPortability: DataPortability;
  part11AiAttribution: Part11AiAttribution;
  byoAiPolicy: ByoAiPolicy;
  iso42001Status: Iso42001Status;
  commercialMoatRisk: CommercialMoatRisk;
  apiPricingPosture: ApiPricingPosture;
  willingnessToOpenData: 'High' | 'Moderate' | 'Low' | 'Hostile / Defensively Closed';
  scoreBreakdown: ScoreBreakdown;
  readinessScore: number; // 0 to 100 (composite sum)
  opennessGrade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  walledGardenAnalysis: string;
  buyerTakeaway: string;
  lastAudited: string;
  website?: string;
}

export function computeGrade(score: number): 'A+' | 'A' | 'B' | 'C' | 'D' | 'F' {
  if (score >= 90) return 'A+';
  if (score >= 80) return 'A';
  if (score >= 65) return 'B';
  if (score >= 50) return 'C';
  if (score >= 35) return 'D';
  return 'F';
}

export const AI_TRACKER_DATA: AiTrackerEntry[] = [
  // =========================================================================
  // TIER 1 — PURE-PLAY VALIDATION PLATFORMS
  // =========================================================================
  {
    vendorId: 'veeva',
    vendorName: 'Veeva Systems',
    ticker: 'NYSE: VEEV',
    product: 'Vault Validation Management',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'GA Native MCP Server',
    mcpDetails: 'Shipped official Vault Model Context Protocol (MCP) Server in August 2026 (release 26R2). Enables external AI agents to securely query and orchestrate across Vault Validation Management, QualityDocs, and QMS using validated OAuth tokens and Part 11 scopes.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Comprehensive Vault REST API v26.x with event-driven Spark messaging and Vault Java SDK. High throughput with 21 CFR Part 11 compliant audit logging.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'SOC 2 AI Trust Only',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'High',
    scoreBreakdown: {
      mcp: 28,             // GA production server with validated Part 11 scopes
      api: 25,             // Modern REST/GraphQL + Spark webhooks
      dataPortability: 15, // Native JSON & object graph queries
      part11Audit: 14,     // Immutable agent tool-call logging
      byoAiFreedom: 12      // Unrestricted BYO-AI within Vault license terms
    },
    readinessScore: 94,
    opennessGrade: 'A+',
    walledGardenAnalysis: 
      'Veeva made the most decisive move in the validation industry by releasing the native Vault MCP Server in 26R2 (August 2026). Rather than forcing customers into a closed AI silo, Veeva adopted Anthropic\'s open Model Context Protocol. External AI agents can invoke standardized Vault tools with Part 11 compliant audit trail recording. While Vault remains a massive enterprise platform, its protocol-level openness establishes the gold standard for regulated software interoperability.',
    buyerTakeaway: 
      'Strongest choice for biopharmas building multi-agent internal orchestration. Demand MCP tool-level permission matrix in enterprise agreements to control agentic read/write scopes.',
    lastAudited: 'September 2026',
    website: 'https://veeva.com/products/vault-quality'
  },
  {
    vendorId: 'valgenesis',
    vendorName: 'ValGenesis',
    product: 'ValGenesis VLMS + VAL™ AI Agent',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Proprietary Only (No MCP)',
    mcpDetails: 'Launched VAL™ at INTERPHEX 2026 as a dedicated validation agent. Operates strictly inside ValGenesis\'s proprietary runtime; no external MCP endpoints or public MCP roadmap.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Enterprise REST APIs available across Smart GxP modules, but heavily restricted by licensing tiers and lack real-time reactive event webhooks.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'In Audit / Self-Attested',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    willingnessToOpenData: 'Moderate',
    scoreBreakdown: {
      mcp: 16,             // Powerful native VAL™ agent, but no open MCP endpoints
      api: 18,             // Enterprise REST endpoints with rate controls
      dataPortability: 12, // CSV/XML export; graph extraction requires custom services
      part11Audit: 14,     // Full audit trail recording for VAL™ actions
      byoAiFreedom: 13     // High-value internal AI but external LLMs require add-ons
    },
    readinessScore: 73,
    opennessGrade: 'B',
    walledGardenAnalysis: 
      'ValGenesis launched VAL™ at INTERPHEX 2026 as a dedicated, named validation AI agent. However, VAL™ is architected as an internal walled garden feature: all protocol generation, risk mapping, and test execution review happen strictly inside ValGenesis\'s proprietary ecosystem. ValGenesis provides enterprise REST APIs, but has resisted open MCP endpoints, preferring to capture high-margin AI subscription tiers per user/system.',
    buyerTakeaway: 
      'Exceptional out-of-the-box validation agent functionality, but locks you into ValGenesis as your sole AI runtime. Negotiate explicit API data export rights and inquire on MCP server roadmap commitments before signing.',
    lastAudited: 'September 2026',
    website: 'https://valgenesis.com'
  },
  {
    vendorId: 'mastercontrol',
    vendorName: 'MasterControl',
    product: 'Validation Excellence (Vx)',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: 'Active developer preview of MCP connectors for Quality Excellence cloud; partner preview announced following ISO 42001 certification in July 2025.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Standard REST endpoints with token authentication, primarily optimized for ERP synchronization; webhooks available under premium enterprise tiers.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'Certified',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Moderate',
    scoreBreakdown: {
      mcp: 18,             // Active developer preview of MCP connectors
      api: 17,             // Gated enterprise REST with selective webhooks
      dataPortability: 13, // Structured JSON export for validation records
      part11Audit: 15,     // ISO 42001 certified AI Trust Center audit defensibility
      byoAiFreedom: 8      // Connector pack add-on required for external LLM routing
    },
    readinessScore: 71,
    opennessGrade: 'B',
    walledGardenAnalysis: 
      'MasterControl was named a Leader in the Nucleus Research 2026 QMS Technology Value Matrix for usability, automated validation testing (Vx), and rapid deployment. It established strong governance credentials by achieving ISO/IEC 42001 certification for its AI Trust Center in July 2025. While their core Vx platform has historically been closed to external agents, MasterControl is actively prototyping MCP connectors for their Quality Excellence cloud to support multi-agent ecosystems, though external developer access remains partner-gated.',
    buyerTakeaway: 
      'Ask for early access to their MCP developer preview if pursuing enterprise multi-agent architectures. MasterControl\'s ISO 42001 certification gives QA teams solid audit defense for AI governance.',
    lastAudited: 'September 2026',
    website: 'https://mastercontrol.com'
  },
  {
    vendorId: 'kneat',
    vendorName: 'Kneat',
    ticker: 'Privately Held (Thoma Bravo, formerly TSE: KSI)',
    product: 'Kneat Gx + Kneat AI',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Proprietary Only (No MCP)',
    mcpDetails: 'Kneat AI is offered exclusively within the Kneat Gx web UI under the "Five Pillars of AI Governance" banner and GRID model (AI Summary Assistant, AI Validation Expert, Author Assistant). No public MCP endpoint or developer SDK for third-party agents.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'REST APIs exist but are gated behind enterprise licenses and subject to per-seat restrictions; lacks public OpenAPI specs for automated test orchestration.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 10,             // Proprietary copilot; zero public MCP support
      api: 16,             // Gated enterprise REST; no real-time webhooks
      dataPortability: 10, // Semi-structured CSV/XML; heavy PDF binder defaults
      part11Audit: 10,     // Service account proxy attribution
      byoAiFreedom: 6      // Thoma Bravo PE margin model favors locked add-ons
    },
    readinessScore: 52,
    opennessGrade: 'C',
    walledGardenAnalysis: 
      'Following its completed August 2026 acquisition by Thoma Bravo, Kneat launched Kneat AI under a "Five Pillars of AI Governance" banner. Historically, Kneat Gx has operated as a classic enterprise walled garden: high barrier to external data extraction, guarded REST APIs, and strict per-seat commercial models. The Thoma Bravo playbook emphasizes SaaS monetization; opening free MCP access or unmetered external agent interfaces is directly antithetical to their private equity margin objectives.',
    buyerTakeaway: 
      'High risk of AI vendor lock-in. Ensure contract protects against steep AI add-on price escalation. Require guarantees that validation logs and trace matrices can be extracted in open structured formats without punitive export fees.',
    lastAudited: 'September 2026',
    website: 'https://kneat.com'
  },
  {
    vendorId: 'sparta-trackwise',
    vendorName: 'Sparta Systems (Honeywell)',
    ticker: 'NASDAQ: HON',
    product: 'TrackWise Digital Validation Engine',
    tier: 1,
    tierLabel: 'Tier 1 — Pure-Play Validation',
    category: 'Pure-Play Validation',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    mcpDetails: 'Honeywell Forge Life Sciences connectivity initiative underway. TrackWise Digital is bound to Salesforce infrastructure and Honeywell plant data pipelines; no standalone MCP server.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'TrackWise Digital provides Salesforce REST/SOAP APIs with Platform Events; on-premise TrackWise v8 remains legacy SOAP/SQL.',
    webhooksSupported: true,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'In Audit / Self-Attested',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 10,             // Tied to Honeywell Forge / Salesforce Agentforce
      api: 16,             // Standard REST on cloud; legacy SOAP on-prem
      dataPortability: 10, // Semi-structured CSV/XML export
      part11Audit: 10,     // Service account proxy attribution
      byoAiFreedom: 8      // Connector pack add-on required
    },
    readinessScore: 54,
    opennessGrade: 'C',
    walledGardenAnalysis: 
      'Recognized as a Leader in the Nucleus Research 2026 QMS Value Matrix, TrackWise Digital operates inside Honeywell\'s Forge enterprise cloud with its QualityWise AI engine. AI investments are directed toward Honeywell\'s proprietary industrial analytics and shop-floor IoT telemetry rather than open agent protocols. While Salesforce-based APIs exist under the hood for TrackWise Digital, opening data access to third-party LLMs remains restricted by Honeywell\'s industrial data fortification strategy.',
    buyerTakeaway: 
      'Well-suited if you are standardizing across Honeywell industrial plant automation; poorly suited if you want open, composable AI agent orchestration across multi-vendor validation stacks.',
    lastAudited: 'September 2026',
    website: 'https://spartasystems.com'
  },

  // =========================================================================
  // TIER 2 — ADJACENT PLATFORMS (MES / PLM / ALM / ERP)
  // =========================================================================
  {
    vendorId: 'ptc-codebeamer',
    vendorName: 'PTC',
    ticker: 'NASDAQ: PTC',
    product: 'Windchill + Codebeamer (ALM) + Jama',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: 'Active development of Model Context Protocol endpoints for requirements-to-test traceability in IEC 62304 / ISO 13485 medical device software validation.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Fully documented OpenAPI 3.0 endpoints, event-driven webhooks, and robust Swagger definitions with bidirectional traceability.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'SOC 2 AI Trust Only',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'High',
    scoreBreakdown: {
      mcp: 22,             // Roadmap / In Dev with active developer sandbox
      api: 24,             // Modern OpenAPI 3.0 + real-time webhooks
      dataPortability: 15, // Native JSON & living traceability graph
      part11Audit: 13,     // Native Part 11 tool-call logs and e-signatures
      byoAiFreedom: 13     // Full BYO-AI allowed under standard developer licenses
    },
    readinessScore: 87,
    opennessGrade: 'A',
    walledGardenAnalysis: 
      'Because Codebeamer originates from software engineering ALM, it has one of the most open, developer-friendly API architectures in the regulated space. PTC has actively embraced developer ecosystems, providing comprehensive Swagger/OpenAPI documentation, webhooks, and active experimentation with MCP servers for requirements-to-test traceability in MedTech software validation (IEC 62304).',
    buyerTakeaway: 
      'Prime candidate for engineering and software validation teams who want open, programmable access for autonomous QA coding agents.',
    lastAudited: 'July 2026',
    website: 'https://ptc.com'
  },
  {
    vendorId: 'aras-innovator',
    vendorName: 'Aras',
    product: 'Aras Innovator PLM',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: 'Open community and partner MCP adapters emerging; open data model allows external AI agents to query ItemTypes, relationships, and validation items directly.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Comprehensive OData / RESTful APIs with complete data dictionary introspection and flexible AML (Aras Markup Language) integration.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'High',
    scoreBreakdown: {
      mcp: 22,             // Community & partner MCP adapters in development
      api: 23,             // OData/REST with rich schema reflection
      dataPortability: 14, // Living ItemType graph & JSON export
      part11Audit: 13,     // Configurable Part 11 audit trails on all items
      byoAiFreedom: 13     // Non-punitive subscription licensing
    },
    readinessScore: 85,
    opennessGrade: 'A',
    walledGardenAnalysis: 
      'Aras has built its reputation on open architecture and non-punitive licensing. Its open data model and comprehensive OData/REST APIs make it trivial for external AI agents to query ItemTypes, relationships, and validation items. Community and partner MCP adapters are already emerging around Aras Innovator.',
    buyerTakeaway: 
      'The most open enterprise PLM platform for life sciences organizations wanting to avoid vendor lock-in and build custom agentic pipelines.',
    lastAudited: 'June 2026',
    website: 'https://aras.com'
  },
  {
    vendorId: 'siemens-opcenter',
    vendorName: 'Siemens',
    ticker: 'ETR: SIE',
    product: 'Opcenter Execution Pharma',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    category: 'MES Adjacent',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    mcpDetails: 'AI capabilities delivered via Siemens Industrial Copilot (partnered with Microsoft Azure). Focus is on industrial plant operations rather than open validation protocols.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Enterprise MES REST endpoints and OPC UA industrial telemetry; validation protocol data extraction requires custom enterprise services.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'In Audit / Self-Attested',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    willingnessToOpenData: 'Moderate',
    scoreBreakdown: {
      mcp: 12,             // Tied to Siemens Industrial Copilot & Azure
      api: 18,             // Robust REST & OPC UA, but enterprise-gated
      dataPortability: 14, // Structured electronic batch record schemas
      part11Audit: 11,     // Service account proxy with MES audit logs
      byoAiFreedom: 10     // Connector add-on required for third-party LLMs
    },
    readinessScore: 65,
    opennessGrade: 'B',
    walledGardenAnalysis: 
      'Siemens has embraced generative AI through its Siemens Industrial Copilot (partnered with Microsoft Azure). However, this AI framework is heavily tied to Siemens\' own industrial ecosystem. While Siemens provides robust OPC UA and Industrial IoT APIs, open MCP support for validation document management is not a primary roadmap priority.',
    buyerTakeaway: 
      'Leverage Siemens Industrial Copilot if you are deeply invested in the Siemens/Azure ecosystem. For independent validation tools, rely on Siemens REST web services with custom wrappers.',
    lastAudited: 'May 2026',
    website: 'https://siemens.com'
  },
  {
    vendorId: 'sap-s4hana',
    vendorName: 'SAP',
    ticker: 'NYSE: SAP',
    product: 'S/4HANA Quality Management (QM)',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent ERP',
    category: 'ERP / DMS / Clinical',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    mcpDetails: 'AI functionality delivered through SAP Joule and Business Technology Platform (BTP). Third-party AI agent tool calling is governed by SAP indirect access licensing.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Comprehensive OData and RFC endpoints; requires SAP Integration Suite and enterprise licensing for high-throughput automated agent polling.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'SOC 2 AI Trust Only',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    willingnessToOpenData: 'Moderate',
    scoreBreakdown: {
      mcp: 12,             // Bound to SAP Joule / BTP runtime
      api: 18,             // Extensive OData APIs with licensing gates
      dataPortability: 14, // Full enterprise relational graph
      part11Audit: 12,     // Enterprise change log with Part 11 capabilities
      byoAiFreedom: 9      // Indirect access licensing risks for external agents
    },
    readinessScore: 65,
    opennessGrade: 'B',
    walledGardenAnalysis: 
      'SAP is aggressively building out its Joule copilot and Business AI foundation. However, SAP\'s business model centers on keeping enterprise transactional data within the SAP Business Technology Platform (BTP). Opening third-party MCP endpoints directly into S/4HANA QM is subject to SAP\'s indirect access licensing policies.',
    buyerTakeaway: 
      'Beware SAP indirect access licensing when connecting third-party AI agents. Prefer certified SAP BTP AI connectors if ERP validation data must be queried.',
    lastAudited: 'June 2026',
    website: 'https://sap.com'
  },
  {
    vendorId: 'arena-solutions',
    vendorName: 'Arena Solutions (PTC)',
    product: 'Arena PLM + Quality',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Standard multi-tenant SaaS PLM without published MCP server roadmap; custom scripts can query REST endpoints.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Well-documented cloud REST APIs with token authentication; lacks native webhook subscriptions for real-time validation event triggers.',
    webhooksSupported: false,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'Moderate',
    scoreBreakdown: {
      mcp: 8,              // No MCP support; standard script integration
      api: 18,             // Modern cloud REST API with good documentation
      dataPortability: 14, // Structured JSON BOM and DMR data
      part11Audit: 11,     // Service account proxy attribution
      byoAiFreedom: 10     // BYO-AI allowed via client-built wrappers
    },
    readinessScore: 61,
    opennessGrade: 'C',
    walledGardenAnalysis: 
      'Arena offers modern cloud REST APIs with good documentation, but lacks native MCP support or fine-grained AI agent attribution logging. While friendly to MedTech startups, its validation functionality is standard SaaS without specialized open agent tooling.',
    buyerTakeaway: 
      'Good baseline API access for custom scripts, but requires custom middleware to bridge with modern agentic frameworks.',
    lastAudited: 'July 2026',
    website: 'https://arenasolutions.com'
  },
  {
    vendorId: 'rockwell-pharmasuite',
    vendorName: 'Rockwell Automation',
    ticker: 'NYSE: ROK',
    product: 'FactoryTalk PharmaSuite MES',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    category: 'MES Adjacent',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Ecosystem Bound',
    mcpDetails: 'Tightly coupled to Allen-Bradley automation hardware and FactoryTalk Hub; no published plans for open Model Context Protocol validation endpoints.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Industrial control web services and proprietary MES adapters; data extraction requires plant OT network authorization.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 8,              // OT perimeter lock; no open MCP server
      api: 16,             // Gated industrial web services
      dataPortability: 10, // Semi-structured batch run extracts
      part11Audit: 10,     // Service account proxy attribution
      byoAiFreedom: 7      // Ecosystem bound to Rockwell OT stack
    },
    readinessScore: 51,
    opennessGrade: 'C',
    walledGardenAnalysis: 
      'FactoryTalk PharmaSuite links closely with Allen-Bradley hardware and FactoryTalk Hub cloud services. AI is centered on predictive maintenance and operational telemetry. Rockwell maintains a tightly protected industrial perimeter with zero published plans for open Model Context Protocol validation servers.',
    buyerTakeaway: 
      'Strictly an industrial OT validation platform. High switching barriers and heavy data fencing around batch records.',
    lastAudited: 'May 2026',
    website: 'https://rockwellautomation.com'
  },
  {
    vendorId: 'dassault-enovia',
    vendorName: 'Dassault Systèmes',
    ticker: 'EPA: DSY',
    product: 'ENOVIA / 3DEXPERIENCE Life Sciences',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent PLM / ALM',
    category: 'PLM / ALM Adjacent',
    walledGardenPosture: 'Proprietary AI Moat',
    mcpStatus: 'Proprietary Only (No MCP)',
    mcpDetails: 'Validation of Device History Files (DHF) and Virtual Twins is locked inside 3DEXPERIENCE; Dassault actively pushes internal generative AI engines and resists open agent protocols.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Complex CAA/REST web services; requires proprietary middleware and desktop runtime client components.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 6,              // Proprietary 3DEXPERIENCE silo; no MCP
      api: 16,             // Complex CAA/REST web services with heavy gateway
      dataPortability: 10, // Proprietary CAD/PLM binary and XML models
      part11Audit: 10,     // Service account proxy attribution
      byoAiFreedom: 6      // Forced adoption of internal Dassault AI tools
    },
    readinessScore: 48,
    opennessGrade: 'D',
    walledGardenAnalysis: 
      'Dassault\'s 3DEXPERIENCE platform is an archetypal walled garden. Validation of Device History Files (DHF) and Virtual Twin simulations are tightly bound to Dassault\'s proprietary data formats and heavy desktop/cloud clients. Dassault heavily pushes its own internal generative AI engines and resists open third-party agent protocols.',
    buyerTakeaway: 
      'Expect severe data lock-in. Any agentic integration requires specialized Dassault enterprise services or cumbersome CAA/REST adapters.',
    lastAudited: 'April 2026',
    website: 'https://3ds.com'
  },
  {
    vendorId: 'werum-pas-x',
    vendorName: 'Werum IT Solutions (Körber)',
    product: 'PAS-X MES Validation Suite',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent MES / Industrial',
    category: 'MES Adjacent',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Launched K.AI Assistant in September 2026 with PharmaGuardrails and headless API support for MES operations. Validation templates, MBR logic, and execution logs remain guarded proprietary assets with no public MCP server.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Gated enterprise REST endpoints focused on ERP/LIMS synchronization and headless K.AI integration; external agent tool calls require validated middleware bridges.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 5,              // Zero open MCP support; proprietary K.AI / PAS-X Savvy focus
      api: 16,             // Gated enterprise REST; batch ETL default with headless AI endpoints
      dataPortability: 10, // Semi-structured CSV/XML batch archives
      part11Audit: 10,     // Service account proxy attribution
      byoAiFreedom: 6      // Heavy plant OT perimeter fencing
    },
    readinessScore: 47,
    opennessGrade: 'D',
    walledGardenAnalysis: 
      'Körber’s PAS-X is the titan of pharma MES. While Körber validation leadership co-authored the ISPE GAMP® AI Guide and introduced the K.AI Assistant with PharmaGuardrails in September 2026, its validation accelerators and Master Batch Record (MBR) templates remain heavily guarded proprietary assets. Körber treats shop-floor batch validation data as mission-critical intellectual property and maintains strict perimeter fencing against unvetted external agents.',
    buyerTakeaway: 
      'MES validation data will remain largely siloed. Plan for batch-based ETL extraction or custom validated middleware if integrating with enterprise CSA agents.',
    lastAudited: 'September 2026',
    website: 'https://koerber-pharma.com'
  },
  {
    vendorId: 'oracle-health-sciences',
    vendorName: 'Oracle',
    ticker: 'NYSE: ORCL',
    product: 'Oracle Health Sciences (Argus, InForm)',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent Clinical / Safety',
    category: 'ERP / DMS / Clinical',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Safety and clinical databases fenced by severe Part 11 and HIPAA boundaries; generative AI is tied to Oracle Cloud Infrastructure (OCI) with no public MCP endpoints.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Database-level interfaces and gated REST APIs; high commercial surcharges for real-time external extraction.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 5,              // Zero MCP support; internal OCI AI focus
      api: 15,             // Gated REST APIs with high extraction costs
      dataPortability: 10, // Semi-structured clinical extracts (SAS, CSV)
      part11Audit: 10,     // Service account proxy attribution
      byoAiFreedom: 6      // Locked to Oracle enterprise cloud boundary
    },
    readinessScore: 46,
    opennessGrade: 'D',
    walledGardenAnalysis: 
      'Oracle safety and clinical databases are locked down due to severe HIPAA and 21 CFR Part 11 requirements. Oracle offers generative AI inside OCI, but maintains a walled garden around Argus and InForm databases with high licensing costs for external API extraction.',
    buyerTakeaway: 
      'Clinical validation records remain behind substantial vendor fencing. Requires dedicated database extract jobs rather than live agentic tool calling.',
    lastAudited: 'March 2026',
    website: 'https://oracle.com/life-sciences'
  },
  {
    vendorId: 'opentext-documentum',
    vendorName: 'OpenText',
    ticker: 'NASDAQ: OTEX',
    product: 'Documentum for Life Sciences',
    tier: 2,
    tierLabel: 'Tier 2 — Adjacent DMS / Content',
    category: 'ERP / DMS / Clinical',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'OpenText Aviator provides internal generative summaries, but underlying Documentum repositories lack open Model Context Protocol server capabilities.',
    apiOpenness: 'Grade C (Legacy / Restricted SOAP / SQL)',
    apiDetails: 'Legacy DFC (Documentum Foundation Classes) and heavy REST services; difficult for modern lightweight autonomous agents to traverse without custom wrappers.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Service Account Proxy',
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 4,              // No MCP; forced Aviator add-on
      api: 10,             // Complex legacy DFC and heavy REST endpoints
      dataPortability: 10, // Unstructured document blobs with metadata tables
      part11Audit: 9,      // Service account proxy with legacy audit trails
      byoAiFreedom: 5      // Proprietary add-on licensing model
    },
    readinessScore: 38,
    opennessGrade: 'D',
    walledGardenAnalysis: 
      'Documentum remains a legacy content bastion. While OpenText is marketing its "Aviator" AI co-pilot, the underlying DFC/REST APIs are notoriously complex and rigid. Documentum retains validation master plans inside heavily guarded document repositories, with zero native MCP integration.',
    buyerTakeaway: 
      'Legacy silo with high friction for AI agents. Most customers use Documentum purely as an archival vault while migrating active validation to modern VLMS.',
    lastAudited: 'February 2026',
    website: 'https://opentext.com'
  },

  // =========================================================================
  // TIER 3 — SPECIALIST / NICHE PLATFORMS
  // =========================================================================
  {
    vendorId: 'ketryx',
    vendorName: 'Ketryx',
    product: 'Ketryx Connected ALM',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: 'Native living traceability graph with published developer APIs. Shipped beta Model Context Protocol (MCP) server enabling external AI agents (Claude, ChatGPT, Copilot) to query compliance graphs, verify pull requests, and enforce Part 11 sign-offs.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Modern GraphQL and REST endpoints with real-time GitHub, GitLab, and Jira webhook synchronization; full OpenAPI documentation.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'In Audit / Self-Attested',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'High',
    scoreBreakdown: {
      mcp: 25,             // Active Anthropic MCP beta server in field
      api: 24,             // Modern GraphQL/REST with real-time webhook streams
      dataPortability: 15, // Living graph architecture, full OpenAPI export
      part11Audit: 14,     // Native Part 11 tool-call logs with human sign-off
      byoAiFreedom: 14     // Full BYO-AI developer-first architecture
    },
    readinessScore: 92,
    opennessGrade: 'A+',
    walledGardenAnalysis: 
      'Ketryx represents a cloud-native, API-first architecture designed from inception around living traceability graphs rather than static documents. Integrating directly with GitHub, GitLab, and Jira, Ketryx actively deploys purpose-built AI agents with governed Part 11 human-in-the-loop validation logs and beta MCP server capabilities. Its open graph architecture makes it a premier platform for Anthropic MCP integration and biopharma agentic automation.',
    buyerTakeaway: 
      'Best-in-class validation environment for software engineering and SaMD teams. Delivers true compliance-by-design and seamless agentic extensibility.',
    lastAudited: 'September 2026',
    website: 'https://ketryx.com'
  },
  {
    vendorId: 'goval',
    vendorName: 'GoVal',
    product: 'GoVal Paperless Validation Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: 'Active engineering initiatives around Model Context Protocol integration for dynamic automated test protocol generation across hybrid CSV and CSA workflows.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Comprehensive REST APIs with developer documentation, dynamic webhook triggers, and automated test execution capture.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'High',
    scoreBreakdown: {
      mcp: 23,             // Roadmap / In Dev with active client pilot integrations
      api: 23,             // Modern REST API + dynamic webhooks
      dataPortability: 14, // Full structured JSON & dynamic script generation
      part11Audit: 14,     // Native agent tool-calling logs & Part 11 signatures
      byoAiFreedom: 13     // High willingness to support custom external agents
    },
    readinessScore: 87,
    opennessGrade: 'A',
    walledGardenAnalysis: 
      'GoVal has emerged as a disruptive alternative to Tier 1 walled gardens. Built natively around hybrid CSV and CSA workflows, GoVal has embraced open APIs and dynamic automated test script generation. As a nimble challenger competing against Kneat and ValGenesis at accounts like Pfizer, Novartis, and J&J, GoVal has strong incentive to support open protocols like MCP to enable seamless enterprise agent orchestration.',
    buyerTakeaway: 
      'Highly receptive to customer requests for open API integration, custom webhooks, and MCP development. Excellent agile choice for biopharmas seeking to avoid mega-vendor lock-in.',
    lastAudited: 'July 2026',
    website: 'https://goval.com'
  },
  {
    vendorId: 'tricentis-vera',
    vendorName: 'Tricentis',
    product: 'Tricentis Vera (formerly Tx3)',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: 'Injects Part 11 digital signatures directly into Jira, Azure DevOps, and Tosca; developing MCP server tools for automated CSA evidence verification in continuous delivery pipelines.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Cloud-native REST APIs, dedicated Public API (v2026.2) with scoped API keys (X-API-Key), Record Integrity workspace, and webhook listeners embedded natively in Jira, qTest, and CI/CD pipelines.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'SOC 2 AI Trust Only',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'High',
    scoreBreakdown: {
      mcp: 22,             // Roadmap / In Dev for CI/CD test evidence verification
      api: 25,             // Dedicated Public API v2026.2 + embedded REST + real-time webhooks
      dataPortability: 14, // Full structured compliance metadata across Jira/DevOps
      part11Audit: 14,     // Part 11 digital signatures and tamper-evident logs
      byoAiFreedom: 13     // Unrestricted BYO-AI and developer tool interoperability
    },
    readinessScore: 88,
    opennessGrade: 'A',
    walledGardenAnalysis: 
      'Tricentis Vera is built explicitly to operate across best-of-breed open developer platforms including Jira, Azure DevOps, and CI/CD pipelines. Rather than trapping compliance data inside a proprietary document silo, Vera injects Part 11 electronic records, digital signatures, and audit trails directly into active developer backlogs and automated testing workflows. This positioning creates strong incentives to adopt open tool-calling protocols and webhooks.',
    buyerTakeaway: 
      'The premier choice for IT engineering teams executing automated CSA who refuse to be boxed into proprietary VLMS silos. Highly interoperable with enterprise agent orchestration.',
    lastAudited: 'September 2026',
    website: 'https://tricentis.com'
  },
  {
    vendorId: 'sware',
    vendorName: 'Sware',
    product: 'Res_Q Validation Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'Open Protocol Pioneer',
    mcpStatus: 'GA Native MCP Server',
    mcpDetails: 'Launched Res_Q Connect on September 17, 2026, built on the open Model Context Protocol (MCP) standard. Provides an AI-validated, governed integration layer connecting QMS, ERP, and testing systems with 21 CFR Part 11 audit logging and agentic plain-language configuration.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'REST APIs and webhooks connecting seamlessly to Jira, ServiceNow, Veeva, and continuous release pipelines.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'High',
    scoreBreakdown: {
      mcp: 28,             // GA production native MCP server with validated Part 11 scopes
      api: 23,             // Modern REST API + multi-system webhooks
      dataPortability: 14, // Structured data records instead of document binders
      part11Audit: 14,     // Part 11 compliant audit logging on all tool operations
      byoAiFreedom: 13     // Cloud-native, unmetered BYO-AI integration posture
    },
    readinessScore: 92,
    opennessGrade: 'A+',
    walledGardenAnalysis: 
      'Sware solidified its position as an open protocol leader with the September 17, 2026 launch of Res_Q Connect, built directly on the open Model Context Protocol (MCP). By treating validation as structured live data rather than digitized PDF paperwork, Sware enables biopharma QA teams and external AI agents to orchestrate data movement between QMS, ERP, and testing pipelines without custom scripts, backed by native 21 CFR Part 11 audit trails.',
    buyerTakeaway: 
      'A premier cloud-native challenger for biopharma organizations prioritizing modern CSA data structures and open protocols. With native MCP integration via Res_Q Connect, Sware joins Veeva as one of the few validation platforms enabling audit-ready multi-agent tool execution.',
    lastAudited: 'September 2026',
    website: 'https://sware.com'
  },
  {
    vendorId: 'dot-compliance',
    vendorName: 'Dot Compliance',
    product: 'Dot Compliance + Dottie AI',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: 'Leverages Salesforce cloud infrastructure; benefits from Salesforce\'s Life Sciences MCP roadmap and headless protocol connectors bridging Dottie AI and external agents to governed GxP data.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Inherits Salesforce Lightning REST/GraphQL APIs, Platform Events, and Integration Cloud connectors.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'In Audit / Self-Attested',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    willingnessToOpenData: 'Moderate',
    scoreBreakdown: {
      mcp: 18,             // Active MCP development via Salesforce Life Sciences MCP headless protocol
      api: 22,             // Comprehensive Salesforce REST/GraphQL APIs + webhooks
      dataPortability: 14, // Structured Salesforce object schema & reports
      part11Audit: 13,     // Pre-validated Part 11 audit trails on Salesforce
      byoAiFreedom: 11     // Governed by Salesforce Agentforce conversation fees
    },
    readinessScore: 78,
    opennessGrade: 'B',
    walledGardenAnalysis: 
      'Dot Compliance leverages Salesforce’s cloud infrastructure and delivers pre-validated GxP quality modules with Dottie AI. Like ComplianceQuest, it benefits from extensive Salesforce APIs and Agentforce capabilities, but its AI ecosystem boundaries and commercial licensing remain closely tied to Salesforce’s enterprise perimeter.',
    buyerTakeaway: 
      'Turnkey choice for organizations desiring a pre-validated, low-infrastructure QMS and validation suite on Salesforce. External agent orchestration outside the Salesforce boundary requires custom API integration.',
    lastAudited: 'September 2026',
    website: 'https://dotcompliance.com'
  },
  {
    vendorId: 'compliancequest',
    vendorName: 'ComplianceQuest',
    product: 'ComplianceQuest GxP-Validation',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'Ecosystem Walled Garden',
    mcpStatus: 'Roadmap / In Dev',
    mcpDetails: '100% native to Salesforce; benefits directly from Salesforce\'s Life Sciences MCP and headless protocol architecture, enabling external agent orchestration with Part 11 governance without custom point-to-point wrappers.',
    apiOpenness: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'World-class Salesforce REST/GraphQL endpoints, Change Data Capture, and Apex webhooks.',
    webhooksSupported: true,
    dataPortability: 'Full Structured JSON / Graph',
    part11AiAttribution: 'Native Agent Tool-Calling Log',
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'SOC 2 AI Trust Only',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    willingnessToOpenData: 'Moderate',
    scoreBreakdown: {
      mcp: 18,             // Benefiting from Salesforce Life Sciences MCP roadmap & headless endpoints
      api: 22,             // Salesforce Lightning REST/GraphQL + event streaming
      dataPortability: 14, // Full structured JSON & relational objects
      part11Audit: 13,     // Native Part 11 compliant audit trail tables
      byoAiFreedom: 11     // Commercial licensing tied to Salesforce agent billing
    },
    readinessScore: 78,
    opennessGrade: 'B',
    walledGardenAnalysis: 
      'Ranked as a Leader in the Nucleus Research 2026 QMS Technology Value Matrix, ComplianceQuest leverages its 100% native Salesforce architecture. It benefits from world-class Salesforce REST/GraphQL APIs and native integration with Salesforce Agentforce for automated quality event workflows. However, Agentforce is itself an ecosystem walled garden designed to bill per agent conversation, which disincentivizes non-Salesforce external MCP orchestration.',
    buyerTakeaway: 
      'Outstanding if your enterprise is already standardized on Salesforce and Agentforce; costly and restrictive if attempting multi-cloud independent agent architectures.',
    lastAudited: 'September 2026',
    website: 'https://compliancequest.com'
  },
  {
    vendorId: 'eqcm-xybion',
    vendorName: 'eQCM (Xybion)',
    product: 'eQCM Compliance Platform',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Preclinical GLP and lab validation platform; lacks AI agent connectors or open MCP support.',
    apiOpenness: 'Grade B (Gated Enterprise REST)',
    apiDetails: 'Standard cloud REST APIs available; data extraction relies primarily on scheduled report jobs.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Manual Human Copy-Paste',
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 5,              // Zero MCP capability
      api: 16,             // Standard REST endpoints for laboratory sync
      dataPortability: 10, // Semi-structured CSV/XML report exports
      part11Audit: 6,      // Manual human copy-paste verification required
      byoAiFreedom: 6      // Traditional SaaS boundaries without AI routing
    },
    readinessScore: 43,
    opennessGrade: 'D',
    walledGardenAnalysis: 
      'Specialized in preclinical GLP and laboratory instrument validation. Xybion provides standard cloud REST APIs, but has not developed AI agent connectors or open MCP support. Customer data extraction relies primarily on traditional scheduled report exports.',
    buyerTakeaway: 
      'Specialized niche tool with traditional SaaS boundaries. Not currently architected for autonomous agentic workflows.',
    lastAudited: 'March 2026',
    website: 'https://xybion.com'
  },
  {
    vendorId: 'regional-specialists',
    vendorName: 'Regional CSV Consultancies',
    product: 'Simsiphi, ParagonVX, Logic GXP, GxP-CC, Eliquent',
    tier: 3,
    tierLabel: 'Tier 3 — Specialist / Niche',
    category: 'Specialist / Niche',
    walledGardenPosture: 'API Gated / Restricted',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Tooling consists of proprietary spreadsheet accelerators, Word templates, and manual consulting services. Zero MCP integration or programmatic agent interfaces.',
    apiOpenness: 'Grade D (None / Air-Gapped)',
    apiDetails: 'Disconnected document templates and manual deliverables with no programmatic APIs or webhooks.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Manual Human Copy-Paste',
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Low',
    scoreBreakdown: {
      mcp: 0,              // No software platform / No MCP
      api: 5,              // Disconnected spreadsheets / no live endpoints
      dataPortability: 8,  // Word documents and Excel trace matrices
      part11Audit: 5,      // Manual paper/wet-ink review
      byoAiFreedom: 4      // Commercial model depends on billing human consulting hours
    },
    readinessScore: 22,
    opennessGrade: 'F',
    walledGardenAnalysis: 
      'Consultancy-led CSV tooling is built around proprietary document templates, static spreadsheets, and manual staff augmentation. Their commercial model relies on billing hourly consulting fees, creating an inherent business model conflict with autonomous AI validation agents that eliminate manual paperwork.',
    buyerTakeaway: 
      'Valuable for audit defense and human QA strategy, but their tooling does not offer programmatic AI readiness or open protocol access.',
    lastAudited: 'April 2026'
  },

  // =========================================================================
  // TIER 4 — LEGACY / SUNSETTING
  // =========================================================================
  {
    vendorId: 'bespoke-inhouse',
    vendorName: 'Bespoke In-House CSV Tools',
    product: 'Custom Pharma Internal Scripts & Macros',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Unmaintained VBA macros, custom Python scripts, and Access databases lacking OpenAPI specs, OAuth federations, or modern agent security wrappers.',
    apiOpenness: 'Grade D (None / Air-Gapped)',
    apiDetails: 'Fragmented custom endpoints or direct SQL queries that risk data corruption and Part 11 audit gaps.',
    webhooksSupported: false,
    dataPortability: 'Semi-Structured CSV / XML',
    part11AiAttribution: 'Manual Human Copy-Paste',
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'Hostile / Defensively Closed',
    scoreBreakdown: {
      mcp: 0,              // Zero MCP capability
      api: 4,              // Ad-hoc script queries
      dataPortability: 8,  // Fragmented spreadsheet exports
      part11Audit: 5,      // Unvalidated audit logging
      byoAiFreedom: 2      // Fragile internal maintenance burden
    },
    readinessScore: 19,
    opennessGrade: 'F',
    walledGardenAnalysis: 
      'Fragmented internal scripts, Access databases, and custom web portals built a decade ago. Lack structured OpenAPI definitions, authentication federations, or modern agent security wrappers. Sinks hundreds of internal engineering hours without scalability.',
    buyerTakeaway: 
      'Migrate to modern cloud VLMS with open APIs or native MCP before attempting to layer generative AI co-pilots.',
    lastAudited: 'January 2026'
  },
  {
    vendorId: 'sparta-v8-onprem',
    vendorName: 'Sparta TrackWise v8 (On-Prem)',
    product: 'TrackWise v8 Legacy On-Premise',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Legacy on-premise relational database; zero MCP server support. Direct AI agent access is technically infeasible without violating software qualification boundaries.',
    apiOpenness: 'Grade C (Legacy / Restricted SOAP / SQL)',
    apiDetails: 'Legacy SOAP services and direct database views; lacks REST/JSON interfaces or event webhooks.',
    webhooksSupported: false,
    dataPortability: 'Proprietary / PDF Only',
    part11AiAttribution: 'Unsupported',
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Hostile / Defensively Closed',
    scoreBreakdown: {
      mcp: 0,              // Monolithic on-prem architecture
      api: 8,              // Legacy SOAP / SQL views
      dataPortability: 4,  // Proprietary database tables & PDF exports
      part11Audit: 4,      // Not architected for autonomous agent actions
      byoAiFreedom: 0      // Incompatible with modern BYO-AI frameworks
    },
    readinessScore: 16,
    opennessGrade: 'F',
    walledGardenAnalysis: 
      'The classic closed fortress. On-premise relational databases with complex schemas, customized stored procedures, and zero modern REST/MCP interfaces. Direct agent access is technically unfeasible without brittle direct database queries that violate 21 CFR Part 11 software qualification boundaries.',
    buyerTakeaway: 
      'Decommission immediately. Running legacy on-prem TrackWise v8 paralyzes modern AI initiatives and incurs massive ongoing validation overhead.',
    lastAudited: 'January 2026'
  },
  {
    vendorId: 'atlas-csp',
    vendorName: 'Atlas CSP / Compliance-Alliance',
    product: 'Atlas CSV Authoring Suite',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Desktop-era template authoring system; zero live API interfaces or agentic integrations.',
    apiOpenness: 'Grade D (None / Air-Gapped)',
    apiDetails: 'Produces flattened Word and PDF binders; no network endpoints or event triggers.',
    webhooksSupported: false,
    dataPortability: 'Proprietary / PDF Only',
    part11AiAttribution: 'Unsupported',
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    willingnessToOpenData: 'Hostile / Defensively Closed',
    scoreBreakdown: {
      mcp: 0,              // No MCP support
      api: 0,              // No network APIs
      dataPortability: 4,  // Static Word/PDF outputs
      part11Audit: 4,      // Paper/PDF based signatures
      byoAiFreedom: 0      // Completely closed legacy artifact
    },
    readinessScore: 8,
    opennessGrade: 'F',
    walledGardenAnalysis: 
      'Desktop-era protocol authoring tool. Produces static Word and PDF files with zero live API access or agentic capability.',
    buyerTakeaway: 
      'Legacy artifact nearing full obsolescence.',
    lastAudited: 'January 2026'
  },
  {
    vendorId: 'paper-excel-sharepoint',
    vendorName: 'Paper / Excel / SharePoint Validation',
    product: 'Manual Document-Based CSV',
    tier: 4,
    tierLabel: 'Tier 4 — Legacy / Sunsetting',
    category: 'Legacy / Sunset',
    walledGardenPosture: 'Closed Fortress',
    mcpStatus: 'None / Unsupported',
    mcpDetails: 'Physical binders, wet-ink signatures, and disconnected Excel spreadsheets; completely incapable of supporting autonomous AI agent execution.',
    apiOpenness: 'Grade D (None / Air-Gapped)',
    apiDetails: 'Zero programmatic interfaces; connecting AI requires unvalidated OCR scraping that invites FDA 483 inspection citations.',
    webhooksSupported: false,
    dataPortability: 'Proprietary / PDF Only',
    part11AiAttribution: 'Unsupported',
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Included in Base License',
    willingnessToOpenData: 'Hostile / Defensively Closed',
    scoreBreakdown: {
      mcp: 0,              // Complete absence of protocols
      api: 0,              // No APIs
      dataPortability: 2,  // Paper binders / flat PDFs
      part11Audit: 2,      // Wet-ink manual signatures
      byoAiFreedom: 0      // Incompatible with AI automation
    },
    readinessScore: 4,
    opennessGrade: 'F',
    walledGardenAnalysis: 
      'The ultimate analog walled garden: physical binders, scanned wet-ink PDFs, and disconnected Excel trace matrices. Infeasible to connect to autonomous AI agents safely without breaking Part 11 electronic record provenance and risking severe FDA Form 483 warning letters.',
    buyerTakeaway: 
      'Transitioning to CSA on an open paperless platform is an absolute prerequisite before AI can deliver any tangible ROI.',
    lastAudited: 'January 2026'
  }
];

// Helper functions for summary metrics
export function getAiTrackerStats() {
  const total = AI_TRACKER_DATA.length;
  const openCount = AI_TRACKER_DATA.filter(v => v.walledGardenPosture === 'Open Protocol Pioneer').length;
  const mcpShippedCount = AI_TRACKER_DATA.filter(v => v.mcpStatus === 'GA Native MCP Server' || v.mcpStatus === 'Roadmap / In Dev').length;
  const proprietaryMoatCount = AI_TRACKER_DATA.filter(v => v.walledGardenPosture === 'Proprietary AI Moat' || v.walledGardenPosture === 'Closed Fortress').length;
  const avgScore = Math.round(AI_TRACKER_DATA.reduce((acc, curr) => acc + curr.readinessScore, 0) / total);

  return {
    total,
    openCount,
    openPct: Math.round((openCount / total) * 100),
    mcpShippedCount,
    mcpShippedPct: Math.round((mcpShippedCount / total) * 100),
    proprietaryMoatCount,
    proprietaryMoatPct: Math.round((proprietaryMoatCount / total) * 100),
    avgScore
  };
}
