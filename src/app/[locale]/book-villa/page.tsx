import { redirect } from "next/navigation";

/** Fix legacy /book-villa 404 by routing to The Ledge booking intent */
export default async function BookVillaRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/book?intent=ledge`);
}
