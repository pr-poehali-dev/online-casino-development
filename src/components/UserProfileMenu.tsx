
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfileMenu = () => {
  const [balance, setBalance] = useState(0);
  const [depositDialog, setDepositDialog] = useState(false);
  const [withdrawDialog, setWithdrawDialog] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [activeTab, setActiveTab] = useState("card");

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (amount > 0) {
      setBalance(prev => prev + amount);
      setDepositDialog(false);
      setDepositAmount("");
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= balance) {
      setBalance(prev => prev - amount);
      setWithdrawDialog(false);
      setWithdrawAmount("");
    }
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-teender-accent text-teender-accent hover:bg-teender-accent/10"
          onClick={() => setDepositDialog(true)}
        >
          <Icon name="Plus" size={14} className="mr-1" />
          Пополнить
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full bg-teender-primary/20 p-0">
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-teender-accent text-[10px] font-bold text-white">
                3
              </span>
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://api.dicebear.com/7.x/personas/svg?seed=Felix" alt="аватар пользователя" />
                <AvatarFallback>ПИ</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-teender-dark border-teender-primary/30 text-white w-60" align="end">
            <DropdownMenuLabel>Мой профиль</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-teender-primary/20" />
            <div className="p-2">
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://api.dicebear.com/7.x/personas/svg?seed=Felix" alt="аватар пользователя" />
                  <AvatarFallback>ПИ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Игрок123456</p>
                  <p className="text-xs text-gray-400">Дата регистрации: 10.05.2025</p>
                </div>
              </div>
              <div className="bg-teender-primary/10 rounded-md p-2 mb-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Баланс:</span>
                  <span className="font-bold text-teender-accent">{balance.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Бонусы:</span>
                  <span className="font-bold text-teender-success">150</span>
                </div>
              </div>
            </div>
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                <Icon name="User" className="mr-2" size={16} />
                <span>Личный кабинет</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer"
                onClick={() => setDepositDialog(true)}
              >
                <Icon name="PlusCircle" className="mr-2" size={16} />
                <span>Пополнить счет</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer"
                onClick={() => setWithdrawDialog(true)}
              >
                <Icon name="MinusCircle" className="mr-2" size={16} />
                <span>Вывести средства</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                <Icon name="History" className="mr-2" size={16} />
                <span>История операций</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-teender-primary/20" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                <Icon name="Settings" className="mr-2" size={16} />
                <span>Настройки</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-teender-primary/20 hover:text-teender-accent cursor-pointer">
                <Icon name="LifeBuoy" className="mr-2" size={16} />
                <span>Поддержка</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-destructive/20 hover:text-destructive cursor-pointer">
                <Icon name="LogOut" className="mr-2" size={16} />
                <span>Выйти</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Диалог пополнения баланса */}
      <Dialog open={depositDialog} onOpenChange={setDepositDialog}>
        <DialogContent className="bg-teender-dark border-teender-primary/30 text-white sm:max-w-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-water-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles"></div>
          <div className="absolute -bottom-2 -left-2 h-2 w-2 rounded-full bg-teender-accent/50 animate-bubbles delay-700"></div>
          
          <DialogHeader className="relative z-10">
            <DialogTitle className="font-playfair flex items-center">
              <Icon name="Wallet" className="mr-2 text-teender-accent" size={20} />
              Пополнение баланса
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Выберите способ оплаты и введите сумму пополнения
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="card" value={activeTab} onValueChange={setActiveTab} className="relative z-10">
            <TabsList className="bg-teender-primary/10 w-full justify-start mb-4">
              <TabsTrigger 
                value="card" 
                className="data-[state=active]:bg-teender-primary/20 data-[state=active]:text-teender-accent"
              >
                <Icon name="CreditCard" className="mr-2" size={16} />
                Карта
              </TabsTrigger>
              <TabsTrigger 
                value="ewallet" 
                className="data-[state=active]:bg-teender-primary/20 data-[state=active]:text-teender-accent"
              >
                <Icon name="Smartphone" className="mr-2" size={16} />
                Э-кошелек
              </TabsTrigger>
              <TabsTrigger 
                value="crypto" 
                className="data-[state=active]:bg-teender-primary/20 data-[state=active]:text-teender-accent"
              >
                <Icon name="Bitcoin" className="mr-2" size={16} />
                Крипто
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="card" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="card-number">Номер карты</Label>
                  <Input 
                    id="card-number" 
                    placeholder="0000 0000 0000 0000" 
                    className="bg-teender-primary/10 border-teender-primary/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="expiry">Срок действия</Label>
                  <Input 
                    id="expiry" 
                    placeholder="MM/ГГ" 
                    className="bg-teender-primary/10 border-teender-primary/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input 
                    id="cvv" 
                    type="password" 
                    placeholder="***" 
                    className="bg-teender-primary/10 border-teender-primary/30 text-white"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ewallet" className="space-y-4">
              <div className="grid gap-4">
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-teender-primary/30 hover:bg-teender-primary/20">
                    <Icon name="Smartphone" className="mr-2" />
                    ЮMoney
                  </Button>
                  <Button variant="outline" className="flex-1 border-teender-primary/30 hover:bg-teender-primary/20">
                    <Icon name="Smartphone" className="mr-2" />
                    QIWI
                  </Button>
                </div>
                <div>
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (___) ___-__-__" 
                    className="bg-teender-primary/10 border-teender-primary/30 text-white"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="crypto" className="space-y-4">
              <div className="flex gap-2 mb-4">
                <Button variant="outline" className="flex-1 border-teender-primary/30 hover:bg-teender-primary/20">
                  <Icon name="Bitcoin" className="mr-2" />
                  Bitcoin
                </Button>
                <Button variant="outline" className="flex-1 border-teender-primary/30 hover:bg-teender-primary/20">
                  <Icon name="Bitcoin" className="mr-2" />
                  Ethereum
                </Button>
              </div>
              <div className="bg-teender-primary/10 p-3 rounded-md mb-4 text-center">
                <p className="text-xs text-gray-300 mb-2">Отсканируйте QR-код или используйте адрес ниже</p>
                <div className="bg-white p-4 w-32 h-32 mx-auto mb-2 rounded-md relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div 
                        key={i}
                        className={`bg-black ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-xs bg-teender-primary/20 p-2 rounded font-mono overflow-hidden text-ellipsis">
                  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                </div>
              </div>
            </TabsContent>
            
            <div className="mt-4">
              <Label>Сумма пополнения</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="border-teender-primary/30 hover:bg-teender-primary/20"
                  onClick={() => setDepositAmount("1000")}
                >
                  1 000 ₽
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="border-teender-primary/30 hover:bg-teender-primary/20"
                  onClick={() => setDepositAmount("5000")}
                >
                  5 000 ₽
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="border-teender-primary/30 hover:bg-teender-primary/20"
                  onClick={() => setDepositAmount("10000")}
                >
                  10 000 ₽
                </Button>
              </div>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="Введите сумму"
                  className="bg-teender-primary/10 border-teender-primary/30 text-white pl-8"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₽</span>
              </div>
              
              <div className="mt-2 flex justify-between items-center text-xs text-gray-400">
                <span>Мин. сумма: 100 ₽</span>
                <span>Комиссия: 0%</span>
              </div>
              
              <div className="bg-teender-accent/10 border border-teender-accent/20 rounded p-2 mt-4 flex items-center">
                <Icon name="Gift" size={16} className="text-teender-accent mr-2 flex-shrink-0" />
                <span className="text-xs text-gray-300">
                  Получите <span className="text-teender-accent font-bold">+200%</span> к первому депозиту!
                </span>
              </div>
            </div>
          </Tabs>
          
          <DialogFooter className="relative z-10">
            <Button variant="outline" onClick={() => setDepositDialog(false)}>Отмена</Button>
            <Button 
              className="bg-gradient-to-r from-teender-accent to-teender-accent/80"
              onClick={handleDeposit}
              disabled={!depositAmount || parseFloat(depositAmount) <= 0}
            >
              Пополнить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Диалог вывода средств */}
      <Dialog open={withdrawDialog} onOpenChange={setWithdrawDialog}>
        <DialogContent className="bg-teender-dark border-teender-primary/30 text-white sm:max-w-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-water-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles"></div>
          <div className="absolute -bottom-2 -left-2 h-2 w-2 rounded-full bg-teender-accent/50 animate-bubbles delay-700"></div>
          
          <DialogHeader className="relative z-10">
            <DialogTitle className="font-playfair flex items-center">
              <Icon name="CreditCard" className="mr-2 text-teender-accent" size={20} />
              Вывод средств
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Укажите реквизиты и сумму для вывода средств
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-teender-primary/10 p-3 rounded-md flex justify-between items-center">
              <span className="text-gray-300">Доступно к выводу:</span>
              <span className="font-bold text-teender-accent">{balance.toLocaleString()} ₽</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="withdraw-method">Способ вывода</Label>
                <select 
                  id="withdraw-method"
                  className="w-full h-10 rounded-md border border-teender-primary/30 bg-teender-primary/10 text-white px-3 py-2"
                >
                  <option value="bank_card">Банковская карта</option>
                  <option value="ewallet">Электронный кошелек</option>
                  <option value="crypto">Криптовалюта</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="withdraw-card">Номер карты</Label>
                <Input 
                  id="withdraw-card" 
                  placeholder="0000 0000 0000 0000" 
                  className="bg-teender-primary/10 border-teender-primary/30 text-white"
                />
              </div>
              
              <div>
                <Label>Сумма вывода</Label>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="Введите сумму"
                    className="bg-teender-primary/10 border-teender-primary/30 text-white pl-8"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    max={balance}
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">₽</span>
                </div>
                
                <div className="mt-2 flex justify-between items-center text-xs text-gray-400">
                  <span>Мин. сумма: 1000 ₽</span>
                  <span>Комиссия: 1%</span>
                </div>
              </div>
              
              <div className="bg-teender-primary/10 p-3 rounded-md">
                <p className="text-xs text-gray-300 mb-1">
                  Обработка запроса занимает до 24 часов. Средства поступят на ваш счет в течение 3 рабочих дней.
                </p>
              </div>
            </div>
          </div>
          
          <DialogFooter className="relative z-10">
            <Button variant="outline" onClick={() => setWithdrawDialog(false)}>Отмена</Button>
            <Button 
              className="bg-gradient-to-r from-teender-primary to-teender-secondary"
              onClick={handleWithdraw}
              disabled={!withdrawAmount || parseFloat(withdrawAmount) <= 0 || parseFloat(withdrawAmount) > balance}
            >
              Вывести
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfileMenu;
