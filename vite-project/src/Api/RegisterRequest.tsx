import axios from "axios";
import type { LoginRequestProps } from "../TypeModel/Types";

export const RegisterRequest = async (user : LoginRequestProps ) : Promise<string> => {
 try {
    const response = await axios.post('https://api.example.com/register', user);
    const data = response.data;
    return data.message;
}  catch (error) {
        console.error("Failed to register:", error);
        throw new Error("Registration failed. Please check your details.");
    }
}
