const special = {
  "Coral":                    "weapons/MCD_Coral_Blade.png",
  "Dancer's Sword":           "weapons/MCD_Dancer's_Sword.png",
  "Shear Daggers":            "weapons/MCD_Sheer_Daggers.png",
  "Fighter's Bindings":       "weapons/MCD_Fighter's_Bindings.png",
  "Master's Katana":          "weapons/MCD_Master's_Katana.png",
  "Sun's Grace":              "weapons/MCD_Sun's_Grace.png",
  "Nightmare's Bite":         "weapons/MCD_Nightmare's_Bite.png",
  "Jailor's Scythe":          "weapons/MCD_Jailor's_Scythe.png",
  "Bubble Burster":           "ranged/MCD_Bubble_Burster.png",
  "Pride of the Piglins":     "ranged/MCD_Pride_of_the_Piglins.png",
  "Azure Seeker":             "ranged/MCD_Azure_Seeker.png",
  "The Slicer":               "ranged/MCD_The_Slicer.png",
  "Firebolt Thrower":         "ranged/MCD_Firebolt_Thrower.png",
  "Hunter's Promise":         "ranged/MCD_Hunter's_Promise.png",
  "Master's Bow":             "ranged/MCD_Master's_Bow.png",
  "Red Snake":                "ranged/MCD_Red_Snake.png",
  "Sabrewing":                "ranged/MCD_Sabrewing.png",
  "Lighting Harb Crossbow":   "ranged/MCD_Lightning_Harp_Crossbow.png",
  "Purple Storm":             "ranged/MCD_Purple_Storm.png",
  "Winter's Touch":           "ranged/MCD_Winter's_Touch.png",
  "The Green Menace":         "ranged/MCD_The_Green_Menace.png",
  "The Pink Scoundrel":       "ranged/MCD_The_Pink_Scoundrel.png",
  "Sugar Rush":               "ranged/MCD_Sugar_Rush.png",
  "Call of the Void":         "ranged/MCD_Call_of_the_Void.png",
  "Burst Gust Bow":           "ranged/MCD_Burst_Gale_Bow.png",
  "Echo of the Valley":       "ranged/MCD_Echo_of_the_Valley.png",
  "Voidcaller":               "ranged/Voidcaller_(MCD).png",
  "Spider Crossbow":          "ranged/Spider_Crossbow.png",
  "Champion's Armor":         "armor/MCD_Champion's_Armor.png",
  "Hero's Armor":             "armor/MCD_Hero's_Armor.png",
  "Climbing Gear":            "armor/MCD_Climbing_Gear.png",
  "Goat Gear":                "armor/MCD_Goat_Gear.png",
  "Rugged Climbing Gear":     "armor/MCD_Rugged_Climbing_Gear.png",
  "Titan's Shroud":           "armor/MCD_Titan's_Shroud.png",
  "Emerald Gear":             "armor/MCD_Emerald_Gear.png",
  "Gilded Glory":             "armor/MCD_Gilded_Glory.png",
  "Entertainer's Garb":       "armor/MCD_Entertainer's_Garb.png",
  "The Troubadour":           "armor/MCD_The_Troubadour.png",
  "Cloaked Skull":            "armor/MCD_Cloaked_Skull.png",
  "Ghost Kindler":            "armor/MCD_Ghost_Kindler.png",
  "Guard's Armor":            "armor/MCD_Guard's_Armor.png",
  "Hunter's Armor":           "armor/MCD_Hunter's_Armor.png",
  "Archer's Armor":           "armor/MCD_Archer's_Armor.png",
  "Hungriest Horror":         "armor/MCD_Hungriest_Horror.png",
  "Hungry Horror":            "armor/MCD_Hungry_Horror.png",
  "Shadow Walker":            "armor/MCD_Shadow_Walker.png",
  "Shawdow Walker":           "armor/MCD_Shadow_Walker.png",
  "Frost Bite":               "armor/MCD_Frost_Bite.png",
  "Reinforced Mail":          "armor/MCD_Reinforced_Mail.png",
  "Scale Mail":               "armor/MCD_Scale_Mail.png",
  "Cave Crawler":             "armor/MCD_Cave_Crawler.png",
  "Sweet Tooth":              "armor/MCD_Sweet_Tooth.png",
  "Artic Fox Armor":          "armor/MCD_Arctic_Fox_Armor.png",
  "Black Wolf Armor":         "armor/Black_Wolf_Armor_(MCD).png",
  "The Spooky Gourdian":      "armor/MCD_Gourdian_Armor.png",
  "Void Quiver":              "artifact/MCD_T_VoidQuiver_Icon.png",
  "Buzzy Nest":               "artifact/MCD_Buzzy_Nest.png",
};

export function getImagePath(name, type) {
  if (special[name]) return `/mcd icons/${special[name]}`;
  const slug = name.replace(/ /g, '_').replace(/'/g, '').replace(/&/g, '').replace(/,/g, '');
  if (type === 'Armor')    return `/mcd icons/armor/MCD_${slug}.png`;
  if (type === 'Ranged')   return `/mcd icons/ranged/MCD_${slug}.png`;
  if (type === 'Artifact') return `/mcd icons/artifact/MCD_${slug}.png`;
  return `/mcd icons/weapons/MCD_${slug}.png`;
}

const STAT_HINTS = {
  hammer:    [90, 20, 40], greataxe: [85, 25, 35], claymore: [85, 30, 30],
  obsidian:  [95, 15, 25], stormlander: [88, 22, 30], maulers: [80, 35, 45],
  great:     [82, 25, 35], bonehead: [85, 20, 30], skull:  [80, 28, 40],
  dagger:    [35, 90, 30], knife:  [40, 88, 25], backstab: [45, 85, 20],
  swift:     [38, 92, 20], rapier: [42, 85, 20], katana:   [55, 78, 25],
  whip:      [40, 75, 50], sparkler: [30, 88, 35],
  sword:     [60, 60, 30], axe:    [72, 50, 30], spear:  [65, 55, 40],
  glaive:    [68, 48, 50], scythe: [70, 45, 55], flail:  [65, 52, 45],
  mace:      [75, 45, 35], staff:  [58, 55, 60], sickle: [55, 65, 45],
  whirlwind: [60, 55, 85], gauntlet:  [62, 60, 65], fists:  [55, 72, 60],
  bindings: [50, 80, 55], broom:     [52, 68, 70], cudgel: [70, 48, 50],
  bow:       [55, 70, 30], crossbow: [68, 50, 25], auto:   [40, 90, 30],
  rapid:     [42, 92, 25], scatter:  [50, 65, 75], burst:  [55, 60, 65],
  soul:      [65, 55, 55], void:   [80, 45, 35], ancient: [72, 48, 28],
};

export const BASE_DAMAGE = {
  // Melee
  "Sword": [14, 22], "Diamond Sword": [18, 29], "Hawkbrand": [18, 29], "Sinister Sword": [18, 29],
  "Daggers": [5, 8], "Moon Daggers": [5, 8], "Shear Daggers": [5, 8],
  "Backstabber": [7, 11], "Swift Striker": [7, 11],
  "Axe": [13, 21], "Firebrand": [13, 21], "Highland Axe": [13, 21],
  "Double Axe": [15, 24], "Cursed Axe": [15, 24], "Whirlwind": [15, 24],
  "Great Axeblade": [20, 32], "Battlestaff of Terror": [20, 32],
  "Claymore": [28, 45], "Broadsword": [28, 45], "Frost Slayer": [28, 45],
  "Obsidian Claymore": [28, 45], "The Starless Night": [28, 45],
  "Mace": [15, 24], "Flail": [15, 24], "Sun's Grace": [15, 24],
  "Great Hammer": [30, 48], "Bonehead Hammer": [30, 48], "Hammer of Gravity": [30, 48],
  "Stormlander": [30, 48],
  "Glaive": [13, 21], "Venom Glaive": [13, 21], "Cackling Broom": [13, 21],
  "Scythe": [14, 22], "Soul Scythe": [14, 22], "Frost Scythe": [14, 22],
  "Jailor's Scythe": [14, 22], "Skull Scythe": [14, 22],
  "Spear": [12, 19], "Fortune Spear": [12, 19], "Spine-Chill Spear": [12, 19],
  "Whispering Spear": [12, 19],
  "Katana": [11, 18], "Dark Katana": [11, 18], "Master's Katana": [14, 22],
  "Rapier": [9, 14], "Freezing Foil": [9, 14], "Bee Stinger": [9, 14],
  "Gauntlets": [9, 14], "Fighter's Bindings": [9, 14], "Maulers": [9, 14],
  "Soul Fists": [9, 14],
  "Soul Knife": [20, 32], "Eternal Knife": [20, 32], "Truthseeker": [20, 32],
  "Tempest Knife": [8, 13], "Chill Gale Knife": [8, 13], "Resolute Tempest Knife": [8, 13],
  "Pickaxe": [12, 19], "Diamond Pickaxe": [15, 24],
  "Battlestaff": [12, 19], "Growing Staff": [12, 19],
  "Sickles": [8, 13], "Nightmare's Bite": [8, 13],
  "Anchor": [22, 35], "Encrusted Anchor": [22, 35],
  "Boneclub": [14, 22], "Bone Cudgel": [14, 22],
  "Cutlass": [10, 16], "Dancer's Sword": [10, 16],
  "Whip": [9, 14], "Vine Whip": [9, 14],
  "Coral": [9, 14], "Sponge Striker": [9, 14],
  "Heartstealer": [22, 35], "Nameless Blade": [12, 19],
  "Fangs of Frost": [10, 16], "Broken Sawblade": [10, 16], "Mechanized Sawblade": [10, 16],
  "Sparkler": [6, 10], "Void Touched Blades": [12, 19],
  "The Beginning and The End": [22, 35], "The Last Laugh": [14, 22],
  "Bow": [7, 11], "Bonebow": [7, 11], "Hunting Bow": [7, 11],
  "Power Bow": [9, 14], "Elite Power Bow": [11, 18], "Master's Bow": [11, 18],
  "Longbow": [10, 16], "Guardian Bow": [10, 16], "Twin Bow": [8, 13],
  "Shortbow": [6, 10], "Mechanical Shortbow": [6, 10],
  "Soul Bow": [9, 14], "Bow of Lost Souls": [9, 14],
  "Crossbow": [9, 14], "Heavy Crossbow": [12, 19], "Rapid Crossbow": [7, 11],
  "Auto Crossbow": [5, 8], "Burst Crossbow": [7, 11],
  "Scatter Crossbow": [6, 10], "Dual Crossbows": [5, 8], "Baby Crossbows": [5, 8],
  "Doom Crossbow": [12, 19], "Slayer Crossbow": [12, 19],
  "Soul Crossbow": [9, 14], "Feral Soul Crossbow": [9, 14],
  "Corrupted Crossbow": [10, 16], "Exploding Crossbow": [10, 16],
  "Imploding Crossbow": [10, 16], "Harp Crossbow": [9, 14],
  "Voidcaller": [11, 18], "Spider Crossbow": [9, 14],
  "Nocturnal Bow": [9, 14], "Haunted Bow": [9, 14],
  "Void Bow": [11, 18], "Call of the Void": [11, 18],
  "Wind Bow": [8, 13], "Burst Gust Bow": [8, 13],
  "Snow Bow": [8, 13], "Shivering Bow": [8, 13],
  "Webbed Bow": [8, 13], "Gloopy Bow": [8, 13],
  "Phantom Bow": [8, 13], "Trickbow": [8, 13],
  "Ancient Bow": [11, 18], "Sabrewing": [11, 18],
  "Purple Storm": [8, 13], "The Green Menace": [8, 13],
  "The Pink Scoundrel": [8, 13], "Sugar Rush": [8, 13],
  "Love Spell Bow": [7, 11], "Bubble Bow": [7, 11], "Bubble Burster": [7, 11],
  "Twisting Vine Bow": [7, 11], "Weeping Vine Bow": [7, 11],
  "Red Snake": [9, 14], "Azure Seeker": [9, 14],
  "Firebolt Thrower": [10, 16], "The Slicer": [10, 16],
  "Harpoon Crossbow": [10, 16], "Nautical Crossbow": [9, 14],
  "Cog Crossbow": [7, 11], "Butterfly Crossbow": [7, 11],
  "Spellbound Crossbows": [7, 11], "Shrieking Crossbow": [9, 14],
  "Shadow Crossbow": [9, 14], "Veiled Crossbow": [9, 14],
  "Soul Hunter Crossbow": [9, 14], "Echo of the Valley": [10, 16],
  "Lighting Harb Crossbow": [12, 19], "Winter's Touch": [8, 13],
  "Pride of the Piglins": [9, 14], "Hunter's Promise": [9, 14],
};

export function calcDamage(name, powerLevel) {
  const base = BASE_DAMAGE[name];
  if (!base) return null;
  const mult = 1 + 0.05 * (powerLevel - 1);
  return [Math.round(base[0] * mult), Math.round(base[1] * mult)];
}

export function getStats(name, type) {
  const lower = name.toLowerCase();
  let base = null;
  let bestLen = 0;
  for (const [key, val] of Object.entries(STAT_HINTS)) {
    if (lower.includes(key) && key.length > bestLen) {
      base = val;
      bestLen = key.length;
    }
  }
  if (!base) {
    if (type === 'Melee')       base = [62, 58, 35];
    else if (type === 'Ranged') base = [58, 65, 30];
    else                        base = [50, 50, 50];
  }
  const seed = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const jitter = (i) => Math.min(99, Math.max(5, base[i] + ((seed * (i + 3)) % 13) - 6));
  const power = jitter(0);
  const speed = jitter(1);
  const area  = jitter(2);
  const baseDmg = Math.round(8 + power * 0.28);
  const dmgMin  = baseDmg;
  const dmgMax  = Math.round(baseDmg * 1.6);
  const rarityMap = [
    { words: ['corrupted','obsidian','heartstealer','stormlander','the last laugh',
              'the beginning','soul fists','spine-chill','jailor','whispering',
              'void touched','cackling','freezing foil','master','elite','ancient',
              'lightning harp','feral','shrieking','voidcaller','spider crossbow',
              'call of the void','echo of the valley'], rarity: 'Unique' },
    { words: ['dark','frost','soul','eternal','resolute','nightmare','sinister',
              'bone','bonehead','skull','moon','chill gale','imploding','doom',
              'slayer','burst gale','nocturnal','haunted','weeping','twisting',
              'void bow','bow of lost souls','sabrewing','firebolt'], rarity: 'Rare' },
  ];
  let rarity = 'Common';
  for (const { words, rarity: r } of rarityMap) {
    if (words.some(w => lower.includes(w))) { rarity = r; break; }
  }
  return { power, speed, area, dmgMin, dmgMax, rarity };
}

export const allItems = [
  // Melee
  {name:"Anchor",type:"Melee"},{name:"Encrusted Anchor",type:"Melee"},{name:"Axe",type:"Melee"},{name:"Firebrand",type:"Melee"},{name:"Highland Axe",type:"Melee"},{name:"Backstabber",type:"Melee"},{name:"Swift Striker",type:"Melee"},{name:"Battlestaff",type:"Melee"},{name:"Battlestaff of Terror",type:"Melee"},{name:"Growing Staff",type:"Melee"},{name:"Boneclub",type:"Melee"},{name:"Bone Cudgel",type:"Melee"},{name:"Broken Sawblade",type:"Melee"},{name:"Mechanized Sawblade",type:"Melee"},{name:"Claymore",type:"Melee"},{name:"Broadsword",type:"Melee"},{name:"Frost Slayer",type:"Melee"},{name:"Great Axeblade",type:"Melee"},{name:"Heartstealer",type:"Melee"},{name:"Coral",type:"Melee"},{name:"Sponge Striker",type:"Melee"},{name:"Cutlass",type:"Melee"},{name:"Dancer's Sword",type:"Melee"},{name:"Nameless Blade",type:"Melee"},{name:"Sparkler",type:"Melee"},{name:"Daggers",type:"Melee"},{name:"Fangs of Frost",type:"Melee"},{name:"Moon Daggers",type:"Melee"},{name:"Shear Daggers",type:"Melee"},{name:"Double Axe",type:"Melee"},{name:"Cursed Axe",type:"Melee"},{name:"Whirlwind",type:"Melee"},{name:"Gauntlets",type:"Melee"},{name:"Fighter's Bindings",type:"Melee"},{name:"Maulers",type:"Melee"},{name:"Soul Fists",type:"Melee"},{name:"Glaive",type:"Melee"},{name:"Cackling Broom",type:"Melee"},{name:"Grave Bane",type:"Melee"},{name:"Venom Glaive",type:"Melee"},{name:"Great Hammer",type:"Melee"},{name:"Bonehead Hammer",type:"Melee"},{name:"Hammer of Gravity",type:"Melee"},{name:"Stormlander",type:"Melee"},{name:"Katana",type:"Melee"},{name:"Dark Katana",type:"Melee"},{name:"Master's Katana",type:"Melee"},{name:"Mace",type:"Melee"},{name:"Flail",type:"Melee"},{name:"Sun's Grace",type:"Melee"},{name:"Obsidian Claymore",type:"Melee"},{name:"The Starless Night",type:"Melee"},{name:"Pickaxe",type:"Melee"},{name:"Diamond Pickaxe",type:"Melee"},{name:"Rapier",type:"Melee"},{name:"Bee Stinger",type:"Melee"},{name:"Freezing Foil",type:"Melee"},{name:"Sickles",type:"Melee"},{name:"Nightmare's Bite",type:"Melee"},{name:"The Last Laugh",type:"Melee"},{name:"Soul Knife",type:"Melee"},{name:"Eternal Knife",type:"Melee"},{name:"Truthseeker",type:"Melee"},{name:"Soul Scythe",type:"Melee"},{name:"Frost Scythe",type:"Melee"},{name:"Jailor's Scythe",type:"Melee"},{name:"Skull Scythe",type:"Melee"},{name:"Spear",type:"Melee"},{name:"Fortune Spear",type:"Melee"},{name:"Spine-Chill Spear",type:"Melee"},{name:"Whispering Spear",type:"Melee"},{name:"Sword",type:"Melee"},{name:"Diamond Sword",type:"Melee"},{name:"Hawkbrand",type:"Melee"},{name:"Sinister Sword",type:"Melee"},{name:"Tempest Knife",type:"Melee"},{name:"Chill Gale Knife",type:"Melee"},{name:"Resolute Tempest Knife",type:"Melee"},{name:"Void Touched Blades",type:"Melee"},{name:"The Beginning and The End",type:"Melee"},{name:"Whip",type:"Melee"},{name:"Vine Whip",type:"Melee"},
  // Ranged
  {name:"Bow",type:"Ranged"},{name:"Bonebow",type:"Ranged"},{name:"Haunted Bow",type:"Ranged"},{name:"Twin Bow",type:"Ranged"},{name:"Bubble Bow",type:"Ranged"},{name:"Bubble Burster",type:"Ranged"},{name:"Gloopy Bow",type:"Ranged"},{name:"Burst Crossbow",type:"Ranged"},{name:"Corrupted Crossbow",type:"Ranged"},{name:"Soul Hunter Crossbow",type:"Ranged"},{name:"Cog Crossbow",type:"Ranged"},{name:"Pride of the Piglins",type:"Ranged"},{name:"Crossbow",type:"Ranged"},{name:"Azure Seeker",type:"Ranged"},{name:"The Slicer",type:"Ranged"},{name:"Dual Crossbows",type:"Ranged"},{name:"Baby Crossbows",type:"Ranged"},{name:"Spellbound Crossbows",type:"Ranged"},{name:"Exploding Crossbow",type:"Ranged"},{name:"Firebolt Thrower",type:"Ranged"},{name:"Imploding Crossbow",type:"Ranged"},{name:"Harpoon Crossbow",type:"Ranged"},{name:"Nautical Crossbow",type:"Ranged"},{name:"Heavy Crossbow",type:"Ranged"},{name:"Doom Crossbow",type:"Ranged"},{name:"Slayer Crossbow",type:"Ranged"},{name:"Hunting Bow",type:"Ranged"},{name:"Ancient Bow",type:"Ranged"},{name:"Hunter's Promise",type:"Ranged"},{name:"Master's Bow",type:"Ranged"},{name:"Longbow",type:"Ranged"},{name:"Guardian Bow",type:"Ranged"},{name:"Red Snake",type:"Ranged"},{name:"Power Bow",type:"Ranged"},{name:"Elite Power Bow",type:"Ranged"},{name:"Phantom Bow",type:"Ranged"},{name:"Sabrewing",type:"Ranged"},{name:"Rapid Crossbow",type:"Ranged"},{name:"Auto Crossbow",type:"Ranged"},{name:"Butterfly Crossbow",type:"Ranged"},{name:"Scatter Crossbow",type:"Ranged"},{name:"Harp Crossbow",type:"Ranged"},{name:"Lighting Harb Crossbow",type:"Ranged"},{name:"Shadow Crossbow",type:"Ranged"},{name:"Shrieking Crossbow",type:"Ranged"},{name:"Veiled Crossbow",type:"Ranged"},{name:"Shortbow",type:"Ranged"},{name:"Love Spell Bow",type:"Ranged"},{name:"Mechanical Shortbow",type:"Ranged"},{name:"Purple Storm",type:"Ranged"},{name:"Snow Bow",type:"Ranged"},{name:"Webbed Bow",type:"Ranged"},{name:"Winter's Touch",type:"Ranged"},{name:"Soul Bow",type:"Ranged"},{name:"Bow of Lost Souls",type:"Ranged"},{name:"Nocturnal Bow",type:"Ranged"},{name:"Shivering Bow",type:"Ranged"},{name:"Soul Crossbow",type:"Ranged"},{name:"Feral Soul Crossbow",type:"Ranged"},{name:"Voidcaller",type:"Ranged"},{name:"Spider Crossbow",type:"Ranged"},{name:"Trickbow",type:"Ranged"},{name:"The Green Menace",type:"Ranged"},{name:"The Pink Scoundrel",type:"Ranged"},{name:"Sugar Rush",type:"Ranged"},{name:"Twisting Vine Bow",type:"Ranged"},{name:"Weeping Vine Bow",type:"Ranged"},{name:"Void Bow",type:"Ranged"},{name:"Call of the Void",type:"Ranged"},{name:"Wind Bow",type:"Ranged"},{name:"Burst Gust Bow",type:"Ranged"},{name:"Echo of the Valley",type:"Ranged"},
  // Armor
  {name:"Battle Robe",type:"Armor"},{name:"Splendid Robe",type:"Armor"},{name:"Beenest Armor",type:"Armor"},{name:"Beehive Armor",type:"Armor"},{name:"Champion's Armor",type:"Armor"},{name:"Hero's Armor",type:"Armor"},{name:"Climbing Gear",type:"Armor"},{name:"Goat Gear",type:"Armor"},{name:"Rugged Climbing Gear",type:"Armor"},{name:"Dark Armor",type:"Armor"},{name:"Titan's Shroud",type:"Armor"},{name:"Emerald Gear",type:"Armor"},{name:"Gilded Glory",type:"Armor"},{name:"Opulent Armor",type:"Armor"},{name:"Entertainer's Garb",type:"Armor"},{name:"The Troubadour",type:"Armor"},{name:"Evocation Robe",type:"Armor"},{name:"Ember Robe",type:"Armor"},{name:"Verdant Robe",type:"Armor"},{name:"Ghostly Armor",type:"Armor"},{name:"Cloaked Skull",type:"Armor"},{name:"Ghost Kindler",type:"Armor"},{name:"Grim Armor",type:"Armor"},{name:"The Spooky Gourdian",type:"Armor"},{name:"Wither Armor",type:"Armor"},{name:"Guard's Armor",type:"Armor"},{name:"Hunter's Armor",type:"Armor"},{name:"Archer's Armor",type:"Armor"},{name:"Mercenary Armor",type:"Armor"},{name:"Hungriest Horror",type:"Armor"},{name:"Hungry Horror",type:"Armor"},{name:"Renegade Armor",type:"Armor"},{name:"Mystery Armor",type:"Armor"},{name:"Ocelot Armor",type:"Armor"},{name:"Shawdow Walker",type:"Armor"},{name:"Phantom Armor",type:"Armor"},{name:"Frost Bite",type:"Armor"},{name:"Piglin Armor",type:"Armor"},{name:"Golden Piglin Armor",type:"Armor"},{name:"Plate Armor",type:"Armor"},{name:"Cauldron Armor",type:"Armor"},{name:"Full Metal Armor",type:"Armor"},{name:"Reinforced Mail",type:"Armor"},{name:"Stalwart Armor",type:"Armor"},{name:"Root Rot Armor",type:"Armor"},{name:"Black Spot Armor",type:"Armor"},{name:"Scale Mail",type:"Armor"},{name:"Highland Armor",type:"Armor"},{name:"Shulker Armor",type:"Armor"},{name:"Sturdy Shulker Armor",type:"Armor"},{name:"Snow Armor",type:"Armor"},{name:"Frost Armor",type:"Armor"},{name:"Soul Robe",type:"Armor"},{name:"Souldancer Robe",type:"Armor"},{name:"Spelunker Armor",type:"Armor"},{name:"Cave Crawler",type:"Armor"},{name:"Sweet Tooth",type:"Armor"},{name:"Sprout Armor",type:"Armor"},{name:"Living Vines Armor",type:"Armor"},{name:"Squid Armor",type:"Armor"},{name:"Glow Squid Armor",type:"Armor"},{name:"Teleportation Robes",type:"Armor"},{name:"Unstable Robes",type:"Armor"},{name:"Thief Armor",type:"Armor"},{name:"Spider Armor",type:"Armor"},{name:"Turtle Armor",type:"Armor"},{name:"Nimble Turtle Armor",type:"Armor"},{name:"Wolf Armor",type:"Armor"},{name:"Artic Fox Armor",type:"Armor"},{name:"Black Wolf Armor",type:"Armor"},{name:"Fox Armor",type:"Armor"},
  // Artifacts
  {name:"Blast Fungus",type:"Artifact"},{name:"Boots of Swiftness",type:"Artifact"},{name:"Buzzy Nest",type:"Artifact"},{name:"Corrupted Beacon",type:"Artifact"},{name:"Corrupted Pumpkin",type:"Artifact"},{name:"Corrupted Seeds",type:"Artifact"},{name:"Death Cap Mushroom",type:"Artifact"},{name:"Enchanted Grass",type:"Artifact"},{name:"Enchanter's Tome",type:"Artifact"},{name:"Eye of the Guardian",type:"Artifact"},{name:"Fireworks Arrow",type:"Artifact"},{name:"Fishing Rod",type:"Artifact"},{name:"Flaming Quiver",type:"Artifact"},{name:"Ghost Cloak",type:"Artifact"},{name:"Golem Kit",type:"Artifact"},{name:"Gong of Weakening",type:"Artifact"},{name:"Harpoon Quiver",type:"Artifact"},{name:"Harvester",type:"Artifact"},{name:"Ice Wand",type:"Artifact"},{name:"Iron Hide Amulet",type:"Artifact"},{name:"Light Feather",type:"Artifact"},{name:"Lightning Rod",type:"Artifact"},{name:"Love Medallion",type:"Artifact"},{name:"Powershaker",type:"Artifact"},{name:"Satchel of Elixirs",type:"Artifact"},{name:"Satchel of Elements",type:"Artifact"},{name:"Satchel of Snacks",type:"Artifact"},{name:"Scatter Mines",type:"Artifact"},{name:"Shadow Shifter",type:"Artifact"},{name:"Shock Powder",type:"Artifact"},{name:"Soul Healer",type:"Artifact"},{name:"Soul Lantern",type:"Artifact"},{name:"Spinblade",type:"Artifact"},{name:"Tasty Bone",type:"Artifact"},{name:"Thundering Quiver",type:"Artifact"},{name:"Torment Quiver",type:"Artifact"},{name:"Totem of Casting",type:"Artifact"},{name:"Totem of Regeneration",type:"Artifact"},{name:"Totem of Shielding",type:"Artifact"},{name:"Tome of Duplication",type:"Artifact"},{name:"Updraft Tome",type:"Artifact"},{name:"Vexing Chant",type:"Artifact"},{name:"Void Quiver",type:"Artifact"},{name:"Wind Horn",type:"Artifact"},{name:"Wonderful Wheat",type:"Artifact"},
];