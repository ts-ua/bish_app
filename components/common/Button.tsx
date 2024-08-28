"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ReactNode } from "react";
type ButtonProps = {
    type?: "button" | "submit";
    title?: string;
    onclick?: () => void;
    icon_start?: ReactNode | string;
    icon_end?: ReactNode | string;
    variant?: string;
    full?: boolean;
};

const Button = ({
    type,
    title,
    icon_start,
    icon_end,
    variant,
    full
}: ButtonProps) => {
    const router = useRouter();
    const handleSignIn = () => {
        router.push('../../pages/SignIn')
    }

    return (
        <button
            onClick={handleSignIn}
            type={type}
            className={`flexBetween gap-2 border ${variant} ${full && 'w-full'}`}
        >
            {icon_start && icon_start}
            <div className="whitespace-nowrap cursor-pointer" style={{ width: '-webkit-fill-available' }}>
                {title}
            </div>
            {icon_end && icon_end}
        </button>
    )
}

export default Button;