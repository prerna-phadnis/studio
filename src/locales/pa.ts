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
  admin: {
    title: 'ਪ੍ਰਬੰਧਕ ਡੈਸ਼ਬੋਰਡ',
    logout: 'ਲੌਗਆਉਟ',
    decodeCard: {
      title: 'ਯਾਤਰੀ QR ਕੋਡ ਨੂੰ ਡੀਕੋਡ ਕਰੋ',
      description: 'ਯਾਤਰੀ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਇੱਕ QR ਕੋਡ ਚਿੱਤਰ ਅਪਲੋਡ ਕਰੋ।',
    },
    selectImage: 'ਚਿੱਤਰ ਚੁਣੋ',
    decode: 'ਡੀਕੋਡ',
    decoding: 'ਡੀਕੋਡਿੰਗ ਅਤੇ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...',
    error: 'ਗਲਤੀ',
    selectQrCodeError: 'ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਇੱਕ QR ਕੋਡ ਚਿੱਤਰ ਚੁਣੋ।',
    qrInvalidIdError: "QR ਕੋਡ ਵਿੱਚ ਇੱਕ 'id' ਫੀਲਡ ਨਹੀਂ ਹੈ।",
    qrDecodeError: 'QR ਕੋਡ ਨੂੰ ਡੀਕੋਡ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਸਾਫ਼ ਚਿੱਤਰ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    qrProcessError: 'QR ਕੋਡ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕਰਨ ਵਿੱਚ ਅਸਫਲ।',
    success: {
      title: 'ਸਫਲਤਾ',
      description: 'ਯਾਤਰੀ ਡਾਟਾ ਸਫਲਤਾਪੂਰਕ ਪ੍ਰਾਪਤ ਕੀਤਾ ਗਿਆ।',
    },
    personalInfo: {
      title: 'ਨਿੱਜੀ ਜਾਣਕਾਰੀ',
      fullName: 'ਪੂਰਾ ਨਾਂਮ',
      dob: 'ਜਨਮ ਮਿਤੀ',
      gender: 'ਲਿੰਗ',
      nationality: 'ਕੌਮੀਅਤ',
      govId: 'ਸਰਕਾਰੀ ਆਈਡੀ',
    },
    contactDetails: {
      title: 'ਸੰਪਰਕ ਵੇਰਵੇ',
      email: 'ਈ - ਮੇਲ',
      phone: 'ਫੋਨ',
    },
    travelDetails: {
      title: 'ਯਾਤਰਾ ਵੇਰਵੇ',
      city: 'ਸ਼ਹਿਰ',
      checkIn: 'ਚੈੱਕ-ਇਨ',
      checkOut: 'ਚੈੱਕ-ਆਉਟ',
      accommodation: 'ਰਿਹਾਇਸ਼',
    },
    emergencyContact: {
      title: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ',
      name: 'ਨਾਮ',
      relationship: 'ਰਿਸ਼ਤਾ',
      phone: 'ਫੋਨ',
    },
  }
} as const;
