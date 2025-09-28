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
} as const;
