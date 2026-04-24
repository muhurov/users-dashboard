import type { NextConfig } from "next";

import { ROUTE_PATH } from "./src/shared/config";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: ROUTE_PATH.USERS,
        permanent: true,
      },
      {
        source: ROUTE_PATH.DASHBOARD,
        destination: ROUTE_PATH.USERS,
        permanent: true,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
