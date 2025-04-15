import { Inter, Poppins } from 'next/font/google';
import Header from './components/Header';
import TopBar from './components/TopBar';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
    title: "Linkolia - Votre lien avec l'expertise",
    description: 'Connectez-vous avec des professionnels experts et des solutions innovantes pour répondre aux besoins de votre entreprise.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-[#313E47]`}>
                {/* 
                <TopBar />
                */}
                {/* <Header /> */}
                {children}
            </body>
        </html>
    );
}
