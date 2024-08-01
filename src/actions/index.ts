'use server'
import { db } from "@/db"
import { redirect } from "next/navigation"
export async function editSnippet (id:number , code:string) {
    await db.snippet.update({
        where:{id},
        data:{code}
    })
    redirect(`/snippets/${id}`)
}

// delete the snippet 
export async function deleteSnippet(id:number) {
    await db.snippet.delete({
        where: {id}
    })
    redirect('/')
}

export async function createSnippet(formState:{message:string},formData: FormData) {
    
    const title = formData.get("title");
    const code = formData.get("code");
    if(typeof title !== 'string'  || title.length < 3) {
        return {message: 'title must be longer '}
    }
    if(typeof code !== 'string' || code.length < 3) {
        return {message: 'the code must be longer'} 
        }

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect("/");
  }