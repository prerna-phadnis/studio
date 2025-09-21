import { NextResponse } from 'next/server';
import { Tourist } from '@/lib/definitions';
import crypto from 'crypto';

export const touristDataStore: Record<string, Tourist> = {};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.fullName || !body.email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const touristId = crypto.randomUUID();
    const qrCodeData = JSON.stringify({
      id: touristId,
      name: body.fullName,
      destination: body.destination,
    });
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      qrCodeData
    )}&size=256x256&bgcolor=f5f5f5&color=0d1117&qzone=1`;

    const newTourist: Tourist = {
      id: touristId,
      qrCodeUrl,
      fullName: body.fullName,
      governmentId: body.governmentId,
      email: body.email,
      phoneNumber: body.phoneNumber,
      destination: body.destination,
      travelStartDate: body.travelStartDate,
      travelEndDate: body.travelEndDate,
      emergencyContactName: body.emergencyContactName,
      emergencyContactPhone: body.emergencyContactPhone,
    };

    touristDataStore[touristId] = newTourist;
    
    return NextResponse.json({ success: true, touristId });
  } catch (error) {
    console.error('Registration API error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
