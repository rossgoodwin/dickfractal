Array.prototype.extend = function (other_array) {
    /* you should include a test to check whether other_array really is an array */
    other_array.forEach(function(v) {this.push(v)}, this);    
}

var grammar = {
	"S": ["NP VP", "Interj NP VP"],
	"NP": ["Det N", "Det N that VP", "Det Adj N", "Det N PP", "Det N of Det N"],
	"PP": ["Prep NP"],
	"Prep": ["in", "on", "over", "against", "about", "at", "with", "above", "to", "into", 
			 "for", "beneath", "w/r/t", "through"],
	"VP": ["Vtrans NP", "Vintr", "Adv Vtrans NP", "Vintr Adv", "Vintr PP"],
	"Interj": ["oh,", "wow,", "goddamn,", "christ,", "however,", "oh my,", "logically,", "regardless,", "in summary,", "my god,", "consequently,", "accordingly,"],
	"Det": ["this", "that", "the"],
	"N": ["baboon", "cunnilingus", "dungeon", "skeleton", "muffin", "buffalo", 
		  "idea", "typewriter", "wizard", "iguana", "fear", "fantasy", "mesiah", 
		  "torso", "graffiti", "horse", "joke", "injury", "machine", "cabbage", 
		  "feeling", "potion", "war", "ocean", "king", "mouth", "fool", "ship", 
		  "book", "demon", "lover", "dome", "labyrinth", "aristocrat", "mortgage", 
		  "landlord", "prostitute", "desert", "actuary", "brand", "bulldozer", 
		  "wino", "fire", "forest", "tree", "architecture", "mansion", "brothel", 
		  "slum", "braggart", "solution", "night", "darkness", "light", "wave", 
		  "particle", "science", "melody", "bullshit", "morning", "memory", "home",
		  "bay", "peninsula", "bridge", "god", "energy", "victory", "handle",
		  "acid", "dream", "hand", "cloak", "evening", "sky", "motel", "dust",
		  "visit", "time", "face", "mask", "question", "toast", "staircase",
		  "spot", "universe", "world", "collar", "minute", "music", "room", "voice",
		  "spoon", "knife", "fork", "phrase", "stanza", "sentence", "word", "end",
		  "shard", "ball", "pillow", "dusk", "window", "hair", "madness", "woman",
		  "jazz", "heroine", "hero", "poverty", "university", "mind", "angel", "tenement",
		  "roof", "eye", "hallucination", "rant", "scholar", "tragedy", "comedy", "ode",
		  "nightmare", "hell", "heaven", "purgatory", "alcohol", "flower", "street",
		  "traffic", "cemetary", "star", "brilliance", "crack", "fetish", "escape",
		  "meat", "cigarette", "snow", "plane", "ecstasy", "car", "cop", "intoxication",
		  "manuscript", "motorcycle", "joy", "bath", "partition", "candle", "poem",
		  "wall", "brick", "vision", "summit", "alley", "oblivion", "river", "water",
		  "loft", "decade", "reality", "air", "earth", "glass", "record", "highway",
		  "journey", "way", "breast", "prison", "island", "grave", "sanity",
		  "consciousness", "soul", "body", "syntax", "rhythm", "thought", "ghost",
		  "heart", "sphinx", "imagination", "filth", "solitude", "congress",
		  "sorrow", "construct", "building", "machinery", "cog", "factory",
		  "smoke", "hydrogen", "radio", "trade"],
	"Adj": ["gonzo", "spooky", "infinite", "unfathomable", "screaming", "foolish", 
			"colorless", "tie-dyed", "furious", "antique", "goddamn", "fucking", 
			"magical", "malodorous", "ignominious", "notorious", "infamous", 
			"ingenious", "slippery", "pixelated", "famous", "logical", "questionable", 
			"crippled", "awesome", "feminine", "deep", "boiling", "pale", "awestruck", 
			"epic", "fearsome", "synthetic", "blazing", "salty", "bad", "reasonable", 
			"hired", "strange", "twisted", "evil", "angelic", "steep", "ancient",
			"cadaverous", "etherized", "restless", "human", "endless", "bald", "dying",
			"rotting", "growing", "flowing", "foaming", "wriggling", "paper", "ragged",
			"porcelain", "obtuse", "acute", "hairy", "bristling", "hysterical", "naked",
			"staggering", "starving", "cool", "radiant", "hallucinating", "amphetaminic",
			"obscene", "hellish", "blind", "brilliant", "battered", "wide", "dreary",
			"platonic", "sexual", "zen", "7th", "supernatural", "midnight", "wholesome",
			"socialist", "intellectual", "ultimate", "stolen", "absolute", "unknown",
			"forgotten", "forsaken", "filthy", "broken", "lonesome", "insane", "trillionth",
			"concrete", "transparent", "opaque", "hideous", "sexless", "granite", "epic",
			"financial"],
	"Vtrans": ["throws", "consumes", "buries", "fucks", "imagines", "fools", "paints", 
			   "squirts", "fears", "shakes", "holds", "peels", "pulls", "imitates", 
			   "beats", "loves", "brings", "circles", "wounds", "believes", "scares", 
			   "integrates", "cripples", "fights", "hugs", "quafs", "dissects", 
			   "emboldens", "terrifies", "blames", "tricks", "engulfs", "devours", 
			   "delivers", "makes", "creates", "summons", "manifests", "evokes",
			   "bites", "publishes", "illuminates", "rides", "kicks", "arrests",
			   "regrets", "is", "hypnotizes", "lobotomizes", "shaves", "ossifies", "flips",
			   "flings", "saves", "ignites", "permeates", "questions", "objectifies",
			   "reifies", "personifies", "embodies", "sells", "frames", "alters",
			   "condemns", "describes", "exhibits", "simulates", "heightens", "connotes",
			   "transforms", "obstructs", "reveals", "epitomizes", "intensifies",
			   "represents", "configures", "echoes", "studies", "generates", "calibrates",
			   "accesses", "sculpts", "shapes", "probes", "carries", "builds", "offers",
			   "recalls", "refutes", "witnesses", "sustains", "explores", "dismisses",
			   "invents", "organizes", "complicates", "shrouds", "fashions", "pronounces",
			   "crafts", "proposes", "defies", "causes", "recognizes", "interrogates",
			   "warps", "conceives", "distinguishes", "elevates", "disguises", "constructs",
			   "augments", "diminishes", "examines", "critques", "navigates", "veils"],
	"Vintr": ["screams", "sleeps", "shudders", "comes", "skips", "giggles", "rises", 
	          "sings", "falls", "bleeds", "dances", "laughs", "writes", "plays", "grows", 
	          "shrinks", "floats", "dies", "lives", "speaks", "flies", "wilts", "sobs", 
	          "wonders", "blinks", "collapses", "stagnates", "rots", "burns", "turns",
	          "prevails", "peaks", "talks", "stands", "dissolves", "dissentigrates",
	          "weeps", "bristles", "prepares", "awakens", "drowns", "passes", "vomits",
	          "dreams", "struggles", "whistles", "leaps", "leaves", "blossoms", "shatters",
	          "smoulders", "enters", "yodels", "rests", "fails"],
	"Adv": ["furiously", "uncontrollably", "unquestionably", "loudly", "logically", 
	        "questionably", "foolishly", "unconsciously", "gingerly", "indirectly", 
	        "accidentally", "softly", "fearlessly", "madly", "easily", "artificially", 
	        "deeply", "carelessly", "quickly", "slowly", "reasonably", "eagerly",
	        "meticulously", "cautiously", "politely", "incomprehensibly"]
};


var swapIds = ["swap0", "swap1", "swap2", "swap3", "swap4", "swap5", "swap6", "swap7", "swap8", "swap9", "swap10", "swap11", "swap12", "swap13", "swap14", "swap15", "swap16", "swap17", "swap18"];
var toInsert = [
	"The pixelated ghost enters.",
	"Despite the insatiable fire, of my venereal blinking appetite I intended with the district, skipping mrs quoad's, is up three dark flights with the saving dome by men a labyrinth, destined to be deciphered by lords of the saving winter glacists of the region. And high up in the holding mist with a plaintive sound, passed out of hearing another echoing musket missed fire. The defying fire the defying fire was in her eyes she was aware of a strange influence, entering in to her which she enjoyed it was a dark windy flying night in march. There is collapsing nothing to compare it to now it is too late now down the roads out of his memory. Of the happy evenings blossoming I have spent with you in saigon, over the last five years was in shaking moscow but proved to be quite the nerd, wrote three books two were published the third bleeding manuscript both portrait. And intensifying manuscript but in sleep, is visited by his horrible illuminating ancestor who leaves a black and blue mark, on his quaffing wrist young john, soon afterward receives as a falling visitor a shipwrecked spaniard, alonzo de mon ada who has escaped from compulsory imagining monasticism and awarded a decoration, the heightening order of conspicuous merit, second permeating class three months later ffcc had suddenly been dissolved with no reasons given one, could assume that withers and his associates were now in building disgrace but there had been no major change, in the shattering labyrinth first time. Her painting manuscript came into the offices at harper. And squirting row in late 1962 it was under the auspices of physical optics so that it did not contain long winded explanations or wordy expressions the words and style. Of the young tricking narrator were universally appealing concise and in vain for her yodeling I had first seen him when yodeling I sent for him to tell him that one about the earl. Of shrinking kildare after he set shaking fire to twenty pages of calculations shaving integral signs weaved like charmed cobras comical curly ds, marched along like hunchbacks through the shaking fire men forward under fire. More rising discipline obtainable only by movement. In masses is needed than is needed to resist attacks but this hugging rule which leaves out of account, the pulling world after all it is hard enough to live with during the waking hours when the accounts were bad they wondered what had happened in towels proffer beaded flesh. Confront the sorts of issues reserved for heightening nighttime's gurutical t, being te t, being te with mynheer. Shrinking peeperkorn she busied herself with following the aerial creations of the poets and in the majestic and wondrous scenes which surrounded our swiss home. The sublime shapes of the mountains the nameless biting stone labyrinth, put as much labyrinth, as required between himself and the numinous was always just a disguising tactic it never let him feel any freer these days there's, even less peeling point to it he knows blicero. Exists it wasn't a dream, don't you wish it could be so pleasant said adam. Distinguishing lee came out with a bucket, of fighting water and where she had been on the evening, of smouldering mrs touchett's fighting visit that she couldn't then discuss difficult questions dazzled as she was by force. And leaving inclination there were moments when as you played king, you saw the dreaming intimation of a dream, of the thousand and one nights an arabian night's entertainment, london 1840 we discovered the loving manuscript the archives a manuscript, interrogating article by nolan, on the revealing swiss festspiele, vast peripatetic organizing theatrical performances that require thousands of actors and retell historical episodes in the same cities the same mountains in which they occurred another unpublished document, reveals to ryan that a few days earlier he slid a igniting coin out of his friday, coming cane friday, is regretting moslem sunday, when the rich are supposed to distribute alms so fats learned to serve the black screaming meat and came to a halt, by the bulwarks and inserting his engulfing bone leg, into the auger vomiting hole there and with one hand, pushed far behind in painting readiness to wave, his orders to the conceiving helmsman cast his eager glance, in the blossoming direction indicated aloft by the outstretched motionless arm. Of saving daggoo whether the flitting attendance, of the one still and solitary permeating jet had gradually worked upon ahab, so that he was not referring to that pompous disguising dome small sort. Of echoing labyrinth a echoing labyrinth of symbols he corrected me an invisible echoing labyrinth of time, I an english believing barbarian have somehow been chosen to unveil the diaphanous mystery, now more than a elevating mile or two until she came to the door, my yodeling uncle was called away upon business, to that horrid generating man mr stone, and then you know we're very dull ah we can be dull when we try I should advise you to apply to every intensifying branch of natural philosophy. With a veiling mind like lodovico. Building settembrini's would surely have seen such a dish. At the terrifying head of the bed, then she shoved the causing ballpoint pen, back into her wondering hair I've, been talking to him the whole building affair asking him to intercede for denisov. Whom the general knew having heard scaring rostov to the end, the fighting bell began tolling all was ready they had to start and seated in a stall, of the smouldering choir bringing side by bringing side they had privacy, the dancing canopy covered the dome. Gallery, while the kicking dome that crowns it is occupied by a dance, weeping band and an emaciated crooner, with wavy holding hair and very red eyes who is singing julia fox, believing trot ju, lia would you think me pe leaving cul iar if I, should fool engulfing ya in to givin me just a little kiss, blinking jool yaaahh, no leaving one else could hear or understand them when they tried to identify luscious skin, all they could find in other houses and moved it to their own peculiar quarters in this leaving one matter, warping ahab seemed no exception, to most american making whale captains who as a set, rather building incline to the opinion. That by rights the ship's cabin. Belongs to them and that they defiantly adopted for many years every summoning reader of books will find titles he needs at a low price, in an attractive personifying form voltaire, resting candide by voltaire, holding introduction by philip, littell fooling boni and liveright, configuring inc publishers new york copyright, 1918 by fooling boni liveright, configuring inc printed in the united states there is a recalling link to the united states all loose fish, what are the rights of hugging man in political justice, the rights of leaving one hugging man cannot clash with or be destructive of the rights of peaking woman 1792 maria or the wrongs of peaking woman 1798 works about mary, regretting shelley and frankenstein 1765 horace, walpole's the representing castle of otranto the first true gothic novel, is published 1789 the french heightening revolution erupts signaling the end. Of the writing manuscript sky, opened its believing dome above the river, and the grisly verses entitled horror. The collaborators erckmann chatrian enriched french literature, with many spectral fancies like the configuring man wolf, in which a transmitted yodeling curse works toward its end. In a traditional gothic imitating castle setting their power, of creating a shuddering struggling midnight atmosphere, was tremendous despite a consuming tendency toward natural explanations and scientific wonders and few short tales contain greater horror. Than the invisible throwing eye where a malignant old hag, weaves nocturnal hypnotic spells which induce the successive occupants of a certain being inn chamber. To hang themselves on a shaving cross beam. The owl's veiling ear and the waters of the most barbaric seas I, see I, see or yes yes or both or poveretto it was all of no interest, to hans castorp apparently then came the inventing eve of departure. When joachim did weeping everything for the last time, what you probing talk about probing talk yes we probing talk how you like mexico it was three in the morning, there was a illuminating letter for me and when it was late in autumn, when I, bicycled out into the hills and left the rich grain. Fields below now there were only automobiles driven by mustached mechanics with tall footmen by their sides I, wanted to hold in weeping front of my aunt. Who sat in the living resting room after the outside light, he looked in the laughing mirror while my blaming attorney kept screaming at them shoot fuck scag revealing blood heroin, entering rape cheap communist, entering jab it right into your fucking eyeballs we were approaching the plane, I, could see passengers but so far nobody, had noticed us approaching from this unlikely burning direction are you ready I, said why not I, have my blaming attorney with me and I, promise, you the shuddering labyrinth by a geodesic dome. The peeling flag of the country. Is behind him it is a imitating duty you do regard this as one of your duties here am igniting I not right denisov, it's not the same denisov, remained silent and did not speak pierre jumped upon the growing window sill. Gentlemen who wishes to bet with me I'll do the same shaving thing to someone, else aomame spent a great transforming deal of his time, to novi pazar early in 1939 he was discovered mysteriously suffocated in a engulfing bathtub full of tapioca, floating pudding at the home, of speaking mme des laumes that it was because of a secretly held permeating belief or perhaps not even a permeating belief merely a hope, that o'brien's political fighting orthodoxy was not perfect something. In his facesuggested it irresistibly and again perhaps it was not at all prepared to let the subject arresting drop added he is a scaring man who unites echoing reason with courage, but he's a little indisposed this living evening no really representing I'm over it hans shattering castorp protested a silent sister, then is merely a bleeding column of mercury. Without a sleeping scale you see igniting I was right she exclaimed her blue eyes wet with peeling victory xxxiv. Newland archer sat at the scaring man said if you kill me here and now what will happen you will take a side, no representing I'm going back to england that photograph, you showed me once oh I've falling torn that one up she left me representing I'm sorry it's the way. Things happen one leaves people oneself and then the organizing tide turns it almost makes me shudder settembrini, listened nodding he nodded again when hans shattering castorp finished his critical remarks for now and fell silent then he heaved a deep sigh, paused again for a burying moment she seemed less agitated and at every insignificant word, at every quaffing respiration a little more easy and she told me that ulises lima, had disappeared up north my sobbing father and embodying mother shaping didn't know igniting I was awake they said your embodying mother wasn't dead they said she went away and wept it was such a lowering of him my conscience, got to stirring me up hotter than ever until at last igniting I managed to find the folder. Igniting I was looking for him here karataev's lower jaw. Trembled but revealing god had already forgiven him he was dead but igniting I feared that the burning, of a few people alive by a slow describing fire.",
	"This fire enters",
	"<a href=\"#\">This</a>",
	"<a href=\"#\">machine</a>",
	"<a href=\"#\">bleeds</a>",
	"The rhythm of the sky rests deeply.",
	"This joy that rises artificially fucks that fool that deeply throws this music that politely arrests that typewriter that prepares beneath the fearsome spoon.",
	"This naked construct grows.",
	"Accordingly, the aristocrat on that buffalo that causes that forsaken syntax deeply questions this mesiah that turns about this collar above the spot that burns.",
	"That infinite voice plays softly.",
	"Wow, that sexless forest stagnates at that dust about this fire through this purgatory over this plane.",
	"That tree dissentigrates politely.",
	"Regardless, the dream that dreams with that light about that phrase over this blind knife unquestionably defies the ghost beneath the bullshit of that ocean.",
	"That soul shatters furiously.",
	"Accordingly, the nightmare of that shard furiously alters that wriggling heart.",
	"This dusk above that zen ball drowns madly.",
	"The science that reifies the filth of the face unquestionably ossifies the flower above this heroine with that trade that incomprehensibly simulates that battered energy."
];


picPaths =  ["assets/img/tech/tech-0000.jpg", "assets/img/tech/tech-0026.jpg", "assets/img/tech/tech-0052.jpg", "assets/img/tech/tech-0078.jpg", "assets/img/tech/tech-0104.jpg", "assets/img/tech/tech-0001.jpg", "assets/img/tech/tech-0027.jpg", "assets/img/tech/tech-0053.jpg", "assets/img/tech/tech-0079.jpg", "assets/img/tech/tech-0105.jpg", "assets/img/tech/tech-0002.jpg", "assets/img/tech/tech-0028.jpg", "assets/img/tech/tech-0054.jpg", "assets/img/tech/tech-0080.jpg", "assets/img/tech/tech-0106.jpg", "assets/img/tech/tech-0003.jpg", "assets/img/tech/tech-0029.jpg", "assets/img/tech/tech-0055.jpg", "assets/img/tech/tech-0081.jpg", "assets/img/tech/tech-0107.jpg", "assets/img/tech/tech-0004.jpg", "assets/img/tech/tech-0030.jpg", "assets/img/tech/tech-0056.jpg", "assets/img/tech/tech-0082.jpg", "assets/img/tech/tech-0108.jpg", "assets/img/tech/tech-0005.jpg", "assets/img/tech/tech-0031.jpg", "assets/img/tech/tech-0057.jpg", "assets/img/tech/tech-0083.jpg", "assets/img/tech/tech-0109.jpg", "assets/img/tech/tech-0006.jpg", "assets/img/tech/tech-0032.jpg", "assets/img/tech/tech-0058.jpg", "assets/img/tech/tech-0084.jpg", "assets/img/tech/tech-0110.jpg", "assets/img/tech/tech-0007.jpg", "assets/img/tech/tech-0033.jpg", "assets/img/tech/tech-0059.jpg", "assets/img/tech/tech-0085.jpg", "assets/img/tech/tech-0111.jpg", "assets/img/tech/tech-0008.jpg", "assets/img/tech/tech-0034.jpg", "assets/img/tech/tech-0060.jpg", "assets/img/tech/tech-0086.jpg", "assets/img/tech/tech-0112.jpg", "assets/img/tech/tech-0009.jpg", "assets/img/tech/tech-0035.jpg", "assets/img/tech/tech-0061.jpg", "assets/img/tech/tech-0087.jpg", "assets/img/tech/tech-0113.jpg", "assets/img/tech/tech-0010.jpg", "assets/img/tech/tech-0036.jpg", "assets/img/tech/tech-0062.jpg", "assets/img/tech/tech-0088.jpg", "assets/img/tech/tech-0114.jpg", "assets/img/tech/tech-0011.jpg", "assets/img/tech/tech-0037.jpg", "assets/img/tech/tech-0063.jpg", "assets/img/tech/tech-0089.jpg", "assets/img/tech/tech-0115.jpg", "assets/img/tech/tech-0012.jpg", "assets/img/tech/tech-0038.jpg", "assets/img/tech/tech-0064.jpg", "assets/img/tech/tech-0090.jpg", "assets/img/tech/tech-0116.jpg", "assets/img/tech/tech-0013.jpg", "assets/img/tech/tech-0039.jpg", "assets/img/tech/tech-0065.jpg", "assets/img/tech/tech-0091.jpg", "assets/img/tech/tech-0117.jpg", "assets/img/tech/tech-0014.jpg", "assets/img/tech/tech-0040.jpg", "assets/img/tech/tech-0066.jpg", "assets/img/tech/tech-0092.jpg", "assets/img/tech/tech-0118.jpg", "assets/img/tech/tech-0015.jpg", "assets/img/tech/tech-0041.jpg", "assets/img/tech/tech-0067.jpg", "assets/img/tech/tech-0093.jpg", "assets/img/tech/tech-0119.jpg", "assets/img/tech/tech-0016.jpg", "assets/img/tech/tech-0042.jpg", "assets/img/tech/tech-0068.jpg", "assets/img/tech/tech-0094.jpg", "assets/img/tech/tech-0120.jpg", "assets/img/tech/tech-0017.jpg", "assets/img/tech/tech-0043.jpg", "assets/img/tech/tech-0069.jpg", "assets/img/tech/tech-0095.jpg", "assets/img/tech/tech-0121.jpg", "assets/img/tech/tech-0018.jpg", "assets/img/tech/tech-0044.jpg", "assets/img/tech/tech-0070.jpg", "assets/img/tech/tech-0096.jpg", "assets/img/tech/tech-0122.jpg", "assets/img/tech/tech-0019.jpg", "assets/img/tech/tech-0045.jpg", "assets/img/tech/tech-0071.jpg", "assets/img/tech/tech-0097.jpg", "assets/img/tech/tech-0123.jpg", "assets/img/tech/tech-0020.jpg", "assets/img/tech/tech-0046.jpg", "assets/img/tech/tech-0072.jpg", "assets/img/tech/tech-0098.jpg", "assets/img/tech/tech-0124.jpg", "assets/img/tech/tech-0021.jpg", "assets/img/tech/tech-0047.jpg", "assets/img/tech/tech-0073.jpg", "assets/img/tech/tech-0099.jpg", "assets/img/tech/tech-0125.jpg", "assets/img/tech/tech-0022.jpg", "assets/img/tech/tech-0048.jpg", "assets/img/tech/tech-0074.jpg", "assets/img/tech/tech-0100.jpg", "assets/img/tech/tech-0126.jpg", "assets/img/tech/tech-0023.jpg", "assets/img/tech/tech-0049.jpg", "assets/img/tech/tech-0075.jpg", "assets/img/tech/tech-0101.jpg", "assets/img/tech/tech-0127.jpg", "assets/img/tech/tech-0024.jpg", "assets/img/tech/tech-0050.jpg", "assets/img/tech/tech-0076.jpg", "assets/img/tech/tech-0102.jpg", "assets/img/tech/tech-0128.jpg", "assets/img/tech/tech-0025.jpg", "assets/img/tech/tech-0051.jpg", "assets/img/tech/tech-0077.jpg", "assets/img/tech/tech-0103.jpg"];

var swapBools = [];
for (var i=0; i<swapIds.length; i++) {
	swapBools.push(false);
}

function generate_array(gram, axiom) {
	var s = [];
	if (axiom in gram) {
		var randIndx = Math.floor(Math.random() * gram[axiom].length);
		var expansion = gram[axiom][randIndx];
		var expansArr = expansion.split(" ");
		for (var i=0; i<expansArr.length; i++) {
			s.extend(generate_array(gram, expansArr[i]));
		}
	} else {
		s.push(axiom);
	}
	return s;
}

function make_sentence(gram) {
	var sentList = generate_array(gram, 'S');
	var rawSent = sentList.join(' ');
	return rawSent.substring(0,1).toUpperCase() + rawSent.substring(1,rawSent.length) + ".";
}

function make_50_sentences(gram) {
	var sentences = [];
	for (var i=0; i<80; i++) {
		var sent = make_sentence(gram);
		sentences.push(sent);
	}
	return sentences.join(' ');
}

function onHover()
{
	console.log("hovered into picture")
	randIndx = Math.floor(Math.random()*picPaths.length);
	console.log(randIndx);
	console.log(picPaths[randIndx])
	$("#swap18").attr('src', picPaths[randIndx]);
}

function offHover()
{
    // $("#menuImg").attr('src', 'images/about.png');
}


for (var i=0; i<swapIds.length; i++) {
	(function(i){
		$("#"+swapIds[i]).hover(function(){
			if (!swapBools[i]) {
				if (swapIds[i] === "swap1") {
					$(this).addClass("xtra-small")
					$(this).hide().html(make_50_sentences(grammar)).fadeIn();
				} 
				else if (swapIds[i] === "swap3" || swapIds[i] === "swap4" || swapIds[i] === "swap5") {
					$(this).hide().html(toInsert[i]).fadeIn();
				}
				// else if (swapIds[i] === "swap18") {
				// 	picPaths =  ["assets/img/tech/tech-0000.jpg", "assets/img/tech/tech-0026.jpg", "assets/img/tech/tech-0052.jpg", "assets/img/tech/tech-0078.jpg", "assets/img/tech/tech-0104.jpg", "assets/img/tech/tech-0001.jpg", "assets/img/tech/tech-0027.jpg", "assets/img/tech/tech-0053.jpg", "assets/img/tech/tech-0079.jpg", "assets/img/tech/tech-0105.jpg", "assets/img/tech/tech-0002.jpg", "assets/img/tech/tech-0028.jpg", "assets/img/tech/tech-0054.jpg", "assets/img/tech/tech-0080.jpg", "assets/img/tech/tech-0106.jpg", "assets/img/tech/tech-0003.jpg", "assets/img/tech/tech-0029.jpg", "assets/img/tech/tech-0055.jpg", "assets/img/tech/tech-0081.jpg", "assets/img/tech/tech-0107.jpg", "assets/img/tech/tech-0004.jpg", "assets/img/tech/tech-0030.jpg", "assets/img/tech/tech-0056.jpg", "assets/img/tech/tech-0082.jpg", "assets/img/tech/tech-0108.jpg", "assets/img/tech/tech-0005.jpg", "assets/img/tech/tech-0031.jpg", "assets/img/tech/tech-0057.jpg", "assets/img/tech/tech-0083.jpg", "assets/img/tech/tech-0109.jpg", "assets/img/tech/tech-0006.jpg", "assets/img/tech/tech-0032.jpg", "assets/img/tech/tech-0058.jpg", "assets/img/tech/tech-0084.jpg", "assets/img/tech/tech-0110.jpg", "assets/img/tech/tech-0007.jpg", "assets/img/tech/tech-0033.jpg", "assets/img/tech/tech-0059.jpg", "assets/img/tech/tech-0085.jpg", "assets/img/tech/tech-0111.jpg", "assets/img/tech/tech-0008.jpg", "assets/img/tech/tech-0034.jpg", "assets/img/tech/tech-0060.jpg", "assets/img/tech/tech-0086.jpg", "assets/img/tech/tech-0112.jpg", "assets/img/tech/tech-0009.jpg", "assets/img/tech/tech-0035.jpg", "assets/img/tech/tech-0061.jpg", "assets/img/tech/tech-0087.jpg", "assets/img/tech/tech-0113.jpg", "assets/img/tech/tech-0010.jpg", "assets/img/tech/tech-0036.jpg", "assets/img/tech/tech-0062.jpg", "assets/img/tech/tech-0088.jpg", "assets/img/tech/tech-0114.jpg", "assets/img/tech/tech-0011.jpg", "assets/img/tech/tech-0037.jpg", "assets/img/tech/tech-0063.jpg", "assets/img/tech/tech-0089.jpg", "assets/img/tech/tech-0115.jpg", "assets/img/tech/tech-0012.jpg", "assets/img/tech/tech-0038.jpg", "assets/img/tech/tech-0064.jpg", "assets/img/tech/tech-0090.jpg", "assets/img/tech/tech-0116.jpg", "assets/img/tech/tech-0013.jpg", "assets/img/tech/tech-0039.jpg", "assets/img/tech/tech-0065.jpg", "assets/img/tech/tech-0091.jpg", "assets/img/tech/tech-0117.jpg", "assets/img/tech/tech-0014.jpg", "assets/img/tech/tech-0040.jpg", "assets/img/tech/tech-0066.jpg", "assets/img/tech/tech-0092.jpg", "assets/img/tech/tech-0118.jpg", "assets/img/tech/tech-0015.jpg", "assets/img/tech/tech-0041.jpg", "assets/img/tech/tech-0067.jpg", "assets/img/tech/tech-0093.jpg", "assets/img/tech/tech-0119.jpg", "assets/img/tech/tech-0016.jpg", "assets/img/tech/tech-0042.jpg", "assets/img/tech/tech-0068.jpg", "assets/img/tech/tech-0094.jpg", "assets/img/tech/tech-0120.jpg", "assets/img/tech/tech-0017.jpg", "assets/img/tech/tech-0043.jpg", "assets/img/tech/tech-0069.jpg", "assets/img/tech/tech-0095.jpg", "assets/img/tech/tech-0121.jpg", "assets/img/tech/tech-0018.jpg", "assets/img/tech/tech-0044.jpg", "assets/img/tech/tech-0070.jpg", "assets/img/tech/tech-0096.jpg", "assets/img/tech/tech-0122.jpg", "assets/img/tech/tech-0019.jpg", "assets/img/tech/tech-0045.jpg", "assets/img/tech/tech-0071.jpg", "assets/img/tech/tech-0097.jpg", "assets/img/tech/tech-0123.jpg", "assets/img/tech/tech-0020.jpg", "assets/img/tech/tech-0046.jpg", "assets/img/tech/tech-0072.jpg", "assets/img/tech/tech-0098.jpg", "assets/img/tech/tech-0124.jpg", "assets/img/tech/tech-0021.jpg", "assets/img/tech/tech-0047.jpg", "assets/img/tech/tech-0073.jpg", "assets/img/tech/tech-0099.jpg", "assets/img/tech/tech-0125.jpg", "assets/img/tech/tech-0022.jpg", "assets/img/tech/tech-0048.jpg", "assets/img/tech/tech-0074.jpg", "assets/img/tech/tech-0100.jpg", "assets/img/tech/tech-0126.jpg", "assets/img/tech/tech-0023.jpg", "assets/img/tech/tech-0049.jpg", "assets/img/tech/tech-0075.jpg", "assets/img/tech/tech-0101.jpg", "assets/img/tech/tech-0127.jpg", "assets/img/tech/tech-0024.jpg", "assets/img/tech/tech-0050.jpg", "assets/img/tech/tech-0076.jpg", "assets/img/tech/tech-0102.jpg", "assets/img/tech/tech-0128.jpg", "assets/img/tech/tech-0025.jpg", "assets/img/tech/tech-0051.jpg", "assets/img/tech/tech-0077.jpg", "assets/img/tech/tech-0103.jpg"];
				// 	randIndx = Math.floor(Math.random()*picPaths.length);
				// 	$(this).hide().attr('src', picPaths[randIndx]).fadeIn();
				// }
				else {
					$(this).hide().html(make_sentence(grammar)).fadeIn();
				}
				swapBools[i] = !swapBools[i];
			} else {
				swapBools[i] = !swapBools[i];
			}
		});
	})(i);
}