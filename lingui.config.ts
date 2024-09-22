import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
  locales: ["en", "es"],
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src/components", "src/pages"],
    },
  ],
};

export default config;
