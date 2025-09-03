"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voteHandlerBefore = voteHandlerBefore;
function voteHandlerBefore(polls, pollId, optionId) {
    for (let i = 0; i < polls.length; i++) {
        if (polls[i].id === pollId) {
            for (let j = 0; j < polls[i].options.length; j++) {
                if (polls[i].options[j].id === optionId) {
                    polls[i].options[j].votes++;
                }
            }
        }
    }
    return polls;
}
