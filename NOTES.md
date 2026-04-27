# Notatki techniczne

## Co zostało zrobione

- Jedna kolekcja `pages` z `loader: glob()` (Astro v6 Content Layer API) i Zod discriminated union po polu `type`
- End-to-end type safety: `z.infer<>` → `type Props` w komponentach, zero `any`
- Exhaustiveness check w `[slug].astro` — nowy typ sekcji bez case = błąd TS na buildzie
- Dodanie strony = tylko nowy plik `.md`, zero zmian w `src/`
- Komponenty: czysta prezentacja, zero logiki, scoped CSS z CSS custom properties
- BaseLayout centralizuje reset, Google Fonts i CSS variables
- README pisany językiem redaktora (bez terminologii technicznej)

## Co można ulepszyć

- **Draft-statusy**: pole `meta.draft: boolean` + filtr w `getStaticPaths`
- **Podkategorie**: `src/content/pages/pl/`, `pages/en/` → i18n bez CMS
- **Podgląd diffów**: integracja z Vercel Preview per branch
- **100+ stron**: paginacja w `getStaticPaths`, podział na podkolekcje, lazy-load obrazów
- **4 redaktorów równolegle**: git-flow z feature-branch per strona + merge request review
- **Blokada równoległych edycji**: `meta.lockedBy` w frontmatter jako konwencja
- **Headless CMS**: Decap/Tina dla pól bogatych (rich text), reszta zostaje w YAML
