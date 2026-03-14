const Footer = () => (
  <footer className="px-6 py-8 border-t border-border max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
    <p>
      © {new Date().getFullYear()}{" "}
      <span className="gradient-text font-bold">ClickBite</span>. All rights
      reserved.
    </p>
    <p>Built with 🔥 for local businesses.</p>
  </footer>
);

export default Footer;
