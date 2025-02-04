import { headerText } from "@componentes/utils/text";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo-header.png";
import ButtonLink from "./ButtonLink";
import LinkControl from "./LinkControl";
import WalletStatus from "../WalletStatus";

const Header = () => {
  return (
    <header className="relative md:py-4 py-3 z-10">
      <div className="md:max-w-[90rem] mx-auto mx-[0] flex justify-between items-center md:px-[7rem] px-[0.875rem]">
        <div className="flex items-center">
          <Link href="/" className="text-textPrimary">
            <Image
              src={Logo}
              alt="Win logo"
              height={32}
              className="object-contain"
            />
          </Link>
          <WalletStatus />
        </div>
        <nav className="flex items-center space-x-2">
          <LinkControl
            href="/sign-in"
            text={headerText.logIn}
            variant="primary"
            size="small"
          />
          <ButtonLink
            href="/sign-up/create"
            text={headerText.register}
            variant="small"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
