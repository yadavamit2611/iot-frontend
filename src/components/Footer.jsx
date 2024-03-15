function Footer() {
  return (
    <div
      className="bg-dark-subtle text-dark text-center container fixed-bottom"
      style={{ borderRadius: "4px" }}
    >
      For Project-1 | 2023-
      {new Date().getFullYear()} No rights reserved.
    </div>
  );
}

export default Footer;
