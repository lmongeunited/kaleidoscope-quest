export type CategoryId =
  | "mental-health"
  | "medical"
  | "transportation"
  | "housing"
  | "food"
  | "childcare"
  | "technology"
  | "legal"
  | "immigration"
  | "general"
  | "foster-care"
  | "justice"
  | "internships";

export interface Resource {
  name: string;
  description: string;
  phone?: string;
  url?: string;
  category: CategoryId;
  address?: string;
  highlight?: boolean;
}

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  colorClass: string;
  bgClass: string;
}

export const categories: Category[] = [
  { id: "mental-health", label: "Mental Health", emoji: "🧠", colorClass: "text-cat-mental", bgClass: "bg-cat-mental" },
  { id: "medical", label: "Medical", emoji: "🏥", colorClass: "text-cat-medical", bgClass: "bg-cat-medical" },
  { id: "transportation", label: "Transportation", emoji: "🚌", colorClass: "text-cat-transport", bgClass: "bg-cat-transport" },
  { id: "housing", label: "Housing", emoji: "🏠", colorClass: "text-cat-housing", bgClass: "bg-cat-housing" },
  { id: "food", label: "Food", emoji: "🍎", colorClass: "text-cat-food", bgClass: "bg-cat-food" },
  { id: "childcare", label: "Childcare", emoji: "👶", colorClass: "text-cat-childcare", bgClass: "bg-cat-childcare" },
  { id: "technology", label: "Technology", emoji: "💻", colorClass: "text-cat-tech", bgClass: "bg-cat-tech" },
  { id: "legal", label: "Legal", emoji: "⚖️", colorClass: "text-cat-legal", bgClass: "bg-cat-legal" },
  { id: "immigration", label: "Immigration", emoji: "🌎", colorClass: "text-cat-immigration", bgClass: "bg-cat-immigration" },
  { id: "general", label: "General", emoji: "📋", colorClass: "text-cat-general", bgClass: "bg-cat-general" },
  { id: "foster-care", label: "Foster Care", emoji: "💛", colorClass: "text-cat-foster", bgClass: "bg-cat-foster" },
  { id: "justice", label: "Justice System", emoji: "🔗", colorClass: "text-cat-justice", bgClass: "bg-cat-justice" },
  { id: "internships", label: "Tech Internships", emoji: "💼", colorClass: "text-cat-internships", bgClass: "bg-cat-internships" },
];

export const resources: Resource[] = [
  // Mental Health
  {
    name: "Antioch Community Therapy Services (ACTS)",
    description: "Free and confidential telehealth counseling for anxiety, depression, illness, loss, and stress.",
    phone: "(310) 862-1515",
    url: "https://actsla.org",
    category: "mental-health",
    highlight: true,
  },
  {
    name: "WILA",
    description: "Non-profit affordable therapy clinic with sliding fee scale. No insurance needed.",
    phone: "(424) 371-5191",
    category: "mental-health",
  },
  {
    name: "Open Paths Counseling Center",
    description: "Nonprofit serving LA residents unable to access counseling due to financial, geographic or cultural barriers. Sliding scale fees.",
    phone: "(310) 258-9677",
    url: "https://openpaths.org",
    category: "mental-health",
  },
  {
    name: "UCLA Psychology Clinic",
    description: "Individual therapy $30-$150/hr on sliding scale. Group therapy $5-$10 per session.",
    phone: "(310) 825-2305",
    category: "mental-health",
  },
  {
    name: "NAMI Urban LA",
    description: "Mental Health Resource Hub providing support, education, and advocacy.",
    phone: "(323) 294-7814",
    category: "mental-health",
  },
  {
    name: "West Central Family MHS",
    description: "Mental health services, employment support, and welfare-to-work services for adults in LA.",
    phone: "(323) 298-3680",
    category: "mental-health",
  },
  {
    name: "Augustus F. Hawkins Mental Health Center",
    description: "Outpatient mental health services for adults, children, older adults and families. English, Spanish & more.",
    phone: "(310) 668-4271",
    category: "mental-health",
  },
  {
    name: "HeyPeers",
    description: "Peer support platform recognized as high-impact and cost-effective for improving quality of life.",
    url: "https://heypeers.com",
    category: "mental-health",
  },
  {
    name: "NAMI Connection Support Group",
    description: "Free, weekly 90-minute peer support group for people living with mental illness.",
    phone: "(323) 294-7814",
    url: "https://www.nami.org/support-education/support-groups/nami-connection/",
    category: "mental-health",
  },
  {
    name: "California Peer-Run Warm Line (24/7)",
    description: "Non-emergency resource for anyone in California seeking mental and emotional support. Available 24/7.",
    phone: "(855) 845-7415",
    category: "mental-health",
    highlight: true,
  },
  // Medical
  {
    name: "St. John's Community Health Center",
    description: "Medical services for low-income, uninsured and under-insured people. Mental health to pediatric care.",
    phone: "(323) 541-1411",
    category: "medical",
  },
  {
    name: "Clínica Romero",
    description: "Quality, affordable, culturally-sensitive healthcare regardless of ability to pay.",
    phone: "(213) 989-7700",
    url: "https://clinicaromero.com/",
    category: "medical",
  },
  {
    name: "Saban Community Clinics",
    description: "Whole Person Care: medical, emotional and dental. Help with insurance enrollment.",
    phone: "(323) 653-1990",
    url: "https://www.sabancommunityclinic.org/",
    category: "medical",
  },
  {
    name: "Didi Hirsch Metro Center",
    description: "Serves children, teens and families with comprehensive case management services.",
    phone: "(888) 807-7250",
    category: "medical",
  },
  {
    name: "Free Clinics in LA",
    description: "Directory of free clinics across Los Angeles.",
    phone: "(614) 715-3900 Ext. 301402",
    url: "https://www.freeclinics.com/cit/ca-los_angeles",
    category: "medical",
  },
  {
    name: "Complete Care Community Health Center",
    description: "Community health center providing comprehensive care.",
    phone: "(323) 266-6700",
    address: "2928 East Cesar Chavez Ave, LA 90033",
    category: "medical",
  },
  {
    name: "MLK Jr. Outpatient Center",
    description: "Full-service outpatient medical center.",
    phone: "(424) 338-1000",
    address: "1670 East 120th Street, LA 90059",
    category: "medical",
  },
  {
    name: "Hollywood Sunset Free Clinic",
    description: "Free medical clinic in Hollywood area.",
    phone: "(323) 660-7959",
    address: "3324 W Sunset Blvd, LA 90026",
    category: "medical",
  },
  {
    name: "South Central Family Health Center",
    description: "Community health services in South Central LA.",
    phone: "(323) 908-4200",
    address: "1109 E. Vernon Avenue, LA 90011",
    category: "medical",
  },
  // Transportation
  {
    name: "Metro LIFE Program",
    description: "Low-income riders get discounts on passes or 20 free rides on Metro and participating agencies.",
    phone: "(866) 827-8646",
    url: "https://www.metro.net/riding/life/",
    category: "transportation",
    highlight: true,
  },
  {
    name: "Metro BikeShare",
    description: "24/7 bike access for local trips and transit connections. Grab from any station, ride, return.",
    phone: "(323) 466-3876",
    url: "https://bikeshare.metro.net/",
    category: "transportation",
  },
  {
    name: "GoPass for Students",
    description: "FREE rides on Metro buses and trains for K-12, adult school & community college students.",
    phone: "(213) 443-1300",
    url: "http://metro.net/riding/fares/gopass/",
    category: "transportation",
    highlight: true,
  },
  {
    name: "Metro Vanpool",
    description: "Share rides with commuters who have similar schedules and destinations.",
    phone: "(213) 922-7003",
    category: "transportation",
  },
  {
    name: "Metro Micro",
    description: "On-demand rideshare in eight zones across LA County. First/last-mile connections.",
    phone: "(323) 466-4876",
    url: "https://www.metro.net/micro/",
    category: "transportation",
  },
  // Housing
  {
    name: "LA Family Housing",
    description: "Serves those experiencing homelessness or needing connection to services.",
    phone: "(818) 255-2766",
    url: "https://lafh.org/connect-to-services",
    category: "housing",
  },
  {
    name: "Section 8 Housing",
    description: "See if you qualify and apply for Section 8 housing vouchers.",
    phone: "(800) 955-2232",
    url: "https://hud.gov/topics/housing_choice_voucher_program_section_8",
    category: "housing",
  },
  {
    name: "First Place for Youth",
    description: "Affordable housing and resources for foster youth who have exited foster care.",
    phone: "(510) 272-0979",
    url: "https://firstplaceforyouth.org/",
    category: "housing",
  },
  {
    name: "My Friend's Place",
    description: "Comprehensive services for 1,000 homeless youth ages 12-25 and their children, in Hollywood.",
    phone: "(323) 908-0011",
    url: "https://myfriendsplace.org/",
    category: "housing",
    highlight: true,
  },
  {
    name: "Butterfly Haven",
    description: "Shared housing, supportive services and 24-hour childcare for housing-insecure mothers.",
    phone: "(818) 264-2222",
    category: "housing",
  },
  {
    name: "Hillsides Youth Moving On",
    description: "Temporary housing, drop-in center, and workforce development for youth ages 16-25.",
    phone: "(626) 765-6010",
    category: "housing",
  },
  {
    name: "Find a Shelter",
    description: "Interactive map to find shelters near you via LAHSA.",
    url: "https://lahsa.org/portal/apps/find-a-shelter/map",
    category: "housing",
  },
  // Food
  {
    name: "CalFresh (SNAP)",
    description: "Monthly food benefits for low-income individuals and families.",
    phone: "(877) 847-3663",
    url: "https://www.cdss.ca.gov/calfresh",
    category: "food",
    highlight: true,
  },
  {
    name: "LA Regional Food Bank",
    description: "Free groceries — use their pantry locator to find resources near you.",
    phone: "(323) 234-3030",
    url: "https://www.lafoodbank.org/find-food/pantry-locator/",
    category: "food",
  },
  {
    name: "Salvation Army (Glendale/Burbank)",
    description: "Emergency food, holiday assistance, nutrition programs, recreation, and shelter.",
    url: "https://glendale-ca.salvationarmy.org/",
    category: "food",
  },
  {
    name: "Hunger Action Los Angeles",
    description: "CalFresh enrollment, food delivery, and Market Match to end hunger in LA County.",
    phone: "(213) 361-2075",
    url: "https://www.hungeractionla.org/",
    category: "food",
  },
  {
    name: "Karsh Family Social Service Center",
    description: "Emergency food assistance — dry goods, canned goods, and produce.",
    phone: "(213) 401-4651",
    url: "https://karshcenter.org/",
    category: "food",
  },
  // Childcare
  {
    name: "St. Anne's",
    description: "Supportive housing, early childhood education, mental health and family services.",
    phone: "(213) 381-2931",
    url: "https://stannes.org/",
    category: "childcare",
  },
  {
    name: "Venice Family Clinic: Child First Early Head Start",
    description: "Early Head Start program for families with young children.",
    phone: "(310) 392-8636",
    url: "https://venicefamilyclinic.org/programs-and-services/community-wellness/cfehs/",
    category: "childcare",
  },
  {
    name: "Plaza Community Services",
    description: "Childcare, domestic violence services, family life education, youth services in LA.",
    phone: "(323) 267-9749",
    url: "http://www.plazacs.org/",
    category: "childcare",
  },
  // Technology
  {
    name: "Delete the Divide",
    description: "Digital equity: low-cost internet, digital skills workshops, free laptops, and employment.",
    url: "https://www.deletethedivide.org/",
    category: "technology",
    highlight: true,
  },
  {
    name: "LAPL Tech2Go",
    description: "Borrow a Chromebook + internet hotspot for long-term use with your library card.",
    phone: "(213) 228-7160",
    url: "https://www.lapl.org/tech2go",
    category: "technology",
    highlight: true,
  },
  {
    name: "LAPL TechKiosk",
    description: "Free laptops and tablets at the library — self-service, up to 2 hours, with Wi-Fi.",
    url: "https://lapl.org/tech2go/techkiosk",
    category: "technology",
  },
  // Legal
  {
    name: "Alliance for Children's Rights",
    description: "Free legal services for caregivers, adoptive parents, children and teens in LA.",
    phone: "(213) 368-6010",
    url: "https://allianceforchildrensrights.org/",
    category: "legal",
  },
  {
    name: "CASA of Los Angeles",
    description: "Court advocates for children/youth ages 0-21 in foster care or juvenile justice systems.",
    phone: "(323) 859-2888",
    url: "https://casala.org/refer-a-child/",
    category: "legal",
  },
  {
    name: "Eviction Defense Network",
    description: "Help with evictions and tenant rights.",
    phone: "(213) 385-8112",
    url: "https://edn.la/step-by-step/",
    category: "legal",
  },
  {
    name: "Public Counsel",
    description: "Pro bono legal help: children/youth, economic justice, education, housing, immigration, veterans.",
    phone: "(213) 385-8112",
    category: "legal",
  },
  {
    name: "Neighborhood Legal Services of LA County",
    description: "Combats effects of poverty through representation, workshops, and litigation.",
    phone: "(800) 433-6251",
    category: "legal",
  },
  // Immigration
  {
    name: "Immigration Advocates Network",
    description: "Directory of free or low-cost immigration legal services by state, county, or facility.",
    url: "https://www.immigrationadvocates.org/",
    category: "immigration",
  },
  {
    name: "CHIRLA",
    description: "Naturalization, DACA, AB60, fee waivers, and complex legal assistance.",
    phone: "(213) 353-1333",
    url: "https://www.chirla.org/",
    category: "immigration",
  },
  {
    name: "Immigrant Legal Resource Center (ILRC)",
    description: "Education, community resources, and tools for immigrants and organizations.",
    url: "https://www.ilrc.org/",
    category: "immigration",
  },
  {
    name: "LA County Bar Immigration Project",
    description: "DACA/DAPA, family petitions, naturalizations, translations, visa packets and more.",
    phone: "(213) 627-2727",
    url: "https://lacba.org/",
    category: "immigration",
  },
  {
    name: "Immigrant Defenders Law Center",
    description: "Social justice law firm defending immigrant communities against system injustices.",
    phone: "(213) 634-0999",
    category: "immigration",
  },
  // General
  {
    name: "211 LA County",
    description: "Hub for all types of health, human, and social services in Los Angeles County.",
    phone: "(800) 339-6993",
    category: "general",
    highlight: true,
  },
  {
    name: "One Degree",
    description: "Find what you need from over 26,000 free, up-to-date community resources.",
    phone: "(844) 833-1334",
    category: "general",
  },
  {
    name: "LA LGBT Crisis Support Resources",
    description: "Crisis support resources including specific services for TGI/ENBY+ communities.",
    phone: "(323) 860-3799",
    url: "https://community.lalgbtcenter.org/tgi-enby-resource-index/crisis-support/",
    category: "general",
  },
  // Tech Internships — free programs + paid corporate opportunities in LA
  {
    name: "LA-Tech.org — 1,000 Intern Initiative",
    description: "Paid tech internships for LA youth from underrepresented communities. No experience required — they place you with top LA tech companies.",
    url: "https://la-tech.org/",
    category: "internships",
    highlight: true,
  },
  {
    name: "LA Tech Rising Internship",
    description: "Paid internship for ages 18–24 with workshops on technical skills, communication, and self-marketing. Great entry point into LA tech.",
    url: "https://la-tech.org/la-tech-rising-internship",
    category: "internships",
    highlight: true,
  },
  {
    name: "Snap Inc. Internships",
    description: "Paid summer internships in Santa Monica for software engineering, ML, design, and research. Open to college & PhD students.",
    url: "https://careers.snap.com/jobs?team=Internships",
    category: "internships",
  },
  {
    name: "Riot Games Internships",
    description: "Paid summer internships at LA-based Riot (League of Legends, Valorant, TFT) in engineering, art, design, and game production.",
    url: "https://www.riotgames.com/en/work-with-us/jobs?craft=Internship",
    category: "internships",
  },
  {
    name: "SpaceX Internships",
    description: "Year-round paid internships in Hawthorne, CA for software, hardware, manufacturing and operations. Open to students pursuing a degree.",
    url: "https://www.spacex.com/careers/students/",
    category: "internships",
  },
  {
    name: "Google in LA — STEP & Software Engineering Interns",
    description: "Paid internships at Google's Playa Vista & Venice offices. STEP is for 1st/2nd-year students; SWE intern roles for upper-class & grad students.",
    url: "https://www.google.com/about/careers/applications/jobs/results/?employment_type=INTERN&location=Los%20Angeles%2C%20CA%2C%20USA",
    category: "internships",
  },
  {
    name: "Hack the Hood",
    description: "Free tech bootcamp + paid internships for low-income youth of color (ages 16–25). Build websites for real small businesses.",
    url: "https://www.hackthehood.org/",
    category: "internships",
    highlight: true,
  },
  {
    name: "Code2College",
    description: "Free program preparing underrepresented high schoolers for paid software engineering internships at top companies before college.",
    url: "https://www.code2college.org/",
    category: "internships",
  },
  {
    name: "Genesys Works LA",
    description: "Paid year-long IT/tech internships for high school seniors from under-resourced communities. Includes training + job placement.",
    phone: "(213) 631-2700",
    url: "https://genesysworks.org/los-angeles/",
    category: "internships",
    highlight: true,
  },
  {
    name: "Built In LA — Internship Board",
    description: "Live job board of paid tech internships at LA startups & companies (Snap, GoodRx, ServiceTitan, Headspace, and more).",
    url: "https://www.builtinla.com/jobs/internships",
    category: "internships",
  },
  {
    name: "HustLA (LA Mayor's Youth Jobs)",
    description: "City-funded paid internships for LA youth ages 14–24, including tech & digital media tracks at LA companies and nonprofits.",
    url: "https://www.lamayor.org/HustLA",
    category: "internships",
  },
  {
    name: "MLT (Management Leadership for Tomorrow)",
    description: "Free career coaching + pipeline to paid internships at top tech firms for Black, Latine, and Native American college students.",
    url: "https://mlt.org/career-prep/",
    category: "internships",
  },
];
