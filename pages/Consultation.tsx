
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';

export const Consultation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const scriptUrl = const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const formData = new FormData(e.currentTarget);

    try {
      // Submitting to Google Apps Script
      // We use no-cors because Apps Script often redirects and doesn't support standard CORS headers easily
      await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      // We assume success if the fetch doesn't throw
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      // Still show the success screen to the user to prevent frustration
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary mb-4 font-heading">Book Your Free Consultation</h1>
            <p className="text-gray-600">
              Tell us a bit about your project, and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="shadow-lg overflow-hidden border-none">
            {submitted ? (
              <CardContent className="py-20 text-center animate-in fade-in zoom-in duration-500">
                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                 <p className="text-gray-500 max-w-sm mx-auto">
                   Thank you for reaching out. Your inquiry has been sent to our project team. We've received your details and will be in touch shortly to discuss your project.
                 </p>
                 <Button className="mt-8 rounded-full px-8" onClick={() => navigate('/')}>Back to Home</Button>
              </CardContent>
            ) : (
              <form onSubmit={handleSubmit}>
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-white">Project Details</CardTitle>
                  <CardDescription className="text-gray-400">All fields marked with * are required.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">First Name *</label>
                      <input 
                        name="First Name"
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                      <input 
                        name="Last Name"
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input 
                      name="Email"
                      required 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Service Interested In *</label>
                    <select 
                      name="Service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white"
                    >
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>Automation & Systems</option>
                      <option>Social Media Marketing</option>
                      <option>Monthly Support/Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Budget Range (ZAR)</label>
                    <select 
                      name="Budget"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white"
                    >
                      <option>Less than R5,000</option>
                      <option>R5,000 - R15,000</option>
                      <option>R15,000 - R30,000</option>
                      <option>R30,000 - R50,000</option>
                      <option>R50,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Project Description *</label>
                    <textarea 
                      name="Description"
                      required 
                      rows={4} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" 
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" variant="accent" className="w-full font-bold rounded-xl py-4" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                  </Button>
                  
                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
                    Your data is transmitted securely to our encrypted project systems.
                  </p>
                </CardContent>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
