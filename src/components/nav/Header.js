import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function Header(props) {
  const router = useRouter();
  useEffect(() => {
    console.log("router.route::", router.route);
  }, [router]);
  return (
    <div className="header-wrapper p-2 text-slate-600 flex">
      <div className="logo-wrapper  w-full">
        <div className="logo-container  ">
          <span className="text-3xl top-2.5 text-indigo-700  font-mono absolute  ">
            ooNil
          </span>
          <span className="text-3xl font-mono font-bold">ooNil</span>
        </div>
      </div>
      <div className="nav-wrapper">
        <div className="nav-container">
          <ul>
            <li className="inline cursor-pointer pr-2">
              <Link href={"/"}>
                <span className="font-bold text-slate-700">
                  <span
                    className={`font-bold text-indigo-700 text-2xl pr-1 ${
                      router.route == "/" ? "" : "hidden"
                    } `}
                  >
                    /
                  </span>
                  Homepage
                </span>
              </Link>
            </li>
            <li className="inline cursor-pointer pr-2">
              <Link href={"/about"}>
                <span className="font-bold text-slate-700">
                  <span
                    className={`font-bold text-indigo-700 text-2xl pr-1 ${
                      router.route == "/about" ? "" : "hidden"
                    } `}
                  >
                    /
                  </span>
                  About
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
