"use client";

import React, { useState } from 'react';
import { 
  MapPin,
  Droplets,
  Thermometer,
  Bug,
  Sprout,
  Users,
  DollarSign,
  Plus,
  Upload,
  Calendar,
  TrendingUp,
  Eye
} from 'lucide-react';

const DashboardContent = () => {
  const [activeCard, setActiveCard] = useState(null);

  interface DashboardCardProps {
    title: React.ReactNode;
    children: React.ReactNode;
    className?: string;
  }

  const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className = "" }) => (
    <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}>
      <h3 className="text-lg font-bold text-black mb-4 flex items-center">
        {title}
      </h3>
      {children}
    </div>
  );

  interface InfoItemProps {
    label: string;
    value: string | number;
    unit?: string;
  }

  const InfoItem: React.FC<InfoItemProps> = ({ label, value, unit = "" }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-black text-sm font-medium">{label}:</span>
      <span className="font-semibold text-black">{value} {unit}</span>
    </div>
  );

  interface ActionButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
  }

  const ActionButton: React.FC<ActionButtonProps> = ({ children, variant = "primary", onClick = () => {} }) => (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors w-full ${
        variant === "primary" 
          ? "bg-green-600 text-white hover:bg-green-700" 
          : "bg-gray-100 text-black hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );

  interface InputFieldProps {
    label: string;
    value: string | number;
    type?: string;
    placeholder?: string;
  }

  const InputField: React.FC<InputFieldProps> = ({ label, value, type = "text", placeholder = "" }) => (
    <div className="mb-3">
      <label className="block text-sm font-bold text-black mb-1">{label}</label>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder || String(value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black placeholder-black/70"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Farmer Dashboard</h1>
          <p className="text-black mt-2">Comprehensive farm management overview</p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Grove Information */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Grove Information</span>
            </div>
          }>
            <div className="space-y-1">
              <InputField label="Olive Grove GPS" value="33.5731, -7.5898" />
              <InputField label="Cultivated Variety" value="Picholine Marocaine" />
              <InputField label="Planting Year" value="2018" type="number" />
              <InputField label="Cultivation Type" value="Organic" />
              <div className="pt-2">
                <ActionButton onClick={() => console.log('Grove info added')}>
                  <Plus className="w-4 h-4" />
                  <span>Add Entry</span>
                </ActionButton>
              </div>
            </div>
          </DashboardCard>

          {/* Soil Health */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <Sprout className="w-5 h-5 text-amber-600" />
              <span>Soil Health</span>
            </div>
          }>
            <div className="space-y-3">
              <InfoItem label="Soil pH" value="7.2" />
              <InfoItem label="Soil Moisture" value="22%" />
              <InfoItem label="Salinity (EC)" value="1.8 dS/m" />
              <div className="bg-gray-50 p-3 rounded-lg text-center my-4">
                <p className="text-sm font-medium text-black">7-day/30-day Evolution Charts</p>
              </div>
            </div>
          </DashboardCard>

          {/* Irrigation */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <Droplets className="w-5 h-5 text-blue-600" />
              <span>Irrigation</span>
            </div>
          }>
            <div className="space-y-1">
              <InputField label="Irrigation System Used" value="Drip Irrigation" />
              <InputField label="Water Volume/Day/Tree" value="15" type="number" />
              <div className="bg-gray-50 p-3 rounded-lg text-center my-4">
                <p className="text-sm font-medium text-black">Daily History (Table/Chart)</p>
              </div>
              <div className="pt-2">
                <ActionButton onClick={() => console.log('Irrigation added')}>
                  <Plus className="w-4 h-4" />
                  <span>Add Entry</span>
                </ActionButton>
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Weather Conditions */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <Thermometer className="w-5 h-5 text-orange-600" />
              <span>Weather Conditions</span>
            </div>
          }>
            <div className="space-y-3">
              <InfoItem label="Temperature (Min/Max)" value="18°C / 30°C" />
              <InfoItem label="Rainfall (mm)" value="0mm" />
              <InfoItem label="Humidity (%)" value="60%" />
              <div className="bg-gray-50 p-3 rounded-lg text-center my-4">
                <p className="text-sm font-medium text-black">Weekly Weather Curve or Indicator</p>
              </div>
            </div>
          </DashboardCard>

          {/* Pest Control */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <Bug className="w-5 h-5 text-red-600" />
              <span>Pest Control</span>
            </div>
          }>
            <div className="space-y-1">
              <InputField label="Temperature" value="25" type="number" />
              <InputField label="Method Used" value="Organic Spray" />
              <div className="space-y-2 pt-2">
                <ActionButton variant="secondary" onClick={() => console.log('Upload clicked')}>
                  <Upload className="w-4 h-4" />
                  <span>Upload Photo/Certificate</span>
                </ActionButton>
                <ActionButton onClick={() => console.log('Pest control added')}>
                  <Plus className="w-4 h-4" />
                  <span>Add Entry</span>
                </ActionButton>
              </div>
            </div>
          </DashboardCard>

          {/* Fertilization */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <Sprout className="w-5 h-5 text-green-600" />
              <span>Fertilization</span>
            </div>
          }>
            <div className="space-y-1">
              <InputField label="Date" value="2024-11-15" type="date" />
              <InputField label="Fertilization Type" value="Organic Compost" />
              <InputField label="Quantity" value="500" type="number" />
              <div className="pt-4">
                <ActionButton onClick={() => console.log('Fertilization added')}>
                  <Plus className="w-4 h-4" />
                  <span>Add Entry</span>
                </ActionButton>
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Labor & Ethics */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span>Labor & Ethics</span>
            </div>
          }>
            <div className="space-y-1">
              <InputField label="Worker Name or ID" value="Ahmed Hassan (ID: 001)" />
              <InputField label="Hours Worked" value="8" type="number" />
              <InputField label="Task Nature" value="Harvesting" />
              <div className="bg-gray-50 p-3 rounded-lg my-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-black">Seasonal Employee List</p>
                  <ActionButton variant="secondary" onClick={() => console.log('View employee list')}>
                    <Eye className="w-4 h-4" />
                    <span>View List</span>
                  </ActionButton>
                </div>
              </div>
            </div>
          </DashboardCard>

          {/* Cost Tracking */}
          <DashboardCard title={
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span>Cost Tracking</span>
            </div>
          }>
            <div className="space-y-3">
              <InfoItem label="Cost per Hectare" value="4,200 MAD/ha" />
              <InfoItem label="Irrigation Cost" value="500 MAD" />
              <InfoItem label="Fertilizer Cost" value="800 MAD" />
              <InfoItem label="Labor Cost" value="1,500 MAD" />
              <div className="bg-gray-50 p-3 rounded-lg text-center my-4">
                <p className="text-sm font-medium text-black">Summary Chart or Table</p>
              </div>
              <div className="pt-2">
                <ActionButton onClick={() => console.log('View cost details')}>
                  <TrendingUp className="w-4 h-4" />
                  <span>View Details</span>
                </ActionButton>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;