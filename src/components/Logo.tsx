
const Logo = ({ className = "w-48 h-auto" }: { className?: string }) => {
  return (
    <div className={`${className} inline-block`}>
      <img 
        src="/lovable-uploads/dbea3ec1-331e-4713-9a75-729711aa87d8.png" 
        alt="Caerre&Co - Consultoria Criativa" 
        className="w-full h-auto"
      />
    </div>
  );
};

export default Logo;
