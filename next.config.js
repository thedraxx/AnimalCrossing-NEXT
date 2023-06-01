/** @type {import('next').NextConfig} */

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
        serverComponentsExternalPackages: ['mongoose'],
        transpileModules: ['mongoose'],


    },

    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com', "acnhapi.com"],
    },

}
