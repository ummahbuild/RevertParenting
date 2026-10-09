-- RevertParenting initial relational schema. Apply only after security review.
create extension if not exists pgcrypto;
create table if not exists public.households(id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now());
create table if not exists public.household_members(id uuid primary key default gen_random_uuid(), household_id uuid not null references public.households(id) on delete cascade, user_id uuid not null references auth.users(id) on delete cascade, role text not null check(role in ('guardian','adult')), unique(household_id,user_id));
create table if not exists public.child_profiles(id uuid primary key default gen_random_uuid(), household_id uuid not null references public.households(id) on delete cascade, nickname text, age_band text not null check(age_band in ('0-2','3-5','6-8','9-12','13-15','16-18')), created_at timestamptz not null default now());
create table if not exists public.lessons(id uuid primary key default gen_random_uuid(), slug text not null unique, title text not null, review_status text not null default 'draft' check(review_status in ('draft','scholar_review','safety_review','approved','published')), version int not null default 1);
create table if not exists public.lesson_progress(id uuid primary key default gen_random_uuid(), household_id uuid not null references public.households(id) on delete cascade, user_id uuid not null references auth.users(id) on delete cascade, lesson_id uuid not null references public.lessons(id), completed_at timestamptz, unique(user_id,lesson_id));
create table if not exists public.evidence_sources(id uuid primary key default gen_random_uuid(), source_type text not null check(source_type in ('quran','hadith','scholarly')), reference text not null, review_status text not null default 'draft', metadata jsonb not null default '{}'::jsonb);
alter table public.households enable row level security;
alter table public.household_members enable row level security;
alter table public.child_profiles enable row level security;
alter table public.lessons enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.evidence_sources enable row level security;
-- SECURITY: avoid circular RLS recursion with a SECURITY DEFINER helper; constrain search_path.
create or replace function public.is_household_member(p_household uuid) returns boolean language sql stable security definer set search_path = '' as $$select exists(select 1 from public.household_members m where m.household_id=p_household and m.user_id=(select auth.uid()))$$;
revoke all on function public.is_household_member(uuid) from public;
grant execute on function public.is_household_member(uuid) to authenticated;
create policy households_read on public.households for select to authenticated using(public.is_household_member(id));
create policy members_read on public.household_members for select to authenticated using(public.is_household_member(household_id));
create policy children_read on public.child_profiles for select to authenticated using(public.is_household_member(household_id));
create policy progress_read on public.lesson_progress for select to authenticated using(public.is_household_member(household_id) and user_id=(select auth.uid()));
create policy lessons_public_approved on public.lessons for select to anon,authenticated using(review_status='published');
create policy sources_public_approved on public.evidence_sources for select to anon,authenticated using(review_status='approved');
-- No client INSERT/UPDATE/DELETE policies until guardian authorization and review workflows are implemented.
