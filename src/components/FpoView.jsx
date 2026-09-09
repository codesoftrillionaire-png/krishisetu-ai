import React from 'react';
import { ArrowRight, Users, Box, TrendingUp } from 'lucide-react';

export default function FpoView() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 text-white rounded-2xl p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Assisted Mode</h2>
        <p className="text-gray-400 text-sm">For farmers with low digital literacy, FPOs/CSCs act as digital bridges.</p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 text-lg">Assisted Workflow</h3>
        <div className="flex flex-col gap-3">
          <Step num="1" title="Farmer Approaches FPO" desc="Farmer brings physical sample or details." />
          <div className="flex justify-center"><ArrowRight className="text-gray-300 rotate-90 md:rotate-0" /></div>
          <Step num="2" title="FPO Assistant Lists Crop" desc="Uses KrishiSetu AI on behalf of the farmer." />
          <div className="flex justify-center"><ArrowRight className="text-gray-300 rotate-90 md:rotate-0" /></div>
          <Step num="3" title="AI Discovers Best Price" desc="Matches with optimal markets/buyers." />
          <div className="flex justify-center"><ArrowRight className="text-gray-300 rotate-90 md:rotate-0" /></div>
          <Step num="4" title="Deal Closed" desc="Farmer gets better profit margins." />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={<Users />} label="Farmers Assisted" value="1,240" />
        <StatCard icon={<Box />} label="Crops Listed" value="4,500 qtl" />
        <StatCard icon={<TrendingUp />} label="Avg. Profit Increase" value="+12%" className="col-span-2 bg-krishi-light border-krishi text-krishi-dark" />
      </div>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
      <div className="bg-krishi text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{num}</div>
      <div>
        <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, className = "bg-white border-gray-200" }) {
  return (
    <div className={`p-4 rounded-xl border ${className}`}>
      <div className="text-gray-500 mb-2">{icon}</div>
      <div className="text-2xl font-black">{value}</div>
      <div className="text-xs font-medium text-gray-500 mt-1">{label}</div>
    </div>
  );
}