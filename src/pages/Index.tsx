import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    files: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', details: '', files: [] });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) });
    }
  };

  const services = [
    {
      icon: 'Scissors',
      title: 'Пошив одежды',
      description: 'Мужская и женская одежда высшего качества по индивидуальным заказам'
    },
    {
      icon: 'Package',
      title: 'Разработка мерча',
      description: 'Уникальный мерч для вашего бренда с эксклюзивным дизайном'
    },
    {
      icon: 'Sparkles',
      title: 'Вышивка и печать',
      description: 'Современные технологии нанесения логотипов и дизайнерских элементов'
    },
    {
      icon: 'PackageCheck',
      title: 'Полный цикл',
      description: 'От идеи до упаковки — берем на себя все этапы производства'
    }
  ];

  const process = [
    { step: '01', title: 'Консультация', text: 'Обсуждаем вашу идею и пожелания' },
    { step: '02', title: 'Дизайн', text: 'Создаем эскизы и визуализацию' },
    { step: '03', title: 'Материалы', text: 'Подбираем ткани и фурнитуру' },
    { step: '04', title: 'Прототип', text: 'Создаем пробную модель' },
    { step: '05', title: 'Производство', text: 'Серийный пошив на оборудовании' },
    { step: '06', title: 'Контроль', text: 'Проверка качества каждой партии' },
    { step: '07', title: 'Брендинг', text: 'Вышивка и печать логотипов' },
    { step: '08', title: 'Упаковка', text: 'Брендированная упаковка' },
    { step: '09', title: 'Доставка', text: 'Доставка в удобное время' }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Высокое качество',
      text: 'Контроль на каждом этапе производства'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      text: 'Учитываем все ваши пожелания'
    },
    {
      icon: 'Zap',
      title: 'Современные технологии',
      text: 'Новейшее оборудование для вышивки и печати'
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      text: 'Опытная команда профессионалов'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-serif text-primary">Новые Горизонты</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
            <a href="#process" className="text-sm font-medium hover:text-accent transition-colors">Процесс</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Портфолио</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Оставить заявку
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Ваш идеальный партнер в мире моды
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Швейное производство полного цикла. От идеи до упаковки — создаем уникальную одежду для вашего бренда.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20" />
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea1c461a?w=800" 
                alt="Швейное производство"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Предлагаем полный спектр услуг по созданию качественной одежды и мерча
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-border hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Процесс работы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              9 шагов от вашей идеи до готовой продукции
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative animate-slide-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-serif font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Примеры наших работ и реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative h-64 rounded-lg overflow-hidden animate-fade-in cursor-pointer" style={{ animationDelay: `${item * 100}ms` }}>
                <img 
                  src={`https://images.unsplash.com/photo-${1558769132000 + item}?w=600&h=400&fit=crop`}
                  alt={`Проект ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-serif font-semibold mb-2">Проект {item}</h3>
                    <p className="text-sm">Премиальная коллекция одежды</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Почему выбирают нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={adv.icon} size={40} className="text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary">{adv.title}</h3>
                <p className="text-muted-foreground">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Оставить заявку</h2>
              <p className="text-white/80 text-lg">
                Заполните форму и прикрепите эскизы — мы свяжемся с вами для расчета стоимости
              </p>
            </div>
            
            <Card className="bg-white animate-fade-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary">Ваше имя *</Label>
                      <Input 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов"
                        className="border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-primary">Телефон *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67"
                        className="border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ivan@example.com"
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details" className="text-primary">Детали заказа</Label>
                    <Textarea 
                      id="details"
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      placeholder="Опишите ваш проект, количество изделий, сроки..."
                      className="min-h-32 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="files" className="text-primary">Прикрепить эскизы</Label>
                    <Input 
                      id="files"
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="border-border cursor-pointer"
                    />
                    <p className="text-sm text-muted-foreground">
                      Можно прикрепить несколько файлов (изображения, PDF)
                    </p>
                    {formData.files.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm font-medium text-primary">Выбрано файлов: {formData.files.length}</p>
                        <ul className="text-sm text-muted-foreground mt-1">
                          {formData.files.map((file, idx) => (
                            <li key={idx}>• {file.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Новые Горизонты</h3>
              <p className="text-white/80">Швейное производство полного цикла</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@novye-gorizonty.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 ООО "Новые Горизонты". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
