import axios from "axios";


export const PromoteToManager = async (doctorID: number): Promise<void> => {
    try {
        const response = await axios.put(`https://api.example.com/doctor/promote/${doctorID}`);
        if (response.status !== 200) {
            throw new Error("Failed to promote doctor to manager.");
        }
    } catch (error) {
        console.error("Failed to promote doctor:", error);
        throw new Error("Promotion failed. Please try again later.");
    }
}