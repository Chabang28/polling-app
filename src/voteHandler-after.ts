// src/voteHandler-after.ts
export type Poll = {
  id: string;
  options: { id: string; text: string; votes: number }[];
};

export function voteHandlerAfter(
  polls: Poll[],
  pollId: string,
  optionId: string
): Poll[] {
  return polls.map(poll =>
    poll.id === pollId
      ? {
          ...poll,
          options: poll.options.map(option =>
            option.id === optionId
              ? { ...option, votes: option.votes + 1 }
              : option
          ),
        }
      : poll
  );
}
