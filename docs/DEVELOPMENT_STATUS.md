# Implementation Status — 2026-10-09

## Implemented scaffolding
- pnpm/Turborepo workspace.
- Next.js landing page, responsive stylesheet and web manifest.
- Expo Router mobile welcome and illustrative family lesson.
- Initial Supabase migration with RLS read policies and intentionally no client write policies.
- Shared curriculum types and basic selection functions.
- GitHub CI workflow (not verified as passing).
- Product, UX, religious review, growth, builder recruitment and specialist skills documentation.

## Not yet implemented
Authentication, household onboarding, Supabase client write workflows, production lesson player, full 30-screen UI, reviewed 30-day curriculum, scholarly editorial dashboard, actual AI retrieval, mentors, localization, payment, notifications, complete offline PWA and production deployment.

## Known setup work
- Run pnpm install and resolve dependency/version compatibility.
- Add a lockfile and switch CI to frozen lockfile.
- Verify Next.js and Expo builds, lint/typecheck and test runner.
- Add actual PWA icon assets and service worker/offline strategy.
- Implement guardian-authorized write policies and tests before any production data entry.
- Review SECURITY DEFINER function and all policies with Supabase security specialist.
- Obtain religious and safeguarding human approvals before publishing lessons.

## Security boundary
Current RLS policies intentionally deny client writes; this is safer than prematurely enabling unreviewed household mutations. Avoid deploying without production-grade auth, consent, data deletion, and security testing.
