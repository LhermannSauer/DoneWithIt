import * as Sentry from "sentry-expo";

const start = () => {
  Sentry.init({
    dsn: "https://a129873c08b1455da982d9d340d18e0b@o946895.ingest.sentry.io/5924897",
    enableInExpoDevelopment: true,
    debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
  });
};
const log = (error) => {
  Sentry.Native.captureException(error);
};

export default { start, log };
