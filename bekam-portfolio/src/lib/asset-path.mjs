export const BASE_PATH = "/bekamb7";

export function assetPath(path) {
  if (
    typeof path !== "string" ||
    !path.startsWith("/") ||
    path.startsWith("//")
  ) {
    return path;
  }

  const basePath = process.env.NODE_ENV === "production" ? BASE_PATH : "";

  if (
    !basePath ||
    path === basePath ||
    path.startsWith(`${basePath}/`)
  ) {
    return path;
  }

  return `${basePath}${path}`;
}
