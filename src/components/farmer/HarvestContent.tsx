"use client";

import React, { useState } from 'react';
import { Plus, TrendingUp } from 'lucide-react';
import FormSection from './FormSection';
import { Harvest } from '@/types/farmer';

const HarvestsContent = () => {
  const [harvestForm, setHarvestForm] = useState({
    originLocation: '',
    harvestDate: '',
    oliveType: '',
    harvestMethod: '',
    quantity: '',
    destination: '',
    additionalNotes: ''
  });

  const [harvestHistory, setHarvestHistory] = useState<Harvest[]>([
    { 
      id: 1, 
      date: '2024-12-15', 
      quantity: 1200, 
      quality: 'Haute', 
      destination: 'Huilerie Moderne SA',
      originLocation: 'Parcelle A',
      oliveType: 'Picholine',
      harvestMethod: 'Manuelle'
    },
    // autres données
  ]);

  const handleHarvestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (harvestForm.harvestDate && harvestForm.quantity && harvestForm.destination) {
      const newHarvest: Harvest = {
        id: Date.now(),
        date: harvestForm.harvestDate,
        quantity: parseInt(harvestForm.quantity),
        quality: 'Haute',
        destination: harvestForm.destination,
        originLocation: harvestForm.originLocation,
        oliveType: harvestForm.oliveType,
        harvestMethod: harvestForm.harvestMethod
      };
      setHarvestHistory([newHarvest, ...harvestHistory]);
      setHarvestForm({
        originLocation: '',
        harvestDate: '',
        oliveType: '',
        harvestMethod: '',
        quantity: '',
        destination: '',
        additionalNotes: ''
      });
    }
  };

  const inputClass =
    "w-full px-3 py-2 text-gray-900 text-base bg-white border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-500";

  return (
    <div className="space-y-8">
      {/* Add Harvest Form */}
      <FormSection title="Déclarer une Récolte" icon={Plus}>
        <form onSubmit={handleHarvestSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localisation d'origine
              </label>
              <input
                type="text"
                value={harvestForm.originLocation}
                onChange={(e) => setHarvestForm({...harvestForm, originLocation: e.target.value})}
                className={inputClass}
                placeholder="Ex: Parcelle A, Nord"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date de récolte
              </label>
              <input
                type="date"
                value={harvestForm.harvestDate}
                onChange={(e) => setHarvestForm({...harvestForm, harvestDate: e.target.value})}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type d'olive
              </label>
              <select
                value={harvestForm.oliveType}
                onChange={(e) => setHarvestForm({...harvestForm, oliveType: e.target.value})}
                className={inputClass}
                required
              >
                <option value="">Sélectionner un type</option>
                <option value="Picholine">Picholine</option>
                <option value="Arbequina">Arbequina</option>
                <option value="Picual">Picual</option>
                <option value="Hojiblanca">Hojiblanca</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Méthode de récolte
              </label>
              <select
                value={harvestForm.harvestMethod}
                onChange={(e) => setHarvestForm({...harvestForm, harvestMethod: e.target.value})}
                className={inputClass}
                required
              >
                <option value="">Sélectionner une méthode</option>
                <option value="Manuelle">Manuelle</option>
                <option value="Vibration">Vibration mécanique</option>
                <option value="Peigne">Peigne mécanique</option>
                <option value="Autre">Autre méthode</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantité (kg)
              </label>
              <input
                type="number"
                value={harvestForm.quantity}
                onChange={(e) => setHarvestForm({...harvestForm, quantity: e.target.value})}
                className={inputClass}
                placeholder="Ex: 1200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <input
                type="text"
                value={harvestForm.destination}
                onChange={(e) => setHarvestForm({...harvestForm, destination: e.target.value})}
                className={inputClass}
                placeholder="Ex: Huilerie Moderne SA"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes supplémentaires
              </label>
              <textarea
                value={harvestForm.additionalNotes}
                onChange={(e) => setHarvestForm({...harvestForm, additionalNotes: e.target.value})}
                className={inputClass}
                placeholder="Ex: Récolte effectuée tôt le matin, olives en parfait état"
                rows={3}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Enregistrer la Récolte</span>
          </button>
        </form>
      </FormSection>

      {/* Harvest History Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <span>Historique des Récoltes</span>
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
           <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localisation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type d'olive</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Méthode</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {harvestHistory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(item.date).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.originLocation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.oliveType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {item.harvestMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.quantity} kg
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {item.destination}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HarvestsContent;