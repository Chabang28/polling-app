// src/voteHandler-before.ts
export type Poll = {
  id: string;
  options: { id: string; text: string; votes: number }[];
};

export function voteHandlerBefore(
  polls: Poll[],
  pollId: string,
  optionId: string
): Poll[] {
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

