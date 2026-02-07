export type Language = 'en' | 'si' | 'ta';

export const translations = {
  en: {
    // Header
    systemTitle: 'E-Land Registry System',
    country: 'Sri Lanka',

    // Navigation
    nav: {
      home: 'Home',
      verifyDeed: 'Verify Deed',
      adminLogin: 'Admin Login',
      about: 'About System',
      dashboard: 'Dashboard',
      logout: 'Logout',
    },

    // Home Page
    home: {
      welcome: 'Welcome to the Official Land Registry',
      subtitle: 'Secure, transparent, and tamper-proof deed verification powered by digital technology',
      searchLabel: 'Enter Land Title Number',
      searchPlaceholder: 'e.g., LT/WP/COL/2024/00001',
      searchButton: 'Verify Ownership',
      features: {
        title: 'Why Digital Verification?',
        security: {
          title: 'Immutable Records',
          desc: 'Once recorded, deed information cannot be altered or deleted',
        },
        transparency: {
          title: 'Full Transparency',
          desc: 'All transactions are publicly verifiable and traceable',
        },
        speed: {
          title: 'Instant Verification',
          desc: 'Verify ownership status in seconds, not days',
        },
      },
    },

    // Verification Page
    verify: {
      title: 'Deed Verification',
      subtitle: 'Securely verify land ownership details',
      enterDeed: 'Enter Land Title Number to Verify',
      placeholder: 'e.g., LT/WP/COL/2024/00001',
      button: 'Verify',
      searching: 'Verifying...',
      result: {
        title: 'Verification Result',
        landTitleNumber: 'Land Title Number',
        deedNumber: 'Deed Number',
        status: 'Status',
        valid: 'Valid',
        invalid: 'Invalid',
        notFound: 'Not Found',
        owner: 'Current Owner',
        location: 'Land Location',
        area: 'Land Area',
        lastVerified: 'Last Verified',
        blockchainHash: 'Document Hash',
        verificationBadge: 'Digitally Verified',
        privacyNote: 'No personal data is exposed. Only cryptographic hashes are recorded for verification.',
      },
      newSearch: 'New Search',
    },

    // Admin Login
    login: {
      title: 'Administrator Login',
      subtitle: 'Access the Land Registry Management System',
      warning: 'Authorized Personnel Only',
      username: 'Username',
      password: 'Password',
      otp: 'OTP Code (Optional)',
      button: 'Login',
      forgotPassword: 'Forgot Password?',
      error: 'Invalid credentials. Please try again.',
    },

    // Admin Dashboard
    dashboard: {
      title: 'Dashboard',
      welcome: 'Welcome, Administrator',
      overview: 'Overview',
      stats: {
        totalDeeds: 'Total Deeds',
        pendingTransfers: 'Pending Transfers',
        todayVerifications: "Today's Verifications",
        activeUsers: 'Active Users',
      },
      menu: {
        overview: 'Dashboard Overview',
        registerDeed: 'Register New Deed',
        transferDeed: 'Transfer Ownership',
        updateDeed: 'Update Deed Info',
        searchDeeds: 'Search Deeds',
        auditLogs: 'Audit Logs',
      },
      recentActivity: 'Recent Activity',
    },

    // Register Deed
    register: {
      title: 'Register New Deed',
      landTitleNumber: 'Land Title Number',
      deedNumber: 'Deed Number',
      landLocation: 'Land Location',
      surveyRef: 'Survey Reference Number',
      ownerName: 'Owner Full Name',
      ownerNIC: 'Owner NIC Number',
      landArea: 'Land Area (Perches)',
      uploadDoc: 'Upload Deed Document (PDF)',
      generateHash: 'Generate Hash',
      submit: 'Submit to Registry',
      hashGenerated: 'Hash Generated',
      success: 'Deed successfully registered in the system',
    },

    // Audit Logs
    audit: {
      title: 'Audit Logs',
      transactionId: 'Transaction ID',
      landTitleNumber: 'Land Title Number',
      deedNumber: 'Deed Number',
      action: 'Action',
      performedBy: 'Performed By',
      timestamp: 'Timestamp',
      actions: {
        register: 'Registration',
        transfer: 'Transfer',
        update: 'Update',
        verify: 'Verification',
      },
    },

    // About Page
    about: {
      title: 'About This System',
      intro: 'The E-Land Registry System is a revolutionary approach to managing land ownership records in Sri Lanka.',
      howItWorks: {
        title: 'How It Works',
        step1: {
          title: 'Deed Registration',
          desc: 'Land registry officers register new deeds with complete ownership details.',
        },
        step2: {
          title: 'Hash Generation',
          desc: 'A unique cryptographic hash is generated from the deed information.',
        },
        step3: {
          title: 'Secure Storage',
          desc: 'The hash is permanently stored in the system, creating an immutable record.',
        },
        step4: {
          title: 'Public Verification',
          desc: 'Anyone can verify deed authenticity using the deed number.',
        },
      },
      benefits: {
        title: 'Key Benefits',
        fraud: 'Prevents deed fraud and forgery',
        disputes: 'Reduces land ownership disputes',
        efficiency: 'Faster verification process',
        trust: 'Builds public trust in land records',
      },
    },

    // Footer
    footer: {
      research: 'This system is a prototype developed for academic research purposes.',
      university: 'Sri Lankan University Research Project',
      copyright: 'All rights reserved.',
      disclaimer: 'This is a research prototype and not an official government system.',
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      submit: 'Submit',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      noResults: 'No results found',
      required: 'Required',
    },
  },

  si: {
    // Header
    systemTitle: 'ඊ-ඉඩම් ලේඛන පද්ධතිය',
    country: 'ශ්‍රී ලංකාව',

    // Navigation
    nav: {
      home: 'මුල් පිටුව',
      verifyDeed: 'ඔප්පුව සත්‍යාපනය',
      adminLogin: 'පරිපාලක පිවිසුම',
      about: 'පද්ධතිය ගැන',
      dashboard: 'උපකරණ පුවරුව',
      logout: 'පිටවීම',
    },

    // Home Page
    home: {
      welcome: 'නිල ඉඩම් ලේඛනාගාරයට සාදරයෙන් පිළිගනිමු',
      subtitle: 'ඩිජිටල් තාක්ෂණයෙන් බලගැන්වූ ආරක්ෂිත, විනිවිද පෙනෙන සහ වෙනස් කළ නොහැකි ඔප්පු සත්‍යාපනය',
      searchLabel: 'ඉඩම් හිමිකම් අංකය ඇතුළත් කරන්න',
      searchPlaceholder: 'උදා: LT/WP/COL/2024/00001',
      searchButton: 'අයිතිය සත්‍යාපනය කරන්න',
      features: {
        title: 'ඩිජිටල් සත්‍යාපනය ඇයි?',
        security: {
          title: 'වෙනස් කළ නොහැකි වාර්තා',
          desc: 'වාර්තා කළ පසු, ඔප්පු තොරතුරු වෙනස් කිරීමට හෝ මකා දැමීමට නොහැක',
        },
        transparency: {
          title: 'සම්පූර්ණ විනිවිදභාවය',
          desc: 'සියලුම ගනුදෙනු ප්‍රසිද්ධියේ සත්‍යාපනය කළ හැකි සහ සොයාගත හැකිය',
        },
        speed: {
          title: 'ක්ෂණික සත්‍යාපනය',
          desc: 'දින නොව තත්පර කිහිපයකින් අයිතිය සත්‍යාපනය කරන්න',
        },
      },
    },

    // Verification Page
    verify: {
      title: 'ඔප්පු සත්‍යාපනය',
      subtitle: 'ඉඩම් අයිතිය පිළිබඳ විස්තර ආරක්ෂිතව සත්‍යාපනය කරන්න',
      enterDeed: 'සත්‍යාපනය සඳහා ඉඩම් හිමිකම් අංකය ඇතුළත් කරන්න',
      placeholder: 'උදා: LT/WP/COL/2024/00001',
      button: 'සත්‍යාපනය කරන්න',
      searching: 'සත්‍යාපනය වෙමින්...',
      result: {
        title: 'සත්‍යාපන ප්‍රතිඵලය',
        landTitleNumber: 'ඉඩම් හිමිකම් අංකය',
        deedNumber: 'ඔප්පු අංකය',
        status: 'තත්ත්වය',
        valid: 'වලංගු',
        invalid: 'අවලංගු',
        notFound: 'හමු නොවීය',
        owner: 'වත්මන් හිමිකරු',
        location: 'ඉඩම් පිහිටීම',
        area: 'ඉඩම් ප්‍රමාණය',
        lastVerified: 'අවසන් සත්‍යාපනය',
        blockchainHash: 'ලේඛන හැෂ්',
        verificationBadge: 'ඩිජිටල් සත්‍යාපිත',
        privacyNote: 'පුද්ගලික දත්ත නිරාවරණය නොවේ. සත්‍යාපනය සඳහා ගුප්ත හැෂ් පමණක් වාර්තා වේ.',
      },
      newSearch: 'නව සෙවීම',
    },

    // Admin Login
    login: {
      title: 'පරිපාලක පිවිසුම',
      subtitle: 'ඉඩම් ලේඛන කළමනාකරණ පද්ධතියට ප්‍රවේශ වන්න',
      warning: 'බලයලත් නිලධාරීන් පමණි',
      username: 'පරිශීලක නාමය',
      password: 'මුරපදය',
      otp: 'OTP කේතය (විකල්ප)',
      button: 'පිවිසෙන්න',
      forgotPassword: 'මුරපදය අමතකද?',
      error: 'වලංගු නොවන අක්තපත්‍ර. කරුණාකර නැවත උත්සාහ කරන්න.',
    },

    // Admin Dashboard
    dashboard: {
      title: 'උපකරණ පුවරුව',
      welcome: 'සාදරයෙන් පිළිගනිමු, පරිපාලක',
      overview: 'දළ විශ්ලේෂණය',
      stats: {
        totalDeeds: 'මුළු ඔප්පු',
        pendingTransfers: 'අපේක්ෂිත මාරු',
        todayVerifications: 'අද සත්‍යාපන',
        activeUsers: 'සක්‍රිය පරිශීලකයින්',
      },
      menu: {
        overview: 'උපකරණ පුවරු දළ විශ්ලේෂණය',
        registerDeed: 'නව ඔප්පුව ලියාපදිංචි කරන්න',
        transferDeed: 'අයිතිය මාරු කරන්න',
        updateDeed: 'ඔප්පු තොරතුරු යාවත්කාලීන කරන්න',
        searchDeeds: 'ඔප්පු සොයන්න',
        auditLogs: 'විගණන ලඝු',
      },
      recentActivity: 'මෑත ක්‍රියාකාරකම්',
    },

    // Register Deed
    register: {
      title: 'නව ඔප්පුව ලියාපදිංචි කරන්න',
      landTitleNumber: 'ඉඩම් හිමිකම් අංකය',
      deedNumber: 'ඔප්පු අංකය',
      landLocation: 'ඉඩම් පිහිටීම',
      surveyRef: 'සමීක්ෂණ යොමු අංකය',
      ownerName: 'හිමිකරුගේ සම්පූර්ණ නම',
      ownerNIC: 'හිමිකරුගේ ජාතික හැඳුනුම්පත් අංකය',
      landArea: 'ඉඩම් ප්‍රමාණය (පර්චස්)',
      uploadDoc: 'ඔප්පු ලේඛනය උඩුගත කරන්න (PDF)',
      generateHash: 'හැෂ් ජනනය කරන්න',
      submit: 'ලේඛනාගාරයට ඉදිරිපත් කරන්න',
      hashGenerated: 'හැෂ් ජනනය විය',
      success: 'ඔප්පුව පද්ධතියේ සාර්ථකව ලියාපදිංචි විය',
    },

    // Audit Logs
    audit: {
      title: 'විගණන ලඝු',
      transactionId: 'ගනුදෙනු හැඳුනුම්පත',
      landTitleNumber: 'ඉඩම් හිමිකම් අංකය',
      deedNumber: 'ඔප්පු අංකය',
      action: 'ක්‍රියාව',
      performedBy: 'සිදු කළේ',
      timestamp: 'කාල මුද්‍රාව',
      actions: {
        register: 'ලියාපදිංචිය',
        transfer: 'මාරුව',
        update: 'යාවත්කාලීන',
        verify: 'සත්‍යාපනය',
      },
    },

    // About Page
    about: {
      title: 'මෙම පද්ධතිය ගැන',
      intro: 'ඊ-ඉඩම් ලේඛන පද්ධතිය ශ්‍රී ලංකාවේ ඉඩම් අයිතිය වාර්තා කළමනාකරණය සඳහා විප්ලවීය ප්‍රවේශයකි.',
      howItWorks: {
        title: 'එය ක්‍රියා කරන ආකාරය',
        step1: {
          title: 'ඔප්පු ලියාපදිංචිය',
          desc: 'ඉඩම් ලේඛන නිලධාරීන් සම්පූර්ණ අයිතිකාරත්ව විස්තර සමඟ නව ඔප්පු ලියාපදිංචි කරයි.',
        },
        step2: {
          title: 'හැෂ් ජනනය',
          desc: 'ඔප්පු තොරතුරු වලින් අද්විතීය ගුප්ත හැෂ් එකක් ජනනය වේ.',
        },
        step3: {
          title: 'ආරක්ෂිත ගබඩාව',
          desc: 'හැෂ් පද්ධතිය තුළ ස්ථිරව ගබඩා කර, වෙනස් කළ නොහැකි වාර්තාවක් නිර්මාණය කරයි.',
        },
        step4: {
          title: 'ප්‍රසිද්ධ සත්‍යාපනය',
          desc: 'ඔප්පු අංකය භාවිතා කර ඕනෑම කෙනෙකුට ඔප්පු අව්‍යාජභාවය සත්‍යාපනය කළ හැක.',
        },
      },
      benefits: {
        title: 'ප්‍රධාන ප්‍රතිලාභ',
        fraud: 'ඔප්පු වංචා සහ ව්‍යාජ ලේඛන වළක්වයි',
        disputes: 'ඉඩම් අයිතිකාරත්ව ආරවුල් අඩු කරයි',
        efficiency: 'වේගවත් සත්‍යාපන ක්‍රියාවලිය',
        trust: 'ඉඩම් වාර්තා කෙරෙහි මහජන විශ්වාසය ගොඩනඟයි',
      },
    },

    // Footer
    footer: {
      research: 'මෙම පද්ධතිය අධ්‍යයන පර්යේෂණ අරමුණු සඳහා සංවර්ධනය කරන ලද මූලාකෘතියකි.',
      university: 'ශ්‍රී ලංකා විශ්ව විද්‍යාල පර්යේෂණ ව්‍යාපෘතිය',
      copyright: 'සියලු හිමිකම් ඇවිරිණි.',
      disclaimer: 'මෙය පර්යේෂණ මූලාකෘතියක් වන අතර නිල රජයේ පද්ධතියක් නොවේ.',
    },

    // Common
    common: {
      loading: 'පූරණය වෙමින්...',
      error: 'දෝෂයක් සිදු විය',
      success: 'සාර්ථකයි',
      cancel: 'අවලංගු කරන්න',
      confirm: 'තහවුරු කරන්න',
      back: 'ආපසු',
      next: 'ඊළඟ',
      submit: 'ඉදිරිපත් කරන්න',
      save: 'සුරකින්න',
      delete: 'මකන්න',
      edit: 'සංස්කරණය',
      view: 'බලන්න',
      search: 'සොයන්න',
      filter: 'පෙරන්න',
      noResults: 'ප්‍රතිඵල හමු නොවීය',
      required: 'අවශ්‍යයි',
    },
  },

  ta: {
    // Header
    systemTitle: 'ஈ-நில பதிவு முறை',
    country: 'இலங்கை',

    // Navigation
    nav: {
      home: 'முகப்பு',
      verifyDeed: 'பத்திரம் சரிபார்',
      adminLogin: 'நிர்வாகி உள்நுழைவு',
      about: 'முறை பற்றி',
      dashboard: 'கட்டுப்பாட்டு பலகை',
      logout: 'வெளியேறு',
    },

    // Home Page
    home: {
      welcome: 'அதிகாரப்பூர்வ நில பதிவகத்திற்கு வரவேற்கிறோம்',
      subtitle: 'டிஜிட்டல் தொழில்நுட்பத்தால் இயக்கப்படும் பாதுகாப்பான, வெளிப்படையான மற்றும் மாற்ற முடியாத பத்திர சரிபார்ப்பு',
      searchLabel: 'நில உரிமை எண்ணை உள்ளிடவும்',
      searchPlaceholder: 'எ.கா: LT/WP/COL/2024/00001',
      searchButton: 'உரிமையை சரிபார்க்கவும்',
      features: {
        title: 'டிஜிட்டல் சரிபார்ப்பு ஏன்?',
        security: {
          title: 'மாற்ற முடியாத பதிவுகள்',
          desc: 'பதிவு செய்யப்பட்டதும், பத்திர தகவலை மாற்றவோ நீக்கவோ முடியாது',
        },
        transparency: {
          title: 'முழு வெளிப்படைத்தன்மை',
          desc: 'அனைத்து பரிவர்த்தனைகளும் பொதுவில் சரிபார்க்கக்கூடியவை மற்றும் கண்டறியக்கூடியவை',
        },
        speed: {
          title: 'உடனடி சரிபார்ப்பு',
          desc: 'நாட்களில் அல்ல, நொடிகளில் உரிமை நிலையை சரிபார்க்கவும்',
        },
      },
    },

    // Verification Page
    verify: {
      title: 'பத்திர சரிபார்ப்பு',
      subtitle: 'நில உரிமை விவரங்களை பாதுகாப்பாக சரிபார்க்கவும்',
      enterDeed: 'சரிபார்க்க நில உரிமை எண்ணை உள்ளிடவும்',
      placeholder: 'எ.கா: LT/WP/COL/2024/00001',
      button: 'சரிபார்க்கவும்',
      searching: 'சரிபார்க்கிறது...',
      result: {
        title: 'சரிபார்ப்பு முடிவு',
        landTitleNumber: 'நில உரிமை எண்',
        deedNumber: 'பத்திர எண்',
        status: 'நிலை',
        valid: 'செல்லுபடியாகும்',
        invalid: 'செல்லுபடியாகாது',
        notFound: 'கிடைக்கவில்லை',
        owner: 'தற்போதைய உரிமையாளர்',
        location: 'நில இருப்பிடம்',
        area: 'நில பரப்பளவு',
        lastVerified: 'கடைசியாக சரிபார்க்கப்பட்டது',
        blockchainHash: 'ஆவண ஹாஷ்',
        verificationBadge: 'டிஜிட்டல் முறையில் சரிபார்க்கப்பட்டது',
        privacyNote: 'தனிப்பட்ட தரவு வெளிப்படுத்தப்படவில்லை. சரிபார்ப்புக்கு கிரிப்டோகிராஃபிக் ஹாஷ்கள் மட்டுமே பதிவு செய்யப்படுகின்றன.',
      },
      newSearch: 'புதிய தேடல்',
    },

    // Admin Login
    login: {
      title: 'நிர்வாகி உள்நுழைவு',
      subtitle: 'நில பதிவு மேலாண்மை அமைப்பை அணுகவும்',
      warning: 'அங்கீகரிக்கப்பட்ட பணியாளர்கள் மட்டுமே',
      username: 'பயனர்பெயர்',
      password: 'கடவுச்சொல்',
      otp: 'OTP குறியீடு (விருப்பத்திற்குரிய)',
      button: 'உள்நுழைக',
      forgotPassword: 'கடவுச்சொல் மறந்துவிட்டதா?',
      error: 'தவறான சான்றுகள். மீண்டும் முயற்சிக்கவும்.',
    },

    // Admin Dashboard
    dashboard: {
      title: 'கட்டுப்பாட்டு பலகை',
      welcome: 'வரவேற்கிறோம், நிர்வாகி',
      overview: 'மேலோட்டம்',
      stats: {
        totalDeeds: 'மொத்த பத்திரங்கள்',
        pendingTransfers: 'நிலுவையில் உள்ள பரிமாற்றங்கள்',
        todayVerifications: 'இன்றைய சரிபார்ப்புகள்',
        activeUsers: 'செயலில் உள்ள பயனர்கள்',
      },
      menu: {
        overview: 'கட்டுப்பாட்டு பலகை மேலோட்டம்',
        registerDeed: 'புதிய பத்திரம் பதிவு',
        transferDeed: 'உரிமை மாற்றம்',
        updateDeed: 'பத்திர தகவல் புதுப்பி',
        searchDeeds: 'பத்திரங்கள் தேடு',
        auditLogs: 'தணிக்கை பதிவுகள்',
      },
      recentActivity: 'சமீபத்திய செயல்பாடு',
    },

    // Register Deed
    register: {
      title: 'புதிய பத்திரம் பதிவு',
      landTitleNumber: 'நில உரிமை எண்',
      deedNumber: 'பத்திர எண்',
      landLocation: 'நில இருப்பிடம்',
      surveyRef: 'கணக்கெடுப்பு குறிப்பு எண்',
      ownerName: 'உரிமையாளர் முழு பெயர்',
      ownerNIC: 'உரிமையாளர் தேசிய அடையாள அட்டை எண்',
      landArea: 'நில பரப்பளவு (பேர்ச்)',
      uploadDoc: 'பத்திர ஆவணத்தை பதிவேற்று (PDF)',
      generateHash: 'ஹாஷ் உருவாக்கு',
      submit: 'பதிவகத்திற்கு சமர்ப்பி',
      hashGenerated: 'ஹாஷ் உருவாக்கப்பட்டது',
      success: 'பத்திரம் கணினியில் வெற்றிகரமாக பதிவு செய்யப்பட்டது',
    },

    // Audit Logs
    audit: {
      title: 'தணிக்கை பதிவுகள்',
      transactionId: 'பரிவர்த்தனை ஐடி',
      landTitleNumber: 'நில உரிமை எண்',
      deedNumber: 'பத்திர எண்',
      action: 'செயல்',
      performedBy: 'செய்தவர்',
      timestamp: 'நேர முத்திரை',
      actions: {
        register: 'பதிவு',
        transfer: 'பரிமாற்றம்',
        update: 'புதுப்பிப்பு',
        verify: 'சரிபார்ப்பு',
      },
    },

    // About Page
    about: {
      title: 'இந்த முறை பற்றி',
      intro: 'ஈ-நில பதிவு முறை இலங்கையில் நில உரிமை பதிவுகளை நிர்வகிப்பதற்கான புரட்சிகர அணுகுமுறையாகும்.',
      howItWorks: {
        title: 'இது எவ்வாறு செயல்படுகிறது',
        step1: {
          title: 'பத்திர பதிவு',
          desc: 'நில பதிவு அலுவலர்கள் முழுமையான உரிமை விவரங்களுடன் புதிய பத்திரங்களை பதிவு செய்கின்றனர்.',
        },
        step2: {
          title: 'ஹாஷ் உருவாக்கம்',
          desc: 'பத்திர தகவலிலிருந்து தனித்துவமான கிரிப்டோகிராஃபிக் ஹாஷ் உருவாக்கப்படுகிறது.',
        },
        step3: {
          title: 'பாதுகாப்பான சேமிப்பு',
          desc: 'ஹாஷ் கணினியில் நிரந்தரமாக சேமிக்கப்பட்டு, மாற்ற முடியாத பதிவை உருவாக்குகிறது.',
        },
        step4: {
          title: 'பொது சரிபார்ப்பு',
          desc: 'பத்திர எண்ணைப் பயன்படுத்தி யார் வேண்டுமானாலும் பத்திர நம்பகத்தன்மையை சரிபார்க்கலாம்.',
        },
      },
      benefits: {
        title: 'முக்கிய நன்மைகள்',
        fraud: 'பத்திர மோசடி மற்றும் போலியை தடுக்கிறது',
        disputes: 'நில உரிமை தகராறுகளை குறைக்கிறது',
        efficiency: 'விரைவான சரிபார்ப்பு செயல்முறை',
        trust: 'நில பதிவுகளில் பொது நம்பிக்கையை உருவாக்குகிறது',
      },
    },

    // Footer
    footer: {
      research: 'இந்த முறை கல்வி ஆராய்ச்சி நோக்கங்களுக்காக உருவாக்கப்பட்ட ஒரு முன்மாதிரியாகும்.',
      university: 'இலங்கை பல்கலைக்கழக ஆராய்ச்சி திட்டம்',
      copyright: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      disclaimer: 'இது ஒரு ஆராய்ச்சி முன்மாதிரி மற்றும் அதிகாரப்பூர்வ அரசு முறை அல்ல.',
    },

    // Common
    common: {
      loading: 'ஏற்றுகிறது...',
      error: 'பிழை ஏற்பட்டது',
      success: 'வெற்றி',
      cancel: 'ரத்து செய்',
      confirm: 'உறுதிப்படுத்து',
      back: 'பின்',
      next: 'அடுத்து',
      submit: 'சமர்ப்பி',
      save: 'சேமி',
      delete: 'நீக்கு',
      edit: 'திருத்து',
      view: 'பார்',
      search: 'தேடு',
      filter: 'வடிகட்டு',
      noResults: 'முடிவுகள் இல்லை',
      required: 'தேவை',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;
