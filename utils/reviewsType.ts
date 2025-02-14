import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ReviewType {
  firstName: string;
  lastName: string;
  clientImage: SanityImageSource | null;
  homeImage: SanityImageSource;
  date: string;
  rating: number | null;
  isVerified: boolean;
  description: string;
}
