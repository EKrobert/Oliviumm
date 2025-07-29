"use client";

import React, { useState } from 'react';
import {
  Leaf,
  TrendingUp,
  Recycle,
  User,
  Settings,
  Home,
  LogOut
} from 'lucide-react';
import { Harvest, ProfileForm } from '@/types/farmer';
import StatCard from '@/components/farmer/StatCard';
import FormSection from '@/components/farmer/FormSection';
import DashboardContent from '@/components/farmer/DashboardContent';
import HarvestsContent from '@/components/farmer/HarvestContent';
import ProfileContent from '@/components/farmer/ProfileContent';

const FarmerDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userType] = useState('farmer'); // Vous pouvez remplacer par votre système d'authentification

  // Navigation items
  const navItems = [
    { id: 'dashboard', name: 'Tableau de Bord', icon: Home },
    { id: 'harvests', name: 'Récoltes', icon: TrendingUp },
    { id: 'profile', name: 'Profil', icon: User },
  ];

  const getUserTypeLabel = () => {
    switch(userType) {
      case 'farmer':
        return 'Agriculteur';
      case 'recycler':
        return 'Recycleur';
      case 'extractor':
        return 'Extracteur';
      default:
        return 'Utilisateur';
    }
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'harvests':
        return <HarvestsContent />;
      case 'profile':
        return <ProfileContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex min-h-screen bg-emerald-50">

      {/* Sidebar Navigation */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-gradient-to-b from-green-50 to-white">
          <div className="flex items-center h-16 px-4 border-b border-green-100">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-700" />
              <span className="text-xl font-bold text-green-800">OliveChain</span>
            </div>
          </div>
          
          {/* User Info Section */}
          <div className="p-4 border-b border-green-100 bg-green-50">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <User className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <p className="font-medium text-green-900">Ahmed Ben Hassan</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {getUserTypeLabel()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col flex-grow p-4 overflow-y-auto">
            <nav className="flex-1 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center px-4 py-3 w-full text-left rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-green-100 text-green-700 font-medium border border-green-200 shadow-sm'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  <item.icon className={`w-5 h-5 mr-3 ${
                    activeTab === item.id ? 'text-green-600' : 'text-gray-500'
                  }`} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-4 border-t border-green-100">
            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center space-x-3 text-gray-700 hover:text-green-700 w-full p-2 rounded-lg hover:bg-green-50"
            >
              <Settings className="w-5 h-5" />
              <span>Paramètres</span>
            </button>
            <button
              onClick={() => console.log('Déconnexion')}
              className="flex items-center space-x-3 text-gray-700 hover:text-red-600 w-full p-2 rounded-lg hover:bg-red-50 mt-2"
            >
              <LogOut className="w-5 h-5" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-3 px-4 ${
                activeTab === item.id ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <h1 className="text-xl font-bold text-gray-900">OliveChain</h1>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                {getUserTypeLabel()}
              </span>
              <button
                onClick={() => setActiveTab('profile')}
                className="p-1 rounded-full bg-gray-100 text-gray-500 hover:text-gray-700"
              >
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default FarmerDashboard;