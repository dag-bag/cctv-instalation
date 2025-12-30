import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './page.module.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Professional CCTV Installation & Security Services | CamHarbor',
  description:
    'Learn about CamHarbor and our founder Virender Kumar. We provide professional CCTV installation, security camera repair, and comprehensive security solutions across Delhi NCR.',
  alternates: { canonical: 'https://www.camharbor.in/about' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/about',
    title: 'About Us - CamHarbor Security Services',
    description:
      'Professional CCTV installation and security services by Virender Kumar. Serving Delhi NCR with expert technicians and trusted solutions.',
  },
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About CamHarbor</h1>
          <p className={styles.subtitle}>
            Your trusted partner for professional CCTV installation and security solutions across Delhi NCR
          </p>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>About Us</span>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Our Story Section */}
        <section className={styles.section}>
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.text}>
                CamHarbor was founded with a simple yet powerful vision: to make professional security 
                solutions accessible to everyone. What started as a small venture has grown into one of 
                Delhi NCR's most trusted names in CCTV installation and security services.
              </p>
              <p className={styles.text}>
                Over the years, we've installed thousands of security cameras, helped hundreds of businesses 
                protect their assets, and provided peace of mind to countless families. Our commitment to 
                quality, transparency, and customer satisfaction has been the cornerstone of our success.
              </p>
              <p className={styles.text}>
                Today, we serve customers across Delhi, Gurgaon, Noida, Ghaziabad, Faridabad, and beyond, 
                offering comprehensive security solutions that combine cutting-edge technology with expert 
                installation and reliable support.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                alt="Professional security camera installation"
                width={800}
                height={600}
                className={styles.image}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className={styles.section}>
          <div className={styles.founderCard}>
            <div className={styles.founderImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Virender Kumar - Founder of CamHarbor"
                width={400}
                height={400}
                className={styles.founderImage}
                unoptimized
              />
            </div>
            <div className={styles.founderContent}>
              <h2 className={styles.sectionTitle}>Meet Our Founder</h2>
              <h3 className={styles.founderName}>Virender Kumar</h3>
              <p className={styles.text}>
                Virender Kumar is the visionary founder and driving force behind CamHarbor. With years of 
                experience in the security and technology industry, Virender recognized the need for reliable, 
                affordable, and professional security solutions in the Delhi NCR region.
              </p>
              <p className={styles.text}>
                His passion for technology and commitment to customer satisfaction has shaped CamHarbor into 
                what it is today. Under his leadership, the company has maintained a focus on quality 
                installations, transparent pricing, and exceptional customer service.
              </p>
              <p className={styles.text}>
                Virender believes that security should be accessible to everyone—from small homes to large 
                commercial establishments. This philosophy drives our mission to provide top-quality security 
                solutions at competitive prices, backed by reliable support and service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className={styles.section}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>🎯</div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                To provide world-class security solutions that protect what matters most to our customers. 
                We strive to make professional security accessible, affordable, and reliable for everyone 
                across Delhi NCR.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>👁️</div>
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionText}>
                To become the most trusted name in security solutions across India, known for innovation, 
                quality, and unwavering commitment to customer satisfaction. We envision a future where 
                every home and business is protected by reliable, smart security systems.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>✅</div>
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every installation is done with precision, using genuine 
              parts and following industry best practices.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Customer Trust</h3>
              <p>Building long-term relationships with our customers is our priority. We believe in 
              transparency, honesty, and delivering on our promises.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3>Innovation</h3>
              <p>We stay updated with the latest security technologies and trends to offer our customers 
              the best solutions available in the market.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Reliability</h3>
              <p>When you need us, we're there. Our 24/7 support and quick response times ensure that 
              your security systems are always operational.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💰</div>
              <h3>Affordability</h3>
              <p>We believe quality security shouldn't break the bank. Our competitive pricing makes 
              professional security accessible to everyone.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🛡️</div>
              <h3>Security</h3>
              <p>Your safety and privacy are paramount. We ensure all installations meet the highest 
              security standards and protect your data.</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📹</div>
              <h3>CCTV Installation</h3>
              <p>Professional installation of security cameras for homes, offices, shops, and industrial 
              facilities. We handle everything from planning to installation and configuration.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Repair & Maintenance</h3>
              <p>Expert repair services for all major CCTV brands. We also offer comprehensive AMC 
              (Annual Maintenance Contracts) to keep your systems running smoothly.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔐</div>
              <h3>Access Control</h3>
              <p>Biometric and card-based access control systems for enhanced security. Perfect for 
              offices, apartments, and commercial spaces.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚪</div>
              <h3>Video Door Phones</h3>
              <p>Modern video door phone systems that let you see and communicate with visitors before 
              opening the door. Ideal for homes and apartments.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Electrical Services</h3>
              <p>Complete electrical solutions including wiring, panel installation, and electrical 
              repairs. All work is done by certified electricians.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📱</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support for emergencies. Our team is always ready to help when you 
              need us most.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choose CamHarbor?</h2>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>1</div>
              <h3>Expert Technicians</h3>
              <p>All our technicians are certified, background-verified, and have years of experience 
              in security system installation and repair.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>2</div>
              <h3>1-Year Warranty</h3>
              <p>We stand behind our work with a comprehensive 1-year warranty on all installations, 
              covering both labor and parts.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>3</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden charges or surprise fees. We provide clear, upfront pricing so you know 
              exactly what you're paying for.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>4</div>
              <h3>Same-Day Service</h3>
              <p>Need urgent installation or repair? We offer same-day service for most locations across 
              Delhi NCR.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>5</div>
              <h3>Genuine Parts</h3>
              <p>We use only genuine, branded parts from authorized dealers. No compromises on quality 
              or durability.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>6</div>
              <h3>Customer Satisfaction</h3>
              <p>With thousands of satisfied customers and a 4.9+ rating, we're committed to 
              exceeding your expectations.</p>
            </div>
          </div>
        </section>

        {/* Our Reach */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Reach</h2>
          <div className={styles.reachContent}>
            <p className={styles.text}>
              CamHarbor proudly serves customers across the entire Delhi NCR region, including:
            </p>
            <div className={styles.citiesGrid}>
              <div className={styles.cityCard}>Delhi</div>
              <div className={styles.cityCard}>Gurgaon</div>
              <div className={styles.cityCard}>Noida</div>
              <div className={styles.cityCard}>Ghaziabad</div>
              <div className={styles.cityCard}>Faridabad</div>
              <div className={styles.cityCard}>Greater Noida</div>
            </div>
            <p className={styles.text}>
              We cover 100+ localities across these cities, ensuring that professional security 
              solutions are never far away. Whether you're in a residential area, commercial hub, 
              or industrial zone, we're here to help.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Secure Your Property?</h2>
            <p className={styles.ctaText}>
              Get in touch with us today for a free consultation and quote. Our team is ready to 
              help you find the perfect security solution.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButton}>
                Contact Us
              </Link>
              <a
                href={`tel:${BUSINESS_CONFIG.phone.replace(/\D/g, '')}`}
                className={styles.ctaButtonOutline}
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

