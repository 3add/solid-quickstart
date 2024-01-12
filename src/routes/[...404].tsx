import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Error 404</h1>
      <h2>Page Not Found</h2>
      <p>
        <a href="/">Back to home Page</A>
      </p>
    </main>
  );
}
