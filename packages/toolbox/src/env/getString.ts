export function getString(key: string, defaultValue: string): string {
  const value = process.env[key] !== void 0 ? process.env[key] : defaultValue
  return value as string
}
