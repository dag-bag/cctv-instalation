import { LOCATIONS } from "./locations";

export type CityConfig = {
  name: string;
  localities: string[];
  landmarks?: string[];
};

export const CITY_CONFIG: Record<string, CityConfig> = LOCATIONS.reduce(
  (acc, location) => {
    acc[location.slug] = {
      name: location.name,
      localities: location.localities ?? [],
      landmarks: location.landmarks ?? [],
    };
    return acc;
  },
  {} as Record<string, CityConfig>
);

export const CITY_SLUGS = Object.keys(CITY_CONFIG);

export const isValidCity = (city: string): boolean => Boolean(CITY_CONFIG[city]);

export const getCityName = (city: string): string | undefined =>
  CITY_CONFIG[city]?.name;

export const getCityLocalities = (city: string): string[] =>
  CITY_CONFIG[city]?.localities ?? [];

