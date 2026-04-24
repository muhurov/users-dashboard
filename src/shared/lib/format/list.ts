export const formatList = (list: string[]) => {
  return list.filter(Boolean).join(", ");
};
