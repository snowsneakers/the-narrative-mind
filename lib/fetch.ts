export async function fetch_data(url: string) {
  const res = await fetch(url, { next: { revalidate: 0 } });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}
