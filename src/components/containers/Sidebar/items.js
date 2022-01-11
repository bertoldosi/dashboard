const items = [
  {
    label: "MAIN",
    menus: [
      {
        label: "Dashboard",
        id: "dashboard",
        icon: "bi bi-graph-up",
        href: "#",
        sub_menus: [],
      },
      {
        label: "Calendar",
        id: "calendar",
        icon: "bi bi-graph-up",
        href: "#",
        sub_menus: [],
      },
      {
        label: "Email",
        id: "email",
        icon: "bi bi-envelope",
        sub_menus: [
          {
            label: "Inbox",
            href: "#",
          },

          {
            label: "Email Read",
            href: "#",
          },

          {
            label: "Email Compose",
            href: "#",
          },
        ],
      },
    ],
  },
];

export default items;
