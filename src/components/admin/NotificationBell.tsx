import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '@/lib/api';

const NotificationBell = () => {
  const [pendingCount, setPendingCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPendingCount = async () => {
    try {
      setLoading(true);
      const response = await api.get('/auth/pending-count');
      setPendingCount(response.data.count);
    } catch (error) {
      console.error('Error fetching pending count:', error);
      // If error (like not super admin), set count to 0
      setPendingCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch if user is logged in as admin
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    const userRole = localStorage.getItem('userRole');
    
    if (isLoggedIn && userRole === 'superadmin') {
      fetchPendingCount();
      
      // Refresh count every 30 seconds
      const interval = setInterval(fetchPendingCount, 30000);
      
      // Listen for custom refresh events
      const handleRefresh = () => {
        fetchPendingCount();
      };
      
      window.addEventListener('refreshNotifications', handleRefresh);
      
      return () => {
        clearInterval(interval);
        window.removeEventListener('refreshNotifications', handleRefresh);
      };
    }
  }, []);

  const handleNotificationClick = () => {
    navigate('/admin/external-users');
  };

  // Only show for super admin
  const userRole = localStorage.getItem('userRole');
  if (userRole !== 'superadmin') {
    return null;
  }

  return (
    <button
      onClick={handleNotificationClick}
      className="relative p-2 rounded-full hover:bg-muted/50 transition-colors"
      title={`${pendingCount} pending external user registrations`}
    >
      <Bell className="w-5 h-5 text-muted-foreground" />
      {pendingCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-medium">
          {pendingCount > 99 ? '99+' : pendingCount}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;