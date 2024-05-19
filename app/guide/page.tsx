import { RedirectType, redirect } from "next/navigation";

export default function Functions() {
  redirect("/", RedirectType.replace);
}
