export type SourceLocation = {
  readonly line0: number;
  readonly column0: number;
};

export const sourceLocationOf = (
  needle: string,
  haystack: string,
): SourceLocation | null => {
  const index = haystack.indexOf(needle);
  if (index < 0) return null;

  const lines = haystack.substring(0, index).split("\n");
  const lastLine = lines.pop();
  const line0 = lines.length;
  const column0 = lastLine!.length;

  return {
    line0,
    column0,
  };
};
