export interface TestimonialData {
  name: string;
  initials: string;
  role: string;
  location: string;
  rating: number;
  timeAgo: string;
  review: string;
  avatarColor?: string;
}

export interface EmergencyCheckProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  emergencySymptoms: string[];
  onBack: () => void;
  onContinue: () => void;
}

export interface MedicalLayoutProps {
  testimonial?: TestimonialData;
  emergencyCheck?: EmergencyCheckProps;
  showMoneyBackGuarantee?: boolean;
  mainTitle?: string;
  subtitle?: string;
  description?: string;
}