
import { useContext } from "react"
import { contextProduct } from "./App"

export default function Nav() {
    const result = useContext(contextProduct)
    result.map(pr => console.log(pr.pr))
    return(
        <>
        {/* <p>my id = {result.id}</p> */}
        </>
    )
}