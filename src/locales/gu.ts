export default {
  sidebar: {
    register: 'નોંધણી કરો',
    digitalIdentity: 'ડિજિટલ ઓળખ',
    admin: 'એડમિન',
    settings: 'સેટિંગ્સ',
    toggleMenu: 'મેનુ ટૉગલ કરો',
  },
  registration: {
    title: 'વિઝિટપાસ નોંધણી',
    description: 'તમારો ડિજિટલ ટ્રાવેલ પાસ બનાવવા માટે નીચેના પગલાં પૂર્ણ કરો.',
    fullName: {
      label: 'પૂરું નામ',
      placeholder: 'તમારું પૂરું નામ દાખલ કરો',
    },
    governmentId: {
      label: 'સરકારી આઈડી',
      placeholder: 'દા.ત., પાસપોર્ટ નંબર',
    },
    email: {
      label: 'ઇમેઇલ સરનામું',
    },
    phoneNumber: {
      label: 'ફોન નંબર',
    },
    destination: {
      label: 'ગંતવ્ય શહેર/દેશ',
      placeholder: 'પેરિસ, ફ્રાન્સ',
    },
    startDate: {
      label: 'શરૂઆતની તારીખ',
    },
    endDate: {
      label: 'અંતિમ તારીખ',
    },
    emergencyContactName: {
      label: 'આપાતકાલીન સંપર્ક નામ',
      placeholder: "સંપર્કનું નામ દાખલ કરો",
    },
    emergencyContactPhone: {
      label: 'આપાતકાલીન સંપર્ક ફોન',
    },
    consent: {
      label: 'નિયમો અને શરતોથી સંમત થાઓ',
      description: 'હું મારી મુસાફરી દરમિયાન ઓળખના હેતુઓ માટે મારા ડેટાના ઉપયોગ અને સંગ્રહ માટે સંમતિ આપું છું.',
    },
    buttons: {
      back: 'પાછળ',
      next: 'આગળ',
      createPass: 'પાસ બનાવો',
    },
    toast: {
      success: {
        title: 'નોંધણી સફળ!',
        description: 'તમને તમારા ડિજિટલ પાસ પર રીડાયરેક્ટ કરી રહ્યાં છીએ.'
      },
      failure: {
        title: 'નોંધણી નિષ્ફળ',
        description: 'એક અજાણી ભૂલ આવી.'
      }
    }
  },
  admin: {
    title: 'એડમિન ડેશબોર્ડ',
    logout: 'લૉગઆઉટ',
    decodeCard: {
      title: 'પ્રવાસી QR કોડ ડીકોડ કરો',
      description: 'પ્રવાસી માહિતી મેળવવા માટે QR કોડ છબી અપલોડ કરો.',
    },
    selectImage: 'છબી પસંદ કરો',
    decode: 'ડીકોડ કરો',
    decoding: 'ડીકોડિંગ અને ડેટਾ મેળવી રહ્યું છે...',
    error: 'ભૂલ',
    selectQrCodeError: 'કૃપા કરીને પહેલા QR કોડ છબી પસંદ કરો.',
    qrInvalidIdError: "QR કોડમાં 'id' ફીલ્ડ નથી.",
    qrDecodeError: 'QR કોડ ડીકોડ કરી શકાયો નથી. કૃપા કરીને સ્પષ્ટ છબીનો પ્રયાસ કરો.',
    qrProcessError: 'QR કોડ પ્રક્રિયા કરવામાં નિષ્ફળ.',
    success: {
      title: 'સફળતા',
      description: 'પ્રવાસી ડેટા સફળતાપૂર્વક મેળવ્યો.',
    },
    personalInfo: {
      title: 'વ્યક્તિગત માહિતી',
      fullName: 'પૂરું નામ',
      dob: 'જન્મ તારીખ',
      gender: 'જાતિ',
      nationality: 'રાષ્ટ્રીયતા',
      govId: 'સરકારી આઈડી',
    },
    contactDetails: {
      title: 'સંપર્ક વિગતો',
      email: 'ઈમેલ',
      phone: 'ફોન',
    },
    travelDetails: {
      title: 'મુસાફરીની વિગતો',
      city: 'શહેર',
      checkIn: 'ચેક-ઇન',
      checkOut: 'ચેક-આઉટ',
      accommodation: 'આવાસ',
    },
    emergencyContact: {
      title: 'કટોકટી સંપર્ક',
      name: 'નામ',
      relationship: 'સંબંધ',
      phone: 'ફોન',
    },
  }
} as const;
