import axios from "axios";
import type { Doctor } from "../TypeModel/Types";


export const GetDoctor = async ()=>{
    try {
        const response = await axios.get<Doctor[]>(`https://api.example.com/doctor/`);
        const data = response.data;
        return data;
    }catch (error) {
        console.error("Failed to fetch doctor:", error);
        throw new Error("Failed to fetch doctor information. Please try again later.");
    }
}
