import axios from "axios";

export const DeleteUser = async (userID: number): Promise<void> => {
  try {
    const response = await axios.delete(`https://api.example.com/user/${userID}`);
    if (response.status !== 200) {
      throw new Error("Failed to delete user.");
    }
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("User deletion failed. Please try again later.");
  }
};