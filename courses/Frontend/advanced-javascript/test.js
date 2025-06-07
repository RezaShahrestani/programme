

const friends = [
  { name: 'Sasha', age: 17 },
  { name: 'John', age: 21 },
  { name: 'Nina', age: 19 }
];

// using forEach to iterate over the array
friends.forEach(function(person) {
  console.log(`Hi ${person.name}`);
});

// is equivalent to:
for (const person of friends) {
  console.log(`Hi ${person.name}`)
}

const names = friends.map(function(person) {
  return person.name;
});

const adults = friends.filter(function(person) {
  return person.age >= 18;
});