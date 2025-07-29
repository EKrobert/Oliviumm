"use client";

import React, { useState } from 'react';
import { User, Edit3, Save, Edit } from 'lucide-react';
import { ProfileForm } from '@/types/farmer';

const ProfileContent = () => {
  const [profileForm, setProfileForm] = useState<ProfileForm>({
    name: 'Ahmed Ben Hassan',
    farmName: 'Exploitation Olivière Ben Hassan',
    location: 'Meknès, Maroc',
    surface: '15'
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="flex items-center justify-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">Profil Producteur</h2>
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="p-2 text-gray-500 hover:text-green-600 transition-colors"
            >
              <Edit className="w-5 h-5" />
            </button>
          </div>
        </div>

        {isEditingProfile ? (
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full px-4 py-3 text-gray-900 text-base bg-white border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Surface (Ha)
                </label>
                <input
                  type="number"
                  value={profileForm.surface}
                  onChange={(e) => setProfileForm({ ...profileForm, surface: e.target.value })}
                  className="w-full px-4 py-3 text-gray-900 text-base bg-white border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'exploitation
              </label>
              <input
                type="text"
                value={profileForm.farmName}
                onChange={(e) => setProfileForm({ ...profileForm, farmName: e.target.value })}
                className="w-full px-4 py-3 text-gray-900 text-base bg-white border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localisation
              </label>
              <input
                type="text"
                value={profileForm.location}
                onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                className="w-full px-4 py-3 text-gray-900 text-base bg-white border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Sauvegarder</span>
              </button>
              <button
                type="button"
                onClick={() => setIsEditingProfile(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-500 mb-1">Nom complet</label>
                <p className="text-lg font-semibold text-gray-900">{profileForm.name}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-500 mb-1">Surface cultivée</label>
                <p className="text-lg font-semibold text-gray-900">{profileForm.surface} hectares</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-500 mb-1">Nom de l'exploitation</label>
              <p className="text-lg font-semibold text-gray-900">{profileForm.farmName}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-500 mb-1">Localisation</label>
              <p className="text-lg font-semibold text-gray-900">{profileForm.location}</p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => setIsEditingProfile(true)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Edit className="w-5 h-5" />
                <span>Modifier le Profil</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProfileContent;