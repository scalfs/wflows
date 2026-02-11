import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProblemSection } from "@/components/sections/problem";
import { FlywheelSection } from "@/components/sections/flywheel";
import { ComparisonSection } from "@/components/sections/comparison";
import { Timeline } from "@/components/sections/timeline";
import { Industries } from "@/components/sections/industries";
import { Proof } from "@/components/sections/proof";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <SocialProof />
      <ServicesOverview />
      <ProblemSection />
      <FlywheelSection />
      <ComparisonSection />
      <Timeline />
      <Industries />
      <Proof />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
