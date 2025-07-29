import React from 'react';

const FormSection = ({ 
  title, 
  children, 
  icon: Icon 
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
    <div className="flex items-center space-x-3 mb-6">
      <Icon className="w-6 h-6 text-green-600" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    {children}
  </div>
);

export default FormSection;