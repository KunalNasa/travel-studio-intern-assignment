
/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
        {
            source: "/",
            headers: [
                { key: "Cache-Control", value: "no-store" },
            ]
        }
    ]
};

export default nextConfig;
