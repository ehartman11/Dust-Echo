const songs = [
  {
    id: "song-01",
    index: "01",
    title: "Dust on the Dashboard",
    type: "Vocal track",
    tools: "Music: Suno · Cover art: ChatGPT Images",
    mood: "Reflective, highway-worn, cinematic",
    description:
      "A highway-worn opening song about memory that refuses to stay parked. It should feel intimate in the verses and wider in the chorus without losing the grit.",
    image: "assets/images/Dust%20on%20the%20Dashboard.jpg",
    imageAlt: "A dusty pickup truck interior at golden hour for Dust on the Dashboard.",
    audio: "assets/audio/Dust%20on%20the%20Dashboard.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-01-dust-on-the-dashboard.txt",
    descriptionLink: "assets/descriptions/song-01-dust-on-the-dashboard.md",
    lyrics: `Title: Dust on the Dashboard
Type: Vocal track

Verse 1:
The county line is a ribbon in the rain
Your name still rides shotgun in my brain
There's a coffee ring on a faded route
And a missing mile I still ain't figured out

Verse 2:
That old bench seat keeps a little heat
From all the nights we chased down gravel streets
The radio hisses like a half-told prayer
And every backroad says you were here

Chorus:
There's dust on the dashboard, light in the glass
Half of me's moving, half of me's back
Your laugh in the speaker, your hand in the dark
Still striking matches in a worn-out heart
This truck keeps rolling, but it don't go far
When every mile marker knows who you are

Verse 3:
I pass the station where the ice machine hums
Same busted sign, same setting sun
I tell myself that a man gets free
But this town still keeps a room in me

Bridge:
Maybe goodbye is a road with no end
Maybe love just learns to travel different
Maybe memory ain't made to wash clean
Maybe that's why you're still riding with me

Final Chorus:
There's dust on the dashboard, gold in the air
Time on the windshield, you everywhere
The map's folded over, the tank ain't full
But your ghost still pulls like a river pulls
This truck keeps rolling under cold blue stars
And every mile marker knows who you are`
  },
  {
    id: "song-02",
    index: "02",
    title: "River Town Revival",
    type: "Instrumental",
    tools: "Music: Suno · Cover art: Adobe Firefly",
    mood: "Humid, nocturnal, neon-soaked",
    description:
      "A late-night instrumental with riverfront neon, slow blues phrasing, and just enough movement to feel like a town waking back up after midnight.",
    image: "assets/images/Neon%20River%20Worn.jpg",
    imageAlt: "A neon-lit riverfront street at night for River Town Revival.",
    audio: "assets/audio/Neon%20River%20Worn%20(Instrumental).mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-02-river-town-revival.txt",
    descriptionLink: "assets/descriptions/song-02-river-town-revival.md",
    lyrics: `Title: River Town Revival
Type: Instrumental

Arrangement notes:
- 90 BPM feel with a lazy pocket
- Open with tremolo guitar and a distant Wurlitzer or organ wash
- Bring in brushed drums and a round electric bass after 8 bars
- Let the lead guitar answer itself in short vocal-like phrases
- Final third should lift with fuller drums and a brighter slide line

Mood words:
- humid
- neon
- worn-in
- late-night
- riverfront

Instrumentation:
- Tremolo electric guitar
- Slide guitar accents
- Organ pad
- Brushed drum kit
- Electric bass

Mix notes:
- Roomy reverb, not arena-sized
- Keep low end warm and rolling
- Make the lead feel conversational instead of flashy`
  },
  {
    id: "song-03",
    index: "03",
    title: "Flint & Honey",
    type: "Vocal track",
    tools: "Music: Suno · Cover art: ChatGPT Images",
    mood: "Romantic, rugged, rootsy",
    description:
      "A rootsy love song that balances warmth and sharpness. The emotional center should feel lived-in, mature, and a little dangerous.",
    image: "assets/images/Flint%20and%20Honey.jpg",
    imageAlt: "A warm rustic porch scene at blue hour for Flint and Honey.",
    audio: "assets/audio/Flint%20%26%20Honey.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-03-flint-and-honey.txt",
    descriptionLink: "assets/descriptions/song-03-flint-and-honey.md",
    lyrics: `Title: Flint & Honey
Type: Vocal track

Verse 1:
You came in laughing like the screen door spring
Summer on your shoulders and a spark in everything
Boots on the hardwood, storm in your eyes
Sweet as Sunday peaches, sharp as a pocketknife

Verse 2:
I was all rough timber, all rust and smoke
You were steady-handed when the hard part broke
You knew where to touch every jagged edge
Like mercy with a backbone and a little bit of lead

Chorus:
You're flint and honey, fire and grace
Soft in the moonlight, steel in your face
You don't run easy, you don't scare slow
You kiss like comfort and you cut like truth I need to know
Flint and honey, Lord, that's you
Half wild river, half mountain dew

Verse 3:
We've had our porch-light, slammed-door nights
Words like thunder in the middle of July
Still when the dust settles and the crickets sing
You lay your hand on me and forgive everything

Bridge:
Some hearts are lanterns, some are storms
Some leave a man colder than he was before
But you are a struck match in a world gone dim
And every hard mile feels holy with you in it

Final Chorus:
You're flint and honey, flame and rain
The kind of love that leaves a mark and stays
You don't fade quiet, you don't burn through
You hold like heaven and you hit like truth
Flint and honey, wild and true
I'd walk these hills forever next to you`
  },
  {
    id: "song-04",
    index: "04",
    title: "Cedar Creek Gospel",
    type: "Vocal track",
    tools: "Music: Suno · Cover art: Adobe Firefly",
    mood: "Spiritual, stomping, creekside",
    description:
      "A creekside redemption song with stomp, ache, and a rough-edged sense of spiritual release outside the walls of a church.",
    image: "assets/images/Cedar%20Creek%20Gospel.jpg",
    imageAlt: "A cedar-lined creek at dusk with lantern-lit wood for Cedar Creek Gospel.",
    audio: "assets/audio/Cedar%20Creek%20Gospel.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-04-cedar-creek-gospel.txt",
    descriptionLink: "assets/descriptions/song-04-cedar-creek-gospel.md",
    lyrics: `Title: Cedar Creek Gospel
Type: Vocal track

Verse 1:
I washed my hands in the cedar creek
Cold enough to make a liar speak
Sky went copper, woods stood still
Like the whole wide world was on the hill

Verse 2:
I been carrying iron in my chest
Every old hurt I never confessed
Boot heels muddy, soul threadbare
Looking for a little mercy in the evening air

Chorus:
Sing that cedar creek gospel over me
Where the water hits the stone and the stone stays clean
Let the pines lean low, let the night wind talk
I came here crooked, I might leave walked straight
Sing that cedar creek gospel over me

Verse 3:
There's no stained glass in these county trees
Just a whippoorwill and a tired man on his knees
But I swear I heard forgiveness there
In the frogs, the dark, and the preacherless air

Bridge:
I don't need thunder, I don't need gold
Just a little bit of peace for this broke-down soul
If grace still wanders where the wild things grow
Maybe it found me in the undertow

Final Chorus:
Sing that cedar creek gospel over me
Wash the smoke and the shame and the could-have-beens free
Let the water keep time, let the stars bear witness
I came here guilty, I might leave forgiven
Sing that cedar creek gospel over me`
  },
  {
    id: "song-05",
    index: "05",
    title: "County Line After Midnight",
    type: "Instrumental",
    tools: "Music: Suno · Cover art: ChatGPT Images",
    mood: "Tense, lonely, midnight road",
    description:
      "A dark instrumental meant to feel like empty pavement, anxious headlights, and the kind of silence that starts talking back.",
    image: "assets/images/generated-image-cover-art-1776747546869.jpg",
    imageAlt: "A truck driving a dark rural road at night for County Line After Midnight.",
    audio: "assets/audio/Headlight%20Fenceposts%20(Hard%20Rock).mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-05-county-line-after-midnight.txt",
    descriptionLink: "assets/descriptions/song-05-county-line-after-midnight.md",
    lyrics: `Title: County Line After Midnight
Type: Instrumental

Arrangement notes:
- 74 BPM, dark and spacious
- Start with a lone electric guitar drenched in spring reverb
- Add tom-heavy drums with a heartbeat feel
- Use a low baritone guitar or bass drone for tension
- Build to a thicker middle section, then strip it back for the outro

Mood words:
- nocturnal
- lonely
- cinematic
- restless
- desert-black

Instrumentation:
- Reverbed electric lead
- Baritone guitar
- Sparse drums
- Swells from organ or pedal steel

Mix notes:
- Leave plenty of air between phrases
- Keep the drums dry compared to the guitar
- Think headlights, fenceposts, and long empty road`
  },
  {
    id: "song-06",
    index: "06",
    title: "Old Blue Flame",
    type: "Vocal track",
    tools: "Music: Suno · Cover art: Adobe Firefly",
    mood: "Defiant, smoky, riff-driven",
    description:
      "A stubborn, riff-forward blues-rock song about surviving your own worst seasons and finding pride in still burning.",
    image: "assets/images/Old%20Blue%20Flame.jpg",
    imageAlt: "A weathered guitar and amp with blue light for Old Blue Flame.",
    audio: "assets/audio/Old%20Blue%20Flame.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-06-old-blue-flame.txt",
    descriptionLink: "assets/descriptions/song-06-old-blue-flame.md",
    lyrics: `Title: Old Blue Flame
Type: Vocal track

Verse 1:
I had a cheap bar stool and a bad excuse
A half-dead dream and some holes in my boots
The whole town said I was born to burn out
But there's a stubborn little light they still don't know about

Verse 2:
I've been broke as a bottle in a roadside ditch
Cold as a motel room with a buzzing switch
Still something electric keeps my name alive
Like a coal in the ashes that refuses to die

Chorus:
It's that old blue flame, hard to kill
Burning through the busted parts against my will
Not bright like glory, not clean like grace
Just a mean little fire with a working man's face
When the night leans heavy and the good luck fades
I still got that old blue flame

Verse 3:
I loved a few women, I lost a few fights
Spent too much time making friends with the night
But every time I thought I was down to smoke
That blue fire flickered and I laughed at the dark

Bridge:
Call it heart, call it pride
Call it the devil that switched to my side
I don't know what keeps breathing in me
But I know what I see when the whole world sleeps

Final Chorus:
It's that old blue flame under rust and rain
The thing that keeps singing when there's nothing to gain
Not polished silver, not heaven-sent
Just a wild spark with a little teeth left
When the night leans heavy and the good luck fades
I still got that old blue flame`
  },
  {
    id: "song-07",
    index: "07",
    title: "Broken Wheel Hallelujah",
    type: "Vocal track",
    tools: "Music: Suno · Cover art: ChatGPT Images",
    mood: "Rowdy, backroad, singalong",
    description:
      "A rowdy Red Dirt singalong built around bad luck, humor, roadside repair, and the refusal to quit when the plan goes sideways.",
    image: "assets/images/Broken%20Wheel%20Hallelujah.jpg",
    imageAlt: "A beat-up pickup on a red dirt shoulder at sunset for Broken Wheel Hallelujah.",
    audio: "assets/audio/Broken%20Wheel%20Hallelujah.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-07-broken-wheel-hallelujah.txt",
    descriptionLink: "assets/descriptions/song-07-broken-wheel-hallelujah.md",
    lyrics: `Title: Broken Wheel Hallelujah
Type: Vocal track

Verse 1:
Blew a tire south of Tulsa with a trunk full of noise
A cooler full of trouble and two half-sober boys
Sun going down like a county fair flare
We laughed like fools because we had to out there

Verse 2:
A farmer with a chain and a cigarette grin
Said "You boys pick strange roads to get religion in"
We jacked that axle up in the red dirt dust
And sang to the jackrabbits and the pickup rust

Chorus:
Broken wheel hallelujah
Raise a little hell when the bad luck hits ya
If the road don't love you, laugh and ride it anyway
Broken wheel hallelujah
Sing it from the shoulder to the judgment day
We ain't blessed, just too stubborn to quit
So we thank the night for every crooked bit

Verse 3:
Made the show late with the shirts still wrinkled
But the room lit up when the Telecaster twanged
We smelled like grease and Oklahoma wind
And played like the highway let us live again

Bridge:
Some folks pray with folded hands
Some folks pray with a three-piece band
Some folks find salvation in a church-house pew
We found ours with a lug wrench and a beat-up tune

Final Chorus:
Broken wheel hallelujah
For the busted plan and the backroad scripture
For the nights that bend but don't break your name
Broken wheel hallelujah
Throw it to the crowd and the pouring rain
We ain't blessed, just too loud to quit
So we thank the night for every crooked bit`
  },
  {
    id: "song-08",
    index: "08",
    title: "Red Clay Interlude",
    type: "Instrumental",
    tools: "Music: Suno · Cover art: Adobe Firefly",
    mood: "Warm, spacious, sunset-breather",
    description:
      "A short instrumental breather with fingerpicked warmth, wide-open air, and late-evening stillness.",
    image: "assets/images/Red%20Clay%20Breath.jpg",
    imageAlt: "A red clay landscape under a clear sky for Red Clay Interlude.",
    audio: "assets/audio/Red%20Clay%20Breath.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-08-red-clay-interlude.txt",
    descriptionLink: "assets/descriptions/song-08-red-clay-interlude.md",
    lyrics: `Title: Red Clay Interlude
Type: Instrumental

Arrangement notes:
- 84 BPM with a gentle lope
- Fingerpicked acoustic intro
- Add soft brushed snare and upright-style bass after the first pass
- A little dobro or steel should carry the melody
- Keep it short, under two minutes if possible

Mood words:
- sunset
- open
- warm
- pastoral
- reflective

Instrumentation:
- Fingerpicked acoustic guitar
- Dobro or pedal steel
- Brushes on snare
- Upright bass

Mix notes:
- Dry and intimate
- Let string squeaks and finger noise live
- Use this as a breather before the last two vocal songs`
  },
  {
    id: "song-09",
    index: "09",
    title: "Lanterns in the Wind",
    type: "Vocal track",
    tools: "Music: Suno · Cover art: ChatGPT Images",
    mood: "Homesick, gentle, night-lit",
    description:
      "A reflective late-album song about home, memory, and keeping a small light alive through distance and change.",
    image: "assets/images/Laterns%20in%20Wind.jpg",
    imageAlt: "A lit lantern outside a farmhouse at night for Lanterns in the Wind.",
    audio: "assets/audio/Lanterns%20in%20Wind.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-09-lanterns-in-the-wind.txt",
    descriptionLink: "assets/descriptions/song-09-lanterns-in-the-wind.md",
    lyrics: `Title: Lanterns in the Wind
Type: Vocal track

Verse 1:
Mama kept a lantern by the kitchen door
For storms, late nights, and wandering souls
I think about that little circle of light
Every time this world gets too wide

Verse 2:
I've slept in cities that forgot the stars
Watched morning break on a dozen different bars
Still some part of me goes drifting home
To porch boards singing through my bones

Chorus:
We're just lanterns in the wind
Trying to hold a little fire in
Through the hard rain, through the pull of leaving
Through the miles and the midnight grieving
If the dark comes down again
I'll remember how that small light lived
We're just lanterns in the wind

Verse 3:
The old house settles in my memory
Like a hymn I know but cannot reach
And every face I loved back then
Still glows when the night comes in

Bridge:
Maybe home ain't dirt or boards
Maybe it's the ones you're burning for
Maybe love survives because it learns
How to shine even while it turns

Final Chorus:
We're just lanterns in the wind
Guarding what we can from giving in
Through the cold season, through the ache of distance
Through the faith it takes just to keep existence
If the dark comes down again
I'll remember how that small light lived
We're just lanterns in the wind`
  },
  {
    id: "song-10",
    index: "10",
    title: "Backroads Don't Forget",
    type: "Vocal track",
    tools: "Music: Suno · Cover art: Adobe Firefly",
    mood: "Nostalgic, expansive, closing-statement",
    description:
      "A final song about hometown memory and the way the places that made you keep echoing through every version of your life.",
    image: "assets/images/Headlight%20Fenceposts%20(Classic%20Rock).jpg",
    imageAlt: "A narrow backroad at dusk lined with utility poles for Backroads Don't Forget.",
    audio: "assets/audio/Backroads%20Don't%20Forget.mp3",
    audioType: "audio/mpeg",
    lyricsLink: "assets/lyrics/song-10-backroads-dont-forget.txt",
    descriptionLink: "assets/descriptions/song-10-backroads-dont-forget.md",
    lyrics: `Title: Backroads Don't Forget
Type: Vocal track

Verse 1:
There are tire marks older than my name
On the shoulder by the football field
There are stories hanging in the pines
That this town refuses to repeal

Verse 2:
I have worn a hundred borrowed skins
Different bars and different county lines
But a man can run clean out of sight
And still hear his first life in the night

Chorus:
Backroads don't forget
Every bridge and every silhouette
Every promise made with a young man's breath
Every light you chased, every thing you left
Time gets moving but the dust hangs on
Like a hymn after the choir's gone
Backroads don't forget

Verse 3:
The creek still bends behind the mill
Like it did when we were bulletproof
And I swear the stars above that field
Still know every lie and every truth

Bridge:
Maybe that's a curse and maybe grace
To be known by a place you can't replace
To be carried by what made you first
Even after all the miles and hurt

Final Chorus:
Backroads don't forget
They remember the fire and the cigarette
The first heartbreak, the first hard win
The nights you swore you'd never come back again
Time gets moving but the dust hangs on
Like a hymn after the choir's gone
Backroads don't forget

Outro:
So I tip my hat to the rearview glass
To the roads that made me and outlasted that`
  }
];

const trackList = document.getElementById("track-list");
const detailCover = document.getElementById("detail-cover");
const detailIndex = document.getElementById("detail-index");
const detailTitle = document.getElementById("detail-title");
const detailMeta = document.getElementById("detail-meta");
const detailTools = document.getElementById("detail-tools");
const detailDescription = document.getElementById("detail-description");
const detailPlayer = document.getElementById("detail-player");
const detailLyrics = document.getElementById("detail-lyrics");
const detailLyricsLink = document.getElementById("detail-lyrics-link");
const detailDescriptionLink = document.getElementById("detail-description-link");
const detailFacts = document.getElementById("detail-facts");

let activeButton = null;

function buildFactRow(label, value) {
  const wrapper = document.createElement("div");
  const term = document.createElement("dt");
  const description = document.createElement("dd");

  term.textContent = label;
  description.textContent = value;

  wrapper.append(term, description);
  return wrapper;
}

function renderSong(song, button) {
  if (activeButton) {
    activeButton.classList.remove("is-active");
    activeButton.setAttribute("aria-selected", "false");
  }

  button.classList.add("is-active");
  button.setAttribute("aria-selected", "true");
  activeButton = button;

  detailCover.src = song.image;
  detailCover.alt = song.imageAlt;
  detailIndex.textContent = `Track ${song.index}`;
  detailTitle.textContent = song.title;
  detailMeta.textContent = `${song.type} · ${song.mood}`;
  detailTools.textContent = song.tools;
  detailDescription.textContent = song.description;
  detailLyrics.textContent = song.lyrics;
  detailLyricsLink.href = song.lyricsLink;
  detailDescriptionLink.href = song.descriptionLink;

  detailPlayer.pause();
  detailPlayer.innerHTML = "";
  const source = document.createElement("source");
  source.src = song.audio;
  source.type = song.audioType;
  detailPlayer.append(source);
  detailPlayer.load();

  detailFacts.innerHTML = "";
  detailFacts.append(
    buildFactRow("Track Number", song.index),
    buildFactRow("Format", song.type),
    buildFactRow("Mood", song.mood),
    buildFactRow("Tools", song.tools)
  );
}

function createTrackButton(song) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "track-button";
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", "false");
  button.id = `${song.id}-tab`;

  const topLine = document.createElement("div");
  topLine.className = "track-topline";

  const number = document.createElement("span");
  number.className = "track-number";
  number.textContent = song.index;

  const type = document.createElement("span");
  type.className = "track-type";
  type.textContent = song.type;

  topLine.append(number, type);

  const title = document.createElement("strong");
  title.className = "track-title";
  title.textContent = song.title;

  const summary = document.createElement("p");
  summary.className = "track-summary";
  summary.textContent = song.description;

  button.append(topLine, title, summary);
  button.addEventListener("click", () => renderSong(song, button));
  return button;
}

songs.forEach((song, index) => {
  const button = createTrackButton(song);
  trackList.append(button);

  if (index === 0) {
    renderSong(song, button);
  }
});
