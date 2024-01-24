import { useRouter, useSearchParams } from "next/navigation";

export default function useCustomRouter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = {};
  let search = searchParams.get("search");

  if (search) query.search = search;

  const pushQuery = ({ search }) => {
    if (search !== undefined) {
      search === "" ? delete query.search : (query.search = search);
    }

    const newQuery = new URLSearchParams(query).toString();

    router.push(`/products/?${newQuery}`);
  };

  return { pushQuery, query };
}
