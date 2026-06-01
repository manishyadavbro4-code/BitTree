"use client"
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';


const Generate = () => {
    const searchParams = useSearchParams()
    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get("handle") || "")
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")
    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })
        })
    }
    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }
    const submitLinks = async (linktext, link) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle":handle,
            "pic": pic,
            "desc": desc
        });
        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast(result.message)
            setLinks([])
            sethandle("")
            setpic("")
        }
        else {
            toast.error(result.message)
        }
    }

        return (
            <div className='bg-[#225ac0] min-h-screen grid grid-cols-2'>
                <div className="col1 flex justify-center items-center flex-col text-gray-900">
                    <ToastContainer />
                    <div className='flex flex-col gap-5 my-8'>
                        <h1 className='font-bold text-4xl '>Create your BitTree</h1>
                        <div className="item">
                            <h2 className='font-semibold text-2xl '>Step 1: Claim your Handle </h2>
                            <div className='mx-4'>
                                <input value={handle || ""} onChange={(e) => { sethandle(e.target.value) }} className='bg-white my-2  px-4 py-2 rounded-lg focus:outline-blue-800' type="text" placeholder='Choose a handle' />
                            </div>
                        </div>
                        <div className="item">
                            <h2 className='font-semibold text-2xl '>Step 2: Add your Links </h2>
                            {links && links.map((item, index) => {
                                return <div key={index} className='mx-4 '>
                                    <input value={item.link} onChange={(e) => { handleChange(index, e.target.value, item.linktext) }} className='bg-white mx-2 my-2  px-2 py-2 rounded-lg focus:outline-blue-800' type="text" placeholder='Enter link ' />
                                    <input value={item.linktext} onChange={(e) => { handleChange(index, item.link, e.target.value) }} className='bg-white mx-2 my-2  px-2 py-2 rounded-lg focus:outline-blue-800' type="text" placeholder='Enter link text' />
                                </div>
                            })}
                            <button onClick={() => addLink()} className='mx-2 px-5 py-2 bg-slate-950 text-white font-bold rounded-3xl'> + Add Link</button>
                        </div>
                        <div className="item">
                            <h2 className='font-semibold text-2xl '>Step 3: Add a picture and Description </h2>
                            <div className="mx-4 flex flex-col">
                                <input value={pic} onChange={(e) => { setpic(e.target.value) }} className='bg-white mx-2 my-2  px-4 py-2 rounded-lg focus:outline-blue-800' type="text" placeholder='Enter link to picture' />
                                <input value={desc} onChange={(e) => { setdesc(e.target.value) }} className='bg-white mx-2 my-2  px-4 py-2 rounded-lg focus:outline-blue-800' type="text" placeholder='Enter description' />
                                <button disabled={pic==="" || handle===""  || links[0].linktext===""} onClick={() => { submitLinks() }} className='mx-2 px-5 my-5 w-fit py-2 bg-slate-950 text-white font-bold disabled:bg-slate-600 rounded-3xl'>Create your BitTree</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col2 w-full  ">
                    <img className='h-[120vh] object-contain' src="/img4.webp" alt="" />
                </div>
            </div>
        )
    }

    export default Generate
