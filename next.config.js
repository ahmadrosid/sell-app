/**
 * @type {import('next').NextConfig}
 */
const config = {
    experimental: {
        esmExternals: true,
        externalDir: false,
        forceSwcTransforms: false,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = config;