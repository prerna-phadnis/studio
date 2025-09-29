export default {
  sidebar: {
    register: 'Register',
    digitalIdentity: 'Digital Identity',
    admin: 'Admin',
    settings: 'Settings',
    toggleMenu: 'Toggle Menu',
  },
  registration: {
    title: 'VisitPass Registration',
    description: 'Complete the steps below to create your digital travel pass.',
    fullName: {
      label: 'Full Name',
      placeholder: 'Enter your full name',
    },
    governmentId: {
      label: 'Government ID',
      placeholder: 'e.g., Passport Number',
    },
    email: {
      label: 'Email Address',
    },
    phoneNumber: {
      label: 'Phone Number',
    },
    destination: {
      label: 'Destination City/Country',
      placeholder: 'Paris, France',
    },
    startDate: {
      label: 'Start Date',
    },
    endDate: {
      label: 'End Date',
    },
    emergencyContactName: {
      label: 'Emergency Contact Name',
      placeholder: "Enter contact's name",
    },
    emergencyContactPhone: {
      label: 'Emergency Contact Phone',
    },
    consent: {
      label: 'Agree to Terms and Conditions',
      description: 'I consent to the use and storage of my data for identification purposes during my travel.',
    },
    buttons: {
      back: 'Back',
      next: 'Next',
      createPass: 'Create Pass',
    },
    toast: {
        success: {
            title: 'Registration Successful!',
            description: 'Redirecting you to your digital pass.'
        },
        failure: {
            title: 'Registration Failed',
            description: 'An unknown error occurred.'
        }
    }
  },
  admin: {
    title: 'Admin Dashboard',
    logout: 'Logout',
    decodeCard: {
      title: 'Decode Tourist QR Code',
      description: 'Upload a QR code image to retrieve tourist information.',
    },
    selectImage: 'Select Image',
    decode: 'Decode',
    decoding: 'Decoding and fetching data...',
    error: 'Error',
    selectQrCodeError: 'Please select a QR code image first.',
    qrInvalidIdError: "QR code does not contain an 'id' field.",
    qrDecodeError: 'Could not decode QR code. Please try a clearer image.',
    qrProcessError: 'Failed to process QR code.',
    success: {
      title: 'Success',
      description: 'Tourist data fetched successfully.',
    },
    personalInfo: {
      title: 'Personal Information',
      fullName: 'Full Name',
      dob: 'Date of Birth',
      gender: 'Gender',
      nationality: 'Nationality',
      govId: 'Government ID',
    },
    contactDetails: {
      title: 'Contact Details',
      email: 'Email',
      phone: 'Phone',
    },
    travelDetails: {
      title: 'Travel Details',
      city: 'City',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      accommodation: 'Accommodation',
    },
    emergencyContact: {
      title: 'Emergency Contact',
      name: 'Name',
      relationship: 'Relationship',
      phone: 'Phone',
    },
  }
} as const;
