"use client";

import { GITHUB_OAUTH_AUTH_URL, GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_REDIRECT_URL, GITHUB_SCOPE } from "@/libs/constants";
import { useUserStore } from "@/libs/stores";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkParams = {
    href: string;
    children: string;
};

function NavLink({ href, children }: NavLinkParams) {
    const pathname = usePathname();
    return (
        <Link href={href}>
            <span
                className={`font-extrabold ${pathname.match("/(.*)$")![0] === href ? "text-accent" : "text-black"
                    }
        transition-colors ease-in-out hover:text-accent
        `}
            >
                {children}
            </span>
        </Link>
    );
}

export function Header() {

    const userStore = useUserStore((state) => state.user);
    const handleProfile = async () => {
        const urlParams = new URLSearchParams({
            client_id: GITHUB_OAUTH_CLIENT_ID,
            redirect_uri: GITHUB_OAUTH_REDIRECT_URL,
            scope: GITHUB_SCOPE,
            state: "random",
        });
        const url = `${GITHUB_OAUTH_AUTH_URL}?${urlParams.toString()}`;
        window.location.href = url;
    }

    return (
        <header
            id="Wheader"
            className="h-header bg-white fixed z-40 shadow-md overflow-hidden w-screen flex justify-between items-center px-4 text-lg border-b-2 border-bsprime" //shadow-[0px_0px_9px_#000000]
        >
            <div className="w-1/6">
                <Link href="/" className="font-glb text-3xl">:bs</Link>
            </div>
            <nav className="gap-10 w-4/6 flex flex-row items-center justify-center">
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/events">EVENTS</NavLink>
                <NavLink href="/timeline">TIMELINE</NavLink>
                <NavLink href="/FAQ">FAQ</NavLink>
                <NavLink href="/socials">SOCIALS</NavLink>
                <NavLink href="/team">TEAM</NavLink>
            </nav>
            <div className="w-1/6 flex flex-col items-end justify-center">
                {!userStore ? <button onClick={handleProfile} className="bg-accent px-8 font-black py-2 text-sm border-2 border-black">
                    PROFILE
                </button> : (
                    <Link href="/u/me">
                        <img className="w-[30px] h-[30px] rounded-full" src={`https://github.com/${userStore.username}.png`} />
                    </Link>
                )}
            </div>
        </header>
    );
}

