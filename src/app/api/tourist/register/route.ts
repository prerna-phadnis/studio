import { NextResponse } from 'next/server';
import axios from 'axios';

// This route acts as a proxy to your Go backend.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Forward the request to the Go backend
    // IMPORTANT: Replace with your actual Go backend URL if it's different
    const goBackendUrl = process.env.GO_BACKEND_URL || 'http://localhost:8080/api/tourist/register';

    const response = await axios.post(goBackendUrl, body, {
      responseType: 'arraybuffer', // Crucial to receive image data
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'image/png',
      },
    });

    // The Go backend should return the new tourist ID in a custom header
    const touristId = response.headers['x-tourist-id'];
    if (!touristId) {
        console.error('x-tourist-id header missing in Go backend response');
        return NextResponse.json({ message: 'Internal Server Error: Backend did not return a tourist ID' }, { status: 500 });
    }

    // Set the headers to be forwarded to the client
    const headers = new Headers();
    headers.set('Content-Type', 'image/png');
    headers.set('X-Tourist-ID', touristId as string);

    // Return the image data directly
    return new Response(response.data, { status: 200, headers });

  } catch (error) {
    console.error('Registration proxy error:', error);
    if (axios.isAxiosError(error) && error.response) {
      // Forward the error from the Go backend
      return NextResponse.json(
        JSON.parse(Buffer.from(error.response.data).toString()), 
        { status: error.response.status }
      );
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
