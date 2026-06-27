// Auto-generated from atoms-index.md and connections-index.md
// 111 atoms, typed connections from clusters + primary links

const DOMAINS = {
  "Foundation": "#E8C547",
  "Knowledge Work": "#5B8DEF",
  "Biblical Theology": "#C75D5D",
  "Theology": "#C75D5D",
  "Philosophy": "#9B6FD4",
  "Identity": "#4ECDC4",
  "Content & Communication": "#F2994A",
  "Curriculum Design": "#6BCB77",
  "Design": "#FF6B9D",
  "Design / Perception / Mathematics": "#FF6B9D",
  "Knowledge Work / Design": "#5B8DEF",
  "Identity / Knowledge Work": "#4ECDC4",
  "Identity / Biblical Theology": "#4ECDC4",
  "Identity / Content & Communication": "#4ECDC4",
  "Content & Communication / Curriculum Design": "#F2994A",
  "Content & Communication / Biblical Theology": "#F2994A",
  "Content & Communication / Knowledge Work": "#F2994A",
  "Philosophy / Biblical Theology": "#9B6FD4",
  "Philosophy / Content & Communication / Biblical Theology": "#9B6FD4",
  "Design / Biblical Theology / Identity": "#FF6B9D",
  "Epistemology / Visual Art / Design": "#FF6B9D",
  "Art History / Computing / HCI / Philosophy of Technology": "#FF6B9D",
  "HCI / Theology / Daoist Cosmology / Anime Design / Innovation Theory": "#C75D5D",
};

function getDomainColor(domain) {
  return DOMAINS[domain] || "#999";
}

function getPrimaryDomain(domain) {
  // Return the first domain for multi-domain atoms
  return domain.split(" / ")[0];
}

const atoms = [
  { id: 1, title: "Compounding (The 1% Rule)", level: "L2", domain: "Foundation", claim: "Small improvements compound exponentially", primaryLink: 2 },
  { id: 2, title: "Invisible Progress (The Stonecutter)", level: "L2", domain: "Foundation", claim: "Most meaningful progress is invisible until it suddenly isn't", primaryLink: 1 },
  { id: 3, title: "Synthesize, Don't Originate", level: "L2", domain: "Content & Communication", claim: "Best communicators assemble wisdom from multiple fields", primaryLink: 6 },
  { id: 4, title: "Cognitive Architecture", level: "L2", domain: "Knowledge Work", claim: "Design mental lenses that automate perception through ideas", primaryLink: 5 },
  { id: 5, title: "Hebrew as Multi-Dimensional Encoding", level: "L1", domain: "Biblical Theology", claim: "Hebrew encodes concepts through multiple simultaneous dimensions", primaryLink: 4 },
  { id: 6, title: "The Great Conversation", level: "L1", domain: "Philosophy", claim: "All great thinkers across history are in continuous dialogue", primaryLink: 3 },
  { id: 7, title: "The Validation Loop", level: "L2", domain: "Knowledge Work", claim: "AI that checks its own work iterates inside its turn", primaryLink: 1 },
  { id: 8, title: "Context as Finite Resource", level: "L2", domain: "Knowledge Work", claim: "Context window is fixed-size working memory", primaryLink: 7 },
  { id: 9, title: "RAG (Bounded Retrieval)", level: "L1", domain: "Knowledge Work", claim: "Growing knowledge base doesn't require loading all into context", primaryLink: 8 },
  { id: 10, title: "Hybrid AI Architecture", level: "L1", domain: "Knowledge Work", claim: "Route tasks to different AI systems based on privacy and quality", primaryLink: 9 },
  { id: 11, title: "Pharaoh's AI (Extraction Model)", level: "L2", domain: "Identity", claim: "AI treating humans as resources to extract engagement", primaryLink: 12 },
  { id: 12, title: "AI for Human Flourishing", level: "L2", domain: "Identity", claim: "AI optimizing for person's development, not engagement metrics", primaryLink: 11 },
  { id: 13, title: "Paul's Epistemology (Eph 3:18)", level: "L1", domain: "Biblical Theology", claim: "True knowing requires perceiving across four spatial dimensions", primaryLink: 4 },
  { id: 14, title: "Full-Spectrum Epistemology", level: "L2", domain: "Philosophy", claim: "Complete model accounts for invisible dimensions of reality", primaryLink: 13 },
  { id: 15, title: "Knowledge as Nourishment (Manna)", level: "L2", domain: "Curriculum Design", claim: "Small daily portions processed through multiple channels constitute", primaryLink: 1 },
  { id: 16, title: "The Testing Effect", level: "L2", domain: "Knowledge Work", claim: "Retrieval practice is the primary mechanism for lasting learning", primaryLink: 15 },
  { id: 17, title: "Kevin Lin (Self-Study)", level: "L1", domain: "Identity", claim: "Kevin's gap-closing journey across paradigm crossings is strength", primaryLink: 14 },
  { id: 18, title: "The Factory Model", level: "L2", domain: "Curriculum Design", claim: "Modern schooling designed for compliance, not human flourishing", primaryLink: 11 },
  { id: 19, title: "Evolution of Design (Paradigm Arc)", level: "L2", domain: "Knowledge Work", claim: "Design reinvents itself every 15-20 years; throughline unchanged", primaryLink: 18 },
  { id: 20, title: "The Industrial Self", level: "L2", domain: "Identity", claim: "Employment contract is industrial artifact", primaryLink: 18 },
  { id: 21, title: "Trigger Architecture", level: "L2", domain: "Foundation", claim: "Durable behaviors anchor to existing triggers, not schedules", primaryLink: 1 },
  { id: 22, title: "Intent-Driven Experience", level: "L1", domain: "Content & Communication", claim: "Interface quality inversely proportional to gap between intent and outcome", primaryLink: 19 },
  { id: 23, title: "Context-Driven Experience", level: "L2", domain: "Content & Communication", claim: "Context-driven systems deliver what's appropriate, not just intended", primaryLink: 22 },
  { id: 24, title: "Workflow as Design Material", level: "L2", domain: "Knowledge Work", claim: "Your workflow can be designed with same intentionality as products", primaryLink: 1 },
  { id: 25, title: "AI Orchestration (Director's Frame)", level: "L1", domain: "Knowledge Work", claim: "Mastery of AI is shifting from executing to directing systems", primaryLink: 24 },
  { id: 26, title: "Conflict as the Story's Engine", level: "L2", domain: "Content & Communication", claim: "Want colliding with obstacle creates narrative", primaryLink: 27 },
  { id: 27, title: "The 5-Second Moment", level: "L2", domain: "Content & Communication", claim: "Transformation happens in moments, not across plot events", primaryLink: 26 },
  { id: 28, title: "Specificity Is the Universal Key", level: "L2", domain: "Content & Communication", claim: "Specific details create emotional resonance", primaryLink: 29 },
  { id: 29, title: "The Story Is a Promise", level: "L2", domain: "Content & Communication", claim: "Story structure is contracting with the audience for earned resolution", primaryLink: 26 },
  { id: 30, title: "Benign Violation Theory", level: "L2", domain: "Content & Communication", claim: "Humor arises when a violation is benign", primaryLink: 31 },
  { id: 31, title: "Comic Architecture", level: "L2", domain: "Content & Communication", claim: "Setup > Punchline > Tag", primaryLink: 30 },
  { id: 32, title: "Finding Your Comic Voice", level: "L2", domain: "Content & Communication", claim: "Comic voice emerges from defending what matters", primaryLink: 31 },
  { id: 33, title: "The Ark Principle", level: "L2", domain: "Biblical Theology", claim: "Truth that matters must be carried in the body", primaryLink: 34 },
  { id: 34, title: "Fig Leaves (Two Kinds of Covering)", level: "L2", domain: "Biblical Theology", claim: "Shame produces false coverings; Christ produces real covering", primaryLink: 33 },
  { id: 35, title: "The Builder's Anthropology", level: "L2", domain: "Identity", claim: "Human person is maker in image of making God", primaryLink: 34 },
  { id: 36, title: "The Aperture Principle", level: "L2", domain: "Identity", claim: "Who you are determines what you can receive and send", primaryLink: 35 },
  { id: 37, title: "The Transmission Chain", level: "L2", domain: "Content & Communication", claim: "Ideas flow from God through inspired channels", primaryLink: 36 },
  { id: 38, title: "What is Experience? (Tripartite)", level: "L2", domain: "Philosophy", claim: "Experience is environment, person, and meeting between them", primaryLink: 36 },
  { id: 39, title: "AI as Probabilistic Completer", level: "L2", domain: "Knowledge Work", claim: "AI generates next-token predictions; quality comes from context", primaryLink: 40 },
  { id: 40, title: "Language Structure as Signal Quality", level: "L2", domain: "Content & Communication", claim: "Language that shows structure communicates with higher fidelity", primaryLink: 39 },
  { id: 41, title: "The Intention Gap", level: "L2", domain: "Knowledge Work", claim: "Gap between stated intent and outcome is a design opportunity", primaryLink: 40 },
  { id: 42, title: "Examples as Grammar", level: "L2", domain: "Curriculum Design", claim: "Examples teach the grammar of an idea", primaryLink: 40 },
  { id: 43, title: "Implicit vs. Explicit Learning", level: "L2", domain: "Curriculum Design", claim: "Implicit learning builds patterns; explicit builds concepts", primaryLink: 42 },
  { id: 44, title: "The Constitution Trap", level: "L2", domain: "Curriculum Design", claim: "Analyzing constitution prevents constituting", primaryLink: 43 },
  { id: 45, title: "Demand-Driven Foundation Discovery", level: "L2", domain: "Curriculum Design", claim: "Foundations surface when you hit their ceiling in actual work", primaryLink: 44 },
  { id: 46, title: "The Typed Edge Principle", level: "L2", domain: "Philosophy", claim: "Edges between types are where new capabilities emerge", primaryLink: 45 },
  { id: 47, title: "Knowledge/Skill Isomorphism", level: "L2", domain: "Knowledge Work", claim: "Knowledge and skill have identical structure", primaryLink: 46 },
  { id: 48, title: "AI as Capability Expansion", level: "L2", domain: "Knowledge Work", claim: "AI extends human capability by running specific dimensions at scale", primaryLink: 47 },
  { id: 49, title: "The Impossible Wall", level: "L3", domain: "Philosophy", claim: "Encounter with reality precedes belief", primaryLink: 50 },
  { id: 50, title: "The Mastery Gap", level: "L2", domain: "Knowledge Work", claim: "Producing output and understanding mechanism are independent", primaryLink: 49 },
  { id: 51, title: "The Orchestration Principle", level: "L2", domain: "Knowledge Work", claim: "Orchestration of specialists replaces traditional specialization", primaryLink: 50 },
  { id: 52, title: "Skin in the Game", level: "L2", domain: "Philosophy", claim: "Humans outperform systems when they bear consequences", primaryLink: 51 },
  { id: 53, title: "Mirror vs. Teacher", level: "L2", domain: "Identity", claim: "Mirror reflects what is; Teacher shapes what could be", primaryLink: 52 },
  { id: 54, title: "Interface Downstream of Person", level: "L2", domain: "Identity", claim: "What dimension you inhabit determines interface possibilities", primaryLink: 53 },
  { id: 55, title: "Four Modes of Human-AI Collaboration", level: "L2", domain: "Knowledge Work", claim: "AI collaborates as tool, partner, delegate, or extension", primaryLink: 54 },
  { id: 56, title: "The Grain of Reality", level: "L2", domain: "Philosophy", claim: "Reality has texture and direction; building against the grain fails", primaryLink: 55 },
  { id: 57, title: "Hebrew Epistemic Sequence", level: "L2", domain: "Biblical Theology", claim: "Hebrew knowing moves from da'at through binah to chokhmah", primaryLink: 13 },
  { id: 58, title: "Personified Wisdom", level: "L2", domain: "Curriculum Design", claim: "Wisdom embodied in narrative is more formative than abstract principle", primaryLink: 57 },
  { id: 59, title: "The Innovation Salon", level: "L2", domain: "Identity", claim: "Innovation emerges from collision between well-developed frameworks", primaryLink: 58 },
  { id: 60, title: "Melakhah: The Execution Faculty", level: "L2", domain: "Biblical Theology", claim: "Melakhah is the craftsman faculty for making", primaryLink: 57 },
  { id: 61, title: "Mussar and Tokhecha", level: "L2", domain: "Identity", claim: "Correction is intrinsic to formation, not external punishment", primaryLink: 60 },
  { id: 62, title: "The Materialization Gap", level: "L2", domain: "Identity", claim: "Gap between vision and material reality is where craft lives", primaryLink: 61 },
  { id: 63, title: "Kapar: Atonement as Purification", level: "L2", domain: "Biblical Theology", claim: "Kapar means to cover/purge; atonement purges the sanctuary", primaryLink: 62 },
  { id: 64, title: "Kelayot: The Innermost Self", level: "L2", domain: "Biblical Theology", claim: "Kelayot is the deepest seat of knowing and authentic will", primaryLink: 63 },
  { id: 65, title: "Kadosh: Holiness as Separation", level: "L2", domain: "Biblical Theology", claim: "Holiness means separated for purpose, not mere moral purity", primaryLink: 64 },
  { id: 66, title: "The Five Levitical Offerings", level: "L2", domain: "Biblical Theology", claim: "Five offerings encode Christ's reality and believer's response", primaryLink: 65 },
  { id: 67, title: "The Query Ceiling", level: "L2", domain: "Knowledge Work", claim: "Search conditioning creates a false ceiling on AI capability", primaryLink: 51 },
  { id: 68, title: "Trust Scoped to Blast Radius", level: "L2", domain: "Philosophy", claim: "Trust proportional to consequences of betrayal", primaryLink: 52 },
  { id: 69, title: "High Agency", level: "L1", domain: "Identity", claim: "Agency is the only skill AI cannot replace", primaryLink: 18 },
  { id: 70, title: "Context Engineering (Vault Principle)", level: "L1", domain: "Knowledge Work", claim: "AI quality determined by context quality", primaryLink: 8 },
  { id: 71, title: "Proficiency Over Passion", level: "L1", domain: "Identity", claim: "Interests start you, proficiency sustains you", primaryLink: 1 },
  { id: 72, title: "Inverse Incentive (Restraint as Trust)", level: "L1", domain: "Identity", claim: "Acting against short-term gain produces permanent loyalty", primaryLink: 52 },
  { id: 73, title: "The Architecture of Passivity", level: "L2", domain: "Identity", claim: "Passivity has four structural sources with specific antidotes", primaryLink: 69 },
  { id: 74, title: "The Default Mode Network", level: "L1", domain: "Knowledge Work", claim: "The brain's resting state is colonized by passive media", primaryLink: 73 },
  { id: 75, title: "The Living Knowledge Web", level: "L2", domain: "Knowledge Work", claim: "Every reference deserves its own node", primaryLink: 57 },
  { id: 76, title: "The Voice Document", level: "L2", domain: "Content & Communication", claim: "Before AI can represent you, write the beliefs only you hold", primaryLink: 67 },
  { id: 77, title: "The Research-First Doctrine", level: "L1", domain: "Content & Communication", claim: "Find what works, deconstruct, apply your ingredients", primaryLink: 78 },
  { id: 78, title: "Research as Avoidance", level: "L2", domain: "Identity", claim: "Research is the most socially acceptable procrastination", primaryLink: 49 },
  { id: 79, title: "The Miracle of the Mundane", level: "L1", domain: "Design", claim: "The sacred is not absent from ordinary life - it is invisible", primaryLink: 13 },
  { id: 80, title: "The Commitment Gate", level: "L1", domain: "Knowledge Work", claim: "Human's irreplaceable role is the commitment gate", primaryLink: 52 },
  { id: 81, title: "Chokhmah and Da'at Partnership", level: "L1", domain: "Knowledge Work", claim: "AI holds breadth, human holds depth of being", primaryLink: 57 },
  { id: 82, title: "Scientific Spectacles", level: "L2", domain: "Philosophy", claim: "Abstract reasoning is trained cognitive OS, not innate intelligence", primaryLink: 4 },
  { id: 83, title: "The Bookie's Toolkit", level: "L1", domain: "Knowledge Work", claim: "Fermi estimation and probabilistic thinking are trainable", primaryLink: 82 },
  { id: 84, title: "The New Creation Reversal", level: "L2", domain: "Theology", claim: "In new creation, holiness becomes contagious", primaryLink: 63 },
  { id: 85, title: "The Wound as Graft Point", level: "L2", domain: "Theology", claim: "The wound is the mechanism of union, not the obstacle", primaryLink: 84 },
  { id: 86, title: "The Problem Articulacy Halo", level: "L1", domain: "Philosophy", claim: "Precise diagnosis transfers unearned trust to the prescriber", primaryLink: 52 },
  { id: 87, title: "Binah: Understanding as Between-Space", level: "L1", domain: "Philosophy", claim: "Understanding requires standing between things", primaryLink: 57 },
  { id: 88, title: "The Falsifiability Threshold", level: "L1", domain: "Philosophy", claim: "A framework explaining any outcome is a story, not a theory", primaryLink: 49 },
  { id: 89, title: "Design Control (Specification Principle)", level: "L2", domain: "Knowledge Work", claim: "AI output quality bounded by spec specificity", primaryLink: 39 },
  { id: 90, title: "Perception Is Ratio-Sensitive", level: "L2", domain: "Design", claim: "The brain reads ratio not absolute distance", primaryLink: 1 },
  { id: 91, title: "Shape of Capability (Altitude Range)", level: "L1", domain: "Identity", claim: "Value measured by altitude range, not just breadth or depth", primaryLink: 92 },
  { id: 92, title: "The Ascending Abstraction Ladder", level: "L1", domain: "Knowledge Work", claim: "As AI executes more, the human interface layer ascends", primaryLink: 91 },
  { id: 93, title: "Composable Primitives", level: "L1", domain: "Design", claim: "The simpler the core set, the richer the emergent complexity", primaryLink: 89 },
  { id: 94, title: "Legibility as Power", level: "L1", domain: "Content & Communication", claim: "Taste without legibility is invisible", primaryLink: 40 },
  { id: 95, title: "Machloket: Structured Disagreement", level: "L1", domain: "Philosophy", claim: "Preserving competing views creates richer epistemic environment", primaryLink: 57 },
  { id: 96, title: "Formation-Execution Reversal", level: "L1", domain: "Knowledge Work", claim: "Formation ascends; execution descends the same ladder", primaryLink: 57 },
  { id: 97, title: "The Rootedness of Authenticity", level: "L1", domain: "Identity", claim: "Security in Father's view collapses public/private gap", primaryLink: 34 },
  { id: 98, title: "Contextual Adjacency", level: "L1", domain: "Identity", claim: "Your context cluster is judged before you speak", primaryLink: 76 },
  { id: 99, title: "The Single Spine", level: "L1", domain: "Identity", claim: "Creative body unified by one animating problem", primaryLink: 76 },
  { id: 100, title: "Data as Sacramental Lens", level: "L1", domain: "Design", claim: "Aesthetic rendering of personal data makes the sacred visible", primaryLink: 79 },
  { id: 101, title: "Proseuchomai: Prayer as Orientation", level: "L2", domain: "Biblical Theology", claim: "Prayer is directional consecration, not functional activity", primaryLink: 102 },
  { id: 102, title: "The Prayer-Vector", level: "L2", domain: "Biblical Theology", claim: "Prayer is dynamic motion - man entering God while God enters man", primaryLink: 101 },
  { id: 103, title: "The House of Prayer", level: "L2", domain: "Biblical Theology", claim: "House of prayer names a kind of person, not activity", primaryLink: 101 },
  { id: 104, title: "The Masterpiece Principle (Poiema)", level: "L2", domain: "Philosophy", claim: "Masterpiece is irreversible fusion of genuinely independent elements", primaryLink: 85 },
  { id: 105, title: "The Dual Frequency Principle", level: "L1", domain: "Content & Communication", claim: "Best content broadcasts on two nested frequencies", primaryLink: 36 },
  { id: 106, title: "The Hidden Layer Principle", level: "L1", domain: "Content & Communication", claim: "Most durable content embeds meaning that rewards return", primaryLink: 29 },
  { id: 107, title: "The Cliche Gradient", level: "L2", domain: "Content & Communication", claim: "Your first ideas are everyone's ideas; originality begins past the fifth attempt", primaryLink: 28 },
  { id: 108, title: "Character as Crucible", level: "L2", domain: "Content & Communication", claim: "Character revealed through opposition, not description", primaryLink: 26 },
  { id: 109, title: "The Symbol Trap", level: "L3", domain: "Epistemology / Visual Art / Design", claim: "The mind compresses reality into cached symbols", primaryLink: 56 },
  { id: 110, title: "The Dimensionality Ladder", level: "L2", domain: "Art History / Computing / HCI / Philosophy of Technology", claim: "Every medium restores a dimension the previous stripped away", primaryLink: 109 },
  { id: 111, title: "The Intelligent Dimension", level: "L2", domain: "HCI / Theology / Daoist Cosmology / Anime Design / Innovation Theory", claim: "Intelligence is the meta-dimension; death-resurrection is structural", primaryLink: 110 },
];

// Clusters from connections-index.md — these create edges between atoms in the same cluster
const clusters = [
  { name: "Compounding Systems", atoms: [1, 2, 4] },
  { name: "Multi-Dimensional Encoding", atoms: [4, 5] },
  { name: "Cognitive Processing Triad", atoms: [4, 5, 6] },
  { name: "The Synthesizer's Path", atoms: [3, 6] },
  { name: "AI as Sustainable Infrastructure", atoms: [7, 8, 9, 10] },
  { name: "Two Visions of AI", atoms: [11, 12] },
  { name: "Multi-Dimensional Knowing", atoms: [4, 5, 13] },
  { name: "The Complete Model", atoms: [13, 14, 11, 12] },
  { name: "The Constitution System", atoms: [1, 2, 4, 11, 12, 15] },
  { name: "Master Storytelling", atoms: [26, 27, 28, 29, 107, 108] },
  { name: "Humor Mechanics", atoms: [30, 31, 32] },
  { name: "Story and Humor Share a Root", atoms: [26, 27, 28, 30, 31] },
  { name: "The Builder's Responsibility", atoms: [33, 34, 35, 36, 11, 12, 14, 37] },
  { name: "The Functional Substitute", atoms: [33, 34, 37, 11] },
  { name: "Communication Theory of AI", atoms: [39, 40, 41, 42] },
  { name: "Language as Signal", atoms: [5, 39, 40] },
  { name: "Input Design Full Stack", atoms: [8, 39, 40, 41, 42] },
  { name: "Constitution Full Stack", atoms: [1, 15, 16, 43, 44] },
  { name: "Learning Navigation Sequence", atoms: [45, 46, 47] },
  { name: "Navigation + Constitution", atoms: [45, 46, 47, 16, 43, 44] },
  { name: "AI Paradigm Shift", atoms: [48, 49, 50, 51, 52] },
  { name: "What AI Cannot Replicate", atoms: [33, 49, 52] },
  { name: "From Output to Mastery", atoms: [50, 43, 44, 47, 51] },
  { name: "The Dimension OS", atoms: [54, 53, 55] },
  { name: "The Mirror Problem", atoms: [53, 11, 44] },
  { name: "Grain Pair", atoms: [56, 39] },
  { name: "Hebrew Wisdom + AI Formation", atoms: [56, 57, 58] },
  { name: "Leviticus Core Quartet", atoms: [63, 64, 65, 66] },
  { name: "Hebrew Anthropology", atoms: [64, 57, 65] },
  { name: "Query Ceiling Behavioral Root", atoms: [67, 41, 48, 55, 62, 25] },
  { name: "Query Ceiling Paradigm Transition", atoms: [67, 19, 49, 48] },
  { name: "Surgical Metaphor", atoms: [65, 57, 50, 62] },
  { name: "Creation Principle Triad", atoms: [104, 105, 106] },
  { name: "Masterpiece as Restoration", atoms: [104, 85, 84, 46, 79] },
  { name: "Layered Signal Chain", atoms: [105, 106, 36, 37, 5] },
  { name: "Originality Stack", atoms: [107, 28, 59, 76, 99] },
  { name: "Character Formation Triad", atoms: [108, 49, 61] },
];

// Build edges: primary links + cluster connections (deduplicated)
function buildEdges() {
  const edgeSet = new Set();
  const edges = [];

  function addEdge(source, target, type) {
    const key = `${Math.min(source, target)}-${Math.max(source, target)}`;
    if (!edgeSet.has(key)) {
      edgeSet.add(key);
      edges.push({ source, target, type });
    }
  }

  // Primary links
  atoms.forEach(a => {
    if (a.primaryLink) addEdge(a.id, a.primaryLink, "primary");
  });

  // Cluster connections (connect adjacent atoms in cluster)
  clusters.forEach(c => {
    for (let i = 0; i < c.atoms.length; i++) {
      for (let j = i + 1; j < c.atoms.length; j++) {
        addEdge(c.atoms[i], c.atoms[j], "cluster");
      }
    }
  });

  return edges;
}

const edges = buildEdges();

// Level to numeric value
function levelToNum(level) {
  return parseInt(level.replace("L", ""));
}

// Export for use
if (typeof module !== "undefined") module.exports = { atoms, edges, clusters, DOMAINS, getDomainColor, getPrimaryDomain, levelToNum };
