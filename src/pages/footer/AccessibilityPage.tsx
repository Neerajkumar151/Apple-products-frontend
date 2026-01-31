import FooterPage from './FooterPage';
import { Eye, Ear, Hand, Brain } from 'lucide-react';

export default function AccessibilityPage() {
  const features = [
    { name: 'VoiceOver', description: 'Gesture-based screen reader', icon: Eye },
    { name: 'Switch Control', description: 'Navigate with switches', icon: Hand },
    { name: 'Closed Captions', description: 'For videos and audio', icon: Ear },
    { name: 'AssistiveTouch', description: 'Adaptive touch interface', icon: Hand },
  ];

  return (
    <FooterPage
      title="Accessibility"
      subtitle="Technology is most powerful when it empowers everyone."
      icon={<Brain className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Built-in accessibility features for everyone.
            </h2>
            <p className="text-body text-apple-gray-300 mb-6">
              Apple believes accessibility is a human right. That's why we design our products 
              with powerful built-in features for vision, hearing, mobility, and cognitive 
              accessibility — at no extra cost.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.name} className="bg-apple-gray-50 rounded-apple p-6">
                    <Icon className="w-8 h-8 text-apple-blue mb-3" />
                    <h3 className="text-body font-semibold text-apple-gray-500 mb-2">{feature.name}</h3>
                    <p className="text-caption text-apple-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Our Commitment
            </h2>
            <p className="text-body text-apple-gray-300 mb-4">
              We're constantly innovating to make our products more accessible. From VoiceOver 
              to Switch Control, from Magnifier to Sound Recognition, we build features that 
              help people with disabilities experience technology in their own way.
            </p>
            <p className="text-body text-apple-gray-300">
              Learn more about accessibility features at apple.com/accessibility
            </p>
          </div>
        </div>
      }
    />
  );
}
