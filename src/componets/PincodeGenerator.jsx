import React, { useState } from 'react';
import { Search, MapPin, Globe } from 'lucide-react';

const PincodeGenerator = ({ onSelect, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [generatedPincode, setGeneratedPincode] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Country data with states and pincode patterns
  const countryData = {
    'India': {
      code: 'IN',
      pattern: 'RRSSDD',
      states: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'West Bengal', 'Uttar Pradesh', 'Kerala', 'Punjab'],
      regionCodes: { 'Delhi': '11', 'Maharashtra': '40', 'Karnataka': '56', 'Tamil Nadu': '60', 'Gujarat': '38', 'Rajasthan': '30', 'West Bengal': '70', 'Uttar Pradesh': '20', 'Kerala': '68', 'Punjab': '14' }
    },
    'United States': {
      code: 'US',
      pattern: 'SSRRDD',
      states: ['California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'],
      regionCodes: { 'California': '90', 'Texas': '75', 'Florida': '33', 'New York': '10', 'Pennsylvania': '19', 'Illinois': '60', 'Ohio': '44', 'Georgia': '30', 'North Carolina': '27', 'Michigan': '48' }
    },
    'United Kingdom': {
      code: 'UK',
      pattern: 'RRSSDD',
      states: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
      regionCodes: { 'England': '20', 'Scotland': '10', 'Wales': '30', 'Northern Ireland': '40' }
    },
    'Canada': {
      code: 'CA',
      pattern: 'PPRRDD',
      states: ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland', 'Prince Edward Island'],
      regionCodes: { 'Ontario': 'K0', 'Quebec': 'G0', 'British Columbia': 'V0', 'Alberta': 'T0', 'Manitoba': 'R0', 'Saskatchewan': 'S0', 'Nova Scotia': 'B0', 'New Brunswick': 'E0', 'Newfoundland': 'A0', 'Prince Edward Island': 'C0' }
    },
    'Australia': {
      code: 'AU',
      pattern: 'SSRRDD',
      states: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Northern Territory', 'Australian Capital Territory'],
      regionCodes: { 'New South Wales': '20', 'Victoria': '30', 'Queensland': '40', 'Western Australia': '60', 'South Australia': '50', 'Tasmania': '70', 'Northern Territory': '08', 'Australian Capital Territory': '26' }
    },
    'Germany': {
      code: 'DE',
      pattern: 'RRSSDD',
      states: ['Bavaria', 'North Rhine-Westphalia', 'Baden-Württemberg', 'Lower Saxony', 'Hesse', 'Saxony', 'Rhineland-Palatinate', 'Berlin', 'Schleswig-Holstein', 'Brandenburg'],
      regionCodes: { 'Bavaria': '80', 'North Rhine-Westphalia': '40', 'Baden-Württemberg': '70', 'Lower Saxony': '30', 'Hesse': '60', 'Saxony': '01', 'Rhineland-Palatinate': '55', 'Berlin': '10', 'Schleswig-Holstein': '24', 'Brandenburg': '14' }
    },
    'France': {
      code: 'FR',
      pattern: 'RRSSDD',
      states: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine', 'Occitanie', 'Hauts-de-France', 'Grand Est', 'Pays de la Loire', 'Bretagne', 'Normandy'],
      regionCodes: { 'Île-de-France': '75', 'Provence-Alpes-Côte d\'Azur': '13', 'Auvergne-Rhône-Alpes': '69', 'Nouvelle-Aquitaine': '33', 'Occitanie': '31', 'Hauts-de-France': '59', 'Grand Est': '67', 'Pays de la Loire': '44', 'Bretagne': '35', 'Normandy': '14' }
    },
    'Brazil': {
      code: 'BR',
      pattern: 'SSRRDD',
      states: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná', 'Rio Grande do Sul', 'Pernambuco', 'Ceará', 'Pará', 'Santa Catarina'],
      regionCodes: { 'São Paulo': '01', 'Rio de Janeiro': '20', 'Minas Gerais': '30', 'Bahia': '40', 'Paraná': '80', 'Rio Grande do Sul': '90', 'Pernambuco': '50', 'Ceará': '60', 'Pará': '66', 'Santa Catarina': '88' }
    }
  };

  const filteredCountries = Object.keys(countryData).filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generatePincode = () => {
    if (!selectedCountry || !selectedState) return;

    const country = countryData[selectedCountry];
    const stateCode = country.regionCodes[selectedState];
    const randomDigits = () => Math.floor(Math.random() * 100).toString().padStart(2, '0');
    let pincode = '';
    if (selectedCountry === 'Canada') {
      const numericStateCode = stateCode.charCodeAt(0).toString() + stateCode.charCodeAt(1).toString();
      pincode = numericStateCode.slice(0, 2) + randomDigits() + randomDigits().slice(0, 2);
    } else {
      pincode = stateCode + randomDigits() + randomDigits().slice(0, 2);
    }
    pincode = pincode.slice(0, 6).padEnd(6, '0');
    setGeneratedPincode(pincode);
    if (onSelect) onSelect(pincode);
  };

  React.useEffect(() => {
    if (selectedCountry && selectedState) {
      generatePincode();
    }
  }, [selectedCountry, selectedState]);

  const resetForm = () => {
    setSelectedCountry('');
    setSelectedState('');
    setGeneratedPincode('');
    setSearchTerm('');
  };

  return (
    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-content" style={{ background: '#fff', borderRadius: '1rem', padding: '2.5rem', maxWidth: '700px', width: '100%', position: 'relative', fontSize: '1.25rem' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-14 h-14 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Global Pincode Generator</h1>
          </div>
          <p className="text-gray-600 text-xl">Generate 6-digit pincodes for any country and state worldwide</p>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Generated Pincode Display - moved to left/top */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h3 className="text-2xl font-semibold mb-2">Generated Pincode</h3>
              <div className="text-5xl font-bold mb-2 tracking-wider" style={{ letterSpacing: '0.2em' }}>{generatedPincode || '------'}</div>
              <p className="text-indigo-700 text-lg mb-4">
                {selectedState && selectedCountry ? `${selectedState}, ${selectedCountry}` : 'Select country and state'}
              </p>
              <button
                onClick={generatePincode}
                disabled={!selectedCountry || !selectedState}
                className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors mb-2"
                style={{ fontSize: '1.1rem' }}
              >
                Generate New Pincode
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-500 text-white py-2 px-5 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                style={{ fontSize: '1.1rem' }}
              >
                Reset
              </button>
            </div>
            {/* Country/State Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                <Search className="w-5 h-5 inline mr-2" />
                Search & Select Country
              </label>
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search countries..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none text-lg"
                />
              </div>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedState('');
                }}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none bg-white text-lg"
              >
                <option value="">Choose a country</option>
                {filteredCountries.map(country => (
                  <option key={country} value={country}>
                    {country} ({countryData[country].code})
                  </option>
                ))}
              </select>
              <label className="block text-lg font-semibold text-gray-700 mb-3 mt-6">
                <MapPin className="w-5 h-5 inline mr-2" />
                Select State/Province
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                disabled={!selectedCountry}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none bg-white disabled:bg-gray-100 text-lg"
              >
                <option value="">Choose a state</option>
                {selectedCountry && countryData[selectedCountry].states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6" style={{ fontSize: '1.15rem' }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Pincode Structure</h4>
              <p>Each 6-digit pincode follows a country-specific pattern:</p>
              <ul className="mt-2 space-y-1">
                <li>• First 2 digits: State/Region code</li>
                <li>• Next 2 digits: District/Area code</li>
                <li>• Last 2 digits: Delivery sector</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Supported Countries</h4>
              <p>Currently supporting {Object.keys(countryData).length} countries with their major states and provinces, including India, USA, UK, Canada, Australia, Germany, France, and Brazil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PincodeGenerator;
