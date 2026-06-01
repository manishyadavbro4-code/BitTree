import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const { handle} = await params
    const client = await clientPromise
    const db = client.db("bittree")
    const collection = db.collection("links")

  // if the handle already claimed , you create the bittree
  const doc = await collection.findOne({  handle:handle})
    if(!doc){
        return notFound()
    }


 const item= {
  "_id": {
    "$oid": "69faeca2ca1425686994c97d"
  },
  "links": [
    {
      "link": "https://www.instagram.com/chunna_yadav_006",
      "linktext": "Instagram"
    },
    {
      "link": "https://www.facebook.com/codetechmanish",
      "linktext": "Facebook"
    }
  ],
  "handle": "codetechmanish",
  "pic": "https://pbs.twimg.com/profile_images/1663071480983457792/GlFxrKGr_bigger.jpg"
}
  
  return <div className="flex bg-purple-500 min-h-screen justify-center items-start py-10">
<div className="photo flex flex-col justify-center items-center gap-5">
    <img className="rounded-full" width={100} src={item.pic} alt="" />
    <span className="font-bold text-xl ">@{item.handle}</span>
    <span className="desc w-80 text-center gap-4 font-bold text-lg">Welcome to my linktree!</span>
    <div className="links">
        {item.links.map((item,index)=>{
            return  <Link key={index} href={item.link}><div className="py-4 px-2 bg-purple-100 min-w-96 flex justify-center shadow-lg rounded-md my-3 text-black" >
               {item.linktext}  
                
            </div></Link>
        })}
    </div>
     </div>
  </div>
}
