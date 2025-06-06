import axios from "axios";

export const DeleteDoctor = async (doctorID: number): Promise<void> => {
    try {
        const response = await axios.delete(`https://api.example.com/doctor/${doctorID}`);
        if (response.status !== 200) {
            throw new Error("Failed to delete doctor.");
        }
    } catch (error) {
        console.error("Failed to delete doctor:", error);
        throw new Error("Doctor deletion failed. Please try again later.");
    }
}