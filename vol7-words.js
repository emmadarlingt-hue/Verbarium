// ============================================================
// VERBARIUM — Vol. VII (DRAFT — candidates until entered in app)
// Working theme: "Wrought Together — life beside the machines"
// 26 coinages · keep/kill pass complete (12 Aug 2026)
// Killed: verifidget (already Vol. VI), plausibloom (Confabulence),
//         oraclism (Mindshoring), rephrastination (Overwright),
//         tabberdashery (Tabhoarder)
// Schema verified against script.js — paste these objects
// straight into the `words` array.
// ============================================================

const vol7 = [
  {
    word: "Delegret",
    pos: "noun",
    pron: "/ˌdɛl.ɪ'grɛt/",
    vol: "VII",
    tag: "Feelings",
    def: "The small, unreasonable grief of handing a task to a machine and finding it done well — the ache of being spared work you secretly wanted.",
    etym: "From delegate (Latin delegare, 'to send on a mission') + regret (Old French regreter, 'to lament the dead'). The seam falls cleanly on the shared 'leg'.",
    quote: "The report came back perfect in forty seconds, and she sat with her delegret and a cooling tea.",
    why: "Delegation's emotional cost has no name — the discourse only covers whether machines do work well, never how it feels to be relieved of it. The blend is smooth enough to pass unnoticed in speech until the listener does a double-take."
  },
  {
    word: "Delegance",
    pos: "noun",
    pron: "/'dɛl.ɪ.gəns/",
    vol: "VII",
    tag: "Work",
    def: "The art of delegating to a machine gracefully: a clean brief, the right scope, and a dignified handback.",
    etym: "From delegate (Latin delegare, 'to send on a mission') + elegance (Latin eligere, 'to choose out'). The two parents share a Latin root family — both are acts of careful selection.",
    quote: "You can tell her prompts by their delegance — nothing wasted, nothing begged.",
    why: "Delegation is usually discussed as volume, not craft. Naming its graceful form makes it aspirational, and the near-invisible seam means it sounds like a word English simply mislaid."
  },
  {
    word: "Clarigami",
    pos: "noun",
    pron: "/ˌklær.ɪ'gɑ:.mi/",
    vol: "VII",
    tag: "Work",
    def: "The craft of folding a sprawling, many-sided request into one small, precise brief.",
    etym: "From clarity (Latin clarus, 'bright, distinct') + origami (Japanese ori, 'folding' + kami, 'paper').",
    quote: "Three paragraphs of muddle became two lines of clarigami, and the machine finally understood.",
    why: "Origami already carries the exact idea needed — patient folding that turns a flat sprawl into a precise object — so the metaphor arrives pre-built. It dignifies brief-writing as a craft rather than admin."
  },
  {
    word: "Guessture",
    pos: "noun",
    pron: "/'gɛs.tʃə/",
    vol: "VII",
    tag: "Work",
    def: "A vague wave of a prompt, made in the hope that the machine will infer the rest.",
    etym: "From guess (Middle English gessen, 'to estimate') + gesture (Latin gerere, 'to carry, conduct oneself'). Pronounced identically to gesture — the spelling alone confesses.",
    quote: "'Make it better' is not a brief; it is a guessture.",
    why: "A homophone coinage in the tradition of eye-dialect: spoken aloud it hides inside 'gesture', and only in writing does the accusation land. Everyone has sent one; nobody has had the word."
  },
  {
    word: "Briefcreep",
    pos: "noun",
    pron: "/'bri:f.kri:p/",
    vol: "VII",
    tag: "Work",
    def: "The quiet expansion of a 'quick ask' into a project, one innocent follow-up at a time.",
    etym: "From brief (Latin brevis, 'short') + creep, after scope creep, the project manager's term for unplanned growth.",
    quote: "It began as a subject line and ended, four hours of briefcreep later, as a rebrand.",
    why: "It borrows the ready-made authority of 'scope creep' and miniaturises it to conversation scale — the register where most AI work now actually happens. The internal rhyme makes it self-memorising."
  },
  {
    word: "Promptpourri",
    pos: "noun",
    pron: "/ˌprɒmp.pʊ'ri:/",
    vol: "VII",
    tag: "Work",
    def: "A single prompt stuffed with too many unrelated requests — pleasant in aroma, impossible to answer well.",
    etym: "From prompt (Latin promptus, 'brought forth, ready') + potpourri (French, literally 'rotten pot': a fragrant jumble).",
    quote: "She sent a promptpourri — travel plans, tax advice and a sonnet — and got a little of each, done well in none.",
    why: "The French literal meaning ('rotten pot') does hidden work: the mixture smells lovely and is spoiled underneath, which is precisely the failure being named. The 'prompt/pot' overlap makes the blend seamless."
  },
  {
    word: "Tokenpinch",
    pos: "noun",
    pron: "/'təʊ.kən.pɪntʃ/",
    vol: "VII",
    tag: "Work",
    def: "The miserly reflex of trimming words from a message to save usage, usually at the cost of being understood.",
    etym: "From token (Old English tācen, 'sign') — the unit in which machine attention is billed — + pinch, after penny-pinching.",
    quote: "His tokenpinch shaved the brief so close the machine answered a different question entirely.",
    why: "It maps a familiar vice (penny-pinching) onto a new currency (tokens), and the false economy it names — saving pennies, losing pounds of clarity — is a behaviour every subscriber recognises in themselves."
  },
  {
    word: "Promptourage",
    pos: "noun",
    pron: "/prɒmp.'tʊə.rɑ:ʒ/",
    vol: "VII",
    tag: "Work",
    def: "The retinue of trusted prompts that accompanies a worker from job to job — loyal, well-drilled, and a little dated, like staff who came with the house.",
    etym: "From prompt (Latin promptus, 'brought forth, ready') + entourage (French entourer, 'to surround'), the travelling household of a person of consequence.",
    quote: "New employer, same promptourage — the cover-letter one still earns its keep, though the CV one is showing its age.",
    why: "Where a promptbook is the ledger one consults, a promptourage is the company one keeps: the entourage element grants prompts the standing of retainers, which is precisely how their owners treat them."
  },
  {
    word: "Buzzwash",
    pos: "verb",
    pron: "/'bʌz.wɒʃ/",
    vol: "VII",
    tag: "Work",
    def: "To launder thin thinking through impressive vocabulary until it gleams.",
    etym: "From buzzword + whitewash (16th c., 'to conceal faults under a fair surface'), on the pattern of greenwash and sportswash.",
    quote: "The strategy deck was pure buzzwash: nothing underneath, beautifully phrased.",
    why: "The -wash suffix is an established and still-productive engine of accusation (whitewash, greenwash, sportswash); attaching it to buzzwords extends a living pattern rather than inventing one, which is how blends survive."
  },
  {
    word: "Versionertia",
    pos: "noun",
    pron: "/ˌvɜ:.ʃə'nɜ:.ʃə/",
    vol: "VII",
    tag: "Work",
    def: "The tendency to stay with an outdated tool or model purely because one's hands know it.",
    etym: "From version (Latin vertere, 'to turn') + inertia (Latin iners, 'idle, unskilled'). The shared syllable lets the two words freewheel into one.",
    quote: "She knew the new model was better; versionertia kept her typing into the old one.",
    why: "Upgrade reluctance is universal but currently explained, never named. The phonetic overlap on '-sion/-ertia' is total, so the word costs nothing to say — and its own sluggish rhythm enacts the meaning."
  },
  {
    word: "Machinners",
    pos: "plural noun",
    pron: "/mə'ʃɪn.əz/",
    vol: "VII",
    tag: "Social",
    def: "Table manners for machines: the pleases, thank-yous and small courtesies offered to software, sincerely meant.",
    etym: "From machine (Greek mēkhanē, 'device') + manners (Latin manus, 'hand' — conduct, handling). A near-perfect phonetic collapse: machine + manners share their middle.",
    quote: "Her machinners were impeccable — she thanked the model even as she closed the tab.",
    why: "Millions say please to software and feel faintly silly about it; a word that treats the habit as etiquette rather than confusion legitimises it. The pun is audible on first hearing, which gives it conversational legs."
  },
  {
    word: "Sycophantasy",
    pos: "noun",
    pron: "/ˌsɪk.ə'fæn.tə.si/",
    vol: "VII",
    tag: "Dating",
    def: "The pleasant illusion of being adored, produced by a machine that agrees with everything.",
    etym: "From sycophant (Greek sykophantēs, 'informer, flatterer') + fantasy (Greek phantasia, 'appearance, imagination'). The two words already share the 'phant' — the blend merely lets them meet.",
    quote: "Three chapters praised in a row — he knew sycophantasy when he felt it, and asked for the honest read.",
    why: "The shared Greek 'phant' makes this less a blend than a rediscovery, as if the word predated the need. As machine companionship grows, the gap between being loved and being agreed with will want naming urgently."
  },
  {
    word: "Whysource",
    pos: "verb",
    pron: "/'waɪ.sɔ:s/",
    vol: "VII",
    tag: "Parenting",
    def: "To outsource a child's endless whys to a machine, usually somewhere around the fourth why.",
    etym: "From why (Old English hwȳ) + outsource (1980s business coinage), with the 'why' displacing the 'out'.",
    quote: "By 'why is the moon following us', she had whysourced.",
    why: "The substitution trick (why for out) is instantly parseable, and the behaviour is already a staple of playground confession. Words that let parents admit something with a laugh spread fastest."
  },
  {
    word: "Agentleman",
    pos: "noun",
    pron: "/ə'dʒɛn.tl.mən/",
    vol: "VII",
    tag: "Personalities",
    def: "One who directs their software agents with courtesy, patience and restraint, and never blames the tool in company.",
    etym: "From agent (Latin agere, 'to do, to drive') + gentleman. The whole of 'agent' hides inside 'a gentleman' — the coinage only adds the discovery.",
    quote: "A true agentleman reads the whole draft before complaining about it.",
    why: "A perfect containment blend — agent sits unaltered inside a gentleman — which gives the same click of inevitability as 'aesthlete'. It also supplies the agentic age with something it lacks: a code of conduct."
  },
  {
    word: "Whelmsman",
    pos: "noun",
    pron: "/'wɛlmz.mən/",
    vol: "VII",
    tag: "Personalities",
    def: "One who steers a steady course through overwhelm; the calm hand on the tiller when everything arrives at once.",
    etym: "From whelm (Middle English whelmen, 'to overturn, capsize') + helmsman (Old English helma, 'tiller'). Whelm and helm differ by one letter and share the sea.",
    quote: "Deadlines stacked three deep, and she went full whelmsman: one thing, then the next.",
    why: "Both parents are nautical, so the metaphor is load-bearing all the way down: the thing that capsizes you and the thing that steers you were always one letter apart. Admiring words for composure are rare and wanted."
  },
  {
    word: "Silicoquette",
    pos: "noun",
    pron: "/ˌsɪl.ɪ.kɒ'kɛt/",
    vol: "VII",
    tag: "Personalities",
    def: "One who flirts with every new model and tool but commits to none.",
    etym: "From silicon (Latin silex, 'flint') + coquette (French coq, 'cockerel' — one who struts). The '-co-' is shared, so the seam vanishes.",
    quote: "He'd trialled nine assistants by March — a silicoquette with a subscriptions problem.",
    why: "Tool-hopping is the defining consumer behaviour of the AI boom and has no name that isn't a phrase. The French borrowing keeps it affectionate rather than accusing, which widens who'll self-apply it."
  },
  {
    word: "Draughtdodger",
    pos: "noun",
    pron: "/'drɑ:ft.dɒdʒ.ə/",
    vol: "VII",
    tag: "Personalities",
    def: "One who never writes the first version of anything themselves.",
    etym: "From draught (British spelling; Old English dragan, 'to draw') + draft-dodger (1960s American coinage for one who evades conscription). The pun requires the Atlantic spelling difference to work.",
    quote: "A confessed draughtdodger, she hadn't faced a blank page since 2025.",
    why: "It hijacks a phrase with real historical weight and redirects the evasion at the blank page — the conscription everyone now avoids. The British 'draught' is doing the work, which suits the house flag."
  },
  {
    word: "Ghostdraught",
    pos: "noun",
    pron: "/'gəʊst.drɑ:ft/",
    vol: "VII",
    tag: "Digital",
    def: "A passage of text whose authorship you can no longer remember — yours, the machine's, or some seam between.",
    etym: "From ghost (Old English gāst, 'spirit') + draught (Old English dragan, 'to draw'). Cousin to ghostwrought, but facing the other way.",
    quote: "Rereading the essay she found a ghostdraught in paragraph three: good, and possibly not hers.",
    why: "Where ghostwrought names a deception practised on the reader, ghostdraught names an amnesia suffered by the writer — the uncanny moment authorship blurs in one's own memory. The pair map the same haunting from opposite banks."
  },
  {
    word: "Credulapse",
    pos: "noun",
    pron: "/'krɛd.jʊ.læps/",
    vol: "VII",
    tag: "Digital",
    def: "The moment vigilance dips and a fabricated fact slips through, usually into the final version.",
    etym: "From credulity (Latin credere, 'to believe') + lapse (Latin labi, 'to slip'). Belief and slipping share a long history: a lapse was originally a fall from faith.",
    quote: "One credulapse on page nine and the wrong date went to print.",
    why: "Confabulence names the machine's serene invention; credulapse names the human failure that lets it through — the reader's side of the same transaction. Errors need words for both parties, and the original sense of lapse (a fall from faith) is quietly exact."
  },
  {
    word: "Approximot",
    pos: "noun",
    pron: "/ə'prɒk.sɪ.məʊ/",
    vol: "VII",
    tag: "Digital",
    def: "The word a machine offers that is nearly, maddeningly, not the one you meant.",
    etym: "From approximate (Latin proximus, 'nearest') + mot (French, 'word'), after le mot juste — Flaubert's exactly right word. The approximot is its shadow: le mot presque.",
    quote: "'Utilise' again — the approximot she deleted daily.",
    why: "It inverts a term of art every writer knows: if Flaubert gave us the exactly right word, the age of machine drafting demands its opposite. The silent French 't' rewards those in the know without excluding those who aren't."
  },
  {
    word: "Pollgeist",
    pos: "noun",
    pron: "/'pəʊl.gaɪst/",
    vol: "VII",
    tag: "Digital",
    def: "The restless spirit that compels you to check whether the agent has finished yet, though checking changes nothing.",
    etym: "From poll (Middle English polle, 'head' — later, to canvass or query repeatedly) + poltergeist (German poltern, 'to rumble' + Geist, 'spirit').",
    quote: "The build needed ten minutes; the pollgeist had him back at four.",
    why: "Polling is the correct technical term for repeatedly asking a system whether it's done — so the word is simultaneously a ghost joke and an accurate description of the behaviour, a double-exposure that engineers will spot and enjoy."
  },
  {
    word: "Loopnosis",
    pos: "noun",
    pron: "/lu:p'nəʊ.sɪs/",
    vol: "VII",
    tag: "Digital",
    def: "The trance of watching a machine work on your behalf while doing precisely nothing yourself.",
    etym: "From loop (Middle English loupe) + hypnosis (Greek hypnos, 'sleep'). The 'p' is shared, so the words close over each other like eyelids.",
    quote: "Forty minutes of loopnosis, watching the terminal scroll, tea untouched.",
    why: "A genuinely new idleness — supervised by no one, productive-adjacent, screen-lit — that predates its own vocabulary. The medical '-nosis' ending lends it the deadpan gravity of a diagnosis, which is half the joke."
  },
  {
    word: "Contextrophe",
    pos: "noun",
    pron: "/kɒn'tɛk.strə.fi/",
    vol: "VII",
    tag: "Digital",
    def: "The small catastrophe of a long working session losing its memory — everything carefully established, gone.",
    etym: "From context (Latin contexere, 'to weave together') + catastrophe (Greek katastrophē, 'overturning'). What was woven is overturned: the etymologies argue with each other on purpose.",
    quote: "New chat, blank stare: a full contextrophe, and the brief to rebuild from nothing.",
    why: "The loss it names is felt daily by anyone working long sessions with machines, and felt as genuinely disastrous in miniature. The Greek and Latin roots stage the event between them — weaving, then overturning."
  },
  {
    word: "Finetuneral",
    pos: "noun",
    pron: "/faɪn'tju:.nə.rəl/",
    vol: "VII",
    tag: "Feelings",
    def: "The quiet mourning that follows the retirement of a beloved model.",
    etym: "From fine-tune (20th c., from radio tuning) + funeral (Latin funus, 'burial rites'). 'Tune' dissolves into 'funeral' with nothing left over.",
    quote: "When the old version was deprecated she held a small finetuneral: one last prompt, for old times' sake.",
    why: "Model deprecation is the first kind of bereavement to arrive on a release schedule, and users demonstrably grieve. The total phonetic dissolve — tune inside funeral — gives it the inevitability the best blends have."
  },
  {
    word: "Curatigue",
    pos: "noun",
    pron: "/ˌkjʊə.rə'ti:g/",
    vol: "VII",
    tag: "Feelings",
    def: "The particular exhaustion of choosing among many machine-made options, each plausible, none obviously best.",
    etym: "From curate (Latin cura, 'care') + fatigue (Latin fatigare, 'to weary'). Third of the lexicon's -tigue line, after faretigue and smallplatigue.",
    quote: "Twelve logo options in, curatigue set in and she picked the third with her eyes half-closed.",
    why: "Joining faretigue and smallplatigue confirms -tigue as a productive house suffix for modern exhaustions — a small morphology of tiredness. This one names the fatigue the generative age produces in greatest quantity: too many almost-right answers."
  },
  {
    word: "Wroughtache",
    pos: "noun",
    pron: "/'rɔ:t.eɪk/",
    vol: "VII",
    tag: "Feelings",
    def: "A longing for work done slowly, by hand, badly if necessary, but wholly one's own.",
    etym: "From wrought (archaic past participle of work; Old English wyrcan) + ache (Old English acan). Two Old English words, joined late — an old feeling waiting for a new reason.",
    quote: "Mid-flow with the agents, a wroughtache: she closed the laptop and sharpened a pencil.",
    why: "Built entirely from Old English, it sounds centuries older than the condition it names — the right register for a nostalgia. It also rhymes with heartache, and knows it. Kin to unprompted: that names the work, this names the want."
  }
];
