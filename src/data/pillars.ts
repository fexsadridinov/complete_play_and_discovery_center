import { HeartHandshake, Lightbulb, Users, Sparkles } from "lucide-react";
import type { Pillar } from "../types";

export const PILLARS: Pillar[] = [
  {
    id: "inclusion",
    title: "Inclusion",
    description:
      "Every child and family deserves a welcoming space designed for varied needs, rhythms, and ways of playing together.",
    icon: HeartHandshake,
  },
  {
    id: "discovery",
    title: "Discovery",
    description:
      "Hands-on exploration sparks confidence, curiosity, and joy—whether through sensory play, movement, or quiet discovery corners.",
    icon: Lightbulb,
  },
  {
    id: "community",
    title: "Community",
    description:
      "We grow stronger when neighbors, schools, and local partners come together around shared care for children and caregivers.",
    icon: Users,
  },
  {
    id: "support",
    title: "Support",
    description:
      "Families thrive with practical support, judgment-free connection, and spaces that honor both celebration and everyday life.",
    icon: Sparkles,
  },
];
