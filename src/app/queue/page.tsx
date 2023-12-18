"use client";

import Link from "next/link";
import Image from "next/image";
import homeBtn from "../../../resources/icon/home_rounded.png"
import { useState } from "react";
import "../../../resources/Container.css"

import { useState } from "react";
import Board from "./board"
import Input from "./input"
import InputValue from './inputValue';
import axios, { AxiosError, AxiosResponse } from "axios"

export interface queueItem {
    num: Number | null,
    hasItem: boolean,
    front: boolean,
    back: boolean
}

//////////////////////////////////


export default function queue() {
    const [qeueueSizeStr, setQueueSizeStr] = useState<string>('');
    const [queueSize, setQueueSize] = useState(-1);
    const [frontIndex, setFrontIndex] = useState(-1);
    const [backIndex, setBackIndex] = useState(-1);
    const [boardExist, setBoardExist] = useState(false);
    const [queue, setQueue] = useState<queueItem[]>([]);
    const [hidden, setHidden] = useState(true)
    const [showFront, setShowFront] = useState(false)
    const [showBack, setShowBack] = useState(false)
    const [requesting, setRequesting] = useState(false)
    const [enqueueValueStr, setEnqueueValueStr] = useState("")
    const [enqueueInputHidden,setEnqueueInputHidden]=useState(true)

    function enqueue() {
        if (requesting) return;

        console.log('Enqueue')
        if (!(backIndex < queueSize)) {
            alert("This queue is full!");
            return;
        }

        if (isNaN(Number.parseInt(enqueueValueStr))) {
            alert(Please input a number);
            return;
        }
        let num = Number.parseInt(enqueueValueStr);
        const toIns = backIndex + 1;
        let tempQueue = queue;
        if (backIndex >= 0) {
            //我不確定下面這裡back的屬性是要Number 還是 boolean
            tempQueue[backIndex].back = false;
        }

        //下面這行格外注意，我不知道front要設置甚麼值 那個1只是讓他先不要報錯，交給你看適當的值
        tempQueue[toIns] = { hasItem: true, num, back: true, front: false }

        setQueue(tempQueue);
        setBackIndex(toIns);
    }

    function assign() {
        if (requesting) return;
        if (!boardExist) {
            setHidden(false)
        }
    }


    function dequeue() {
    //     if (requesting) return
    //     if (!boardExist) {
    //         alert('Init a queue first!')
    //         return
    //     }
    //     if (backIndex < 0) {
    //         alert("This queue is empty!")
    //         return
    //     }
    //     let tempQueue = queue;

    //     tempQueue.splice(backIndex, 1)

    //     //////////這邊你也要特別注意一下，很多Stack那邊的屬性我不知道搬過來應該長怎樣
    //     tempQueue.push(num: null, hasItem: false, front: false, back: false)

    //     if (backIndex - 1 >= 0) {
    //         tempQueue[backIndex - 1].back = true
    //     }
    //     setBackIndex(backIndex - 1)
    //     setQueue(tempQueue)
    // }

    // function buildQueue() {
    //     if (requesting) return;
    //     if (isNaN(Number.parseInt(qeueueSizeStr))) {
    //         alert('Please input queue size')
    //         return
    //     }

    //     let queueQ = Number.parseInt(qeueueSizeStr)
    //     if (!(queueQ >= 1 && queueQ <= 10)) {
    //         alert("Invalid Queue size!")
    //         return
    //     }
    //     let tempQueue: queueItem[] = []
    //     for (let i = 0; i < queueQ; i++)
    //         tempQueue.push({ num: null, hasItem: false, front: false, back: false })
    //     setQueue(tempQueue)
    //     setQueueSize(queueQ)
    //     setBoardExist(true)
    //     setHidden(true)
    }




    function getExample() {
        if (boardExist) {
            alert("Please clear the stack first!")
            return
        }
        setRequesting(true)
        setHidden(true);
        setQueueSizeStr("")
        getQueueFromWeb()
    }


    async function getQueueFromWeb() {
        try {
            const response: AxiosResponse | Error = await axios.get("https://web-final-project-example-api.vercel.app/stack").then(r => r).catch(e => e)

            if (response instanceof Error) {
                console.log(response)
                throw new Error(`Can't get data! Error: ${response}`)
            }
            alert("Get the response")
            const data = response.data;
            setQueueSize(data.queueSize)


            setFrontIndex(data.frontIndex)
            setBackIndex(data.backIndex)


            setQueue(data.queue)
            
            setBoardExist(true)
        }
        catch (e) {
            alert(e)
        } finally {
            setRequesting(false)
        }

    }

    function openEnqueueInput(){
        if(requesting) return;
        if(!boardExist){
            alert("Init a queue first!")
            return
        }
        
        setEnqueueInputHidden(false)
    }


}

//////////////////////////////////

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