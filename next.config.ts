import type { NextConfig } from "next";

const allowedDevOrigins = (process.env.NEXT_DEV_ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  output: "export",
  // Next.js blocks development-only asset and RSC requests from origins other
  // than the host it was started with. Permit this machine's LAN address so
  // phones and other local devices hydrate the same client components as
  // localhost. This setting is used only by `next dev`, never by the export.
  // Keep test-network addresses in local environment configuration so no
  // private LAN address is embedded in a Cloudflare Pages build.
  allowedDevOrigins,
  // Emit route directories with index.html so a plain static server resolves
  // internal links such as /shop and /product/<slug> correctly.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // The parent directory also has a lockfile, so pin Turbopack to this app.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
