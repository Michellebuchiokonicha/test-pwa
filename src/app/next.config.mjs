import withPWAInit from "@ducanh2912/next-pwa";


/** @type {import('next').NextConfig} */
const nextConfig = {};

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    // scope: "/src/app",
    // sw: "service-worker.js",
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    }
});

export default withPWA(nextConfig);

