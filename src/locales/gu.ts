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
} as const;
