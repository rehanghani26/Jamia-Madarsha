import React from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../../../components/PageContainer'

export default function PageNotFound() {
  return (
    <PageContainer
      title="صفحہ نہیں ملا (404)"
      subtitle="مطلوبہ صفحہ دستیاب نہیں ہے"
    >
      <div className="text-center py-12 space-y-6">
        <span className="text-[72px] block select-none">🔍</span>
        <h3 className="text-[24px] font-bold text-[#3A2C23]">
          معذرت! آپ کا مطلوبہ صفحہ موجود نہیں ہے یا اسے منتقل کر دیا گیا ہے۔
        </h3>
        <p className="text-[#666] text-[16px] max-w-[600px] mx-auto leading-relaxed">
          براہ کرم لنک کو دوبارہ چیک کریں، یا نیچے دیے گئے بٹن پر کلک کر کے ہوم پیج (صفحہ اول) پر واپس تشریف لے جائیں۔
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#8A6F52] text-white font-bold py-3 px-8 rounded shadow hover:bg-[#2F241C] transition-colors"
          >
            🏠 ہوم پیج پر واپس جائیں
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}
