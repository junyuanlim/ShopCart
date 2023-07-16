import React from "react"

export default function Button(props) {
    return(
        <button className="bg-indigo-600 rounded hover:bg-indigo-400 duration-300 text-white py-2 px-6 font-[Poppins] md:ml-8 ">
            {props.children}
        </button>
    )
}