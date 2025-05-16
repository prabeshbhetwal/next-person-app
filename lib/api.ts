export async function searchUsers(query: string) {
  // Always send the query param, even if empty
  const res = await fetch(`/api/people?query=${encodeURIComponent(query || '')}`)
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Failed to fetch users')
  }
  return res.json()
}
