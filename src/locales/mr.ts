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
} as const;
