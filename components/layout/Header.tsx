const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-blue-600">ALX Listing</div>
      <nav className="flex gap-6 text-gray-600">
        <a href="#">Rooms</a>
        <a href="#">Mansion</a>
        <a href="#">Countryside</a>
      </nav>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-3 py-1"
        />
        <button className="px-4 py-1 bg-blue-600 text-white rounded-lg">Sign In</button>
        <button className="px-4 py-1 border border-blue-600 rounded-lg">Sign Up</button>
      </div>
    </header>
  );
};
export default Header;

