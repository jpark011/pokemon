import { ComponentType } from "react";

interface Props {
  icon: ComponentType<{ className?: string }>;
  text?: string;
}

export function Icon({ icon: Icon, text = "아이콘" }: Props) {
  return (
    <div className="group flex content-center items-center rounded-3xl bg-slate-700 p-2 transition-all duration-300 ease-linear hover:rounded-lg hover:bg-teal-500">
      <Icon className="h-8 w-8 text-teal-500  group-hover:text-white" />
      <span className="absolute top-16 min-w-max scale-0 rounded-md bg-slate-500 p-2 font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100 lg:left-16 lg:top-auto">
        {text}
      </span>
    </div>
  );
}
