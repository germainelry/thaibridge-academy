import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  children?: React.ReactNode;
}

export function WhatsAppButton({ 
  phoneNumber = "6588994462",
  message = "Hi ThaiBridge Academy, I'm interested in learning Thai",
  className = "",
  variant = "default",
  size = "default",
  children
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {children || "Chat on WhatsApp"}
    </Button>
  );
}