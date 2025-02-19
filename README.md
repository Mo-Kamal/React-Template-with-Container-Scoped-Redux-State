# React Template with Container-Scoped Redux State

This is a React template built with Vite and TypeScript that comes preconfigured with a modular state management architecture using Redux Toolkit, Redux Saga. The template emphasizes the **Container-Scoped Redux State** approach where each container (or page) has its own slice, selectors, and sagas. In this architecture, **every state access is done via selectors** rather than reading the state directly in `useSelector`.

## Features

- **Container-Scoped Redux State:**

  - Each container (e.g., Home, Login) is self-contained with its own slice, selectors, sagas, styles, and types.
  - State is accessed using selectors only, keeping component code clean and predictable.

- **Material UI Integration:**
  - **MUI Components:** Leverage the full power of [Material UI](https://mui.com/) components to build sleek, responsive UIs.
  - **Styled Components with MUI:** Utilize MUI's `styled` API to create custom styled components that integrate seamlessly with the MUI theme.
- **Theme Customization:**

  - Easily customize themes (both dark and light modes) in the `theme-config.ts` file.

- **Lazy Loading:**

  - Components are loaded lazily with a fallback component during loading.

- **Internationalization:**

  - Built-in multi-language support with [i18next](https://www.i18next.com/).

- **Routing:**

  - Preconfigured with [React Router DOM](https://reactrouter.com/) and guidance on adding new routes.

- **Modern Tooling:**

  - Uses Vite for fast builds, ESLint for code quality, and TypeScript for type safety.

## Project Structure

```
src/
├── assets/ # Images and static assets
├── components/ # Global components (e.g., buttons, selects)
├── containers/ # Each container (e.g., home, login) with:
│ ├── index.tsx # Main container component
│ ├── loadable.tsx # Lazy load wrapper for the container
│ ├── constants.ts # Container-specific constants
│ ├── styles.ts # Styled components (using MUI's styled)
│ ├── types.ts # TypeScript types
│ ├── slice.ts # Redux Toolkit slice for local state
│ ├── selectors.ts # Selectors for accessing state (via createSelector)
│ └── saga.ts # Redux Saga effects for async tasks
├── store/ # Redux store configuration and root reducer/saga
├── locales/ # Internationalization files
├── routes/ # Application routes configuration
├── lazy-load/ # Custom lazy loading utility
└── styles/ # Global theme configuration (theme-config.ts)
```

## Container-Scoped Redux State Architecture

In this template, each container (for example, `Home`) encapsulates its own state logic:

1.  **Slice (`slice.ts`):**  
    Define initial state, reducers, and actions for the container.
2.  **Selectors (`selectors.ts`):**  
    Create memoized selectors that allow components to access state.  
    **Note:** Always use selectors instead of directly accessing the state in `useSelector`.
3.  **Saga (`saga.ts`):**  
    Handle asynchronous side effects with Redux Saga.
4.  **Lazy Loading (`loadable.tsx`):**  
    Use lazy loading to split code and load container components on demand.

### Visual Representation

    	           +-------------------------+
    	           |      Container UI       |
    	           |   (e.g., Home Page)     |
    	           +-----------+-------------+
    	                       |
    	                       v
    	          +---------------------------+
    	          |      Lazy Loading         |
    	          |   (loadable.tsx wrapper)  |
    	          +-------------+-------------+
    	                        |
    	                        v
    	          +---------------------------+
    	          |    Container Component    |
    	          |      (index.tsx)          |
    	          +-------------+-------------+
    	                        |
    	                        v
     +-----------------+  Uses Selectors   +----------------+
     | Redux Store     |<------------------|  Selectors     |
     | (global state)  |                   | (selectors.ts) |
     +-----------------+                   +----------------+
    		                    ^
    	                        | dispatches actions
    	                        |
    	          +---------------------------+
    	          |     Slice & Saga          |
    	          | (slice.ts & saga.ts)   	  |
    	          +---------------------------+

## Step-by-Step: Adding a New Container

Let's say you want to add a new container (e.g., `Profile`):

1.  **Create the Container Folder:**  
    Inside `src/containers/`, create a folder named `profile`.
2.  **Add Files:**

- **index.tsx:**  
   Create the main component that ties together the UI and state.

```
import { Wrapper } from "./styles";
import { Features } from "./features"; // if needed
// Import selectors, actions, and hooks as required

export function Profile() {
  // Access state via selectors:
  // const userProfile = useSelector(profileSelectors.userProfile);

  return (
    <Wrapper>
      <h1>Profile Page</h1>
      {/* Render profile details */}
    </Wrapper>
  );
}
```

- **loadable.tsx:**  
  Enable lazy loading.

```
import { PageLoading } from "@/components/full-height-loading";
import { lazyLoad } from "@/lazy-load";

export const Profile = lazyLoad(
  () => import("./index"),
  (module) => module.Profile,
  { fallback: <PageLoading /> }
);
```

- **slice.ts, selectors.ts, saga.ts, styles.ts, types.ts, constants.ts:**  
  Follow the patterns used in the `home` container to set up your state, selectors, async actions, and styles.

3. **Update Routes:**  
   Add a new route in `src/routes/` to include the `Profile` container.

```
// Example in routes.tsx
import { Profile } from "@/containers/profile/loadable";

const routes = [
  // ...other routes
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;
```

4. **Hook Up in Store (if needed):**  
   Add the new container’s reducer and saga to your global store configuration.

## Routing & Lazy Loading

- **Lazy Loading:**  
  The template includes a custom `lazyLoad` utility that wraps React's `lazy` and `Suspense` to handle component loading with a fallback UI.
- **Adding/Modifying Routes:**  
  Simply update the `src/routes/` configuration to add new paths or modify existing ones. New containers should be imported via their `loadable.tsx` files to benefit from lazy loading.

## Customization

### Themes

- **Theme Configuration:**  
  The global theme is defined in `src/styles/theme-config.ts`. You can customize the typography, palette, and other theme settings here.
- **Dark and Light Modes:**  
  The App supports dark and light themes, with a `ThemeToggler` component that uses MUI’s color scheme hooks:

## Dependencies

This template relies on the following key dependencies:

## Installation & Running

1.  **Clone the Repository:**

```
git clone https://github.com/Mo-Kamal/React-Template-with-Container-Scoped-Redux-State.git
cd your-react-template
```

2.  **Install Dependencies:**

```
npm install
# or
yarn install
```

3.  **Run the Development Server:**

```
npm run dev
# or
yarn dev
```

## Conclusion

This React template is designed to help you build projects quickly while following best practices for state management, routing, lazy loading, and theme customization. With its **Container-Scoped Redux State** approach, you’ll find it easier to maintain and scale your application as each container manages its own slice of state, selectors, and asynchronous logic.

## Coming Next 🚀

Here are some upcoming features planned for future updates:

- **CLI Tool for Container Generation**
  - A command-line tool to generate a new container with all necessary files (`index.tsx`, `slice.ts`, `selectors.ts`, `saga.ts`, etc.).
  - This will automate the process of adding new containers, making project scalability easier.

Stay tuned for updates! If you have suggestions or feature requests, feel free to contribute or open an issue. 🎉

---

Happy coding! 🚀
