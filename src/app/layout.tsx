import './globals.css'
import { Cinzel } from 'next/font/google'
import UnderConstruction from '@/libs/components/underConstruction'

const cinzel = Cinzel({subsets: ['latin-ext']})

export const metadata = {
    title: 'BITSPACE',
    description: '👋 Bit Space (@bitspaceorg) = 🎓 students from Chennai Institute of Technology building 🚀 community for positive impact with 🌟 open source projects.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const UNDER_CONSTRUCTION: boolean = true;

    return (
        <html lang="en">
            <body className={cinzel.className}>
               <div className='flex flex-col items-center justify-center w-screen h-screen'>
                   { UNDER_CONSTRUCTION ? <UnderConstruction /> : children }
                </div>
            </body>
        </html>
    )
}
