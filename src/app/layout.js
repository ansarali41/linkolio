import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import TopBar from './components/TopBar';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
});

export const metadata = {
    title: 'Linkolio - Your Link to Expertise',
    description: 'Connect with expert professionals and innovative solutions for your business needs',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased bg-gray-900`}>
                <TopBar />
                <Header />
                {children}
            </body>
        </html>
    );
}
