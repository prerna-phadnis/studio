import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ message: 'Authorization header is missing' }, { status: 401 });
  }

  // Ensure the backend URL is set, default to a reasonable value for development
  const backendApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8085/api';
  const backendUrl = `${backendApiUrl}/tourist/data/${id}`;

  try {
    const response = await axios.get(backendUrl, {
      headers: {
        'Authorization': authHeader, // Pass the original Authorization header
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Forward the error response from the backend
      return NextResponse.json(
        { message: error.response.data.message || 'An error occurred on the backend' },
        { status: error.response.status }
      );
    }
    // Handle non-Axios errors or cases where there's no response
    console.error('Proxy error:', error);
    return NextResponse.json({ message: 'Internal Server Error in proxy' }, { status: 500 });
  }
}
