
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ButtonLink {
  text: string;
  url: string;
  color: string;
}

interface ContentBoxProps {
  id: string;
  title: string;
  logo?: string;
  description?: string;
  buttons?: ButtonLink[];
}

// Button color styles based on color name
const getButtonColor = (colorName: string) => {
  const colorMap: Record<string, string> = {
    "primary": "bg-purple-600 hover:bg-purple-700",
    "secondary": "bg-blue-500 hover:bg-blue-600",
    "tertiary": "bg-green-500 hover:bg-green-600",
    "quaternary": "bg-orange-500 hover:bg-orange-600",
    "default": "bg-gray-500 hover:bg-gray-600"
  };
  
  return colorMap[colorName] || colorMap.default;
};

export function ContentBox({ id, title, logo, description, buttons }: ContentBoxProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6 flex flex-col h-full">
        {/* Logo (if provided) */}
        {logo && (
          <div className="mb-4 flex justify-center">
            <img 
              src={logo} 
              alt={`${title} logo`}
              className="h-24 w-auto object-contain filter grayscale transition-transform hover:scale-105"
            />
          </div>
        )}
        
        {/* Title */}
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        
        {/* Description (if provided) */}
        {description && (
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        )}
        
        {/* Buttons (if provided) */}
        {buttons && buttons.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {buttons.map((button, index) => (
              <a 
                key={index} 
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className={`${getButtonColor(button.color)} text-white`}
                >
                  {button.text}
                </Button>
              </a>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
