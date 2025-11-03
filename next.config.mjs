/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
    experimental: {
    useDeploymentId: true,
    // Optionally, use with Server Actions
    useDeploymentIdServerActions: true,
  },
}

export default nextConfig
