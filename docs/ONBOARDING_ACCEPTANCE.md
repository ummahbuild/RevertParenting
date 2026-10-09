# Interactive Family Onboarding — Acceptance and Test Matrix

## Currently scaffolded
Mobile: home -> onboarding -> plan; Web: landing -> /learn -> plan preview. Both are anonymous and in-memory; they do not store personal data.

## Requirements for production
- Step 1: choose optional parent confidence (new/learning/confident).
- Step 2: choose child age band, with skip and multiple-child support.
- Step 3: choose a goal: foundations, salah, Qur'an, family conversations, character.
- Step 4: select available time: 5, 10, 20 minutes.
- Step 5: review recommended parent primer, child explanation and offline family activity.
- Step 6: optionally create account and persist household plan after informed consent.

## Accessibility
Radio selections expose selected state; minimum 44x44 target; screen-reader labels; RTL layout; keyboard access on web; sufficient contrast and reduced motion.

## Security
Never persist sensitive family context before explicit account consent. Age band preferred over birth date. Guardians manage child profiles. No public child profiles or unrestricted child AI chat.

## Acceptance tests
- No account needed for preview.
- All six age bands supported.
- Age 0–2 uses caregiver modeling, not child screen engagement.
- Teens receive listening-first, autonomy-respecting guidance.
- Unsupported goal falls back safely.
- Reloading preview does not expose family data.
- Reviewed source citations are mandatory before production lesson publication.

## Known gaps
Mobile and web currently have separate lightweight preview data. Shared package wiring, persistence, actual auth, approved religious curriculum and full automated E2E tests remain pending.
