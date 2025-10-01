export const APP_TITLE = "Retoria";

export type FeatureItem = {
  title: string;
  description: string;
  iconKey:
    | "edit"
    | "users"
    | "bolt"
    | "clock"
    | "checkchart"
    | "megaphone";
};

export const FEATURES: FeatureItem[] = [
  {
    title: "Speechwriting Guidance",
    description:
      "Get AI-powered help crafting compelling content with structure, persuasion techniques, and storytelling elements.",
    iconKey: "edit",
  },
  {
    title: "Interactive AI Roleplays",
    description:
      "Practice with AI-powered scenarios and conversations to build confidence and refine your delivery in realistic situations.",
    iconKey: "users",
  },
  {
    title: "Instant Feedback",
    description:
      "Get real-time analysis on your speech delivery, pacing, and presentation skills as you practice.",
    iconKey: "bolt",
  },
  {
    title: "Practice, Anytime",
    description: "Unlimited runs, zero judgment.",
    iconKey: "clock",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Spot weaknesses you never noticed and transform them into strengths.",
    iconKey: "checkchart",
  },
  {
    title: "Confidence Training",
    description:
      "Build the clarity, pace, and presence that captivate audiences.",
    iconKey: "megaphone",
  },
];


