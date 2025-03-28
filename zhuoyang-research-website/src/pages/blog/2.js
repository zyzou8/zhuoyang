import Layout from '../../components/Layout';
import Link from 'next/link';
import { getImagePath } from '../../utils/imagePath';

export default function BlogPost2() {
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/zhuoyang' : '';
  
  return (
    <Layout title="Medical Image Analysis with Deep Learning - Zhuoyang Zou's Blog">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <Link href={isProduction ? `${basePath}/blog/` : "/blog/"} className="text-blue-600 hover:underline flex items-center">
            ← Back to all posts
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Advancements in Medical Image Analysis with Deep Learning</h1>
        <div className="text-gray-600 mb-6">February 28, 2025</div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Medical AI</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Deep Learning</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CNN-RNN</span>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2>Deep Learning for Medical Imaging</h2>
          {/* <p>The application of deep learning to medical imaging has revolutionized how we diagnose and predict various conditions. Our work focuses specifically on radiation pneumonitis prediction from CT scans.</p>
          
          <h2>The iTox Model</h2>
          <p>We developed a CNN-RNN hybrid model that analyzes pre-treatment CT scans to predict the risk of developing radiation pneumonitis. The model achieved an AUC of 0.84 in our validation studies.</p>
          
          <h2>Grad-CAM Visualization</h2>
          <p>To enhance interpretability, we implemented Grad-CAM visualization techniques that highlight the regions of the lung that most influenced the model's prediction. This helps clinicians understand and trust the model's output.</p>
          
          <h2>Clinical Impact</h2>
          <p>By identifying patients at high risk for radiation pneumonitis before treatment begins, oncologists can modify radiation treatment plans to reduce the risk by up to 20% while maintaining therapeutic efficacy.</p> */}
        </div>
        
      </article>
    </Layout>
  );
}