import useSWR from "swr";

async function GET(url: string) {
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!resp.ok) {
    const error = new Error("Não foi possível buscar os dados.");
    throw error;
  }

  const data = await resp.json();

  return data;
}

export default function useFetch(url: string, shouldFetch: boolean) {
  const { data, isLoading, error, mutate } = useSWR(
    shouldFetch ? [url] : null,
    () => GET(url), {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}
