import { server } from "./server.js";

const port = 3050;



server.listen(3050, () => {
    console.log(`Server running at http://localhost:${port}/`)
});
