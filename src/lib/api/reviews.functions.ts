import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  name: string;
  rating: number;
  text: string;
  when: string;
  profilePhoto?: string;
  uri?: string;
};

export type GoogleReviewsResult = {
  configured: boolean;
  rating: number | null;
  total: number | null;
  mapsUri: string | null;
  reviews: GoogleReview[];
};

const EMPTY: GoogleReviewsResult = {
  configured: false,
  rating: null,
  total: null,
  mapsUri: null,
  reviews: [],
};

const PLACE_QUERY = "Saffron 7, 1457 University Ave West Unit C, Windsor, ON N9B 1B8, Canada";

type PlaceReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
};

type Place = {
  id?: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlaceReview[];
};

const FIELDS = "places.id,places.rating,places.userRatingCount,places.googleMapsUri,places.reviews";

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsResult> => {
    const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
    if (!apiKey) return EMPTY;

    try {
      const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": FIELDS,
        },
        body: JSON.stringify({ textQuery: PLACE_QUERY, languageCode: "en" }),
      });

      if (!res.ok) {
        console.error(`Google Places request failed [${res.status}]: ${await res.text()}`);
        return EMPTY;
      }

      const json = (await res.json()) as { places?: Place[] };
      const place = json.places?.[0];
      if (!place) return { ...EMPTY, configured: true };

      const reviews: GoogleReview[] = (place.reviews ?? [])
        .map((r) => ({
          name: r.authorAttribution?.displayName ?? "Google user",
          rating: r.rating ?? 5,
          text: r.text?.text ?? r.originalText?.text ?? "",
          when: r.relativePublishTimeDescription ?? "",
          profilePhoto: r.authorAttribution?.photoUri,
          uri: r.authorAttribution?.uri,
        }))
        .filter((r) => r.text.length > 0);

      return {
        configured: true,
        rating: place.rating ?? null,
        total: place.userRatingCount ?? null,
        mapsUri: place.googleMapsUri ?? null,
        reviews,
      };
    } catch (error) {
      console.error(error);
      return EMPTY;
    }
  },
);
