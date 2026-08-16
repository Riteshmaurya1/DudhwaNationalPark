export interface AccommodationRate {
  type: string;
  occupancy: string;
  indian_tourist_rate_inr_per_night: number;
  foreign_tourist_rate_inr_per_night: number;
}

export interface AccommodationRules {
  free_child_age_limit_years: number;
  free_child_condition: string;
  check_in: string;
  check_out: string;
  maximum_extra_beds_per_room: number;
  extra_bed_rates_inr_per_night: {
    indian_tourist: number;
    foreign_tourist: number;
  };
  maximum_people_per_room: number;
  taxes: string;
}

export interface SanctuaryEntryFee {
  visitor_category: string;
  unit: string;
  indian_tourist_fee_inr: number;
  foreign_tourist_fee_inr: number;
}

export interface SafariRate {
  departure_point: string;
  full_vehicle_capacity_people: number;
  full_vehicle_rate_inr: number;
  offline_per_person_rate_inr: number;
}

export interface CancellationRule {
  cancellation_period: string;
  refund_percentage: number;
}

export interface OfficialContact {
  office: string;
  location: string;
  phone: string;
  role: string;
}
