import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  image: string;
  link: string;
  description: string;
}

interface RelatedProductsProps {
  products: Product[];
}

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Slični proizvodi</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Link key={index} to={product.link}>
              <Card className="shadow-card hover:shadow-hover transition-all h-full">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg overflow-hidden flex items-center justify-center p-4 mb-3" style={{ minHeight: '140px' }}>
                    <img 
                      src={product.image}
                      alt={product.name} 
                      className="object-contain"
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                  <h3 className="font-semibold text-center mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
