export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      🛡️ Cyber Security Tools Hub — All links lead to official websites —{' '}
      <a href="#" onClick={scrollToTop}>
        ↑ Back to top
      </a>
      <div className="footer-credit">
        Designed by <strong>CYBERJ.IO</strong>
        <a
          className="fi"
          href="https://www.instagram.com/cyberj.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="@cyberj.io"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </footer>
  );
}
