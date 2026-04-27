# Notatki techniczne

## Co zostało zrobione

- Jedna kolekcja `pages` z `loader: glob()` (Astro v6 Content Layer API)
- Zod discriminated union po polu `type` — osobny schemat per sekcja
- End-to-end type safety przez `z.infer<>`, zero `any`
- Exhaustiveness check w `[slug].astro` — nowy typ bez `case` = błąd TS na buildzie
- Dodanie strony = tylko nowy plik `.md`, zero zmian w `src/`
- README pisany językiem redaktora, bez terminologii technicznej

## Co zrobiłbym inaczej przy 100 stronach i 4 osobach

- **Draft-statusy**: `meta.draft: boolean` + filtr w `getStaticPaths`
- **i18n**: podkatalogi `pages/pl/`, `pages/en/` bez CMS
- **Konflikty edycji**: git-flow z feature-branch per strona + merge request
- **Podgląd zmian**: Vercel Preview per branch dla redaktorów
