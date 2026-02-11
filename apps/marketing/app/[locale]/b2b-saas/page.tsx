import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import { B2bSaasContent } from "./content";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function B2bSaasPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <B2bSaasContent />;
}
