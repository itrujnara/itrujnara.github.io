export default function Footer() {
  return (
    <footer className="relative bottom-0 mt-8 mb-4 text-center text-sm text-muted-foreground">
      <p>
        © 2024-{new Date().getFullYear()} Igor Trujnara. Made with React and
        Tailwind CSS. Packaged with Vite.
      </p>
    </footer>
  );
}
