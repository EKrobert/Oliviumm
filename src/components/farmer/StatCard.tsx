import React from 'react';

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const StatCard = ({ title, value, subtitle, icon: Icon, color }: StatCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className={`text-3xl font-bold ${color} mt-2`}>{value}</p>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>
      <div className={`p-3 rounded-full bg-gradient-to-r ${
        color === 'text-green-600' ? 'from-green-500 to-emerald-600' : 
        color === 'text-blue-600' ? 'from-blue-500 to-cyan-600' : 
        color === 'text-amber-600' ? 'from-amber-500 to-orange-600' : 
        'from-purple-500 to-pink-600'
      }`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

export default StatCard;