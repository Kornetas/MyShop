# 🛒 MyShop – Fullstack Monorepo (React + Vite + Node/Mock Backend)

## Opis

**MyShop** to przykładowa aplikacja e-commerce napisana w **React** (z wykorzystaniem Context API, custom hooks, CSS Modules i React Router) oraz mockowanym backendem (np. [json-server](https://github.com/typicode/json-server) lub prosty Express).  
Projekt prezentuje podejście monorepo — zarówno **front-end** jak i **back-end** są zarządzane z jednego repozytorium.

---

## Stack technologiczny

- HTML5, CSS3 (modułowe stylowanie – CSS Modules)
- JavaScript (ES6+)
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) – ultra szybki bundler
- [React Router DOM 6](https://reactrouter.com/)
- Context API, custom hooks (`useLocalStorage`)
- localStorage (persistencja danych)
- ESLint (utrzymanie jakości kodu)
- Mock API (json-server lub Express)
- Node.js (do backendu)

---

## Funkcjonalności

- Przeglądanie i paginacja listy produktów (dane z backendu)
- Szczegóły produktu (Product Details)
- Dodawanie/usuwanie produktów z koszyka (Context, localStorage)
- Dodawanie/usuwanie produktów z ulubionych
- Wyświetlanie koszyka oraz ulubionych
- Breadcrumbs (nawigacja po aplikacji)
- Wybór waluty (Context + localStorage)
- Custom hook `useLocalStorage`
- Resetowanie bazy danych backendu jednym poleceniem
- Zarządzanie wszystkimi zależnościami przez monorepo (npm workspaces)

---

## Struktura katalogów

/
front-end/ # React app (Vite, CSS Modules, src/)
back-end/ # Mock API (np. json-server, db.json)
package.json # główny package, konfiguracja workspaces i skryptów

---

## Instalacja i uruchomienie

1. **Sklonuj repozytorium i zainstaluj zależności w całym monorepo:**

   ```bash
   git clone https://github.com/Kornetas/Myshop.git
   cd myshop
   npm install
   ```

2. **Uruchom aplikację (front + back równocześnie):**

   ```bash
   npm run dev
   ```

   - **Front-end:** [http://localhost:5173](http://localhost:5173)
   - **Back-end (mock API):** [http://localhost:3000](http://localhost:3000)
   - _Uwaga: porty mogą się różnić — sprawdź komunikaty w konsoli po uruchomieniu._

3. **Resetuj bazę danych backendu do stanu początkowego (opcjonalnie):**

   ```bash
   npm run reset
   ```

---

## Przydatne skrypty

- `npm run dev` – uruchamia front-end i back-end równocześnie
- `npm run front-end` – tylko front-end (React)
- `npm run back-end` – tylko backend
- `npm run reset` – resetuje bazę danych backendu do oryginału

---

## Inspiracja

Projekt został zrealizowany na bazie materiałów oraz kodu z kursu ["Zrozumieć React"](https://zrozumiecreact.pl/) autorstwa Kacpra Sokołowskiego (@kaapa-s).  
Repozytorium stanowi zarówno ćwiczenie praktyczne z kursu, jak i mój własny rozwój oraz dodatkowe funkcjonalności i zmiany.

Dziękuję za inspirację i świetne materiały edukacyjne!
