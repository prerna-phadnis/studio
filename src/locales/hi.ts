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
} as const;
