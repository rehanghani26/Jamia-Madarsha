import React from 'react'
import PageContainer from '../../../components/PageContainer'
import { ARTICLES } from '../../../data/siteData'

export default function Bayyinat() {
  return (
    <PageContainer
      title="ماہنامہ بینات"
      subtitle="جامعہ العلوم الاسلامیہ بنوری ٹاؤن کا ترجمانِ علمی و اصلاحی مجلہ"
    >
      <div className="space-y-6">
        <p>
          "بینات" جامعہ کا ترجمان اور ایک علمی، تحقیقی، دینی اور تربیتی مجلہ ہے، جو ہر اسلامی مہینے کے آغاز میں شائع ہوتا ہے۔ اس کی بنیاد بانی جامعہ علامہ سید محمد یوسف بنوری رحمہ اللہ نے سنہ 1962ء میں رکھی تھی تاکہ دین کے پیغام اور قرآن و سنت کی سچی تشریحات کو پڑھے لکھے طبقے تک عام کیا جا سکے۔
        </p>

        <h3 className="text-[22px] font-bold text-[#3A2C23] border-b pb-2">تازہ ترین شمارے کے منتخب مضامین</h3>
        
        <div className="space-y-3 my-6">
          {ARTICLES.map((art) => (
            <div key={art.id} className="bg-[#fcfbf9] border border-[#EAE3CF] p-4 rounded-sm hover:border-[#8A6F52] transition-colors cursor-pointer flex justify-between items-center">
              <span className="font-bold text-[#3A2C23] text-[17px]">{art.title}</span>
              <span className="text-[#8A6F52] text-[14px]">مضمون پڑھیں 🗎</span>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] font-bold text-[#3A2C23] border-b pb-2">بینات کے مستقل کالم اور شعبہ جات</h3>
        <ul className="list-disc list-inside space-y-2 pr-4 text-[17px]">
          <li><strong>اشارات (اداریہ):</strong> عصری فتنوں اور عالمی مسائل پر مفصل شرعی تبصرہ۔</li>
          <li><strong>تفسیر و حدیث:</strong> ائمہ سلف کے معتبر اقوال کی روشنی میں قرآن و حدیث کا فہم۔</li>
          <li><strong>فتاویٰ:</strong> دارالافتاء بنوری ٹاؤن کی طرف سے جاری کردہ منتخب فتاویٰ کی عام فہم تشریح۔</li>
          <li><strong>وفیات و سوانح:</strong> سلف صالحین اور وفات پا جانے والے اکابرینِ امت کے حالاتِ زندگی۔</li>
        </ul>

        <div className="text-center pt-6">
          <button
            onClick={() => alert('سالانہ خریدار بننے کا فارم ڈیمو ورژن میں غیر فعال ہے۔')}
            className="bg-[#8A6F52] text-white py-3 px-6 text-[16px] font-bold hover:bg-[#2F241C] transition-colors"
          >
            ✍️ سالانہ خریدار بنیں (پرنٹڈ کاپی گھر منگوائیں)
          </button>
        </div>
      </div>
    </PageContainer>
  )
}
