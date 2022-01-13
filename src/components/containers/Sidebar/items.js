const items = [
  {
    label: "MAIN",
    menus: [
      {
        label: "Dashboard",
        id: "dashboard",
        icon: "bi bi-graph-up",
        href: "/",
        sub_menus: [],
      },
      {
        label: "Calendar",
        id: "calendar",
        icon: "bi bi-calendar",
        href: "/calendar",
        sub_menus: [],
      },
      {
        label: "Email",
        id: "email",
        icon: "bi bi-envelope",
        sub_menus: [
          {
            label: "Inbox",
            href: "email/inbox",
          },

          {
            label: "Email Read",
            href: "email/read",
          },

          {
            label: "Email Compose",
            href: "email/compose",
          },
        ],
      },
    ],
  },

  {
    label: "COMPONENTS",
    menus: [
      {
        label: "UI Elements",
        id: "elementes",
        icon: "bi bi-box-seam",
        href: "/",
        sub_menus: [
          {
            label: "Alerts",
            href: "#",
          },

          {
            label: "Buttons",
            href: "#",
          },

          {
            label: "Cards",
            href: "#",
          },
        ],
      },
    ],
  },
];

export default items;
