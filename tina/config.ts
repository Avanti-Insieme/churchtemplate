import { defineConfig } from "tinacms";

const branch =
  process.env.BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const pageHeroFields = [
  { type: "string" as const, name: "eyebrow", label: "Eyebrow Text" },
  { type: "string" as const, name: "h1", label: "Heading (HTML supported)" },
  {
    type: "string" as const,
    name: "leadParagraph",
    label: "Lead Paragraph",
    ui: { component: "textarea" },
  },
];

const meetingTimeFields = [
  { type: "string" as const, name: "day", label: "Day" },
  { type: "string" as const, name: "time", label: "Time" },
  { type: "string" as const, name: "meta", label: "Service Type" },
  { type: "string" as const, name: "description", label: "Description" },
];

const socialLinkFields = [
  { type: "string" as const, name: "name", label: "Platform Name" },
  { type: "string" as const, name: "link", label: "URL" },
  { type: "string" as const, name: "iconClass", label: "Icon Class" },
];

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "siteData",
        label: "Site Data",
        path: "content",
        format: "json",
        match: {
          include: "data",
        },
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // ── HOME PAGE ──────────────────────────────────────────────
          {
            type: "object",
            name: "home",
            label: "Home Page",
            fields: [
              { type: "image", name: "heroImg", label: "Hero Image" },
              {
                type: "object",
                name: "pageHero",
                label: "Page Hero",
                fields: pageHeroFields,
              },
              {
                type: "object",
                name: "infoCards",
                label: "Info Cards",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.cardTitle ?? "Card" }),
                },
                fields: [
                  { type: "string", name: "icon", label: "Icon Class" },
                  { type: "string", name: "link", label: "Link" },
                  { type: "string", name: "cardBrow", label: "Eyebrow" },
                  { type: "string", name: "cardTitle", label: "Title" },
                  {
                    type: "string",
                    name: "cardText",
                    label: "Text",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "cardCtaText", label: "CTA Text" },
                ],
              },
            ],
          },

          // ── VISIT PAGE ─────────────────────────────────────────────
          {
            type: "object",
            name: "visit",
            label: "Visit Page",
            fields: [
              {
                type: "object",
                name: "pageHero",
                label: "Page Hero",
                fields: pageHeroFields,
              },
            ],
          },

          // ── LOCATIONS PAGE ─────────────────────────────────────────
          {
            type: "object",
            name: "locations",
            label: "Locations Page",
            fields: [
              {
                type: "object",
                name: "pageHero",
                label: "Page Hero",
                fields: pageHeroFields,
              },
              {
                type: "object",
                name: "locations",
                label: "Locations",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name ?? "Location" }),
                },
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "region", label: "Region" },
                  { type: "string", name: "name", label: "Campus Name" },
                  {
                    type: "object",
                    name: "address",
                    label: "Address",
                    fields: [
                      { type: "string", name: "number", label: "Street Number" },
                      { type: "string", name: "street", label: "Street Name" },
                      { type: "string", name: "city", label: "City" },
                      { type: "string", name: "province", label: "Province Code" },
                    ],
                  },
                  {
                    type: "object",
                    name: "meetingTimes",
                    label: "Meeting Times",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.day ? `${item.day} · ${item.time}` : "Time",
                      }),
                    },
                    fields: meetingTimeFields,
                  },
                  {
                    type: "object",
                    name: "cta",
                    label: "Call to Action",
                    fields: [
                      { type: "string", name: "label", label: "Button Label" },
                      { type: "string", name: "href", label: "URL" },
                      { type: "boolean", name: "primary", label: "Primary Style" },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "onlineMessage",
                label: "Online Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "leadParagraph",
                    label: "Lead Paragraph",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "object",
                    name: "link",
                    label: "Watch Link",
                    fields: [
                      { type: "string", name: "href", label: "URL" },
                      { type: "string", name: "target", label: "Target (e.g. _blank)" },
                    ],
                  },
                  {
                    type: "object",
                    name: "meetingTimes",
                    label: "Online Meeting Times",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.day ? `${item.day} · ${item.time}` : "Time",
                      }),
                    },
                    fields: [
                      { type: "string", name: "day", label: "Day" },
                      { type: "string", name: "time", label: "Time" },
                      { type: "string", name: "meta", label: "Service Type" },
                    ],
                  },
                ],
              },
            ],
          },

          // ── ABOUT PAGE ─────────────────────────────────────────────
          {
            type: "object",
            name: "about",
            label: "About Page",
            fields: [
              { type: "image", name: "heroImg", label: "Hero Image" },
              {
                type: "object",
                name: "pageHero",
                label: "Page Hero",
                fields: pageHeroFields,
              },
              {
                type: "object",
                name: "body",
                label: "Body Sections",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.eyebrow ?? "Section" }),
                },
                fields: [
                  { type: "image", name: "photo", label: "Photo" },
                  { type: "string", name: "eyebrow", label: "Eyebrow" },
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "leadParagraph",
                    label: "Lead Paragraph",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "string",
                    name: "beliefs",
                    label: "Belief Pills",
                    list: true,
                  },
                  {
                    type: "object",
                    name: "steps",
                    label: "Steps",
                    list: true,
                    ui: {
                      itemProps: (item) => ({ label: item?.heading ?? "Step" }),
                    },
                    fields: [
                      { type: "string", name: "heading", label: "Heading" },
                      {
                        type: "string",
                        name: "paragraph",
                        label: "Paragraph",
                        ui: { component: "textarea" },
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "cta",
                    label: "Call to Action",
                    fields: [
                      { type: "string", name: "label", label: "Button Label" },
                      { type: "string", name: "href", label: "URL" },
                    ],
                  },
                ],
              },
            ],
          },

          // ── EVENTS PAGE ────────────────────────────────────────────
          {
            type: "object",
            name: "events",
            label: "Events Page",
            fields: [
              {
                type: "object",
                name: "pageHero",
                label: "Page Hero",
                fields: pageHeroFields,
              },
              {
                type: "object",
                name: "items",
                label: "Events",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title ?? "Event" }),
                },
                fields: [
                  { type: "string", name: "mo", label: "Month (e.g. Jun)" },
                  { type: "string", name: "dy", label: "Day Number (e.g. 14)" },
                  { type: "string", name: "title", label: "Event Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "string",
                    name: "meta",
                    label: "Meta (time, location)",
                    list: true,
                  },
                ],
              },
            ],
          },

          // ── CAMPUS MEETING TIMES (used by Visit page) ──────────────
          {
            type: "object",
            name: "meetingTimes",
            label: "Campus Meeting Times",
            fields: [
              {
                type: "object",
                name: "pei",
                label: "PEI Campus",
                fields: [
                  {
                    type: "object",
                    name: "meetingTimes",
                    label: "Meeting Times",
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.day ? `${item.day} · ${item.time}` : "Time",
                      }),
                    },
                    fields: meetingTimeFields,
                  },
                ],
              },
            ],
          },

          // ── PEI CAMPUS (footer social + meeting times) ─────────────
          {
            type: "object",
            name: "pe",
            label: "PEI Campus",
            fields: [
              {
                type: "object",
                name: "meetingTimes",
                label: "Meeting Times",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.day ? `${item.day} · ${item.time}` : "Time",
                  }),
                },
                fields: meetingTimeFields,
              },
              {
                type: "object",
                name: "social",
                label: "Social Links",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name ?? "Link" }),
                },
                fields: socialLinkFields,
              },
            ],
          },

          // ── BC CAMPUS (footer social + meeting times) ──────────────
          {
            type: "object",
            name: "bc",
            label: "BC Campus",
            fields: [
              {
                type: "object",
                name: "meetingTimes",
                label: "Meeting Times",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.day ? `${item.day} · ${item.time}` : "Time",
                  }),
                },
                fields: meetingTimeFields,
              },
              {
                type: "object",
                name: "social",
                label: "Social Links",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name ?? "Link" }),
                },
                fields: socialLinkFields,
              },
            ],
          },
        ],
      },
    ],
  },
});
