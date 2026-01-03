

// A dictionary of all possible inventory items in the game.
// Each item now has a name for display and a path to its image.
export const items = {
  closet_key2: { 
    name: "Shattered Dragon Figurine",
    image: `/assets/items/key3.jpg` 
  },
  closet_key: {
    name: "Small Iron Key",
    image: `/assets/items/key.jpg`
  },
    closet_key3: {
    name: "Smallss Iron Key",
    image: `/assets/items/key3.jpg`
  },
  // Add other item IDs and their data here
};

export const pages = [
  { type: 'link', filename: 'notes', title: 'Notes', counted: false},
  { type: 'link', filename: 'rules', title: 'Rules', counted: false },
  { type: 'link', filename: 'exam', title: 'Exam', counted: false, initialLocked: true },
  { type: 'link', filename: 'whodunit', title: 'Whodunit', counted: false, initialLocked: true },
  { type: 'category', title: 'Case File' },
  { type: 'link', filename: 'intro', title: 'Introduction', counted: false},
  { type: 'category', title: 'People' },
  { type: 'link', filename: 'fredwells', title: 'Fred Wells' },
  { type: 'link', filename: 'angiewells', title: 'Angie Wells', addsItem: 'closet_key'  },
  { type: 'link', filename: 'daledawson', title: 'Dale Dawson' },
  { type: 'link', filename: 'allenflanders', title: 'Allen Flanders' },
  { type: 'link', filename: 'marlabarton', title: 'Marla Barton' },
  { type: 'link', filename: 'missflora', title: 'Miss Flora - Housekeeper' },
  { type: 'link', filename: 'mrslawrence', title: 'Mrs. Lawrence - Cook', unlocksOnVisit: ['7p', '3p', '4p'] },
  { type: 'link', filename: 'thomasgrady', title: 'Thomas Grady - Butler' , unlocksOnVisit: ['9p', '7p'] },
  { type: 'category', title: 'First Floor' },
  { type: 'link', filename: 'mainentry', title: 'Main Entry' },
  { type: 'link', filename: 'billiardroom', title: 'Billiard Room'},
  { type: 'link', filename: 'kitchen', title: 'Kitchen', counted: false },
  { type: 'link', filename: 'gardensuite', title: 'Garden Suite', unlocksOnVisit: ['9p'] },
  { type: 'link', filename: 'thegarden', title: 'The Garden' },
  { type: 'link', filename: '12c', title: '12 - C', initialLocked: true },
  { type: 'link', filename: '9a', title: '9 - A', initialLocked: true },
  { type: 'link', filename: '3p', title: '3 - P', counted: false, initialLocked: true },
  { type: 'link', filename: '4p', title: '4 - P', initialLocked: true },
  { type: 'category', title: 'Second Floor' },
  { type: 'link', filename: 'birdroom', title: 'Bird Room' }, 
  { type: 'link', filename: 'warroom', title: 'War Room' },
  { type: 'link', filename: 'ivorysuite', title: 'Ivory Suite' },
  { type: 'link', filename: '9p', title: '9 - P', initialLocked: true, unlocksOnVisit: ['9a', '12c', '4a', '10b', '11a']  },
  { type: 'link', filename: '7p', title: '7 - P', initialLocked: true },
  { type: 'link', filename: '4a', title: '4 - A', initialLocked: true },
  { type: 'link', filename: '10b', title: '10 - B', initialLocked: true },
  { type: 'link', filename: '11a', title: '11 - A', initialLocked: true },
  { type: 'link', filename: 'pre1', title: 'PrE - 1', initialLocked: true, requiresItem: 'closet_key' },
];