'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Get In Touch With Us</h2>
        <p className="mt-2 text-sm text-gray-600">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Address</h3>
            <p className="mt-2 text-gray-600">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="mt-2 text-gray-600">
              Mobile: +(84) 546-6789<br />
              Hotline: +(84) 456-6789
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Working Time</h3>
            <p className="mt-2 text-gray-600">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="abc@mail.com"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
          <div>
            <textarea
              placeholder="Hi! I'd like to ask about"
              rows={4}
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-teal-500 px-6 py-3 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid gap-8 bg-gray-50 p-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M30.2534 13.1C30.2534 12.4925 30.0427 11.9023 29.6527 11.4272C29.2628 10.9522 28.7147 10.6185 28.1006 10.4725C27.4865 10.3265 26.8395 10.3763 26.2559 10.6147C25.6723 10.8531 25.1849 11.2672 24.8668 11.7947C24.5486 12.3221 24.4173 12.9355 24.4934 13.5399C24.5695 14.1443 24.8488 14.7082 25.2901 15.1475C25.7314 15.5869 26.3099 15.8786 26.9348 15.9797C27.5597 16.0808 28.2 15.9858 28.7667 15.7087L32.3334 19.2087V22.7087L28.7667 26.2087C28.1595 25.9137 27.4711 25.8216 26.8016 25.9453C26.132 26.069 25.5162 26.403 25.0435 26.8995C24.5708 27.396 24.2641 28.0276 24.1673 28.7043C24.0705 29.381 24.1877 30.0686 24.5034 30.6733C24.819 31.278 25.3186 31.7702 25.9322 32.0798C26.5458 32.3894 27.2408 32.5012 27.9208 32.4003C28.6007 32.2994 29.2316 31.9905 29.7251 31.5126C30.2186 31.0347 30.5484 30.4143 30.6667 29.7421C30.785 29.0699 30.6862 28.3775 30.3867 27.7654L34 24.2087V17.7087L30.3867 14.152C30.3334 13.8087 30.2534 13.4454 30.2534 13.1ZM14.6667 19.2087L18.2334 15.7087C18.7019 15.9223 19.2195 16.0215 19.7394 15.9975C20.2593 15.9735 20.7644 15.8271 21.2086 15.5713C21.6528 15.3156 22.0222 14.9583 22.2851 14.5295C22.548 14.1008 22.6963 13.6137 22.7167 13.1147C22.7371 12.6157 22.6289 12.1189 22.4011 11.6702C22.1733 11.2214 21.8332 10.8349 21.4121 10.5447C20.991 10.2545 20.5012 10.0691 19.9873 10.0033C19.4733 9.93744 18.9506 9.99274 18.4634 10.1645C17.9762 10.3363 17.5397 10.6195 17.1918 10.9904C16.844 11.3613 16.5954 11.8089 16.4691 12.2947C16.3427 12.7805 16.3425 13.2899 16.4683 13.7758C16.5942 14.2617 16.8423 14.7095 17.1897 15.0807L13.6667 18.5807V22.0807L17.2334 25.5807C16.6262 25.8757 16.1262 26.3377 15.7909 26.9061C15.4556 27.4744 15.3002 28.1253 15.3431 28.7786C15.386 29.4319 15.6253 30.0583 16.0299 30.5822C16.4346 31.1062 16.9871 31.5057 17.6167 31.7354C18.2464 31.9651 18.9273 32.0154 19.5843 31.8809C20.2413 31.7464 20.8463 31.4326 21.3289 30.9754C21.8115 30.5182 22.1514 29.9363 22.3102 29.2958C22.469 28.6553 22.4397 27.9827 22.2267 27.3587L25.6667 24.0087V17.9087L22.2267 14.5587C22.4397 13.9347 22.469 13.2621 22.3102 12.6216C22.1514 11.9811 21.8115 11.3992 21.3289 10.942C20.8463 10.4848 20.2413 10.171 19.5843 10.0365C18.9273 9.90199 18.2464 9.95227 17.6167 10.182C17.3934 10.2687 17.1734 10.3687 14.6667 12.7087V19.2087Z" fill="black"/>
              <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium">High Quality</h3>
          <p className="mt-2 text-sm text-gray-600">Crafted from top materials</p>
        </div>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 24L22 30L34 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium">Warranty Protection</h3>
          <p className="mt-2 text-sm text-gray-600">Over 2 years</p>
        </div>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 14H26C26.5304 14 27.0391 14.2107 27.4142 14.5858C27.7893 14.9609 28 15.4696 28 16V32C28 32.5304 27.7893 33.0391 27.4142 33.4142C27.0391 33.7893 26.5304 34 26 34H22C21.4696 34 20.9609 33.7893 20.5858 33.4142C20.2107 33.0391 20 32.5304 20 32V16C20 15.4696 20.2107 14.9609 20.5858 14.5858C20.9609 14.2107 21.4696 14 22 14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 18H32C32.5304 18 33.0391 18.2107 33.4142 18.5858C33.7893 18.9609 34 19.4696 34 20V28C34 28.5304 33.7893 29.0391 33.4142 29.4142C33.0391 29.7893 32.5304 30 32 30H28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 18H16C15.4696 18 14.9609 18.2107 14.5858 18.5858C14.2107 18.9609 14 19.4696 14 20V28C14 28.5304 14.2107 29.0391 14.5858 29.4142C14.9609 29.7893 15.4696 30 16 30H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium">24 / 7 Support</h3>
          <p className="mt-2 text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  )
}
