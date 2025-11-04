import { useState } from 'react';

export default function useBookings() {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);

  
  const mockBookings = [
    { 
      id: 1, 
      user: { 
        name: "John Doe",
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567"
      }, 
      userName: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      sessionTitle: "Individual Therapy Session", 
      sessionType: "Individual Therapy",
      date: new Date('2024-12-15'),
      createdAt: new Date('2024-12-01'),
      status: "pending",
      reason: "I've been experiencing anxiety and stress at work. Looking for coping strategies and tools to manage daily stressors.",
      therapyReason: "Anxiety and stress management",
      notes: "Prefers evening sessions, available after 6 PM",
      additionalInfo: "Has previous experience with therapy"
    },
    { 
      id: 2, 
      user: { 
        name: "Sarah Wilson",
        email: "sarah.wilson@email.com",
        phone: "+1 (555) 987-6543"
      }, 
      userName: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1 (555) 987-6543",
      sessionTitle: "Couples Counseling", 
      sessionType: "Couples Therapy",
      date: new Date('2024-12-10'),
      createdAt: new Date('2024-11-28'),
      status: "approved",
      reason: "My partner and I are going through communication issues and need help rebuilding our connection.",
      therapyReason: "Relationship counseling",
      notes: "Both partners will attend, prefer weekend sessions"
    },
    { 
      id: 3, 
      user: { 
        name: "Michael Chen",
        email: "michael.chen@email.com",
        phone: "+1 (555) 456-7890"
      }, 
      userName: "Michael Chen",
      email: "michael.chen@email.com",
      phone: "+1 (555) 456-7890",
      sessionTitle: "Career Counseling", 
      sessionType: "Career Guidance",
      date: new Date('2024-12-05'),
      createdAt: new Date('2024-11-25'),
      status: "rejected",
      reason: "Feeling stuck in my current career path and unsure about future directions. Need guidance on career transition.",
      therapyReason: "Career transition support"
    },
    { 
      id: 4, 
      user: { 
        name: "Emily Rodriguez",
        email: "emily.rodriguez@email.com",
        phone: "+1 (555) 234-5678"
      }, 
      userName: "Emily Rodriguez",
      email: "emily.rodriguez@email.com",
      phone: "+1 (555) 234-5678",
      sessionTitle: "Family Therapy", 
      sessionType: "Family Counseling",
      date: new Date('2024-12-20'),
      createdAt: new Date('2024-12-02'),
      status: "pending",
      reason: "Our family is dealing with teenage behavioral issues and need help improving parent-child relationships.",
      therapyReason: "Family dynamics and parenting",
      notes: "Family of four, children ages 14 and 16"
    },
    { 
      id: 5, 
      user: { 
        name: "David Thompson",
        email: "david.thompson@email.com",
        phone: "+1 (555) 345-6789"
      }, 
      userName: "David Thompson",
      email: "david.thompson@email.com",
      phone: "+1 (555) 345-6789",
      sessionTitle: "Grief Counseling", 
      sessionType: "Bereavement Support",
      date: new Date('2024-12-08'),
      createdAt: new Date('2024-11-30'),
      status: "approved",
      reason: "Recently lost a family member and struggling with grief. Need support processing emotions and finding ways to cope.",
      therapyReason: "Grief and loss processing",
      additionalInfo: "Loss occurred 3 months ago"
    }
  ];

  const fetchBookings = async () => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      
      if (bookings.length > 0) {
        return bookings;
      } else {
        setBookings(mockBookings);
        return mockBookings;
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id, statusData) => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update booking status in local state
      setBookings(prev => prev.map(booking => 
        booking.id === id ? { ...booking, status: statusData.status } : booking
      ));
      
      return { success: true };
    } catch (error) {
      throw new Error("Failed to update booking status");
    } finally {
      setLoading(false);
    }
  };

  const scheduleSession = async (scheduleData) => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      console.log("Scheduling session:", scheduleData);
      // Here you would make an actual API call to schedule the session
      
      return { 
        success: true, 
        message: "Session scheduled successfully",
        scheduleId: Date.now().toString()
      };
    } catch (error) {
      throw new Error("Failed to schedule session");
    } finally {
      setLoading(false);
    }
  };

  const getBookingById = async (id) => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const booking = bookings.find(b => b.id === id || b._id === id);
      return booking || null;
    } catch (error) {
      throw new Error("Failed to fetch booking details");
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchBookings,
    updateBookingStatus,
    scheduleSession,
    getBookingById,
    loading
  };
}