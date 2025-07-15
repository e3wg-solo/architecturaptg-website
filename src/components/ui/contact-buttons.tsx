'use client';

export function ContactButtons() {
  const handleAddressClick = () => {
    window.open('https://yandex.ru/maps/?from=mapframe&ll=37.613785%2C55.529398&mode=routes&rtext=~55.529398%2C37.613785&rtt=mt&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D219819522730&z=14.03', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+79937775559', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79937775559', '_blank');
  };



  return (
    <div className="space-y-6">
      <button 
        onClick={handleAddressClick}
        className="flex items-center gap-4 w-full p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors text-left border border-border/60 hover:border-primary/20 cursor-pointer"
      >
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-primary" style={{transform: 'rotate(270deg) scaleX(-1)'}}>
            <path fill="currentColor" d="M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 0 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5l-4-5z"/>
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-lg mb-0">Адрес</h4>
          <p className="text-muted-foreground">
            Крымская ул., 19к1, посёлок Боброво
          </p>
        </div>
      </button>
      
      <button 
        onClick={handlePhoneClick}
        className="flex items-center gap-4 w-full p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors text-left border border-border/60 hover:border-primary/20 cursor-pointer"
      >
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-primary">
            <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-lg mb-0">Телефон</h4>
          <p className="text-muted-foreground">
            +7 (993) 777-55-59
          </p>
        </div>
      </button>
      
      <button 
        onClick={handleWhatsAppClick}
        className="flex items-center gap-4 w-full p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors text-left border border-border/60 hover:border-primary/20 cursor-pointer"
      >
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="text-primary">
            <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/>
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-lg mb-0">WhatsApp</h4>
          <p className="text-muted-foreground">
            +7 (993) 777-55-59
          </p>
        </div>
      </button>
      
      <button className="flex items-center gap-4 w-full p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors text-left border border-border/60 hover:border-primary/20 cursor-pointer">
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="text-primary">
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
              <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
              <path strokeLinecap="round" d="M24.008 12v12.01l8.479 8.48" />
            </g>
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-lg mb-0">Время работы</h4>
          <p className="text-muted-foreground">
            Пн-Вс: 10:00 - 22:00
          </p>
        </div>
      </button>
      
      <button 
        className="flex items-center gap-4 w-full p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors text-left border border-border/60 hover:border-primary/20 cursor-pointer"
      >
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="text-primary">
            <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-lg mb-0">Topiconic_beautyspa</h4>
        </div>
      </button>
    </div>
  );
} 