import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center", padding: "20px" }}>
      <h1>⚠️ Oops! Something went wrong.</h1>
      <section>
        <h2>Error Details:</h2>
        <ul>
          <li><strong>Status:</strong> {err.status}</li>
          <li><strong>Message:</strong> {err.error?.message || "No message available"}</li>
          <li><strong>Stack Trace:</strong>
            <pre>{err.error?.stack || "No stack trace available"}</pre>
          </li>
        </ul>
      </section>
    </main>
  );
}
