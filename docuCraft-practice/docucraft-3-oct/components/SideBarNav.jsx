import Link from "next/link";

const SideBarNav = ({ docs }) => {
  const roots = docs.filter((doc) => !doc.parent);
  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );
 
 


  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {roots.map((rootNode) => (
          <li className="relative" key={rootNode.id}>
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href={`/docs/${rootNode.id}`}
            >
              <span className="truncate">{rootNode.title}</span>
            </Link>

            {nonRoots[rootNode.id] && (
              <ul role="list" className="border-l border-transparent">
                {/* {console.log("nonRoots[rootNode.id]", nonRoots[rootNode.id])} */}
                {nonRoots[rootNode.id].map((subRoot) => (
                  <li className="relative" key={subRoot.id}>
                    <Link
                      aria-current="page"
                      className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-900 transition dark:text-white"
                      href={`/docs/${rootNode.id}/${subRoot.id}`}
                    >
                      <span className="truncate">{subRoot.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBarNav;
