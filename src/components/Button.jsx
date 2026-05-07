export const Button = ({ children, theme, className, href }) => {
  const baseClasse = "text-white hover:text-white";
  const themeClass =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary"
        ? "bg-n-7 hover:bg-p-3 "
        : "";

  const renderButton = () => (
    <>
    <button
      className={`button py-3 px-3 lg:py-4 lg:px-6 rounded-lg ${themeClass} ${baseClasse} ${className}`}
    >
      {children}
    </button>
    </>
  );
  const renderlink = () => (
    <>
    <a
      href={href}
      className={`inline-block py-3 px-3 lg:py-4 lg:px-6 rounded-lg no-underline no-underline ${themeClass} ${baseClasse} ${className}`}
    >
      {children}
    </a>
    </>
  );
  return href ? renderlink() : renderButton();
};
