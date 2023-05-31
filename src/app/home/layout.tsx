import { HomeNavbar } from "@/components/navbar"

export const metadata = {
    title: 'Welcome to Animal Crossing',
    description: 'View all the villagers from Animal Crossing',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <link rel="icon" type="image/x-icon" href="/Mario.png" />
            </head>
            <body>
                <HomeNavbar />
                {children}
            </body>
        </html>
    )
}
