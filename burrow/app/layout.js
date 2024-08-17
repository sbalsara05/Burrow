import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Burrow Housing",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
