export default {
  sidebar: {
    register: 'ਰਜਿਸਟਰ ਕਰੋ',
    digitalIdentity: 'ਡਿਜੀਟਲ ਪਛਾਣ',
    admin: 'ਪ੍ਰਬੰਧਕ',
    settings: 'ਸੈਟਿੰਗਾਂ',
    toggleMenu: 'ਮੇਨੂ ਨੂੰ ਟੌਗਲ ਕਰੋ',
  },
  registration: {
    title: 'ਵਿਜ਼ਿਟਪਾਸ ਰਜਿਸਟ੍ਰੇਸ਼ਨ',
    description: 'ਆਪਣਾ ਡਿਜੀటਲ ਯਾਤਰਾ ਪਾਸ ਬਣਾਉਣ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਕਦਮਾਂ ਨੂੰ ਪੂਰਾ ਕਰੋ।',
    fullName: {
      label: 'ਪੂਰਾ ਨਾਂਮ',
      placeholder: 'ਆਪਣਾ ਪੂਰਾ ਨਾਂਮ ਦਰਜ ਕਰੋ',
    },
    governmentId: {
      label: 'ਸਰਕਾਰੀ ਆਈਡੀ',
      placeholder: 'ਜਿਵੇਂ ਕਿ, ਪਾਸਪੋਰਟ ਨੰਬਰ',
    },
    email: {
      label: 'ਈਮੇਲ ਪਤਾ',
    },
    phoneNumber: {
      label: 'ਫ਼ੋਨ ਨੰਬਰ',
    },
    destination: {
      label: 'ਮੰਜ਼ਿਲ ਸ਼ਹਿਰ/ਦੇਸ਼',
      placeholder: 'ਪੈਰਿਸ, ਫਰਾਂਸ',
    },
    startDate: {
      label: 'ਸ਼ੁਰੂਆਤੀ ਤਾਰੀਖ',
    },
    endDate: {
      label: 'ਅੰਤਿਮ ਤਾਰੀਖ',
    },
    emergencyContactName: {
      label: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ ਨਾਮ',
      placeholder: "ਸੰਪਰਕ ਦਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    },
    emergencyContactPhone: {
      label: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ ਫੋਨ',
    },
    consent: {
      label: 'ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਨਾਲ ਸਹਿਮਤ ਹੋਵੋ',
      description: 'ਮੈਂ ਆਪਣੀ ਯਾਤਰਾ ਦੌਰਾਨ ਪਛਾਣ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਆਪਣੇ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਅਤੇ ਸਟੋਰੇਜ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦਾ ਹਾਂ।',
    },
    buttons: {
      back: 'ਪਿੱਛੇ',
      next: 'ਅਗਲਾ',
      createPass: 'ਪਾਸ ਬਣਾਓ',
    },
    toast: {
      success: {
        title: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਫਲ!',
        description: 'ਤੁਹਾਨੂੰ ਤੁਹਾਡੇ ਡਿਜੀਟਲ ਪਾਸ ਵੱਲ ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ।'
      },
      failure: {
        title: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਸਫਲ',
        description: 'ਇੱਕ ਅਣਜਾਣ ਗਲਤੀ ਹੋਈ।'
      }
    }
  },
} as const;
