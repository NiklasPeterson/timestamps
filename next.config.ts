import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript 7's native compiler is not yet supported by Next's built-in
  // checker. The build script runs `tsc --noEmit` before Next builds instead.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
