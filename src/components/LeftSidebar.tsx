"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "홈",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "여행지 검색",
  },
  {
    imgURL: "/assets/airplane.svg",
    route: "/plan",
    label: "여행 계획",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/like",
    label: "좋아요 목록",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/my-info",
    label: "내 정보",
  },
];

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  //   const { userId } = useAuth();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        <div className="relative flex justify-start gap-4 rounded-lg p-4">
          <Image
            color="gray"
            src={"/assets/airplane.svg"}
            alt={"여행 계획"}
            width={24}
            height={24}
          />
          <p className="text-dark-1 max-lg:hidden">{"Big Foot"}</p>
        </div>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
            >
              <Image
                color="gray"
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-dark-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSidebar;
