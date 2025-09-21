import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const token = request.headers.get('Authorization');

  if (!token) {
    return NextResponse.json({ message: 'Authorization header is missing' }, { status: 401 });
  }

  const backendUrl = `${process.env.NEXT_PUBLIC_API_URL}/tourist/data/${id}`;

  try {
    const response = await axios.get(backendUrl, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(
        { message: error.response.data.message || 'An error occurred on the backend' },
        { status: error.response.status }
      );
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
