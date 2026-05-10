import { useDispatch } from "react-redux"
import { getData } from "../services/api.js"
import { addData } from "../slice/test.slice.js"

export const useTest = () => {
    const dispatch = useDispatch()
    const handleGetData = async () => {
        const response = await getData()
        dispatch(addData(response.data))
    }
    return {
        handleGetData
    }

}