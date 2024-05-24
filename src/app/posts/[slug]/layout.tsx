"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

type PostLayoutProps = {
  children: React.ReactNode;
};

export default function PostLayout({ children }: PostLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Button
        label="Go Back"
        onClick={() => router.back()}
      />

      <div className="mt-4">
        {children}
      </div>
    </>
  );
}