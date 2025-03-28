
import Layout from '../../components/Layout';
import Link from 'next/link';
import { getImagePath } from '../../utils/imagePath';

export default function BlogPost1() {
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/zhuoyang' : '';
  
  return (
    <Layout title="Evaluating LLM Multi-Agent Systems - Zhuoyang Zou's Blog">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          {/* Fixed blog back link to use absolute path */}
          <a href={`${basePath}/blog/`} className="text-blue-600 hover:underline flex items-center">
            ← Back to all posts
          </a>
        </div>
        
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Evaluating LLM Multi-Agent Systems for Scientific Research</h1>
        <div className="text-gray-600 mb-6">March 15, 2025</div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">LLM</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Multi-agent systems</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Research</span>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2>TBC</h2>
          {/* <p>Large Language Models (LLMs) have proven to be powerful tools for various NLP tasks. In our research, we've been exploring how multiple LLM agents can collaborate to evaluate scientific research papers.</p> */}
{/*           
          <h2>Experimental Setup</h2>
          <p>We created a system with three different types of agents:</p>
          <ul>
            <li><strong>Critic Agent:</strong> Identifies potential weaknesses in methodology</li>
            <li><strong>Advocate Agent:</strong> Defends the paper's approach</li>
            <li><strong>Mediator Agent:</strong> Synthesizes feedback and generates final evaluation</li>
          </ul>
          
          <h2>Preliminary Results</h2>
          <p>Our early results show that this multi-agent approach identifies 27% more methodological issues than single-agent evaluations. The collaborative debate between agents leads to more nuanced feedback.</p>
          
          <p>The next phase of our research will focus on fine-tuning each agent for specific scientific domains such as computer vision, NLP, and bioinformatics.</p>
          
          <h2>Implementation Details</h2>
          <p>We implemented our system using a combination of GPT-4, Claude, and Llama models. Each agent was assigned a specific role and could communicate with other agents through a structured protocol. We found that diversity in the underlying models led to more robust evaluations.</p>
          
          <h2>Conclusion</h2>
          <p>Multi-agent LLM systems show significant promise for enhancing the scientific peer review process. By distributing cognitive tasks across specialized agents, we can create more thorough and balanced evaluations of research quality.</p> */}
        </div>
        
        {/* <div className="mt-12 pt-6 border-t">
          <h3 className="text-xl font-bold mb-4">Share this post</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">
              Twitter
            </a>
            <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded">
              LinkedIn
            </a>
          </div>
        </div> */}
      </article>
    </Layout>
  );
}