import { db } from "@/db";
import { notFound } from "next/navigation";
import { SnippetShowPageProps } from "../snippetShowPageProps.type";
import SnippetEditForm from "@/components/SnippetEditForm";

export default async function SnippetEditPage(props: SnippetShowPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id: id },
  });
  if (!snippet) {
    return notFound();
  }
  return <div>
    <SnippetEditForm snippet={snippet}/> 
  </div>;
}
