
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A1F2C]/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="font-playfair font-bold text-2xl text-white mr-8 flex items-center">
              <span className="w-10 h-10 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-md flex items-center justify-center mr-2">
                <Icon name="Dice5" className="text-white" size={24} />
              </span>
              Fortune
            </a>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Главная</a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-[#9b87f5] transition-colors flex items-center">
                    Игры
                    <Icon name="ChevronDown" className="ml-1" size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#222222] border-[#333333] text-white">
                  <DropdownMenuItem className="hover:bg-[#333333] hover:text-[#9b87f5] cursor-pointer">
                    <Icon name="Slot" fallback="Dices" className="mr-2" size={16} />
                    Слоты
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#333333] hover:text-[#9b87f5] cursor-pointer">
                    <Icon name="CircleDot" fallback="Target" className="mr-2" size={16} />
                    Рулетка
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#333333] hover:text-[#9b87f5] cursor-pointer">
                    <Icon name="Cards" fallback="LayoutGrid" className="mr-2" size={16} />
                    Карточные игры
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#333333] hover:text-[#9b87f5] cursor-pointer">
                    <Icon name="Trophy" className="mr-2" size={16} />
                    Турниры
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Бонусы</a>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Турниры</a>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Поддержка</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10">
                Вход
              </Button>
              <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity">
                Регистрация
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-[#333333] text-white hover:bg-[#333333]">
                  <Icon name="Globe" size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#222222] border-[#333333] text-white">
                <DropdownMenuItem className="hover:bg-[#333333] hover:text-[#9b87f5] cursor-pointer">
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#333333] hover:text-[#9b87f5] cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#333333] hover:text-[#9b87f5] cursor-pointer">
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden border-[#333333] text-white hover:bg-[#333333]">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1A1F2C] text-white border-[#333333]">
                <div className="flex flex-col h-full">
                  <div className="py-6">
                    <a href="/" className="font-playfair font-bold text-2xl text-white flex items-center">
                      <span className="w-10 h-10 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-md flex items-center justify-center mr-2">
                        <Icon name="Dice5" className="text-white" size={24} />
                      </span>
                      Fortune
                    </a>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <a href="#" className="py-2 hover:bg-[#333333] px-2 rounded transition-colors">Главная</a>
                    <a href="#" className="py-2 hover:bg-[#333333] px-2 rounded transition-colors">Игры</a>
                    <a href="#" className="py-2 hover:bg-[#333333] px-2 rounded transition-colors">Бонусы</a>
                    <a href="#" className="py-2 hover:bg-[#333333] px-2 rounded transition-colors">Турниры</a>
                    <a href="#" className="py-2 hover:bg-[#333333] px-2 rounded transition-colors">Поддержка</a>
                  </nav>
                  
                  <div className="mt-auto py-6 flex flex-col space-y-3">
                    <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 w-full">
                      Вход
                    </Button>
                    <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity w-full">
                      Регистрация
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
