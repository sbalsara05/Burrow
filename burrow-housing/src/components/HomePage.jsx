import React from "react";
import IconButton from '@mui/material/IconButton';

// Importing icon images
import AccountCircle from "../icons/account_circle.png";
import Add from "../icons/add.png";
import ArrowForward from "../icons/forward.svg";
import Notifications from "../icons/notifications.png";

// Component to handle rendering icons
function IconContainer({ src, className, alt }) {
    return (
        <img src={src} className={`!relative !w-6 !h-6 ${className}`} alt={alt || "icon"} />
    );
}

export const HomePage = () => {
    return (
        <div className="bg-[#fef7ff] flex flex-row justify-center w-full">
            <div className="bg-m3-schemes-surface overflow-hidden border-8 border-solid border-m3-schemes-on-surface-variant w-[1205px] h-[821px]">
                <div className="relative w-[1223px] h-[2066px]">
                    <div className="flex flex-col w-[1121px] h-[1104px] items-center absolute top-[68px] left-[102px] bg-m3-schemes-surface-container-lowest rounded-[28px]">
                        <div className="flex flex-col h-[164px] items-start gap-10 pt-0 pb-7 px-0 relative self-stretch w-full">
                            <div className="flex items-start justify-between pt-2 pb-0 px-3 relative self-stretch w-full">
                                <IconButton>
                                    <IconContainer src={AccountCircle} className="!relative !w-6 !h-6" alt="Account Circle" />
                                </IconButton>
                                <div className="inline-flex items-center justify-end relative flex-[0_0_auto]">
                                    <IconButton>
                                        <IconContainer src={Notifications} className="!relative !w-6 !h-6" alt="Notifications" />
                                    </IconButton>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 px-6 py-0 relative self-stretch w-full">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-m3-schemes-on-surface text-[28px] tracking-[0] leading-9 whitespace-nowrap">
                                    New Subleases in Boston
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start relative self-stretch w-full rounded-[28px] overflow-hidden">
                            <div className="justify-center pt-0 pb-4 px-0 flex flex-col items-start relative self-stretch w-full">
                                <div className="flex h-12 items-center px-6 py-0 relative self-stretch w-full">
                                    <div className="relative w-fit font-m3-title-large font-bold text-m3-schemes-on-surface text-xl tracking-wide leading-7 whitespace-nowrap">
                                        Neighborhoods
                                    </div>
                                    <IconButton>
                                        <IconContainer src={ArrowForward} className="!relative !w-6 !h-6" alt="Arrow Forward" />
                                    </IconButton>
                                </div>
                                <div className="flex items-start gap-6 pl-6 pr-0 py-0 self-stretch w-full">
                                    {[
                                        { src: "/Fenway_park.jpeg", label: "Fenway" },
                                        { src: "/back_bay.jpg", label: "Back Bay" },
                                        { src: "/Roxbury_mural.jpg", label: "Roxbury" },
                                        { src: "/North_end.jpeg", label: "North End" },
                                        { src: "/South_end.jpg", label: "South End" },
                                        { src: "/TD_garden.jpg", label: "West End" },
                                        { src: "/Chinatown_gate.jpeg", label: "Chinatown" },
                                        { src: "/Seaport.jpeg", label: "Seaport" },
                                        { src: "/Cambridge.jpeg", label: "Cambridge" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex-col w-24 items-center gap-2 flex">
                                            <div className="w-24 h-24 rounded-[var(--shape-corner-full)] overflow-hidden shadow-md">
                                                <div
                                                    className="relative w-[103px] h-[99px] top-[-3px] left-[-7px] rounded-lg bg-cover bg-[50%_50%]"
                                                    style={{ backgroundImage: `url(${item.src})` }}
                                                />
                                            </div>
                                            <div className="font-m3-label-large font-bold text-m3-schemes-on-surface text-center tracking-wide leading-[1.25rem]">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-start relative self-stretch w-full">
                                <div className="flex h-12 items-center px-6 py-0 relative self-stretch w-full">
                                    <div className="relative w-fit font-m3-title-large font-bold text-m3-schemes-on-surface text-xl tracking-wide leading-7 whitespace-nowrap">
                                        Just In
                                    </div>
                                    <IconButton>
                                        <IconContainer src={ArrowForward} className="!relative !w-6 !h-6" alt="Arrow Forward" />
                                    </IconButton>
                                </div>
                                <div className="h-[221px] items-start gap-2 px-6 py-2 self-stretch w-full flex">
                                    {["/item-1.png", "/item-2.png"].map((src, index) => (
                                        <div
                                            key={index}
                                            className="bg-cover bg-center relative flex-1 self-stretch grow rounded-[28px]"
                                            style={{ backgroundImage: `url(${src})` }}
                                        />
                                    ))}
                                </div>
                                <div className="flex items-start px-6 py-0 relative self-stretch w-full">
                                    <div className="flex items-start relative flex-1 grow">
                                        <div className="flex flex-col items-start relative flex-1 grow">
                                            <div className="relative self-stretch mt-[-1.00px] font-m3-body-large font-bold text-m3-schemes-on-surface text-lg tracking-wide leading-6">
                                                Lightview
                                            </div>
                                            <p className="relative w-fit font-m3-body-medium font-medium text-m3-schemes-on-surface-variant text-base leading-5">
                                                <span className="font-bold">Roxbury <br /></span>
                                                <span>$1900-$2300 Rent • 9/1/2024</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative w-[120px] h-11 ml-[-55px]" />
                                    <div className="flex items-start relative flex-1 grow ml-[-55px]">
                                        <div className="flex flex-col items-start relative flex-1 grow">
                                            <div className="relative self-stretch mt-[-1.00px] font-m3-body-large font-bold text-m3-schemes-on-surface text-lg tracking-wide leading-6">
                                                Lightview
                                            </div>
                                            <p className="relative w-fit font-m3-body-medium font-medium text-m3-schemes-on-surface-variant text-base leading-5">
                                                <span className="font-bold">Roxbury <br /></span>
                                                <span>$1900-$2300 Rent • 9/1/2024</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
