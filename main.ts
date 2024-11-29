/*
Source: https://www.youtube.com/watch?v=fwxjMKBMR7s
*/

export function dijkstra(howManyNumbersToTry: number): Array<number> {
  const multiples: Array<number> = [];
  const primes: Array<number> = [];
  let smallestMultiple: number = Number.MAX_VALUE;
  let indexesOfSmallestMultiple: Array<number> = [];

  let i = 2;
  while (i < howManyNumbersToTry) {
    if (i === smallestMultiple) {
      // console.log("Equal to what we have", smallestMultiple, indexesOfSmallestMultiple);
      indexesOfSmallestMultiple.forEach(index => {
        multiples[index] += primes[index];
      });
      // console.log(multiples);
      [smallestMultiple, indexesOfSmallestMultiple] = getSmallestMultipleAndIndexes(multiples);
      i++;
      // console.log("New smallest", smallestMultiple, indexesOfSmallestMultiple);
      continue;
    }
    // console.log("Prime", i);
    primes.push(i);
    multiples.push(i ** 2);
    [smallestMultiple, indexesOfSmallestMultiple] = getSmallestMultipleAndIndexes(multiples);
    i++;
  }
  return primes;
}

function getSmallestMultipleAndIndexes(multiples: Array<number>): [number, Array<number>] {
  let indexesOfSmallestMultiple: Array<number> = [0];
  let smallestMultiple: number = multiples[0];
  multiples.forEach((multiple: number, index: number) => {
    if (multiple === smallestMultiple) {
      if (!indexesOfSmallestMultiple.includes(index)) indexesOfSmallestMultiple.push(index);
      // console.log("Found another smalest multiple", smallestMultiple, indexesOfSmallestMultiple);
    }
    else if (multiple < smallestMultiple) {
      smallestMultiple = multiple;
      indexesOfSmallestMultiple = [index];
      // console.log("Found new smalest multiple", smallestMultiple, indexesOfSmallestMultiple);
    }
  });
  return [smallestMultiple, indexesOfSmallestMultiple]
}
