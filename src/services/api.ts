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

export const registerTourist = async (data: any): Promise<{ success: boolean; touristId?: string; qrCodeUrl?: string; message?: string }> => {
  try {
    // We request the response as an arraybuffer to handle the image
    const response = await axiosInstance.post('/api/tourist/register', data, {
      responseType: 'arraybuffer',
    });

    // The backend returns the tourist ID in a custom header
    const touristId = response.headers['x-tourist-id'];
    if (!touristId) {
      throw new Error('Tourist ID not found in response headers.');
    }
    
    // Convert the image buffer to a Base64 data URL
    const imageBuffer = Buffer.from(response.data, 'binary');
    const qrCodeUrl = `data:image/png;base64,${imageBuffer.toString('base64')}`;
    
    return { success: true, touristId, qrCodeUrl };

  } catch (error) {
     if (axios.isAxiosError(error) && error.response) {
       // If the response is not an image, it might be a JSON error message
      try {
        const errorData = JSON.parse(Buffer.from(error.response.data).toString('utf-8'));
        return { success: false, message: errorData.message || 'An error occurred during registration.' };
      } catch (e) {
        // Fallback if parsing fails
        return { success: false, message: error.response.statusText || 'An unknown error occurred' };
      }
    }
    console.error('Registration error:', error);
    const message = error instanceof Error ? error.message : 'An unexpected error occurred during registration.';
    return { success: false, message };
  }
};
