export default {
  sidebar: {
    register: 'नोंदणी करा',
    digitalIdentity: 'डिजिटल ओळख',
    admin: 'प्रशासक',
    settings: 'सेटिंग्ज',
    toggleMenu: 'मेनू टॉगल करा',
  },
  registration: {
    title: 'व्हिजिटपास नोंदणी',
    description: 'तुमचा डिजिटल प्रवास पास तयार करण्यासाठी खालील पायऱ्या पूर्ण करा.',
    fullName: {
      label: 'पूर्ण नाव',
      placeholder: 'तुमचे पूर्ण नाव टाका',
    },
    governmentId: {
      label: 'सरकारी ओळखपत्र',
      placeholder: 'उदा. पासपोर्ट क्रमांक',
    },
    email: {
      label: 'ईमेल पत्ता',
    },
    phoneNumber: {
      label: 'फोन नंबर',
    },
    destination: {
      label: 'गंतव्य शहर/देश',
      placeholder: 'पॅरिस, फ्रान्स',
    },
    startDate: {
      label: 'प्रारंभ तारीख',
    },
    endDate: {
      label: 'अंतिम तारीख',
    },
    emergencyContactName: {
      label: 'आपत्कालीन संपर्क नाव',
      placeholder: "संपर्काचे नाव टाका",
    },
    emergencyContactPhone: {
      label: 'आपत्कालीन संपर्क फोन',
    },
    consent: {
      label: 'अटी आणि शर्तींना सहमत आहात',
      description: 'मी माझ्या प्रवासादरम्यान ओळखीच्या उद्देशांसाठी माझ्या डेटाचा वापर आणि संग्रहासाठी संमती देतो/देते.',
    },
    buttons: {
      back: 'मागे',
      next: 'पुढे',
      createPass: 'पास तयार करा',
    },
    toast: {
      success: {
        title: 'नोंदणी यशस्वी!',
        description: 'तुम्हाला तुमच्या डिजिटल पासवर पुनर्निर्देशित करत आहे.'
      },
      failure: {
        title: 'नोंदणी अयशस्वी',
        description: 'एक अज्ञात त्रुटी आली.'
      }
    }
  },
  admin: {
    title: 'प्रशासक डॅशबोर्ड',
    logout: 'लॉगआउट',
    decodeCard: {
      title: 'पर्यटक QR कोड डीकोड करा',
      description: 'पर्यटकांची माहिती मिळवण्यासाठी QR कोड प्रतिमा अपलोड करा.',
    },
    selectImage: 'प्रतिमा निवडा',
    decode: 'डीकोड',
    decoding: 'डीकोड करत आहे आणि डेटा मिळवत आहे...',
    error: 'त्रुटी',
    selectQrCodeError: 'कृपया प्रथम एक QR कोड प्रतिमा निवडा.',
    qrInvalidIdError: "QR कोडमध्ये 'id' फील्ड नाही.",
    qrDecodeError: 'QR कोड डीकोड करू शकलो नाही. कृपया अधिक स्पष्ट प्रतिमा वापरून पहा.',
    qrProcessError: 'QR कोडवर प्रक्रिया करण्यात अयशस्वी.',
    success: {
      title: 'यशस्वी',
      description: 'पर्यटकांचा डेटा यशस्वीरित्या मिळवला.',
    },
    personalInfo: {
      title: 'वैयक्तिक माहिती',
      fullName: 'पूर्ण नाव',
      dob: 'जन्म तारीख',
      gender: 'लिंग',
      nationality: 'राष्ट्रीयत्व',
      govId: 'सरकारी ओळखपत्र',
    },
    contactDetails: {
      title: 'संपर्क तपशील',
      email: 'ईमेल',
      phone: 'फोन',
    },
    travelDetails: {
      title: 'प्रवासाचा तपशील',
      city: 'शहर',
      checkIn: 'चेक-इन',
      checkOut: 'चेक-आउट',
      accommodation: 'निवास',
    },
    emergencyContact: {
      title: 'आपत्कालीन संपर्क',
      name: 'नाव',
      relationship: 'नातेसंबंध',
      phone: 'फोन',
    },
  }
} as const;
