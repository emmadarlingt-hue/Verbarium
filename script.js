const words = [
  {
    word: "Promptwright",
    pos: "noun",
    pron: "/'prɒm(p)t.raɪt/",
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
    pron: "/'fi:d.smɪθ/",
    vol: "I",
    tag: "Work",
    def: "A professional who shapes, curates and tunes algorithmic content feeds -- deciding what an audience sees and in what order -- for platforms, brands or creators.",
    etym: "From feed (ultimately Old English fedan, 'to nourish') + -smith (Old English smɪθ, 'craftsman'), the maker-suffix of wordsmith and blacksmith.",
    quote: "Every viral channel has a feedsmith behind it, quietly deciding which post goes out at 8am and which gets held back.",
    why: "It gives a single memorable name to a role currently buried under vaguer titles like 'content strategist' or 'growth lead'."
  },
  {
    word: "Aesthlete",
    pos: "noun",
    pron: "/'i:s.θli:t/",
    vol: "I",
    tag: "Personalities",
    def: "A person who pursues a curated visual aesthetic with the discipline and single-mindedness of an athlete; one for whom the look of a life is itself the achievement.",
    etym: "A blend of aesthetic (Greek aisthētikos, 'perceptive, sensitive') and athlete (Greek athlētes, 'competitor for a prize'). The seam falls on a shared 'th'.",
    quote: "She's a total aesthlete -- the flat, the wardrobe, even the fridge are colour-matched to her feed.",
    why: "The portmanteau is phonetically smooth and faintly witty -- the two traits that help blends survive (cf. brunch, podcast)."
  },
  {
    word: "Tabhoarder",
    pos: "noun",
    pron: "/'tæb.hɔ:.də/",
    vol: "I",
    tag: "Digital",
    def: "A person who habitually keeps dozens or hundreds of browser tabs open at once, using them as a sprawling external memory and an ever-growing to-do list they never quite clear.",
    etym: "From tab (a clipping of tabulation, adopted for the browser element in the early 2000s) + hoarder (from hoard, Old English hord, 'treasure, store').",
    quote: "My laptop fan screams every afternoon -- classic tabhoarder, forty articles open that I swear I'll read tonight.",
    why: "It pins down a near-universal modern behaviour with no concise name, and the 'hoarder' element carries a gentle, affectionate self-recognition."
  },
  {
    word: "Chronoxiety",
    pos: "noun",
    pron: "/krɒn.ɒg'zaɪ.ə.ti/",
    vol: "I",
    tag: "Feelings",
    def: "A persistent, low-grade anxiety about the passage of time -- about ageing, falling behind one's expected milestones, or never having enough hours in the day.",
    etym: "A blend of the Greek combining form chrono- (khronos, 'time') and anxiety (Latin anxietas, 'uneasiness').",
    quote: "Turning thirty triggered a wave of chronoxiety -- suddenly every unread book felt like a deadline I'd missed.",
    why: "It names a widely felt but under-labelled emotion of the always-on age, riding the momentum of the already-accepted eco-anxiety."
  },
  {
    word: "Hopesick",
    pos: "adjective",
    pron: "/'həʊp.sɪk/",
    vol: "I",
    tag: "Feelings",
    def: "Aching with longing for a hoped-for future that may never arrive; afflicted by a kind of nostalgia aimed forwards rather than back.",
    etym: "From hope (Old English hopa) + -sick (Old English seoc, 'ill, afflicted'), the suffix of homesick, lovesick and seasick. Where homesick yearns for a place left behind, hopesick yearns for a place not yet reached.",
    quote: "He grew hopesick scrolling property listings, mourning the quiet house he could picture but might never afford.",
    why: "It captures 'anticipatory nostalgia', a feeling much discussed of late but lacking a single elegant term."
  },
  {
    word: "Phantombuzz",
    pos: "noun",
    pron: "/'fæn.təm.bʌz/",
    vol: "I",
    tag: "Digital",
    def: "The false sensation that one's phone has just vibrated or chimed with a notification, when in fact it has not.",
    etym: "From phantom (Greek phantasma, 'apparition') + buzz (imitative, of the vibration alert). Condenses the clinical phrase 'phantom vibration syndrome' into a single conversational word.",
    quote: "I felt a phantombuzz in the cinema and checked my pocket -- nothing there, of course.",
    why: "Short, vivid words for shared bodily experiences spread fast."
  },
  {
    word: "Skimmery",
    pos: "noun",
    pron: "/'skɪm.ər.i/",
    vol: "I",
    tag: "Digital",
    def: "The widespread habit and culture of reading everything at a glance -- absorbing headlines, summaries and surfaces while rarely engaging with the substance beneath.",
    etym: "From skim (Middle English skimen, 'to remove from the surface') + -ery, the suffix denoting a practice or condition, as in snobbery, trickery and flummery.",
    quote: "The whole report culture here is pure skimmery -- nobody's read past the executive summary in years.",
    why: "The '-ery' suffix productively turns behaviours into named practices, and the word captures a real, much-lamented shift in how attention works online."
  },
  {
    word: "Friendflation",
    pos: "noun",
    pron: "/frɛn(d)'fleɪ.ʃən/",
    vol: "I",
    tag: "Social",
    def: "The gradual devaluation of the word 'friend' through overuse -- especially online -- so that calling someone a friend now signifies far less connection than it once did.",
    etym: "A blend of friend (Old English freond) and inflation (Latin inflare, 'to blow into'). As the supply of 'friends' balloons, each one buys less genuine intimacy.",
    quote: "Two thousand contacts and no one to call in a crisis -- that's friendflation for you.",
    why: "It applies a familiar economic frame to social life -- the kind of clever cross-domain metaphor that spreads easily."
  },
  {
    word: "Microcommit",
    pos: "verb",
    pron: "/maɪ.krəʊ.kə'mɪt/",
    vol: "I",
    tag: "Social",
    def: "To make the smallest possible gesture that still counts as taking part -- a 'like', a tentative 'maybe', a thumbs-up -- thereby signalling involvement while risking almost nothing.",
    etym: "From the combining form micro- (Greek mikros, 'small') + commit (Latin committere, 'to join, entrust').",
    quote: "He never RSVPs properly; he just microcommits with a heart emoji and decides on the night.",
    why: "The micro- prefix is highly productive and immediately understood, naming a defining habit of low-stakes digital sociability."
  },
  {
    word: "Crushpect",
    pos: "noun",
    pron: "/'krʌʃ.pɛkt/",
    vol: "II",
    tag: "Dating",
    def: "A person who is at once a crush and a credible romantic prospect -- someone you fancy and can actually picture it going somewhere with.",
    etym: "A blend of crush (19th-c. slang, 'an infatuation') and prospect (Latin prospectus, 'a view, an outlook').",
    quote: "He's gone from background crush to full crushpect -- I've started checking my phone like it's a job.",
    why: "It pins down the specific, hopeful phase between idle fancying and real pursuit that the vague 'talking stage' never quite names."
  },
  {
    word: "Textpectation",
    pos: "noun",
    pron: "/tɛkst.pɛk'teɪ.ʃən/",
    vol: "II",
    tag: "Dating",
    def: "The restless, hopeful anxiety of waiting for a reply to a message you've just sent to someone you like.",
    etym: "A blend of text (ultimately Latin textus, 'thing woven') and expectation (Latin expectare, 'to look out for'). The shared '-ext-' lets the two words knit together almost without a seam.",
    quote: "I sent the meme an hour ago and now I'm in full textpectation -- phone face-up, sound on.",
    why: "Near-universal among anyone who dates by phone, and the blend is so smooth most people grasp it before it's explained."
  },
  {
    word: "Swipeathy",
    pos: "noun",
    pron: "/swaɪ'pæ.θi/",
    vol: "II",
    tag: "Dating",
    def: "The numbed indifference that sets in after too long on dating apps, when every profile blurs into the next and no one registers as a real person.",
    etym: "A blend of swipe (imitative, for the touchscreen gesture, early 2010s) and apathy (Greek apatheia, 'freedom from feeling').",
    quote: "Three years of apps gave me chronic swipeathy -- I can't tell if I'm being picky or just numb.",
    why: "It names the precise emotional cost of app dating that 'burnout' only gestures at."
  },
  {
    word: "Profib",
    pos: "verb",
    pron: "/'prəʊ.fɪb/",
    vol: "II",
    tag: "Dating",
    def: "To embellish one's dating profile with small, strategic untruths -- shaving off a year, adding an inch, promoting a hobby tried once.",
    etym: "A blend of profile (Italian profilo, 'outline') and fib (18th c., 'a small lie'). Far gentler than 'lie', matching the low-stakes, almost expected nature of the act.",
    quote: "Everyone profibs a little; I just didn't expect 'keen hiker' to mean one damp walk in 2019.",
    why: "It gives a single, non-judgemental word to a behaviour nearly all app users admit to."
  },
  {
    word: "Flagblind",
    pos: "adjective",
    pron: "/'flæg.blaɪnd/",
    vol: "II",
    tag: "Dating",
    def: "Unable or unwilling to notice the red flags in a partner that are glaringly obvious to everyone else.",
    etym: "From red flag (a danger signal) + -blind (Old English blind), on the model of colour-blind and snow-blind.",
    quote: "Looking back I was completely flagblind -- my friends saw it on date one; I needed eight months.",
    why: "'Red flag' is now everyday relationship vocabulary and '-blind' is an intuitive suffix for not-seeing."
  },
  {
    word: "Ickalanche",
    pos: "noun",
    pron: "/'ɪk.ə.lɑ:nʃ/",
    vol: "II",
    tag: "Dating",
    def: "A sudden cascade of small turn-offs that collapses attraction all at once, where one tiny 'ick' dislodges the rest.",
    etym: "A blend of ick (an exclamation of disgust; lately a dating noun for a sudden loss of attraction) and avalanche (French avalanche, ultimately Latin ad vallem, 'to the valley').",
    quote: "He chewed with his mouth open and that was it -- total ickalanche, I couldn't unsee anything after.",
    why: "'The ick' is already widely used, and this extends it with a vivid, ready-made metaphor for how attraction can vanish in an instant."
  },
  {
    word: "Closurephobe",
    pos: "noun",
    pron: "/'kləʊ.ʒə.fəʊb/",
    vol: "II",
    tag: "Dating",
    def: "A person who ends relationships by quietly withdrawing rather than offering any explanation or proper goodbye.",
    etym: "From closure (in the emotional sense, from Latin claudere, 'to close') + -phobe (Greek phobos, 'fear').",
    quote: "Classic closurephobe -- he didn't break up with me so much as gradually stop existing.",
    why: "'Closure' is firmly lodged in the language of modern relationships, and '-phobe' productively turns any avoidance into a character type."
  },
  {
    word: "Rexcycle",
    pos: "verb",
    pron: "/'rɛk.saɪ.kəl/",
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
    pron: "/'leɪ.bəl.fəʊb/",
    vol: "II",
    tag: "Dating",
    def: "Someone who resists ever formally defining a relationship, preferring to keep things permanently undefined.",
    etym: "From label (Old French label, 'a strip, a ribbon') + -phobe (Greek phobos, 'fear'). Pairs naturally with closurephobe.",
    quote: "Two years in and he's still a labelphobe -- apparently 'my person' is fine but 'girlfriend' brings him out in hives.",
    why: "'Putting a label on it' is established relationship shorthand, and '-phobe' makes the avoidance a recognisable type."
  },
  {
    word: "Couplecore",
    pos: "noun",
    pron: "/'kʌ.pəl.kɔ:/",
    vol: "II",
    tag: "Dating",
    def: "The curated online aesthetic of being a couple -- the matching outfits, the hard-launch photo dumps, the joint account, all performed for an audience.",
    etym: "From couple (Latin copula, 'a bond') + -core, the aesthetic-naming suffix that spread from hardcore through normcore and cottagecore.",
    quote: "Their feed went full couplecore overnight -- matching pyjamas, a shared playlist and a pet they co-parent for the camera.",
    why: "'-core' is one of the most productive suffixes of the moment, instantly signalling 'an aesthetic'."
  },
  {
    word: "Sleepruptcy",
    pos: "noun",
    pron: "/'sli:p.rʌpt.si/",
    vol: "II",
    tag: "Parenting",
    def: "The state of total, unrecoverable sleep debt in the early months of parenthood, when rest is so far in deficit it feels permanent.",
    etym: "A blend of sleep (Old English slæp) and bankruptcy (Italian banca rotta, 'broken bench'), pushing the familiar idea of 'sleep debt' to its logical, insolvent conclusion.",
    quote: "We're well past sleep debt and into full sleepruptcy -- I poured oat milk into the kettle this morning.",
    why: "'Sleep debt' already primes the financial metaphor, so this lands as its natural punchline."
  },
  {
    word: "Cribsomnia",
    pos: "noun",
    pron: "/krɪb'sɒm.ni.ə/",
    vol: "II",
    tag: "Parenting",
    def: "The inability to sleep caused by lying awake listening for, or compulsively checking on, a sleeping baby.",
    etym: "A blend of crib (Old English cribb, 'manger') and insomnia (Latin in- + somnus, 'sleep').",
    quote: "The baby finally sleeps through; now I have cribsomnia, awake at 3am checking she's still breathing.",
    why: "It names the cruel irony every new parent knows -- that even when the baby sleeps, you can't."
  },
  {
    word: "Screensitter",
    pos: "noun",
    pron: "/'skri:n.sɪt.ə/",
    vol: "II",
    tag: "Parenting",
    def: "A screen -- tablet, phone or television -- pressed into service as a stand-in babysitter so a parent can get something done.",
    etym: "From screen (Old French escren, 'a shield'), modelled on babysitter. The coinage swaps the human carer for the device that has quietly taken on the role.",
    quote: "Twenty minutes of screensitter bought me a phone call and a cup of tea I actually drank hot.",
    why: "It captures a slightly guilty but ubiquitous reality in a single honest word."
  },
  {
    word: "Cradlescrolling",
    pos: "verb",
    pron: "/'kreɪ.dəl.skrəʊl.ɪŋ/",
    vol: "II",
    tag: "Parenting",
    def: "Scrolling one's phone while feeding or holding a baby -- physically present, attention elsewhere.",
    etym: "From cradle (Old English cradol) + scroll (Old French escroe, 'a roll of parchment'). Pairing the oldest image of care with the newest of distraction is the whole point.",
    quote: "I caught myself cradlescrolling through the 5am feed and felt the guilt land before the next post did.",
    why: "It names a habit nearly every smartphone-era parent recognises and half-regrets."
  },
  {
    word: "Bribenting",
    pos: "noun",
    pron: "/braɪ'bɛn.tɪŋ/",
    vol: "II",
    tag: "Parenting",
    def: "A parenting approach that runs largely on bribery and negotiation -- sweets for silence, screen time for cooperation.",
    etym: "A blend of bribe (Old French bribe, 'a morsel of bread') and parenting (Latin parere, 'to bring forth').",
    quote: "My discipline philosophy is pure bribenting: I have negotiated peace with a single fruit pastille.",
    why: "It labels the unofficial method most parents resort to but few admit."
  },
  {
    word: "Vibeparenting",
    pos: "noun",
    pron: "/'vaɪb.peə.rən.tɪŋ/",
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
    pron: "/snæk'sɛ.ʃən/",
    vol: "II",
    tag: "Parenting",
    def: "The relentless, all-day economy of requesting, negotiating and dispensing children's snacks, which never seems to close.",
    etym: "A blend of snack (Middle Dutch snacken, 'to bite') with both concession and succession -- catching at once the constant yielding and the unbroken sequence.",
    quote: "We left the house at nine, the snackcession opened at 9:04, and it has not closed since.",
    why: "Every parent of small children lives inside this economy, yet there's no word for it."
  },
  {
    word: "Carpoolitics",
    pos: "noun",
    pron: "/kɑ:.pu:'lɪ.tɪks/",
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
    pron: "/pə'rɛn.tɪ.ti/",
    vol: "II",
    tag: "Parenting",
    def: "The way a person's whole sense of self can collapse into the single role of parent, eclipsing who they were before.",
    etym: "A blend of parent and identity (Latin identitas, 'sameness'), the shared '-ent-' fusing them so closely the second word nearly disappears into the first.",
    quote: "Somewhere in year two my parentity took over completely; I introduced myself at a party as 'Theo's mum'.",
    why: "It captures a profound and widely discussed shift -- the submersion of the old self in parenthood."
  },
  {
    word: "Mefuge",
    pos: "noun",
    pron: "/'mi:.fjuːʒ/",
    vol: "II",
    tag: "Parenting",
    def: "A small, fiercely guarded pocket of time or space reclaimed purely for oneself, treated as a refuge from the demands of family.",
    etym: "A blend of me (Old English me) and refuge (Latin refugium, 'a place to flee back to').",
    quote: "The locked bathroom is my mefuge -- ten minutes and a podcast and I'm almost a person again.",
    why: "A word that hands harried people a name for their small escapes is easy to adopt and share."
  },
  {
    word: "Plancelled",
    pos: "adjective",
    pron: "/plæn'sɛld/",
    vol: "II",
    tag: "Social",
    def: "Of plans that have been cancelled -- especially when the cancellation brings secret relief rather than disappointment.",
    etym: "A blend of plan (Latin planus, 'flat; a drawing') and cancelled (Latin cancellare, 'to cross out').",
    quote: "She texted to call it off and I have never felt so blissfully plancelled -- pyjamas by eight.",
    why: "It names a very modern, faintly guilty emotion -- the joy of a freed-up evening -- that has no existing word."
  },
  {
    word: "RSVPanic",
    pos: "noun",
    pron: "/ɑ:r.ɛs.vi:'pæ.nɪk/",
    vol: "II",
    tag: "Social",
    def: "The jolt of dread on realising that an event you cheerfully agreed to is now imminent and you must actually attend.",
    etym: "A blend of RSVP (French repondez s'il vous plait, 'please reply') and panic (Greek panikos, 'of the god Pan').",
    quote: "I said yes weeks ago in a fit of optimism; now it's tomorrow and the RSVPanic has set in.",
    why: "The gap between future-you confidently accepting and present-you regretting it is widely felt and freshly nameable here."
  },
  {
    word: "Phantomingle",
    pos: "verb",
    pron: "/'fæn.tə.mɪŋ.gəl/",
    vol: "II",
    tag: "Social",
    def: "To drift around a gathering looking purposeful -- refilling a drink, studying the bookshelf -- to avoid appearing to be standing alone.",
    etym: "A blend of phantom (Greek phantasma, 'apparition') and mingle (Middle English menglen, 'to mix'). The mingling is ghostly: all movement, no actual contact.",
    quote: "I didn't know a soul, so I phantomingled past the snack table four times pretending to look for someone.",
    why: "It names a specific, faintly absurd social manoeuvre almost everyone has performed."
  },
  {
    word: "Exitlag",
    pos: "noun",
    pron: "/'ɛg.zɪt.læg/",
    vol: "II",
    tag: "Social",
    def: "The long, drawn-out interval between deciding to leave a social event and actually managing to get out of the door.",
    etym: "From exit (Latin exire, 'to go out') + lag, echoing jet lag -- a delay between one state and the next, here measured in goodbyes.",
    quote: "We hit forty minutes of exitlag at the door -- coats on, three more conversations, somehow another drink.",
    why: "The impossibility of a quick departure is universal and unnamed in English."
  },
  {
    word: "Chatmnesia",
    pos: "noun",
    pron: "/tʃæt'ni:.ʒə/",
    vol: "II",
    tag: "Social",
    def: "The act of reading a message, mentally filing it as dealt with, and then never actually replying.",
    etym: "A blend of chat (imitative, 'idle talk') and amnesia (Greek amnesia, 'forgetfulness').",
    quote: "Sorry for the chatmnesia -- I read it on the lock screen, composed a reply in my head, and that was apparently that.",
    why: "The clinical framing turns rudeness into a forgivable affliction -- just the kind of cover people enjoy adopting."
  },
  {
    word: "Reactsponse",
    pos: "noun",
    pron: "/ri'ækt.spɒns/",
    vol: "II",
    tag: "Social",
    def: "An emoji reaction -- a thumbs-up, a heart, a laughing face -- used in place of an actual written reply.",
    etym: "A blend of react (Latin re- + agere, 'to act') and response (Latin respondere, 'to answer back').",
    quote: "He never types back; the most I get is a reactsponse -- a single thumbs-up that somehow closes the conversation.",
    why: "Tap-to-react has rewired everyday messaging, and the minimal-effort acknowledgement it enables had no name."
  },
  {
    word: "Hosterics",
    pos: "noun",
    pron: "/hɒ'stɛ.rɪks/",
    vol: "II",
    tag: "Social",
    def: "The frantic, slightly unhinged state a host works themselves into in the final hour before guests arrive.",
    etym: "A blend of host (Latin hospes, 'guest, host') and hysterics (Greek hystera). It captures the comic crescendo of last-minute hoovering, candle-lighting and panic.",
    quote: "Ignore the hosterics -- I'll be perfectly calm the moment everyone's here and the oven stops betraying me.",
    why: "Pre-party panic is near-universal and 'stress' describes it too flatly -- hosterics is smoother, funnier and carries a built-in note of self-mockery."
  },
  {
    word: "Cringeover",
    pos: "noun",
    pron: "/'krɪndʒ.əʊ.və/",
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
    pron: "/'frɛnd.mɪn/",
    vol: "II",
    tag: "Social",
    def: "The ongoing administrative labour of maintaining friendships -- replying, scheduling, remembering birthdays, keeping the threads alive.",
    etym: "From friend (Old English freond) + admin (a clipping of administration, Latin administrare, 'to manage'), on the model of 'life admin'.",
    quote: "I love my friends; it's the friendmin I struggle with -- six half-written replies and an invite I keep meaning to send.",
    why: "It names the friendship-shaped portion of life admin -- a real, rising tension between caring deeply and being low on bandwidth."
  },
  {
    word: "Lapsemate",
    pos: "noun",
    pron: "/'læps.meɪt/",
    vol: "II",
    tag: "Social",
    def: "A dormant friend with whom you've fallen out of contact but could pick up with instantly and warmly after years apart.",
    etym: "From lapse (Latin lapsus, 'a slip, a fall') + mate (Middle Low German mate, 'companion'). Honours the friendship that has lapsed without ending -- paused rather than lost.",
    quote: "We hadn't spoken in five years, but she's a true lapsemate: ten minutes in and it was like no time had passed.",
    why: "It names a genuinely warm, common category of relationship that 'old friend' undersells and 'estranged' overstates."
  },
  {
    word: "Gymnesia",
    pos: "noun",
    pron: "/dʒɪmˈniːʒə/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The convenient forgetting of an unused gym membership, sustained without effort until the renewal charge abruptly restores one's memory.",
    etym: "A blend of gym (a clipping of gymnasium, Greek gymnasion, 'place of exercise') and amnesia (Greek amnēsia, 'forgetfulness'). The two words fuse on a shared 'm', so the seam all but disappears.",
    quote: "Pure gymnesia — I hadn't thought about that membership in eight months until the bank kindly reminded me.",
    why: "The blend is phonetically smooth and reads instantly, and it names a near-universal financial-emotional dodge with no concise term."
  },
  {
    word: "Reppertoire",
    pos: "noun",
    pron: "/ˈrɛp.ə.twɑː/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The small, fixed set of exercises a person performs indefinitely, never once adding a new movement to the rotation.",
    etym: "From rep (a clipping of repetition, gym shorthand) + repertoire (French, 'a stock of works a performer is ready to give'). The words overlap on 'rep', letting the pun ride an existing term almost intact.",
    quote: "His reppertoire is three machines and a mournful lap of the mats, unchanged since 2019.",
    why: "Because it leans on a word people already know, the joke lands on first hearing."
  },
  {
    word: "Mirrorist",
    pos: "noun",
    pron: "/ˈmɪr.ər.ɪst/",
    vol: "III",
    tag: "Body & Wellness",
    def: "One who trains chiefly for the mirror angle and the temporary pump, rather than for any strength that survives leaving the room.",
    etym: "From mirror (via Old French mirour, ultimately Latin mirari, 'to wonder at, admire') + -ist, the agentive suffix of devotees and practitioners.",
    quote: "Every gym has its mirrorists, curling dumbbells directly into their own adoring gaze.",
    why: "The -ist suffix productively names types and devotees, so the word explains itself."
  },
  {
    word: "Cardiocrite",
    pos: "noun",
    pron: "/ˈkɑː.di.əʊ.krɪt/",
    vol: "III",
    tag: "Body & Wellness",
    def: "One who loudly preaches the gospel of cardiovascular exercise while conspicuously never doing any.",
    etym: "A blend of cardio (Greek kardia, 'heart') and hypocrite (Greek hypokritēs, 'stage actor, pretender'). The rhythm of hypocrite survives the fusion, so the accusation is audible in the word itself.",
    quote: "Classic cardiocrite — lectured me on zone-two for an hour, then drove to the shop two doors down.",
    why: "It names an instantly recognisable preacher-type, and the -crite ending carries the original's sting without needing to be explained."
  },
  {
    word: "Januaerobics",
    pos: "noun",
    pron: "/ˌdʒæn.ju.ɛəˈrəʊ.bɪks/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The annual surge of gym attendance every January that has thinned to almost nothing by the middle of February.",
    etym: "From January (Latin Januarius, the month of Janus, god of beginnings) + aerobics (Greek aēr, 'air' + bios, 'life').",
    quote: "The 6am class is heaving with januaerobics; give it a fortnight and it'll be me and one other ghost.",
    why: "It gives resolution culture's clockwork rise-and-fall a single name, and the Janus etymology is an unusually neat gift for a coinage."
  },
  {
    word: "Cleansiety",
    pos: "noun",
    pron: "/klɛnˈzaɪ.ə.ti/",
    vol: "III",
    tag: "Body & Wellness",
    def: "A low, persistent worry that one is not eating clean enough — a worry curiously immune to how clean one is actually eating.",
    etym: "From clean (Old English clǣne, 'pure') + anxiety (Latin anxietas, 'uneasiness').",
    quote: "One slice of supermarket cake and the cleansiety kicked in like I'd swallowed a car battery.",
    why: "It rides an already-accepted suffix and names the self-renewing treadmill of dietary virtue."
  },
  {
    word: "Kalevinist",
    pos: "noun",
    pron: "/keɪlˈvɪn.ɪst/",
    vol: "III",
    tag: "Body & Wellness",
    def: "One who treats dietary virtue as a stern moral doctrine, complete with guilt, abstinence and the quiet certainty of the elect.",
    etym: "A blend of kale (Latin caulis, 'cabbage, stem') and Calvinist (a follower of John Calvin, whose creed prized discipline and self-denial).",
    quote: "Don't bring a tiramisu to a kalevinist's dinner; you'll be tried for heresy by the cheese course.",
    why: "It maps the unmistakable religiosity of clean eating onto an actual stern theology, and the pun rewards a second's thought."
  },
  {
    word: "Snackrifice",
    pos: "noun",
    pron: "/ˈsnæk.rɪ.faɪs/",
    vol: "III",
    tag: "Body & Wellness",
    def: "A small treat given up chiefly for the moral glow the renunciation provides, rather than for any real dietary need.",
    etym: "From snack (Middle Dutch snacken, 'to bite, snap') + sacrifice (Latin sacrificium, 'an offering to a deity').",
    quote: "Skipping the office doughnut was less hunger management than snackrifice — I needed everyone to see the halo.",
    why: "It names the small performances of self-denial that fill the modern diet."
  },
  {
    word: "Fadwagon",
    pos: "noun",
    pron: "/ˈfæd.wæɡ.ən/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The latest diet trend that everyone clambers aboard at once — and, just as reliably, abandons in unison.",
    etym: "A blend of fad (19th c., 'a passing craze') and bandwagon (originally the literal wagon carrying a parade band, later 'a popular cause one joins for momentum').",
    quote: "We're all on the fadwagon this month — half the office is fasting and the other half won't shut up about seed oils.",
    why: "Bandwagon is already idiomatic, so the coinage is legible on first hearing."
  },
  {
    word: "Detoxic",
    pos: "adjective",
    pron: "/diːˈtɒk.sɪk/",
    vol: "III",
    tag: "Body & Wellness",
    def: "Self-righteous and faintly insufferable in the specific manner of someone three days into a juice cleanse.",
    etym: "From detox (a clipping of detoxify) + toxic (Greek toxikon, 'poison for arrows'). The irony is built into the seam: the would-be purifier becomes the poison in the room.",
    quote: "She went fully detoxic at brunch — narrated every ingredient she was flushing while the rest of us just ordered.",
    why: "The self-cancelling logic — a detox that is itself toxic — is the entire joke, compressed into one word."
  },
  {
    word: "Optimystic",
    pos: "noun",
    pron: "/ˌɒp.tɪˈmɪs.tɪk/",
    vol: "III",
    tag: "Body & Wellness",
    def: "One who holds a near-religious faith in supplements, protocols and marginal gains, on evidence that is mostly vibes.",
    etym: "A blend of optimise (Latin optimus, 'best') and mystic (Greek mystikos, 'of the hidden mysteries'), with a sly third reading of optimistic.",
    quote: "Our resident optimystic takes eleven capsules at breakfast and credits all of them, equally, for a good night's sleep.",
    why: "Three readings — optimise, mystic, optimistic — are folded into four syllables."
  },
  {
    word: "Holistican",
    pos: "noun",
    pron: "/həˈlɪs.tɪ.kən/",
    vol: "III",
    tag: "Body & Wellness",
    def: "A self-appointed authority on holistic health, dispensing diagnoses and protocols with no qualification beyond conviction.",
    etym: "From holistic (Greek holos, 'whole') + -ician, the suffix of clinician and technician — borrowed here entirely without the training those titles imply.",
    quote: "Ask the office holistican about your headache and you'll leave with a tongue-scraper and a lecture on your liver.",
    why: "The -ician ending smuggles in an air of false authority, which is precisely the satire."
  },
  {
    word: "Mortabolism",
    pos: "noun",
    pron: "/mɔːˈtæb.ə.lɪz.əm/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The creeping, midlife dread that one's metabolism is not merely slowing but mortal — proof that the temple keeps closing hours.",
    etym: "A blend of mortality (Latin mors, 'death') and metabolism (Greek metabolē, 'change').",
    quote: "Turning forty brought a wave of mortabolism: the same lunch I'd always had, suddenly a lifelong commitment.",
    why: "It puts a name to a real and dreaded turn, with dry gravity."
  },
  {
    word: "Biohacktivist",
    pos: "noun",
    pron: "/ˌbaɪ.əʊˈhæk.tɪ.vɪst/",
    vol: "III",
    tag: "Body & Wellness",
    def: "An evangelist for relentless self-optimisation, who treats their own body as both laboratory and pulpit.",
    etym: "From biohacking (do-it-yourself biology and self-experimentation) + activist (Latin actus, 'a doing'). The fusion adds missionary zeal to what was already a practice.",
    quote: "The biohacktivist cornered me by the kettle to explain how cold showers had restructured his entire personality.",
    why: "It names the proselytising tier of the optimisation crowd, distinct from the merely curious."
  },
  {
    word: "Saunactimony",
    pos: "noun",
    pron: "/ˌsɔː.nəkˈtɪ.mə.ni/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The quiet, radiant smugness of the recovery-obsessed — the person whose plunges, saunas and protocols somehow become everyone else's problem.",
    etym: "A blend of sauna (Finnish, 'bath-house') and sanctimony (Latin sanctimonia, 'holiness, sanctity').",
    quote: "He radiated saunactimony from the cold-plunge queue, pitying us mortals who merely slept.",
    why: "It names a very current strain of smugness with real precision."
  },
  {
    word: "Spreadsweat",
    pos: "noun",
    pron: "/ˈsprɛd.swɛt/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The meticulously kept workout spreadsheet, tended with rather more devotion than the workouts it is meant to record.",
    etym: "A blend of spreadsheet (1960s) and sweat (Old English swǣtan). The labour quietly migrates from the body to the cells.",
    quote: "His spreadsweat is immaculate — conditional formatting, twelve tabs, and a deadlift PR from last March he hasn't matched since.",
    why: "It names the quiet substitution of admin for exertion — a very modern self-deception."
  },
  {
    word: "Vanitrack",
    pos: "verb",
    pron: "/ˈvæn.ɪ.træk/",
    vol: "III",
    tag: "Body & Wellness",
    def: "To log fitness data not in order to improve but in order to admire it; to treat one's metrics as a mirror.",
    etym: "From vanity (Latin vanitas, 'emptiness') + track (Old French trac, 'a trail').",
    quote: "I don't train, exactly — I vanitrack. I just like watching the little graph go up.",
    why: "It pins the precise gap between measuring and improving."
  },
  {
    word: "Stepputation",
    pos: "noun",
    pron: "/ˌstɛp.pjʊˈteɪ.ʃən/",
    vol: "III",
    tag: "Body & Wellness",
    def: "Social standing measured in one's daily step count, and defended as fiercely as any good name.",
    etym: "A blend of step (Old English stæpe) and reputation (Latin reputatio, 'a reckoning, a counting-up').",
    quote: "She'll pace the kitchen at 11pm to protect her stepputation; ten thousand, or the day is a write-off.",
    why: "It names the strange moral weight we have loaded onto an arbitrary round number."
  },
  {
    word: "Stravassment",
    pos: "noun",
    pron: "/strəˈvæs.mənt/",
    vol: "III",
    tag: "Body & Wellness",
    def: "The self-imposed obligation to post every workout publicly — and the low dread that an unlogged run did not, in some sense, really happen.",
    etym: "A blend of Strava (the fitness-tracking app, from Swedish sträva, 'to strive') and harassment (Old French harasser, 'to harry, torment').",
    quote: "Half the reason I finished the run was stravassment; an unposted 10k is a tree falling in an empty forest.",
    why: "It names a genuine compulsion of tracked-fitness culture in a single sardonic noun."
  },
  {
    word: "Quantiflex",
    pos: "verb",
    pron: "/ˈkwɒn.tɪ.flɛks/",
    vol: "III",
    tag: "Body & Wellness",
    def: "To show off one's fitness through quantified data — splits, zones, VO₂ max — as a humble-bragging substitute for simply saying one is fit.",
    etym: "A blend of quantify (Latin quantus, 'how much') and flex (in the colloquial sense 'to show off'). The data becomes the new bicep.",
    quote: "He couldn't just say the run went well; he had to quantiflex his entire heart-rate chart across the group thread.",
    why: "It captures the move from showing the body to showing the dashboard."
  },
  {
    word: "Faretigue",
    pos: "noun",
    pron: "/ˈfɛə.tiːɡ/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The weariness that sets in from comparing the same journey's price across endless tabs, apps and booking sites, never sure you've found the lowest fare.",
    etym: "A blend of fare (Old English fær, 'journey, passage') and fatigue (French fatigue, from Latin fatigare, 'to weary').",
    quote: "Three hours and forty tabs in, faretigue won — I booked the first flight I'd seen and shut the laptop.",
    why: "It names an ordeal nearly every traveller now endures but has no word for."
  },
  {
    word: "Packrastinate",
    pos: "verb",
    pron: "/ˌpækˈræs.tɪ.neɪt/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "To put off packing for a trip until the last possible moment, then assemble a suitcase in a single panicked sweep.",
    etym: "A blend of pack (Middle Dutch pak, 'bundle') and procrastinate (Latin procrastinare, 'to defer until tomorrow').",
    quote: "I always swear I'll pack the night before, then packrastinate until the taxi's already outside.",
    why: "The host word procrastinate is universally understood, so the coinage reads instantly."
  },
  {
    word: "Layoverwhelm",
    pos: "noun",
    pron: "/ˈleɪ.əʊ.və.welm/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The dull, deflating sense of having too much empty time and too little to do during a long airport layover.",
    etym: "From layover (a stopover between flights) and overwhelm (Middle English, 'to overturn, submerge'). The words overlap on a shared 'over'.",
    quote: "Six hours in Doha with every shop shut for the night — pure layoverwhelm.",
    why: "It captures a very specific modern limbo in a single word."
  },
  {
    word: "Confirmania",
    pos: "noun",
    pron: "/ˌkɒn.fəˈmeɪ.ni.ə/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The compulsion to reopen a booking confirmation again and again, checking that the flight, room or table really is reserved.",
    etym: "From confirm (Latin confirmare, 'to make firm') + -mania (Greek mania, 'madness, frenzy').",
    quote: "She refreshed the airline app for the tenth time before breakfast — textbook confirmania.",
    why: "-mania is a long-productive English suffix for compulsions, so the word self-explains."
  },
  {
    word: "Reluctourist",
    pos: "noun",
    pron: "/rɪˈlʌk.tʊə.rɪst/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "A person travelling chiefly because someone else wanted to, whose happiest moment of any trip is returning to the hotel.",
    etym: "A blend of reluctant (Latin reluctari, 'to struggle against') and tourist (from tour, ultimately Greek tornos, 'a turn').",
    quote: "My dad's the family reluctourist — dragged round three cathedrals, asking after each one whether we could go and sit down.",
    why: "It pins down a familiar travelling companion with wry affection."
  },
  {
    word: "Itinerati",
    pos: "noun",
    pron: "/ɪˌtɪn.əˈrɑː.ti/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "Travellers who plan every hour of a trip in advance, scheduling out any room for spontaneity; the class of compulsive itinerary-makers.",
    etym: "A blend of itinerary (Latin itinerarium, 'an account of a journey') and the -ati of literati and glitterati, which marks a self-regarding in-group.",
    quote: "Travel with the itinerati and you'll find even the coffee stops are colour-coded in a shared spreadsheet.",
    why: "It borrows the established, faintly mocking -ati frame to name a recognisable personality."
  },
  {
    word: "Comfortourist",
    pos: "noun",
    pron: "/ˈkʌm.fəˌtʊə.rɪst/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "A traveller who journeys a great distance only to seek out the exact food, routines and comforts of home.",
    etym: "A blend of comfort (Latin confortare, 'to strengthen') and tourist.",
    quote: "Two weeks in Vietnam and the comfortourist found an English breakfast every single morning.",
    why: "It names a gently mockable but extremely common type."
  },
  {
    word: "Returnatic",
    pos: "noun",
    pron: "/rɪˈtɜː.næt.ɪk/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "A traveller whose favourite part of any trip is the journey home; one quietly happiest when a holiday is ending.",
    etym: "From return (Old French retorner) + -atic, abstracted from fanatic and lunatic, a suffix marking a person defined by a single fixation.",
    quote: "Don't mistake him for a homebody — he loves to travel, he's just a returnatic who lives for the descent into his own airport.",
    why: "It captures an under-named but widely felt truth about travel."
  },
  {
    word: "Splitiquette",
    pos: "noun",
    pron: "/splɪˈtɪk.ɪt/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The delicate, often unspoken etiquette of dividing a restaurant bill among a group.",
    etym: "A blend of split (Middle Dutch splitten, 'to cleave') and etiquette (French étiquette, 'label, ticket of conduct').",
    quote: "The meal was lovely; the splitiquette afterwards nearly ended the friendship.",
    why: "It names one of dining's most reliably awkward moments."
  },
  {
    word: "Ordervy",
    pos: "noun",
    pron: "/ˈɔː.də.vi/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The pang of regret on seeing a fellow diner's dish arrive and wishing you had ordered it instead.",
    etym: "A blend of order (Latin ordinare, 'to arrange') and envy (Latin invidia, 'ill-will, grudging'), with a faint echo of the French hors d'œuvre.",
    quote: "One look at his risotto and the ordervy hit — I'd chosen the salad and instantly regretted my life.",
    why: "It crystallises a tiny, universal restaurant emotion in a single sayable word."
  },
  {
    word: "Smallplatigue",
    pos: "noun",
    pron: "/ˌsmɔːl.pləˈtiːɡ/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The weariness brought on by a menu of small plates for sharing that never quite amount to a satisfying meal.",
    etym: "From small plates (the sharing-menu format) and fatigue (Latin fatigare, 'to weary').",
    quote: "Four small plates each and we still left hungry — chronic smallplatigue, and a bill the size of a mortgage.",
    why: "It hands critics and diners a tidy noun for a much-grumbled-about restaurant trend."
  },
  {
    word: "Tipxiety",
    pos: "noun",
    pron: "/tɪpˈzaɪ.ə.ti/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The flicker of panic at the card machine over how much to tip, and whether the amount on offer is too mean or too much.",
    etym: "A blend of tip (the gratuity) and anxiety (Latin anxietas, 'uneasiness'), on the model of chronoxiety.",
    quote: "The waiter hovered, the screen offered 18%, 22% or 25%, and a wave of tipxiety took hold.",
    why: "It rides the well-established -xiety wave and names a freshly modern discomfort."
  },
  {
    word: "Hostrich",
    pos: "noun",
    pron: "/ˈhɒs.trɪtʃ/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "A host who copes with mounting kitchen disaster by serenely insisting to guests that everything is completely under control.",
    etym: "A blend of host (Latin hospes) and ostrich, invoking the bird's apocryphal habit of burying its head in the sand.",
    quote: "Smoke pouring from the oven, the hostrich topped up the wine and announced dinner would be just five more minutes.",
    why: "It marries a vivid, centuries-old idiom to a precise social type."
  },
  {
    word: "Timingmare",
    pos: "noun",
    pron: "/ˈtaɪ.mɪŋ.meə/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The host's central ordeal of getting every dish to be ready, and hot, at the same moment.",
    etym: "A blend of timing (from time, Old English tīma) and nightmare (Old English mære, a malevolent spirit thought to bring bad dreams).",
    quote: "The roast was perfect but the potatoes weren't done — every Sunday lunch is the same timingmare.",
    why: "It names the single hardest part of cooking for others in one resonant word."
  },
  {
    word: "Overcater",
    pos: "verb",
    pron: "/ˌəʊ.vəˈkeɪ.tə/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "To prepare conspicuously too much food for guests, driven by the fear that there might not be enough.",
    etym: "From over- (Old English ofer, 'beyond, excessively') + cater (Anglo-French acater, 'to buy provisions').",
    quote: "She'd invited six and cooked for sixteen — she overcaters every time, then sends everyone home with foil parcels.",
    why: "It is so transparently built from familiar parts that it needs no explanation."
  },
  {
    word: "Hostmortem",
    pos: "noun",
    pron: "/ˌhəʊstˈmɔː.təm/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The debrief between hosts after the guests have gone, dissecting how the evening went — who said what, what ran out, what to do differently.",
    etym: "A blend of host and post-mortem (Latin post mortem, 'after death'). The shared -ost- lets host displace post almost invisibly.",
    quote: "Door barely shut, we poured the last of the wine and began the hostmortem: too few chairs, too much cheese.",
    why: "It applies a familiar figurative frame to a specific, beloved domestic ritual."
  },
  {
    word: "Helpfeint",
    pos: "noun",
    pron: "/ˈhelp.feɪnt/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "A guest's ritual offer to help clear up or wash dishes, made in the confident hope that the host will refuse it.",
    etym: "From help (Old English helpan) + feint (French feinte, 'a pretence'), a mock movement designed to deceive, as in fencing or boxing.",
    quote: "He made the usual helpfeint towards the sink, was duly waved back to his seat, and returned to his wine with visible relief.",
    why: "It names a tiny, near-universal piece of social choreography with surgical precision."
  },
  {
    word: "Farewellathon",
    pos: "noun",
    pron: "/feəˈwel.ə.θɒn/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The hugely extended goodbye — beginning with we really should go and ending, often half an hour later, at the front door or the car.",
    etym: "From farewell (Middle English fare wel, 'may you travel well') + -athon, the suffix denoting any gruellingly prolonged activity.",
    quote: "We announced our departure at nine; the farewellathon delivered us to the doorstep, coats on, at twenty to ten.",
    why: "The -athon suffix instantly signals this went on far too long, so the word is funny and clear at once."
  },
  {
    word: "Plusonerous",
    pos: "adjective",
    pron: "/ˌplʌsˈwʌn.ər.əs/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "Burdened by the social labour of attending an event as someone's plus-one — making conversation with strangers whose names you'll never need again.",
    etym: "A pun-blend of plus-one and onerous (Latin onerōsus, 'burdensome'). The two share the -one- sound, so plus-one slides directly into the adjective.",
    quote: "An evening of nodding politely at his colleagues' golf stories — being a plus-one can be deeply plusonerous.",
    why: "The pun rewards the listener the moment it clicks."
  },
  {
    word: "Mingleplex",
    pos: "noun",
    pron: "/ˈmɪŋ.ɡəl.pleks/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The silent strategic calculation of working a room — whom to greet, in what order, for how long, and how to exit each conversation gracefully.",
    etym: "A blend of mingle (Middle English menglen, 'to mix') and complex (Latin complexus, 'encircled, interwoven').",
    quote: "She paused at the threshold, ran the mingleplex — host first, then the friend by the window, avoid the ex — and waded in.",
    why: "-plex neatly signals tangled complexity, making the coinage feel apt at first encounter."
  },
  {
    word: "Selfieopath",
    pos: "noun",
    pron: "/ˈsel.fi.ə.pæθ/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "A person so compulsively devoted to photographing themselves that an experience seems to exist only in order to be captured.",
    etym: "A blend of selfie (Australian coinage, from self + diminutive -ie) and the -path of sociopath and psychopath (Greek pathos, 'suffering').",
    quote: "The view was extraordinary, but the selfieopath in front of us spent the whole sunset facing the wrong way.",
    why: "-path is an established, faintly damning suffix, so the word arrives pre-loaded with judgement."
  },
  {
    word: "Sulktry",
    pos: "adjective",
    pron: "/ˈsʌlk.tri/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "Moody or sullen in a way that is, somehow, alluring; broodingly attractive precisely because of the gloom.",
    etym: "A blend of sulk (18th-century, 'to be silently resentful') and sultry (from the obsolete sulter, 'to be oppressively hot').",
    quote: "He leaned against the bar refusing to smile all night — infuriating, and yet undeniably sulktry.",
    why: "It captures a real and contradictory quality — the appeal of the moody — that has no existing adjective."
  },
  {
    word: "Scrolliopath",
    pos: "noun",
    pron: "/ˈskrəʊ.li.ə.pæθ/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "A person constitutionally unable to stop scrolling, thumb moving long after any interest or pleasure has drained away.",
    etym: "A blend of scroll (Old French escroe, 'scrap, roll of parchment') and the -path of sociopath (Greek pathos).",
    quote: "It's 2am and the scrolliopath is still going, no longer reading anything, just feeding the thumb.",
    why: "It joins a recognisable digital affliction to the loaded -path suffix with rueful humour."
  },
  {
    word: "Googliotic",
    pos: "adjective",
    pron: "/ˌɡuː.ɡliˈɒt.ɪk/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "Rendered slightly helpless or foolish by the habit of outsourcing all memory and judgement to a search engine.",
    etym: "From Google (used as a verb from the early 2000s) + -otic, the adjectival suffix of idiotic and neurotic (Greek -ōtikos).",
    quote: "I couldn't tell you my own sister's phone number — fully googliotic, I've not memorised anything since 2009.",
    why: "It names a genuine cognitive shift of the search-engine age."
  },
  {
    word: "Scrolliosis",
    pos: "noun",
    pron: "/ˌskrəʊ.liˈəʊ.sɪs/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The hunched neck and curved posture acquired from hours bent over a phone; the bodily signature of the endless feed.",
    etym: "A pun on scoliosis (Greek skoliōsis, 'a curving') with scroll substituted at the front.",
    quote: "Years of doom-scrolling in bed have left me with a definite case of scrolliosis.",
    why: "The pun on a real medical term is immediately understood and gives vivid physical form to a widely shared worry."
  },
  {
    word: "Tiktoxicity",
    pos: "noun",
    pron: "/ˌtɪk.tɒkˈsɪs.ɪ.ti/",
    vol: "IV",
    tag: "Travel & Dining",
    def: "The corrosive, draining pull of an endless short-video feed — the sense of being worse off for the time spent, yet unable to stop.",
    etym: "A blend of TikTok (the short-video platform, launched internationally in 2018) and toxicity (ultimately Greek toxikon, 'poison for arrows').",
    quote: "An hour vanished and I'd learned nothing and felt worse — peak tiktoxicity.",
    why: "It names a widely lamented effect of short-form video in one neat word."
  },
  {
    word: "Gridlock",
    pos: "noun",
    pron: "/ˈɡrɪd.lɒk/",
    vol: "V",
    tag: "Digital & Social",
    def: "The scrolling trance in which one browses the entire grid of nearby profiles at length and, overwhelmed by the abundance, ends by messaging absolutely no one.",
    etym: "From the traffic sense of gridlock (1980s American English), transferred to the app's tiled layout. Motion available in every direction, progress made in none.",
    quote: "Three hours, four hundred faces, zero conversations — total gridlock.",
    why: "It already carries the exact feeling of being stalled-yet-busy, so the metaphor lands on first hearing."
  },
  {
    word: "Scrollibacy",
    pos: "noun",
    pron: "/ˈskrəʊl.ɪ.bə.si/",
    vol: "V",
    tag: "Digital & Social",
    def: "A celibacy maintained not through conviction but through endless swiping — the quiet paradox of spending every evening on a dating app and meeting nobody at all.",
    etym: "A blend of scroll (Old French escroe) and celibacy (Latin caelibatus, 'the unmarried state').",
    quote: "She calls her current dry spell voluntary scrollibacy — online nightly, untouched for months.",
    why: "It names a thoroughly modern contradiction with affectionate self-deprecation."
  },
  {
    word: "Blocklash",
    pos: "noun",
    pron: "/ˈblɒk.læʃ/",
    vol: "V",
    tag: "Digital & Social",
    def: "The instantaneous block administered the moment a conversation sours — rejection, disagreement or simple boredom converted into a single, decisive tap.",
    etym: "A blend of block (Old French bloc) and backlash (originally the recoil of machinery, 19th c.).",
    quote: "I asked one follow-up question and got the blocklash — gone mid-sentence.",
    why: "The hard consonants mimic the abruptness they describe."
  },
  {
    word: "Tapse",
    pos: "noun",
    pron: "/tæps/",
    vol: "V",
    tag: "Digital & Social",
    def: "A lapse of resolve in which one taps — the app's wordless flirtatious nudge — on someone one had solemnly sworn never to contact again.",
    etym: "A blend of tap (the platform's one-touch signal of interest) and lapse (Latin lapsus, 'a slip, a fall'). The pun is total: the slip itself is the tap.",
    quote: "Two glasses of wine and I had a tapse — pinged my ex before I'd even decided to.",
    why: "It captures a near-universal moment of weak-willed late-night reaching-out."
  },
  {
    word: "Proximitis",
    pos: "noun",
    pron: "/ˌprɒk.sɪˈmaɪ.tɪs/",
    vol: "V",
    tag: "Digital & Social",
    def: "A compulsive preoccupation with the distance reading on a profile — the reflexive checking of just how few metres away a promising match happens to be.",
    etym: "From proximity (Latin proximitas, 'nearness') + -itis ('inflammation'), used here in the colloquial, mock-clinical sense of an obsessive condition.",
    quote: "He's got chronic proximitis — won't message anyone over a kilometre out, on principle.",
    why: "The mock-medical -itis is a familiar, productive way to name a fixation."
  },
  {
    word: "Statflation",
    pos: "noun",
    pron: "/stætˈfleɪ.ʃən/",
    vol: "V",
    tag: "Digital & Social",
    def: "The quiet upward revision of the figures in one's profile — height gaining an inch, age shedding a year — in line with a perceived market standard.",
    etym: "A blend of stats (a clipping of statistics) and inflation (Latin inflare, 'to blow into').",
    quote: "Everyone allows for a little statflation now — you meet a self-declared six-footer and pack flats just in case.",
    why: "It applies a crisp economic metaphor to a familiar small dishonesty."
  },
  {
    word: "Torsonymous",
    pos: "adjective",
    pron: "/ˌtɔː.səˈnɪm.əs/",
    vol: "V",
    tag: "Digital & Social",
    def: "Anonymous by virtue of a profile picture that shows only a headless torso — wholly present in the flesh, entirely absent in the face.",
    etym: "A blend of torso (Italian, 'stalk, trunk') and anonymous (Greek anōnymos, 'without a name').",
    quote: "The grid was a wall of torsonymous squares — abs everywhere, not a single face.",
    why: "It gives one elegant adjective to the genre's most recognisable image."
  },
  {
    word: "Bioptimism",
    pos: "noun",
    pron: "/ˌbaɪ.əʊpˈtɪm.ɪz.əm/",
    vol: "V",
    tag: "Digital & Social",
    def: "The enduring faith that the right wording of one's bio — wittier, warmer, more disarmingly honest — will at last attract the right person.",
    etym: "A blend of bio (a clipping of biography) and optimism (Latin optimus, 'best').",
    quote: "He rewrites his bio every Sunday — pure bioptimism, as if the perfect sentence will fix his love life.",
    why: "It names a hope nearly every app-user has entertained."
  },
  {
    word: "Verifiction",
    pos: "noun",
    pron: "/ˌver.ɪˈfɪk.ʃən/",
    vol: "V",
    tag: "Digital & Social",
    def: "The discrepancy between the person promised by a profile's photographs and the person who actually arrives at the door.",
    etym: "A blend of verify (Latin verus, 'true') and fiction (Latin fingere, 'to shape, to invent').",
    quote: "The photos were a masterpiece of verifiction; I'd have swiped past the man who actually showed up.",
    why: "It crystallises the universal app-era gamble between image and reality in one neat noun."
  },
  {
    word: "Mascquerade",
    pos: "noun",
    pron: "/ˌmæsk.əˈreɪd/",
    vol: "V",
    tag: "Digital & Social",
    def: "The studied performance of exaggerated masculinity in a profile — clipped phrasing, gym mirrors, a pointed insistence on being straight-acting.",
    etym: "A blend of masc (scene shorthand for masculine) and masquerade (French mascarade, 'a masked entertainment'). The masc presentation is itself the mask.",
    quote: "His whole grid is a mascquerade — all gruff one-liners, then he turns up sweet as anything.",
    why: "It wittily diagnoses a well-documented dynamic of dating-app self-presentation."
  },
  {
    word: "Talkmance",
    pos: "noun",
    pron: "/ˈtɔːk.mæns/",
    vol: "V",
    tag: "Digital & Social",
    def: "A romance conducted almost entirely in text, flourishing across days of messaging and rarely surviving the first meeting in person.",
    etym: "A blend of talk (Old English talian, 'to reckon, to tell') and romance (Old French romanz).",
    quote: "Three weeks of brilliant banter, one flat coffee — another talkmance that should've stayed on the phone.",
    why: "It captures the now-common experience of chemistry that exists only in writing."
  },
  {
    word: "Lukewarmth",
    pos: "noun",
    pron: "/ˈluːk.wɔːmθ/",
    vol: "V",
    tag: "Digital & Social",
    def: "The tepid, going-nowhere affection of a conversation kept alive out of politeness rather than desire — neither pursued nor quite ended.",
    etym: "A blend of lukewarm (Middle English leuk, 'tepid') and warmth (Old English wearmþ).",
    quote: "We've been on lukewarmth for a month — a how was your week every Sunday and nothing more.",
    why: "The quiet contradiction inside the word — a warmth that isn't warm — does the satirical work all on its own."
  },
  {
    word: "Ghostmodern",
    pos: "adjective",
    pron: "/ˌɡəʊstˈmɒd.ən/",
    vol: "V",
    tag: "Digital & Social",
    def: "Of or relating to a dating culture in which sudden, unexplained disappearance is no longer a betrayal but the assumed baseline condition.",
    etym: "A play on postmodern, with ghost swapped in for post — a nod to ghosting, the practice of vanishing without a word.",
    quote: "Don't take it personally — we live in ghostmodern times; a reply is a bonus, not a baseline.",
    why: "The postmodern pun is genuinely funny and quietly flattering to the speaker."
  },
  {
    word: "Restlust",
    pos: "noun",
    pron: "/ˈrest.lʌst/",
    vol: "V",
    tag: "Digital & Social",
    def: "The restless conviction that someone better is always one swipe away — the low hum of dissatisfaction that keeps a person perpetually browsing.",
    etym: "A blend of restless (Old English restlēas) and the -lust of wanderlust (German, 'the desire to wander'). Where wanderlust longs for new places, restlust longs for the next person.",
    quote: "He ended a perfectly good thing in a fit of restlust, certain the grid was hiding someone better.",
    why: "Its echo of wanderlust gives it an instantly familiar shape — and a faintly romantic gloss on plain fickleness."
  },
  {
    word: "Brunchworthy",
    pos: "adjective",
    pron: "/ˈbrʌntʃ.wɜː.ði/",
    vol: "V",
    tag: "Digital & Social",
    def: "Of a match or encounter: judged fit to be promoted from the bedroom to daylight — to a shared, sociable, fully-clothed meal among friends.",
    etym: "From brunch (a 19th-c. blend of breakfast and lunch) + -worthy (Old English weorþ, 'deserving').",
    quote: "We've seen each other four times now — I'm starting to think he might actually be brunchworthy.",
    why: "It names the precise threshold at which a casual arrangement is reclassified as something more."
  },
  {
    word: "Barstalgia",
    pos: "noun",
    pron: "/bɑːˈstæl.dʒə/",
    vol: "V",
    tag: "Digital & Social",
    def: "A wistful longing for the gay bar and its disappearing world of in-person encounter, now that so much of the scene has migrated to a screen.",
    etym: "A blend of bar and nostalgia (Greek nostos, 'homecoming' + algos, 'pain').",
    quote: "Closing time at the last bar in town hit him with a wave of barstalgia for nights he was barely old enough to have had.",
    why: "It captures a real and widely felt cultural loss in one economical word."
  },
  {
    word: "Sceneority",
    pos: "noun",
    pron: "/ˌsiːnˈɒr.ə.ti/",
    vol: "V",
    tag: "Digital & Social",
    def: "The quiet seniority and standing one accrues through long years of presence on the scene — a status measured in remembered clubs and outlasted trends.",
    etym: "A blend of scene (Latin scaena, 'stage') and seniority (Latin senior, 'older').",
    quote: "He pulls rank with pure sceneority — was on that dancefloor before half the room was born.",
    why: "It names a recognisable form of social capital with a tidy pun."
  },
  {
    word: "Pridework",
    pos: "noun",
    pron: "/ˈpraɪd.wɜːk/",
    vol: "V",
    tag: "Digital & Social",
    def: "The unpaid emotional labour of serving, each June, as one's workplace's designated representative of an entire community — fielding the questions, vetting the logo, smiling through the panel invitation.",
    etym: "From Pride (the annual celebration) + work, on the model of homework and legwork.",
    quote: "Every June it's the same pridework — three meetings about the rainbow logo, not one of them paid.",
    why: "It gives sharp, dry language to a familiar species of tokenism."
  },
  {
    word: "Labelinth",
    pos: "noun",
    pron: "/ˈleɪ.bə.lɪnθ/",
    vol: "V",
    tag: "Digital & Social",
    def: "The ever-branching maze of identity terms and micro-labels, through which one navigates in search of the words that fit — or simply the exit.",
    etym: "A blend of label (Old French, 'a strip, a ribbon') and labyrinth (Greek labyrinthos, the legendary maze of Crete).",
    quote: "She loves the precision but admits the labelinth can be exhausting — a new term to learn every fortnight.",
    why: "It names, without mockery, a genuine and much-discussed feature of contemporary identity culture."
  },
  {
    word: "Flaggravation",
    pos: "noun",
    pron: "/ˌflæɡ.rəˈveɪ.ʃən/",
    vol: "V",
    tag: "Digital & Social",
    def: "The mild, affectionate exasperation of trying to keep pace with an ever-expanding repertoire of identity flags and the distinctions they mark.",
    etym: "A blend of flag (the proliferating banners of identity) and aggravation (Latin aggravare, 'to make heavier').",
    quote: "He supports every cause going; he just confesses to a touch of flaggravation at the gift shop, hunting for the right pin.",
    why: "It captures a gently comic, broadly shared experience without malice."
  }
];

let activeFilter = 'all';
let expandedWord = null;

function getFiltered() {
  const q = document.getElementById('search').value.toLowerCase();
  return words.filter(function(w) {
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

function renderExpanded() {
  const area = document.getElementById('expanded-area');
  if (!expandedWord) {
    area.innerHTML = '';
    return;
  }
  const w = words.find(function(w) { return w.word === expandedWord; });
  if (!w) return;
  area.innerHTML =
    '<div class="word-expanded">' +
    '<div class="exp-word">' + w.word + '</div>' +
    '<div class="exp-meta">' +
    '<span class="exp-pos">' + w.pos + '</span>' +
    '<span class="exp-pron">' + w.pron + '</span>' +
    '<span class="card-tag">' + w.tag + ' - Vol. ' + w.vol + '</span>' +
    '</div>' +
    '<div class="exp-section"><div class="exp-label">Definition</div><div class="exp-text">' + w.def + '</div></div>' +
    '<div class="exp-section"><div class="exp-label">Etymology</div><div class="exp-text">' + w.etym + '</div></div>' +
    '<div class="exp-section"><div class="exp-label">In context</div><div class="exp-quote">"' + w.quote + '"</div></div>' +
    '<div class="exp-section"><div class="exp-label">Why it could stick</div><div class="exp-why">' + w.why + '</div></div>' +
    '<button class="exp-close" id="close-btn">Close entry</button>' +
    '</div>';
  document.getElementById('close-btn').addEventListener('click', function() {
    expandedWord = null;
    render();
  });
}

function renderGrid() {
  const filtered = getFiltered();
  const grid = document.getElementById('grid');
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color: var(--ink-light); font-style: italic; padding: 20px;">No words found.</p>';
    return;
  }
  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var w = filtered[i];
    html +=
      '<div class="word-card" data-word="' + w.word + '">' +
      '<div class="card-vol">Vol. ' + w.vol + ' - ' + w.tag + '</div>' +
      '<div class="card-word">' + w.word + '</div>' +
      '<div class="card-pos">' + w.pos + '</div>' +
      '<div class="card-pron">' + w.pron + '</div>' +
      '<div class="card-def">' + w.def + '</div>' +
      '<span class="card-tag">' + w.tag + '</span>' +
      '</div>';
  }
  grid.innerHTML = html;

  var cards = grid.querySelectorAll('.word-card');
  for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener('click', function() {
      var name = this.dataset.word;
      expandedWord = expandedWord === name ? null : name;
      render();
    });
  }
}

function render() {
  renderExpanded();
  renderGrid();
}

document.querySelectorAll('.vb-filter').forEach(function(btn) {
  btn.addEventListener('click', function() {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('.vb-filter').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    expandedWord = null;
    render();
  });
});

document.getElementById('search').addEventListener('input', function() {
  expandedWord = null;
  render();
});

render();