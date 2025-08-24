import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // download
    await step.sleep("wait-a-moment", "30s");
    // transcript
    await step.sleep("wait-a-moment", "10s");
    // summary
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);