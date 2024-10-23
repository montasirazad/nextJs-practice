import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link href="/">
        <Image src="/logo.svg" alt="Protocol" width={100} height={24} />
      </Link>
    </div>
  );
};

export default Logo;
