import { useRouter, useSearchParams } from "next/navigation";

export default function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = {};
  let search = searchParams.get("search");
  let sort = searchParams.get("sort");
  if (search) query.search = search;
  if (sort) query.sort = sort;

  const pushQuery = ({ search, sort }) => {
    if (search !== undefined) {
      search === "" ? delete query.search : (query.search = search);
    }

    if (sort !== undefined) {
      sort === "name" ? delete query.sort : (query.sort = sort);
    }

    const newQuery = new URLSearchParams(query).toString();

    // Check if sort is present, and adjust the URL accordingly
    const route = sort ? `?${newQuery}` : `/?${newQuery}`;

    router.push(route);
  };

  return { pushQuery, query };
}
