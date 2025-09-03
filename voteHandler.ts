/**
 * Adds a new vote to the votes array without mutating the original array.
 * @param votes - The current array of votes.
 * @param newVote - The new vote to add.
 * @returns A new array containing all previous votes and the new vote.
 */
function voteHandler(votes: number[], newVote: number): number[] {
    // Refactored: use immutable update to avoid side effects
    const updatedVotes = [...votes, newVote];

    // Optional: log for debugging (can remove in production)
    console.log(`Added new vote: ${newVote}`);
    console.log(`Updated votes array:`, updatedVotes);

    return updatedVotes;
}

// Example usage
const currentVotes = [1, 2, 1];
const newVotes = voteHandler(currentVotes, 2);
console.log(newVotes); // [1, 2, 1, 2]
// TEMP: Day8 refactor test line
