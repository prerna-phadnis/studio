export default {
  sidebar: {
    register: 'నమోదు చేసుకోండి',
    digitalIdentity: 'డిజిటల్ గుర్తింపు',
    admin: 'అడ్మిన్',
    settings: 'సెట్టింగ్‌లు',
    toggleMenu: 'మెనుని టోగుల్ చేయండి',
  },
  registration: {
    title: 'విజిట్‌పాస్ నమోదు',
    description: 'మీ డిజిటల్ ట్రావెల్ పాస్‌ను సృష్టించడానికి దిగువ దశలను పూర్తి చేయండి.',
    fullName: {
      label: 'పూర్తి పేరు',
      placeholder: 'మీ పూర్తి పేరును నమోదు చేయండి',
    },
    governmentId: {
      label: 'ప్రభుత్వ ఐడి',
      placeholder: 'ఉదా., పాస్‌పోర్ట్ నంబర్',
    },
    email: {
      label: 'ఇమెయిల్ చిరునామా',
    },
    phoneNumber: {
      label: 'ఫోన్ నంబర్',
    },
    destination: {
      label: 'గమ్యస్థాన నగరం/దేశం',
      placeholder: 'పారిస్, ఫ్రాన్స్',
    },
    startDate: {
      label: 'ప్రారంభ తేదీ',
    },
    endDate: {
      label: 'ముగింపు తేదీ',
    },
    emergencyContactName: {
      label: 'అత్యవసర సంప్రదింపు పేరు',
      placeholder: "సంప్రదింపు పేరును నమోదు చేయండి",
    },
    emergencyContactPhone: {
      label: 'అత్యవసర సంప్రదింపు ఫోన్',
    },
    consent: {
      label: 'నిబంధనలు మరియు షరతులకు అంగీకరించండి',
      description: 'నా ప్రయాణ సమయంలో గుర్తింపు ప్రయోజనాల కోసం నా డేటాను ఉపయోగించడానికి మరియు నిల్వ చేయడానికి నేను అంగీకరిస్తున్నాను.',
    },
    buttons: {
      back: 'వెనుకకు',
      next: 'తదుపరి',
      createPass: 'పాస్‌ను సృష్టించండి',
    },
    toast: {
      success: {
        title: 'నమోదు విజయవంతమైంది!',
        description: 'మిమ్మల్ని మీ డిజిటల్ పాస్‌కు మళ్ళిస్తున్నాము.'
      },
      failure: {
        title: 'నమోదు విఫలమైంది',
        description: 'తెలియని లోపం సంభవించింది.'
      }
    }
  },
  admin: {
    title: 'అడ్మిన్ డాష్‌బోర్డ్',
    logout: 'లాగ్అవుట్',
    decodeCard: {
      title: 'పర్యాటక QR కోడ్‌ను డీకోడ్ చేయండి',
      description: 'పర్యాటక సమాచారాన్ని తిరిగి పొందడానికి QR కోడ్ చిత్రాన్ని అప్‌లోడ్ చేయండి.',
    },
    selectImage: 'చిత్రాన్ని ఎంచుకోండి',
    decode: 'డీకోడ్',
    decoding: 'డీకోడ్ చేస్తోంది మరియు డేటాను పొందుతోంది...',
    error: 'లోపం',
    selectQrCodeError: 'దయచేసి మొదట QR కోడ్ చిత్రాన్ని ఎంచుకోండి.',
    qrInvalidIdError: "QR కోడ్‌లో 'id' ఫీల్డ్ లేదు.",
    qrDecodeError: 'QR కోడ్‌ను డీకోడ్ చేయలేకపోయింది. దయచేసి స్పష్టమైన చిత్రాన్ని ప్రయత్నించండి.',
    qrProcessError: 'QR కోడ్‌ను ప్రాసెస్ చేయడంలో విఫలమైంది.',
    success: {
      title: 'విజయం',
      description: 'పర్యాటక డేటా విజయవంతంగా పొందబడింది.',
    },
    personalInfo: {
      title: 'వ్యక్తిగత సమాచారం',
      fullName: 'పూర్తి పేరు',
      dob: 'పుట్టిన తేది',
      gender: 'లింగం',
      nationality: 'జాతీయత',
      govId: 'ప్రభుత్వ ఐడి',
    },
    contactDetails: {
      title: 'సంప్రదింపు వివరాలు',
      email: 'ఇమెయిల్',
      phone: 'ఫోన్',
    },
    travelDetails: {
      title: 'ప్రయాణ వివరాలు',
      city: 'నగరం',
      checkIn: 'చెక్-ఇన్',
      checkOut: 'చెక్-అవుట్',
      accommodation: 'వసతి',
    },
    emergencyContact: {
      title: 'అత్యవసర సంప్రదింపు',
      name: 'పేరు',
      relationship: 'సంబంధం',
      phone: 'ఫోన్',
    },
  }
} as const;
