
import { useState } from 'react'

import logo from './assets/In.svg'

import './App.css'

function App() {

  // For Copping Code:
  const [copied, setCopied] = useState('')

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(''), 2000)
  }


  // For Tow's Info:
  const stepTwoCode = `"overrides": {
  "@tailwindcss/vite": {
    "vite": "$vite"
    }
  }`

  // For Six's Info:
  const stepSixCode = `import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
  plugins: [react(), tailwindcss()],
  })`

  return (
    <>

      {/* Full Page: */}
      <div className='bg-[#1D232A] border-4 border-x-cyan-300 space-y-5'>

        {/* Header Section: */}
        <div className='flex flex-col lg:flex-row justify-center items-center'>

          <div className='p-10 space-y-4'>
            <p className='text-blue-400 text-xl font-bold'>SETUP GUIDE - REACT PROJECT <br /> <span className='text-green-500'>If Your PowerShell Is Not Working You Can Use CMD</span>  </p>

            <p className='text-white text-4xl font-bold'>Vite + React + <br />
              <span className='text-blue-600'>Tailwind CSS</span> + DaisyUI</p>

            <p className='text-gray-500'>A precise, step-by-step walkthrough for wiring Tailwind CSS v4 and
              DaisyUl into a freshly scaffolded Vite React project - including the
              peer-dependency fix that most tutorials skip.</p>
          </div>

          <div className='flex gap-4 justify-center items-center'>
            <a href="https://www.linkedin.com/in/rakib-matubbar/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
              <img className='w-25 bg-white rounded-md' src={logo} alt="description" />
            </a>

            <a className='text-blue-600 text-xl hover:underline' href="https://www.linkedin.com/in/rakib-matubbar/?skipRedirect=true" target='-blank'>Visit My LinkedIn Profile.</a>
          </div>

        </div>

        <hr className='text-white' />

        {/* Step One: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              1
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'>Create the Vite Project</p>
              <p className='bg-[#00BAFE] px-4 font-bold rounded-full'>Terminal</p>
            </div>

            <p className='text-gray-400'>Run the Vite scaffolding CLI. When the interactive prompt appears choose: project name - React
              - JavaScript - y. Then open the generated folder in VS Code before continuing.</p>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center'>
              <p id='step-one-code'>npm create vite@latest</p>

              <p onClick={() => handleCopy('npm create vite@latest', 'one')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'one' ? 'Copied!' : 'Copy'}
              </p>
            </div>

          </div>

        </div>


        {/* Step Two: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              2
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'>Add overrides to <span className='text-blue-500'>package.json</span></p>
              <p className='bg-yellow-400 px-4 font-bold rounded-full'>Edit File</p>
            </div>

            <p className='text-gray-400'><span className='text-blue-400'>@tailwindcss/vite</span> bundles its own copy of Vite internally, which can collide with your project's
              version. The overrides field forces npm to reuse your project's Vite instance and eliminates the
              duplicate-package error.

              <br />

              Append the block below at the bottom of <span className='text-blue-400'>package. json</span>, just before the closing . Add a comma
              after the preceding property.</p>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center'>
              <pre id='step-two-code'>
                {`"overrides": {
  "@tailwindcss/vite": {
    "vite": "$vite"
  }
}`}
              </pre>

              <p onClick={() => handleCopy(stepTwoCode, 'two')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'two' ? 'Copied!' : 'Copy'}
              </p>
            </div>

          </div>

        </div>

        {/* Step Three: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              3
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'>Apply the ovverrides</p>
              <p className='bg-[#00BAFE] px-4 font-bold rounded-full'>Terminal</p>
            </div>

            <p className='text-gray-400'>Re-run <span className='text-blue-400'>npm install</span> so npm reads the updated <span className='text-blue-400'>overrides</span> field and rebuilds <span className='text-blue-400'>package-lock. json</span> with the corrected dependency tree.</p>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center'>
              <p id='step-three-code'>npm install</p>

              <p onClick={() => handleCopy('npm install', 'three')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'three' ? 'Copied!' : 'Copy'}
              </p>
            </div>

          </div>

        </div>

        {/* Step Four: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              4
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'>Install all three packages</p>
              <p className='bg-[#00BAFE] px-4 font-bold rounded-full'>Terminal</p>
            </div>

            <p className='text-gray-400'>Install Tailwind CSS v4, the official Vite plugin that compiles it at build time, and DaisyUI as
              component library. Pinning <span className='text-blue-400'>@latest</span> on each ensures you always get the newest stable release.</p>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center'>
              <p id='step-four-code'>npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest</p>

              <p onClick={() => handleCopy('npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest', 'four')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'four' ? 'Copied!' : 'Copy'}
              </p>
            </div>

          </div>

        </div>

        {/* Step Five: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              5
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'>Configure the CSS entry point</p>
              <p className='bg-yellow-400 px-4 font-bold rounded-full'>Edit File</p>
            </div>

            <p className='text-gray-400'>Open <span className='text-blue-400'>index.css or App.css</span> Replace its contents with the two directives below. The first loads the entire
              Tailwind CSS engine; the second registers DaisyUI as a CSS plugin so its component classes are
              available everywhere.</p>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center'>
              <p id='step-five-code'>@import "tailwindcss"; <br />
                @plugin "daisyui";</p>

              <p onClick={() => handleCopy(`
@import "tailwindcss";
@plugin "daisyui";`, 'five')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'five' ? 'Copied!' : 'Copy'}
              </p>
            </div>

          </div>

        </div>

        {/* Step Six: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              6
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'>Register the Vite plugin</p>
              <p className='bg-green-400 px-4 font-bold rounded-full'>Config</p>
            </div>

            <p className='text-gray-400'>Open <span className='text-blue-400'>vite.config.js</span> Import <span className='text-blue-400'>tailwindcss</span> from <span className='text-blue-400'>@tailwindcss/vite</span> and add it to the <span className='text-blue-400'>plugins</span> array. This tells Vite to run the Tailwind compiler as part of its build pipeline.</p>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center gap-2'>

              <div className='flex-1 min-w-0'>
                <pre id='step-six-code' className='whitespace-pre-wrap break-all text-sm'>
                  {`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}
                </pre>
              </div>

              <p onClick={() => handleCopy(stepSixCode, 'five')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'five' ? 'Copied!' : 'Copy'}
              </p>
            </div>

            <div className='bg-[#18213a] border-l-4 border-indigo-700 rounded-md p-4 flex gap-3 items-start'>
              <p className='text-red-400 text-sm'>
                <span className='text-blue-500 font-bold'>More Clear:</span>
                <br />
                import tailwindcss from '@tailwindcss/vite'  <span className='text-blue-500'>| ← new import</span>
                <br />
                plugins: [react(), tailwindcss()], <span className='text-blue-500'>| ← add tailwindcss()</span>
              </p>
            </div>

          </div>

        </div>

        {/* Step Seven: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              7
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'> <span className='text-blue-500'></span> Confirm the CSS import in <span className='text-blue-400'>main.jsx</span></p>
              <p className='bg-red-400 px-4 font-bold rounded-full'>Verify File</p>
            </div>

            <p className='text-gray-400'>Vite must see <span className='text-blue-400'>index.css</span> in the module graph to process it. The default scaffold already includes
              this line in <span className='text-blue-400'>src/main. jsx</span> just confirm it is present and not.</p>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center'>
              <p id='step-seven-code'>import './index.css'</p>
              <p className='text-black font-bold'>Optional - Just for check:</p>

              <p onClick={() => handleCopy("import './index.css'", 'seven')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'seven' ? 'Copied!' : 'Copy'}
              </p>
            </div>

          </div>

        </div>

        {/* Step Eight: */}
        <div className='w-10/12 mx-auto bg-[#171D22] p-4 rounded-md flex gap-4'>

          {/* Numbering: */}
          <div class="flex flex-col items-center">

            <div class="w-10 h-10 rounded-full bg-[#0b6ddc] border-2 border-indigo-500 flex items-center justify-center font-bold text-3xl text-black">
              8
            </div>

            <div class="w-0.5 h-full bg-indigo-900 mt-1"></div>

          </div>

          {/* Text: Code: */}
          <div className='space-y-5 flex-1 mb-6'>

            <div className='flex justify-between'>
              <p className='text-white font-bold'>Start the <span className='text-blue-400'>Dev Server</span>
              </p>
              <p className='bg-blue-400 px-4 font-bold rounded-full'>Terminal</p>
            </div>

            <div className='bg-[#175113] border-l-4 border-green-500 rounded-md p-4 flex gap-3 items-start'>

              <p className='text-gray-300 text-sm'>
                Quick sanity check : drop{' '}
                <code className='bg-[#5423ae] text-gray-200 px-1.5 py-0.5 rounded text-xs'>
                  &lt;button className="btn btn-primary"&gt;Hello&lt;/button&gt;
                </code>{' '}
                into{' '}
                <code className='bg-[#2d2d2d] text-gray-200 px-1.5 py-0.5 rounded text-xs'>App.jsx</code>
                . If a styled DaisyUI button appears, the setup is complete and working correctly.

                <br />
                <br />
                <p className='text-blue-400'>Now you can use Tailwindcss | daisyUI : For Checking...</p>
              </p>

            </div>

            <div class="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 rounded-lg w-fit">
              <span class="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></span>
              <span class="w-3.5 h-3.5 rounded-full bg-[#28c840]"></span>
            </div>

            <div className='text-white bg-gray-500 rounded-md p-4 flex justify-between items-center'>
              <p id='step-eight-code'>npm run dev</p>

              <p onClick={() => handleCopy("npm run dev", 'eight')}
                className='bg-[#1D232A] p-1 rounded-md cursor-pointer'>
                {copied === 'eight' ? 'Copied!' : 'Copy'}
              </p>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default App
