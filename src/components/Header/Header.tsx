import Image from "next/image";

function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full flex justify-between items-center p-2 border-b border-gray-200 bg-gray-800 border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={120}
          height={38}
          priority
        />
      </div>
    </nav>
  );
}

export default Header;
