const basePath =
  "https://bus-stats-api-prod-bus-stats-api-zd0528.mo5.mogenius.io:80/api/v1/";

export function api(path: string): string {
  return basePath + path;
}
