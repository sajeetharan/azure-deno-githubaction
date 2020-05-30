import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
const PORT = 8001;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server at ${PORT}`);
await app.listen({ port: PORT });
