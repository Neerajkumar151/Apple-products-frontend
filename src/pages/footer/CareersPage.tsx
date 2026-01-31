import FooterPage from './FooterPage';
import { Briefcase, Globe, Heart, Zap } from 'lucide-react';

export default function CareersPage() {
  const benefits = [
    { name: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision coverage', icon: Heart },
    { name: 'Work-Life Balance', description: 'Flexible work arrangements and generous time off', icon: Globe },
    { name: 'Financial Benefits', description: 'Competitive salaries, 401(k), and stock grants', icon: Briefcase },
    { name: 'Learning & Development', description: 'Continuous learning opportunities', icon: Zap },
  ];

  return (
    <FooterPage
      title="Career Opportunities"
      subtitle="Join us in changing the world."
      icon={<Briefcase className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Work at Apple
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Join a team of innovators, dreamers, and doers. At Apple, you'll work on 
              products that touch billions of lives around the world. We believe in the 
              power of diversity and inclusion to drive innovation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.name} className="bg-apple-gray-50 rounded-apple p-6">
                    <Icon className="w-8 h-8 text-apple-blue mb-3" />
                    <h3 className="text-body font-semibold text-apple-gray-500 mb-2">{benefit.name}</h3>
                    <p className="text-caption text-apple-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Open Positions
            </h2>
            <div className="space-y-3">
              {['Software Engineering', 'Hardware Engineering', 'Design', 'Marketing', 'Operations', 'Retail'].map((dept) => (
                <div key={dept} className="bg-white rounded-apple p-4 flex justify-between items-center">
                  <span className="text-body text-apple-gray-500">{dept}</span>
                  <span className="text-caption text-apple-blue">View openings →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
