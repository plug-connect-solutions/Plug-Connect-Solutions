
import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Share2, TrendingUp, Users, MessageCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    client: "MTR VISION 30",
    platform: "Full Suite Social Management",
    image: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/617870449_862834963205516_7281797345763936963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fFDFagD1JxoQ7kNvwH7oV8R&_nc_oc=Adm1I5CbntQ_EmvglrAjgYbkrZmj2nyeHToCPSGmW7dBy8ObBUEwL4CYnKkBMORie2o&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=0oSlFvrLUUzQdcBcfn8FMA&oh=00_AfoAMHhVDbsMwZaS1MKnEc87Jv4l9T1Mf_pBAUcuP6kpPg&oe=697901D4",
    results: "Significant increase in property inquiries and tenant placement."
  },
  {
    client: "The Growing Mind",
    platform: "Content & Community Management",
    image: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/369517908_3584832978441929_2017806542128831035_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o1C7asYClYsQ7kNvwEia5Kh&_nc_oc=AdkeIZAba-_E1Qfl_AaZEaGK4aNbUglI7NBNreOx87r3pXWX5LZ4fJ8nLbIEBPfQxtI&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=6p249-8PS7-0mVpSPm8Slw&oh=00_AfqtXH0oTqg6nXMocLVFdTYImJ_vfSm7o9K1Fj-2bzdYNw&oe=69791760",
    results: "3x follower growth and improved digital engagement within 6 months."
  },
];

export const SocialMedia: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            <Share2 size={16} className="text-accent" />
            <span>Social Media Management</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Turn Followers Into <br/><span className="text-accent">Paying Customers</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We handle your social media so you can handle your business. Professional posts, targeted ads, and real growth for South African brands.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/consultation">
              <Button size="lg" variant="accent" className="rounded-full px-8">Get a Free Audit</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-secondary/50 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-accent rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Content Creation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We design stunning graphics, write engaging captions, and create reels that capture your brand's personality.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/50 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-accent rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Paid Advertising</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach the right people at the right time. We manage Facebook and Instagram ads that actually convert into sales.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/50 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-accent rounded-xl flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Community Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We engage with your audience, respond to comments, and manage your inbox to ensure no lead is missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Real Results for Local Brands</h2>
            <p className="text-gray-500">Evidence-based growth through professional management.</p>
          </div>
          {/* Changed grid-cols-3 to grid-cols-2 and added max-w-4xl mx-auto to fix the spacing issue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioItems.map((item, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-lg flex flex-col h-full bg-white">
                <div className="h-64 overflow-hidden">
                  <img src={item.image} alt={item.client} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="text-accent text-[10px] font-black uppercase tracking-[0.15em] mb-2">{item.platform}</div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.client}</h3>
                  <div className="mt-auto flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 p-3 rounded-lg border border-green-100">
                    <Check size={18} strokeWidth={3} className="shrink-0" />
                    <span>{item.results}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style benefits */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
           <h2 className="text-3xl font-bold text-center mb-12 font-heading">Why Social Media Matters</h2>
           <div className="space-y-6">
              {[
                { q: "Do I really need social media?", a: "80% of South African consumers check a business's social media profile before making a purchase. It's your digital storefront." },
                { q: "Will I get more sales?", a: "Yes. By targeting specific demographics in your local area, we ensure your message reaches people who are actually interested in your products." },
                { q: "Is it expensive?", a: "We have packages tailored for small businesses starting from R999 per month. It's an investment in your brand's future." }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-xl border border-gray-100 hover:border-accent/30 transition-colors">
                  <h3 className="font-bold text-lg text-primary mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 font-heading">Ready to boost your social presence?</h2>
          <Link to="/consultation">
             <Button variant="accent" size="lg" className="rounded-full px-12 font-bold shadow-xl">Get Started Today</Button>
          </Link>
        </div>
      </section>

    </div>
  );
};
