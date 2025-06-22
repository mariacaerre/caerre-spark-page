
const Logo = ({ className = "w-48 h-auto" }: { className?: string }) => {
  return (
    <div className={`${className} inline-block`}>
      <img 
        src="/lovable-uploads/79455218-b610-4be0-b529-0ee890151f37.png" 
        alt="Caerre&Co - Consultoria Criativa" 
        className="w-full h-auto"
      />
    </div>
  );
};

export default Logo;
