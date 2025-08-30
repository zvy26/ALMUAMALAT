import React from "react"


export default function Talk() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap- lg:gap-24">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {"Let's Talk"}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have some big idea or brand to develop and need help?
                <br />
                Then reach out {"we'd"} love to hear about your project and
                <br />
                provide help
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Email</h2>
              <p className="text-gray-600">beebs@gmail.com</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Socials</h2>
              <div className="space-y-2">
                <a 
                  href="#" 
                  className="block text-gray-600 hover:text-teal-600 underline transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="block text-gray-600 hover:text-teal-600 underline transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href="#" 
                  className="block text-gray-600 hover:text-teal-600 underline transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="relative left-10 bg-white p-2 ">
            <form className="space-y-6 ">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                  What service are you interested in
                </label>
                <select 
                  id="service"
                  className="w-full px-3 py-2 bg-gray-100 text-gray-600  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                >
                  <option value="">Select project type</option>
                  <option value="web-design">Web Design</option>
                  <option value="branding">Branding</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-2">
                  Budget
                </label>
                <select 
                  id="budget"
                  className="w-full px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600"
                >
                  <option value="">Select project budget</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over-50k">Over $50,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600 min-h-[120px] resize-vertical"
                  placeholder=""
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-md text-base transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
