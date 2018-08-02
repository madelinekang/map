var words = ["ground", "control", "to", "major", "tom"];

/// arguments

function map(items, transformer) {
  var output = [];
  items.forEach(function(item, index, coll){
    output.push(transformer(item, index, coll));
  });
  return output;
}

var x = map(words,function(word){
  return word.length;
});

var y = map(words, function(word) {
  return word.toUpperCase();
});

var z = map(words, function(word) {
    return word.split('').reverse().join('');
});

console.log(x, y, z);


/// return value

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

/// output
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]