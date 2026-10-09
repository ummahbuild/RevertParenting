# Family Activity Library — Implementation Acceptance

## Current prototype
A web activity explorer at /activities and a shared curriculum activity data module. Web currently duplicates the preview dataset; integration into the shared package remains an issue.

## Requirements
Age filtering, caregiver role, estimated duration, step-by-step instructions, audio and printable alternatives, review status, source detail, completion, private reflection, offline mode.

## Safety
Draft content must remain visibly labeled. No faith scores, public child rankings, unmoderated messaging, or pressure to participate. Ages 0–2 require caregiver-led interaction without independent screen use.

## Acceptance tests
Age filtering returns only supported activities; toggles expose expanded state; keyboard navigation works; source references display when approved; unpublished activities cannot be exposed as religious rulings; no child data collected in anonymous preview.
