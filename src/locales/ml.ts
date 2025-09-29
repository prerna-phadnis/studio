export default {
  sidebar: {
    register: 'രജിസ്റ്റർ ചെയ്യുക',
    digitalIdentity: 'ഡിജിറ്റൽ ഐഡന്റിറ്റി',
    admin: 'അഡ്മിൻ',
    settings: 'ക്രമീകരണങ്ങൾ',
    toggleMenu: 'മെനു ടോഗിൾ ചെയ്യുക',
  },
  registration: {
    title: 'വിസിറ്റ്പാസ് രജിസ്ട്രേഷൻ',
    description: 'നിങ്ങളുടെ ഡിജിറ്റൽ ട്രാവൽ പാസ് ഉണ്ടാക്കാൻ താഴെയുള്ള ഘട്ടങ്ങൾ പൂർത്തിയാക്കുക.',
    fullName: {
      label: 'പൂർണ്ണമായ പേര്',
      placeholder: 'നിങ്ങളുടെ പൂർണ്ണമായ പേര് നൽകുക',
    },
    governmentId: {
      label: 'സർക്കാർ ഐഡി',
      placeholder: 'ഉദാ., പാസ്‌പോർട്ട് നമ്പർ',
    },
    email: {
      label: 'ഇമെയിൽ വിലാസം',
    },
    phoneNumber: {
      label: 'ഫോൺ നമ്പർ',
    },
    destination: {
      label: 'ലക്ഷ്യസ്ഥാന നഗരം/രാജ്യം',
      placeholder: 'പാരീസ്, ഫ്രാൻസ്',
    },
    startDate: {
      label: 'തുടങ്ങുന്ന തീയതി',
    },
    endDate: {
      label: 'അവസാനിക്കുന്ന തീയതി',
    },
    emergencyContactName: {
      label: 'അടിയന്തര കോൺടാക്റ്റ് പേര്',
      placeholder: "കോൺടാക്റ്റിന്റെ പേര് നൽകുക",
    },
    emergencyContactPhone: {
      label: 'അടിയന്തര കോൺടാക്റ്റ് ഫോൺ',
    },
    consent: {
      label: 'നിബന്ധനകളും വ്യവസ്ഥകളും അംഗീകരിക്കുന്നു',
      description: 'എന്റെ യാത്രയിൽ തിരിച്ചറിയൽ ആവശ്യങ്ങൾക്കായി എന്റെ ഡാറ്റ ഉപയോഗിക്കുന്നതിനും സംഭരിക്കുന്നതിനും ഞാൻ സമ്മതിക്കുന്നു.',
    },
    buttons: {
      back: 'പുറകോട്ട്',
      next: 'അടുത്തത്',
      createPass: 'പാസ് ഉണ്ടാക്കുക',
    },
    toast: {
      success: {
        title: 'രജിസ്ട്രേഷൻ വിജയകരം!',
        description: 'നിങ്ങളെ നിങ്ങളുടെ ഡിജിറ്റൽ പാസിലേക്ക് റീഡയറക്‌ടുചെയ്യുന്നു.'
      },
      failure: {
        title: 'രജിസ്ട്രേഷൻ പരാജയപ്പെട്ടു',
        description: 'അജ്ഞാതമായ ഒരു പിശക് സംഭവിച്ചു.'
      }
    }
  },
  admin: {
    title: 'അഡ്മിൻ ഡാഷ്‌ബോർഡ്',
    logout: 'ലോഗ്ഔട്ട്',
    decodeCard: {
      title: 'ടൂറിസ്റ്റ് ക്യുആർ കോഡ് ഡീകോഡ് ചെയ്യുക',
      description: 'ടൂറിസ്റ്റ് വിവരങ്ങൾ വീണ്ടെടുക്കാൻ ഒരു ക്യുആർ കോഡ് ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.',
    },
    selectImage: 'ചിത്രം തിരഞ്ഞെടുക്കുക',
    decode: 'ഡീകോഡ് ചെയ്യുക',
    decoding: 'ഡീകോഡ് ചെയ്യുകയും ഡാറ്റ ലഭ്യമാക്കുകയും ചെയ്യുന്നു...',
    error: 'പിശക്',
    selectQrCodeError: 'ദയവായി ആദ്യം ഒരു ക്യുആർ കോഡ് ചിത്രം തിരഞ്ഞെടുക്കുക.',
    qrInvalidIdError: "ക്യുആർ കോഡിൽ 'id' ഫീൽഡ് ഇല്ല.",
    qrDecodeError: 'ക്യുആർ കോഡ് ഡീകോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല. ദയവായി വ്യക്തമായ ഒരു ചിത്രം ശ്രമിക്കുക.',
    qrProcessError: 'ക്യുആർ കോഡ് പ്രോസസ്സ് ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടു.',
    success: {
      title: 'വിജയം',
      description: 'ടൂറിസ്റ്റ് ഡാറ്റ വിജയകരമായി ലഭ്യമാക്കി.',
    },
    personalInfo: {
      title: 'വ്യക്തിഗത വിവരങ്ങൾ',
      fullName: 'പൂർണ്ണമായ പേര്',
      dob: 'ജനന തീയതി',
      gender: 'ലിംഗം',
      nationality: 'പൗരത്വം',
      govId: 'സർക്കാർ ഐഡി',
    },
    contactDetails: {
      title: 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ',
      email: 'ഇമെയിൽ',
      phone: 'ഫോൺ',
    },
    travelDetails: {
      title: 'യാത്രാ വിവരങ്ങൾ',
      city: 'നഗരം',
      checkIn: 'ചെക്ക്-ഇൻ',
      checkOut: 'ചെക്ക്-ഔട്ട്',
      accommodation: 'താമസം',
    },
    emergencyContact: {
      title: 'അടിയന്തര കോൺടാക്റ്റ്',
      name: 'പേര്',
      relationship: 'ബന്ധം',
      phone: 'ഫോൺ',
    },
  }
} as const;
