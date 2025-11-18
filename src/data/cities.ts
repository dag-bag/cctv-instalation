export type CityConfig = {
  name: string;
};

export const CITY_CONFIG: Record<string, CityConfig> = {
  delhi: { name: "Delhi" },
};

export const CITY_SLUGS = Object.keys(CITY_CONFIG);

export const isValidCity = (city: string): boolean => CITY_SLUGS.includes(city);

export const getCityName = (city: string): string | undefined => CITY_CONFIG[city]?.name;

