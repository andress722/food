import { useParams } from "react-router-dom"



export default function Product(){
    const {id } = useParams()
    return(
        <div>
            <p>Produto: <span>{id}</span></p>
        </div>
    )
}