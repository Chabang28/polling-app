const { performance } = require("perf_hooks");
const beforeMod = require("../dist/voteHandler-before.js");
const afterMod = require("../dist/voteHandler-after.js");

const voteHandlerBefore = beforeMod.voteHandlerBefore;
const voteHandlerAfter = afterMod.voteHandlerAfter;

// Generate mock data
function makeData(pollsCount = 1000, optionsPerPoll = 4) {
  const polls = [];
  for (let i = 0; i < pollsCount; i++) {
    const options = [];
    for (let j = 0; j < optionsPerPoll; j++) {
      options.push({ id: `o${j}`, text: `Option ${j}`, votes: 0 });
    }
    polls.push({ id: `p${i}`, options });
  }
  return polls;
}

// Run benchmark
function run(label, fn) {
  const N = 2000;
  let polls = makeData();

  // Warm-up
  for (let i = 0; i < 200; i++) {
    const pid = `p${i % 1000}`;
    const oid = `o${i % 4}`;
    polls = fn(polls, pid, oid);
  }

  const t0 = performance.now();
  for (let i = 0; i < N; i++) {
    const pid = `p${i % 1000}`;
    const oid = `o${i % 4}`;
    polls = fn(polls, pid, oid);
  }
  const t1 = performance.now();
  console.log(`${label}: ${(t1 - t0).toFixed(2)}ms`);
}

console.log("Benchmarking… (numbers vary by device and Node version)");
run("voteHandlerBefore (mutating)", voteHandlerBefore);
run("voteHandlerAfter  (immutable)", voteHandlerAfter);
