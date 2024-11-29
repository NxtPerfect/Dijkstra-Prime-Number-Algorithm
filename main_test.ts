import { assertEquals, assertNotEquals } from "@std/assert";
import { dijkstra } from "./main.ts";

Deno.test(function zeroPrimes() {
  assertEquals(dijkstra(0), []);
})

Deno.test(function negativePrimes() {
  assertEquals(dijkstra(-1), []);
})

Deno.test(function testTenPrimes() {
  assertEquals(dijkstra(10), [2, 3, 5, 7]);
});

Deno.test(function testHundredPrimes() {
  assertEquals(dijkstra(100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
})

Deno.test(function benchmarkTenThousandPrimes() {
  assertNotEquals(dijkstra(10_000), []);
})

Deno.test(function benchmarkMilionPrimes() {
  assertNotEquals(dijkstra(1_000_000), []);
})

// Deno.test(function benchmarkTenMilionPrimes() {
//   assertNotEquals(dijkstra(10_000_000), []);
// })
