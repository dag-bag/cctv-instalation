export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface GeoBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface GeoInfo {
  coordinates: GeoCoordinates;
  bounds: GeoBounds;
  timezone: string;
  area_km2: number;
  population: number;
  density_per_km2: number;
  elevation_m: number;
}

export interface ClimateInfo {
  type: string;
  summer_temp_c: string;
  winter_temp_c: string;
  monsoon_months: string[];
  annual_rainfall_mm: number;
}

export interface AirQualityInfo {
  avg_aqi: number;
  classification: string;
  worst_months: string[];
  best_months: string[];
}

export interface WaterInfo {
  source: string[];
  supply_hours_per_day: number;
  quality_rating: string;
  availability: string;
}

export interface EnvironmentInfo {
  climate: ClimateInfo;
  air_quality: AirQualityInfo;
  water: WaterInfo;
  green_cover_percent: number;
  noise_pollution: string;
}

export interface PowerInfo {
  provider: string[];
  avg_daily_cuts: number;
  avg_cut_duration_mins: number;
  reliability_score: number;
  industrial_connectivity: string;
}

export interface InternetInfo {
  fiber_providers: string[];
  avg_speed_mbps: number;
  reliability_score: number;
  "4g_coverage": string;
  "5g_available": boolean;
}

export interface HousingInfo {
  avg_rent_1bhk: number;
  avg_rent_2bhk: number;
  avg_rent_3bhk: number;
  avg_property_price_per_sqft: number;
  availability: string;
}

export interface InfrastructureInfo {
  power: PowerInfo;
  internet: InternetInfo;
  housing: HousingInfo;
  public_transport: string[];
  road_quality: string;
  metro_connectivity: boolean;
  airport_distance_km: number;
  railway_stations: number;
}

export interface ThreatProfile {
  crime_rate: string;
  common_crimes: string[];
  safe_score: number;
  safe_areas: string[];
  areas_to_avoid: string[];
}

export interface PoliceInfo {
  stations_count: number;
  response_time_mins: number;
  emergency_number: string;
  dedicated_cyber_cell: boolean;
}

export interface SecurityInfo {
  threat_profile: ThreatProfile;
  police: PoliceInfo;
  cctv_coverage: string;
  women_safety_rating: string;
}

export interface SeoInfo {
  meta_title: string;
  meta_description: string;
  keywords: string[];
  og_image: string;
  canonical_url: string;
}

export interface OfficeInfo {
  coordinates: GeoCoordinates;
  address: string;
  contact_phone: string;
  contact_email: string;
  working_days: string[];
}

export interface HoursInfo {
  monday_friday: string;
  saturday: string;
  sunday: string;
  holidays: string;
}

export interface OperationsInfo {
  office: OfficeInfo;
  hours: HoursInfo;
  service_areas: string[];
  coverage_radius_km: number;
  avg_response_time_hrs: number;
}

export interface ReviewDistribution {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
}

export interface ReviewsInfo {
  rating_distribution: ReviewDistribution;
  total_count: number;
  avg_rating: number;
  featured: unknown[];
}

export interface ZoneInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: string;
  key_localities: string[];
  suitable_for: string[];
  avg_security_rating: number;
  cctv_demand: string;
  popular_camera_types: string[];
  _id: string;
}

export interface CityData {
  _id: string;
  slug: string;
  name: string;
  display_name: string;
  state: string;
  country: string;
  is_active: boolean;
  priority: number;
  tags: string[];
  geo: GeoInfo;
  environment: EnvironmentInfo;
  infrastructure: InfrastructureInfo;
  security: SecurityInfo;
  seo: SeoInfo;
  operations: OperationsInfo;
  reviews: ReviewsInfo;
  zones: ZoneInfo[];
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface CitiesResponse {
  success: boolean;
  count: number;
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
  data: CityData[];
}

export interface SingleCityResponse {
  success: boolean;
  data: CityData | null;
}
