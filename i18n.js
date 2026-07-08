(function () {
  const T = {
    en: {
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.gallery': 'Gallery',
      'nav.journal': 'Journal',
      'nav.contact': 'Contact',
      'nav.book': 'Book Now',

      'hero.eyebrow': 'Face Yoga & Holistic Healing',
      'hero.headline': 'Soften Tension.<br /><em>Restore Balance.</em><br />Cultivate Calm.',
      'hero.sub': 'Natural, non-invasive techniques rooted in deeper healing — designed to lift, sculpt and bring radiance from within.',
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
      'services.packages': 'Packages &amp; Subscriptions',

      'gallery.label': 'Gallery',
      'gallery.title': 'Inside<br /><em>the space</em>',
      'gallery.intro': 'A glimpse into the world of Mukha — where healing, touch and stillness come together.',
      'gallery.cta': 'View Full Gallery',

      'testimonials.label': 'Reviews',
      'testimonials.title': 'What clients<br /><em>are saying</em>',
      'testimonials.score': '5.0 · 10 reviews',
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
      'service.savasana.desc': 'SAVASANA translates to "deep rest" — a state of complete relaxation and restoration. This slow-paced facial ritual encourages nervous system reset through therapeutic touch, breathwork and intentional stillness. Using organic, plant-based skincare alongside facial massage, sound therapy and meditation.',
      'service.savasana.note': 'Includes blackhead extraction if required.',
      'service.savasana.b1': 'Deep relaxation & stress relief',
      'service.savasana.b2': 'Supports nervous system regulation',
      'service.savasana.b3': 'Improves skin health & circulation',
      'service.savasana.b4': 'Helps you look and feel restored',
      'service.antar.desc': 'ANTAR translates to "inner" — representing inward awareness and release from within. This focused intra-oral technique works deeply into the cheeks and jaw through careful, precise massage to release stored tension and restore balance to the lower face.',
      'service.antar.note': 'Performed using nitrile gloves. Limited to 15–20 minutes to ensure comfort.',
      'service.antar.b1': 'Releases deep jaw & facial tension',
      'service.antar.b2': 'Helps relieve teeth grinding (bruxism)',
      'service.antar.b3': 'Slims and sculpts the lower face',
      'service.antar.b4': 'Supports facial symmetry & relaxation',
      'service.urdvha.desc': 'A rejuvenating express Gua Sha session to lift, sculpt and detoxify the skin — featuring a step-by-step lesson on proper gua sha tool use, pressure, angles and techniques.',
      'service.urdvha.note': 'Practicing face yoga at home extends the benefits of Mukha treatments for up to 4 weeks.',
      'service.urdvha.b1': 'Tones and lifts',
      'service.urdvha.b2': 'Boosts circulation',
      'service.urdvha.b3': 'Reduces puffiness',
      'service.urdvha.b4': 'Supports collagen',
      'service.urdvha.b5': 'Take-home knowledge',
      'service.reset.type': 'Package · 4 Sessions',
      'service.reset.desc': 'While one session works wonders and provides immediate relief, four consecutive treatments lead to longer-lasting benefits. Perfect for those preparing for a special occasion or committing to their wellbeing.',
      'service.reset.saving': 'Save 30 vs individual sessions',
      'service.reset.b1': 'Personalised treatment each session',
      'service.reset.b2': 'Holistic facial mask included',
      'service.reset.b3': 'Aftercare & self-care guidance',
      'service.reset.b4': 'Immediate relief & amplified results',
      'service.monthly.badge': 'Most Value',
      'service.monthly.type': 'Monthly Subscription',
      'service.monthly.period': '/ month',
      'service.monthly.desc': 'Transform your self-care routine with our monthly MUKHA ritual — a holistic journey designed for your body and mind. Indulge in a rejuvenating facial myofascial massage that improves skin texture and encourages natural sculpting. Experience immediate relief from tension headaches and TMJ discomfort, while engaging in soothing techniques and meditation.',
      'service.monthly.note': 'Minimum 3-month commitment required. Direct debit setup needed. Add-ons available for 20 each.',
      'service.monthly.b1': 'Priority booking',
      'service.monthly.b2': 'Ongoing support & guidance',
      'service.monthly.b3': 'ANTAR or URDVHA add-on for 20 each',
      'service.monthly.b4': 'Soothing techniques & meditation',
      'service.monthly.b5': 'Consistency for maximum benefits',
      'service.book': 'Book Now →',
      'services.summer.label': 'Exclusive Offer',
      'service.summer.badge': 'Limited · Summer 2026',
      'service.summer.type': 'Mukha Summer Package',
      'service.summer.subtitle': 'Course of Four 90-Min Treatments',
      'service.summer.per': 'for the course of four',
      'service.summer.desc': 'Whether you\'re preparing for a wedding, holiday or special event — or simply want to look and feel your best — this is the natural lift and long-lasting glow everyone desires. Four consecutive 90-minute treatments for transformative, cumulative results.',
      'service.summer.b1': 'Natural lift & sculpting',
      'service.summer.b2': 'Long-lasting glow',
      'service.summer.b3': 'Myofascial release & buccal massage',
      'service.summer.b4': 'Perfect pre-event preparation',
    },

    fr: {
      'nav.about': 'À propos',
      'nav.services': 'Soins',
      'nav.gallery': 'Galerie',
      'nav.journal': 'Journal',
      'nav.contact': 'Contact',
      'nav.book': 'Réserver',

      'hero.eyebrow': 'Face Yoga & Soins Holistiques',
      'hero.headline': 'Libérez les tensions.<br /><em>Retrouvez l\'équilibre.</em><br />Cultivez la sérénité.',
      'hero.sub': 'Des techniques naturelles et non invasives, ancrées dans une guérison profonde — conçues pour sublimer, sculpter et rayonner de beauté de l\'intérieur.',
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
      'services.packages': 'Formules &amp; Abonnements',

      'gallery.label': 'Galerie',
      'gallery.title': 'Dans<br /><em>l\'espace</em>',
      'gallery.intro': "Un aperçu de l'univers Mukha — où guérison, toucher et sérénité se rencontrent.",
      'gallery.cta': 'Voir la galerie complète',

      'testimonials.label': 'Avis',
      'testimonials.title': 'Ce que disent<br /><em>nos clientes</em>',
      'testimonials.score': '5.0 · 10 avis',
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
      'service.savasana.desc': "SAVASANA signifie « repos profond » — un état de détente et de restauration complète. Ce rituel facial à rythme lent favorise la réinitialisation du système nerveux grâce au toucher thérapeutique, au travail sur la respiration et à l'immobilité intentionnelle. Utilisant des soins de la peau biologiques à base de plantes, associés au massage facial, à la sonothérapie et à la méditation.",
      'service.savasana.note': "Extraction des points noirs incluse si nécessaire.",
      'service.savasana.b1': "Détente profonde et soulagement du stress",
      'service.savasana.b2': "Soutient la régulation du système nerveux",
      'service.savasana.b3': "Améliore la santé de la peau et la circulation",
      'service.savasana.b4': "Vous aide à paraître et à vous sentir ressourcée",
      'service.antar.desc': "ANTAR signifie « intérieur » — représentant la conscience intérieure et la libération depuis l'intérieur. Cette technique intra-orale ciblée travaille en profondeur dans les joues et la mâchoire grâce à un massage attentif et précis pour libérer les tensions accumulées et restaurer l'équilibre du bas du visage.",
      'service.antar.note': "Réalisé avec des gants en nitrile. Limité à 15–20 minutes pour assurer le confort.",
      'service.antar.b1': "Libère les tensions profondes de la mâchoire et du visage",
      'service.antar.b2': "Aide à soulager le grincement des dents (bruxisme)",
      'service.antar.b3': "Affine et sculpte le bas du visage",
      'service.antar.b4': "Soutient la symétrie faciale et la relaxation",
      'service.urdvha.desc': "Une séance express de Gua Sha revigorante pour lifter, sculpter et détoxifier la peau — avec une leçon étape par étape sur l'utilisation correcte de l'outil gua sha, la pression, les angles et les techniques.",
      'service.urdvha.note': "La pratique du face yoga à domicile prolonge les bienfaits des soins Mukha jusqu'à 4 semaines.",
      'service.urdvha.b1': "Tonifie et lifts",
      'service.urdvha.b2': "Booste la circulation",
      'service.urdvha.b3': "Réduit les gonflements",
      'service.urdvha.b4': "Soutient le collagène",
      'service.urdvha.b5': "Connaissance à emporter chez soi",
      'service.reset.type': "Forfait · 4 Séances",
      'service.reset.desc': "Si une séance fait des merveilles et procure un soulagement immédiat, quatre traitements consécutifs entraînent des bienfaits plus durables. Parfait pour celles qui se préparent pour une occasion spéciale ou qui s'engagent dans leur bien-être.",
      'service.reset.saving': "Économisez £30 par rapport aux séances individuelles",
      'service.reset.b1': "Traitement personnalisé à chaque séance",
      'service.reset.b2': "Masque facial holistique inclus",
      'service.reset.b3': "Conseils d'après-soin et d'autosoins",
      'service.reset.b4': "Soulagement immédiat et résultats amplifiés",
      'service.monthly.badge': "Meilleure valeur",
      'service.monthly.type': "Abonnement mensuel",
      'service.monthly.period': "/ mois",
      'service.monthly.desc': "Transformez votre routine d'autosoins avec notre rituel MUKHA mensuel — un voyage holistique conçu pour votre corps et votre esprit. Profitez d'un massage facial myofascial revitalisant qui améliore la texture de la peau et encourage le sculptage naturel. Ressentez un soulagement immédiat des maux de tête tensionnels et des douleurs de l'ATM, tout en pratiquant des techniques apaisantes et de la méditation.",
      'service.monthly.note': "Engagement minimum de 3 mois requis. Mise en place d'un prélèvement automatique nécessaire. Compléments disponibles pour £20 chacun.",
      'service.monthly.b1': "Réservation prioritaire",
      'service.monthly.b2': "Soutien et conseils continus",
      'service.monthly.b3': "Complément ANTAR ou URDVHA pour £20 chacun",
      'service.monthly.b4': "Techniques apaisantes et méditation",
      'service.monthly.b5': "Régularité pour des résultats optimaux",
      'service.book': "Réserver →",
      'services.summer.label': 'Offre Exclusive',
      'service.summer.badge': 'Limité · Été 2026',
      'service.summer.type': 'Forfait Été Mukha',
      'service.summer.subtitle': 'Cure de Quatre Soins de 90 Minutes',
      'service.summer.per': 'pour la cure de quatre',
      'service.summer.desc': 'Que vous vous prépariez pour un mariage, des vacances ou un événement spécial — ou que vous souhaitiez simplement être au mieux de votre forme — c\'est le lifting naturel et l\'éclat durable que tout le monde désire. Quatre soins consécutifs de 90 minutes pour des résultats transformateurs et cumulatifs.',
      'service.summer.b1': 'Lifting & sculpture naturels',
      'service.summer.b2': 'Éclat longue durée',
      'service.summer.b3': 'Relâchement myofascial & massage buccal',
      'service.summer.b4': 'Préparation idéale avant un événement',
    },

    tl: {
      'nav.about': 'Tungkol',
      'nav.services': 'Mga Serbisyo',
      'nav.gallery': 'Galeriya',
      'nav.journal': 'Journal',
      'nav.contact': 'Makipag-ugnayan',
      'nav.book': 'Mag-book Na',

      'hero.eyebrow': 'Face Yoga at Holistic na Pagpapagaling',
      'hero.headline': 'Paluwagán ang Pag‑igting.<br /><em>Ibalik ang Balanse.</em><br />Linangin ang Kapayapaan.',
      'hero.sub': 'Natural, hindi mapanghimasok na mga pamamaraan para sa malalim na pagpapagaling — dinisenyo upang itaas, hubugin at magbigay ng ningning mula sa loob.',
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
      'services.packages': 'Mga Pakete &amp; Subscription',

      'gallery.label': 'Galeriya',
      'gallery.title': 'Sa loob<br /><em>ng espasyo</em>',
      'gallery.intro': 'Isang sulyap sa mundo ng Mukha — kung saan nagtatagpo ang pagpapagaling, haplos at katahimikan.',
      'gallery.cta': 'Tingnan ang Buong Galeriya',

      'testimonials.label': 'Mga Pagsusuri',
      'testimonials.title': 'Ano ang sinasabi<br /><em>ng mga kliyente</em>',
      'testimonials.score': '5.0 · 10 pagsusuri',
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
      'service.savasana.desc': 'Ang SAVASANA ay isinasalin bilang "malalim na pahinga" — isang estado ng ganap na relaxasyon at pagpapanumbalik. Ang mabagal na facial ritual na ito ay nagtataguyod ng pag-reset ng nervous system sa pamamagitan ng therapeutic na haplos, breathwork at intentional na katahimikan. Gumagamit ng organic, plant-based na skincare kasama ang facial massage, sound therapy at meditasyon.',
      'service.savasana.note': 'Kasama ang pag-aalis ng blackhead kung kinakailangan.',
      'service.savasana.b1': 'Malalim na relaxasyon at pagtanggal ng stress',
      'service.savasana.b2': 'Sumusuporta sa regulasyon ng nervous system',
      'service.savasana.b3': 'Nagpapabuti ng kalusugan ng balat at sirkulasyon',
      'service.savasana.b4': 'Tumutulong sa iyo na magmukhang at maramdamang nabalik',
      'service.antar.desc': 'Ang ANTAR ay isinasalin bilang "panloob" — kumakatawan sa panloob na kamalayan at palayain mula sa loob. Ang nakatuong intra-oral na pamamaraan na ito ay gumagawa nang malalim sa mga pisngi at panga sa pamamagitan ng maingat, tumpak na masahe upang palayain ang nakaimbak na tensyon at ibalik ang balanse sa ibabang bahagi ng mukha.',
      'service.antar.note': 'Ginagawa gamit ang nitrile gloves. Limitado sa 15–20 minuto upang masiguro ang kaginhawahan.',
      'service.antar.b1': 'Nagpapalaya ng malalim na tensyon sa panga at mukha',
      'service.antar.b2': 'Tumutulong na maibsan ang pagngangalit ng ngipin (bruxism)',
      'service.antar.b3': 'Nagpapayat at humuhubog sa ibabang bahagi ng mukha',
      'service.antar.b4': 'Sumusuporta sa symmetry ng mukha at relaxasyon',
      'service.urdvha.desc': 'Isang rejuvenating na express Gua Sha session upang itaas, hubugin at i-detoxify ang balat — na nagtatampok ng hakbang-hakbang na aralin sa tamang paggamit ng gua sha tool, presyon, mga anggulo at mga pamamaraan.',
      'service.urdvha.note': 'Ang pagsasanay ng face yoga sa bahay ay nagpapalawak ng mga benepisyo ng mga paggamot ng Mukha nang hanggang 4 na linggo.',
      'service.urdvha.b1': 'Nagto-tone at nagangat',
      'service.urdvha.b2': 'Nagpapalakas ng sirkulasyon',
      'service.urdvha.b3': 'Nagbabawas ng pamamaga',
      'service.urdvha.b4': 'Sumusuporta sa collagen',
      'service.urdvha.b5': 'Kaalaman na dala-dala sa bahay',
      'service.reset.type': 'Pakete · 4 Sesyon',
      'service.reset.desc': 'Habang ang isang sesyon ay gumagawa ng mga kababalaghan at nagbibigay ng agarang ginhawa, ang apat na magkakasunod na paggamot ay humahantong sa mas matagal na mga benepisyo. Perpekto para sa mga naghahanda para sa espesyal na okasyon o nagbibigay ng pangako sa kanilang kagalingan.',
      'service.reset.saving': 'Makatipid ng £30 kumpara sa mga indibidwal na sesyon',
      'service.reset.b1': 'Personalisadong paggamot sa bawat sesyon',
      'service.reset.b2': 'Kasama ang holistic facial mask',
      'service.reset.b3': 'Aftercare at self-care na gabay',
      'service.reset.b4': 'Agarang ginhawa at pinahusay na mga resulta',
      'service.monthly.badge': 'Pinakamainam',
      'service.monthly.type': 'Buwanang Subscription',
      'service.monthly.period': '/ buwan',
      'service.monthly.desc': 'Baguhin ang inyong self-care routine sa aming buwanang MUKHA ritual — isang holistic na paglalakbay na dinisenyo para sa inyong katawan at isip. Mag-indulge sa isang rejuvenating na facial myofascial massage na nagpapabuti ng texture ng balat at naghihikayat ng natural na pag-sculpt. Maranasan ang agarang ginhawa mula sa tension headaches at TMJ discomfort, habang gumagamit ng nakakarelax na mga pamamaraan at meditasyon.',
      'service.monthly.note': 'Kinakailangan ng minimum na 3-buwanang pangako. Kailangan ng direct debit setup. Mga add-on available para sa £20 bawat isa.',
      'service.monthly.b1': 'Priyoridad sa pag-book',
      'service.monthly.b2': 'Patuloy na suporta at gabay',
      'service.monthly.b3': 'ANTAR o URDVHA add-on para sa £20 bawat isa',
      'service.monthly.b4': 'Nakakarelax na mga pamamaraan at meditasyon',
      'service.monthly.b5': 'Konsistensya para sa pinakamataas na benepisyo',
      'service.book': 'Mag-book Na →',
      'services.summer.label': 'Eksklusibong Alok',
      'service.summer.badge': 'Limitado · Tag-araw 2026',
      'service.summer.type': 'Mukha Summer Package',
      'service.summer.subtitle': 'Kurso ng Apat na 90-Minutong Paggamot',
      'service.summer.per': 'para sa kurso ng apat',
      'service.summer.desc': 'Kung naghahanda ka para sa isang kasal, bakasyon o espesyal na okasyon — o simpleng nais mong magmukhang at maramdamang pinakamahusay — ito ang natural na pag-angat at matagal na ningning na lahat ay nagnanais. Apat na magkakasunod na 90-minutong paggamot para sa mga transformatibo at kumulatibong resulta.',
      'service.summer.b1': 'Natural na pag-angat at pag-sculpt',
      'service.summer.b2': 'Matagal na ningning',
      'service.summer.b3': 'Myofascial release at buccal massage',
      'service.summer.b4': 'Perpektong paghahanda bago ang okasyon',
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

  // Mobile switcher
  document.querySelectorAll('.lang-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Apply saved or default language on load
  const saved = localStorage.getItem('mukha_lang') || 'en';
  applyLang(saved);
})();
