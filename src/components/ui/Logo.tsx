import { Shirt } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Shirt className="text-teal-400 mr-2" />
      <span className="font-bold text-white text-xl tracking-tight">SPwear</span>
    </div>
  );
};

export default Logo;