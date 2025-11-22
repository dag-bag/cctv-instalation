import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { city, locality, service } = body;

  const formattedCity = formatText(city);
  const formattedLocality = formatText(locality);
  const formattedService = formatText(service);

  // Simulate "AI" generation with advanced templates
  const content = generateRichContent(formattedCity, formattedLocality, formattedService);

  return NextResponse.json(content);
}

function formatText(text: string) {
  if (!text) return '';
  return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateRichContent(city: string, locality: string, service: string) {
  const serviceLower = service.toLowerCase();
  
  return {
    title: `${service} in ${locality}, ${city} | Expert Services`,
    metaDescription: `Looking for ${service} in ${locality}, ${city}? We provide professional, affordable, and reliable ${serviceLower} services. Call now for a free quote!`,
    heroHeading: `Professional ${service} in ${locality}`,
    heroSubheading: `Secure your property in ${city} with our top-rated ${serviceLower} solutions. Fast, reliable, and affordable.`,
    
    comprehensiveContent: `
      <div class="content-block">
        <h3>Why Choose Us for ${service} in ${locality}?</h3>
        <p>
          Finding a reliable provider for <strong>${service}</strong> in <strong>${locality}, ${city}</strong> can be a daunting task. 
          We understand the unique security challenges faced by residents and businesses in ${locality}. 
          Our team of certified technicians is dedicated to providing top-tier ${serviceLower} services that guarantee peace of mind.
        </p>
        <p>
          Whether you are looking to upgrade your existing security system or install a brand new one, we have the expertise to handle it all. 
          We use the latest technology to ensure that your property in ${city} is protected 24/7.
        </p>
      </div>

      <div class="content-block">
        <h3>Our Comprehensive ${service} Process</h3>
        <p>We follow a strict protocol to ensure the best results for our clients in ${locality}:</p>
        <ul>
          <li><strong>Site Assessment:</strong> We visit your property in ${locality} to understand your specific needs.</li>
          <li><strong>Custom Solution Design:</strong> We design a ${serviceLower} plan tailored to your layout and budget.</li>
          <li><strong>Professional Installation:</strong> Our experts install the system with minimal disruption to your daily routine.</li>
          <li><strong>Training & Support:</strong> We guide you on how to use the system and provide ongoing support.</li>
        </ul>
      </div>

      <div class="content-block">
        <h3>Serving All Areas in ${city}</h3>
        <p>
          While we specialize in <strong>${locality}</strong>, our services extend across the entire ${city} region. 
          We are the go-to choice for ${serviceLower} because of our commitment to quality and customer satisfaction.
          Don't compromise on safety – choose the best ${service} provider in ${formattedText(city)}.
        </p>
      </div>
    `,
    
    faq: [
      {
        question: `Do you provide ${service} in ${locality}?`,
        answer: `Yes, we provide comprehensive ${service} services specifically in ${locality} and surrounding areas of ${city}.`
      },
      {
        question: `What is the cost of ${service} in ${city}?`,
        answer: `The cost varies based on your specific requirements. However, we offer competitive pricing for all our clients in ${locality}. Contact us for a free quote.`
      },
      {
        question: `How soon can you start the work in ${locality}?`,
        answer: `We have a local team in ${city} ready to be deployed. In most cases, we can start the work within 24-48 hours of your booking.`
      },
      {
        question: `Do you offer a warranty on ${service}?`,
        answer: `Absolutely! All our installations and repairs come with a standard warranty on both parts and labor.`
      }
    ]
  };
}

function formattedText(text: string) {
    return text;
}
