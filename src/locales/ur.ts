export default {
  sidebar: {
    register: 'رجسٹر کریں',
    digitalIdentity: 'ڈیجیٹل شناخت',
    admin: 'ایڈمن',
    settings: 'ترتیبات',
    toggleMenu: 'مینو کو ٹوگل کریں',
  },
  registration: {
    title: 'وزٹ پاس رجسٹریشن',
    description: 'اپنا ڈیجیٹل ٹریول پاس بنانے کے لیے نیچے دیے گئے مراحل کو مکمل کریں۔',
    fullName: {
      label: 'پورا نام',
      placeholder: 'اپنا پورا نام درج کریں',
    },
    governmentId: {
      label: 'سرکاری شناختی کارڈ',
      placeholder: 'مثلاً، پاسپورٹ نمبر',
    },
    email: {
      label: 'ای میل اڈریس',
    },
    phoneNumber: {
      label: 'فون نمبر',
    },
    destination: {
      label: 'منزل شہر/ملک',
      placeholder: 'پیرس، فرانس',
    },
    startDate: {
      label: 'شروعات کی تاریخ',
    },
    endDate: {
      label: 'اختتام کی تاریخ',
    },
    emergencyContactName: {
      label: 'ہنگامی رابطہ کا نام',
      placeholder: "رابطہ کا نام درج کریں",
    },
    emergencyContactPhone: {
      label: 'ہنگامی رابطہ فون',
    },
    consent: {
      label: 'شرائط و ضوابط سے اتفاق کریں',
      description: 'میں اپنے سفر کے دوران شناختی مقاصد کے لیے اپنے ڈیٹا کے استعمال اور ذخیرہ کرنے پر رضامندی دیتا ہوں۔',
    },
    buttons: {
      back: 'پیچھے',
      next: 'آگے',
      createPass: 'پاس بنائیں',
    },
    toast: {
      success: {
        title: 'رجسٹریشن کامیاب!',
        description: 'آپ کو آپ کے ڈیجیٹل پاس پر ری ڈائریکٹ کیا جا رہا ہے۔'
      },
      failure: {
        title: 'رجسٹریشن ناکام',
        description: 'ایک نامعلوم خرابی پیش آگئی۔'
      }
    }
  },
  admin: {
    title: 'ایڈمن ڈیش بورڈ',
    logout: 'لاگ آؤٹ',
    decodeCard: {
      title: 'سیاحوں کا کیو آر کوڈ ڈی کوڈ کریں',
      description: 'سیاحوں کی معلومات حاصل کرنے کے لیے کیو آر کوڈ کی تصویر اپ لوڈ کریں۔',
    },
    selectImage: 'تصویر منتخب کریں',
    decode: 'ڈی کوڈ',
    decoding: 'ڈی کوڈنگ اور ڈیٹا حاصل کیا جا رہا ہے...',
    error: 'خرابی',
    selectQrCodeError: 'براہ کرم پہلے کیو آر کوڈ کی تصویر منتخب کریں۔',
    qrInvalidIdError: "کیو آر کوڈ میں 'id' فیلڈ نہیں ہے۔",
    qrDecodeError: 'کیو آر کوڈ ڈی کوڈ نہیں ہو سکا۔ براہ کرم ایک صاف تصویر آزمائیں۔',
    qrProcessError: 'کیو آر کوڈ پر کارروائی کرنے میں ناکام۔',
    success: {
      title: 'کامیابی',
      description: 'سیاحوں کا ڈیٹا کامیابی سے حاصل کر لیا گیا۔',
    },
    personalInfo: {
      title: 'ذاتی معلومات',
      fullName: 'پورا نام',
      dob: 'تاریخ پیدائش',
      gender: 'جنس',
      nationality: 'قومیت',
      govId: 'سرکاری شناختی کارڈ',
    },
    contactDetails: {
      title: 'رابطے کی تفصیلات',
      email: 'ای میل',
      phone: 'فون',
    },
    travelDetails: {
      title: 'سفر کی تفصیلات',
      city: 'شہر',
      checkIn: 'چیک ان',
      checkOut: 'چیک آؤٹ',
      accommodation: 'رہائش',
    },
    emergencyContact: {
      title: 'ہنگامی رابطہ',
      name: 'نام',
      relationship: 'رشتہ',
      phone: 'فون',
    },
  }
} as const;
