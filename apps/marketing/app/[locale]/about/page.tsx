import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import { AboutContent } from "./content";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function AboutPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <AboutContent />;
}
