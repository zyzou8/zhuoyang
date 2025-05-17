import Layout from '../components/Layout';
import Link from 'next/link';

export default function Blog() {
  // Sample blog posts - you'll replace these with your actual blog content
  const blogPosts = [
    {
      id: 1,
      title: "Reflection of ReAct: Synergizing Reasoning and Acting in Language Models",
      date: "May 16, 2025",
      excerpt: "In this Post, I will discuss ReAct, short for Reasoning + Acting, represents a significant advancement in how language models approach complex tasks.",
      tags: ["LLM", "Multi-agent systems", "Research"]
    },
    {
      id: 2,
      title: "Reflection of Voyager: An Open-Ended Embodied Agent with Large Language Models",
      date: "May 17, 2025",
      excerpt: "Lifelong learning agent",
      tags: ["LLM", "Multi-agent systems", ",Memory","Research"]
    },
    // {
    //   id: 3,
    //   title: "Teaching AI Concepts to Undergraduate Students",
    //   date: "January 20, 2025",
    //   excerpt: "Reflections on my experience teaching AI fundamentals and open-source LLMs to undergraduate computer science students at Penn State.",
    //   tags: ["Education", "Teaching", "AI Fundamentals"]
    // }
  ];

  return (
    <Layout title="Blog - Zhuoyang Zou">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Blog</h1>
        
        <p className="text-lg mb-8">
          Welcome to my research blog, where I share thoughts, insights, and updates about my readings in AI, 
          multi-agent systems, and healthcare applications. Check back regularly for new content!
        </p>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition duration-300">
                  {post.title}
                </Link>
              </h2>
              <div className="text-gray-600 mb-3">{post.date}</div>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline font-medium">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-3">Subscribe to Updates</h2>
          <p className="mb-4">
            Enter your email to receive notifications when I publish new blog posts or research updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-2">
            I respect your privacy and will never share your email with third parties.
          </p>
        </div>
      </div>
    </Layout>
  );
}
