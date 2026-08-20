import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';

const blogPosts = [
  {
    id: '1',
    title: 'How to Choose the Right Technology Stack for Your Project',
    excerpt: 'Selecting the right technology stack is crucial for project success.',
    category: 'Technology',
    date: '2026-08-15',
    author: 'Creative Web Technologies',
    slug: 'choosing-right-technology-stack',
    content: `
      Choosing the right technology stack is one of the most important decisions you'll make when starting a new project. The technology stack you choose will impact everything from development speed and cost to scalability and maintainability.

      ## What is a Technology Stack?

      A technology stack is a combination of programming languages, frameworks, libraries, and tools used to build and run an application. It typically includes:

      - **Frontend**: The user interface and client-side logic
      - **Backend**: Server-side logic and APIs
      - **Database**: Data storage and management
      - **Infrastructure**: Hosting, deployment, and DevOps

      ## Factors to Consider

      ### 1. Project Requirements

      Different projects have different needs. A simple website has different requirements than a complex web application or mobile app.

      ### 2. Scalability

      Consider how your application needs to grow. Will you need to handle thousands or millions of users?

      ### 3. Team Expertise

      Your team's existing skills and experience should influence your technology choices.

      ### 4. Community and Support

      Technologies with strong communities provide better documentation, tutorials, and third-party libraries.

      ### 5. Long-term Maintenance

      Consider the long-term implications of your technology choices, including updates, security patches, and hiring.

      ## Conclusion

      There's no one-size-fits-all answer. The right technology stack depends on your specific project requirements, team capabilities, and business goals.
    `,
  },
  {
    id: '2',
    title: 'The Benefits of Custom Software Development',
    excerpt: 'Off-the-shelf solutions often fall short.',
    category: 'Business',
    date: '2026-08-10',
    author: 'Creative Web Technologies',
    slug: 'benefits-custom-software-development',
    content: `
      In today's competitive business landscape, off-the-shelf software solutions often fail to meet specific business needs. Custom software development offers a tailored approach that can provide significant advantages.

      ## What is Custom Software Development?

      Custom software development is the process of designing, creating, and maintaining software applications specifically for a particular user or organization.

      ## Benefits

      ### 1. Tailored to Your Needs

      Custom software is built specifically for your business processes and requirements.

      ### 2. Scalability

      Custom solutions can grow and evolve with your business.

      ### 3. Integration

      Custom software can be designed to integrate seamlessly with your existing systems.

      ### 4. Competitive Advantage

      Unique software capabilities can differentiate your business from competitors.

      ### 5. Cost-Effectiveness

      While initial costs may be higher, custom software can be more cost-effective long-term.

      ## Conclusion

      Custom software development is an investment in your business's future, providing solutions that are perfectly aligned with your goals and processes.
    `,
  },
  {
    id: '3',
    title: 'Web Application vs. Website: What\'s the Difference?',
    excerpt: 'Understanding the distinction between websites and web applications.',
    category: 'Technology',
    date: '2026-08-05',
    author: 'Creative Web Technologies',
    slug: 'web-application-vs-website',
    content: `
      Many people use the terms "website" and "web application" interchangeably, but they are actually quite different. Understanding these differences can help you make better decisions for your digital projects.

      ## Website

      A website is a collection of web pages that provide information to users. Websites are primarily static and focus on delivering content.

      ### Characteristics of Websites:
      - Primarily informational
      - Static content
      - Limited user interaction
      - Content managed through CMS

      ## Web Application

      A web application is an interactive software application that runs in a web browser. Web applications provide functionality and allow users to perform tasks.

      ### Characteristics of Web Applications:
      - Highly interactive
      - Dynamic content
      - User authentication
      - Data processing and storage
      - Complex functionality

      ## Which Should You Choose?

      The choice depends on your goals:
      - Choose a **website** if you need to provide information
      - Choose a **web application** if you need interactive functionality

      ## Conclusion

      Both websites and web applications serve important purposes. Understanding the differences helps you choose the right approach for your specific needs.
    `,
  },
  {
    id: '4',
    title: 'Mobile App Development: Native vs. Cross-Platform',
    excerpt: 'Explore the pros and cons of native and cross-platform mobile app development.',
    category: 'Mobile',
    date: '2026-07-28',
    author: 'Creative Web Technologies',
    slug: 'native-vs-cross-platform-mobile',
    content: `
      When developing a mobile application, one of the first decisions you'll face is whether to build native apps or use a cross-platform framework. Both approaches have their advantages and trade-offs.

      ## Native App Development

      Native apps are built specifically for a single platform (iOS or Android) using platform-specific languages and tools.

      ### Advantages:
      - Best performance
      - Full access to device features
      - Best user experience
      - Platform-specific optimizations

      ### Disadvantages:
      - Higher development cost
      - Longer development time
      - Separate codebases for each platform

      ## Cross-Platform Development

      Cross-platform frameworks allow you to write code once and deploy it to multiple platforms.

      ### Advantages:
      - Single codebase
      - Faster development
      - Lower cost
      - Consistent UI across platforms

      ### Disadvantages:
      - May have performance limitations
      - Limited access to some native features
      - Dependency on framework updates

      ## Popular Cross-Platform Frameworks

      - **Flutter**: Google's UI toolkit for building natively compiled applications
      - **React Native**: Facebook's framework for building mobile apps using React

      ## Conclusion

      The choice between native and cross-platform depends on your project requirements, budget, and timeline. Both approaches can deliver excellent results when used appropriately.
    `,
  },
];

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="primary">View All Articles</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="primary">{post.category}</Badge>
            <span className="text-gray-300">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-300">By {post.author}</p>
        </div>
      </section>

      {/* Article Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-primary mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter((item) => item.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-muted mb-4">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-light rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-primary mb-3">Ready to Start Your Project?</h3>
              <p className="text-muted mb-6">
                Let's discuss how we can help bring your ideas to life.
              </p>
              <Link to="/get-a-quote">
                <Button variant="primary">
                  Get a Free Quote
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}