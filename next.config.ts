import { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})({
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      );
    }

    return config;
  },
});

export default nextConfig;
