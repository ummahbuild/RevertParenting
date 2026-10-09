# Engineering and Implementation Architecture

## Target monorepo
apps/web (Next.js landing/PWA); apps/mobile (Expo); apps/admin (editorial); packages/ui, auth, database, curriculum, sources, family, ai, analytics, i18n; supabase/migrations, seed, tests; content/lessons.

## Stack
pnpm + Turborepo + TypeScript; Next.js; Expo Router; Supabase Auth/Postgres/Storage; Zod validation; Playwright web E2E; Jest/Vitest unit tests; RLS tests.

## Data model
users; households; household_members; parent_profiles; child_profiles (age band, pseudonym); guardian_permissions; pathways; lessons; lesson_versions; learning_objectives; parent_primers; child_variants; activities; evidence_sources; scholarly_positions; content_reviews; review_events; family_sessions; progress; private_reflections; scenario_guides; mentor_profiles; safety_incidents; deletion_requests.

## Authorization
Every household-owned row enforces household RLS; guardian-only controls for children; mentors receive only explicit scoped access; editorial role separated from guardian and scholar reviewer roles. Audit sensitive access. No child direct messages.

## AI
Parent-only question -> safety classification -> retrieval from approved source corpus -> answer with citations, uncertainty and scholar escalation -> logging with minimal retention. Never infer legal or theological status of family members.

## CI gates
Typecheck, lint, unit tests, schema migration validation, RLS tests, accessibility checks, source reference validation, content approval validation, E2E smoke tests.

## First vertical slice
Anonymous explore -> family onboarding -> first parent primer -> age-specific child explanation -> family activity -> reflection -> next recommended lesson. Build with seeded approved-placeholder content clearly marked as unreviewed in nonproduction environments.

## Milestones
M1 repository foundation and schema; M2 content review + paired lesson engine; M3 safe parent guidance; M4 accessibility/offline/beta and privacy audit.
