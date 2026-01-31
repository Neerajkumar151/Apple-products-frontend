import FooterPage from './FooterPage';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';

export default function NewsroomPage() {
  const recentNews = [
    { title: 'Apple introduces new MacBook Pro featuring M3 chips', date: 'October 30, 2023' },
    { title: 'Apple unveils new iPhone 15 lineup', date: 'September 12, 2023' },
    { title: 'Apple announces Apple Watch Series 9', date: 'September 12, 2023' },
    { title: 'Apple introduces new iPad Air with M1 chip', date: 'March 8, 2022' },
  ];

  return (
    <FooterPage
      title="Newsroom"
      subtitle="The latest news from Apple."
      icon={<Newspaper className="w-16 h-16 text-apple-blue mx-auto" />}
      content={
        <div className="space-y-8">
          <div className="content-item bg-white rounded-apple p-8 shadow-apple">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Latest News
            </h2>
            <div className="space-y-4">
              {recentNews.map((news, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-apple-gray-50 rounded-apple hover:bg-apple-gray-100 transition-colors cursor-pointer">
                  <Calendar className="w-5 h-5 text-apple-gray-300 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-body font-medium text-apple-gray-500">{news.title}</p>
                    <p className="text-caption text-apple-gray-300">{news.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-apple-gray-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="content-item bg-apple-gray-50 rounded-apple p-8">
            <h2 className="text-headline font-semibold text-apple-gray-500 mb-4">
              Media Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Press Contacts</h3>
                <p className="text-caption text-apple-gray-300">
                  Contact our media relations team.
                </p>
              </div>
              <div className="bg-white rounded-apple p-6">
                <h3 className="text-body font-semibold text-apple-gray-500 mb-2">Image Library</h3>
                <p className="text-caption text-apple-gray-300">
                  Download official product images.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
