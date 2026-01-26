import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';

const PricingModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    practiceName: '',
    numberOfDoctors: '',
    specialty: '',
    solutions: []
  });

  const specialties = [
    'Primary Care',
    'Cardiology',
    'Dermatology',
    'Orthopedics',
    'Pediatrics',
    'Psychiatry',
    'Radiology',
    'Surgery',
    'Urgent Care',
    'Other'
  ];

  const solutionsOptions = [
    'Medical Billing',
    'Medical Coding',
    'Revenue Cycle Management',
    'Credentialing',
    'Practice Consulting',
    'Denial Management',
    'Patient Collections',
    'Prior Authorization'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecialtyChange = (value) => {
    setFormData(prev => ({ ...prev, specialty: value }));
  };

  const handleSolutionToggle = (solution) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.includes(solution)
        ? prev.solutions.filter(s => s !== solution)
        : [...prev.solutions, solution]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Thank you for your interest!', {
      description: 'Our team will contact you shortly with pricing details.',
    });
    
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      practiceName: '',
      numberOfDoctors: '',
      specialty: '',
      solutions: []
    });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#003366]">
            Get Custom Pricing
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Fill out the form below and our team will provide you with a customized pricing plan.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                required
                className="w-full h-11 rounded-lg border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Smith"
                required
                className="w-full h-11 rounded-lg border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20"
              />
            </div>
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 000-0000"
                required
                className="w-full h-11 rounded-lg border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@practice.com"
                required
                className="w-full h-11 rounded-lg border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20"
              />
            </div>
          </div>

          {/* Practice Info Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Practice Name <span className="text-red-500">*</span>
              </label>
              <Input
                name="practiceName"
                value={formData.practiceName}
                onChange={handleInputChange}
                placeholder="Your Practice Name"
                required
                className="w-full h-11 rounded-lg border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Doctors <span className="text-red-500">*</span>
              </label>
              <Input
                type="number"
                name="numberOfDoctors"
                value={formData.numberOfDoctors}
                onChange={handleInputChange}
                placeholder="e.g., 5"
                required
                min="1"
                className="w-full h-11 rounded-lg border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20"
              />
            </div>
          </div>

          {/* Specialty */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialty <span className="text-red-500">*</span>
            </label>
            <Select onValueChange={handleSpecialtyChange} value={formData.specialty}>
              <SelectTrigger className="w-full h-11 rounded-lg border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20">
                <SelectValue placeholder="Select your specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Solutions of Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Solutions of Interest <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {solutionsOptions.map((solution) => (
                <div key={solution} className="flex items-center space-x-2">
                  <Checkbox
                    id={solution}
                    checked={formData.solutions.includes(solution)}
                    onCheckedChange={() => handleSolutionToggle(solution)}
                    className="border-gray-300 data-[state=checked]:bg-[#008080] data-[state=checked]:border-[#008080]"
                  />
                  <label
                    htmlFor={solution}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {solution}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || formData.solutions.length === 0}
            className="w-full h-12 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : (
              'Get Custom Pricing'
            )}
          </Button>

          <p className="text-center text-xs text-gray-500">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
