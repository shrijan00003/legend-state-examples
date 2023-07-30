import React from "react";

function Layout(props: any) {
  return (
    <main className="flex min-h-screen justify-between p-5">
      {props.children}
    </main>
  );
}

export default Layout;
