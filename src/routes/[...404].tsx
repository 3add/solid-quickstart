import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        {" "}
        <a href="https://start.solidjs.com" target="_blank">
          Back to home page
        </a>{" "}
      </p>
    </main>
  );
}
