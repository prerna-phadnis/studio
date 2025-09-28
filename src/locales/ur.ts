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
} as const;
