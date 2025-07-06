import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest Thai learning tips and course updates.",
    });

    setEmail("");
    setIsSubmitting(false);
    onClose();
    
    // Remember user preference (don't show again for 30 days)
    localStorage.setItem("emailPopupClosed", new Date().toISOString());
  };

  const handleNoThanks = () => {
    localStorage.setItem("emailPopupClosed", new Date().toISOString());
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-thai-strong max-w-md w-full animate-scale-in">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            
            <h2 className="font-display text-2xl font-bold text-thai-text-dark mb-2">
              Stay Updated with ThaiBridge Academy
            </h2>
            
            <p className="text-muted-foreground">
              Get exclusive Thai language tips, cultural insights, and course updates delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="popup-email">Email Address</Label>
              <Input
                id="popup-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                disabled={isSubmitting}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>

          <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
            <Button 
              variant="ghost" 
              onClick={handleNoThanks}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              No thanks
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}