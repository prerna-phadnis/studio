export default {
  sidebar: {
    register: 'पंजीकरण करें',
    digitalIdentity: 'डिजिटल पहचान',
    admin: 'एडमिन',
    settings: 'सेटिंग्स',
    toggleMenu: 'मेनू टॉगल करें',
  },
  registration: {
    title: 'विजिटपास पंजीकरण',
    description: 'अपना डिजिटल यात्रा पास बनाने के लिए नीचे दिए गए चरणों को पूरा करें।',
    fullName: {
      label: 'पूरा नाम',
      placeholder: 'अपना पूरा नाम दर्ज करें',
    },
    governmentId: {
      label: 'सरकारी पहचान पत्र',
      placeholder: 'जैसे, पासपोर्ट नंबर',
    },
    email: {
      label: 'ईमेल पता',
    },
    phoneNumber: {
      label: 'फ़ोन नंबर',
    },
    destination: {
      label: 'गंतव्य शहर/देश',
      placeholder: 'पेरिस, फ्रांस',
    },
    startDate: {
      label: 'आरंभ तिथि',
    },
    endDate: {
      label: 'अंतिम तिथि',
    },
    emergencyContactName: {
      label: 'आपातकालीन संपर्क नाम',
      placeholder: "संपर्क का नाम दर्ज करें",
    },
    emergencyContactPhone: {
      label: 'आपातकालीन संपर्क फ़ोन',
    },
    consent: {
      label: 'नियमों और शर्तों से सहमत हैं',
      description: 'मैं अपनी यात्रा के दौरान पहचान के उद्देश्यों के लिए अपने डेटा के उपयोग और भंडारण के लिए सहमति देता/देती हूँ।',
    },
    buttons: {
      back: 'वापस',
      next: 'अगला',
      createPass: 'पास बनाएं',
    },
    toast: {
        success: {
            title: 'पंजीकरण सफल!',
            description: 'आपको आपके डिजिटल पास पर रीडायरेक्ट किया जा रहा है।'
        },
        failure: {
            title: 'पंजीकरण विफल',
            description: 'एक अज्ञात त्रुटि हुई।'
        }
    }
  },
  admin: {
    title: 'एडमिन डैशबोर्ड',
    logout: 'लॉगआउट',
    decodeCard: {
      title: 'पर्यटक क्यूआर कोड डिकोड करें',
      description: 'पर्यटक जानकारी प्राप्त करने के लिए एक क्यूआर कोड छवि अपलोड करें।',
    },
    selectImage: 'छवि चुनें',
    decode: 'डिकोड',
    decoding: 'डिकोड और डेटा प्राप्त किया जा रहा है...',
    error: 'त्रुटि',
    selectQrCodeError: 'कृपया पहले एक क्यूआर कोड छवि चुनें।',
    qrInvalidIdError: 'क्यूआर कोड में \'id\' फ़ील्ड नहीं है।',
    qrDecodeError: 'क्यूआर कोड डिकोड नहीं हो सका। कृपया एक स्पष्ट छवि का प्रयास करें।',
    qrProcessError: 'क्यूआर कोड संसाधित करने में विफल।',
    success: {
      title: 'सफलता',
      description: 'पर्यटक डेटा सफलतापूर्वक प्राप्त किया गया।',
    },
    personalInfo: {
      title: 'व्यक्तिगत जानकारी',
      fullName: 'पूरा नाम',
      dob: 'जन्म तिथि',
      gender: 'लिंग',
      nationality: 'राष्ट्रीयता',
      govId: 'सरकारी आईडी',
    },
    contactDetails: {
      title: 'संपर्क विवरण',
      email: 'ईमेल',
      phone: 'फ़ोन',
    },
    travelDetails: {
      title: 'यात्रा विवरण',
      city: 'शहर',
      checkIn: 'चेक-इन',
      checkOut: 'चेक-आउट',
      accommodation: 'आवास',
    },
    emergencyContact: {
      title: 'आपातकालीन संपर्क',
      name: 'नाम',
      relationship: 'रिश्ता',
      phone: 'फ़ोन',
    },
  }
} as const;
