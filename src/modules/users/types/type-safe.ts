// Exclude keys from user
import { User } from "@prisma/client";

// Exclude keys from user
export function exclude(user : User, keys: string[]) {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key))
  );
}