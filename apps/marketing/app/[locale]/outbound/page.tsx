import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import { OutboundContent } from "./content";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function OutboundPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <OutboundContent />;
}
