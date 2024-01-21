"use server"
import { redirect } from "next/navigation"

export default async function navigateTo(url: string) {
  redirect(url)
}
