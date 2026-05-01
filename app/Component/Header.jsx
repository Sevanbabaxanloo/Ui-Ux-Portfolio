import React from "react";
import Link from "next/link";

const styles = {
  headerContainer:
    "w-[1083px] h-[33px] mt-[40px] flex flex-row justify-between items-center max-mb:w-full max-mb:px-[33px] max-md:h-fit max-md:flex-col max-md:gap-[17px] max-md:items-start max-md:w-full max-md:px-[14px]",
  headerDivOne: "flex flex-row items-center cursor-pointer",
  headerDivOneP:
    "bg-[var(--btn-purple)] w-[63px] h-[25px] py-[6px] px-[10px] text-[10px] text-[#FEFFFF] font-[300] text-center align-middle rounded-[69px] shadow-custom",
  headerDivTwoUl:
    "flex flex-row gap-[13px] text-[#FEFFFF] text-[14px] font-[600] max-md:flex-wrap max-md:gap-[13px]",
  headerDivTwoli:
    "bg-[var(--bg-box)] h-[25px] py-[3px] px-[10px] text-[#FEFFFF] font-[300] text-center rounded-[69px] shadow-custom cursor-pointer",
};

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <div className={styles.headerDivOne}>
          <div className="pr-[10px]">
            <img src="/Assets/home-image/icon-logo.png" alt="logo" />
          </div>
          <div>
            <p className={styles.headerDivOneP}>Portfolio</p>
          </div>
        </div>
      </Link>
      <div>
        <div>
          <ul className={styles.headerDivTwoUl}>
            <Link className={styles.headerDivTwoli} href="/">
              home.
            </Link>
            <Link className={styles.headerDivTwoli} href="/AboutMe">
              about me.
            </Link>
            <Link className={styles.headerDivTwoli} href="/Works">
              works.
            </Link>
            <Link className={styles.headerDivTwoli} href="/Contact">
              contact.
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;