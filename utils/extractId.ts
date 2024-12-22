function extractIdFromUrl(url: string): string | null {
  const regex = /\/f\/([a-zA-Z0-9]+)/; // Regular expression to match the ID part
  const match = url.match(regex);
  return match ? match[1] : null; // Return the ID or null if not found
}
export default extractIdFromUrl;

export function splitSubjectCategory(input: string): {
  subject: string;
  category: string;
} {
  const regex = /^([a-zA-Z]+)-([a-zA-Z]+)$/; // Regular expression to match "subject-category"
  const match = input.match(regex);

  if (match) {
    const [_, subject, category] = match; // Destructure the match result
    return { subject, category };
  }

  return {
    subject: "",
    category: "",
  };
}
