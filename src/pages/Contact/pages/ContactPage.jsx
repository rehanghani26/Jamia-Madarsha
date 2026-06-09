import React, { useState } from 'react'
import PageContainer from '../../../components/PageContainer'
import { CONTACT } from '../../../data/siteData'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.message) {
      alert('براہ کرم اپنا نام اور پیغام درج کریں۔')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
      alert('آپ کا پیغام موصول ہو گیا ہے۔ جزاک اللہ!')
    }, 1000)
  }

  return (
    <PageContainer
      title="رابطہ فارم اور معلومات"
      subtitle="جامعہ العلوم الاسلامیہ علامہ بنوری ٹاؤن گیا کے پتے اور روابط کی تفصیل"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-[22px] font-bold text-[#3A2C23] border-b pb-2">رابطہ کی تفصیلات</h3>
            <div className="space-y-4 text-[17px]">
              <div className="flex gap-3">
                <span className="text-[20px]">📍</span>
                <div>
                  <strong>پتہ:</strong>
                  <p className="text-[#555] mt-1">شاہراہِ بنوری، بنوری ٹاؤن، جمشید کوارٹرز، گیا، بہار، انڈیا۔</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[20px]">✉️</span>
                <div>
                  <strong>ڈاک کا پتہ:</strong>
                  <p className="text-[#555] font-sans mt-1">{CONTACT.poBox}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[20px]">📞</span>
                <div>
                  <strong>فون نمبر:</strong>
                  <p className="text-[#555] font-sans mt-1">{CONTACT.phone1} <br/> {CONTACT.phone2}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[20px]">📧</span>
                <div>
                  <strong>ای میل پتہ:</strong>
                  <p className="text-[#555] font-sans mt-1">{CONTACT.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 border border-[#D9D9D9] h-[220px] flex items-center justify-center rounded-sm overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#3D2E1E] opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="text-center p-4 z-10">
                <span className="text-[32px] block mb-2">🗺️</span>
                <span className="font-bold text-[#3A2C23]">گوگل نقشہ (گوگل میپ)</span>
                <p className="text-[13px] text-[#8A6F52] mt-1">شاہراہِ بنوری، بنوری ٹاؤن، گیا</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#fcfbf9] border border-[#EAE3CF] p-6 rounded-sm space-y-4">
            <h3 className="text-[22px] font-bold text-[#8A6F52] border-b pb-2">پیغام بھیجیں</h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-[16px]">
              <div>
                <label className="block font-bold text-[#3A2C23] mb-1">آپ کا نام: <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full border border-[#ccc] p-2 bg-white text-[#3A2C23] outline-none focus:border-[#8A6F52]"
                />
              </div>
              <div>
                <label className="block font-bold text-[#3A2C23] mb-1">ای میل پتہ:</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full border border-[#ccc] p-2 bg-white text-[#3A2C23] font-sans outline-none focus:border-[#8A6F52]"
                />
              </div>
              <div>
                <label className="block font-bold text-[#3A2C23] mb-1">موضوع:</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full border border-[#ccc] p-2 bg-white text-[#3A2C23] outline-none focus:border-[#8A6F52]"
                />
              </div>
              <div>
                <label className="block font-bold text-[#3A2C23] mb-1">پیغام: <span className="text-red-500">*</span></label>
                <textarea
                  required
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full border border-[#ccc] p-2 bg-white text-[#3A2C23] outline-none focus:border-[#8A6F52] resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-[#8A6F52] text-white py-2.5 font-bold hover:bg-[#2F241C] transition-colors rounded shadow-sm disabled:bg-gray-400"
              >
                {submitted ? 'ارسال ہو رہا ہے...' : 'ارسال کریں ✉️'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </PageContainer>
  )
}
