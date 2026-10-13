import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">
          Zhuoyang Zou
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
