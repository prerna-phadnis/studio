import { NextResponse } from 'next/server';
import { touristDataStore } from '../../register/route';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: 'Tourist ID is required' }, { status: 400 });
  }

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const touristData = touristDataStore[id];

  if (!touristData) {
     // Add some default data if not found, to avoid breaking the UI during dev/testing
    const defaultData = {
        id: id,
        fullName: 'Jane Doe (Sample)',
        governmentId: 'XX1234567',
        email: 'jane.doe@example.com',
        phoneNumber: '555-123-4567',
        destination: 'Paris, France',
        travelStartDate: '2024-09-15',
        travelEndDate: '2024-09-22',
        emergencyContactName: 'John Doe',
        emergencyContactPhone: '555-987-6543',
        qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(JSON.stringify({id, name: 'Jane Doe (Sample)'}))}&size=256x256&bgcolor=f5f5f5&color=0d1117&qzone=1`,
    };
    return NextResponse.json(defaultData);
  }

  return NextResponse.json(touristData);
}
