export default {
  sidebar: {
    register: 'নিবন্ধন করুন',
    digitalIdentity: 'ডিজিটাল পরিচয়',
    admin: 'অ্যাডমিন',
    settings: 'সেটিংস',
    toggleMenu: 'মেনু টগল করুন',
  },
  registration: {
    title: 'ভিজিটপাস নিবন্ধন',
    description: 'আপনার ডিজিটাল ভ্রমণ পাস তৈরি করতে নীচের পদক্ষেপগুলি সম্পূর্ণ করুন।',
    fullName: {
      label: 'পুরো নাম',
      placeholder: 'আপনার পুরো নাম লিখুন',
    },
    governmentId: {
      label: 'সরকারি আইডি',
      placeholder: 'যেমন, পাসপোর্ট নম্বর',
    },
    email: {
      label: 'ইমেল ঠিকানা',
    },
    phoneNumber: {
      label: 'ফোন নম্বর',
    },
    destination: {
      label: 'গন্তব্য শহর/দেশ',
      placeholder: 'প্যারিস, ফ্রান্স',
    },
    startDate: {
      label: 'শুরুর তারিখ',
    },
    endDate: {
      label: 'শেষ তারিখ',
    },
    emergencyContactName: {
      label: 'জরুরী যোগাযোগ নাম',
      placeholder: "যোগাযোগের নাম লিখুন",
    },
    emergencyContactPhone: {
      label: 'জরুরী যোগাযোগ ফোন',
    },
    consent: {
      label: 'শর্তাবলী এবং শর্তাবলীতে সম্মত হন',
      description: 'আমি আমার ভ্রমণের সময় সনাক্তকরণের উদ্দেশ্যে আমার ডেটা ব্যবহার এবং সংরক্ষণে সম্মতি দিচ্ছি।',
    },
    buttons: {
      back: 'পিছনে',
      next: 'পরবর্তী',
      createPass: 'পাস তৈরি করুন',
    },
    toast: {
      success: {
        title: 'নিবন্ধন সফল!',
        description: 'আপনাকে আপনার ডিজিটাল পাসে পুনঃনির্দেশিত করা হচ্ছে।'
      },
      failure: {
        title: 'নিবন্ধন ব্যর্থ হয়েছে',
        description: 'একটি অজানা ত্রুটি ঘটেছে।'
      }
    }
  },
} as const;
