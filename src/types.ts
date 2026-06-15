export interface FlooringProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  industries: string[];
  visualTheme: {
    accentBg: string;
    textAccent: string;
    borderAccent: string;
  };
}

export interface IndustrySector {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  iconName: string; // Used to dynamic render Lucide icons
}

export interface ClientProfile {
  category: "Automobiles" | "Food, Pharma & Healthcare" | "Chemical & Fertilizer" | "Auto Engine Parts & Engineering";
  companies: string[];
}

export interface InquiryFormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  area: string;
  description: string;
}

export interface FeedbackMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
