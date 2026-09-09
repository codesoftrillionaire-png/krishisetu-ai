import React from 'react';
import { MapPin, Sprout, ChevronRight, Sparkles } from 'lucide-react';
import { demoMarkets } from '../data';

export default function Dashboard({ lang, txt }) {
  const recommended = demoMarkets.find(m => m.isRecommended);

  return (
    <div className="space-y-6">
      {/* Greeting & Selectors */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{txt.greeting}</h2>
        <div className="flex gap-2 mb-4">
          <div className="bg-white p-3 rounded-xl border border-gray-200 flex-1 flex items-center gap-2 shadow-sm">
            <MapPin className="text-krishi" size={20} />
            <select className="bg-transparent outline-none w-full font-medium text-gray-700">
              <option>Muzaffarpur, BR</option>
              <option>Patna, BR</option>
            </select>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 flex-1 flex items-center gap-2 shadow-sm">
            <Sprout className="text-krishi" size={20} />
            <select className="bg-transparent outline-none w-full font-medium text-gray-700">
              <option>Wheat (गेहूं)</option>
              <option>Paddy (धान)</option>
            </select>
          </div>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-gradient-to-r from-krishi to-green-500 rounded-2xl p-4 text-white shadow-lg flex items-start gap-3">
        <Sparkles size={24} className="flex-shrink-0 mt-1 text-yellow-300" />
        <div>
          <p className="font-semibold text-sm md:text-base leading-snug">{txt.recommendation}</p>
        </div>
      </div>

      {/* Quick Price Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-semibold mb-1">{txt.currentPrice}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-gray-900">₹2,300</span>
          <span className="text-gray-500">/ quintal</span>
        </div>
        
        {/* Mock Chart */}
        <div className="mt-6">
          <p className="text-xs text-gray-400 mb-2 font-medium">PRICE TREND (LAST 7 DAYS)</p>
          <div className="flex items-end gap-2 h-20">
            {[40, 50, 45, 60, 55, 70, 85].map((h, i) => (
              <div key={i} className="bg-krishi-light w-full rounded-t-sm" style={{ height: `${h}%` }}>
                {i === 6 && <div className="bg-krishi w-full h-full rounded-t-sm"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}