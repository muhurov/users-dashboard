import { ROUTE_PATH } from "@/shared/config";

import { getIsPathnameMatched } from "./getIsPathnameMatched";

export const findPathnameByUrl = (url: string) => {
  return Object.values(ROUTE_PATH).find((path) =>
    getIsPathnameMatched(path, url),
  );
};
