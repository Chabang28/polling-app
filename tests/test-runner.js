const assert = require("assert");
const beforeMod = require("../dist/voteHandler-before.js");
const afterMod = require("../dist/voteHandler-after.js");

const voteHandlerBefore = beforeMod.voteHandlerBefore;
const voteHandlerAfter = afterMod.voteHandlerAfter;

const clone = x => JSON.parse(JSON.stringify(x));

function runTest(name, fn) {
  try {
    fn();
    console.log("✅", name);
  } catch (err) {
    console.error("❌", name);
    console.error(err);
    process.exitCode = 1;
  }
}

runTest("Both versions increment the same option", () => {
  const base = [{ id: "p1", options: [{ id: "a", text: "Yes", votes: 0 }] }];
  const outBefore = voteHandlerBefore(clone(base), "p1", "a");
  const outAfter = voteHandlerAfter(clone(base), "p1", "a");
  assert.deepStrictEqual(outBefore, outAfter);
});

runTest("optionId not found leaves data unchanged", () => {
  const base = [{ id: "p1", options: [{ id: "a", text: "Yes", votes: 0 }] }];
  assert.deepStrictEqual(
    voteHandlerBefore(clone(base), "p1", "zzz"),
    voteHandlerAfter(clone(base), "p1", "zzz")
  );
});

runTest("pollId not found leaves data unchanged", () => {
  const base = [{ id: "p1", options: [{ id: "a", text: "Yes", votes: 0 }] }];
  assert.deepStrictEqual(
    voteHandlerBefore(clone(base), "nope", "a"),
    voteHandlerAfter(clone(base), "nope", "a")
  );
});
