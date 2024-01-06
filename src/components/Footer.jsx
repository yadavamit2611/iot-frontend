function Footer() {
  return (
    <div
      className="bg-dark-subtle text-dark text-center container fixed-bottom"
      style={{ borderRadius: "4px" }}
    >
      For Project-1 | Built by a team of noobs. | © 2023-
      {new Date().getFullYear()} All rights reserved.
    </div>
  );
}

export default Footer;
