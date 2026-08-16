export const dudhwaParkData = {
  park: {
    name: "Dudhwa National Park",
    state: "Uttar Pradesh",
    district: "Lakhimpur Kheri",
    official_ecotourism_location: "Gadeneya, Uttar Pradesh 262902",
    nearby_city: "Palia Kalan",
    country: "India",
  },
  official_ecotourism_website: {
    url: "https://upecotourism.in/DudhwaTariffAcc.aspx#impContactNo",
    source_type: "Government eco-tourism website",
    accommodation_rates: [
      {
        type: "Cottage",
        occupancy: "Single occupancy",
        indian_tourist_rate_inr_per_night: 4500,
        foreign_tourist_rate_inr_per_night: 12600,
      },
      {
        type: "Cottage",
        occupancy: "Double occupancy",
        indian_tourist_rate_inr_per_night: 4900,
        foreign_tourist_rate_inr_per_night: 14400,
      },
      {
        type: "Dormitory",
        occupancy: "10 beds",
        indian_tourist_rate_inr_per_night: 10000,
        foreign_tourist_rate_inr_per_night: 32000,
      },
    ],
    accommodation_rules: {
      free_child_age_limit_years: 5,
      free_child_condition: "One child up to five years old may stay without an extra bed.",
      check_in: "13:00",
      check_out: "11:00",
      maximum_extra_beds_per_room: 1,
      extra_bed_rates_inr_per_night: {
        indian_tourist: 1500,
        foreign_tourist: 2000,
      },
      maximum_people_per_room: 3,
      taxes: "Applicable taxes are charged separately at checkout.",
    },
    sanctuary_entry_fees: [
      {
        visitor_category: "Adult",
        unit: "per person per trip",
        indian_tourist_fee_inr: 250,
        foreign_tourist_fee_inr: 2000,
      },
      {
        visitor_category: "Child (above 5 yrs)",
        unit: "per person per trip",
        indian_tourist_fee_inr: 100,
        foreign_tourist_fee_inr: 1400,
      },
    ],
    safari_rates: [
      {
        departure_point: "Dudhwa National Park Gate",
        full_vehicle_capacity_people: 7,
        full_vehicle_rate_inr: 4000,
        offline_per_person_rate_inr: 800,
      },
      {
        departure_point: "Dudhwa Tourism Premises",
        full_vehicle_capacity_people: 7,
        full_vehicle_rate_inr: 5000,
        offline_per_person_rate_inr: 1000,
      },
    ],
    safari_rate_inclusions: ["Guide fee", "Road fee"],
    safari_rules: {
      evening_safari_latest_entry: "16:00",
      closing_time: "Before sunset",
      photography_charges: "Payable separately according to Uttar Pradesh Forest Department rules",
      photography_included_in_room_tariff: false,
    },
    safari_timings: {
      winter: {
        morning: "07:00 – 10:00 AM",
        evening: "03:00 PM – Sunset",
      },
      summer: {
        morning: "06:00 – 09:00 AM",
        evening: "04:30 PM – Sunset",
      },
    },
    cancellation_policy: [
      {
        cancellation_period: "More than 11 days before check-in",
        refund_percentage: 100,
      },
      {
        cancellation_period: "10 to 4 days before check-in",
        refund_percentage: 75,
      },
      {
        cancellation_period: "3 days or fewer before check-in",
        refund_percentage: 0,
      },
    ],
    cancellation_notes: [
      "GST is not refunded if cancellation occurs after the last date of the booking month.",
      "If payment is deducted but the booking fails, the full amount is refunded to the same account.",
      "Users should email booking deduction details when payment is deducted without a successful booking confirmation.",
    ],
    facilities_and_terms: {
      air_conditioning: true,
      television: true,
      fan_and_electricity: "Subject to power availability and solar-light conditions.",
      applicable_tariff: "The government tariff applicable on the date of visit will apply.",
    },
    official_contacts: [
      {
        office: "Office of the Field Director, Dudhwa National Park",
        location: "Lakhimpur Kheri",
        phone: "05278-252106",
        role: "Primary Eco-Tourism & Wildlife Authority",
      },
      {
        office: "Office of the DLM, Dudhwa National Park",
        location: "Lakhimpur Kheri",
        phone: "05872-252055",
        role: "District Logging & Rest House Officer",
      },
    ],
  },
  private_operator_website: {
    url: "https://www.dudhwanationalpark.in/contact-us.php",
    source_type: "Private travel operator website",
    operator_name: "Jungle Safari",
    affiliated_with_official_park: false,
    contact: {
      phone: "+91 90840 22166",
      email: "dudhwapark@gmail.com",
    },
    location_context: {
      city: "Palia Kalan",
      district: "Lakhimpur Kheri",
      state: "Uttar Pradesh",
      description: "Palia Kalan is a peaceful gateway city near Dudhwa National Park.",
    },
    services: ["Online booking assistance", "Dudhwa tour packages", "Jeep safaris"],
    disclaimer: "Private agency operator assistance desk, not directly affiliated with UP Forest Dept government portal.",
  },
  verification_guidance: {
    preferred_source_for_official_information: "Uttar Pradesh Eco-Tourism Official Portal",
    preferred_contacts_for_official_verification: ["05278-252106", "05872-252055"],
    recommendation: "Confirm current rates, availability, safari permits, entry rules, and cancellation terms with the official eco-tourism authority before payment.",
  },
};
