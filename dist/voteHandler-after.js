"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voteHandlerAfter = voteHandlerAfter;
function voteHandlerAfter(polls, pollId, optionId) {
    return polls.map(poll => poll.id === pollId
        ? {
            ...poll,
            options: poll.options.map(option => option.id === optionId
                ? { ...option, votes: option.votes + 1 }
                : option),
        }
        : poll);
}
