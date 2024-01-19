import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-3 text-muted-foreground md:px-8 md:py-4">
      <Socials />
      <p>&copy; {new Date().getFullYear()} Saad Tariq</p>
    </footer>
  );
}
