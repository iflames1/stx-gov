"use client";
import { AiFillHome } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { RiPlayCircleFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav({ className }) {
  const [path, setPath] = useState(null);
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const userName = parts[0];
  const pathstr = "/" + userName;

  useEffect(() => {
    if (userName === undefined) {
      setPath("");
    } else setPath(pathstr);
  }, [pathstr, userName]);

  const navs = ["/", "/explore", "/delegates", "/activity"];
  return (
    <div
      className={`${className} text-gray-600 dark:text-[rgba(255,255,255,0.5)] pt-6 flex flex-col gap-4`}
    >
      <Link
        href={`${navs.includes(path) ? "/" : path + "/dashboard"}`}
        className={`flex items-center gap-4 py-4 pl-8 ${
          (pathname === `${path + "/dashboard"}` || pathname === "/") &&
          "bg-blue-50 dark:bg-[rgba(0,201,169,0.05)] border-r-[2px] border-r-blue-500 dark:border-r-[#00C9A9]"
        }`}
      >
        <AiFillHome
          className={`size-6 ${
            pathname === `${path + "/dashboard"}` || pathname === "/"
              ? "text-blue-500 dark:text-[rgba(36,106,238,1)]"
              : ""
          }`}
        />
        <p
          className={`${
            (pathname === `${path + "/dashboard"}` || pathname === "/") &&
            "text-blue-700 dark:text-white"
          }`}
        >
          Dashboard
        </p>
      </Link>

      <Link
        href={`${navs.includes(path) ? "/explore" : path + "/explore"}`}
        className={`flex items-center gap-4 py-4 pl-8 ${
          (pathname === `${path}/explore` || pathname === "/explore") &&
          "bg-blue-50 dark:bg-[rgba(0,201,169,0.05)] border-r-[2px] border-r-blue-500 dark:border-r-[#00C9A9]"
        }`}
      >
        <ImTarget
          className={`size-6 ${
            pathname === `${path}/explore` || pathname === "/explore"
              ? "text-blue-500 dark:text-[rgba(36,106,238,1)]"
              : ""
          }`}
        />
        <p
          className={`${
            (pathname === `${path}/explore` || pathname === "/explore") &&
            "text-blue-700 dark:text-white"
          }`}
        >
          Explore
        </p>
      </Link>

      <Link
        href={`${navs.includes(path) ? "/delegates" : path + "/delegates"}`}
        className={`flex items-center gap-4 py-4 pl-8 ${
          (pathname === `${path}/delegates` || pathname === "/delegates") &&
          "bg-blue-50 dark:bg-[rgba(0,201,169,0.05)] border-r-[2px] border-r-blue-500 dark:border-r-[#00C9A9]"
        }`}
      >
        <BsPeopleFill
          className={`size-6 ${
            pathname === `${path}/delegates` || pathname === "/delegates"
              ? "text-blue-500 dark:text-[rgba(36,106,238,1)]"
              : ""
          }`}
        />
        <p
          className={`${
            (pathname === `${path}/delegates` || pathname === "/delegates") &&
            "text-blue-700 dark:text-white"
          }`}
        >
          Delegates
        </p>
      </Link>

      <Link
        href={`${navs.includes(path) ? "/activity" : path + "/activity"}`}
        className={`flex items-center gap-4 py-4 pl-8 ${
          (pathname === `${path}/activity` || pathname === "/activity") &&
          "bg-blue-50 dark:bg-[rgba(0,201,169,0.05)] border-r-[2px] border-r-blue-500 dark:border-r-[#00C9A9]"
        }`}
      >
        <RiPlayCircleFill
          className={`size-6 ${
            pathname === `${path}/activity` || pathname === "/activity"
              ? "text-blue-500 dark:text-[rgba(36,106,238,1)]"
              : ""
          }`}
        />
        <p
          className={`${
            (pathname === `${path}/activity` || pathname === "/activity") &&
            "text-blue-700 dark:text-white"
          }`}
        >
          Activity
        </p>
      </Link>
    </div>
  );
}
