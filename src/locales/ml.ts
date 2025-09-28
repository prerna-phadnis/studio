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
} as const;
