export default {
  sidebar: {
    register: 'ನೋಂದಾಯಿಸಿ',
    digitalIdentity: 'ಡಿಜಿಟಲ್ ಗುರುತು',
    admin: 'ನಿರ್ವಾಹಕ',
    settings: 'ಸಂಯೋಜನೆಗಳು',
    toggleMenu: 'ಮೆನುವನ್ನು ಟಾಗಲ್ ಮಾಡಿ',
  },
  registration: {
    title: 'ವಿಸಿಟ್‌ಪಾಸ್ ನೋಂದಣಿ',
    description: 'ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಪ್ರಯಾಣ ಪಾಸನ್ನು ರಚಿಸಲು ಕೆಳಗಿನ ಹಂತಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
    fullName: {
      label: 'ಪೂರ್ಣ ಹೆಸರು',
      placeholder: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    },
    governmentId: {
      label: 'ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ',
      placeholder: 'ಉದಾ., ಪಾಸ್‌ಪೋರ್ಟ್ ಸಂಖ್ಯೆ',
    },
    email: {
      label: 'ಇಮೇಲ್ ವಿಳಾಸ',
    },
    phoneNumber: {
      label: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ',
    },
    destination: {
      label: 'ಗಮ್ಯಸ್ಥಾನ ನಗರ/ದೇಶ',
      placeholder: 'ಪ್ಯಾರಿಸ್, ಫ್ರಾನ್ಸ್',
    },
    startDate: {
      label: 'ಪ್ರಾರಂಭ ದಿನಾಂಕ',
    },
    endDate: {
      label: 'ಅಂತಿಮ ದಿನಾಂک',
    },
    emergencyContactName: {
      label: 'ತುರ್ತು ಸಂಪರ್ಕ ಹೆಸರು',
      placeholder: "ಸಂಪರ್ಕದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    },
    emergencyContactPhone: {
      label: 'ತುರ್ತು ಸಂಪರ್ಕ ಫೋನ್',
    },
    consent: {
      label: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳಿಗೆ ಒಪ್ಪಿಗೆ',
      description: 'ನನ್ನ ಪ್ರಯಾಣದ ಸಮಯದಲ್ಲಿ ಗುರುತಿನ ಉದ್ದೇಶಗಳಿಗಾಗಿ ನನ್ನ ಡೇಟಾವನ್ನು ಬಳಸಲು ಮತ್ತು ಸಂಗ್ರಹಿಸಲು ನಾನು ಸಮ್ಮತಿಸುತ್ತೇನೆ.',
    },
    buttons: {
      back: 'ಹಿಂದೆ',
      next: 'ಮುಂದೆ',
      createPass: 'ಪಾಸ್ ರಚಿಸಿ',
    },
    toast: {
      success: {
        title: 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ!',
        description: 'ನಿಮ್ಮನ್ನು ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಪಾಸ್‌ಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ.'
      },
      failure: {
        title: 'ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ',
        description: 'ಅಪರಿಚಿತ ದೋಷ ಸಂಭವಿಸಿದೆ.'
      }
    }
  },
  admin: {
    title: 'ನಿರ್ವಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    logout: 'ಲಾಗ್ ಔಟ್',
    decodeCard: {
      title: 'ಪ್ರವಾಸಿಗರ QR ಕೋಡ್ ಡಿಕೋಡ್ ಮಾಡಿ',
      description: 'ಪ್ರವಾಸಿಗರ ಮಾಹಿತಿಯನ್ನು ಹಿಂಪಡೆಯಲು QR ಕೋಡ್ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    },
    selectImage: 'ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    decode: 'ಡಿಕೋಡ್',
    decoding: 'ಡಿಕೋಡಿಂಗ್ ಮತ್ತು ಡೇಟಾವನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ...',
    error: 'ದೋಷ',
    selectQrCodeError: 'దయచేసి మొదట QR ಕೋಡ್ చిత్రాన్ని ఎంచుకోండి.',
    qrInvalidIdError: "QR ಕೋಡ್‌ನಲ್ಲಿ 'id' ಕ್ಷೇತ್ರವಿಲ್ಲ.",
    qrDecodeError: 'QR ಕೋಡ್ ಡಿಕೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾದ ಚಿತ್ರವನ್ನು ಪ್ರಯತ್ನಿಸಿ.',
    qrProcessError: 'QR ಕೋಡ್ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ವಿಫಲವಾಗಿದೆ.',
    success: {
      title: 'ಯಶಸ್ಸು',
      description: 'ಪ್ರವಾಸಿಗರ ಡೇಟಾವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪಡೆಯಲಾಗಿದೆ.',
    },
    personalInfo: {
      title: 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ',
      fullName: 'ಪೂರ್ಣ ಹೆಸರು',
      dob: 'ಹುಟ್ತಿದ ದಿನ',
      gender: 'ಲಿಂಗ',
      nationality: 'ರಾಷ್ಟ್ರೀಯತೆ',
      govId: 'ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ',
    },
    contactDetails: {
      title: 'ಸಂಪರ್ಕ ವಿವರಗಳು',
      email: 'ಇಮೇಲ್',
      phone: 'ಫೋನ್',
    },
    travelDetails: {
      title: 'ಪ್ರಯಾಣದ ವಿವರಗಳು',
      city: 'ನಗರ',
      checkIn: 'ಚೆಕ್-ಇನ್',
      checkOut: 'ಚೆಕ್-ಔಟ್',
      accommodation: 'ವಸತಿ',
    },
    emergencyContact: {
      title: 'ತುರ್ತು ಸಂಪರ್ಕ',
      name: 'ಹೆಸರು',
      relationship: 'ಸಂಬಂಧ',
      phone: 'ಫೋನ್',
    },
  }
} as const;
