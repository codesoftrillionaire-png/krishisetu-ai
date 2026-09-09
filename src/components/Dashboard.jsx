import React, { useState } from 'react';
import { MapPin, Sprout, Sparkles, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { locations, cropsList, getTrendData } from '../data';

export default function Dashboard({ lang, txt }) {
  const [selectedLoc, setSelectedLoc] = useState(locations[0]);
  const [selectedCrop, setSelectedCrop] = useState(cropsList[0]);

  const trendData = getTrendData(selectedCrop.basePrice);

  return (
    <div className="space-y-5">
      {/* Greeting Header */}
      <div>
        <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
          {txt.hello} 👋
        </h2>
      </div>

      {/* Dropdown Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Location Selector */}
        <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-2">
          <MapPin size={20} className="text-krishi shrink-0" />
          <select 
            value={selectedLoc} 
            onChange={(e) => setSelectedLoc(e.target.value)}
            className="w-full bg-transparent font-bold text-gray-700 focus:outline-none text-sm"
          >
            {locations.map((loc, idx) => (
              <option key={idx} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Crop Selector */}
        <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-2">
          <Sprout size={20} className="text-krishi shrink-0" />
          <select 
            value={selectedCrop.id} 
            onChange={(e) => {
              const crop = cropsList.find(c => c.id === e.target.value);
              setSelectedCrop(crop);
            }}
            className="w-full bg-transparent font-bold text-gray-700 focus:outline-none text-sm"
          >
            {cropsList.map((crop) => (
              <option key={crop.id} value={crop.id}>
                {lang === 'hi' ? crop.hi : crop.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-emerald-800 text-white p-4 rounded-2xl shadow-md space-y-1">
        <div className="flex items-center gap-2 font-bold text-emerald-200 text-sm">
          <Sparkles size={18} />
          <span>{txt.aiRecTitle}</span>
        </div>
        <p className="text-xs font-medium leading-relaxed text-emerald-50">
          {txt.aiRecBody}
        </p>
      </div>

      {/* Price Summary Card */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-400 font-semibold uppercase">{txt.currentPrice}</p>
          <p className="text-3xl font-black text-gray-900 mt-1">
            ₹{selectedCrop.basePrice.toLocaleString()} <span className="text-xs font-normal text-gray-500">/ quintal</span>
          </p>
        </div>
        <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
          <TrendingUp size={28} />
        </div>
      </div>

      {/* Price Trend Chart (Recharts) */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-gray-700">{txt.priceTrend}</h3>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#888' }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#888' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#10b981', borderRadius: '12px', border: 'none', color: '#fff' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                formatter={(value) => [`₹${value}`, 'Price']}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#10b981" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#10b981' }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}