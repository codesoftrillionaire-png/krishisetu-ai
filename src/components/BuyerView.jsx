import React from 'react';
import { demoBuyers } from '../data';
import { Phone, BadgeCheck } from 'lucide-react';

export default function BuyerView({ txt }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">{txt.findBuyers}</h2>
      
      {demoBuyers.map(buyer => (
        <div key={buyer.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-gray-900 flex items-center gap-1">
                {buyer.name}
                {buyer.verified && (
                  <span className="text-blue-500 text-xs ml-1 flex items-center gap-1 bg-blue-50 px-1.5 py-0.5 rounded">
                    <BadgeCheck size={14} /> Verified
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-500">{buyer.loc}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-krishi">₹{buyer.price}</p>
              <p className="text-xs text-gray-500">Offer Price</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm flex justify-between">
            <div><span className="text-gray-500">Crop:</span> <span className="font-medium">{buyer.crop}</span></div>
            <div><span className="text-gray-500">Qty Needed:</span> <span className="font-medium">{buyer.qty}</span></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-krishi text-krishi font-bold py-2.5 rounded-xl hover:bg-krishi-light">
            <Phone size={18} /> Contact Buyer / संपर्क करें
          </button>
        </div>
      ))}
    </div>
  );
}