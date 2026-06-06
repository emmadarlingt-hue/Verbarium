const words = [
  // Vol. I — The Present Age
  {
    word: "Promptwright",
    pos: "noun",
    pron: "/ˈprɒm(p)t.raɪt/",
    vol: "I",
    tag: "Work",
    def: "A person skilled in the craft of writing and refining instructions for generative AI systems to produce a reliable, intended result; a professional prompt-maker.",
    etym: "From prompt (n., 14th c., via Latin promptus, 'brought forth, ready') + -wright (Old English wryhta, 'worker, maker'), the agentive suffix of playwright, shipwright and wheelwright.",
    quote: "We hired a promptwright to turn the marketing team's vague briefs into reliable, repeatable AI output.",
    why: "The suffix -wright is already reserved in English for skilled makers, so the word reads as instantly legible and dignified, unlike the clumsy 'prompt engineer'."
  },
  {
    word: "Feedsmith",
    pos: "noun",
    pron: "/ˈfiːd.smɪθ/",
    vol: "I",
    tag: "Work",
    def: "A professional who shapes, curates and tunes algorithmic content feeds — deciding what an audience sees and in what order — for platforms, brands or creators.",
    etym: "From feed (ultimately Old English fēdan, 'to nourish') + -smith (Old English smiþ, 'craftsman'), the maker-suffix of wordsmith and blacksmith.",
    quote: "Every viral channel has a feedsmith behind it, quietly deciding which post goes out at 8am and which gets held back.",
    why: "It gives a single memorable name to a role currently buried under vaguer titles like 'content strategist' or 'growth lead'."
  },
  {
    word: "Aesthlete",
    pos: "noun",
    pron: "/ˈiːs.θliːt/",
    vol: "I",
    tag: "Personalities",
    def: "A person who pursues a curated visual aesthetic with the discipline and single-mindedness of an athlete; one for whom the look of a life is itself the achievement.",
    etym: "A blend of aesthetic (Greek aisthētikos, 'perceptive, sensitive') and athlete (Greek athlētēs, 'competitor for a prize'). The seam falls on a shared 'th'.",
    quote: "She's a total aesthlete — the flat, the wardrobe, even the fridge are colour-matched to her feed.",
    why: "The portmanteau is phonetically smooth and faintly witty — the two traits that help blends survive (cf. brunch, podcast)."
  },
  {
    word: "Tabhoarder",
    pos: "noun",
    pron: "/ˈtæb.hɔː.də/",
    vol: "I",
    tag: "Digital",
    def: "A person who habitually keeps dozens or hundreds of browser tabs open at once, using them as a sprawling external memory and an ever-growing to-do list they never quite clear.",
    etym: "From tab (a clipping of tabulation, adopted for the browser element in the early 2000s) + hoarder (from hoard, Old English hord, 'treasure, store').",
    quote: "My laptop fan screams every afternoon — classic tabhoarder, forty articles open that I swear I'll read tonight.",
    why: "It pins down a near-universal modern behaviour with no concise name, and the 'hoarder' element carries a gentle, affectionate self-recognition."
  },
  {
    word: "Chronoxiety",
    pos: "noun",
    pron: "/ˌkrɒn.ɒɡˈzaɪ.ə.ti/",
    vol: "I",
    tag: "Feelings",
    def: "A persistent, low-grade anxiety about the passage of time — about ageing, falling behind one's expected milestones, or never having enough hours in the day.",
    etym: "A blend of the Greek combining form chrono- (khronos, 'time') and anxiety (Latin anxietas, 'uneasiness').",
    quote: "Turning thirty triggered a wave of chronoxiety — suddenly every unread book felt like a deadline I'd missed.",
    why: "It names a widely felt but under-labelled emotion of the always-on age, riding the momentum of the already-accepted eco-anxiety."
  },
  {
    word: "Hopesick",
    pos: "adjective",
    pron: "/ˈhəʊp.sɪk/",
    vol: "I",
    tag: "Feelings",
    def: "Aching with longing for a hoped-for future that may never arrive; afflicted by a kind of nostalgia aimed forwards rather than back.",
    etym: "From hope (Old English hopa) + -sick (Old English sēoc, 'ill, afflicted'), the suffix of homesick, lovesick and seasick. Where homesick yearns for a place left behind, hopesick yearns for a place not yet reached.",
    quote: "He grew hopesick scrolling property listings, mourning the quiet house he could picture but might never afford.",
    why: "It captures 'anticipatory nostalgia', a feeling much discussed of late but lacking a single elegant term."
  },
  {
    word: "Phantombuzz",
    pos: "noun",
    pron: "/ˈfæn.təm.bʌz/",
    vol: "I",
    tag: "Digital",
    def: "The false sensation that one's phone has just vibrated or chimed with a notification, when in fact it has not.",
    etym: "From phantom (Greek phantasma, 'apparition') + buzz (imitative, of the vibration alert). Condenses the clinical phrase 'phantom vibration syndrome' into a single conversational word.",
    quote: "I felt a phantombuzz in the cinema and checked my pocket — nothing there, of course.",
    why: "Short, vivid words for shared bodily experiences spread fast."
  },
  {
    word: "Skimmery",
    pos: "noun",
    pron: "/ˈskɪm.ər.i/",
    vol: "I",
    tag: "Digital",
    def: "The widespread habit and culture of reading everything at a glance — absorbing headlines, summaries and surfaces while rarely engaging with the substance beneath.",
    etym: "From skim (Middle English skimen, 'to remove from the surface') + -ery, the suffix denoting a practice or condition, as in snobbery, trickery and flummery.",
    quote: "The whole report culture here is pure skimmery — nobody's read past the executive summary in years.",
    why: "The '-ery' suffix productively turns behaviours into named practices, and the word captures a real, much-lamented shift in how attention works online."
  },
  {
    word: "Friendflation",
    pos: "noun",
    pron: "/frɛn(d)ˈfleɪ.ʃən/",
    vol: "I",
    tag: "Social",
    def: "The gradual devaluation of the word 'friend' through overuse — especially online — so that calling someone a friend now signifies far less connection than it once did.",
    etym: "A blend of friend (Old English frēond) and inflation (Latin inflare, 'to blow into'). As the supply of 'friends' balloons, each one buys less genuine intimacy.",
    quote: "Two thousand contacts and no one to call in a crisis — that's friendflation for you.",
    why: "It applies a familiar economic frame to social life — the kind of clever cross-domain metaphor that spreads easily."
  },
  {
    word: "Microcommit",
    pos: "verb",
    pron: "/ˌmaɪ.krəʊ.kəˈmɪt/",
    vol: "I",
    tag: "Social",
    def: "To make the smallest possible gesture that still counts as taking part — a 'like', a tentative 'maybe', a thumbs-up — thereby signalling involvement while risking almost nothing.",
    etym: "From the combining form micro- (Greek mikros, 'small') + commit (Latin committere, 'to join, entrust').",
    quote: "He never RSVPs properly; he just microcommits with a heart emoji and decides on the night.",
    why: "The micro- prefix is highly productive and immediately understood, naming a defining habit of low-stakes digital sociability."
  },

  // Vol. II — Dating
  {
    word: "Crushpect",
    pos: "noun",
    pron: "/ˈkrʌʃ.pɛkt/",
    vol: "II",
    tag: "Dating",
    def: "A person who is at once a crush and a credible romantic prospect — someone you fancy and can actually picture it going somewhere with.",
    etym: "A blend of crush (19th-c. slang, 'an infatuation') and prospect (Latin prospectus, 'a view, an outlook').",
    quote: "He's gone from background crush to full crushpect — I've started checking my phone like it's a job.",
    why: "It pins down the specific, hopeful phase between idle fancying and real pursuit that the vague 'talking stage' never quite names."
  },
  {
    word: "Textpectation",
    pos: "noun",
    pron: "/ˌtɛkst.pɛkˈteɪ.ʃən/",
    vol: "II",
    tag: "Dating",
    def: "The restless, hopeful anxiety of waiting for a reply to a message you've just sent to someone you like.",
    etym: "A blend of text (ultimately Latin textus, 'thing woven') and expectation (Latin expectare, 'to look out for'). The shared '-ext-' lets the two words knit together almost without a seam.",
    quote: "I sent the meme an hour ago and now I'm in full textpectation — phone face-up, sound on.",
    why: "Near-universal among anyone who dates by phone, and the blend is so smooth most people grasp it before it's explained."
  },
  {
    word: "Swipeathy",
    pos: "noun",
    pron: "/swaɪˈpæ.θi/",
    vol: "II",
    tag: "Dating",
    def: "The numbed indifference that sets in after too long on dating apps, when every profile blurs into the next and no one registers as a real person.",
    etym: "A blend of swipe (imitative, for the touchscreen gesture, early 2010s) and apathy (Greek apatheia, 'freedom from feeling').",
    quote: "Three years of apps gave me chronic swipeathy — I can't tell if I'm being picky or just numb.",
    why: "It names the precise emotional cost of app dating that 'burnout' only gestures at."
  },
  {
    word: "Profib",
    pos: "verb",
    pron: "/ˈprəʊ.fɪb/",
    vol: "II",
    tag: "Dating",
    def: "To embellish one's dating profile with small, strategic untruths — shaving off a year, adding an inch, promoting a hobby tried once.",
    etym: "A blend of profile (Italian profilo, 'outline') and fib (18th c., 'a small lie'). Far gentler than 'lie', matching the low-stakes, almost expected nature of the act.",
    quote: "Everyone profibs a little; I just didn't expect 'keen hiker' to mean one damp walk in 2019.",
    why: "It gives a single, non-judgemental word to a behaviour nearly all app users admit to."
  },
  {
    word: "Flagblind",
    pos: "adjective",
    pron: "/ˈflæɡ.blaɪnd/",
    vol: "II",
    tag: "Dating",
    def: "Unable or unwilling to notice the red flags in a partner that are glaringly obvious to everyone else.",
    etym: "From red flag (a danger signal) + -blind (Old English blind), on the model of colour-blind and snow-blind.",
    quote: "Looking back I was completely flagblind — my friends saw it on date one; I needed eight months.",
    why: "'Red flag' is now everyday relationship vocabulary and '-blind' is an intuitive suffix for not-seeing."
  },
  {
    word: "Ickalanche",
    pos: "noun",
    pron: "/ˈɪk.ə.lɑːnʃ/",
    vol: "II",
    tag: "Dating",
    def: "A sudden cascade of small turn-offs that collapses attraction all at once, where one tiny 'ick' dislodges the rest.",
    etym: "A blend of ick (an exclamation of disgust; lately a dating noun for a sudden loss of attraction) and avalanche (French avalanche, ultimately Latin ad vallem, 'to the valley').",
    quote: "He chewed with his mouth open and that was it — total ickalanche, I couldn't unsee anything after.",
    why: "'The ick' is already widely used, and this extends it with a vivid, ready-made metaphor for how attraction can vanish in an instant."
  },
  {
    word: "Closurephobe",
    pos: "noun",
    pron: "/ˈkləʊ.ʒə.fəʊb/",
    vol: "II",
    tag: "Dating",
    def: "A person who ends relationships by quietly withdrawing rather than offering any explanation or proper goodbye.",
    etym: "From closure (in the emotional sense, from Latin claudere, 'to close') + -phobe (Greek phobos, 'fear').",
    quote: "Classic closurephobe — he didn't break up with me so much as gradually stop existing.",
    why: "'Closure' is firmly lodged in the language of modern relationships, and '-phobe' productively turns any avoidance into a character type."
  },
  {
    word: "Rexcycle",
    pos: "verb",
    pron: "/ˈrɛk.saɪ.kəl/",
    vol: "II",
    tag: "Dating",
    def: "To repeatedly get back together with the same former partner, breaking up and reuniting in a loop.",
    etym: "A blend of ex (Latin ex, 'out of, former') and recycle (re- + Greek kuklos, 'circle'). The metaphor casts the on-off romance as something endlessly reprocessed.",
    quote: "They've rexcycled four times now; I've stopped deleting his number because I know how this ends.",
    why: "The on-again-off-again pattern is extremely common and currently described only in clumsy phrases."
  },
  {
    word: "Labelphobe",
    pos: "noun",
    pron: "/ˈleɪ.bəl.fəʊb/",
    vol: "II",
    tag: "Dating",
    def: "Someone who resists ever formally defining a relationship, preferring to keep things permanently undefined.",
    etym: "From label (Old French label, 'a strip, a ribbon') + -phobe (Greek phobos, 'fear'). Pairs naturally with closurephobe.",
    quote: "Two years in and he's still a labelphobe — apparently 'my person' is fine but 'girlfriend' brings him out in hives.",
    why: "'Putting a label on it' is established relationship shorthand, and '-phobe' makes the avoidance a recognisable type."
  },
  {
    word: "Couplecore",
    pos: "noun",
    pron: "/ˈkʌ.pəl.kɔː/",
    vol: "II",
    tag: "Dating",
    def: "The curated online aesthetic of being a couple — the matching outfits, the hard-launch photo dumps, the joint account, all performed for an audience.",
    etym: "From couple (Latin copula, 'a bond') + -core, the aesthetic-naming suffix that spread from hardcore through normcore and cottagecore.",
    quote: "Their feed went full couplecore overnight — matching pyjamas, a shared playlist and a pet they co-parent for the camera.",
    why: "'-core' is one of the most productive suffixes of the moment, instantly signalling 'an aesthetic'."
  },

  // Vol. II — Parenting
  {
    word: "Sleepruptcy",
    pos: "noun",
    pron: "/ˈsliːp.rʌpt.si/",
    vol: "II",
    tag: "Parenting",
    def: "The state of total, unrecoverable sleep debt in the early months of parenthood, when rest is so far in deficit it feels permanent.",
    etym: "A blend of sleep (Old English slǣp) and bankruptcy (Italian banca rotta, 'broken bench'), pushing the familiar idea of 'sleep debt' to its logical, insolvent conclusion.",
    quote: "We're well past sleep debt and into full sleepruptcy — I poured oat milk into the kettle this morning.",
    why: "'Sleep debt' already primes the financial metaphor, so this lands as its natural punchline."
  },
  {
    word: "Cribsomnia",
    pos: "noun",
    pron: "/krɪbˈsɒm.ni.ə/",
    vol: "II",
    tag: "Parenting",
    def: "The inability to sleep caused by lying awake listening for, or compulsively checking on, a sleeping baby.",
    etym: "A blend of crib (Old English cribb, 'manger') and insomnia (Latin in- + somnus, 'sleep').",
    quote: "The baby finally sleeps through; now I have cribsomnia, awake at 3am checking she's still breathing.",
    why: "It names the cruel irony every new parent knows — that even when the baby sleeps, you can't."
  },
  {
    word: "Screensitter",
    pos: "noun",
    pron: "/ˈskriːn.sɪt.ə/",
    vol: "II",
    tag: "Parenting",
    def: "A screen — tablet, phone or television — pressed into service as a stand-in babysitter so a parent can get something done.",
    etym: "From screen (Old French escren, 'a shield'), modelled on babysitter. The coinage swaps the human carer for the device that has quietly taken on the role.",
    quote: "Twenty minutes of screensitter bought me a phone call and a cup of tea I actually drank hot.",
    why: "It captures a slightly guilty but ubiquitous reality in a single honest word."
  },
  {
    word: "Cradlescrolling",
    pos: "verb",
    pron: "/ˈkreɪ.dəl.skrəʊl.ɪŋ/",
    vol: "II",
    tag: "Parenting",
    def: "Scrolling one's phone while feeding or holding a baby — physically present, attention elsewhere.",
    etym: "From cradle (Old English cradol) + scroll (Old French escroe, 'a roll of parchment'). Pairing the oldest image of care with the newest of distraction is the whole point.",
    quote: "I caught myself cradlescrolling through the 5am feed and felt the guilt land before the next post did.",
    why: "It names a habit nearly every smartphone-era parent recognises and half-regrets."
  },
  {
    word: "Bribenting",
    pos: "noun",
    pron: "/braɪˈbɛn.tɪŋ/",
    vol: "II",
    tag: "Parenting",
    def: "A parenting approach that runs largely on bribery and negotiation — sweets for silence, screen time for cooperation.",
    etym: "A blend of bribe (Old French bribe, 'a morsel of bread') and parenting (Latin parere, 'to bring forth').",
    quote: "My discipline philosophy is pure bribenting: I have negotiated peace with a single fruit pastille.",
    why: "It labels the unofficial method most parents resort to but few admit."
  },
  {
    word: "Vibeparenting",
    pos: "noun",
    pron: "/ˈvaɪb.peə.rən.tɪŋ/",
    vol: "II",
    tag: "Parenting",
    def: "Parenting by mood and instinct rather than any consistent rule or routine, where the day's approach depends on how everyone happens to feel.",
    etym: "From vibe (a clipping of vibration, 1960s slang for an atmosphere) + parenting.",
    quote: "Bedtime's 7pm on a structured day and 'whenever' on a vibeparenting one; tonight is firmly the latter.",
    why: "'Vibe' has become a dominant cultural particle, attaching readily to new nouns."
  },
  {
    word: "Snackcession",
    pos: "noun",
    pron: "/snækˈsɛ.ʃən/",
    vol: "II",
    tag: "Parenting",
    def: "The relentless, all-day economy of requesting, negotiating and dispensing children's snacks, which never seems to close.",
    etym: "A blend of snack (Middle Dutch snacken, 'to bite') with both concession and succession — catching at once the constant yielding and the unbroken sequence.",
    quote: "We left the house at nine, the snackcession opened at 9:04, and it has not closed since.",
    why: "Every parent of small children lives inside this economy, yet there's no word for it."
  },
  {
    word: "Carpoolitics",
    pos: "noun",
    pron: "/ˌkɑː.puːˈlɪ.tɪks/",
    vol: "II",
    tag: "Parenting",
    def: "The delicate social diplomacy of arranging, sharing and reciprocating school-run lifts among parents.",
    etym: "A blend of carpool (car + pool, 'a shared resource') and politics (Greek politika, 'the affairs of the city').",
    quote: "The carpoolitics of who drives on Fridays nearly ended a fifteen-year friendship.",
    why: "Words that lend mock-grandeur to mundane negotiations have a long and fond history."
  },
  {
    word: "Parentity",
    pos: "noun",
    pron: "/pəˈrɛn.tɪ.ti/",
    vol: "II",
    tag: "Parenting",
    def: "The way a person's whole sense of self can collapse into the single role of parent, eclipsing who they were before.",
    etym: "A blend of parent and identity (Latin identitas, 'sameness'), the shared '-ent-' fusing them so closely the second word nearly disappears into the first.",
    quote: "Somewhere in year two my parentity took over completely; I introduced myself at a party as 'Theo's mum'.",
    why: "It captures a profound and widely discussed shift — the submersion of the old self in parenthood."
  },
  {
    word: "Mefuge",
    pos: "noun",
    pron: "/ˈmiː.fjuːʒ/",
    vol: "II",
    tag: "Parenting",
    def: "A small, fiercely guarded pocket of time or space reclaimed purely for oneself, treated as a refuge from the demands of family.",
    etym: "A blend of me (Old English mē) and refuge (Latin refugium, 'a place to flee back to').",
    quote: "The locked bathroom is my mefuge — ten minutes and a podcast and I'm almost a person again.",
    why: "A word that hands harried people a name for their small escapes is easy to adopt and share."
  },

  // Vol. II — Socialising
  {
    word: "Plancelled",
    pos: "adjective",
    pron: "/plænˈsɛld/",
    vol: "II",
    tag: "Social",
    def: "Of plans that have been cancelled — especially when the cancellation brings secret relief rather than disappointment.",
    etym: "A blend of plan (Latin planus, 'flat; a drawing') and cancelled (Latin cancellare, 'to cross out').",
    quote: "She texted to call it off and I have never felt so blissfully plancelled — pyjamas by eight.",
    why: "It names a very modern, faintly guilty emotion — the joy of a freed-up evening — that has no existing word."
  },
  {
    word: "RSVPanic",
    pos: "noun",
    pron: "/ˌɑːr.ɛs.viːˈpæ.nɪk/",
    vol: "II",
    tag: "Social",
    def: "The jolt of dread on realising that an event you cheerfully agreed to is now imminent and you must actually attend.",
    etym: "A blend of RSVP (French répondez s'il vous plaît, 'please reply') and panic (Greek panikos, 'of the god Pan').",
    quote: "I said yes weeks ago in a fit of optimism; now it's tomorrow and the RSVPanic has set in.",
    why: "The gap between future-you confidently accepting and present-you regretting it is widely felt and freshly nameable here."
  },
  {
    word: "Phantomingle",
    pos: "verb",
    pron: "/ˈfæn.tə.mɪŋ.ɡəl/",
    vol: "II",
    tag: "Social",
    def: "To drift around a gathering looking purposeful — refilling a drink, studying the bookshelf — to avoid appearing to be standing alone.",
    etym: "A blend of phantom (Greek phantasma, 'apparition') and mingle (Middle English menglen, 'to mix'). The mingling is ghostly: all movement, no actual contact.",
    quote: "I didn't know a soul, so I phantomingled past the snack table four times pretending to look for someone.",
    why: "It names a specific, faintly absurd social manoeuvre almost everyone has performed."
  },
  {
    word: "Exitlag",
    pos: "noun",
    pron: "/ˈɛɡ.zɪt.læɡ/",
    vol: "II",
    tag: "Social",
    def: "The long, drawn-out interval between deciding to leave a social event and actually managing to get out of the door.",
    etym: "From exit (Latin exire, 'to go out') + lag, echoing jet lag — a delay between one state and the next, here measured in goodbyes.",
    quote: "We hit forty minutes of exitlag at the door — coats on, three more conversations, somehow another drink.",
    why: "The impossibility of a quick departure is universal and unnamed in English."
  },
  {
    word: "Chatmnesia",
    pos: "noun",
    pron: "/tʃætˈniː.ʒə/",
    vol: "II",
    tag: "Social",
    def: "The act of reading a message, mentally filing it as dealt with, and then never actually replying.",
    etym: "A blend of chat (imitative, 'idle talk') and amnesia (Greek amnēsia, 'forgetfulness').",
    quote: "Sorry for the chatmnesia — I read it on the lock screen, composed a reply in my head, and that was apparently that.",
    why: "The clinical framing turns rudeness into a forgivable affliction — just the kind of cover people enjoy adopting."
  },
  {
    word: "Reactsponse",
    pos: "noun",
    pron: "/riˈækt.spɒns/",
    vol: "II",
    tag: "Social",
    def: "An emoji reaction — a thumbs-up, a heart, a laughing face — used in place of an actual written reply.",
    etym: "A blend of react (Latin re- + agere, 'to act') and response (Latin respondere, 'to answer back').",
    quote: "He never types back; the most I get is a reactsponse — a single thumbs-up that somehow closes the conversation.",
    why: "Tap-to-react has rewired everyday messaging, and the minimal-effort acknowledgement it enables had no name."
  },
  {
    word: "Hosterics",
    pos: "noun",
    pron: "/hɒˈstɛ.rɪks/",
    vol: "II",
    tag: "Social",
    def: "The frantic, slightly unhinged state a host works themselves into in the final hour before guests arrive.",
    etym: "A blend of host (Latin hospes, 'guest, host') and hysterics (Greek hystera). It captures the comic crescendo of last-minute hoovering, candle-lighting and panic.",
    quote: "Ignore the hosterics — I'll be perfectly calm the moment everyone's here and the oven stops betraying me.",
    why: "Pre-party panic is near-universal and 'stress' describes it too flatly — hosterics is smoother, funnier and carries a built-in note of self-mockery."
  },
  {
    word: "Cringeover",
    pos: "noun",
    pron: "/ˈkrɪndʒ.əʊ.və/",
    vol: "II",
    tag: "Social",
    def: "The morning-after replay of every awkward, over-shared or ill-judged thing you said the night before.",
    etym: "A blend of cringe (Old English cringan, 'to bend, to yield') and hangover. Proposes a second, purely social affliction that can arrive with or without the alcoholic one.",
    quote: "No headache today, just a brutal cringeover about that speech I insisted on giving at 1am.",
    why: "The next-day shame spiral is widely felt and often outlasts any physical hangover, yet has no concise name."
  },
  {
    word: "Friendmin",
    pos: "noun",
    pron: "/ˈfrɛnd.mɪn/",
    vol: "II",
    tag: "Social",
    def: "The ongoing administrative labour of maintaining friendships — replying, scheduling, remembering birthdays, keeping the threads alive.",
    etym: "From friend (Old English frēond) + admin (a clipping of administration, Latin administrare, 'to manage'), on the model of 'life admin'.",
    quote: "I love my friends; it's the friendmin I struggle with — six half-written replies and an invite I keep meaning to send.",
    why: "It names the friendship-shaped portion of life admin — a real, rising tension between caring deeply and being low on bandwidth."
  },
  {
    word: "Lapsemate",
    pos: "noun",
    pron: "/ˈlæps.meɪt/",
    vol: "II",
    tag: "Social",
    def: "A dormant friend with whom you've fallen out of contact but could pick up with instantly and warmly after years apart.",
    etym: "From lapse (Latin lapsus, 'a slip, a fall') + mate (Middle Low German māte, 'companion'). Honours the friendship that has lapsed without ending — paused rather than lost.",
    quote: "We hadn't spoken in five years, but she's a true lapsemate: ten minutes in and it was like no time had passed.",
    why: "It names a genuinely warm, common category of relationship that 'old friend' undersells and 'estranged' overstates."
  }
];

// ── State ──
let activeFilter = 'all';
let expandedWord = null;

// ── Filter logic ──
function getFiltered() {
  const q = document.getElementById('search').value.toLowerCase();
  return words.filter(w => {
    const matchFilter =
      activeFilter === 'all' ||
      w.vol === activeFilter ||
      w.tag === activeFilter;
    const matchSearch =
      !q ||
      w.word.toLowerCase().includes(q) ||
      w.def.toLowerCase().includes(q) ||
      w.tag.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });
}

// ── Render the expanded entry ──
function renderExpanded() {
  const area = document.getElementById('expanded-area');
  if (!expandedWord) {
    area.innerHTML = '';
    return;
  }
  const w = words.find(w => w.word === expandedWord);
  if (!w) return;
  area.innerHTML = `
    <div class="word-expanded">
      <div class="exp-word">${w.word}</div>
      <div class="exp-meta">
        <span class="exp-pos">${w.pos}</span>
        <span class="exp-pron">${w.pron}</span>
        <span class="card-tag">${w.tag} · Vol. ${w.vol}</span>
      </div>
      <div class="exp-section">
        <div class="exp-label">Definition</div>
        <div class="exp-text">${w.def}</div>
      </div>
      <div class="exp-section">
        <div class="exp-label">Etymology</div>
        <div class="exp-text">${w.etym}</div>
      </div>
      <div class="exp-section">
        <div class="exp-label">In context</div>
        <div class="exp-quote">"${w.quote}"</div>
      </div>
      <div class="exp-section">
        <div class="exp-label">Why it could stick</div>
        <div class="exp-why">${w.why}</div>
      </div>
      <button class="exp-close" id="close-btn">Close entry ↑</button>
    </div>
  `;
  document.getElementById('close-btn').addEventListener('click', () => {
    expandedWord = null;
    render();
  });
  area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Render the grid ──
function renderGrid() {
  const filtered = getFiltered();
  const grid = document.getElementById('grid');
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color: var(--ink-light); font-style: italic; padding: 20px;">No words found.</p>';
    return;
  }
  grid.innerHTML = filtered.map(w => `
    <div class="word-card" data-word="${w.word}">
      <div class="card-vol">Vol. ${w.vol} · ${w.tag}</div>
      <div class="card-word">${w.word}</div>
      <div class="card-pos">${w.pos}</div>
      <div class="card-pron">${w.pron}</div>
      <div class="card-def">${w.def}</div>
      <span class="card-tag">${w.tag}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.word-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.dataset.word;
      expandedWord = expandedWord === name ? null : name;
      render();
    });
  });
}

// ── Full render ──
function render() {
  renderExpanded();
  renderGrid();
}

// ── Filter buttons ──
document.querySelectorAll('.vb-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('.vb-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    expandedWord = null;
    render();
  });
});

// ── Search ──
document.getElementById('search').addEventListener('input', () => {
  expandedWord = null;
  render();
});

// ── Go ──
render();