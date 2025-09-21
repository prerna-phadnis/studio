import axios from 'axios';
import { Tourist } from '@/lib/definitions';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTouristData = async (id: string): Promise<Tourist | null> => {
  try {
    const response = await axiosInstance.get(`/api/tourist/data/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch tourist data for id ${id}:`, error);
    // In a real app, you might want to handle different error types differently.
    return null;
  }
};

export const registerTourist = async (data: any): Promise<{ success: boolean; touristId?: string; message?: string }> => {
  try {
    const response = await axiosInstance.post('/api/tourist/register', data);
    return response.data;
  } catch (error) {
     if (axios.isAxiosError(error) && error.response) {
      console.error('Registration API error:', error.response.data);
      return { success: false, message: error.response.data.message || 'An error occurred during registration.' };
    }
    console.error('Registration error:', error);
    const message = error instanceof Error ? error.message : 'An unexpected error occurred during registration.';
    return { success: false, message };
  }
};
