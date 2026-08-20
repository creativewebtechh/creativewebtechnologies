import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CTASection } from '../components/sections/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

const blogPosts = [
  {
    id: '1',
    title: 'How to Choose the Right Technology Stack for Your Project',
    excerpt: 'Selecting the right technology stack is crucial for project success. Learn the key factors to consider when making this important decision.',
    category: 'Technology',
    date: '2026-08-15',
    author: 'Creative Web Technologies',
    slug: 'choosing-right-technology-stack',
    featured: true,
  },
  {
    id: '2',
    title: 'The Benefits of Custom Software Development',
    excerpt: 'Off-the-shelf solutions often fall short. Discover why custom software development might be the right choice for your business.',
    category: 'Business',
    date: '2026-08-10',
    author: 'Creative Web Technologies',
    slug: 'benefits-custom-software-development',
  },
  {
    id: '3',
    title: 'Web Application vs. Website: What\'s the Difference?',
    excerpt: 'Understanding the distinction between websites and web applications can help you make better decisions for your digital presence.',
    category: 'Technology',
    date: '2026-08-05',
    author: 'Creative Web Technologies',
    slug: 'web-application-vs-website',
  },
  {
    id: '4',
    title: 'Mobile App Development: Native vs. Cross-Platform',
    excerpt: 'Explore the pros and cons of native and cross-platform mobile app development to make the right choice for your project.',
    category: 'Mobile',
    date: '2026-07-28',
    author: 'Creative Web Technologies',
    slug: 'native-vs-cross-platform-mobile',
  },
];

export function BlogPage() {
  const { ref, isVisible } = useScrollReveal();

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Insights, tips, and articles about technology, development, and building
            successful digital products.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <Section>
          <h2 className="text-2xl font-bold text-primary mb-8">Featured Article</h2>
          <Link to={`/blog/${featuredPost.slug}`}>
            <Card className="group">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-gradient-to-br from-accent-50 to-violet-50 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-4xl font-bold">
                    {featuredPost.title.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary">{featuredPost.category}</Badge>
                    <span className="text-sm text-muted">{featuredPost.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted mb-4">{featuredPost.excerpt}</p>
                  <span className="text-accent font-medium inline-flex items-center">
                    Read Article
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        </Section>
      )}

      {/* Regular Posts */}
      <Section className="bg-light">
        <h2 className="text-2xl font-bold text-primary mb-8">Latest Articles</h2>
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regularPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className={clsx(
                'transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full group">
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-accent text-3xl font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="primary">{post.category}</Badge>
                  <span className="text-sm text-muted">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted text-sm line-clamp-3">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}