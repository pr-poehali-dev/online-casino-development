import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-teender-dark/95 shadow-lg backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="font-playfair font-bold text-2xl text-white mr-8 flex items-center"
            >
              <span className="w-12 h-12 bg-gradient-to-r from-teender-primary to-teender-secondary rounded-full flex items-center justify-center mr-2 relative overflow-hidden">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-swim"
                >
                  <path
                    d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501M7.5 5.5C7.5 7.433 6.433 9 5 9C3.567 9 2.5 7.433 2.5 5.5C2.5 3.567 3.567 2 5 2C6.433 2 7.5 3.567 7.5 5.5ZM6.5 19C6.5 20.105 5.605 21 4.5 21C3.395 21 2.5 20.105 2.5 19C2.5 17.895 3.395 17 4.5 17C5.605 17 6.5 17.895 6.5 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-teender-accent animate-bubbles"></div>
                <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-teender-accent animate-bubbles delay-1000"></div>
              </span>
              TEENDER
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-teender-accent transition-colors"
              >
                Главная
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-teender-accent transition-colors flex items-center">
                    Игры
                    <Icon name="ChevronDown" className="ml-1" size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-teender-dark border-teender-primary/30 text-white">
                  <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                    <Icon name="Dices" className="mr-2" size={16} />
                    Слоты
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                    <Icon name="CircleDot" className="mr-2" size={16} />
                    Рулетка
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                    <Icon
                      name="Club"
                      fallback="LayoutGrid"
                      className="mr-2"
                      size={16}
                    />
                    Карточные игры
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                    <Icon name="Trophy" className="mr-2" size={16} />
                    Турниры
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                href="#"
                className="text-white hover:text-teender-accent transition-colors"
              >
                Бонусы
              </a>
              <a
                href="#"
                className="text-white hover:text-teender-accent transition-colors"
              >
                Турниры
              </a>
              <a
                href="#"
                className="text-white hover:text-teender-accent transition-colors"
              >
                Поддержка
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-teender-accent text-teender-accent hover:bg-teender-accent/10"
              >
                Вход
              </Button>
              <Button className="bg-gradient-to-r from-teender-accent to-teender-accent/80 hover:opacity-90 transition-opacity">
                Регистрация
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-teender-primary/30 text-white hover:bg-teender-primary/20"
                >
                  <Icon name="Globe" size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-teender-dark border-teender-primary/30 text-white">
                <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden border-teender-primary/30 text-white hover:bg-teender-primary/20"
                >
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-teender-dark text-white border-teender-primary/30"
              >
                <div className="flex flex-col h-full">
                  <div className="py-6">
                    <a
                      href="/"
                      className="font-playfair font-bold text-2xl text-white flex items-center"
                    >
                      <span className="w-10 h-10 bg-gradient-to-r from-teender-primary to-teender-secondary rounded-full flex items-center justify-center mr-2 relative overflow-hidden">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="animate-swim"
                        >
                          <path
                            d="M22 12.5C21.9179 13.5472 21.0782 14.5578 19.7221 15.0452C18.254 15.5326 16.6739 15.5051 14.8196 15.0452C13.7382 14.7597 12.6158 14.2174 11.3272 14.1075C10.6031 14.0526 9.73082 14.1625 9.03407 14.4206C8.27642 14.7061 7.97065 15.1385 7.9845 15.5709C7.9845 15.6259 7.9845 15.6809 7.99835 15.7358C8.06743 16.0488 8.32627 16.3068 8.64589 16.4442C9.24806 16.6748 9.97341 16.6748 10.6167 16.6748M22 12.5C22 11.4528 21.1603 10.4422 19.8042 9.9548C18.3361 9.46737 16.756 9.49488 14.9017 9.9548C13.8203 10.2403 12.6979 10.7826 11.4093 10.8925C10.6852 10.9474 9.81292 10.8375 9.11617 10.5794C8.35852 10.2939 8.05275 9.86153 8.0666 9.4291C8.0666 9.37409 8.0666 9.31907 8.08045 9.26406C8.14953 8.95105 8.40837 8.69303 8.72799 8.55552C9.33016 8.32501 10.0555 8.32501 10.6988 8.32501M7.5 5.5C7.5 7.433 6.433 9 5 9C3.567 9 2.5 7.433 2.5 5.5C2.5 3.567 3.567 2 5 2C6.433 2 7.5 3.567 7.5 5.5ZM6.5 19C6.5 20.105 5.605 21 4.5 21C3.395 21 2.5 20.105 2.5 19C2.5 17.895 3.395 17 4.5 17C5.605 17 6.5 17.895 6.5 19Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-teender-accent animate-bubbles"></div>
                      </span>
                      TEENDER
                    </a>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    <a
                      href="#"
                      className="py-2 hover:bg-teender-primary/20 px-2 rounded transition-colors"
                    >
                      Главная
                    </a>
                    <a
                      href="#"
                      className="py-2 hover:bg-teender-primary/20 px-2 rounded transition-colors"
                    >
                      Игры
                    </a>
                    <a
                      href="#"
                      className="py-2 hover:bg-teender-primary/20 px-2 rounded transition-colors"
                    >
                      Бонусы
                    </a>
                    <a
                      href="#"
                      className="py-2 hover:bg-teender-primary/20 px-2 rounded transition-colors"
                    >
                      Турниры
                    </a>
                    <a
                      href="#"
                      className="py-2 hover:bg-teender-primary/20 px-2 rounded transition-colors"
                    >
                      Поддержка
                    </a>
                  </nav>

                  <div className="mt-auto py-6 flex flex-col space-y-3">
                    <Button
                      variant="outline"
                      className="border-teender-accent text-teender-accent hover:bg-teender-accent/10 w-full"
                    >
                      Вход
                    </Button>
                    <Button className="bg-gradient-to-r from-teender-accent to-teender-accent/80 hover:opacity-90 transition-opacity w-full">
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
