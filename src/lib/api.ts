import { CitiesResponse, SingleCityResponse } from "@/types/city";
// import SAMPLE_DELHI_DATA from "./data/sample-city-data.json";

const API_BASE_URL = "https://api.camharbor.in/api";

export async function getCities(): Promise<CitiesResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/cities`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch cities: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching cities:", error);
    return {
      success: false,
      count: 0,
      pagination: { total: 0, page: 1, pages: 1 },
      data: []
    };
  }
}

export async function getCityBySlug(slug: string): Promise<SingleCityResponse> {
  // Temporary mock for Delhi to support development with new rich schema


  try {
    const response = await fetch(`${API_BASE_URL}/cities/${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      if (response.status === 404) {
        return { success: false, data: null };
      }
      throw new Error(`Failed to fetch city ${slug}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching city ${slug}:`, error);
    return { success: false, data: null };
  }
}
