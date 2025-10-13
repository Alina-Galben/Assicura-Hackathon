
import { useState, useEffect } from 'react';
import { getProfile } from '../services/authService';

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUserProfile(data);
      } catch (err) {
        setError('Impossibile caricare il profilo.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Caricamento del profilo...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Il Mio Profilo</h1>
      {userProfile && (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Nome</p>
            <p className="text-lg font-semibold">{userProfile.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-lg font-semibold">{userProfile.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}