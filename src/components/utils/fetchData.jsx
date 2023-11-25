import { useQuery } from "@tanstack/react-query";

export function fetchContentPayload() {
  const { data, isLoading, status } = useQuery({
    queryKey: ["PROJECTS"],
    queryFn: () =>
      fetch("https://p01--admin--jh7ls6pxcdjh.code.run/api/project?limit=100", {
        credentials: "include",
        method: "GET",
      }).then((req) => req.json()),
  });
  return data;
}
