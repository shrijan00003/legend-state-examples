"use client";

import { enableReactUse } from "@legendapp/state/config/enableReactUse";
enableReactUse();

import React from "react";

interface IUILayout {
  children: React.ReactNode;
}

function UILayout(props: IUILayout) {
  return <div>{props.children}</div>;
}

export default UILayout;
