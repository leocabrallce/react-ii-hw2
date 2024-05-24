import { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: params.slug,
    description: `About page #${params.slug}`,
  };
}

export default function About({ params }: PageProps) {

  return (
    <main>
      <h1>About page #{params.slug}</h1>
    </main>
  );
}