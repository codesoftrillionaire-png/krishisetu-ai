export const t = {
  en: {
    greeting: "Hello Farmer 👋",
    home: "Home",
    market: "Markets",
    buyers: "Buyers",
    fpo: "FPO / Assisted Mode",
    voicePrompt: "Tap to ask Voice Assistant",
    voiceSimQ: "Where will I get the best price for my wheat?",
    voiceSimA: "Market B in your area has an estimated price of ₹2,450/quintal.",
    currentPrice: "Current Market Price (Demo)",
    nearby: "Nearby Markets Comparison",
    recommendation: "AI Recommendation: Based on demo data, Market B provides a better estimated net return after transport costs.",
    selectCrop: "Select Crop",
    selectLocation: "Select Location",
    findBuyers: "Find Direct Buyers",
    demand: "Demand",
    distance: "Distance",
    transport: "Est. Transport",
    netReturn: "Est. Net Return",
    demoWarning: "⚠️ DEMO DATA: All prices and buyers are for demonstration only."
  },
  hi: {
    greeting: "नमस्ते किसान 👋",
    home: "होम",
    market: "मंडी भाव",
    buyers: "खरीदार",
    fpo: "सहायक मोड (FPO)",
    voicePrompt: "🎙️ बोलकर पूछें (Voice Assistant)",
    voiceSimQ: "मेरे गेहूं का सबसे अच्छा भाव कहाँ मिलेगा?",
    voiceSimA: "आपके क्षेत्र में Market B का अनुमानित भाव ₹2,450/quintal है.",
    currentPrice: "वर्तमान मंडी भाव (डेमो)",
    nearby: "आसपास की मंडियों की तुलना",
    recommendation: "AI सुझाव: डेमो डेटा के अनुसार, परिवहन लागत के बाद Market B में बेहतर मुनाफा मिलेगा।",
    selectCrop: "फसल चुनें",
    selectLocation: "स्थान चुनें",
    findBuyers: "सीधे खरीदार खोजें",
    demand: "मांग",
    distance: "दूरी",
    transport: "अनुमानित किराया",
    netReturn: "अनुमानित शुद्ध आय",
    demoWarning: "⚠️ डेमो डेटा: सभी कीमतें और खरीदार केवल प्रदर्शन के लिए हैं।"
  }
};

export const demoMarkets = [
  { id: 1, name: "Local Mandi A", distance: "5 km", price: 2300, transport: 50, demand: "High", isRecommended: false },
  { id: 2, name: "City Market B", distance: "15 km", price: 2450, transport: 150, demand: "Very High", isRecommended: true },
  { id: 3, name: "Export Hub C", distance: "45 km", price: 2500, transport: 400, demand: "Medium", isRecommended: false },
];

export const demoBuyers = [
  { id: 1, name: "Ramesh Trading Co.", crop: "Wheat", qty: "50 Quintals", price: 2400, loc: "Muzaffarpur", verified: true },
  { id: 2, name: "AgriFoods Pvt Ltd", crop: "Wheat", qty: "200 Quintals", price: 2420, loc: "Patna", verified: true },
  { id: 3, name: "Suresh Millers", crop: "Paddy", qty: "100 Quintals", price: 2100, loc: "Hajipur", verified: false },
];