"use client";
import { useRef, useState, useEffect } from "react";
import { clsx } from "clsx";
import { useMediaQuery } from "usehooks-ts";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
    const [ isCollapsed, setIsCollapsed] = useState(true);
    const navbarRef = useRef(null);
    const isTablet = useMediaQuery("(max-width: 833px)");

    const [isVisible, setIsVisible] = useState(true);

    const handleHide = () => {
        if(isCollapsed){
            setTimeout(() => {
                setIsVisible(false);
            }, 500);
        }
        else{
            setTimeout(() => {
                setIsVisible(true);
            }, 200);
        }
    };

    useEffect(() => {
        if (!isTablet) {
            navbarRef.current.style.transition = "none";
            navbarRef.current.style.height = "44px";
            setIsCollapsed(true);
            setIsVisible(true);
        } 
        else if (isTablet && isCollapsed) {
            navbarRef.current.style.height = "48px";
        }
    }, [isTablet]);

    const resetWidth = () => {
        setIsCollapsed(prevState => {
            const newCollapsedState = !prevState;
            if (navbarRef.current) {
                navbarRef.current.style.height = newCollapsedState ? "48px" : "100%";
            }
            return newCollapsedState;
        });
    };

    const handleClick = () => {
        handleHide();
        resetWidth();
    }
    const navLinks = [
        {
            label: "Store",
            href: "https://www.apple.com/us/shop/goto/store"
        },
        {
            label: "Mac",
            href: "https://www.apple.com/mac/"
        },
        {
            label: "iPad",
            href: "https://www.apple.com/ipad/"
        },
        {
            label: "iPhone",
            href: "https://www.apple.com/iphone/"
        },
        {
            label: "Watch",
            href: "https://www.apple.com/watch/"
        },
        {
            label: "Vision",
            href: "https://www.apple.com/apple-vision-pro/"
        },
        {
            label: "AirPods",
            href: "https://www.apple.com/airpods/"
        },
        {
            label: "TV & Home",
            href: "https://www.apple.com/tv-home/"
        },
        {
            label: "Entertainment",
            href: "https://www.apple.com/entertainment/"
        },
        {
            label: "Accessories",
            href: "https://www.apple.com/us/shop/goto/buy_accessories"
        },
        {
            label: "Support",
            href: "https://support.apple.com/?cid=gn-ols-home-hp-tab"
        }
    ]
    return (
        <div className="relative overflow-hidden">
            <div ref={navbarRef} className={clsx("w-full bg-[#F7F7F9] fixed top-0 left-0 flex flex-col items-center overflow-auto scrollbar-hide z-50", isCollapsed ? "justify-center" : "justify-start gap-4")}>
                <div className={clsx("w-full max-w-[1024px] min-w-[300px] flex items-center px-[22px]", isVisible ? "justify-between" : "justify-end", isTablet ? "h-[48px]" : "h-[44px]")}>
                    {isVisible && (
                        <a className={clsx("h-full tabletMax:flex-grow px-2 transition duration-500", isCollapsed ? "opacity-100" : "opacity-0")}>
                            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                            </svg>
                        </a>
                    )}


                    {navLinks.map((d, i) => (<a key={i} href={d.href} className="px-2 text-xs leading-[12px] tabletMax:hidden opacity-80 antialiased tracking-wide">{d.label}</a>))}

                    {isVisible && (
                        <button className={clsx("h-full px-2 tabletMax:w-[48px] flex justify-center items-center transition duration-300", isCollapsed ? "opacity-100" : "opacity-0 invisible")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44" className={clsx("transition duration-300", isCollapsed ? "opacity-100" : "opacity-0")}>
                                <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                            </svg>
                        </button>
                    )}

                    {isVisible && (
                        <a href="https://www.apple.com/us/shop/goto/bag" className="h-full px-2 tabletMax:w-[48px] flex justify-center items-center">
                            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className={clsx("transition duration-300", isCollapsed ? "opacity-100" : "opacity-0")}>
                                <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                            </svg>
                        </a>
                    )}


                    <button className="w-[48px] h-full flex flex-col justify-center items-center px-2 py-[17px] laptop:hidden group" onClick={handleClick}>
                        <span className={clsx("block bg-gray-500 h-0.5 rounded-[1px] mb-1.5 w-[18px]  transition duration-400 group-hover:bg-gray-700", isCollapsed ? "" : "rotate-45 translate-y-1")}></span>
                        <span className={clsx("block bg-gray-500 h-0.5 rounded-[1px] w-[18px] transition duration-300 group-hover:bg-gray-700", isCollapsed ? "" : "-rotate-45 -translate-y-1")}></span>
                    </button>
                </div>
                <div className={clsx("w-full max-w-[1024px] flex flex-col items-start px-12 transition-all ease-in duration-300", isCollapsed ? "hidden" : "block")}>
                    {navLinks.map((d, i) => (<a key={i} href={d.href} className="w-full font-sfProDisplaySemibold group text-[28px] leading-[32px] opacity-80 antialiased tracking-wide mb-4">
                        <div className="flex justify-between">
                            <div className="text-nowrap">{d.label}</div>
                            <ChevronRight strokeWidth={1} size={28} className="opacity-0 group-hover:opacity-100"/>
                        </div>
                    </a>))}
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;