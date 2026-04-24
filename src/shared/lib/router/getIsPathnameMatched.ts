export const getIsPathnameMatched = (pathname: string, url: string) => {
  const pattern = new URLPattern({ pathname });
  const matched = pattern.test({ pathname: url });

  return matched;
};
