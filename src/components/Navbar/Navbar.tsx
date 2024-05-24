"use client";
import Link from "next/link";
import Button from "@/components/Button";
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const routes = [
    { id: 0, title: "Home", path: '/' },
    { id: 1, title: "Post 1", path: '/posts/1' },
    { id: 2, title: "Post 2", path: '/posts/2' },
    { id: 3, title: "Post 3", path: '/posts/3' },
  ];

  const goToRandomPost = () => {
    const randomPostId = Math.floor(Math.random() * 3) + 1;
    router.push(`/posts/${randomPostId}`);
  };

  return (
    <nav className="m-8 flex gap-4 items-center">
      <ul className="flex gap-4">
        {routes.map(route => (
          <li key={route.id}>
            <Link href={route.path} className={pathname === route.path ? 'font-bold' : ''}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        label="Random Post"
        onClick={goToRandomPost}
      />
    </nav>
  );
}