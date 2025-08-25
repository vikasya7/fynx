import {  openai, createAgent } from "@inngest/agent-kit"




import { inngest } from "./client";
import { success } from "zod";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const codeAgent= createAgent({
      name:"summarizer",
      system: "You are an expert next.js developer. You write readable maintainable code. You write simple Next.js & React snippets.",
      model: openai({model : "gpt-4o" })
    });

    const { output } = await codeAgent.run(
    `write the following snippet: ${event.data.value}`,
    );
   
    // download
    
    // summary
    
    return { output};
  },
);