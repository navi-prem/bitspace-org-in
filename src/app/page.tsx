'use client'
import { Bullet } from "@/libs/components/bullet";
import { Underline } from "@/libs/components/design/underline";
// import TextiGIF from "@rahul-m-navneeth/textigif";

function Landing() {
    return (
        <div
            className="flex flex-row w-full h-main shadow-md overflow-hidden"
            id="landing"
        >
            <div className="basis-2/3 flex flex-col items-center justify-center bg-opacity-40 border-b-2 border-black">
                <h1 className="font-extrabold text-7xl text-center">
                    EVERY BIT IS
                    <br /> <span className="text-accent relative">
                        OPEN
                        <Underline />
                    </span> TO ALL
                </h1>
            </div>
            <div className="basis-1/3 coverImage w-full border-l-bsprime border-l-2 border-b-2"></div>
        </div>
    );
}

function BsCircle() {
    return (
        <div className="absolute bottom-0 translate-l-1/2 translate-y-1/2 flex flex-col justify-center items-center">
            <div className="bg-white rounded-full border-2 h-36 w-36 flex justify-center items-center shadow-lg">
                <span className="text-4xl font-bold">BS</span>
            </div>
        </div>
    );
}

function About() {

    const Markgif = ({ children }: { children: string }) => {
        return <mark className="bg-nocl text-lpurple">{children}</mark>;
    };

    return (
        <>
            <section className="mx-16 mb-16 flex flex-col items-center">
                <div className="px-10 py-32 bg-accent border-2 relative flex flex-col items-center">
                    <article className="text-6xl font-inter font-bold text-center">
                        Bitspace is an organisation fostering <Markgif>innovation</Markgif>{" "}
                        and providing a platform for young coders to showcase their{" "}
                        <Markgif>skills</Markgif> through <Markgif>open-source</Markgif>{" "}
                        projects
                    </article>
                    <BsCircle />
                    <div className="absolute scale-125 top-[122%] font-black flex flex-col items-center justify-center">
                        <div>|</div>
                        <div className="-mt-4">|</div>
                        <div className="-mt-4">|</div>
                        <div className="-mt-4">|</div>
                        <div className="-mt-4">|</div>
                        <div className="-mt-4">↓</div>
                    </div>
                </div>
                <div className="my-2 flex justify-between w-full text-xs">
                    <div className="flex gap-12 lg:gap-20">
                        <Bullet name="FRONTEND" color="rgb(233 138 138)" />
                        <Bullet name="BACKEND" color="rgb(98 135 231)" />
                        <Bullet name="BACKEND" color="rgb(148 130 218)" />
                        <Bullet name="DBMS" color="rgb(138 233 176)" />
                    </div>
                    <div className="flex items-center gap-12 lg:gap-20">
                        <Bullet name="OPENSOURCE" color="rgb(233 138 138)" />
                        <Bullet name="UI/UX" color="rgb(98 135 231)" />
                        <Bullet name="CLOUD" color="rgb(148 130 218)" />
                        <Bullet name="VIM" color="rgb(138 233 176)" />
                    </div>
                </div>
            </section >
            <section className="mt-44 flex flex-col items-center">
                <div className="px-10 py-10 bg-white flex flex-col items-center">
                    <article className="text-4xl font-inter font-bold text-center">
                        This organization strives to empower young coders, foster innovation, and inspire the next generation of <span className="text-accent">technology</span> leaders.
                        Through open <span className="text-[#E98A8A]">collaboration</span> and cutting-edge projects, we aim to create a supportive <span className="text-[#6287E7]">community</span> that drives positive change and makes a lasting impact on the world.
                        Join us in shaping the future of technology!
                    </article>
                    <img className="w-[175px] h-[175px] mt-16" src="https://icon-library.com/images/pixel-icon-tumblr/pixel-icon-tumblr-13.jpg" />
                </div>
            </section>
        </>
    );
}

export default function Page() {

    return (
        <div className="pb-32 overflow-x-hidden">
            <Landing />
            <div className="my-16 font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    1
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        *WHAT IS :BITSPACE
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[200px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    ?
                </div>
            </div>
            <About />
            <div className="my-16 font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    2
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        *HOW DO WE ACHIVE IT?
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    ?
                </div>
            </div>
            <div className="my-16 font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    &rarr;
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        ONLINE COURSES
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    &larr;
                </div>
            </div>
            <div className="bg-accent mx-16 border-2 p-8 font-black text-3xl text-center">
                Accessible to learners of all levels, our comprehensive online courses cover coding and tech topics, offering exciting opportunities in the tech industry.
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-center px-16 relative">
                <div className="w-[4px] h-[70px] bg-black left-[50%]" />
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    &rarr;
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        WORKSHOPS
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    &larr;
                </div>
            </div>
            <div className="bg-accent mt-16 mx-16 border-2 p-8 font-black text-3xl text-center">
                Interact with mentors and peers, work on real-world projects, and gain practical experience in our collaborative offline workshops that foster a sense of community.
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-center px-16 relative">
                <div className="w-[4px] h-[70px] bg-black left-[50%]" />
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    &rarr;
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        OPEN COLLABORATIONS
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    &larr;
                </div>
            </div>
            <div className="bg-accent mt-16 mx-16 border-2 p-8 font-black text-3xl text-center">
                Contribute to open-source projects, enhance skills, and make a positive global tech impact through seamless knowledge sharing on our platform.
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-center px-16 relative">
                <div className="w-[4px] h-[70px] bg-black left-[50%]" />
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    &rarr;
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        REWARDING CONTRIBUTIONS
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    &larr;
                </div>
            </div>
            <div className="bg-accent mt-16 mx-16 border-2 p-8 font-black text-3xl text-center">
                We value our contributors, motivating them with rewards and incentives for showcasing excellence and innovation in their work.
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-center px-16 relative">
                <div className="w-[4px] h-[70px] bg-black left-[50%]" />
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    &rarr;
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        MENTORSHIP AND SUPPORT
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    &larr;
                </div>
            </div>
            <div className="bg-accent mt-16 mx-16 border-2 p-8 font-black text-3xl text-center">
                Our experienced mentors provide personalized guidance, nurturing talents, and helping students overcome coding challenges.
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-center px-16 relative">
                <div className="w-[4px] h-[70px] bg-black left-[50%]" />
            </div>
            <div className="font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    &rarr;
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        GLOBAL NETWORK
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    &larr;
                </div>
            </div>
            <div className="mt-16 mx-16">
                <div className="bg-accent border-2 p-8 font-black text-3xl text-center">
                    Join our community and access a worldwide network of like-minded individuals, industry professionals, and opportunities for growth and collaboration in the tech industry.
                </div>
                <div className="scale-150 mt-3 top-[122%] font-black flex flex-col items-center justify-center">
                    <div>|</div>
                    <div className="-mt-4">|</div>
                    <div className="-mt-4">|</div>
                    <div className="-mt-4">|</div>
                    <div className="-mt-4">|</div>
                    <div className="-mt-4">↓</div>
                </div>
            </div>
            <div className="my-16 font-black text-[25px] w-full text-center flex flex-row items-center justify-between px-16">
                <div className="">
                    3
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        *TOP PROJECTS
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="">
                    !
                </div>
            </div>
            <div className="my-16 font-black text-[25px] w-full text-center flex flex-row items-center justify-around px-16">
                <div className="text-[20px] w-1/6 ml-16 text-left">
                    🌟 12
                </div>
                <div className="flex flex-col items-center justify-center w-4/6">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        WEATHER-REPORTO.NVIM
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="w-1/6 mr-16 flex flex-row items-center justify-end">
                    <div className="flex flex-row items-center justify-end">
                        <div style={{ background: "rgb(98 135 231)" }} className="w-[10px] h-[10px] rounded-full" />
                        <div className="ml-2 text-sm font-inter font-bold">LUA</div>
                    </div>
                    <div className="flex flex-row items-center justify-end ml-4">
                        <div style={{ background: "rgb(138 233 176)" }} className="w-[10px] h-[10px] rounded-full" />
                        <div className="ml-2 text-sm font-inter font-bold">NEOVIM</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center">
                <img alt="WRN" src="https://cdn.discordapp.com/attachments/1140664318560587818/1143920308370280609/wr-1.jpeg" className="bg-accent -mr-[90px] grayscal h-[400px] border-2 border-black rounded-md  peer-hover:-mr-[70px] transition-all" />
                <img
                    alt="WRN"
                    src="https://cdn.discordapp.com/attachments/1140664318560587818/1143588512915013693/wrn.jpg"
                    className="bg-accent shadow-[100px] w-[400px] h-[400px] border-2 border-black rounded-md absolute peer" />
                <img alt="WRN" src="https://cdn.discordapp.com/attachments/1140664318560587818/1143920909284024330/wr-2.jpg?width=2592&height=1366" className="bg-accent -ml-[100px] grayscal h-[400px] border-2 border-black rounded-md peer-hover:-ml-[70px] transition-all" />
            </div>
            <div className="my-16 font-black text-[25px] w-full text-center flex flex-row items-center justify-around px-16">
                <div className="text-[20px] w-1/6 ml-16 text-left">
                    🌟 10
                </div>
                <div className="flex flex-col items-center justify-center w-4/6">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        SURFACE
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="w-1/6 mr-16 flex flex-row items-center justify-end">
                    <div className="flex flex-row items-center justify-end">
                        <div style={{ background: "orange" }} className="w-[10px] h-[10px] rounded-full" />
                        <div className="ml-2 text-sm font-inter font-bold">SVELTE</div>
                    </div>
                    <div className="flex flex-row items-center justify-end ml-4">
                        <div style={{ background: "rgb(233 138 138)" }} className="w-[10px] h-[10px] rounded-full" />
                        <div className="ml-2 text-sm font-inter font-bold">WS</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center">
                <img alt="SURFACE" src="https://user-images.githubusercontent.com/50259284/235842286-2827575f-b60c-4841-ba37-d07740671ee3.png" className="bg-accent -mr-[90px] grayscal h-[400px] border-2 border-black rounded-md  peer-hover:-mr-[70px] transition-all" />
                <img
                    alt="SURFACE"
                    src="https://user-images.githubusercontent.com/50259284/236601641-8eff537f-2bdf-4154-af19-09145d77a29c.jpg"
                    className="bg-accent shadow-[100px] w-[400px] h-[400px] border-2 border-black rounded-md absolute peer" />
                <img alt="SURFACE" src="https://media.discordapp.net/attachments/1098805680045043813/1099688935724175421/image.png?width=2592&height=1366" className="bg-accent -ml-[100px] grayscal h-[400px] border-2 border-black rounded-md peer-hover:-ml-[70px] transition-all" />
            </div>
            <div className="my-16 font-black text-[25px] w-full text-center flex flex-row items-center justify-around px-16">
                <div className="text-[20px] w-1/6 ml-16 text-left">
                    🌟 9
                </div>
                <div className="flex flex-col items-center justify-center w-4/6">
                    <div className="flex flex-row items-center justify-center border-2 shadow-md border-black rounded-md p-2 px-6">
                        URL-SHORTNER
                    </div>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 100 50" fill="none">
                            <path d="M100 0C100 6.56609 98.7067 13.0679 96.194 19.1342C93.6812 25.2005 89.9983 30.7124 85.3553 35.3553C80.7124 39.9983 75.2004 43.6812 69.1342 46.194C63.0679 48.7067 56.5661 50 50 50C43.4339 50 36.9321 48.7067 30.8658 46.194C24.7995 43.6812 19.2876 39.9983 14.6447 35.3553C10.0017 30.7124 6.31876 25.2004 3.80602 19.1342C1.29329 13.0679 -5.74026e-07 6.56609 0 -4.37114e-06L50 0H100Z" fill="black" />
                        </svg>
                        <div className="absolute w-[4px] h-[70px] bg-black left-[3px] top-0" />
                    </div>
                </div>
                <div className="w-1/6 mr-16 flex flex-row items-center justify-end">
                    <div className="flex flex-row items-center justify-end">
                        <div style={{ background: "rgb(98 135 231)" }} className="w-[10px] h-[10px] rounded-full" />
                        <div className="ml-2 text-sm font-inter font-bold">NEXT JS</div>
                    </div>
                    <div className="flex flex-row items-center justify-end ml-4">
                        <div style={{ background: "rgb(138 233 176)" }} className="w-[10px] h-[10px] rounded-full" />
                        <div className="ml-2 text-sm font-inter font-bold">SUPABASE</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center">
                <img alt="URL" src="https://media.discordapp.net/attachments/1053255796126916629/1143579295558664272/image.png?width=2070&height=1404" className="bg-accent -mr-[90px] grayscal h-[400px] border-2 border-black rounded-md  peer-hover:-mr-[70px] transition-all" />
                <img
                    alt="URL"
                    src="https://camo.githubusercontent.com/5bce8fee8f93b8dd5cb4007acc0e3e1dc6adaab16f128d3f8f5996fce15d87d4/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313039373732343535373134333539333031302f313130343237333531313635383330373632342f55726c2e706e673f77696474683d343138266865696768743d343138"
                    className="bg-accent shadow-[100px] w-[400px] h-[400px] border-2 border-black rounded-md absolute peer" />
                <img alt="URL" src="https://cdn.discordapp.com/attachments/1140664318560587818/1143587260902670416/image.png" className="bg-accent -ml-[100px] grayscal h-[400px] border-2 border-black rounded-md peer-hover:-ml-[70px] transition-all" />
            </div>
        </div>
    );
}
