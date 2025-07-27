// import { useRouteError } from "react-router-dom"

// export default function ErrorPage() {
//   const err = useRouteError()
//   console.log(err)
//   return (
//     <div><h1>Something wenr wrong...</h1>
//     <p><b>Status -- </b>  {err.status}</p>
//     <p><b>Msg -- </b> {err.error.message}</p>
//     <p><b>stack -- </b>{err.error.stack}</p>
//     </div>
//   )
// }


import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);

  return (
    <main>
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
