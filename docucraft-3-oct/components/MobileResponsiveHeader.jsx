import Image from "next/image";

const MobileResponsiveHeader = () => {
  return (
    <div className="flex items-center gap-5 lg:hidden">
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Toggle navigation"
      >
        <Image
          src="/hamburger.svg"
          alt="Menu"
          className=" stroke-zinc-900 dark:stroke-white"
          height={10}
          width={10}
        />
      </button>
      <a aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          alt="Protocol"
          width={100}
          height={24}
          // className="h-6"
        />
      </a>
    </div>
  );
};

export default MobileResponsiveHeader;
