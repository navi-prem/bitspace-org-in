'use client'
import { Header } from "@/libs/components/layouts/header";
import "./globals.css";
import "../libs/assets/fonts/Inter/inter.css";
import { useUserStore } from "@/libs/stores";
import { useCookies } from 'next-client-cookies';
import axios from "axios";
import { API_URL } from "@/libs/constants";
import { useEffect, useState } from "react";

// export const metadata = {
//     title: "BITSPACE",
//     icons: [{ rel: "icon", url: "/app/favicon.ico" }],
//     description:
//         "Bit Space (@bitspaceorg) : A community started by students from Chennai Institute of Technology. Aims in building community for awareness and positive impact on open source projects.",
//     colorScheme: "dark",
//     viewport: "width=device-width, initial-scale=1",
//     keywords: [
//         "bitspaceorg",
//         "bitspace cit",
//         "cit bitspace",
//         "open source",
//         ":bitspace",
//     ],
//     openGraph: {
//         title: ":bitspace",
//         images: [
//             "https://cdn.discordapp.com/attachments/1106935324556406866/1122462968311992350/metaimg1x1.png",
//             "https://cdn.discordapp.com/attachments/1106935324556406866/1122462952163917954/metaimg4x3.png",
//             "https://cdn.discordapp.com/attachments/1106935324556406866/1122462919041503263/metaimg16x9.png",
//         ],
//         description:
//             "A community started by students from Chennai Institute of Technology. Aims in building community for awareness and positive impact on open source projects.",
//     },
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookies = useCookies();

    const accessToken = cookies.get("bs_access_token");
    const userStore = useUserStore((state) => state.user);
    const setUserStore = useUserStore((state) => state.setUser);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            if (accessToken && !userStore) {
                try {
                    const { data } = await axios.get(API_URL + "/me", { withCredentials: true });
                    setUserStore(data);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUser();
    }, [accessToken, userStore]);

    return (
        <html lang="en">
            <body className="bg-white relative flex flex-col items-stretch font-inter">
                {loading ? (
                    <div className="w-screen h-screen flex flex-col items-center justify-center">
                        <img className="w-[100px] animate-bounce" src="https://media.discordapp.net/attachments/1106935324556406866/1128657375260311583/logocir.png?width=1242&height=1024" />
                    </div>
                ) : (
                    <>
                        <Header />
                        <main className="h-main mt-[8vh]">{children}</main>
                    </>
                )
                }
            </body>
        </html>
    );
}
