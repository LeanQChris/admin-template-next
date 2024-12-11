import { HydrationBoundary } from "@tanstack/react-query";
import Lists from "./lists";
import { getQueryClient } from "@/core/lib/get-query-client";
import { fetchPosts } from "./action";


export default async function Home() {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  return (
    <HydrationBoundary>
      <Lists />
    </HydrationBoundary>
  );
}
