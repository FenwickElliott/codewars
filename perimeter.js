// Perimeters: https://www.codewars.com/kata/559a28007caad2ac4e000083

// Given a golden rectangle constructed of n squares what is the total of all perimeters, assuming a unit of 1 being the edge of one of the seeding squares.

function perimeter(n) {
  if (n <= 2) {
    return n * 4;
  }
  n++;
  let ar = [1,1];
  let res = 2;
  for (let i = 3; i <= n; i++) {
    ar.unshift(ar[0] + ar[1]);
    res += ar[0];
  }
  return res * 4;
}

for (i = 0; i < 11; i++) {
  console.log(i, perimeter(i));
}