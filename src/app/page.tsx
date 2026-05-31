"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { CheckCircle, Smile, Sparkles, Wrench, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="blurBottom"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Ana Sayfa",
          id: "#hero",
        },
        {
          name: "Hakkımızda",
          id: "#about",
        },
        {
          name: "Hizmetlerimiz",
          id: "#services",
        },
        {
          name: "Ekibimiz",
          id: "#team",
        },
        {
          name: "Referanslar",
          id: "#testimonials",
        },
        {
          name: "Sıkça Sorulanlar",
          id: "#faq",
        },
        {
          name: "İletişim",
          id: "#contact",
        },
      ]}
      brandName="ŞİRİNEVLER ER-KA Teknik"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "downward-rays-animated-grid",
      }}
      title="ŞİRİNEVLER ER-KA Teknik: Kombi ve Klima Servisinde Güvenilir Çözümler"
      description="Ev ve iş yerleriniz için uzman kombi, klima ve petek bakımı, onarımı ve montajı hizmetleri. Modern çözümlerle konforunuzu garanti altına alıyoruz."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-23926.jpg",
          imageAlt: "Modern air conditioning unit in a stylish home",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-man-working-as-plumber_23-2150746301.jpg",
          imageAlt: "Professional HVAC technician repairing a boiler",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-microwave_53876-17927.jpg",
          imageAlt: "3D rendering of complex HVAC system components",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/children-happy-because-hot-gingerbread-cookies_329181-5379.jpg",
          imageAlt: "Happy family enjoying a comfortable home environment",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/factory-surrounded-by-high-rise-buildings-with-greenery_181624-12688.jpg",
          imageAlt: "Modern commercial HVAC rooftop unit on a building",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-her-workshop-creative-invention_23-2149067189.jpg",
          imageAlt: "Close up of technician's tools during HVAC repair",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349261.jpg",
          imageAlt: "Minimalist white AC unit on a sleek modern wall",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-couple-using-digital-tablet-together-home_1170-501.jpg",
          imageAlt: "Technician explaining AC system to a client",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-t-shirt-jacket-hat-pointing-cardboard-box-looking-proud_176474-31133.jpg",
          imageAlt: "Air duct cleaning service equipment for ventilation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-24222.jpg",
          imageAlt: "Infrared camera scanning for heat loss in a building",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-smart-home-tablet_23-2149036910.jpg",
          imageAlt: "Technician installing a smart thermostat",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-car-mechanic-working-car-repair-shop_23-2150367575.jpg",
          imageAlt: "Sparkling clean radiator after professional maintenance",
        },
      ]}
      tag="Konforunuz İçin Uzman Çözümler"
      tagIcon={Sparkles}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Hemen Randevu Al",
          href: "#contact",
        },
        {
          text: "Hizmetlerimiz",
          href: "#services",
        },
      ]}
      buttonAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-3985.jpg",
          alt: "Uzman Teknisyen 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-having-online-meeting-work_23-2148940754.jpg",
          alt: "Uzman Teknisyen 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/shirt-smiling-skill-gesture-occupation_1134-1049.jpg",
          alt: "Uzman Teknisyen 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-man-engineer-designing-building-model-maquette-layout-architecture-work-architect-working-construction-structure-design-urban-development-project_482257-37228.jpg",
          alt: "Uzman Teknisyen 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334226.jpg",
          alt: "Deneyimli Servis Uzmanı",
        },
      ]}
      avatarText="Uzman Ekibimiz Size Hizmet Vermeye Hazır"
      carouselPosition="right"
      marqueeItems={[
        {
          type: "text",
          text: "Kombi Bakım",
        },
        {
          type: "text",
          text: "Klima Servisi",
        },
        {
          type: "text",
          text: "Petek Temizliği",
        },
        {
          type: "text",
          text: "Arıza Onarımı",
        },
        {
          type: "text",
          text: "Montaj Hizmeti",
        },
        {
          type: "text",
          text: "Yedek Parça",
        },
      ]}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="20 Yılı Aşkın Tecrübe ile Konforunuzu Sağlıyoruz"
      description="ŞİRİNEVLER ER-KA Teknik olarak, Şirinevler ve çevresine yıllardır güvenilir kombi ve klima servis hizmeti sunmaktayız. Müşteri memnuniyetini ön planda tutan, hızlı ve etkili çözümlerle ev ve iş yerlerinizin iklimlendirme ve ısıtma ihtiyaçlarını karşılıyoruz. Kaliteli hizmet anlayışımızla sektörde fark yaratmaya devam ediyoruz."
      bulletPoints={[
        {
          title: "Uzman Teknisyenler",
          description: "Sertifikalı ve deneyimli ekibimizle her zaman yanınızdayız.",
          icon: CheckCircle,
        },
        {
          title: "Hızlı ve Etkili Servis",
          description: "Randevulu sistemle hızlı teşhis ve çözüm garantisi.",
          icon: Zap,
        },
        {
          title: "Orijinal Yedek Parça",
          description: "Kombi ve klimalarınız için sadece orijinal parçalar kullanıyoruz.",
          icon: Wrench,
        },
        {
          title: "Müşteri Memnuniyeti",
          description: "Her zaman sizin konforunuz ve güvenliğiniz önceliğimizdir.",
          icon: Smile,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-loader-holding-house-model-uniform-front-view_176474-21361.jpg"
      imageAlt="Smiling HVAC technician standing proudly"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Uzmanlık Alanlarımız ve Kapsamlı Hizmetlerimiz"
      description="Her türlü kombi, klima ve petek arızası için hızlı teşhis ve kalıcı çözümler sunuyoruz. Yıllık bakım ile cihazlarınızın ömrünü uzatır, enerji verimliliğini artırırız. Modern ekipmanlarımız ve güncel bilgilerimizle, cihazlarınızın ilk günkü gibi çalışmasını sağlıyoruz."
      accordionItems={[
        {
          id: "1",
          title: "Kombi Bakım ve Onarımı",
          content: "Tüm marka ve model kombiler için periyodik bakım, arıza tespiti ve orijinal yedek parça değişimi hizmeti sunuyoruz. Kombinizin verimli çalışması için düzenli bakım şarttır.",
        },
        {
          id: "2",
          title: "Klima Montaj ve Servisi",
          content: "Klima montajı, demontajı, gaz dolumu, filtre temizliği ve her türlü arıza onarımını profesyonelce yapıyoruz. Yaz kış konforunuz için klimalarınızı bize emanet edin.",
        },
        {
          id: "3",
          title: "Petek Temizliği ve Bakımı",
          content: "Isıtma sisteminizin en önemli parçası olan peteklerinizin iç temizliğini özel kimyasallar ve makinelerle yaparak ısınma verimliliğini artırıyoruz.",
        },
        {
          id: "4",
          title: "Arıza Teşhisi ve Çözümü",
          content: "Gelişmiş test cihazlarımızla arızaları hızlıca teşhis eder, kalıcı ve ekonomik çözümler sunarız. Acil durumlarda hızlı servis imkanı sağlıyoruz.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/plant-picture-clean-room-equipment-stainless-steel-machines_645730-298.jpg"
      imageAlt="Diagram of a modern HVAC system with transparent elements"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Güvenilir Hizmet, Kanıtlanmış Başarı"
      tag="Verilerle Konfor"
      metrics={[
        {
          id: "1",
          value: "20+",
          description: "Yıllık Tecrübe",
        },
        {
          id: "2",
          value: "98%",
          description: "Müşteri Memnuniyeti",
        },
        {
          id: "3",
          value: "5000+",
          description: "Tamamlanan Servis",
        },
        {
          id: "4",
          value: "7/24",
          description: "Kesintisiz Destek",
        },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "1",
          name: "Ahmet Yılmaz",
          role: "Kombi Uzmanı",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-car-mechanic-car-repair-shop_23-2150367539.jpg",
          imageAlt: "Ahmet Yılmaz, Kombi Uzmanı",
        },
        {
          id: "2",
          name: "Ayşe Demir",
          role: "Klima Teknikeri",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-manager-working-call-centre_1098-18765.jpg",
          imageAlt: "Ayşe Demir, Klima Teknikeri",
        },
        {
          id: "3",
          name: "Mehmet Kaya",
          role: "Isıtma Sistemleri Uzmanı",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-using-touchscreen-device_1170-1578.jpg",
          imageAlt: "Mehmet Kaya, Isıtma Sistemleri Uzmanı",
        },
        {
          id: "4",
          name: "Zeynep Çelik",
          role: "Müşteri İlişkileri",
          imageSrc: "http://img.b2bpic.net/free-photo/repairman-reporting-found-freon-leaks_482257-92670.jpg",
          imageAlt: "Zeynep Çelik, Müşteri İlişkileri",
        },
      ]}
      title="Sektörün En İyi Uzmanlarıyla Tanışın"
      description="Ekibimiz, kombi ve klima teknolojileri konusunda sürekli eğitim alan, sertifikalı ve deneyimli profesyonellerden oluşmaktadır. Her bir personelimiz, en yüksek kalitede hizmet sunmak için kendini adamıştır ve güler yüzlü hizmet anlayışıyla fark yaratır."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Hızlı ve Profesyonel Hizmet!",
          quote: "Kombimiz arızalandığında ER-KA Teknik'i aradık. Çok kısa sürede geldiler ve sorunu çözdüler. Gerçekten çok memnun kaldık, herkese tavsiye ederim.",
          name: "Elif A.",
          role: "Ev Sahibi",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-calling-plumber-solve-kitchen-problems_23-2150990674.jpg",
          imageAlt: "Elif A., Ev Sahibi",
        },
        {
          id: "2",
          title: "Klimalarımız Şimdi Çok Daha Verimli",
          quote: "Yaz öncesi klima bakımı için çağırdık. Ekip çok ilgiliydi, detaylı bir temizlik yaptılar. Klimalarımız şimdi çok daha iyi soğutuyor ve enerji tasarrufu sağlıyoruz.",
          name: "Can B.",
          role: "İşletme Sahibi",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-gay-couple-spending-time-together-having-date-park-lgbt-love-concept_58466-12309.jpg",
          imageAlt: "Can B., İşletme Sahibi",
        },
        {
          id: "3",
          title: "Güler Yüzlü ve Güvenilir Ekip",
          quote: "Petek temizliği yaptırdık, evimiz şimdi çok daha sıcak. Ekip hem çok güler yüzlü hem de işlerini titizlikle yaptılar. ŞİRİNEVLER ER-KA Teknik'e teşekkürler!",
          name: "Zehra K.",
          role: "Emekli Öğretmen",
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-middle-aged-blonde-delivery-woman-blue-uniform-cap-spreading-hands_141793-116743.jpg",
          imageAlt: "Zehra K., Emekli Öğretmen",
        },
        {
          id: "4",
          title: "Acil Durumda Hızlı Çözüm",
          quote: "Kombimiz gece aniden bozuldu. ER-KA Teknik'i aradık, kısa sürede gelip müdahale ettiler. Gecenin bir yarısı mağduriyetimizi giderdiler, minnettarız.",
          name: "Murat S.",
          role: "Ofis Çalışanı",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-house-model-t-shirt-jacket-cap-looking-dreamy-front-view_176474-57862.jpg",
          imageAlt: "Murat S., Ofis Çalışanı",
        },
        {
          id: "5",
          title: "Teknik Bilgiye Sahip Profesyoneller",
          quote: "Klima montajı için geldiler, işlerini gerçekten çok iyi biliyorlar. Hem hızlı hem de kusursuz bir montaj yaptılar. Çok teşekkür ederiz.",
          name: "Deniz T.",
          role: "Mimar",
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-young-man-posing-studio_176474-37578.jpg",
          imageAlt: "Deniz T., Mimar",
        },
        {
          id: "6",
          title: "Yıllardır Tek Tercihimiz",
          quote: "ER-KA Teknik, yıllardır tüm kombi ve klima işlerimizde güvendiğimiz tek adres. Kalitelerinden asla ödün vermiyorlar. Şüphesiz tavsiye ederim.",
          name: "Fatma G.",
          role: "Ev Hanımı",
          imageSrc: "http://img.b2bpic.net/free-photo/lazy-bones-doing-nothing-enjoying-leisure-together-upper-angle-shot-cute-women-sitting-sofa-nightwear-laughing-out-loud-talking-about-awkward-moments-office-spending-weekends_176420-8675.jpg",
          imageAlt: "Fatma G., Ev Hanımı",
        },
      ]}
      title="Müşterilerimizden Gelen Memnuniyet Yorumları"
      description="Hizmet kalitemiz, müşterilerimizin geri bildirimleriyle kanıtlanmıştır. Onların konforu ve güvenliği bizim için her şeyden önemlidir. Binlerce ailenin tercihiyiz!"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Bosch",
        "Baymak",
        "Vaillant",
        "Demirdöküm",
        "Arçelik",
        "Vestel",
        "Buderus",
      ]}
      title="Güvenilir İş Ortakları ve Markalar"
      description="Yıllardır sektörün önde gelen markaları ve iş ortaklarıyla çalışarak, en kaliteli hizmeti ve ürünleri sizlere ulaştırmaktayız. Güvenilirliğimizin arkasında güçlü iş birlikleri yatar."
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Kombi bakımı ne sıklıkla yapılmalı?",
          content: "Kombinizin uzun ömürlü ve verimli çalışması için yılda en az bir kez, tercihen kış öncesi sonbahar aylarında bakım yapılmasını tavsiye ediyoruz.",
        },
        {
          id: "2",
          title: "Klima gazı ne zaman biter ve nasıl anlaşılır?",
          content: "Klima gazı normalde bitmez, ancak kaçak varsa azalabilir. Klimanızın yeterince soğutmaması, buzlanma veya dış üniteden ses gelmesi gaz kaçağı belirtisi olabilir.",
        },
        {
          id: "3",
          title: "Petek temizliği neden önemlidir?",
          content: "Petek içlerinde zamanla oluşan tortu ve kireçlenmeler ısı transferini engeller. Petek temizliği, ısınma verimini artırır ve yakıt tüketimini azaltır.",
        },
        {
          id: "4",
          title: "Acil servis hizmetiniz var mı?",
          content: "Evet, acil durumlarda hızlı müdahale için 7/24 hizmet vermekteyiz. İletişim numaralarımızdan bize ulaşarak destek alabilirsiniz.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Kombi ve klima servislerimizle ilgili aklınıza takılan tüm soruların cevaplarını burada bulabilirsiniz. Daha fazla bilgi için bize ulaşmaktan çekinmeyin, ekibimiz size yardımcı olmaktan mutluluk duyar."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static",
      }}
      tag="Bize Ulaşın"
      title="Hemen Randevu Alın veya Bilgi İsteyin"
      description="ŞİRİNEVLER ER-KA Teknik olarak tüm kombi ve klima ihtiyaçlarınızda yanınızdayız. Formu doldurarak bize ulaşın, size en kısa sürede geri dönüş yapalım. Konforunuz için buradayız!"
      imageSrc="http://img.b2bpic.net/free-photo/woman-customer-call-service_74190-2285.jpg"
      imageAlt="Friendly customer service agent with headset"
      mediaAnimation="slide-up"
      inputPlaceholder="Adınız Soyadınız / E-posta Adresiniz"
      buttonText="Bilgi Talep Et"
      termsText="Formu doldurarak, hizmet şartlarımızı kabul etmiş olursunuz."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Hizmetlerimiz",
          items: [
            {
              label: "Kombi Bakımı",
              href: "#services",
            },
            {
              label: "Klima Onarımı",
              href: "#services",
            },
            {
              label: "Petek Temizliği",
              href: "#services",
            },
            {
              label: "Montaj",
              href: "#services",
            },
          ],
        },
        {
          title: "Kurumsal",
          items: [
            {
              label: "Hakkımızda",
              href: "#about",
            },
            {
              label: "Ekibimiz",
              href: "#team",
            },
            {
              label: "Referanslar",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Destek",
          items: [
            {
              label: "Sıkça Sorulanlar",
              href: "#faq",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
            {
              label: "Gizlilik Politikası",
              href: "#",
            },
          ],
        },
      ]}
      logoText="ŞİRİNEVLER ER-KA Teknik"
      copyrightText="© 2024 | ŞİRİNEVLER ER-KA Teknik. Tüm Hakları Saklıdır."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
