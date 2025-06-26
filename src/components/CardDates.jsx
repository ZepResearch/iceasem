'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { pb } from '@/lib/pocketbase';



const Card = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const ImportantDatesCard = () => {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Uncomment and modify this section to use with PocketBase
  
  useEffect(() => {
    const fetchDates = async () => {
      setLoading(true);
      try {
       
        const records = await pb.collection('ICASEM_dates').getFullList({
          sort: 'date',
            requestKey: null,
        });
        setDates(records);
      } catch (error) {
        console.error('Error fetching dates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDates();
  }, []);
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      full: date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      })
    };
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  const getDaysUntil = (dateString) => {
    const today = new Date();
    const targetDate = new Date(dateString);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="col-span-3 row-span-5 col-start-1 row-start-6">
      <Card className="h-full bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#07416b] to-[#00adef] p-4 xl:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg xl:text-xl">Important Dates</h2>
                <p className="text-white/80 text-sm">ICASEM 2024</p>
              </div>
            </div>
            <a 
              href="/papers-format" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Dates List */}
        <div className="p-4 xl:p-6 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00adef]"></div>
            </div>
          ) : (
            dates.map((item, index) => {
           
              
              return (
                <div 
                  key={item.id || index}
                  className={`flex items-center gap-4 p-3 xl:p-4 rounded-xl transition-all duration-200 hover:shadow-md ${
                    item.isDeadline 
                      ? 'bg-red-50 border border-red-100 hover:bg-red-100' 
                      : 'bg-blue-50 border border-blue-100 hover:bg-blue-100'
                  }`}
                >
                  
                  {/* Date Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm xl:text-base mb-1 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-xs xl:text-sm">
                          {item.date}
                        </p>
                      </div>
                      
                      {/* Status indicator */}
                    
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#07416b] to-[#00adef]"></div>
      </Card>
    </div>
  );
};

export default ImportantDatesCard;