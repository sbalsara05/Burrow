import React from "react";
import { AccountCircle } from "./AccountCircle";
import { Add } from "./Add";
import { ArrowForward } from "./ArrowForward";
import { BuildingBlocksNav } from "./BuildingBlocksNav";
import { Fab } from "./Fab";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";
import { Notifications } from "./Notifications";
import { Settings } from "./Settings";
import { StarsWrapper } from "./StarsWrapper";


export const HomePage = () => {
    return(
        <div className="bg-[#fef7ff] flex flex-row justify-center w-full">
            <div className="bg-m3-schemes-surface overflow-hidden border-8 border-solid border-m3-schemes-on-surface-variant w-[1205px] h-[821px]">
                <div className="relative w-[1223px] h-[2066px]">
                    <div className="flex flex-col w-[1121px] h-[1104px] items-center absolute top-[68px] left-[102px] bg-m3-schemes-surface-container-lowest rounded-[28px]">">
                        <div className="flex flex-col h-[164px] items-start gap-10 pt-0 pb-7 px-0 relative self-stretch w-full">
                            <div className="flex items-start justify-between pt-2 pb-0 px-3 relative self-stretch w-full flex-[0_0_auto]">
                                <IconButton
                                    icon = {<AccountCircle classname = "!relative !w-6 !-h6"/>}
                                    stateProp = "enabled"
                                    style = "standard"
                                />
                                <div className="inline-flex items-center justify-end relative flex-[0_0_auto]">
                                    <IconButton
                                        icon = {<Notifications className="!relative !w-6 !h-6" color="#49454F"/>}
                                        stateProp = "enabled"
                                        style = "standard"
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-m3-schemes-on-surface text-[28px] tracking-[0] leading-9 whitespace-nowrap">
                                    New Subleases in Boston
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-[28px] overflow-hidden">
                            <div className="justify-center pt-0 pb-4 px-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex h-12 items-center px-6 py-0 relative self-stretch w-full">
                                    <div className="relative w-fit font-m3-title-large font-[number:var(--m3-title-large-font-weight)] text-m3-schemes-on-surface text-[length:var(--m3-title-large-font-size)] tracking-[var(--m3-title-large-letter-spacing)] leading-[var(--m3-title-large-line-height)] whitespace-nowrap [font-style:var(--m3-title-large-font-style)]">
                                        Neighborhoods
                                    </div>
                                    <IconButton
                                        icon = {<ArrowForward className="!relative !w-6 !h-6"/>}
                                        stateProp = "enabled"
                                        style = "standard"
                                    />
                                </div>
                                <div className="items-start gap-6 pl-6 pr-0 py-0 self-stretch w-full flex-[0_0_auto] flex relative">
                                    <div className="flex-col w-24 items-center gap-2 flex relative">
                                        <div className="w-24 shadow-[0px_4px_4px_#00000040] relative h-24 rounded-[var(--shape-corner-full)]">
                                            <div className="relative w-[103px] h-[99px] top-[-3px] left-[-7px] rounded-lg bg-[url(/image.png)] bg-cover bg-[50%_50%]"/> // Change background picture to Fenway
                                        </div>
                                        <div className="font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-m3-schemes-on-surface text-[length:var(--m3-label-large-font-size)] text-center tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--m3-label-large-font-style)]">
                                            Fenway
                                        </div>
                                    </div>
                                    <div className="flex-col w-24 items-center gap-2 flex relative">
                                        <div className="w-24 relative h-24 rounded-[var(--shape-corner-full)] overflow-hidden bg-[url(/avatar-2.png)] bg-cover bg-[50%_50%]"> // Change background picture to Back Bay
                                            <div className="h-24 rounded-lg bg-[url(/image-2.png)] bg-cover bg-[50%_50%]"/>
                                        </div>
                                        <div className="relative self-stretch font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-m3-schemes-on-surface text-[length:var(--m3-label-large-font-size)] text-center tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--m3-label-large-font-style)]">
                                            Back Bay
                                        </div>
                                    </div>
                                    <div className="inline-flex flex-col items-center gap-2 relative flex-[0_0_auto]">
                                        <div className="w-24 relative h-24 rounded-[var(--shape-corner-full)] overflow-hidden bg-[url(/avatar-9.png)] bg-cover bg-[50%_50%]"> // Change Background to Roxbury
                                            <div className="h-24 rounded-lg bg-[url(/image-9.png)] bg-cover bg-[50%_50%]"/>
                                        </div>
                                        <div className="relative self-stretch font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-m3-schemes-on-surface text-[length:var(--m3-label-large-font-size)] text-center tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--m3-label-large-font-style)]">
                                            Roxbury
                                        </div>
                                    </div>
                                    <div className="flex-col w-24 items-center gap-2 flex relative">
                                        <div className="self-stretch w-full relative h-24 rounded-[var(--shape-corner-full)] overflow-hidden bg-[url(/avatar-3.png)] bg-cover bg-[50%_50%]"> // Change Background to North End
                                            <div className="w-24 h-24 rounded-lg bg-[url(/image-3.png)] bg-cover bg-[50%_50%]"/>
                                        </div>
                                        <div className="relative self-stretch font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-m3-schemes-on-surface text-[length:var(--m3-label-large-font-size)] text-center tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--m3-label-large-font-style)]">
                                            North End
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} //HomeWeb