import { CakeIcon, HomeIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { Icon } from "./Icon";
import pokeballLogo from "/pokeball.png";

interface Props {}

export function Sidebar() {
  return (
    <div className="lg flex h-16 items-center gap-4  bg-slate-900 p-2 lg:h-[100vh] lg:w-16 lg:flex-col">
      <img src={pokeballLogo} width={60} height={60} />
      <Icon icon={HomeIcon} text="홈" />
      <Icon icon={Squares2X2Icon} text="도감" />
      <Icon icon={CakeIcon} text="생일" />
    </div>
  );
}

Sidebar.Icon = Icon;
