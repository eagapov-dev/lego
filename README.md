# Przewodnik redaktora

Ten dokument jest dla Ciebie — osoby, która pisze i edytuje treści na stronie. Nie musisz znać się na programowaniu.

---

## Jak działa ten serwis?

Serwis składa się z **stron**. Każda strona to plik tekstowy w folderze `src/content/pages/`.

Każda strona jest zbudowana z **bloków** ułożonych jeden pod drugim w kolejności, którą sam ustalasz. Dostępne bloki to:

- `hero` — duży baner na górze strony (tytuł, opis, przycisk, zdjęcie)
- `steps` — sekcja kroków „jak to działa" (lista punktów z numerami)
- `cta` — wezwanie do działania (nagłówek + przycisk + opcjonalna notatka)

Bloki możesz układać w dowolnej kolejności i powtarzać (np. dwa różne `cta` na jednej stronie).

---

## Jak uruchomić podgląd lokalnie?

```bash
npm install
npm run dev
```

Otwórz przeglądarkę pod adresem `http://localhost:4321`. Zmiany w plikach widoczne są natychmiast.

---

## Jak dodać nową stronę?

1. Utwórz nowy plik w folderze `src/content/pages/`, np. `o-nas.md`
2. Wypełnij go według wzoru poniżej
3. Uruchom podgląd — strona będzie dostępna pod adresem `/o-nas`

**To wszystko. Żadnych innych zmian nie trzeba robić.**

### Wzór pliku strony

```yaml
---
meta:
  title: "Tytuł strony (widoczny w zakładce przeglądarki)"
  description: "Krótki opis strony (widoczny w Google)"
  slug: "adres-strony"

sections:
  - type: hero
    title: "Główny nagłówek banera"
    subtitle: "Dłuższy opis pod nagłówkiem"
    badge: "Opcjonalna etykieta, np. Nowość 2025"
    cta:
      label: "Tekst przycisku"
      href: "#link"
    image: "/images/nazwa-zdjecia.jpg"
    imageAlt: "Opis zdjęcia dla osób niedowidzących"

  - type: steps
    label: "Mały tekst nad tytułem (opcjonalnie)"
    title: "Tytuł sekcji kroków"
    subtitle: "Opis pod tytułem (opcjonalnie)"
    items:
      - number: "01"
        title: "Tytuł kroku"
        description: "Opis kroku — co trzeba zrobić."
      - number: "02"
        title: "Tytuł kroku"
        description: "Opis kroku."
      - number: "03"
        title: "Tytuł kroku"
        description: "Opis kroku."

  - type: cta
    heading: "Nagłówek wezwania do działania"
    button:
      label: "Tekst przycisku"
      href: "#link"
    note: "Opcjonalna mała notatka pod przyciskiem"
---
```

---

## Dostępne bloki — szczegóły

### Blok `hero` — baner główny

Duży baner zajmujący całą szerokość strony. Po lewej treść, po prawej zdjęcie.

| Pole           | Wymagane | Opis |
|----------------|----------|------|
| `title`        | tak      | Główny nagłówek |
| `subtitle`     | tak      | Opis pod nagłówkiem |
| `badge`        | nie      | Mała etykieta nad tytułem (np. „Promocja") |
| `cta.label`    | tak      | Tekst przycisku |
| `cta.href`     | tak      | Adres, pod który prowadzi przycisk |
| `image`        | tak      | Ścieżka do zdjęcia, np. `/images/baner.jpg` |
| `imageAlt`     | tak      | Opis zdjęcia (ważny dla SEO i dostępności) |

**Przykład:**
```yaml
- type: hero
  title: "Nowoczesna strona dla Twojej firmy"
  subtitle: "Treść w Twoich rękach — bez panelu CMS, bez szkoleń."
  badge: "Nowość 2025"
  cta:
    label: "Skontaktuj się"
    href: "#kontakt"
  image: "/images/hero.jpg"
  imageAlt: "Widok strony na laptopie"
```

---

### Blok `steps` — kroki / instrukcja

Sekcja prezentująca kolejne kroki. Minimum 3, maksimum 6 kroków.

| Pole                    | Wymagane | Opis |
|-------------------------|----------|------|
| `title`                 | tak      | Tytuł sekcji |
| `subtitle`              | nie      | Opis pod tytułem |
| `label`                 | nie      | Mały tekst nad tytułem |
| `items`                 | tak      | Lista kroków (min. 3, maks. 6) |
| `items[].number`        | tak      | Numer lub symbol, np. `"01"` albo `"✓"` |
| `items[].title`         | tak      | Tytuł kroku |
| `items[].description`   | tak      | Opis kroku |

**Przykład:**
```yaml
- type: steps
  label: "Jak to działa?"
  title: "Trzy proste kroki"
  items:
    - number: "01"
      title: "Wypełnij brief"
      description: "Opisz projekt w kilku zdaniach — oddzwaniamy w ciągu dnia."
    - number: "02"
      title: "Realizacja"
      description: "Iterujemy co tydzień, na bieżąco zbieramy feedback."
    - number: "03"
      title: "Wdrożenie"
      description: "Publikujemy i przekazujemy dokumentację redakcyjną."
```

---

### Blok `cta` — wezwanie do działania

Zwięzła sekcja z nagłówkiem i przyciskiem. Możesz użyć go kilka razy na tej samej stronie z różnymi treściami.

| Pole            | Wymagane | Opis |
|-----------------|----------|------|
| `heading`       | tak      | Nagłówek sekcji |
| `button.label`  | tak      | Tekst przycisku |
| `button.href`   | tak      | Adres przycisku |
| `note`          | nie      | Mała notatka pod przyciskiem |

**Przykład:**
```yaml
- type: cta
  heading: "Gotowy, żeby zacząć?"
  button:
    label: "Skontaktuj się"
    href: "#kontakt"
  note: "Bezpłatna konsultacja · Wycena w 24h"
```

---

## Jak zmienić kolejność bloków?

Przesuń blok wyżej lub niżej w pliku — kolejność w pliku = kolejność na stronie.

---

## Jak dodać lub zmienić zdjęcie?

1. Umieść plik zdjęcia w folderze `public/images/`
2. W pliku strony wpisz ścieżkę: `/images/nazwa-pliku.jpg`

Obsługiwane formaty: `.jpg`, `.jpeg`, `.png`, `.webp`

---

## Co zrobić, gdy serwis nie działa po zmianach?

Uruchom `npm run build` w terminalu. Jeśli coś jest nie tak, zobaczysz komunikat z:

- **nazwą pliku** — w którym pliku jest błąd
- **nazwą pola** — które pole wymaga poprawy
- **opisem błędu** — co konkretnie jest nie tak

Najczęstsze przyczyny:
- brakujące wymagane pole (np. brak `title` w bloku `hero`)
- literówka w nazwie bloku (np. `heroe` zamiast `hero`)
- liczba kroków poniżej 3 lub powyżej 6 w bloku `steps`
