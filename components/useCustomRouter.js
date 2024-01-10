import { useRouter, useSearchParams } from "next/navigation";

export default function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = {};
  let search = searchParams.get("search");
  let sort = searchParams.get("sort");
  let poleLength = searchParams.get("poleLength");

  if (search) query.search = search;
  if (sort) query.sort = sort;
  if (poleLength) query.poleLength = poleLength;

  const pushQuery = ({ search, sort, poleLength }) => {
    if (search !== undefined) {
      search === "" ? delete query.search : (query.search = search);
    }

    if (sort !== undefined) {
      sort === "name" ? delete query.sort : (query.sort = sort);
    }

    if (poleLength !== undefined) {
      poleLength === "" ? delete query.poleLength : (query.poleLength = poleLength);
    }

    const newQuery = new URLSearchParams(query).toString();

    // Check if sort is present, and adjust the URL accordingly
    const route = sort || poleLength ? `?${newQuery}` : `/?${newQuery}`;

    router.push(route);
  };

  return { pushQuery, query };
}
