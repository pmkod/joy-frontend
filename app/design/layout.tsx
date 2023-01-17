import Link from "next/link";

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const groups = [
    {
      name: "Buttons",
      links: [
        {
          name: "Button",
          path: "/button",
        },
        {
          name: "IconButton",
          path: "/icon-button",
        },
      ],
    },
    {
      name: "Inputs",
      links: [
        {
          name: "Input",
          path: "/input",
        },
        {
          name: "Autocomplete",
          path: "/autocomplete",
        },
      ],
    },
  ];

  return (
    <div className="flex">
      <div className="w-56 sticky top-0 left-0 h-screen">
        <div className="pt-4 pb-8 pl-8 text-3xl font-bold">Joy</div>
        <div className="pl-6">
          {groups.map(({ name, links }, index) => (
            <div className="mb-8" key={index}>
              <div className="mb-1 text-amber-500 text-sm pl-2 ">{name}</div>
              {links.map((link, index) => (
                <Link href={`/design/${link.path}`} key={index} className="flex py-1.5 px-2 hover:bg-gray-100 rounded transition-colors text-gray-900">{link.name}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 px-4 pt-10">{children}</div>
    </div>
  );
}
