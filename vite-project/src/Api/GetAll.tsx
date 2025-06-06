import axios from "axios";

export const GetUsers = async (): Promise<any[]> => {
  try {
    const response = await axios.get("https://api.example.com/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};