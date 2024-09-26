export default function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    timeZone: "Asia/Karachi",
  }).format(new Date(dateStr));
}

// Changed your timezone according to your area

//Asia
// Asia/Karachi: Pakistan
// Asia/Tokyo: Japan
// Asia/Shanghai: China
// Asia/Kolkata: India
// Asia/Bangkok: Thailand
// Asia/Seoul: South Korea
// Asia/Singapore: Singapore
// Asia/Manila: Philippines
// Asia/Jakarta: Indonesia
// Asia/Dubai: United Arab Emirates
// Asia/Jerusalem: Israel
// Asia/Tehran: Iran
// Asia/Kabul: Afghanistan

// North America
// America/New_York: Eastern Time Zone (USA, Canada)
// America/Chicago: Central Time Zone (USA, Canada)
// America/Los_Angeles: Pacific Time Zone (USA, Canada)
// America/Toronto: Eastern Time Zone (Canada)
// America/Mexico_City: Central Time Zone (Mexico)

// Europe
// Europe/London: Greenwich Mean Time (GMT)
// Europe/Paris: Central European Time (CET)
// Europe/Berlin: Central European Time (CET)
// Europe/Rome: Central European Time (CET)
// Europe/Moscow: Moscow Standard Time (MSK)
// Europe/Madrid: Central European Time (CET)

// South America
// America/Sao_Paulo: Brasilia Time Zone (Brazil)
// America/Buenos_Aires: Argentina Time Zone (Argentina)
// America/Santiago: Chile Standard Time (CLST)

// Africa
// Africa/Cairo: Egypt Standard Time (EST)
// Africa/Johannesburg: South African Standard Time (SAST)
// Africa/Lagos: West African Time (WAT)
// Oceania
// Australia/Sydney: Australian Eastern Standard Time (AEST)
// Australia/Melbourne: Australian Eastern Standard Time (AEST)
// New_Zealand/Auckland: New Zealand Standard Time (NZST)
