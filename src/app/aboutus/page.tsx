"use client";

import Link from "next/link";
import Image from "next/image";
import homeBtn from "../../../resources/icon/home_rounded.png"
import "../../../resources/Container.css"

export default function aboutus(){
    return (
        <div>
            <h1><span>頁面尚未完成</span></h1>

            <div className="go_home">
                <Link href="/" passHref legacyBehavior>
                    <a>
                        <Image src={homeBtn} alt="" />
                    </a>
                </Link>
            </div>
        </div>
    )
}