import React from "react";
import { getElementBySlug } from "../../../../sanity/lib/utils";
import ElementDetails from "@/components/ElementDetails";
import IncorrectRoute from "@/components/IncorrectRoute";

export default async function ElementDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const element = await getElementBySlug(slug);

  return (
    <main className="mt-16 md:px-28 px-4 space-y-12 min-h-screen">
      {element[0] ? (
        <ElementDetails element={element[0]} />
      ) : (
        <IncorrectRoute />
      )}
    </main>
  );
}
