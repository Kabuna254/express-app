const Footer = () => (
  <footer className="w-full text-center text-xs text-gray-400 py-6 bg-gray-950 border-t border-gray-800 mt-auto max-h-24 overflow-hidden">
    <div>
      &copy; {new Date().getFullYear()} BlogPosts. Built by{" "}
      <span className="font-semibold text-blue-400">Daniel Kabuna</span>.
    </div>
    <div className="mt-2">
      <a
        href="https://github.com/Kabuna254"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        GitHub
      </a>
      {" | "}
      <a
        href="mailto:danielkabuna@gmail.com"
        className="text-blue-400 hover:underline"
      >
        Contact
      </a>
    </div>
  </footer>
);

export default Footer;