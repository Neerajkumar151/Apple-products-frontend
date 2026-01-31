import FooterPage from './FooterPage';
import { Users, User } from 'lucide-react';

export default function LeadershipPage() {
  const executives = [
    { name: 'Tim Cook', role: 'Chief Executive Officer', since: '2011' },
    { name: 'Luca Maestri', role: 'Senior Vice President, CFO', since: '2014' },
    { name: 'Jeff Williams', role: 'Chief Operating Officer', since: '2015' },
    { name: 'Eddy Cue', role: 'Senior Vice President, Services', since: '2011' },
    { name: 'Craig Federighi', role: 'Senior Vice President, Software Engineering', since: '2012' },
    { name: 'John Ternus', role: 'Senior Vice President, Hardware Engineering', since: '2021' },
  ];

  return (
    <FooterPage
      title="Apple Leadership"
      subtitle="Meet the people leading Apple forward."
      icon={<Users className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Executive Team
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {executives.map((exec) => (
                <div key={exec.name} className="flex items-center gap-4 p-4 bg-apple-gray-50 rounded-apple">
                  <div className="w-12 h-12 bg-apple-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-apple-gray-400" />
                  </div>
                  <div>
                    <p className="text-body font-semibold text-apple-gray-500">{exec.name}</p>
                    <p className="text-caption text-apple-gray-300">{exec.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Board of Directors
            </h2>
            <p className="text-body text-apple-gray-300">
              Apple's Board of Directors oversees the company's management and provides 
              guidance on strategic direction. The Board includes independent directors 
              with diverse backgrounds and expertise.
            </p>
          </div>
        </div>
      }
    />
  );
}
