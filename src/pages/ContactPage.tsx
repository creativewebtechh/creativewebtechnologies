import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../data/site';

const projectTypes = [
  { value: '', label: 'Select project type' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'website', label: 'Website' },
  { value: 'web-application', label: 'Web Application' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'api-development', label: 'API Development' },
  { value: 'custom-software', label: 'Custom Software' },
  { value: 'other', label: 'Other' },
];

const budgetOptions = [
  { value: '', label: 'Select budget range' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-25000', label: '$10,000 - $25,000' },
  { value: '25000-50000', label: '$25,000 - $50,000' },
  { value: '50000-100000', label: '$50,000 - $100,000' },
  { value: '100000+', label: '$100,000+' },
];

const timelineOptions = [
  { value: '', label: 'Select timeline' },
  { value: '1-2-months', label: '1-2 months' },
  { value: '3-4-months', label: '3-4 months' },
  { value: '5-6-months', label: '5-6 months' },
  { value: '6-plus-months', label: '6+ months' },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Have a project in mind? We'd love to hear about it. Get in touch and let's
            discuss how we can help bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            <p className="text-muted mb-8">
              Reach out to us through any of the following channels or fill out the form
              and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-dark hover:text-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted">Email</span>
                    <p className="font-medium">{siteConfig.email}</p>
                  </div>
                </a>
              )}
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 text-dark hover:text-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted">Phone</span>
                    <p className="font-medium">{siteConfig.phone}</p>
                  </div>
                </a>
              )}
              {siteConfig.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-dark hover:text-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-accent" size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted">WhatsApp</span>
                    <p className="font-medium">Message Us</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-light rounded-2xl p-8">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                  <p className="text-muted">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                    <Input
                      label="Company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <Select
                      label="Project Type"
                      options={projectTypes}
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    />
                    <Select
                      label="Budget"
                      options={budgetOptions}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                    <Select
                      label="Timeline"
                      options={timelineOptions}
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    />
                  </div>

                  <Textarea
                    label="Project Description"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your project..."
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}