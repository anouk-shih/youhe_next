import React from "react";
import LogoBar from "./LogoBar";
import OptionMenu from "./OptionsMenu";

export default function layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <LogoBar />
      <main>{children}</main>
      <OptionMenu />
    </>
  );
}
