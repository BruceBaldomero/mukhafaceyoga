(function () {
  const T = {
    en: {
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.gallery': 'Gallery',
      'nav.journal': 'Journal',
      'nav.contact': 'Contact',
      'nav.book': 'Book Now',

      'hero.eyebrow': 'Holistic care inspired by yoga philosophy',
      'hero.headline': 'Soften tension, <em>cultivate calm.</em>',
      'hero.sub': 'Natural, non-invasive techniques rooted in deeper healing & natural beauty — designed to lift, sculpt and bring radiance from within.',
      'hero.cta.explore': 'Explore Services',
      'hero.cta.meet': 'Meet your practitioner',

      'about.label': 'About',
      'about.title': 'More than a facial —<br /><em>a therapeutic experience</em>',
      'about.badge': 'Founded by',
      'about.p1': 'MUKHA is a holistic facial therapy space rooted in intentional touch, nervous system support, and natural restoration.',
      'about.highlight': 'The name <em>Mukha</em> means "face" in both Tagalog — the language of the Philippines, where founder Mona is from — and in Sanskrit, the ancient language from which yoga originates. Reflecting Mona\'s Filipino heritage and her passion for holistic wellness, MUKHA embodies the connection between outer expression and inner wellbeing.',
      'about.p2': 'Blending facial myofascial release, buccal massage, face yoga, and holistic facial rituals, each treatment is designed to release tension held within the face, jaw, and body — while supporting natural sculpting, circulation, and deep relaxation.',
      'about.p3': 'Inspired by yoga philosophy and slow wellness practices, MUKHA offers more than a facial. It is a therapeutic experience created to help you slow down, soften, and reconnect with yourself.',
      'about.p4': 'Founded by Mona, a Registered Nurse and Holistic Facial Therapist, every treatment is guided by both clinical knowledge and intuitive care — creating a safe, nurturing, and restorative space for each client.',
      'about.closing': 'At MUKHA, beauty and wellness are viewed as deeply interconnected — where relaxation, wellbeing, and facial health exist together in harmony.',

      'services.label': 'Services',
      'services.title': 'Treatments designed<br /><em>to restore &amp; release</em>',
      'services.intro': 'Each treatment is rooted in intentional touch, nervous system care and natural restoration.',
      'services.base': 'Base Treatments',
      'services.addons': 'Add-ons',
      'services.packages': 'Packages',

      'gallery.label': 'Gallery',
      'gallery.title': 'Inside<br /><em>the space</em>',
      'gallery.intro': 'A glimpse into the world of Mukha — where healing, touch and stillness come together.',
      'gallery.cta': 'View Full Gallery',

      'testimonials.label': 'Reviews',
      'testimonials.title': 'What clients<br /><em>are saying</em>',
      'testimonials.score': '5.0 · 14 reviews',
      'testimonials.note': "Enjoyed your treatment? We'd love to hear from you.",
      'testimonials.review.btn': 'Leave a Google Review',

      'journal.label': 'From the Studio',
      'journal.title': 'Education &amp;<br /><em>Insights</em>',
      'journal.intro': 'Mona shares knowledge from her practice — exploring the science and philosophy behind each treatment.',
      'journal.ig': 'Follow on Instagram for more',

      'contact.label': 'Contact',
      'contact.title': 'Begin your<br /><em>journey</em>',
      'contact.intro': 'Have a question or not sure which treatment is right for you? Send a message and Mona will get back to you personally.',
      'contact.female': '✦ MUKHA currently welcomes <strong>female clients only</strong>. As a solo practitioner working from a private home studio, this policy is in place to ensure the safety and comfort of both client and practitioner.',
      'contact.aircon': '✦ The studio is fully air-conditioned for your comfort.',
      'contact.book': 'Book on Fresha →',
      'contact.policies': 'Once your Fresha booking and health intake form are complete, Mona will review and confirm your appointment — a <span class="price-val">30</span> deposit will then be requested to secure your spot. Please read our <a href="policies.html">Client Policies &amp; Disclaimer</a> before booking.',
      'contact.hours.title': 'Opening Hours',
      'contact.hours.mon': 'Monday – Friday',
      'contact.hours.sat': 'Saturday',
      'contact.hours.sun': 'Sunday',
      'contact.hours.mon.t': '10am – 7pm',
      'contact.hours.sat.t': '11am – 6pm',
      'contact.hours.sun.t': 'By request only',

      'form.name': 'Name',
      'form.name.ph': 'Your name',
      'form.email': 'Email',
      'form.email.ph': 'your@email.com',
      'form.interest': 'Interested in',
      'form.select': 'Select a service…',
      'form.msg': 'Message',
      'form.msg.ph': "Tell me a little about yourself and what you're hoping for…",
      'form.submit': 'Get in Touch',

      'footer.policies': 'Client Policies',

      'gallery.cta.prompt': 'Ready to experience Mukha for yourself?',

      'policies.label': 'Important Information',
      'policies.title': 'Client Policies<br /><em>&amp; Disclaimer</em>',
      'policies.intro': 'At MUKHA, client safety, wellbeing, and comfort are our highest priorities. Please take a moment to read the following before booking your appointment.',
      'policies.cta.prompt': "Questions before booking? We're happy to help.",

      '404.eyebrow': 'Page not found',
      '404.title': 'This page has<br /><em>drifted away</em>',
      '404.text': "Like a moment of stillness that passes, this page doesn't seem to exist.<br />Let's guide you back to where you need to be.",
      '404.btn.home': 'Return home',
      '404.btn.consult': 'Book a consultation',

      'cookie.text': 'This site uses cookies to understand visitor traffic.',
      'cookie.decline': 'Decline',
      'cookie.accept': 'Accept',

      'service.moksha.desc': 'Signature all-hands myofascial release treatment. MOKSHA means "liberation" in yoga philosophy — a release from tension and restriction. Using gentle, targeted pressure across the face, neck, shoulders and jaw to release tension held within the fascia and restore natural flow throughout the body.',
      'service.moksha.note1': 'Includes a complimentary 10 minute plant-based, organic facial mask.',
      'service.moksha.note2': '✦ Best paired with ANTAR for the full facial and jaw tension release.',
      'service.moksha.b1': 'Natural lift & reduced puffiness',
      'service.moksha.b2': 'Relieves facial, jaw & neck tension',
      'service.moksha.b3': 'Improves circulation & mobility',
      'service.moksha.b4': 'Supports lymphatic drainage',
      'service.moksha.b5': 'Encourages deep relaxation',
      'service.savasana.desc': 'SAVASANA translates to "deep rest" in yoga — a state of complete relaxation and restoration for the mind and body. Choose Savasana if you\'re seeking deep relaxation and stress relief without the focused intensity of the signature MOKSHA Myofascial Release. Rather than working into the fascia with sustained pressure, this treatment offers a lighter, soothing experience that leaves you feeling rested, grounded, and renewed. Inspired by this practice, this slow-paced facial ritual is designed to encourage nervous system reset through therapeutic touch and intentional stillness. Using organic, plant-based skincare alongside facial massage and essential oils, the treatment helps calm tension, restore balance and support healthy, radiant skin.',
      'service.savasana.note': 'Complementary face mask included.',
      'service.savasana.b1': 'Deep relaxation & stress relief',
      'service.savasana.b2': 'Supports nervous system regulation',
      'service.savasana.b3': 'Improves skin health & circulation',
      'service.savasana.b4': 'Helps you look lifted and feel restored',
      'service.antar.desc': 'ANTAR translates to "inner" — representing inward awareness and release from within. This focused intra-oral technique works deeply into the cheeks and jaw through careful, precise massage to release stored tension and restore balance to the lower face.',
      'service.antar.note': 'Performed using nitrile gloves. Limited to 30 minutes to ensure comfort.',
      'service.antar.b1': 'Releases deep jaw & facial tension',
      'service.antar.b2': 'Helps relieve teeth grinding (bruxism)',
      'service.antar.b3': 'Slims and sculpts the lower face',
      'service.antar.b4': 'Supports facial symmetry & relaxation',
      'service.urdvha.desc': 'In yoga, Urdvha means "upward" — symbolising lift, expansion, and the continuous flow of energy. It represents growth through consistent, intentional practice. Created to help you maintain the benefits of your MUKHA MOKSHA treatment between sessions, Urdvha is an invitation to continue your ritual at home — with intention and care. Your at-home ritual includes a comprehensive guided video tutorial to support your practice with confidence, and the bespoke MUKHA Gua Sha, designed exclusively for MUKHA to complement your facial ritual and encourage lasting results.',
      'service.urdvha.note': 'Combining healthy lifestyle choices with regular gua sha can extend the effects of Mukha\'s treatments for up to 4 weeks.',
      'service.urdvha.b1': 'Tones and lifts',
      'service.urdvha.b2': 'Boosts circulation',
      'service.urdvha.b3': 'Reduces puffiness',
      'service.urdvha.b4': 'Supports collagen',
      'service.urdvha.b5': 'Knowledge that you can use at home to extend the benefits of Mukha treatments',
      'service.reset.type': 'Package · 4 Sessions',
      'service.reset.desc': 'While one session works wonders and provides immediate relief, four consecutive treatments lead to longer-lasting benefits. Perfect for those preparing for a special occasion or committing to their wellbeing.',
      'service.reset.b1': 'Personalised treatment each session',
      'service.reset.b2': 'Holistic facial mask included',
      'service.reset.b3': 'Aftercare & self-care guidance',
      'service.reset.b4': 'Immediate relief & amplified results',
      'services.combo': 'Combinations',
      'service.combo.badge': 'Most Popular',
      'service.combo.type': 'Combination',
      'service.combo.subtitle': 'Facial Treatment with Buccal Release',
      'service.combo.desc': 'Discover the combined benefits of our myofascial or relaxation techniques with ANTAR buccal release. Our most popular and most effective treatment, for complete facial and jaw tension release.',
      'service.combo.b1': 'MOKSHA + ANTAR — myofascial release with buccal therapy',
      'service.combo.b2': 'SAVASANA + ANTAR — relaxation & lifting with buccal massage',
      'service.reset.withantar': 'with ANTAR',
      'services.recovery': 'Recovery Care',
      'services.weekend': 'A 10% premium applies to weekend appointments.',
      'service.postop.type': 'Package · 4 Home Visits',
      'service.postop.subtitle': 'A Softer Side of Recovery',
      'service.postop.price': 'Price on enquiry',
      'service.postop.desc': "Personalised facial therapy to support your recovery following cosmetic surgery, delivered in the comfort of your home. Drawing on Mona's background as a registered nurse in maxillofacial surgery, tailored lymphatic techniques support fluid movement, help manage post-op swelling and promote comfort during recovery.",
      'service.postop.b1': '4 sessions over 4 weeks',
      'service.postop.b2': '70 minutes per session',
      'service.postop.b3': 'Gentle, personalised manual lymphatic techniques',
      'service.postop.b4': 'Convenient home visits',
      'service.enquire': 'Email to Enquire →',
      'service.book': 'Book Now →',
      // Redesign
      "rd.menu": "Menu",
      "rd.hero.sub": "Myofascial release, buccal massage and lymphatic care from a registered nurse, in a quiet room in Surbiton. For women.",
      "rd.hero.h1": "Mukha Face Yoga, holistic facial therapy in Surbiton",
      "rd.name.h": "Mukha means face.",
      "rd.name.p": "In Tagalog, the language of the Philippines where Mona is from, and in Sanskrit, the language of yoga. Each treatment carries a Sanskrit word for what it does.",
      "rd.tr.h": "Treatments.",
      "rd.tr.combo.word": "Most popular · the combination",
      "rd.tr.moksha.word": "Liberation · myofascial release",
      "rd.tr.savasana.word": "Deep rest · lymphatic facial ritual",
      "rd.tr.antar.word": "Inner · buccal release, add-on",
      "rd.tr.urdvha.word": "Upward · at-home gua sha, add-on",
      "rd.fi.h": "Where do you hold it?",
      "rd.fi.p": "Choose what you feel most, and see where Mona would usually begin.",
      "rd.fi.jaw": "Jaw & teeth grinding",
      "rd.fi.tension": "Face, neck & shoulders",
      "rd.fi.stress": "Stress & poor sleep",
      "rd.fi.puffy": "Puffiness",
      "rd.fi.surgery": "After cosmetic surgery",
      "rd.fi.home": "Keeping results at home",
      "rd.fi.jaw.why": "Myofascial release for the face, neck and jaw, then ANTAR works inside the cheeks, where grinding tension sits.",
      "rd.fi.tension.why": "Gentle, targeted pressure across the face, neck, shoulders and jaw to release tension held within the fascia.",
      "rd.fi.stress.why": "A lighter, slow-paced ritual for deep relaxation and stress relief, designed to encourage a nervous system reset.",
      "rd.fi.puffy.why": "Supports lymphatic drainage and circulation, for a natural lift and less puffiness.",
      "rd.fi.surgery.why": "Four gentle lymphatic sessions at home over four weeks, drawing on Mona's nursing background in maxillofacial surgery.",
      "rd.fi.home.why": "A guided gua sha video and the bespoke MUKHA Gua Sha, to carry the benefits of your treatment between visits.",
      "rd.fi.small": "Not sure? Mona reads every health form before confirming, and will suggest what suits you.",
      "rd.mona.h": "Mona, registered nurse.",
      "rd.f.nurse": "Nursing",
      "rd.f.nurse.v": "8 years, registered nurse",
      "rd.f.bg": "Background",
      "rd.f.bg.v": "Theatres, maxillofacial surgery, recovery",
      "rd.f.room": "The room",
      "rd.f.who": "Clients",
      "rd.f.who.v": "Women only, by appointment",
      "rd.rv.h": "Reviews",
      "rd.rv.third": "third visit", "rd.rv.all": "Show all 14 reviews",
      "rd.res.h": "Before and after.",
      "rd.res.p": "Real clients, photographed in the room before and after one session. Results vary from person to person.",
      "rd.jr.h": "From the studio.",
      "rd.close": "Close",
      "rd.faq.h": "Before you book.",
      "rd.faq.f2": "Women only. The room is air-conditioned.",
      "rd.faq.f3": "A 30 deposit secures your booking.",
      "rd.faq.policies": "Read the client policies",
      "rd.q1": "How do I book?",
      "rd.a1": "Choose your treatment, date and time on Fresha and fill in the health form. Mona reviews it, confirms your appointment is suitable, then sends a 30 deposit link by WhatsApp or email. The deposit comes off the total on the day.",
      "rd.q2": "What if I need to cancel?",
      "rd.a2": "Give at least 48 hours' notice and your deposit can move to a new appointment. Cancelling with less notice, or missing the appointment, loses the deposit.",
      "rd.q3": "Do weekends cost more?",
      "rd.a3": "Yes, a 10% premium applies to weekend appointments. Saturdays are 11am to 6pm, and Sundays are by request only.",
      "rd.q4": "Is it suitable for me?",
      "rd.a4": "Treatment may not be suitable within 4 weeks of Botox, after recent fillers, surgery or dental work, with active cold sores or skin infections, or in the first trimester of pregnancy. If you are unsure, ask before booking.",
      "rd.q5": "Why women only?",
      "rd.a5": "Mona works alone from a private home studio, so the policy keeps both client and practitioner safe and comfortable.",
      "rd.q6": "Is this a medical treatment?",
      "rd.a6": "No. Mona is a registered nurse, but Mukha treatments are complementary wellness therapies. They do not replace advice from your doctor, dentist or specialist.",
      "rd.visit.h": "Visit the room.",
      "rd.write.h": "Write to Mona.",
      "rd.foot.sign": "Slow down, soften.",
    },

    fr: {
      'nav.about': 'À propos',
      'nav.services': 'Soins',
      'nav.gallery': 'Galerie',
      'nav.journal': 'Journal',
      'nav.contact': 'Contact',
      'nav.book': 'Réserver',

      'hero.eyebrow': 'Soins holistiques inspirés de la philosophie du yoga',
      'hero.headline': 'Libérez les tensions, <em>cultivez la sérénité.</em>',
      'hero.sub': 'Des techniques naturelles et non invasives, ancrées dans une guérison profonde et une beauté naturelle — conçues pour sublimer, sculpter et rayonner de beauté de l\'intérieur.',
      'hero.cta.explore': 'Découvrir les soins',
      'hero.cta.meet': 'Rencontrez votre praticienne',

      'about.label': 'À propos',
      'about.title': 'Plus qu\'un soin —<br /><em>une expérience thérapeutique</em>',
      'about.badge': 'Fondé par',
      'about.p1': 'MUKHA est un espace de thérapie faciale holistique fondé sur le toucher intentionnel, le soutien du système nerveux et la restauration naturelle.',
      'about.highlight': 'Le nom <em>Mukha</em> signifie « visage » en tagalog — la langue des Philippines, pays natal de la fondatrice Mona — et en sanskrit, la langue ancienne dont le yoga est issu. Reflet de l\'héritage philippin de Mona et de sa passion pour le bien-être holistique, MUKHA incarne le lien entre l\'expression extérieure et le bien-être intérieur.',
      'about.p2': 'Alliant relâchement myofascial facial, massage buccal, face yoga et rituels faciaux holistiques, chaque soin vise à libérer les tensions du visage, de la mâchoire et du corps — tout en favorisant la sculpture naturelle, la circulation et la détente profonde.',
      'about.p3': 'Inspiré de la philosophie du yoga et des pratiques de slow wellness, MUKHA va bien au-delà d\'un simple soin. C\'est une expérience thérapeutique créée pour vous aider à ralentir, à vous adoucir et à vous reconnecter à vous-même.',
      'about.p4': 'Fondé par Mona, infirmière diplômée et thérapeute faciale holistique, chaque soin est guidé par des connaissances cliniques et une intuition bienveillante — créant un espace sécurisé, nourrissant et ressourçant pour chaque cliente.',
      'about.closing': 'Chez MUKHA, beauté et bien-être sont profondément liés — là où détente, santé et harmonie faciale coexistent ensemble.',

      'services.label': 'Soins',
      'services.title': 'Des soins conçus<br /><em>pour restaurer &amp; libérer</em>',
      'services.intro': 'Chaque soin est ancré dans le toucher intentionnel, le soin du système nerveux et la restauration naturelle.',
      'services.base': 'Soins de Base',
      'services.addons': 'Compléments',
      'services.packages': 'Formules',

      'gallery.label': 'Galerie',
      'gallery.title': 'Dans<br /><em>l\'espace</em>',
      'gallery.intro': "Un aperçu de l'univers Mukha — où guérison, toucher et sérénité se rencontrent.",
      'gallery.cta': 'Voir la galerie complète',

      'testimonials.label': 'Avis',
      'testimonials.title': 'Ce que disent<br /><em>nos clientes</em>',
      'testimonials.score': '5.0 · 14 avis',
      'testimonials.note': 'Votre soin vous a plu ? Nous serions ravis de vous lire.',
      'testimonials.review.btn': 'Laisser un avis Google',

      'journal.label': 'Du Studio',
      'journal.title': 'Éducation &amp;<br /><em>Perspectives</em>',
      'journal.intro': 'Mona partage les connaissances tirées de sa pratique — explorant la science et la philosophie derrière chaque soin.',
      'journal.ig': 'Suivre sur Instagram pour plus',

      'contact.label': 'Contact',
      'contact.title': 'Commencez votre<br /><em>voyage</em>',
      'contact.intro': "Une question ou vous ne savez pas quel soin vous convient ? Envoyez un message et Mona vous répondra personnellement.",
      'contact.female': '✦ MUKHA accueille actuellement <strong>les clientes féminines uniquement</strong>. En tant que praticienne indépendante travaillant depuis un studio privé à domicile, cette politique garantit la sécurité et le confort de toutes.',
      'contact.aircon': '✦ Le studio est entièrement climatisé pour votre confort.',
      'contact.book': 'Réserver sur Fresha →',
      'contact.policies': 'Une fois votre réservation Fresha et votre formulaire de santé complétés, Mona confirmera votre rendez-vous — un acompte de <span class="price-val">30</span> vous sera demandé pour sécuriser votre place. Veuillez lire nos <a href="policies.html">Politiques Clients &amp; Mentions légales</a> avant de réserver.',
      'contact.hours.title': "Heures d'ouverture",
      'contact.hours.mon': 'Lundi – Vendredi',
      'contact.hours.sat': 'Samedi',
      'contact.hours.sun': 'Dimanche',
      'contact.hours.mon.t': '10h – 19h',
      'contact.hours.sat.t': '11h – 18h',
      'contact.hours.sun.t': 'Sur demande uniquement',

      'form.name': 'Nom',
      'form.name.ph': 'Votre nom',
      'form.email': 'E-mail',
      'form.email.ph': 'votre@email.com',
      'form.interest': 'Intéressée par',
      'form.select': 'Choisir un soin…',
      'form.msg': 'Message',
      'form.msg.ph': 'Parlez-moi un peu de vous et de ce que vous souhaitez…',
      'form.submit': 'Prendre contact',

      'footer.policies': 'Politiques Clients',

      'gallery.cta.prompt': 'Prête à découvrir Mukha ?',

      'policies.label': 'Informations importantes',
      'policies.title': 'Politiques Clients<br /><em>&amp; Mentions légales</em>',
      'policies.intro': 'Chez MUKHA, la sécurité, le bien-être et le confort de nos clientes sont nos priorités absolues. Veuillez prendre un moment pour lire ce qui suit avant de réserver votre rendez-vous.',
      'policies.cta.prompt': 'Des questions avant de réserver ? Nous sommes là pour vous aider.',

      '404.eyebrow': 'Page introuvable',
      '404.title': 'Cette page a<br /><em>disparu</em>',
      '404.text': "Comme un moment de calme qui passe, cette page ne semble pas exister.<br />Laissez-nous vous guider là où vous devez être.",
      '404.btn.home': "Retour à l'accueil",
      '404.btn.consult': 'Réserver une consultation',

      'cookie.text': 'Ce site utilise des cookies pour analyser le trafic des visiteurs.',
      'cookie.decline': 'Refuser',
      'cookie.accept': 'Accepter',

      'service.moksha.desc': "Traitement myofascial signature toutes mains. MOKSHA signifie « libération » en philosophie du yoga — une libération des tensions et des restrictions. Utilisant une pression douce et ciblée sur le visage, le cou, les épaules et la mâchoire pour libérer les tensions au sein du fascia et restaurer le flux naturel dans tout le corps.",
      'service.moksha.note1': "Comprend un masque facial biologique à base de plantes offert de 10 minutes.",
      'service.moksha.note2': "✦ Idéalement associé à ANTAR pour un relâchement complet des tensions faciales et de la mâchoire.",
      'service.moksha.b1': "Lift naturel et réduction des gonflements",
      'service.moksha.b2': "Soulage les tensions du visage, de la mâchoire et du cou",
      'service.moksha.b3': "Améliore la circulation et la mobilité",
      'service.moksha.b4': "Soutient le drainage lymphatique",
      'service.moksha.b5': "Favorise une relaxation profonde",
      'service.savasana.desc': "SAVASANA signifie « repos profond » en yoga — un état de détente et de restauration complète pour le corps et l'esprit. Choisissez Savasana si vous recherchez une détente profonde et un soulagement du stress, sans l'intensité ciblée du soin signature MOKSHA. Plutôt que de travailler le fascia avec une pression soutenue, ce soin offre une expérience plus légère et apaisante qui vous laisse reposée, ancrée et renouvelée. Inspiré de cette pratique, ce rituel facial à rythme lent favorise la réinitialisation du système nerveux grâce au toucher thérapeutique et à l'immobilité intentionnelle. Utilisant des soins de la peau biologiques à base de plantes, associés au massage facial et à des huiles essentielles, ce soin aide à apaiser les tensions, restaurer l'équilibre et soutenir une peau saine et radieuse.",
      'service.savasana.note': "Masque facial offert.",
      'service.savasana.b1': "Détente profonde et soulagement du stress",
      'service.savasana.b2': "Soutient la régulation du système nerveux",
      'service.savasana.b3': "Améliore la santé de la peau et la circulation",
      'service.savasana.b4': "Vous aide à paraître liftée et à vous sentir ressourcée",
      'service.antar.desc': "ANTAR signifie « intérieur » — représentant la conscience intérieure et la libération depuis l'intérieur. Cette technique intra-orale ciblée travaille en profondeur dans les joues et la mâchoire grâce à un massage attentif et précis pour libérer les tensions accumulées et restaurer l'équilibre du bas du visage.",
      'service.antar.note': "Réalisé avec des gants en nitrile. Limité à 30 minutes pour assurer le confort.",
      'service.antar.b1': "Libère les tensions profondes de la mâchoire et du visage",
      'service.antar.b2': "Aide à soulager le grincement des dents (bruxisme)",
      'service.antar.b3': "Affine et sculpte le bas du visage",
      'service.antar.b4': "Soutient la symétrie faciale et la relaxation",
      'service.urdvha.desc': "En yoga, Urdvha signifie « vers le haut » — symbolisant le lifting, l'expansion et le flux continu d'énergie. Il représente la croissance par une pratique régulière et intentionnelle. Créé pour vous aider à maintenir les bienfaits de votre soin MUKHA MOKSHA entre les séances, Urdvha est une invitation à poursuivre votre rituel à la maison — avec intention et attention. Votre rituel à domicile comprend un tutoriel vidéo complet pour soutenir votre pratique en toute confiance, ainsi que le Gua Sha MUKHA sur mesure, conçu exclusivement pour MUKHA afin de compléter votre rituel facial et favoriser des résultats durables.",
      'service.urdvha.note': "Associer de saines habitudes de vie à une pratique régulière du gua sha peut prolonger les effets des soins Mukha jusqu'à 4 semaines.",
      'service.urdvha.b1': "Tonifie et lifts",
      'service.urdvha.b2': "Booste la circulation",
      'service.urdvha.b3': "Réduit les gonflements",
      'service.urdvha.b4': "Soutient le collagène",
      'service.urdvha.b5': "Des connaissances à utiliser chez soi pour prolonger les bienfaits des soins Mukha",
      'service.reset.type': "Forfait · 4 Séances",
      'service.reset.desc': "Si une séance fait des merveilles et procure un soulagement immédiat, quatre traitements consécutifs entraînent des bienfaits plus durables. Parfait pour celles qui se préparent pour une occasion spéciale ou qui s'engagent dans leur bien-être.",
      'service.reset.b1': "Traitement personnalisé à chaque séance",
      'service.reset.b2': "Masque facial holistique inclus",
      'service.reset.b3': "Conseils d'après-soin et d'autosoins",
      'service.reset.b4': "Soulagement immédiat et résultats amplifiés",
      'services.combo': 'Combinaisons',
      'service.combo.badge': 'Le plus populaire',
      'service.combo.type': 'Combinaison',
      'service.combo.subtitle': 'Soin du visage avec libération buccale',
      'service.combo.desc': "Découvrez les bienfaits combinés de nos techniques myofasciales ou de relaxation avec la libération buccale ANTAR. Notre soin le plus populaire et le plus efficace, pour libérer complètement les tensions du visage et de la mâchoire.",
      'service.combo.b1': 'MOKSHA + ANTAR — libération myofasciale et thérapie buccale',
      'service.combo.b2': 'SAVASANA + ANTAR — relaxation et effet liftant avec massage buccal',
      'service.reset.withantar': 'avec ANTAR',
      'services.recovery': 'Soins de récupération',
      'services.weekend': "Un supplément de 10 % s'applique aux rendez-vous du week-end.",
      'service.postop.type': 'Forfait · 4 Visites à domicile',
      'service.postop.subtitle': 'Une récupération en douceur',
      'service.postop.price': 'Tarif sur demande',
      'service.postop.desc': "Une thérapie faciale personnalisée pour accompagner votre récupération après une chirurgie esthétique, dans le confort de votre domicile. Forte de son expérience d'infirmière diplômée en chirurgie maxillo-faciale, Mona utilise des techniques lymphatiques sur mesure pour favoriser la circulation des fluides, aider à gérer le gonflement post-opératoire et apporter du confort pendant la récupération.",
      'service.postop.b1': '4 séances sur 4 semaines',
      'service.postop.b2': '70 minutes par séance',
      'service.postop.b3': 'Techniques lymphatiques manuelles douces et personnalisées',
      'service.postop.b4': 'Visites à domicile pratiques',
      'service.enquire': 'Se renseigner par e-mail →',
      'service.book': "Réserver →",
      // Redesign
      "rd.menu": "Menu",
      "rd.hero.sub": "Libération myofasciale, massage buccal et soins lymphatiques par une infirmière diplômée, dans une pièce calme à Surbiton. Pour les femmes.",
      "rd.hero.h1": "Mukha Face Yoga, thérapie faciale holistique à Surbiton",
      "rd.name.h": "Mukha veut dire visage.",
      "rd.name.p": "En tagalog, la langue des Philippines d'où vient Mona, et en sanskrit, la langue du yoga. Chaque soin porte un mot sanskrit qui dit ce qu'il fait.",
      "rd.tr.h": "Les soins.",
      "rd.tr.combo.word": "Le plus populaire · la combinaison",
      "rd.tr.moksha.word": "Libération · libération myofasciale",
      "rd.tr.savasana.word": "Repos profond · rituel facial lymphatique",
      "rd.tr.antar.word": "Intérieur · libération buccale, complément",
      "rd.tr.urdvha.word": "Vers le haut · gua sha à la maison, complément",
      "rd.fi.h": "Où gardez-vous la tension ?",
      "rd.fi.p": "Choisissez ce que vous ressentez le plus, et voyez par où Mona commencerait.",
      "rd.fi.jaw": "Mâchoire et bruxisme",
      "rd.fi.tension": "Visage, cou et épaules",
      "rd.fi.stress": "Stress et mauvais sommeil",
      "rd.fi.puffy": "Gonflement",
      "rd.fi.surgery": "Après une chirurgie esthétique",
      "rd.fi.home": "Garder les résultats chez soi",
      "rd.fi.jaw.why": "Libération myofasciale du visage, du cou et de la mâchoire, puis ANTAR travaille à l'intérieur des joues, là où se loge la tension du bruxisme.",
      "rd.fi.tension.why": "Une pression douce et ciblée sur le visage, le cou, les épaules et la mâchoire pour libérer la tension retenue dans le fascia.",
      "rd.fi.stress.why": "Un rituel plus léger et lent pour une relaxation profonde et le soulagement du stress, pensé pour apaiser le système nerveux.",
      "rd.fi.puffy.why": "Favorise le drainage lymphatique et la circulation, pour un effet liftant naturel et moins de gonflement.",
      "rd.fi.surgery.why": "Quatre séances lymphatiques douces à domicile sur quatre semaines, grâce à l'expérience d'infirmière de Mona en chirurgie maxillo-faciale.",
      "rd.fi.home.why": "Une vidéo guidée de gua sha et le Gua Sha MUKHA sur mesure, pour prolonger les bienfaits de votre soin entre deux visites.",
      "rd.fi.small": "Vous hésitez ? Mona lit chaque formulaire de santé avant de confirmer, et vous conseillera.",
      "rd.mona.h": "Mona, infirmière diplômée.",
      "rd.f.nurse": "Infirmière",
      "rd.f.nurse.v": "8 ans, infirmière diplômée",
      "rd.f.bg": "Parcours",
      "rd.f.bg.v": "Bloc opératoire, chirurgie maxillo-faciale, salle de réveil",
      "rd.f.room": "La pièce",
      "rd.f.who": "Clientèle",
      "rd.f.who.v": "Femmes uniquement, sur rendez-vous",
      "rd.rv.h": "Avis",
      "rd.rv.third": "troisième visite", "rd.rv.all": "Voir les 14 avis",
      "rd.res.h": "Avant et après.",
      "rd.res.p": "De vraies clientes, photographiées dans la pièce avant et après une séance. Les résultats varient d'une personne à l'autre.",
      "rd.jr.h": "Du studio.",
      "rd.close": "Fermer",
      "rd.faq.h": "Avant de réserver.",
      "rd.faq.f2": "Femmes uniquement. La pièce est climatisée.",
      "rd.faq.f3": "Un acompte de £30 confirme votre réservation.",
      "rd.faq.policies": "Lire les conditions",
      "rd.q1": "Comment réserver ?",
      "rd.a1": "Choisissez votre soin, la date et l'heure sur Fresha et remplissez le formulaire de santé. Mona le lit, confirme que le soin vous convient, puis envoie un lien d'acompte de £30 par WhatsApp ou e-mail. L'acompte est déduit du total le jour même.",
      "rd.q2": "Et si je dois annuler ?",
      "rd.a2": "Prévenez au moins 48 heures à l'avance et votre acompte peut être reporté sur un nouveau rendez-vous. Une annulation plus tardive, ou un rendez-vous manqué, entraîne la perte de l'acompte.",
      "rd.q3": "Le week-end coûte-t-il plus cher ?",
      "rd.a3": "Oui, un supplément de 10 % s'applique le week-end. Le samedi de 11h à 18h, le dimanche sur demande uniquement.",
      "rd.q4": "Ce soin me convient-il ?",
      "rd.a4": "Le soin peut ne pas convenir dans les 4 semaines suivant du Botox, après des injections récentes, une chirurgie ou des soins dentaires, en cas de bouton de fièvre ou d'infection de la peau, ou au premier trimestre de grossesse. En cas de doute, demandez avant de réserver.",
      "rd.q5": "Pourquoi uniquement des femmes ?",
      "rd.a5": "Mona travaille seule dans un studio privé à son domicile : cette règle garantit la sécurité et le confort de la cliente comme de la praticienne.",
      "rd.q6": "Est-ce un traitement médical ?",
      "rd.a6": "Non. Mona est infirmière diplômée, mais les soins Mukha sont des thérapies de bien-être complémentaires. Ils ne remplacent pas l'avis de votre médecin, dentiste ou spécialiste.",
      "rd.visit.h": "Venir au studio.",
      "rd.write.h": "Écrire à Mona.",
      "rd.foot.sign": "Ralentir, s’adoucir.",
    },

    tl: {
      'nav.about': 'Tungkol',
      'nav.services': 'Mga Serbisyo',
      'nav.gallery': 'Galeriya',
      'nav.journal': 'Journal',
      'nav.contact': 'Makipag-ugnayan',
      'nav.book': 'Mag-book Na',

      'hero.eyebrow': 'Holistic na pangangalaga na inspirasyon ng pilosopiya ng yoga',
      'hero.headline': 'Paluwagán ang pag-igting, <em>linangin ang kapayapaan.</em>',
      'hero.sub': 'Natural, hindi mapanghimasok na mga pamamaraan na nakaugat sa malalim na pagpapagaling at natural na kagandahan — dinisenyo upang itaas, hubugin at magbigay ng ningning mula sa loob.',
      'hero.cta.explore': 'Tuklasin ang Mga Serbisyo',
      'hero.cta.meet': 'Makilala ang inyong terapeuta',

      'about.label': 'Tungkol',
      'about.title': 'Higit pa sa facial —<br /><em>isang karanasang pangterapeuta</em>',
      'about.badge': 'Itinatag ni',
      'about.p1': 'Ang MUKHA ay isang holistic na espasyo ng facial therapy na nakatuon sa intentional na haplos, suporta ng nervous system, at natural na pagpapanumbalik.',
      'about.highlight': 'Ang pangalang <em>Mukha</em> — na nangangahulugang "mukha" sa ating wikang Filipino — ay mayroon ding kahulugan sa Sanskrit, ang sinaunang wika kung saan nagmula ang yoga. Sumasalamin ito sa Filipino na ugat ni Mona at ng kanyang pagmamahal sa holistic wellness, nagpapakita ng malalim na ugnayan sa pagitan ng panlabas na pagpapahayag at panloob na kagalingan.',
      'about.p2': 'Pinagsama ang facial myofascial release, buccal massage, face yoga, at holistic na mga facial ritual, ang bawat paggamot ay dinisenyo upang palayain ang tensyon sa mukha, panga, at katawan — habang sinusuportahan ang natural na pagbubuo, sirkulasyon, at malalim na relaxasyon.',
      'about.p3': 'Nainspira ng pilosopiya ng yoga at mga mabagal na wellness na gawi, ang MUKHA ay nag-aalok ng higit pa sa isang facial. Ito ay isang karanasang pangterapeuta na nilikha upang tulungan kang mabagalan, lumambot, at muling makakonekta sa iyong sarili.',
      'about.p4': 'Itinatag ni Mona, isang Rehistradong Nars at Holistic Facial Therapist, ang bawat paggamot ay ginagabayan ng klinikal na kaalaman at intuitive na pag-aalaga — lumilikha ng ligtas, mapagpalaki, at mapagpanumbalik na espasyo para sa bawat kliyente.',
      'about.closing': 'Sa MUKHA, ang kagandahan at wellness ay tiningnan bilang malalim na magkaugnay — kung saan ang relaxasyon, kagalingan, at kalusugan ng mukha ay magkasamang umiiral sa pagkakatugma.',

      'services.label': 'Mga Serbisyo',
      'services.title': 'Mga paggamot na dinisenyo<br /><em>upang ibalik at palayain</em>',
      'services.intro': 'Ang bawat paggamot ay nakatuon sa intentional na haplos, pag-aalaga ng nervous system at natural na pagpapanumbalik.',
      'services.base': 'Pangunahing Paggamot',
      'services.addons': 'Mga Karagdagan',
      'services.packages': 'Mga Pakete',

      'gallery.label': 'Galeriya',
      'gallery.title': 'Sa loob<br /><em>ng espasyo</em>',
      'gallery.intro': 'Isang sulyap sa mundo ng Mukha — kung saan nagtatagpo ang pagpapagaling, haplos at katahimikan.',
      'gallery.cta': 'Tingnan ang Buong Galeriya',

      'testimonials.label': 'Mga Pagsusuri',
      'testimonials.title': 'Ano ang sinasabi<br /><em>ng mga kliyente</em>',
      'testimonials.score': '5.0 · 14 pagsusuri',
      'testimonials.note': 'Nagustuhan ang inyong paggamot? Ibahagi ang inyong karanasan.',
      'testimonials.review.btn': 'Mag-iwan ng Google Review',

      'journal.label': 'Mula sa Studio',
      'journal.title': 'Edukasyon &amp;<br /><em>Mga Pananaw</em>',
      'journal.intro': 'Ibinabahagi ni Mona ang kaalaman mula sa kanyang gawi — tinitignan ang agham at pilosopiya sa likod ng bawat paggamot.',
      'journal.ig': 'Sundan sa Instagram para sa higit pa',

      'contact.label': 'Makipag-ugnayan',
      'contact.title': 'Simulan ang inyong<br /><em>paglalakbay</em>',
      'contact.intro': 'May katanungan o hindi sigurado kung aling paggamot ang angkop para sa inyo? Magpadala ng mensahe at personal na magreresponde si Mona.',
      'contact.female': '✦ Kasalukuyang tinatanggap ng MUKHA ang <strong>mga babaeng kliyente lamang</strong>. Bilang isang solong practitioner na nagtatrabaho mula sa isang pribadong home studio, ang patakarang ito ay upang masiguro ang kaligtasan at kaginhawahan ng lahat.',
      'contact.aircon': '✦ Ang studio ay ganap na air-conditioned para sa iyong kaginhawahan.',
      'contact.book': 'Mag-book sa Fresha →',
      'contact.policies': 'Kapag nakumpleto na ang inyong booking sa Fresha at health intake form, susuriin at kukumpirmahin ni Mona ang inyong appointment — ang isang deposito na <span class="price-val">30</span> ay hihilingin upang masiguro ang inyong lugar. Pakibasa ang aming <a href="policies.html">Mga Patakaran para sa Kliyente &amp; Disclaimer</a> bago mag-book.',
      'contact.hours.title': 'Oras ng Pagbubukas',
      'contact.hours.mon': 'Lunes – Biyernes',
      'contact.hours.sat': 'Sabado',
      'contact.hours.sun': 'Linggo',
      'contact.hours.mon.t': '10am – 7pm',
      'contact.hours.sat.t': '11am – 6pm',
      'contact.hours.sun.t': 'Sa kahilingan lamang',

      'form.name': 'Pangalan',
      'form.name.ph': 'Ang inyong pangalan',
      'form.email': 'Email',
      'form.email.ph': 'inyong@email.com',
      'form.interest': 'Interesado sa',
      'form.select': 'Pumili ng serbisyo…',
      'form.msg': 'Mensahe',
      'form.msg.ph': 'Sabihin sa akin ang kaunti tungkol sa inyo at sa inyong inaasahan…',
      'form.submit': 'Makipag-ugnayan',

      'footer.policies': 'Mga Patakaran para sa Kliyente',

      'gallery.cta.prompt': 'Handa na kayong maranasan ang Mukha?',

      'policies.label': 'Mahalagang Impormasyon',
      'policies.title': 'Mga Patakaran para sa Kliyente<br /><em>&amp; Disclaimer</em>',
      'policies.intro': 'Sa MUKHA, ang kaligtasan, kagalingan, at kaginhawahan ng kliyente ang aming pinakamataas na priyoridad. Mangyaring maglaan ng sandali upang basahin ang sumusunod bago mag-book ng appointment.',
      'policies.cta.prompt': 'May mga katanungan bago mag-book? Narito kami para tumulong.',

      '404.eyebrow': 'Hindi nahanap ang pahina',
      '404.title': 'Ang pahinang ito ay<br /><em>nawala na</em>',
      '404.text': 'Tulad ng isang sandali ng katahimikan na lumilipas, ang pahinang ito ay tila hindi umiiral.<br />Hayaan kaming gabayan kayo pabalik sa kinakailangan ninyo.',
      '404.btn.home': 'Bumalik sa simula',
      '404.btn.consult': 'Mag-book ng konsultasyon',

      'cookie.text': 'Gumagamit ang site na ito ng cookies upang maunawaan ang trapiko ng bisita.',
      'cookie.decline': 'Tanggihan',
      'cookie.accept': 'Tanggapin',

      'service.moksha.desc': 'Signature all-hands myofascial release na paggamot. Ang MOKSHA ay nangangahulugang "kalayaan" sa pilosopiya ng yoga — isang palayain mula sa pag-igting at paghihigpit. Gumagamit ng malambot, nakatarget na presyon sa mukha, leeg, balikat at panga upang palayain ang tensyon sa loob ng fascia at ibalik ang natural na daloy sa buong katawan.',
      'service.moksha.note1': 'Kasama ang libreng 10-minutong plant-based, organic na facial mask.',
      'service.moksha.note2': '✦ Pinakamagandang ipares sa ANTAR para sa ganap na pagpapalaya ng tensyon sa mukha at panga.',
      'service.moksha.b1': 'Natural na pagangat at nabawasang pamamaga',
      'service.moksha.b2': 'Nagrerelibo ng tensyon sa mukha, panga at leeg',
      'service.moksha.b3': 'Nagpapabuti ng sirkulasyon at kadaliang gumalaw',
      'service.moksha.b4': 'Sumusuporta sa lymphatic drainage',
      'service.moksha.b5': 'Hinihikayat ang malalim na relaxasyon',
      'service.savasana.desc': 'Ang SAVASANA ay isinasalin bilang "malalim na pahinga" sa yoga — isang estado ng ganap na relaxasyon at pagpapanumbalik para sa isip at katawan. Piliin ang Savasana kung naghahanap ka ng malalim na relaxasyon at pagtanggal ng stress na walang tuong intensity ng signature MOKSHA Myofascial Release. Sa halip na gumawa sa fascia gamit ang tuloy-tuloy na presyon, ang paggamot na ito ay nag-aalok ng mas magaan, nakakarelax na karanasan na iiwan kang nakapahinga, naka-ground, at nabago. Inspirado ng pagsasanay na ito, ang mabagal na facial ritual na ito ay idinisenyo upang hikayatin ang pag-reset ng nervous system sa pamamagitan ng therapeutic na haplos at intentional na katahimikan. Gumagamit ng organic, plant-based na skincare kasama ang facial massage at essential oils, ang paggamot ay tumutulong na payapain ang tensyon, ibalik ang balanse at suportahan ang malusog, makinang na balat.',
      'service.savasana.note': 'Kasama ang libreng face mask.',
      'service.savasana.b1': 'Malalim na relaxasyon at pagtanggal ng stress',
      'service.savasana.b2': 'Sumusuporta sa regulasyon ng nervous system',
      'service.savasana.b3': 'Nagpapabuti ng kalusugan ng balat at sirkulasyon',
      'service.savasana.b4': 'Tumutulong sa iyo na magmukhang naka-lift at maramdamang nabalik',
      'service.antar.desc': 'Ang ANTAR ay isinasalin bilang "panloob" — kumakatawan sa panloob na kamalayan at palayain mula sa loob. Ang nakatuong intra-oral na pamamaraan na ito ay gumagawa nang malalim sa mga pisngi at panga sa pamamagitan ng maingat, tumpak na masahe upang palayain ang nakaimbak na tensyon at ibalik ang balanse sa ibabang bahagi ng mukha.',
      'service.antar.note': 'Ginagawa gamit ang nitrile gloves. Limitado sa 30 minuto upang masiguro ang kaginhawahan.',
      'service.antar.b1': 'Nagpapalaya ng malalim na tensyon sa panga at mukha',
      'service.antar.b2': 'Tumutulong na maibsan ang pagngangalit ng ngipin (bruxism)',
      'service.antar.b3': 'Nagpapayat at humuhubog sa ibabang bahagi ng mukha',
      'service.antar.b4': 'Sumusuporta sa symmetry ng mukha at relaxasyon',
      'service.urdvha.desc': 'Sa yoga, ang Urdvha ay nangangahulugang "pataas" — sumisimbolo ng pag-angat, paglawak, at ang tuloy-tuloy na daloy ng enerhiya. Kumakatawan ito sa paglago sa pamamagitan ng patuloy at sadyang pagsasanay. Ginawa upang matulungan kang mapanatili ang mga benepisyo ng iyong MUKHA MOKSHA treatment sa pagitan ng mga sesyon, ang Urdvha ay isang paanyaya upang ipagpatuloy ang iyong ritwal sa bahay — nang may layunin at pag-aalaga. Kasama sa iyong at-home ritual ang isang komprehensibong guided video tutorial upang suportahan ang iyong pagsasanay nang may kumpiyansa, at ang eksklusibong MUKHA Gua Sha, na dinisenyo para sa MUKHA upang bumuo sa iyong facial ritual at hikayatin ang pangmatagalang resulta.',
      'service.urdvha.note': 'Ang pagsasama ng malusog na pamumuhay sa regular na gua sha ay maaaring magpahaba ng mga epekto ng mga paggamot ng Mukha nang hanggang 4 na linggo.',
      'service.urdvha.b1': 'Nagto-tone at nagangat',
      'service.urdvha.b2': 'Nagpapalakas ng sirkulasyon',
      'service.urdvha.b3': 'Nagbabawas ng pamamaga',
      'service.urdvha.b4': 'Sumusuporta sa collagen',
      'service.urdvha.b5': 'Kaalaman na magagamit sa bahay upang palawigin ang mga benepisyo ng mga paggamot ng Mukha',
      'service.reset.type': 'Pakete · 4 Sesyon',
      'service.reset.desc': 'Habang ang isang sesyon ay gumagawa ng mga kababalaghan at nagbibigay ng agarang ginhawa, ang apat na magkakasunod na paggamot ay humahantong sa mas matagal na mga benepisyo. Perpekto para sa mga naghahanda para sa espesyal na okasyon o nagbibigay ng pangako sa kanilang kagalingan.',
      'service.reset.b1': 'Personalisadong paggamot sa bawat sesyon',
      'service.reset.b2': 'Kasama ang holistic facial mask',
      'service.reset.b3': 'Aftercare at self-care na gabay',
      'service.reset.b4': 'Agarang ginhawa at pinahusay na mga resulta',
      'services.combo': 'Mga Kombinasyon',
      'service.combo.badge': 'Pinakasikat',
      'service.combo.type': 'Kombinasyon',
      'service.combo.subtitle': 'Facial Treatment na may Buccal Release',
      'service.combo.desc': 'Tuklasin ang pinagsamang benepisyo ng aming myofascial o relaxation technique kasama ang ANTAR buccal release. Ang aming pinakasikat at pinakaepektibong paggamot, para sa kumpletong paglabas ng tensyon sa mukha at panga.',
      'service.combo.b1': 'MOKSHA + ANTAR — myofascial release na may buccal therapy',
      'service.combo.b2': 'SAVASANA + ANTAR — relaxation at lifting na may buccal massage',
      'service.reset.withantar': 'kasama ang ANTAR',
      'services.recovery': 'Pangangalaga sa Paggaling',
      'services.weekend': 'May dagdag na 10% para sa mga appointment tuwing weekend.',
      'service.postop.type': 'Pakete · 4 Home Visit',
      'service.postop.subtitle': 'Isang Mas Malambing na Paggaling',
      'service.postop.price': 'Presyo kapag nagtanong',
      'service.postop.desc': 'Personalisadong facial therapy para suportahan ang iyong paggaling pagkatapos ng cosmetic surgery, ginagawa sa ginhawa ng iyong tahanan. Gamit ang karanasan ni Mona bilang registered nurse sa maxillofacial surgery, ang mga angkop na lymphatic technique ay tumutulong sa daloy ng fluid, sa pamamahala ng pamamaga pagkatapos ng operasyon, at nagbibigay ng ginhawa habang nagpapagaling.',
      'service.postop.b1': '4 na sesyon sa loob ng 4 na linggo',
      'service.postop.b2': '70 minuto bawat sesyon',
      'service.postop.b3': 'Banayad at personalisadong manual lymphatic technique',
      'service.postop.b4': 'Maginhawang home visit',
      'service.enquire': 'Mag-email para Magtanong →',
      'service.book': 'Mag-book Na →',
      // Redesign
      "rd.menu": "Menu",
      "rd.hero.sub": "Myofascial release, buccal massage at lymphatic care mula sa isang registered nurse, sa isang tahimik na kuwarto sa Surbiton. Para sa mga babae.",
      "rd.hero.h1": "Mukha Face Yoga, holistic facial therapy sa Surbiton",
      "rd.name.h": "Ang Mukha ay mukha.",
      "rd.name.p": "Sa Tagalog, ang wika ng Pilipinas kung saan galing si Mona, at sa Sanskrit, ang wika ng yoga. Bawat paggamot ay may salitang Sanskrit para sa ginagawa nito.",
      "rd.tr.h": "Mga paggamot.",
      "rd.tr.combo.word": "Pinakasikat · ang kombinasyon",
      "rd.tr.moksha.word": "Paglaya · myofascial release",
      "rd.tr.savasana.word": "Malalim na pahinga · lymphatic facial ritual",
      "rd.tr.antar.word": "Panloob · buccal release, dagdag",
      "rd.tr.urdvha.word": "Pataas · gua sha sa bahay, dagdag",
      "rd.fi.h": "Saan mo ito dinadala?",
      "rd.fi.p": "Piliin kung ano ang pinakanararamdaman mo, at tingnan kung saan karaniwang nagsisimula si Mona.",
      "rd.fi.jaw": "Panga at paggiling ng ngipin",
      "rd.fi.tension": "Mukha, leeg at balikat",
      "rd.fi.stress": "Stress at hirap matulog",
      "rd.fi.puffy": "Pamamaga",
      "rd.fi.surgery": "Pagkatapos ng cosmetic surgery",
      "rd.fi.home": "Pagpapanatili ng resulta sa bahay",
      "rd.fi.jaw.why": "Myofascial release para sa mukha, leeg at panga, at pagkatapos ay gumagana ang ANTAR sa loob ng pisngi, kung saan naiipon ang tensyon ng paggiling.",
      "rd.fi.tension.why": "Banayad at nakatutok na diin sa mukha, leeg, balikat at panga para mailabas ang tensyon sa fascia.",
      "rd.fi.stress.why": "Isang mas magaan at mabagal na ritwal para sa malalim na relaxation at ginhawa sa stress, para matulungan ang nervous system.",
      "rd.fi.puffy.why": "Tumutulong sa lymphatic drainage at sirkulasyon, para sa natural na lift at mas kaunting pamamaga.",
      "rd.fi.surgery.why": "Apat na banayad na lymphatic session sa bahay sa loob ng apat na linggo, gamit ang karanasan ni Mona bilang nurse sa maxillofacial surgery.",
      "rd.fi.home.why": "Isang guided gua sha video at ang bespoke na MUKHA Gua Sha, para madala ang benepisyo ng paggamot sa pagitan ng mga bisita.",
      "rd.fi.small": "Hindi sigurado? Binabasa ni Mona ang bawat health form bago kumpirmahin, at magmumungkahi siya ng bagay sa iyo.",
      "rd.mona.h": "Mona, registered nurse.",
      "rd.f.nurse": "Nursing",
      "rd.f.nurse.v": "8 taon, registered nurse",
      "rd.f.bg": "Karanasan",
      "rd.f.bg.v": "Operating theatre, maxillofacial surgery, recovery",
      "rd.f.room": "Ang kuwarto",
      "rd.f.who": "Kliyente",
      "rd.f.who.v": "Mga babae lamang, may appointment",
      "rd.rv.h": "Mga review",
      "rd.rv.third": "ikatlong bisita", "rd.rv.all": "Ipakita ang 14 na review",
      "rd.res.h": "Bago at pagkatapos.",
      "rd.res.p": "Mga totoong kliyente, kinunan sa kuwarto bago at pagkatapos ng isang session. Nag-iiba ang resulta sa bawat tao.",
      "rd.jr.h": "Mula sa studio.",
      "rd.close": "Isara",
      "rd.faq.h": "Bago ka mag-book.",
      "rd.faq.f2": "Mga babae lamang. May aircon ang kuwarto.",
      "rd.faq.f3": "May £30 na deposito para makumpirma ang booking.",
      "rd.faq.policies": "Basahin ang client policies",
      "rd.q1": "Paano mag-book?",
      "rd.a1": "Piliin ang paggamot, petsa at oras sa Fresha at sagutan ang health form. Babasahin ito ni Mona, kukumpirmahin kung angkop sa iyo, at magpapadala ng link para sa £30 na deposito sa WhatsApp o email. Ibabawas ang deposito sa kabuuan sa araw mismo.",
      "rd.q2": "Paano kung kailangan kong mag-cancel?",
      "rd.a2": "Magbigay ng abiso nang hindi bababa sa 48 oras at maililipat ang deposito sa bagong appointment. Kapag mas huli ang pag-cancel, o hindi ka sumipot, mawawala ang deposito.",
      "rd.q3": "Mas mahal ba kapag weekend?",
      "rd.a3": "Oo, may dagdag na 10% para sa weekend. Ang Sabado ay 11am hanggang 6pm, at ang Linggo ay kapag hiniling lamang.",
      "rd.q4": "Angkop ba ito sa akin?",
      "rd.a4": "Maaaring hindi angkop ang paggamot sa loob ng 4 na linggo pagkatapos ng Botox, pagkatapos ng fillers, operasyon o dental work, kapag may cold sore o impeksyon sa balat, o sa unang trimester ng pagbubuntis. Kung hindi sigurado, magtanong bago mag-book.",
      "rd.q5": "Bakit mga babae lamang?",
      "rd.a5": "Mag-isang nagtatrabaho si Mona sa isang pribadong home studio, kaya pinananatiling ligtas at komportable ng patakarang ito ang kliyente at ang practitioner.",
      "rd.q6": "Medikal na paggamot ba ito?",
      "rd.a6": "Hindi. Registered nurse si Mona, pero ang mga paggamot ng Mukha ay complementary wellness therapy. Hindi nito pinapalitan ang payo ng iyong doktor, dentista o espesyalista.",
      "rd.visit.h": "Bisitahin ang kuwarto.",
      "rd.write.h": "Sumulat kay Mona.",
      "rd.foot.sign": "Bumagal, lumambot.",
    },
  };

  const HTML_KEYS = new Set([
    'hero.headline', 'about.title', 'about.highlight',
    'services.title', 'services.packages', 'gallery.title',
    'testimonials.title', 'journal.title', 'contact.title',
    'contact.female', 'contact.policies',
    'policies.title', '404.title', '404.text',
  ]);

  const LANG_LABELS = { en: 'EN', fr: 'FR', tl: 'TL' };

  function applyLang(lang) {
    const dict = T[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] === undefined) return;
      if (HTML_KEYS.has(key)) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-non-en', lang !== 'en');

    // Update globe button label
    const langCurrent = document.getElementById('lang-current');
    if (langCurrent) langCurrent.textContent = LANG_LABELS[lang] || lang.toUpperCase();

    // Update active state in dropdown options
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update active state in mobile buttons
    document.querySelectorAll('.lang-btn-mobile').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update pressed state in the plain language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    localStorage.setItem('mukha_lang', lang);
  }

  // Desktop dropdown
  const dropdown = document.getElementById('lang-dropdown');
  const globeBtn = document.getElementById('lang-globe-btn');
  const dropdownMenu = document.getElementById('lang-dropdown-menu');

  if (dropdown && globeBtn && dropdownMenu) {
    globeBtn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      globeBtn.setAttribute('aria-expanded', isOpen);
    });

    dropdownMenu.addEventListener('click', e => {
      const opt = e.target.closest('.lang-option');
      if (!opt) return;
      applyLang(opt.dataset.lang);
      dropdown.classList.remove('open');
      globeBtn.setAttribute('aria-expanded', false);
    });

    document.addEventListener('click', e => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        globeBtn.setAttribute('aria-expanded', false);
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        globeBtn.setAttribute('aria-expanded', false);
        globeBtn.focus();
      }
    });
  }

  // Mobile switcher and plain language buttons
  document.querySelectorAll('.lang-btn-mobile, .lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Apply saved or default language on load
  const saved = localStorage.getItem('mukha_lang') || 'en';
  applyLang(saved);
})();
