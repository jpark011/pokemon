import { ReactNode } from "react";
import { Sidebar } from "./sidebar/Sidebar";

interface Props {
  children?: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="text-sla h-[100vh] flex-col bg-slate-300 lg:flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
