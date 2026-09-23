/* In a Next.js project using the App Router, your regular components should be placed inside the src folder, but outside the app folder (usually in a src/components folder).

Here is the industry-standard structure:


    my-nextjs-app/
    ├── src/               
    │   ├── app/   <-- STRICTLY for routing pages and layouts
    │   │   ├── foods/
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   │
    │   ├── components/    <-- PUT YOUR COMPONENTS HERE!
    │   │   ├── FoodNotFound.tsx
    │   │   ├── Navbar.tsx
    │   │   └── Button.tsx
    │   │
    │   ├── lib/           
    │   └── types/  


Why keep components out of the app folder?

    1. Keeps Routing Clean: The app folder governs your website's URLs. Mixing dozens of UI components (like buttons, cards, and modals) inside app makes it very hard to see what your actual website structure looks like.


    2. Prevents Accidental Routes: If you accidentally name a component file page.tsx inside the app folder, Next.js will turn it into a live public URL. Keeping components in a separate src/components folder eliminates this risk entirely.


    3. Global Reusability: Placing them in src/components signals to you and your team that these components are reusable across many different pages.



The Single Exception (Colocation)

You can put components inside the app folder only if that component is exclusively used by one specific page and nowhere else.
    
    => If you do this, you can name the folder with an underscore (e.g., _components) so Next.js knows to ignore it for routing:

    
    src/app/foods/
    ├── _components/  <-- Only components used strictly on the foods page
    │   └── FoodCard.tsx
    └── page.tsx

For general UI components (like your FoodNotFound card), putting them in src/components/ is the cleanest and most professional approach. */
