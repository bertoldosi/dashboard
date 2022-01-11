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
        icon: "bi bi-graph-up",
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

      {
        label: "Email 2",
        id: "email2",
        icon: "bi bi-envelope",
        sub_menus: [
          {
            label: "Inbox2",
            href: "email/inbox2",
          },
        ],
      },
    ],
  },
];

export default items;
