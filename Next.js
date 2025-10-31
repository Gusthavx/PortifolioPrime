import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
        <body>
        {children}
        <SpeedInsights />  {/* Aqui */}
        </body>
        </html>
    )
}