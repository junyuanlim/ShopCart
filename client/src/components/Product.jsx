import React, {useContext} from "react"
import { Outlet, Link } from 'react-router-dom';
import CartContext from "../context/CartContext";

export default function Product(props) {

    const {addItem, removeItem} = useContext(CartContext)

    return (
        <div>
            <div className="border border-solid h-[300px] relative">
                <div className="w-full h-full flex justify-center items-center overflow-hidden group">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <Link to={`/product/${props.id}`}><img className="max-h-[160px] group-hover:scale-105 transition duration-300" src={props.image} /></Link>
                    </div>
                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 flex justify-center items-center">
                        <button>
                            <div className="text-3xl p-2">
                            <ion-icon onClick={() => addItem(props)} name="add-circle-outline"></ion-icon>
                            </div>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="pt-2">   
                <div>{props.category}</div>
                <Link to={`/product/${props.id}`}><p className="font-semibold">{props.title}</p></Link>
                <div>${props.price.toFixed(2)}</div>
                <div>{props.number}</div>
            </div>
        </div>
    )
}