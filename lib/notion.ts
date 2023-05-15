import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const fetchPages = function () {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });
};
