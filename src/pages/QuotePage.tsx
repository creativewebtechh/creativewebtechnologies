import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import clsx from 'clsx';

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

const steps = [
  { number: 1, title: 'What are you building?' },
  { number: 2, title: 'Tell us about the project' },
  { number: 3, title: 'Budget and timeline' },
  { number: 4, title: 'Your contact information' },
  { number: 5, title: 'Review and submit' },
];

export function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">What are you building?</h3>
            <Select
              label="Project Type"
              options={projectTypes}
              value={formData.projectType}
              onChange={(e) => updateFormData('projectType', e.target.value)}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Tell us about the project</h3>
            <Textarea
              label="Project Description"
              value={formData.description}
              onChange={(e) => updateFormData('description', e.target.value)}
              placeholder="Describe your project, goals, and any specific requirements..."
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Budget and timeline</h3>
            <Select
              label="Budget Range"
              options={budgetOptions}
              value={formData.budget}
              onChange={(e) => updateFormData('budget', e.target.value)}
            />
            <Select
              label="Timeline"
              options={timelineOptions}
              value={formData.timeline}
              onChange={(e) => updateFormData('timeline', e.target.value)}
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Your contact information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Your name"
              />
              <Input
                label="Company"
                type="text"
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                placeholder="Company name (optional)"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="your@email.com"
              />
              <Input
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Review and submit</h3>
            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted">Project Type</span>
                  <p className="font-medium text-dark">
                    {projectTypes.find((t) => t.value === formData.projectType)?.label || 'Not selected'}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted">Description</span>
                  <p className="font-medium text-dark">{formData.description || 'Not provided'}</p>
                </div>
                <div>
                  <span className="text-sm text-muted">Budget</span>
                  <p className="font-medium text-dark">
                    {budgetOptions.find((b) => b.value === formData.budget)?.label || 'Not selected'}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-muted">Timeline</span>
                  <p className="font-medium text-dark">
                    {timelineOptions.find((t) => t.value === formData.timeline)?.label || 'Not selected'}
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-sm text-muted">Contact</span>
                  <p className="font-medium text-dark">{formData.name}</p>
                  <p className="text-muted text-sm">{formData.email}</p>
                  {formData.company && <p className="text-muted text-sm">{formData.company}</p>}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (submitStatus === 'success') {
    return (
      <>
        <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Quote</h1>
          </div>
        </section>
        <Section>
          <div className="text-center py-12 max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
            <p className="text-muted">
              Your quote request has been submitted successfully. We'll review your project
              requirements and get back to you within 24-48 hours.
            </p>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Quote</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Tell us about your project and we'll provide you with a detailed quote and timeline.
          </p>
        </div>
      </section>

      {/* Multi-step Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={clsx(
                      'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors',
                      currentStep >= step.number
                        ? 'bg-accent text-white'
                        : 'bg-border text-muted'
                    )}
                  >
                    {currentStep > step.number ? (
                      <Check size={18} />
                    ) : (
                      step.number
                    )}
                  </div>
                  {step.number < steps.length && (
                    <div
                      className={clsx(
                        'h-1 w-12 md:w-20 mx-2 transition-colors',
                        currentStep > step.number ? 'bg-accent' : 'bg-border'
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm text-muted">
                Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
              </span>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-light rounded-2xl p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2" size={18} />
                  Previous
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <Button variant="primary" onClick={nextStep}>
                  Next
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}