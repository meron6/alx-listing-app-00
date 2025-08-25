const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-600">
      © {new Date().getFullYear()} ALX Listing. All rights reserved.
    </footer>
  );
};
export default Footer;
