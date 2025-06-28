import React from 'react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  imageUrl: string;
  isActive?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  testimonial,
  imageUrl,
  isActive = false,
}) => {
  return (
    <div className={`p-8 border rounded-lg shadow-lg transition-all duration-300 ${isActive ? 'border-red-500' : 'border-gray-300 hover:shadow-xl'}`}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <img src={imageUrl} alt={name} className="w-14 h-14 rounded-full mr-4 object-cover" />
          <div>
            <p className="font-bold text-lg">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <div className="flex items-center text-lg">
          <span className="mr-2 font-medium">{rating.toFixed(1)}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
