'use server';

import { redirect } from 'next/navigation';
import { RegistrationFormValues } from './schemas';

export async function registerTourist(data: RegistrationFormValues) {
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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register tourist.');
    }

    const result = await response.json();
    
    if (result.success && result.touristId) {
      redirect(`/tourist/${result.touristId}`);
    } else {
      throw new Error('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred during registration.');
  }
}
