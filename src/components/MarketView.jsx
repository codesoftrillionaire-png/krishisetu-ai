import React from 'react';
import { demoMarkets } from '../data';
import { Truck, CheckCircle } from 'lucide-react';

export default function MarketView({ txt }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">{txt.nearby}</h2>
      
      {demoMarkets.map(market => {
        const netReturn = market.price - market.transport;
        return (
          <div key={market.id} className={`p-4 rounded-2xl border-2 ${market.isRecommended ? 'border-krishi bg-krishi-light' : 'border-gray-200 bg-white'}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  {market.name}
                  {market.isRecommended && <CheckCircle size={16} className="text-krishi" />}
                </h3>
                <p className="text-sm text-gray-500">{txt.distance}: {market.distance} • {txt.demand}: {market.demand}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-gray-900">₹{market.price}</p>
                <p className="text-xs text-gray-500">/ quintal</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white bg-opacity-60 p-2 rounded-lg mb-3">
              <Truck size={16} /> <span>{txt.transport}: ₹{market.transport}</span>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-3">
              <span className="font-medium text-gray-700">{txt.netReturn}:</span>
              <span className={`font-bold text-lg ${market.isRecommended ? 'text-krishi-dark' : 'text-gray-800'}`}>
                ₹{netReturn}
              </span>
            </div>
            
            <button className={`w-full mt-3 py-3 rounded-xl font-bold text-white ${market.isRecommended ? 'bg-krishi hover:bg-krishi-dark' : 'bg-gray-800 hover:bg-gray-900'}`}>
              List Crop Here / यहाँ बेचें
            </button>
          </div>
        )
      })}
    </div>
  );
}