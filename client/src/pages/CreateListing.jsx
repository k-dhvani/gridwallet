import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CreateEVListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    vehicleModel: '',
    vehicleMake: '',
    vehicleYear: '',
    batteryCapacity: '',
    evType: 'electric',
    registrationNumber: '',
    vin: '',
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch('/ev/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        navigate(`/ev/${data._id}`);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Register Your EV</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-xl font-semibold'>Owner Information</h2>
          <input
            type='text'
            placeholder='Owner Name'
            className='border p-3 rounded-lg'
            id='ownerName'
            required
            onChange={handleChange}
            value={formData.ownerName}
          />
          <input
            type='email'
            placeholder='Owner Email'
            className='border p-3 rounded-lg'
            id='ownerEmail'
            required
            onChange={handleChange}
            value={formData.ownerEmail}
          />
          <input
            type='tel'
            placeholder='Owner Phone'
            className='border p-3 rounded-lg'
            id='ownerPhone'
            required
            onChange={handleChange}
            value={formData.ownerPhone}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='text-xl font-semibold'>EV Information</h2>
          <input
            type='text'
            placeholder='Vehicle Model'
            className='border p-3 rounded-lg'
            id='vehicleModel'
            required
            onChange={handleChange}
            value={formData.vehicleModel}
          />
          <input
            type='text'
            placeholder='Vehicle Make'
            className='border p-3 rounded-lg'
            id='vehicleMake'
            required
            onChange={handleChange}
            value={formData.vehicleMake}
          />
          <input
            type='number'
            placeholder='Vehicle Year'
            className='border p-3 rounded-lg'
            id='vehicleYear'
            required
            onChange={handleChange}
            value={formData.vehicleYear}
            min='1886' // The year the first car was made
            max={new Date().getFullYear()}
          />
          <input
            type='number'
            placeholder='Battery Capacity (kWh)'
            className='border p-3 rounded-lg'
            id='batteryCapacity'
            required
            onChange={handleChange}
            value={formData.batteryCapacity}
            min='0'
          />
          <select
            id='evType'
            className='border p-3 rounded-lg'
            onChange={handleChange}
            value={formData.evType}
          >
            <option value='electric'>Electric</option>
            <option value='hybrid'>Hybrid</option>
          </select>
          <input
            type='text'
            placeholder='Registration Number'
            className='border p-3 rounded-lg'
            id='registrationNumber'
            required
            onChange={handleChange}
            value={formData.registrationNumber}
          />
          <input
            type='text'
            placeholder='VIN (Vehicle Identification Number)'
            className='border p-3 rounded-lg'
            id='vin'
            required
            onChange={handleChange}
            value={formData.vin}
          />
        </div>

        <button
          disabled={loading}
          className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Registering...' : 'Register EV'}
        </button>
        {error && <p className='text-red-700 text-sm'>{error}</p>}
      </form>
    </main>
  );
}
