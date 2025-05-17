import Layout from '../../components/Layout';
import Link from 'next/link';
import { getImagePath } from '../../utils/imagePath';

export default function BlogPost1() {
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/zhuoyang' : '';
  
  return (
    <Layout title="Voyager: An Open-Ended Embodied Agent with Large Language Models">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          {/* Fixed blog back link to use absolute path */}
          <a href={`${basePath}/blog/`} className="text-blue-600 hover:underline flex items-center">
            ← Back to all posts
          </a>
        </div>
        
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Voyager: When an AI Figures Out Minecraft All By Itself</h1>
        <div className="text-gray-600 mb-6">May 17, 2025</div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Self-Driven Exploration</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">LLMs</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI Agents</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Minecraft</span>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4">From ReAct to Minecraft: Why This Matters</h2>
          
          <p>
            So why am I jumping from ReAct to talking about an AI playing Minecraft? Because Voyager is where the rubber meets the road—it's that awesome moment when all that theoretical "thinking and acting" stuff we discussed actually comes alive in a real-world sandbox!
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="italic">
              "Imagine dropping a toddler into Minecraft with no instructions and watching them figure out not just how to survive, but how to thrive—that's basically what Voyager does, except it's an AI!"
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">What Makes Voyager Cool?</h2>
          
          <p>
            Voyager is an AI agent that learns to play Minecraft completely on its own—no human holding its hand, no pre-programmed goals, just pure exploration and discovery. And let's be real, Minecraft is the perfect testing ground because:
          </p>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>It's an open world with endless possibilities (like building a diamond pickaxe or creating a nether portal)</li>
            <li>There's no tutorial or fixed path (unlike most games where you just follow the yellow brick road)</li>
            <li>It requires both short-term actions and long-term planning (try building that epic castle without planning!)</li>
            <li>Even humans can take <em>hours</em> to figure out the basics (remember your first night trying to avoid creepers?)</li>
          </ul>
          
          <div className="bg-blue-50 p-5 rounded-lg my-6">
            <h3 className="text-xl font-medium text-blue-700 mb-3">Voyager's Secret Sauce: The Three-Part System</h3>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-white p-4 rounded shadow-sm flex-1">
                <h4 className="font-bold text-lg mb-2">The Planner</h4>
                <p>Creates its own curriculum and goals based on what it currently knows, has, and sees. Like saying "Hmm, I have wood but no tools... I should make a crafting table next!"</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm flex-1">
                <h4 className="font-bold text-lg mb-2">The Coder</h4>
                <p>Writes actual code to perform actions in the game, tests if it works, fixes bugs, and tries again until successful. It's basically debugging on the fly!</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm flex-1">
                <h4 className="font-bold text-lg mb-2">The Library</h4>
                <p>Stores successful skills for future use. So once it learns to chop trees, it never has to relearn it—just like how we don't have to relearn riding a bike.</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">How It Actually Works (The Cool Details)</h2>
          
          <p>
            Let's peek under the hood to see how Voyager operates in practice:
          </p>
          
          <h3 className="text-xl font-medium mt-5 mb-3">Step 1: "What should I do next?" (Automatic Curriculum)</h3>
          
          <p>
            Unlike most AI that needs humans to set goals, Voyager looks around and decides for itself. It might think:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md my-4 border border-gray-200">
            <p className="italic text-gray-700">
              "I see trees nearby. I have no tools. It's getting dark. I should probably:
              <br />1. Collect wood
              <br />2. Make a crafting table
              <br />3. Build a shelter before nightfall"
            </p>
          </div>
          
          <p>
            This is huge! Instead of completing pre-defined tasks, it's figuring out what makes sense to do next based on its current situation—just like we do.
          </p>
          
          <h3 className="text-xl font-medium mt-5 mb-3">Step 2: "Let me try this..." (Iterative Prompting)</h3>
          
          <p>
            Once Voyager decides on a task, it actually writes Python code to execute the actions in Minecraft. But here's where it gets really interesting—when the code fails (and it often does), Voyager:
          </p>
          
          <ol className="list-decimal pl-6 my-4 space-y-2">
            <li>Sees the error message (like "Can't craft without materials")</li>
            <li>Understands what went wrong</li>
            <li>Rewrites the code to fix the issue</li>
            <li>Tries again until it works</li>
          </ol>
          
          <p>
            This trial-and-error approach mirrors how humans learn through practice and failure. It's not just executing perfect code—it's learning from mistakes.
          </p>
          
          <h3 className="text-xl font-medium mt-5 mb-3">Step 3: "I'll remember this for later" (Skill Library)</h3>
          
          <p>
            The real magic happens in the skill library. When Voyager successfully completes a task like "craft a wooden pickaxe," it saves that code as a reusable skill. Later, when it needs to craft something else, it doesn't start from scratch—it retrieves relevant skills and adapts them.
          </p>
          
          <p>
            This is exactly how human expertise develops! We don't relearn how to hold a hammer every time we need to build something new.
          </p>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-md my-6">
            <h4 className="font-bold text-green-800 mb-2">Skill Evolution Example:</h4>
            <p className="mb-2"><strong>Early Game:</strong> "mine_wood" → "craft_planks" → "make_crafting_table" → "craft_wooden_pickaxe"</p>
            <p className="mb-2"><strong>Mid Game:</strong> "mine_stone" → "craft_furnace" → "smelt_iron" → "craft_iron_tools"</p>
            <p><strong>Late Game:</strong> "find_diamonds" → "craft_diamond_gear" → "build_nether_portal" → "defeat_ender_dragon"</p>
          </div>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">The Challenges (Because Nothing's Perfect)</h2>
          
          <p>
            Despite how cool Voyager is, it still faces some pretty significant hurdles:
          </p>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Expensive to run</strong> - All that thinking and coding requires serious computational power</li>
            <li><strong>Gets stuck in loops</strong> - Sometimes it tries the same failing approach over and over</li>
            <li><strong>Sets impossible goals</strong> - Like trying to mine diamonds with a wooden pickaxe (which any Minecraft player knows is impossible)</li>
            <li><strong>Memory management</strong> - As the skill library grows, how does it efficiently find the right skills without searching through thousands?</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Why I'm Excited About This</h2>
          
          <p>
            Voyager isn't just a cool Minecraft bot—it's a glimpse into how AI agents might learn to navigate complex, open-ended environments without constant human supervision. The ablation studies in the paper clearly show that the skill library dramatically improves exploration ability, which confirms something intuitive: memory and past experience are crucial for learning.
          </p>
          
          <p>
            What fascinates me most is how the three components—planning, acting, and remembering—mirror human cognition. We plan what to do based on our situation, we act and adjust based on feedback, and we store successful approaches for future use.
          </p>
          
          <p>
            One thing I'm still curious about: how does Voyager handle retrieval when the skill library gets massive? The paper doesn't dive deep into this, but it's a critical question as the agent continues learning. Do less-used skills get "forgotten"? Is there a priority system? This feels like an important next step for research.
          </p>
          
          <div className="bg-blue-50 p-5 rounded-lg my-6">
            <h3 className="text-xl font-medium text-blue-700 mb-3">The Big Takeaway</h3>
            <p className="text-lg">
              Voyager shows us that with the right architecture, AI can teach itself to master complex environments through a cycle of planning, acting, observing, and remembering—much like humans do. And that's pretty mind-blowing when you think about it.
            </p>
          </div>
          
        </div>
        
      </article>
    </Layout>
  );
}