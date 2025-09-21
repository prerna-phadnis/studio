'use server';

import { RegistrationFormValues } from './schemas';

export async function registerTourist(data: RegistrationFormValues): Promise<{ success: boolean; touristId?: string; message?: string }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';
    
    const response = await fetch(`${baseUrl}/api/tourist/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, message: result.message || 'Failed to register tourist.' };
    }
    
    return result;

  } catch (error) {
    console.error('Registration error:', error);
    const message = error instanceof Error ? error.message : 'An unexpected error occurred during registration.';
    return { success: false, message };
  }
}
