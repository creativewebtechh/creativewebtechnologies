import { Link } from 'react-router-dom';
import { Home, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-accent mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Looks like this page went offline.
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button variant="primary">
              <Home className="mr-2" size={18} />
              Back Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline">
              <Layers className="mr-2" size={18} />
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}