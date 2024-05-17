import { RedirectType, redirect } from "next/navigation";

export default function Utilities() {
  redirect("/", RedirectType.replace);
}
