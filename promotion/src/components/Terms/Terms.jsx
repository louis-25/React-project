import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './Terms.module.css'
import { useTranslation } from 'react-i18next'

function Terms(props) {
  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')

  return (
    <>
    <Header></Header>
    <div className={`${style.content} ${style.privacy} ${style.body}`}>
    <section>
      <div className={style.inner}>
        <h2>{t('terms_title')}</h2>
        <p>(Last updated on November 1, 2020)</p>
        <ul>
          <li>
            <h3>{t('terms_sub_title1')}</h3>
            <ul>
              <li>
                <h4>{t('terms_sub_title1-1')}</h4>
                <p>{t('terms_sub_title1-1_content')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title1-2')}</h4>
                <p>{t('terms_sub_title1-2_content1')}</p>
                <ul>
                  <li>
                    <p>{t('terms_sub_title1-2_content2')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content3')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content4')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content5')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content6')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content7')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content8')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content9')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title1-2_content10')}</p>
                  </li>
                </ul>
              </li>
              <li>
                <h4>{t('terms_sub_title1-3')}</h4>
                <p>{t('terms_sub_title1-3_content1')}</p>
                <p>{t('terms_sub_title1-3_content2')}</p>
                <p>{t('terms_sub_title1-3_content3')}</p>
                <p>{t('terms_sub_title1-3_content4')}</p>
                <p>{t('terms_sub_title1-3_content5')}</p>
                <p>{t('terms_sub_title1-3_content6')}</p>
                <p>{t('terms_sub_title1-3_content7')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title1-4')}</h4>
                <p>{t('terms_sub_title1-4_content1')}</p>
                <p>{t('terms_sub_title1-4_content2')}</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>{t('terms_sub_title2')}</h3>
            <ul>
              <li>
                <h4>{t('terms_sub_title2-5')}</h4>
                <p>{t('terms_sub_title2-5_content1')}</p>
                <p>{t('terms_sub_title2-5_content2')}</p>
                <p>{t('terms_sub_title2-5_content3')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title2-6')}</h4>
                <p>{t('terms_sub_title2-6_content1')}</p>
                <ul>
                  <li>
                    <p>{t('terms_sub_title2-6_content2')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-6_content3')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-6_content4')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-6_content5')}</p>
                  </li>
                </ul>
                <p>{t('terms_sub_title2-6_content6')}</p>
                <p>{t('terms_sub_title2-6_content7')}</p>
                <ul>
                  <li>
                    <p>{t('terms_sub_title2-6_content8')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-6_content9')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-6_content10')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-6_content11')}</p>
                  </li>
                </ul>
                <p>{t('terms_sub_title2-6_content12')}</p>
                <p>{t('terms_sub_title2-6_content13')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title2-7')}</h4>
                <p>{t('terms_sub_title2-7_content1')}</p>
                <p>{t('terms_sub_title2-7_content2')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title2-8')}</h4>
                <p>{t('terms_sub_title2-8_content1')}</p>
                <p>{t('terms_sub_title2-8_content2')}</p>
                <p>{t('terms_sub_title2-8_content3')}</p>
                <p>{t('terms_sub_title2-8_content4')}</p>
                <p>{t('terms_sub_title2-8_content5')}</p>
                <p>{t('terms_sub_title2-8_content6')}</p>
                <ul>
                  <li>
                    <p>{t('terms_sub_title2-8_content7')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-8_content8')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title2-8_content9')}</p>
                  </li>
                </ul>
                <p>{t('terms_sub_title2-8_content10')}</p>              
                <p>{t('terms_sub_title2-8_content11')}</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>{t('terms_sub_title3')}</h3>
            <ul>
              <li>
                <h4>{t('terms_sub_title3-9')}</h4>
                <p>{t('terms_sub_title3-9_content1')}</p>
                <ul>
                  <li>
                    <p>{t('terms_sub_title3-9_content2')}</p>
                  </li>
                </ul>
                <p>{t('terms_sub_title3-9_content3')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title3-10')}</h4>
                <p>{t('terms_sub_title3-10_content1')}</p>
                <p>{t('terms_sub_title3-10_content2')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title3-11')}</h4>
                <p>{t('terms_sub_title3-11_content1')}</p>
                <p>{t('terms_sub_title3-11_content2')}</p>
                <ul>
                  <li>
                    <p>{t('terms_sub_title3-11_content3')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title3-11_content4')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title3-11_content5')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title3-11_content6')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title3-11_content7')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title3-11_content8')}</p>
                  </li>
                </ul>
                <p>{t('terms_sub_title3-11_content9')}</p>
                <p>{t('terms_sub_title3-11_content10')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title3-12')}</h4>
                <p>{t('terms_sub_title3-12_content1')}</p>
                <p>{t('terms_sub_title3-12_content2')}</p>
                <p>{t('terms_sub_title3-12_content3')}</p>
                <p>{t('terms_sub_title3-12_content4')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title3-13')}</h4>
                <p>{t('terms_sub_title3-13_content1')}</p>
                <p>{t('terms_sub_title3-13_content2')}</p>
                <p>{t('terms_sub_title3-13_content3')}</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>{t('terms_sub_title4')}</h3>
            <ul>
              <li>
                <h4>{t('terms_sub_title4-14')}</h4>
                <p>{t('terms_sub_title4-14_content1')}</p>
                <p>{t('terms_sub_title4-14_content2')}</p>
                <p>{t('terms_sub_title4-14_content3')}</p>
                <p>{t('terms_sub_title4-14_content4')}</p>
                <p>{t('terms_sub_title4-14_content5')}</p>
                <p>{t('terms_sub_title4-14_content6')}</p>
                <p>{t('terms_sub_title4-14_content7')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title4-15')}</h4>
                <p>{t('terms_sub_title4-15_content1')}</p>
                <ul>
                  <li>
                    <p>{t('terms_sub_title4-15_content2')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content3')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content4')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content5')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content6')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content7')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content8')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content9')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content10')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content11')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content12')}</p>
                  </li>
                  <li>
                    <p>{t('terms_sub_title4-15_content13')}</p>
                  </li>
                </ul>
                <p>{t('terms_sub_title4-15_content14')}</p>
                <p>{t('terms_sub_title4-15_content15')}</p>
                <p>{t('terms_sub_title4-15_content16')}</p>
                <p>{t('terms_sub_title4-15_content17')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title4-16')}</h4>
                <p>{t('terms_sub_title4-16_content1')}</p>
                <p>{t('terms_sub_title4-16_content2')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title4-17')}</h4>
                <p>{t('terms_sub_title4-17_content1')}</p>
                <p>{t('terms_sub_title4-17_content2')}</p>
                <p>{t('terms_sub_title4-17_content3')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title4-18')}</h4>
                <p>{t('terms_sub_title4-18_content1')}</p>
                <p>{t('terms_sub_title4-18_content2')}</p>
              </li>
            </ul>
          </li>
          <li>
            <h3>{t('terms_sub_title5')}</h3>
            <ul>
              <li>
                <h4>{t('terms_sub_title5-19')}</h4>
                <p>{t('terms_sub_title5-19_content1')}</p>
                <p>{t('terms_sub_title5-19_content2')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title5-20')}</h4>
                <p>{t('terms_sub_title5-20_content1')}</p>
                <p>{t('terms_sub_title5-20_content2')}</p>
                <p>{t('terms_sub_title5-20_content3')}</p>
                <p>{t('terms_sub_title5-20_content4')}</p>
              </li>
              <li>
                <h4>{t('terms_sub_title5-21')}</h4>
                <p>{t('terms_sub_title5-21_content1')}</p>
                <p>{t('terms_sub_title5-21_content2')}</p>
              </li>
            </ul>
          </li>
          <li>
            <h4>{t('terms_sub_title_etc')}</h4>
            <p>{t('terms_sub_title_etc_content1')}</p>
            <p>{t('terms_sub_title_etc_content2')}</p>
            <p>{t('terms_sub_title_etc_content3')}</p>
          </li>
        </ul> 
      </div>
    </section>
  </div>
  <Footer></Footer>
  </>
  );
}

export default Terms;