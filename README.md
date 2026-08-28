# NER-LOGIX Command Center

Build Step 1 of NER-LOGIX, an AI-powered logistics and accessibility intelligence platform for India's North Eastern Region.

IMPORTANT: This is ONLY the UI FOUNDATION AND COMMAND CENTER DASHBOARD.

Do NOT implement backend functionality, authentication, real-time APIs, AI image analysis, route optimization, weather APIs, database integration, or incident-processing logic yet. We will add these in later stages.

PROJECT PURPOSE

NER-LOGIX will eventually monitor logistics and medical transportation across Assam and Meghalaya, detect incidents such as landslides/floods, analyze uploaded incident images using AI, evaluate their effect on active routes, and dynamically recommend alternate routes.

For this step, create only the professional application shell and Command Center dashboard.

GEOGRAPHIC SCOPE

The prototype will initially cover two states:

ASSAM:

Kamrup Metropolitan

Jorhat

Dibrugarh

Tinsukia

Cachar

Sonitpur

MEGHALAYA:

East Khasi Hills

Ri-Bhoi

West Garo Hills

East Jaintia Hills

West Khasi Hills

South West Garo Hills

APPLICATION SHELL

Create a polished desktop-first responsive web application.

Use:

React

TypeScript

Tailwind CSS

Modern component architecture

Clean reusable components

The visual style should feel like a serious enterprise/government logistics command center, NOT a generic startup landing page.

Use a clean dark/neutral professional interface with strong information hierarchy.

LEFT SIDEBAR

Create navigation items:

Command Center

Live Operations

Transport Missions

Incident Reports

Route Intelligence

Weather Intelligence

Analytics

Settings

Command Center should be active.

The other navigation items should exist visually but can remain non-functional placeholders for now.

TOP HEADER

Include:

NER-LOGIX logo/name

"Regional Logistics & Accessibility Intelligence"

Current operational status indicator

Notification icon

User/profile area

COMMAND CENTER

Create a dashboard containing KPI cards:

Active Missions

Logistics Vehicles

Medical Vehicles

Active Incidents

High-Risk Routes

Network Accessibility

Use believable DEMO values, clearly treated as prototype data.

MAIN GIS PANEL

Create a large central map panel.

For now, use a map-style visualization or appropriate map component with the North-East India region visible.

Show Assam and Meghalaya prominently.

Display sample:

District labels

Logistics vehicle markers

Medical vehicle markers

Incident markers

Route lines

Use a clear legend:

🟢 Safe 🟡 Moderate Risk 🔴 High Risk ⚫ Blocked

The map should be designed so that later we can replace the demo visualization with real interactive GIS/routing functionality without redesigning the dashboard.

ACTIVE OPERATIONS PANEL

Create a panel showing example missions:

MISSION 001 Type: Logistics Cargo: Essential Supplies Origin: Dibrugarh Destination: Guwahati Status: En Route Risk: Moderate

MISSION 002 Type: Medical Service: Emergency Medical Transfer Origin: Shillong Destination: Guwahati Status: En Route Priority: Emergency

ALERTS PANEL

Create sample alerts:

High-risk road segment detected

Weather deterioration

New incident reported

Medical route priority active

These are static demo alerts at this stage.

IMPORTANT FUTURE-READY STRUCTURE

Design the components so future stages can easily add:

Real interactive GIS

Transport mission creation

Medical emergency routing

Incident reporting

Landslide image upload

AI image classification

Incident severity detection

Route impact analysis

Dynamic alternate-route calculation

Weather integration

Vehicle tracking

Real-time alerts

Analytics

Do NOT implement those features now.

UX REQUIREMENTS

Professional

Clean

Responsive

Fast

No unnecessary animations

No excessive gradients

No generic stock imagery

No fake AI chat interface

No landing page

The application should open directly into the Command Center.

Make the dashboard look like a real operational system that could later be used by logistics coordinators and emergency-response teams.

After completing the implementation, ensure the application runs correctly and all current navigation/UI components are functional without broken states.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9878fa7e-02fa-4f42-850f-7e1fd3cbd6b1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
