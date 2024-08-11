import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full absolute text-white z-10 p-6">
      <div className="flex grow items-center">
        <Link href={"/"}>Corp Project</Link>
      </div>
      <nav className="flex flex-row w-fit items-center justify-end space-x-4">
        <Link href={"/performance"}>Performance</Link>
        <Link href={"/reability"}>Reability</Link>
        <Link href={"/scale"}>Scale</Link>
      </nav>
    </div>
  );
};

export default Header;
