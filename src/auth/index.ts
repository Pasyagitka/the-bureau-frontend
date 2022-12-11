/* eslint-disable no-restricted-syntax */
import AdminLayout from "@/layouts/AdminLayout";
import withAuth from "./withAuth";

const authComponents = { AdminLayout };
const protComponents = { AdminLayout };

const authenticatedComponents = {};
const protectedComponents = {};

for (const [key, value] of Object.entries(authComponents)) {
  authenticatedComponents[`Authenticated${key}`] = withAuth(value);
}

for (const [key, value] of Object.entries(protComponents)) {
  protectedComponents[`Protected${key}`] = withAuth(value);
}

export const wrappedComponents = { ...authenticatedComponents, ...protectedComponents };
