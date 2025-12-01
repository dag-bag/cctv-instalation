'use client';
import dynamic from 'next/dynamic';

const BookingFormClient = dynamic(() => import('./BookingForm'), { ssr: false });

export default BookingFormClient;
