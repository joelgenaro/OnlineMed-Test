"use client"

import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { EmergencyCheckStep } from './EmergencyCheckStep';
import { MedicalLayoutProps } from '@/types/medical';

const defaultTestimonial = {
  name: 'Nick P.',
  initials: 'NP',
  role: 'Student',
  location: 'New York',
  rating: 5,
  timeAgo: '1 week ago',
  review: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
  avatarColor: 'hsl(var(--warning-amber))'
};

const defaultEmergencySymptoms = [
  'Severe chest pain or difficulty breathing',
  'Severe abdominal pain',
  'High fever over 103°F (39.4°C)',
  'Severe headache with neck stiffness',
  'Sudden vision changes or confusion',
  'Severe dizziness or fainting'
];

export const MedicalConsultationPage: React.FC<MedicalLayoutProps> = ({
  testimonial = defaultTestimonial,
  emergencyCheck,
  showMoneyBackGuarantee = true,
  mainTitle = "Your Work Note is Minutes Away",
  subtitle = "Work",
  description = "Answer a few questions, pay securely, and have your note delivered to your inbox in minutes."
}) => {
  const defaultEmergencyCheck = {
    currentStep: 5,
    totalSteps: 12,
    title: "Making sure inline care is the right choice for you?",
    emergencySymptoms: defaultEmergencySymptoms,
    onBack: () => console.log('Back clicked'),
    onContinue: () => console.log('Continue clicked')
  };

  const emergencyCheckProps = emergencyCheck || defaultEmergencyCheck;

  return (
    <div className="min-h-screen bg-medical-gray flex flex-col md:flex-row">
      <div className="w-full md:w-[480px] bg-medical-blue-light pl-4 pr-4 pt-8 pb-8 flex flex-col justify-center md:pl-8 md:pr-4">
        <TestimonialCard
          testimonial={testimonial}
          showMoneyBackGuarantee={showMoneyBackGuarantee}
          mainTitle={mainTitle}
          subtitle={subtitle}
          description={description}
        />
      </div>

      <div className="w-full flex-1 bg-medical-blue-light p-3 flex flex-col justify-center">
        <div className="w-full h-full flex justify-center items-center bg-background rounded-3xl shadow-lg p-4 md:p-8">
          <EmergencyCheckStep {...emergencyCheckProps} />
        </div>
      </div>
    </div>
  );
};