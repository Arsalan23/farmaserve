import { useState } from 'react';
import { Search, MessageCircle, Book, HelpCircle, Shield, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Navbar } from '@/components/layout/Navbar';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Support ticket submitted',
      description: 'We\'ll get back to you within 24 hours.',
    });
  };

  const supportCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of using Famaserv',
      color: 'text-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Booking & Payments',
      description: 'Questions about bookings and transactions',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Safety & Trust',
      description: 'Information about verification and safety',
      color: 'text-purple-500'
    },
    {
      icon: AlertCircle,
      title: 'Disputes & Issues',
      description: 'Report problems or resolve disputes',
      color: 'text-orange-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a service?',
      answer: 'Browse services by category, select a provider, choose a date and time, and confirm your booking. You\'ll receive instant confirmation and can track your booking in real-time.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit cards, debit cards, PayPal, Venmo, Cash App, and other digital wallets. All transactions are secure and encrypted.'
    },
    {
      question: 'How does the rating system work?',
      answer: 'After each service, both customers and providers can leave ratings and reviews. These help maintain quality and build trust in our community.'
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer: 'You can cancel or reschedule up to 24 hours before the scheduled time without penalty. Go to your bookings page and select the booking you want to modify.'
    },
    {
      question: 'Are service providers verified?',
      answer: 'Yes! All providers undergo background checks and identity verification. Look for the verified badge on provider profiles.'
    },
    {
      question: 'What if I\'m not satisfied with a service?',
      answer: 'We have a satisfaction guarantee. Contact our support team within 48 hours, and we\'ll work to resolve the issue or provide a refund.'
    },
    {
      question: 'How do emergency bookings work?',
      answer: 'For urgent needs, use the "Emergency Mode" button on the homepage. We\'ll connect you with the nearest available provider who offers emergency services.'
    },
    {
      question: 'Can I tip my service provider?',
      answer: 'Yes! You can add a tip when rating your service or send a tip anytime through the provider\'s profile.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Find answers, get support, or reach out to our team
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Support Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {supportCategories.map((category, idx) => (
              <Card key={idx} className="hover-lift cursor-pointer transition-all">
                <CardContent className="p-6 text-center">
                  <category.icon className={`h-10 w-10 mx-auto mb-3 ${category.color}`} />
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="faq" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="faq">FAQs</TabsTrigger>
              <TabsTrigger value="contact">Contact Support</TabsTrigger>
              <TabsTrigger value="disputes">Report Issue</TabsTrigger>
            </TabsList>

            {/* FAQs Tab */}
            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Quick answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Support Tab */}
            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support Team</CardTitle>
                  <CardDescription>
                    We typically respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitTicket} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What do you need help with?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select id="category" className="w-full h-10 rounded-md border border-input bg-background px-3">
                        <option>General Question</option>
                        <option>Booking Issue</option>
                        <option>Payment Problem</option>
                        <option>Account Help</option>
                        <option>Technical Issue</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your issue in detail..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Submit Support Ticket</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Report Issue Tab */}
            <TabsContent value="disputes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Report an Issue or Dispute</CardTitle>
                  <CardDescription>
                    Our resolution team will investigate and respond within 48 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitTicket} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="booking">Booking ID (if applicable)</Label>
                      <Input id="booking" placeholder="e.g., BK123456" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issue-type">Issue Type</Label>
                      <select id="issue-type" className="w-full h-10 rounded-md border border-input bg-background px-3">
                        <option>Service not completed</option>
                        <option>Poor quality service</option>
                        <option>Provider no-show</option>
                        <option>Incorrect charges</option>
                        <option>Safety concern</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="details">Details</Label>
                      <Textarea
                        id="details"
                        placeholder="Please provide as much detail as possible..."
                        rows={6}
                        required
                      />
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <Shield className="inline h-4 w-4 mr-2" />
                        All disputes are handled confidentially and fairly. We may contact both parties for additional information.
                      </p>
                    </div>
                    <Button type="submit" className="w-full">Submit Report</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Available 9 AM - 6 PM EST
                </p>
                <Button variant="outline" size="sm">Start Chat</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Help Center</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Browse articles & guides
                </p>
                <Button variant="outline" size="sm">Visit Help Center</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <AlertCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Emergency</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Urgent safety concerns
                </p>
                <Button variant="outline" size="sm">Emergency Contact</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
