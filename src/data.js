export const t = {
  en: {
    hello: "Hello Farmer",
    selectLoc: "Select Mandi Location",
    selectCrop: "Select Crop",
    currentPrice: "Current Market Price (Mandi)",
    priceTrend: "6-Month Price Trend (₹/quintal)",
    aiRecTitle: "AI Recommendation",
    aiRecBody: "Based on local mandi data, selling at Hajipur Mandi currently offers an estimated 8% higher net profit after factoring in travel costs.",
    findBuyers: "Verified Local Buyers",
    home: "Home",
    market: "Market",
    buyers: "Buyers",
    fpo: "FPO Deals",
    demoWarning: "DEMO DATA: Prices & trends are simulated for prototype demonstration.",
    loginTitle: "Farmer Login",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter 10-digit mobile number",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter password",
    loginBtn: "Login / प्रवेश करें",
    logoutBtn: "Logout",
    demoHint: "Demo Login: Enter any 10-digit number & password",
    voicePrompt: "Listening in Hindi/English...",
    voiceSimQ: "Wheat ka price kitna hai?",
    voiceSimA: "Muzaffarpur mandi me Aaj Wheat (गेहूं) ka rate ₹2,300/quintal hai.",
  },
  hi: {
    hello: "नमस्ते किसान भाई",
    selectLoc: "मंडी स्थान चुनें",
    selectCrop: "फसल चुनें",
    currentPrice: "वर्तमान मंडी भाव",
    priceTrend: "6 महीने का मूल्य रुझान (₹/क्विंटल)",
    aiRecTitle: "एआई सुझाव",
    aiRecBody: "स्थानीय मंडी आंकड़ों के अनुसार, हाजीपुर मंडी में बेचने पर परिवहन खर्च घटाकर भी 8% अधिक लाभ मिलने का अनुमान है।",
    findBuyers: "सत्यापित खरीदार",
    home: "होम",
    market: "मंडी भाव",
    buyers: "खरीदार",
    fpo: "एफपीओ सौदे",
    demoWarning: "डेमो डेटा: मूल्य और रुझान केवल प्रदर्शन के लिए हैं।",
    loginTitle: "किसान लॉगिन",
    phoneLabel: "मोबाइल नंबर",
    phonePlaceholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
    passwordLabel: "पासवर्ड",
    passwordPlaceholder: "पासवर्ड दर्ज करें",
    loginBtn: "लॉगिन करें",
    logoutBtn: "लॉगआउट",
    demoHint: "डेमो लॉगिन: कोई भी 10 अंकों का नंबर और पासवर्ड दर्ज करें",
    voicePrompt: "हिंदी/अंग्रेजी में सुन रहे हैं...",
    voiceSimQ: "गेहूं का भाव क्या है?",
    voiceSimA: "मुजफ्फरपुर मंडी में आज गेहूं का भाव ₹2,300/क्विंटल है।",
  }
};

export const locations = [
  "Muzaffarpur, BR",
  "Patna, BR",
  "Hajipur, BR",
  "Samastipur, BR",
  "Darbhanga, BR",
  "Gaya, BR",
  "Bhagalpur, BR"
];

export const cropsList = [
  { id: 'wheat', en: 'Wheat (गेहूं)', hi: 'गेहूं', basePrice: 2300 },
  { id: 'paddy', en: 'Rice / Paddy (धान)', hi: 'धान', basePrice: 2180 },
  { id: 'maize', en: 'Maize (मक्का)', hi: 'मक्का', basePrice: 1950 },
  { id: 'potato', en: 'Potato (आलू)', hi: 'आलू', basePrice: 1250 },
  { id: 'tomato', en: 'Tomato (टमाटर)', hi: 'टमाटर', basePrice: 2600 },
  { id: 'mustard', en: 'Mustard (सरसों)', hi: 'सरसों', basePrice: 5450 },
  { id: 'onion', en: 'Onion (प्याज)', hi: 'प्याज', basePrice: 1850 },
  { id: 'litchi', en: 'Litchi (लीची)', hi: 'लीची', basePrice: 4200 }
];

export const getTrendData = (basePrice) => [
  { month: 'Jan', price: Math.round(basePrice * 0.88) },
  { month: 'Feb', price: Math.round(basePrice * 0.91) },
  { month: 'Mar', price: Math.round(basePrice * 0.95) },
  { month: 'Apr', price: Math.round(basePrice * 0.93) },
  { month: 'May', price: Math.round(basePrice * 0.97) },
  { month: 'Jun', price: basePrice }
];

export const demoBuyers = [
  { id: 1, name: "Bihar Agro Traders", loc: "Muzaffarpur", crop: "Wheat / गेहूं", price: 2350, qty: "50 Quintals", verified: true },
  { id: 2, name: "Patna Grain Logistics", loc: "Patna", crop: "Paddy / धान", price: 2220, qty: "100 Quintals", verified: true },
  { id: 3, name: "Vaishali Processing Co.", loc: "Hajipur", crop: "Maize / मक्का", price: 2000, qty: "30 Quintals", verified: false },
  { id: 4, name: "Mithila Cold Storage", loc: "Darbhanga", crop: "Potato / आलू", price: 1300, qty: "80 Quintals", verified: true }
];