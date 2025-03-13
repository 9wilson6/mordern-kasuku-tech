import { Link } from "@inertiajs/react";

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

interface PaginationData {
  current_page: number;
  last_page: number;
  links: PaginationLink[];
}

interface PaginationProps {
  pagination: PaginationData;
}

const Pagination = ({ pagination }: PaginationProps) => {
  return (
    <div className="flex justify-start w-full max-w-5xl mt-4">
      <nav>
        <ul className="flex space-x-2">
          {pagination.links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url || "#"}
                preserveState
                className={`px-3 py-1 border rounded ${
                  link.active
                    ? "bg-blue-500 text-white"
                    : "text-blue-500 hover:bg-blue-100"
                }`}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label.includes("&laquo;") ||
                link.label.includes("&raquo;")
                  ? link.label.replace(/&laquo;|&raquo;/g, "")
                  : link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
