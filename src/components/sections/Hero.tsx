import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Globe, Layout } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient from-primary via-primary-900 to-primary-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-grid-white" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl" />

      <div className="container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build. Innovate.{' '}
              <span className="text-gradient">Grow.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              We design and develop high-performance websites, mobile applications, and custom
              software solutions that help businesses turn ideas into powerful digital products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-a-quote">
                <Button variant="primary" size="lg">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <Smartphone className="text-accent" size={32} />
                    <span className="text-white text-sm font-medium">Mobile</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <Globe className="text-violet" size={32} />
                    <span className="text-white text-sm font-medium">Web</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                    <Layout className="text-cyan" size={32} />
                    <span className="text-white text-sm font-medium">Apps</span>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-white text-sm">Building your digital future</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-accent to-violet rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-xl p-3 shadow-lg">
                <span className="text-white font-bold">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-violet rounded-xl p-3 shadow-lg">
                <span className="text-white font-bold">Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}