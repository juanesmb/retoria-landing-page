import { ReactNode } from "react";

export const APP_TITLE = "Retoria";

export type FeatureItem = {
    description: ReactNode;
    iconKey:
        | "edit"
        | "clock"
        | "megaphone";
};

export const FEATURES: FeatureItem[] = [
    {
        description: <><strong>Practice Anytime.</strong> Unlimited runs, zero judgment and objective points for improvement.</>,
        iconKey: "clock",
    },
    {
        description:
            <><strong>Elevate your Confidence</strong> training with different roleplay scenarios.</>,
        iconKey: "megaphone",
    },
    {
        description:
            <><strong>Sharpen your impromptu speaking</strong> with random topics.</>,
        iconKey: "edit",
    },
];


