export default {
  sidebar: {
    register: 'பதிவு செய்யுங்கள்',
    digitalIdentity: 'டிஜிட்டல் அடையாளம்',
    admin: 'நிர்வாகம்',
    settings: 'அமைப்புகள்',
    toggleMenu: 'மெனுவை நிலைமாற்று',
  },
  registration: {
    title: 'விசிட்பாஸ் பதிவு',
    description: 'உங்கள் டிஜிட்டல் பயண அட்டையை உருவாக்க கீழே உள்ள படிகளை முடிக்கவும்.',
    fullName: {
      label: 'முழு பெயர்',
      placeholder: 'உங்கள் முழு பெயரை உள்ளிடவும்',
    },
    governmentId: {
      label: 'அரசு அடையாள அட்டை',
      placeholder: 'எ.கா., பாஸ்போர்ட் எண்',
    },
    email: {
      label: 'மின்னஞ்சல் முகவரி',
    },
    phoneNumber: {
      label: 'தொலைபேசி எண்',
    },
    destination: {
      label: 'செல்லும் நகரம்/நாடு',
      placeholder: 'பாரிஸ், பிரான்ஸ்',
    },
    startDate: {
      label: 'தொடக்க தேதி',
    },
    endDate: {
      label: 'முடிவு தேதி',
    },
    emergencyContactName: {
      label: 'அவசர தொடர்பு பெயர்',
      placeholder: "தொடர்பு பெயரை உள்ளிடவும்",
    },
    emergencyContactPhone: {
      label: 'அவசர தொடர்பு தொலைபேசி',
    },
    consent: {
      label: 'விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு உடன்படுக',
      description: 'எனது பயணத்தின் போது அடையாள நோக்கங்களுக்காக எனது தரவைப் பயன்படுத்தவும் சேமிக்கவும் நான் ஒப்புக்கொள்கிறேன்.',
    },
    buttons: {
      back: 'பின்னால்',
      next: 'அடுத்து',
      createPass: 'பாஸ் உருவாக்கவும்',
    },
    toast: {
      success: {
        title: 'பதிவு வெற்றி பெற்றது!',
        description: 'உங்கள் டிஜிட்டல் பாஸுக்கு உங்களை திசை திருப்புகிறது.'
      },
      failure: {
        title: 'பதிவு தோல்வி',
        description: 'அறியப்படாத பிழை ஏற்பட்டது.'
      }
    }
  },
  admin: {
    title: 'நிர்வாக டாஷ்போர்டு',
    logout: 'வெளியேறு',
    decodeCard: {
      title: 'சுற்றுலா QR குறியீட்டை டிகோட் செய்யவும்',
      description: 'சுற்றுலா தகவலைப் பெற QR குறியீடு படத்தை பதிவேற்றவும்.',
    },
    selectImage: 'படத்தைத் தேர்ந்தெடுக்கவும்',
    decode: 'டிகோட்',
    decoding: 'டிகோடிங் மற்றும் தரவைப் பெறுகிறது...',
    error: 'பிழை',
    selectQrCodeError: 'முதலில் QR குறியீடு படத்தைத் தேர்ந்தெடுக்கவும்.',
    qrInvalidIdError: "QR குறியீட்டில் 'id' புலம் இல்லை.",
    qrDecodeError: 'QR குறியீட்டை டிகோட் செய்ய முடியவில்லை. தெளிவான படத்தைப் முயற்சிக்கவும்.',
    qrProcessError: 'QR குறியீட்டைச் செயல்படுத்தத் தவறிவிட்டது.',
    success: {
      title: 'வெற்றி',
      description: 'சுற்றுலா தரவு வெற்றிகரமாகப் பெறப்பட்டது.',
    },
    personalInfo: {
      title: 'தனிப்பட்ட தகவல்',
      fullName: 'முழு பெயர்',
      dob: 'பிறந்த தேதி',
      gender: 'பாலினம்',
      nationality: 'தேசியம்',
      govId: 'அரசு அடையாள அட்டை',
    },
    contactDetails: {
      title: 'தொடர்பு விவரங்கள்',
      email: 'மின்னஞ்சல்',
      phone: 'தொலைபேசி',
    },
    travelDetails: {
      title: 'பயண விவரங்கள்',
      city: 'நகரம்',
      checkIn: 'செக்-இன்',
      checkOut: 'செக்-அவுட்',
      accommodation: 'தங்குமிடம்',
    },
    emergencyContact: {
      title: 'அவசர தொடர்பு',
      name: 'பெயர்',
      relationship: ' உறவுமுறை',
      phone: 'தொலைபேசி',
    },
  }
} as const;
