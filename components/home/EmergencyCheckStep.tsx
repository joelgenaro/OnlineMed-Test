import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmergencyCheckProps } from '@/types/medical';

export const EmergencyCheckStep: React.FC<EmergencyCheckProps> = ({
  currentStep,
  totalSteps,
  title,
  emergencySymptoms,
  onBack,
  onContinue
}) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto ">
      <div className="">
        <span className="text-xl font-medium">
          <span className="text-medical-blue">Step {currentStep}</span><span className="text-medical-text-light">/{totalSteps}</span>
        </span>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-medical-text leading-tight">
          {title}
        </h1>
      </div>

      <div>
        <div className="h-10 bg-red-400 rounded-t-lg"></div>
        <div className="bg-red-50 rounded-lg p-6 space-y-4 relative overflow-hidden -mt-[38px]">
          <div className="space-y-4">
            <p className="text-gray-700 text-base leading-relaxed">
              Please confirm you are <span className="font-bold">NOT</span> experiencing any emergency symptoms:
            </p>

            <ul className="space-y-2 ml-4">
              {emergencySymptoms.map((symptom, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-700 mt-0.5 text-base">•</span>
                  <span className="text-base leading-relaxed">{symptom}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <p className="text-base text-gray-700 leading-relaxed">
                If yes, please seek <span className="font-bold">immediate medical attention</span> by visiting your nearest <span className="font-bold">emergency room</span> or <span className="font-bold">calling 911</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center text-lg gap-2 text-medical-blue hover:text-medical-blue/80"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>

        <Button
          onClick={onContinue}
          className="bg-medical-blue hover:bg-medical-blue/90 text-background px-8 py-3 font-medium"
        >
          I am NOT Experiencing Any Emergency Symptoms
        </Button>
      </div>
    </div>
  );
};