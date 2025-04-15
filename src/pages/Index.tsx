
import { useState, useEffect } from 'react';
import { ContentBox } from '@/components/ContentBox';

// Define TypeScript interfaces for our data
interface ButtonLink {
  text: string;
  url: string;
  color: string;
}

interface ContentBoxData {
  id: string;
  category: string;
  title: string;
  logo?: string;
  description?: string;
  buttons?: ButtonLink[];
}

const Index = () => {
  const [boxes, setBoxes] = useState<ContentBoxData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Fetch the JSON data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setBoxes(data.boxes);
        
        // Extract unique categories and ensure they're strings
        const uniqueCategories = ["all", ...new Set(data.boxes.map((box: ContentBoxData) => box.category))] as string[];
        setCategories(uniqueCategories);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading content data:', error);
        setIsLoading(false);
      });
  }, []);

  const filterBoxes = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
        </div>
      </header>
      
      {/* Category Navigation */}
      <nav className="bg-white shadow-sm mb-8 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto space-x-4 py-4">
            {categories.map(category => (
              <li key={category}>
                <button 
                  onClick={() => filterBoxes(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Content Boxes */}
      <main className="container mx-auto px-4 pb-12">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-in-out]">
            {boxes
              .filter(box => activeCategory === "all" || box.category === activeCategory)
              .map(box => (
                <ContentBox
                  key={box.id}
                  id={box.id}
                  title={box.title}
                  logo={box.logo}
                  description={box.description}
                  buttons={box.buttons}
                />
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
