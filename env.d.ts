/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER_TOKEN: string;
      ADMIN_TOKEN: string;
      ENDPOINT_API: string;
      NOTION_KEY: string;
      NOTION_DATABASE_ID: string;
    }
  }
}
export {};
