"use client";

import Link from "next/link";
import Image from "next/image";
import homeBtn from "../../../resources/icon/home_rounded.png"
import { useState } from "react";
// import { useState } from "react";
// import Board from "./board"
// import Input from "./input"
// import InputValue from './inputValue';
// import axios, { AxiosError, AxiosResponse } from "axios"

// export interface queueItem{
//     num: Number | null,
//     hasItem: boolean,
//     front: Number,
//     back: boolean
// }



// export default function queue(){
//     const [qeueueSizeStr, setQueueSizeStr]=useState<string>('');
//     const [queueSize, setQueueSize] = useState(-1);
//     const [frontIndex, setFrontIndex] = useState(-1);
//     const [backIndex, setBackIndex] = useState(-1);
//     const [boardExist, setboardExist] = useState(false);
//     const [queue,setQueue]  = useState<queueItem[]>([]);
//     const [hidden, setHIdden] = useState(true)
//     const [showFront,setShowFront] = useState(false)
//     const [showBack,setShowBack] = useState(false)
//     const [requesting, setRequesting] = useState(false)
//     const [enqueueValueStr,setEnqueueValueStr] = useState(true)

//     function enqueue(){
//         if(requesting) return;

//         console.log('Enqueue')
//         if (!(backIndex < queueSize)) {
//             alert("This queue is full!");
//             return;
//         }

//         if(isNaN(Number.parseInt(enqueueValueStr))){
//             alert(Please input a number);
//             return;
//         }
//         let num = Number.parseInt(enqueueValueStr);
//         const toIns = backIndex +1;
//         let tempQueue = queue;
//         if(backIndex >= 0){
//             //我不確定下面這裡back的屬性是要Number 還是 boolean
//             tempQueue[backIndex].back = false;
//         }
//         tempQueue[toIns] = {hasItem: true, num, back: true}
//         setQueue(tempQueue);
//         setBackIndex(toIns);
//     }

//     function assign(){
//         if(requesting) return;
//         if(!boardExist){

//         }
//     }

// }

export default function aboutus() {
    return (
        <div>
            <h1><span>Queue(頁面尚未完成)</span></h1>

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