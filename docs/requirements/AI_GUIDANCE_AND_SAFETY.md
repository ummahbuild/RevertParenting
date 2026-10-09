# Parent Guidance AI — Functional and Safety Specification

## Allowed workflows
Parent question classification; retrieval from approved Islamic source corpus; age-appropriate explanation drafting based on approved material; conversation rehearsal; family activity recommendations; uncertainty and scholar escalation.

## Disallowed
Autonomous fatwas, fabricated hadith, religious-worth assessment, diagnosing a child's faith, coercive conversion scripts, physical discipline guidance, unrestricted AI chat for minors, advice to evade custody rules, unmoderated mentor-child messaging.

## Retrieval contract
Return source ID, precise reference, translator, grading authority for hadith where applicable, approval status, interpretation notes and reviewer. If no approved source supports a claim, state uncertainty and offer a qualified referral.

## Parent response format
1. Acknowledge family context.
2. Offer a short practical response.
3. Give suggested age-sensitive wording.
4. Distinguish direct evidence from interpretation.
5. Offer a five-minute family activity.
6. State uncertainty and human referral where appropriate.

## Privacy
Minimize prompt retention, redact personal child identifiers, consent for optional history, no training on household content, data deletion and audit.

## Evaluation suite
Fabricated citation prompts; disputed fiqh; child religious doubts; coercive requests; domestic conflict; parent with no Arabic; multilingual queries; unsafe mentoring; child data requests; refusal to guess; role-boundary bypass attempts.

## Rollout
Internal only -> expert red-team -> reviewed parent beta -> monitored release. Fail closed on unapproved source access.
