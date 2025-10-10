export const APP_TITLE = "Retoria";

export type FeatureItem = {
    description: string;
    iconKey:
        | "edit"
        | "clock"
        | "megaphone";
};

export const FEATURES: FeatureItem[] = [
    {
        description: "Practice anytime. Unlimited runs, zero judgment and objective points for improvement.",
        iconKey: "clock",
    },
    {
        description:
            "Elevate your confidence training with different roleplay scenarios.",
        iconKey: "megaphone",
    },
    {
        description:
            "Practice impromptu speaking with random topics designed to sharpen your improvisation skills.",
        iconKey: "edit",
    },
];


