import React from "react"

export default function Category(props){
    return (
        <div className="relative pt-5 transform transition-all hover:scale-105">
             <div className="absolute inset-x-0 top-6 flex justify-center z-10">
                <div className="text-white text-2xl font-bold">{props.type}</div>
            </div>
            <img className="rounded-lg" src={props.imageUrl} alt="Category" />
        </div>
    )
}