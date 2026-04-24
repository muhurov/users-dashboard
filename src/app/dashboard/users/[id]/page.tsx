export const dynamic = "force-dynamic";

import UserDetailsPage from "@/views/user-details-page";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function UserDetails({ params }: PageProps) {
  const { id } = await params;

  return <UserDetailsPage userId={id} />;
}
