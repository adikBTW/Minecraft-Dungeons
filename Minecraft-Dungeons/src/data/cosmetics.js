export const cosmetics = [
  { name: "Arctic Fox" }, { name: "Axolotl" }, { name: "Baby Chicken" },
  { name: "Baby Dairy Cow" }, { name: "Baby Ghast" }, { name: "Baby Goat" },
  { name: "Baby Moobloom" }, { name: "Baby Piebald Pig" }, { name: "Baby Pig" },
  { name: "Baby Sooty Pig" }, { name: "Baby Squid" }, { name: "Baby Turtle" },
  { name: "Baby Wooly Cow" }, { name: "Brown Tabby" }, { name: "Calico Cat" },
  { name: "Cinnamon Ferret" }, { name: "Cluckshroom" }, { name: "Dark Baby Goat" },
  { name: "Desert Rabbit" }, { name: "Duck" }, { name: "Emperor Penguin" },
  { name: "Fancy Chicken" }, { name: "Fox" }, { name: "Friendermite" },
  { name: "Glowing Ministrosity" }, { name: "Glowing Mini Abomination" },
  { name: "Golden Axolotl" }, { name: "Golden Parrot" }, { name: "Grey Tabby" },
  { name: "Hedgehog" }, { name: "Mini Abomination" }, { name: "Mole" },
  { name: "Parrot" }, { name: "Phantom Familiar" }, { name: "Racoon" },
  { name: "Raven" }, { name: "Redstone Ministrosity" }, { name: "Red Cat" },
  { name: "Red Panda" }, { name: "Royal Penguin" }, { name: "Ruby Baby Turtle" },
  { name: "Sable Ferret" }, { name: "Skunk" }, { name: "Spotted Baby Pig" },
  { name: "Stone Ministrosity" }, { name: "Toucan" }, { name: "Vested Rabbit" },
  { name: "Wild Axolotl" }, { name: "Zombified Baby Pig" },
];

export function getCosmeticImagePath(name) {
  const slug = name.replace(/ /g, '_');
  return `/mcd icons/pet/MCD_${slug}_cosmetic_icon.png`;
}