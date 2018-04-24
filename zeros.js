// Trailing zeros: https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

// Given a number, n, how many zeros are at the end of it's factorial.

function zeros (n) {
  let c = 0;
  for (n; n > 0; n--) {
    c += by5(n);
  }
  return c;
}

function by5(n) {
  if ( n % 5 == 0 ) {
    return 1 + by5(n/5);
  }
  return 0;
}

console.log(zeros(1000000000));