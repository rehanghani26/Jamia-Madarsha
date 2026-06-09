import React from 'react'
import PageContainer from '../../../components/PageContainer'
import { BOOKS } from '../../../data/siteData'

export default function Books() {
  return (
    <PageContainer
      title="مفید علمی و اصلاحی کتابیں"
      subtitle="جامعہ بنوری ٹاؤن کے اکابرین کی تحریر کردہ شاہکار کتب"
    >
      <div className="space-y-6">
        <p>
          جامعہ کا شعبہ تصنیف و تالیف علمی تحقیقی سرگرمیوں میں پیش پیش ہے۔ اکابرینِ جامعہ کی تحریر کردہ متعدد گرانقدر دینی، فقہی اور تعلیمی کتابیں مطالعہ کے لیے بلا معاوضہ فراہم کی جاتی ہیں۔
        </p>

        <h3 className="text-[22px] font-bold text-[#3A2C23] border-b pb-2">نمایاں کتب کا ذخیرہ</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="border border-[#D9D9D9] rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow bg-white text-center"
            >
              {/* Book cover representation */}
              <div
                style={{ background: book.gradient || 'linear-gradient(160deg, #3d2e1e 0%, #2f241c 100%)' }}
                className="h-[200px] flex items-center justify-center p-4 text-white font-bold text-[20px] select-none shadow-inner"
              >
                {book.title}
              </div>

              {/* Book Info */}
              <div className="p-4 bg-gray-50 border-t border-[#D9D9D9] flex flex-col gap-2">
                <span className="text-[17px] font-bold text-[#3A2C23]">{book.title}</span>
                <span className="text-[13px] text-[#8A6F52]">شعبہ نشر و اشاعت، جامعہ بنوری ٹاؤن</span>
                <button
                  onClick={() => alert(`"${book.title}" کا مطالعہ جلد ہی ویب سائٹ پر میسر ہوگا۔`)}
                  className="mt-2 bg-[#8A6F52] hover:bg-[#2F241C] text-white py-1.5 text-[14px] font-bold transition-colors shadow-sm"
                >
                  📖 مفت آن لائن پڑھیں
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  )
}
