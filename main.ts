/*
has pool and primes
list of primes has primes
pool has prime and it's square

then find smallest multipleif
if that number is less than smallest multiple
  add to list of primes
if the number is equal to smallest multiple
  add the associated prime number to the pool value
  so for pool of (2, 4) where 4 is square of 2
  if we find 4, which is equal to that square of 2
  we add the prime number associated (2) to the square
  so we end up with (2, 6)

  If more than two multiples match the value
  for example if both (2, 12) and (3, 12) match number 12
  then we increment ALL of the multiples, by their associated prime
  so we get (2, 14) and (3, 15)

again add to list of primes, then pool with it's square, continue

Source: https://www.youtube.com/watch?v=fwxjMKBMR7s
*/

function main() {
  const howManyNumbersToTry = 1_000_000;
  console.log(dijkstra(howManyNumbersToTry))
}

function dijkstra(howManyNumbersToTry: number): Array<number> {
  const multiples: Array<number> = [];
  const primes: Array<number> = [];
  let smallestMultiple: number = 3;
  let indexesOfSmallestMultiple: Array<number> = [];

  let i = 2;
  while (i < howManyNumbersToTry) {
    if (i == smallestMultiple) {
      indexesOfSmallestMultiple.forEach(index => {
        multiples[index] += primes[index];
      });
      [smallestMultiple, indexesOfSmallestMultiple] = checkIfSmallestMultipleChanged(multiples, smallestMultiple);
    }
    primes.push(i);
    multiples.push(i ** 2);
  }
  return primes;
}

function checkIfSmallestMultipleChanged(multiples: Array<number>, smallestMultiple: number): [number, Array<number>] {
  const indexesOfSmallestMultiple: Array<number> = [];
  multiples.forEach((multiple: number, index: number) => {
    if (multiple < smallestMultiple) {
      smallestMultiple = multiple;
      indexesOfSmallestMultiple.push(index);
    }
  });
  return [smallestMultiple, indexesOfSmallestMultiple]
}
