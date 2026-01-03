// A dictionary of all possible inventory items in the game.
// Each item now has a name for display and a path to its image.
export const items = {
  key_room4: { 
    name: "Key: Room 4",
    image: `/assets/items/key-4.png` 
  },
  key_room5: {
    name: "Key: Room 5",
    image: `/assets/items/key-5.png`
  },
};

export const pages = [
  
  { type: 'link', title: 'Notes', filename: 'notes', counted: false },
  { type: 'link', title: 'Rules', filename: 'rules', counted: false },
  { type: 'link', title: 'Exam', filename: 'exam', counted: false },
  { type: 'link', title: 'Who Dunnit?', filename: 'whodunit', counted: false, initialLocked: true },
  
  { type: 'category', title: 'Case File' },
  { type: 'link', title: 'Introduction', filename: 'intro', counted: false },
  
  
  { type: 'category', title: 'Suspects' },
  { type: 'link', title: 'Emilia Brooks', filename: 'ebrooks', counted: true, initialLocked: false },
  { type: 'link', title: 'Charles Pearson', filename: 'cpearson', counted: true, initialLocked: false },
  { type: 'link', title: 'Franklin Reid', filename: 'freid', counted: true, initialLocked: false },
  { type: 'link', title: 'Margaret Stanton', filename: 'mstanton', counted: true, initialLocked: false, addsItems: ['key_room4', 'key_room5'] },
  { type: 'link', title: 'Robert Stanton', filename: 'rstanton', counted: true, initialLocked: false },
  { type: 'link', title: 'Carol Stewart', filename: 'cstewart', counted: false, initialLocked: false },
  { type: 'link', title: 'Conductor - Adrian', filename: 'cadrian', counted: true, initialLocked: false },
  { type: 'link', title: 'Cook - Gregory', filename: 'cgregory', counted: true, initialLocked: false },
  { type: 'link', title: 'Servant - Thomas', filename: 'sthomas', counted: true, initialLocked: false },

  { type: 'category', title: 'Train Cars' },
  { type: 'link', title: 'Baggage Car', filename: 'baggagecar', counted: true, initialLocked: false },
  { type: 'link', title: 'Dining Car', filename: 'diningcar', counted: true, initialLocked: false },
  { type: 'link', title: 'Engine Car', filename: 'enginecar', counted: false, initialLocked: false },
  { type: 'link', title: 'Staff Car', filename: 'staffcar', counted: true, initialLocked: false },

  { type: 'category', title: 'Passenger Car' },
  { type: 'link', title: 'Room 1', filename: 'room1', counted: true, initialLocked: false },
  { type: 'link', title: 'Room 3', filename: 'room3', counted: true, initialLocked: false },
  { type: 'link', title: 'Room 4', filename: 'room4', counted: true, initialLocked: false, unlocksIfHasItem: { itemId: 'key_room4', unlocks: ['la-2'] } },
  { type: 'link', title: 'Room 5', filename: 'room5', counted: true, initialLocked: false, unlocksIfHasItem: { itemId: 'key_room5', unlocks: ['la-1'] } },
  { type: 'link', title: 'Room 6', filename: 'room6', counted: true, initialLocked: false },

  { type: 'category', title: 'Locked Areas' },
  { type: 'link', title: 'la-1', filename: 'la-1', counted: false, initialLocked: true },
  { type: 'link', title: 'la-2', filename: 'la-2', counted: false, initialLocked: true },

];
