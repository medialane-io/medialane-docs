import { CANONICAL } from "@/lib/canonical";

export const MEDIALANE_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || CANONICAL.appUrl;

export const MEDIALANE_DOCS_URL =
  process.env.NEXT_PUBLIC_DOCS_URL || CANONICAL.docsUrl;

export const MEDIALANE_BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDIALANE_BACKEND_URL || CANONICAL.apiBaseUrl;
