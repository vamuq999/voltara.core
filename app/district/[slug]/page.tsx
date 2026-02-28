import { notFound } from "next/navigation";
import DistrictShell from "@/components/DistrictShell";
import { getDistrict } from "@/lib/districts";

export default function DistrictPage({
  params,
}: {
  params: { slug: string };
}) {
  const district = getDistrict(params.slug);
  if (!district) return notFound();

  return <DistrictShell district={district} backHref="/" />;
}