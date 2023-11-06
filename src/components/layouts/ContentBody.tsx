"use client";

import { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import css from "styled-jsx/css";

const style = css`
  .content-body {
    display: flex;
    column-gap: 12px;
    margin: 0 20px 20px;
    flex: 1;
    height: calc(100% - 60px - 77px - 20px);

    &.with-shape {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 20px;
      flex-direction: column;
    }
  }
`;

interface ContentBodyProps {
  type?: "default" | "with-shape";
  children: ReactNode | ReactNode[];
}

function ContentBody({ type, children }: ContentBodyProps): ReactElement {
  return (
    <div className={clsx("content-body", type)}>
      {children}
      <style jsx>{style}</style>
    </div>
  );
}

export default ContentBody;
