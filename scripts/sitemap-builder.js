import "babel-register";

import router from "./router.jsx";
import Sitemap from "../";

new Sitemap(router).build("htts://barrytickle.com").save("./sitemap.xml");
