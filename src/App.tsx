/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DemoShowcase } from './components/DemoShowcase';
import { AnimationShowcase } from './components/AnimationShowcase';
import { DemoPreviewModal } from './components/DemoPreviewModal';
import { FeedbackModal } from './components/FeedbackModal';
import { ShareModal } from './components/ShareModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import {
  INITIAL_DEMOS,
  DemoWebsite,
  CustomerEnquiry,
  FeedbackEntry,
} from './data/portfolioData';

export default function App() {
  // State for Demos with localStorage backup
  const [demos, setDemos] = useState<DemoWebsite[]>(() => {
    try {
      const stored = localStorage.getItem('althaf_demos_v1');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_DEMOS;
  });

  // State for Liked Demo IDs
  const [likedDemoIds, setLikedDemoIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem('althaf_liked_demos');
      if (stored) return new Set(JSON.parse(stored));
    } catch (e) {
      console.error(e);
    }
    return new Set<string>();
  });

  // Modals & Navigation state
  const [activePreviewDemo, setActivePreviewDemo] = useState<DemoWebsite | null>(null);
  const [activeFeedbackDemo, setActiveFeedbackDemo] = useState<DemoWebsite | null>(null);
  const [activeShareDemo, setActiveShareDemo] = useState<DemoWebsite | null>(null);
  const [selectedDemoForContact, setSelectedDemoForContact] = useState<string>('Modern Furniture Store');
  const [toastNotification, setToastNotification] = useState<string | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('althaf_demos_v1', JSON.stringify(demos));
    } catch (e) {
      console.error(e);
    }
  }, [demos]);

  useEffect(() => {
    try {
      localStorage.setItem('althaf_liked_demos', JSON.stringify(Array.from(likedDemoIds)));
    } catch (e) {
      console.error(e);
    }
  }, [likedDemoIds]);

  const showToast = (message: string) => {
    setToastNotification(message);
    setTimeout(() => setToastNotification(null), 3500);
  };

  // Scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Liking a demo
  const handleLikeDemo = (demoId: string) => {
    const alreadyLiked = likedDemoIds.has(demoId);
    const newLiked = new Set(likedDemoIds);

    if (alreadyLiked) {
      newLiked.delete(demoId);
      setDemos((prev) =>
        prev.map((d) => (d.id === demoId ? { ...d, likes: Math.max(0, d.likes - 1) } : d))
      );
      showToast('Removed like');
    } else {
      newLiked.add(demoId);
      setDemos((prev) =>
        prev.map((d) => (d.id === demoId ? { ...d, likes: d.likes + 1 } : d))
      );
      showToast('❤️ Thank you for liking this design!');
    }
    setLikedDemoIds(newLiked);
  };

  // Handle viewing demo (increments view count)
  const handleViewDemo = (demo: DemoWebsite) => {
    setDemos((prev) =>
      prev.map((d) => (d.id === demo.id ? { ...d, views: d.views + 1 } : d))
    );
    setActivePreviewDemo({ ...demo, views: demo.views + 1 });
  };

  // Handle "Choose This Design"
  const handleChooseDesign = (demo: DemoWebsite) => {
    setSelectedDemoForContact(demo.name);
    scrollToSection('contact');
    showToast(`Selected "${demo.name}". Please fill your project contact details.`);
  };

  // Handle Selecting a service
  const handleSelectService = (serviceName: string) => {
    setSelectedDemoForContact(`Custom Service: ${serviceName}`);
    scrollToSection('contact');
    showToast(`Inquiring for "${serviceName}". Contact form ready.`);
  };

  // Handle Submitting Feedback
  const handleSubmitFeedback = (feedbackData: Omit<FeedbackEntry, 'id' | 'createdAt'>) => {
    if (feedbackData.demoId) {
      setDemos((prev) =>
        prev.map((d) => {
          if (d.id === feedbackData.demoId) {
            const newCount = d.reviewsCount + 1;
            const newAvg = Number(((d.rating * d.reviewsCount + feedbackData.rating) / newCount).toFixed(1));
            return {
              ...d,
              reviewsCount: newCount,
              rating: newAvg,
            };
          }
          return d;
        })
      );
    }
    showToast('Your rating and review has been recorded!');
  };

  // Handle Submitting Enquiry
  const handleSubmitEnquiry = (enquiryData: Omit<CustomerEnquiry, 'id' | 'createdAt' | 'status'>) => {
    showToast('Enquiry received! ALTHAF will contact you shortly.');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-blue-600/15 selection:text-blue-700">
      {/* Toast Notification */}
      {toastNotification && (
        <div className="fixed top-20 right-6 z-50 px-4 py-3 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-2 animate-bounce border bg-white border-blue-300 text-slate-900 shadow-slate-300/80">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>{toastNotification}</span>
        </div>
      )}

      {/* Sticky Navigation */}
      <Navbar onStartProject={() => scrollToSection('contact')} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (White Theme, 3D interactive tilt mockup, live typing, NO PHOTO) */}
        <HeroSection
          onExploreDemos={() => scrollToSection('demos')}
          onContactAlthaf={() => scrollToSection('contact')}
          onOpenDemo={(demoId) => {
            const found = demos.find((d) => d.id === demoId);
            if (found) handleViewDemo(found);
          }}
        />

        {/* 2. Interactive Demo Showcase (White Theme, Vector Mockups, NO PHOTO) */}
        <DemoShowcase
          demos={demos}
          onViewDemo={handleViewDemo}
          onChooseDesign={handleChooseDesign}
          onLikeDemo={handleLikeDemo}
          likedDemoIds={likedDemoIds}
        />

        {/* 3. Interactive Web Animation Showcase (Attracts More, NO VIDEO) */}
        <AnimationShowcase />

        {/* 4. Specialized Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Why Choose ALTHAF */}
        <WhyChooseSection />

        {/* 6. 5-Phase Process Timeline */}
        <ProcessSection />

        {/* 7. About ALTHAF (Experience, Tech Stack, Clean Code, NO PHOTO) */}
        <AboutSection onContactAlthaf={() => scrollToSection('contact')} />

        {/* 8. Contact & Project Enquiry Section */}
        <ContactSection
          selectedDemoName={selectedDemoForContact}
          demos={demos}
          onSubmitEnquiry={handleSubmitEnquiry}
        />
      </main>

      {/* Footer (White Theme, ALTHAF Branding, NO Admin Link) */}
      <Footer />

      {/* Floating Action Buttons (Instant WhatsApp Chat, Contact Me) */}
      <FloatingActions onOpenContact={() => scrollToSection('contact')} />

      {/* Modals & Overlays */}
      {/* 1. Demo Preview Modal */}
      <DemoPreviewModal
        demo={activePreviewDemo}
        isOpen={!!activePreviewDemo}
        onClose={() => setActivePreviewDemo(null)}
        onChooseDesign={handleChooseDesign}
        onLikeDemo={handleLikeDemo}
        isLiked={activePreviewDemo ? likedDemoIds.has(activePreviewDemo.id) : false}
        onOpenFeedback={(demo) => setActiveFeedbackDemo(demo)}
        onOpenShare={(demo) => setActiveShareDemo(demo)}
      />

      {/* 2. Feedback Modal */}
      <FeedbackModal
        demo={activeFeedbackDemo}
        isOpen={activeFeedbackDemo !== null}
        onClose={() => setActiveFeedbackDemo(null)}
        onSubmitFeedback={handleSubmitFeedback}
      />

      {/* 3. Social Share Modal */}
      <ShareModal
        demo={activeShareDemo}
        isOpen={activeShareDemo !== null}
        onClose={() => setActiveShareDemo(null)}
      />
    </div>
  );
}
