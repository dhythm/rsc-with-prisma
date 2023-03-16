import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Root } from "./Root.client";

export default function App() {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <Root />
      </ErrorBoundary>
    </Suspense>
  );
}

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
};
