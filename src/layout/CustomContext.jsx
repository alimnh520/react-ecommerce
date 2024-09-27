import { useContext } from "react"
import { ModeContext } from "./ModeContext"

export const CustomContext = () => {
    const getData = useContext(ModeContext)
    return getData
}