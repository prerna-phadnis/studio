import axios from 'axios';

const axiosInstance = axios.create({
  // Use the provided environment variable for the backend URL
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerTourist = async (data: any): Promise<{ success: boolean; qrCodeUrl?: string; message?: string }> => {
  try {
    // We request the response as an arraybuffer to handle the image
    const response = await axiosInstance.post('/tourist/register', data, {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'image/png', // Explicitly accept PNG
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to register tourist');
    }
    
    // Convert the image buffer to a Base64 data URL
    const imageBuffer = Buffer.from(response.data, 'binary');
    const qrCodeUrl = `data:image/png;base64,${imageBuffer.toString('base64')}`;
    
    return { success: true, qrCodeUrl };

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

export const getTouristData = async (id: string, token: string): Promise<any | null> => {
  try {
    const response = await axiosInstance.get(`/tourist/data/${id}`, {
      headers: {
        'Authorization': `Basic ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
            console.error('Authorization failed.');
            throw new Error('Unauthorized: Please check your credentials.');
        }
         if (error.response?.status === 404) {
            console.error('Tourist not found');
            throw new Error('Tourist data not found for the provided ID.');
        }
    }
    console.error(`Failed to fetch tourist data for id ${id}:`, error);
    throw new Error('An unexpected error occurred while fetching tourist data.');
  }
};
