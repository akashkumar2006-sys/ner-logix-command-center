/**
 * Prototype demo data for NER-LOGIX Step 1.
 * All values are static placeholders. Later stages replace these exports with
 * live data sources (telemetry, incident feed, routing engine, weather API)
 * without changing the consuming components' props shape.
 */

export type RiskLevel = "safe" | "moderate" | "high" | "blocked";

export const RISK_META: Record<RiskLevel, { label: string; token: string }> = {
  safe: { label: "Safe", token: "safe" },
  moderate: { label: "Moderate Risk", token: "moderate" },
  high: { label: "High Risk", token: "high" },
  blocked: { label: "Blocked", token: "blocked" },
};

export interface District {
  id: string;
  name: string;
  state: "Assam" | "Meghalaya";
  x: number; // % position on the schematic map canvas
  y: number;
  risk: RiskLevel;
}

export const DISTRICTS: District[] = [
  { id: "kamrup-m", name: "Kamrup Metropolitan", state: "Assam", x: 26, y: 42, risk: "moderate" },
  { id: "sonitpur", name: "Sonitpur", state: "Assam", x: 44, y: 27, risk: "safe" },
  { id: "jorhat", name: "Jorhat", state: "Assam", x: 63, y: 31, risk: "safe" },
  { id: "dibrugarh", name: "Dibrugarh", state: "Assam", x: 77, y: 21, risk: "moderate" },
  { id: "tinsukia", name: "Tinsukia", state: "Assam", x: 87, y: 15, risk: "high" },
  { id: "cachar", name: "Cachar", state: "Assam", x: 58, y: 78, risk: "high" },
  { id: "ri-bhoi", name: "Ri-Bhoi", state: "Meghalaya", x: 28, y: 56, risk: "moderate" },
  { id: "e-khasi", name: "East Khasi Hills", state: "Meghalaya", x: 30, y: 68, risk: "high" },
  { id: "w-khasi", name: "West Khasi Hills", state: "Meghalaya", x: 19, y: 65, risk: "moderate" },
  { id: "e-jaintia", name: "East Jaintia Hills", state: "Meghalaya", x: 42, y: 70, risk: "blocked" },
  { id: "w-garo", name: "West Garo Hills", state: "Meghalaya", x: 12, y: 58, risk: "safe" },
  { id: "sw-garo", name: "South West Garo Hills", state: "Meghalaya", x: 12, y: 72, risk: "moderate" },
];

export interface MapVehicle {
  id: string;
  kind: "logistics" | "medical";
  label: string;
  x: number;
  y: number;
}

export const MAP_VEHICLES: MapVehicle[] = [
  { id: "LG-114", kind: "logistics", label: "LG-114", x: 70, y: 26 },
  { id: "LG-208", kind: "logistics", label: "LG-208", x: 52, y: 33 },
  { id: "LG-331", kind: "logistics", label: "LG-331", x: 34, y: 39 },
  { id: "MD-051", kind: "medical", label: "MD-051", x: 29, y: 60 },
  { id: "MD-077", kind: "medical", label: "MD-077", x: 55, y: 72 },
];

export interface MapIncident {
  id: string;
  type: string;
  severity: RiskLevel;
  x: number;
  y: number;
}

export const MAP_INCIDENTS: MapIncident[] = [
  { id: "INC-2291", type: "Landslide", severity: "blocked", x: 41, y: 66 },
  { id: "INC-2288", type: "Flooding", severity: "high", x: 60, y: 75 },
  { id: "INC-2284", type: "Road erosion", severity: "moderate", x: 84, y: 18 },
];

export interface MapRoute {
  id: string;
  from: [number, number];
  to: [number, number];
  via?: [number, number];
  risk: RiskLevel;
}

export const MAP_ROUTES: MapRoute[] = [
  { id: "R-01", from: [77, 21], via: [63, 31], to: [26, 42], risk: "moderate" },
  { id: "R-02", from: [30, 68], via: [28, 56], to: [26, 42], risk: "safe" },
  { id: "R-03", from: [58, 78], via: [42, 70], to: [30, 68], risk: "high" },
  { id: "R-04", from: [87, 15], via: [77, 21], to: [63, 31], risk: "blocked" },
];

export interface Kpi {
  id: string;
  label: string;
  value: string;
  unit?: string;
  delta: string;
  tone: "neutral" | "safe" | "moderate" | "high";
  detail: string;
}

export const KPIS: Kpi[] = [
  { id: "missions", label: "Active Missions", value: "24", delta: "+3 today", tone: "neutral", detail: "18 logistics · 6 medical" },
  { id: "logistics", label: "Logistics Vehicles", value: "63", delta: "47 in transit", tone: "neutral", detail: "Fleet availability 74%" },
  { id: "medical", label: "Medical Vehicles", value: "19", delta: "6 dispatched", tone: "safe", detail: "Response readiness nominal" },
  { id: "incidents", label: "Active Incidents", value: "7", delta: "+2 in 6h", tone: "high", detail: "3 landslide · 2 flood · 2 other" },
  { id: "risk-routes", label: "High-Risk Routes", value: "5", delta: "1 blocked", tone: "moderate", detail: "NH-6 corridor degraded" },
  { id: "accessibility", label: "Network Accessibility", value: "82", unit: "%", delta: "-4% vs 24h", tone: "moderate", detail: "12 districts monitored" },
];

export interface Mission {
  code: string;
  type: "Logistics" | "Medical";
  descriptorLabel: string;
  descriptor: string;
  origin: string;
  destination: string;
  status: string;
  progress: number;
  eta: string;
  riskLabel: string;
  risk: RiskLevel;
  priority?: string;
}

export const MISSIONS: Mission[] = [
  {
    code: "MISSION 001",
    type: "Logistics",
    descriptorLabel: "Cargo",
    descriptor: "Essential Supplies",
    origin: "Dibrugarh",
    destination: "Guwahati",
    status: "En Route",
    progress: 58,
    eta: "04h 20m",
    riskLabel: "Moderate",
    risk: "moderate",
  },
  {
    code: "MISSION 002",
    type: "Medical",
    descriptorLabel: "Service",
    descriptor: "Emergency Medical Transfer",
    origin: "Shillong",
    destination: "Guwahati",
    status: "En Route",
    progress: 41,
    eta: "01h 05m",
    riskLabel: "Emergency",
    risk: "high",
    priority: "Emergency",
  },
];

export interface AlertItem {
  id: string;
  title: string;
  detail: string;
  severity: RiskLevel;
  location: string;
  time: string;
}

export const ALERTS: AlertItem[] = [
  {
    id: "ALR-4412",
    title: "High-risk road segment detected",
    detail: "NH-6 segment near Sonapur flagged for slope instability.",
    severity: "high",
    location: "East Jaintia Hills",
    time: "06 min ago",
  },
  {
    id: "ALR-4409",
    title: "Weather deterioration",
    detail: "Heavy rainfall band advancing over Khasi Hills corridor.",
    severity: "moderate",
    location: "East Khasi Hills",
    time: "23 min ago",
  },
  {
    id: "ALR-4405",
    title: "New incident reported",
    detail: "Landslide debris reported blocking single-lane stretch.",
    severity: "blocked",
    location: "Ri-Bhoi",
    time: "51 min ago",
  },
  {
    id: "ALR-4398",
    title: "Medical route priority active",
    detail: "Corridor clearance granted for MISSION 002 transfer.",
    severity: "safe",
    location: "Shillong — Guwahati",
    time: "1h 12m ago",
  },
];
