import FooterPage from './FooterPage';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export default function EducationPage() {
  return (
    <FooterPage
      title="Education"
      subtitle="Empowering educators and students to change the world."
      icon={<GraduationCap className="w-16 h-16 text-apple-green mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Apple and Education
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              For over 40 years, Apple has worked with educators to transform how students 
              learn. We believe technology can help every student find their voice and 
              reach their full potential.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <GraduationCap className="w-10 h-10 text-apple-green mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">K-12</h3>
                <p className="text-caption text-apple-gray-300">
                  Tools for the classroom.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <BookOpen className="w-10 h-10 text-apple-blue mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Higher Ed</h3>
                <p className="text-caption text-apple-gray-300">
                  College essentials.
                </p>
              </div>
              <div className="text-center p-6 bg-apple-gray-50 rounded-apple">
                <Users className="w-10 h-10 text-apple-purple mx-auto mb-3" />
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Teachers</h3>
                <p className="text-caption text-apple-gray-300">
                  Resources for educators.
                </p>
              </div>
            </div>
          </div>

          <div className="content-item bg-gradient-to-br from-apple-green to-apple-teal text-white rounded-apple p-8">
            <h2 className="text-headline font-semibold mb-4">
              Education Pricing
            </h2>
            <p className="text-body text-white/70 mb-4">
              Students, teachers, and education staff can save on Mac and iPad with 
              education pricing. Verify your status to unlock special pricing.
            </p>
            <div className="bg-white/10 rounded-apple p-6">
              <p className="text-body font-medium">Save up to $200 on Mac</p>
              <p className="text-body font-medium">Save up to $100 on iPad</p>
              <p className="text-body font-medium">20% off AppleCare+</p>
            </div>
          </div>
        </div>
      }
    />
  );
}
