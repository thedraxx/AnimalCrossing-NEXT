/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['mongoose']

    }
}

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
                basePath: false
            },
        ]
    },
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['mongoose']

    }
}
