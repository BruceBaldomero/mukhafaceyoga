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
      "services.base": "Base treatments",
      "services.addons": "Add-on or standalone",
      "services.packages": "Packages",

      'gallery.label': 'Gallery',
      'gallery.title': 'Inside<br /><em>the space</em>',
      'gallery.intro': 'A glimpse into the world of Mukha — where healing, touch and stillness come together.',
      'gallery.cta': 'View Full Gallery',

      'testimonials.label': 'Reviews',
      'testimonials.title': 'What clients<br /><em>are saying</em>',
      "testimonials.score": "5.0 · 39 on Fresha · 15 on Google",
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
      "contact.hours.mon": "Monday",
      "contact.hours.sat": "Saturday",
      "contact.hours.sun": "Sunday",
      "contact.hours.mon.t": "10am – 5:30pm",
      "contact.hours.sat.t": "11am – 4:30pm",
      "contact.hours.sun.t": "11am – 3pm",

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

      "cookie.title": "A small note on cookies",
      "cookie.text": "We'd like to use analytics cookies to see how visitors find the site. You can say no and everything still works.",
      "cookie.more": "How we use cookies",
      "cookie.decline": "No thanks",
      "service.details": "View details",
      'cookie.accept': 'Accept',

      "service.moksha.note1": "Includes a complimentary 10 minute plant-based, organic facial mask.",
      'service.moksha.b1': 'Natural lift & reduced puffiness',
      'service.moksha.b2': 'Relieves facial, jaw & neck tension',
      'service.moksha.b3': 'Improves circulation & mobility',
      'service.moksha.b4': 'Supports lymphatic drainage',
      'service.moksha.b5': 'Encourages deep relaxation',
      'service.savasana.b1': 'Deep relaxation & stress relief',
      'service.savasana.b2': 'Supports nervous system regulation',
      'service.savasana.b3': 'Improves skin health & circulation',
      'service.savasana.b4': 'Helps you look lifted and feel restored',
      'service.antar.b1': 'Releases deep jaw & facial tension',
      'service.antar.b2': 'Helps relieve teeth grinding (bruxism)',
      'service.antar.b3': 'Slims and sculpts the lower face',
      'service.antar.b4': 'Supports facial symmetry & relaxation',
      'service.reset.type': 'Package · 4 Sessions',
      "service.reset.b1": "Personalised treatment during each session",
      "service.reset.b2": "A holistic facial mask",
      "service.reset.b3": "Aftercare guidance along with self-care tips",
      "services.combo": "Combinations",
      "service.combo.badge": "Most Popular",
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
      "hero.fact.nurse": "Registered Nurse",
      "hero.fact.reviews": "5.0 from 54 reviews",
      "hero.fact.women": "Women only, Surbiton",
      "nav.theme": "Dark mode",
      "nav.theme.light": "Light mode",
      "finder.label": "Treatment guide",
      "finder.title": "Not sure which treatment <em>is right for you?</em>",
      "finder.intro": "Tap what you would most like help with, and we will suggest the treatment to start with.",
      "finder.jaw": "Jaw & teeth grinding",
      "finder.tension": "Face, neck & shoulders",
      "finder.stress": "Stress & poor sleep",
      "finder.puffy": "Puffiness",
      "finder.surgery": "After cosmetic surgery",
      "finder.jaw.why": "Myofascial release for the face, neck and jaw, then ANTAR works inside the cheeks, where grinding tension sits.",
      "finder.tension.why": "Gentle, targeted pressure across the face, neck, shoulders and jaw to release tension held within the fascia.",
      "finder.stress.why": "A lighter, slow-paced ritual for deep relaxation and stress relief, designed to encourage a nervous system reset.",
      "finder.puffy.why": "Supports lymphatic drainage and circulation, for a natural lift and less puffiness.",
      "finder.surgery.why": "Four gentle lymphatic sessions at home over four weeks, drawing on Mona's nursing background in maxillofacial surgery.",
      "finder.small": "Mona reads every health form before confirming, and will always suggest what suits you best.",
      "steps.label": "Booking",
      "steps.title": "Four simple <em>steps</em>",
      "steps.1.t": "Choose your treatment",
      "steps.1.p": "Pick your treatment, date and time on Fresha.",
      "steps.2.t": "Fill in your health form",
      "steps.2.p": "A short health intake form, completed as part of your Fresha booking.",
      "steps.2.card": "Health intake",
      "steps.2.c1": "Medical conditions",
      "steps.2.c2": "Recent treatments or procedures",
      "steps.2.c3": "Pregnancy",
      "steps.3.t": "Mona confirms",
      "steps.3.p": "Mona reviews your form and sends a 30 deposit link by WhatsApp or email. It comes off your total on the day.",
      "steps.3.card": "Your appointment is suitable and confirmed. Here is your deposit link.",
      "steps.3.meta": "deposit · deducted on the day",
      "steps.4.t": "Arrive and unwind",
      "steps.4.p": "Come to the studio in Surbiton, settle in and let the tension go. Need to change plans? Give 48 hours' notice.",
      "steps.4.meta": "Air-conditioned · women only",
      "steps.policies": "Read the client policies",
      "ba.title": "Before <em>&amp; after</em>",
      "ba.intro": "Real clients, photographed in the studio before and after one session. Results vary from person to person.",
      "cta.line": "Ready when you are. Book your treatment on Fresha.",
      "form.err.name": "Please add your name.",
      "form.err.email": "Please add an email address Mona can reply to.",
      "form.err.summary": "Please check:",
      "form.err.send": "Something went wrong. Please try again or email mukha.faceyoga@gmail.com directly.",
      "form.sending": "Sending…",
      "form.done.title": "Message received",
      "form.done.p1": "Thank you for reaching out. Mona will be in touch shortly.",
      "form.done.p2": "Ready to book? Head to Fresha to choose your treatment, date and time.",
      "service.ma.sub": "Myofascial release with Buccal therapy",
      "service.ma.lead": "Experience a blend of myofascial and buccal therapy designed to provide exceptional results for myofascial lifting.",
      "service.ma.p1": "Experience a blend of myofascial and buccal therapy designed to provide exceptional results for myofascial lifting. This innovative treatment targets deep facial muscles, helping to release tension and improve overall skin tone and texture. Enjoy a rejuvenating experience that enhances your natural beauty while promoting relaxation. Indulge in this holistic approach for a more lifted and youthful appearance.",
      "service.combo.note": "Buccal is £20 as an add-on if selected as a combo.",
      "service.sa.sub": "Relaxation, lifting with Buccal massage",
      "service.sa.lead": "Experience the ultimate combination of relaxation and rejuvenation with this unique service.",
      "service.sa.p1": "Experience the ultimate combination of relaxation and rejuvenation with this unique service. Savasana offers a deep state of rest, allowing your body and mind to unwind completely. Paired with Antar, a specialized Buccal massage, this treatment not only lifts and sculpts the face but also promotes overall well-being. Indulge in a serene escape that nurtures your inner peace while revitalising your appearance. Discover the harmony of relaxation and beauty in one soothing session.",
      "service.moksha.sub": "Myofascial release massage",
      "service.moksha.p1": "Signature all-hands myofascial release treatment.",
      "service.moksha.p2": "MOKSHA means “liberation” in yoga philosophy - a release from tension and restriction.",
      "service.moksha.p3": "Translated through facial therapy, this treatment uses gentle, targeted pressure across the face, neck, shoulders and jaw to release tension held within the fascia (connective tissue) and restore natural flow throughout the body.",
      "service.addon.note": "Add-on discount applies if selected with a base treatment: Buccal release massage, 30 mins, +£20.",
      "service.savasana.sub": "Deep relaxation and lifting massage",
      "service.savasana.p1": "SAVASANA translates to “deep rest” in yoga - a state of complete relaxation and restoration for the mind and body.",
      "service.savasana.p2": "Choose Savasana if you're seeking deep relaxation and stress relief without the focused intensity of my signature Moksha Myofascial Release. Rather than working into the fascia with sustained pressure, this treatment offers a lighter, soothing experience that leaves you feeling rested, grounded, and renewed.",
      "service.savasana.p3": "Inspired by this practice, this slow-paced facial ritual is designed to encourage nervous system reset through therapeutic touch and intentional stillness.",
      "service.savasana.p4": "Using organic, plant-based skincare alongside facial massage and essential oils, the treatment helps calm tension, restore balance and support healthy, radiant skin. Complementary face mask included.",
      "service.antar.sub": "Buccal Release",
      "service.antar.p1": "ANTAR translates to “inner” in yoga philosophy - representing inward awareness and release from within.",
      "service.antar.p2": "This focused intra-oral (inside-the-mouth) advanced technique works deeply into the cheeks and jaw through careful, precise massage to release stored tension and restore balance to the lower face.",
      "service.antar.p3": "The treatment is performed using nitrile gloves and is limited to 30 minutes to ensure comfort and avoid overstimulation of the area.",
      "service.reset.withbuccal": "with Buccal massage",
      "service.reset.p1": "The MOKSHA RESET PACKAGE in 4 sessions combines specialized myofascial release massage techniques to provide immediate relief and enhance your overall wellbeing. While one session will refresh you, committing to four consecutive treatments amplifies the benefits, perfect for those preparing for special occasions where you want to look and feel your absolute best.",
      "service.reset.p2": "Experience the pinnacle of relaxation and healing, all tailored to meet your unique needs.",
      "service.reset.option": "With Buccal massage: enhance your experience with an additional 20 minutes of Buccal Massage, specifically designed to relieve deep jaw tension and sculpt for a visibly refined appearance, all at a reduced price.",
      "contact.hours.tue": "Tuesday",
      "contact.hours.tue.t": "10am – 6pm",
      "contact.hours.wed": "Wednesday – Friday",
      "contact.hours.wed.t": "10am – 5:30pm",
      "testimonials.returning": "Returning client",
      "quote.line1": "The body holds the memory,",
      "quote.line2": "the fascia holds the tension,",
      "quote.line3": "the practice creates space for change.",
      "quote.sub": "Little by little, the body learns. Not to force the body into change, but to create enough safety, awareness and repetition for it to experience something different.",
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
      "services.base": "Soins de base",
      "services.addons": "En complément ou seul",
      "services.packages": "Formules",

      'gallery.label': 'Galerie',
      'gallery.title': 'Dans<br /><em>l\'espace</em>',
      'gallery.intro': "Un aperçu de l'univers Mukha — où guérison, toucher et sérénité se rencontrent.",
      'gallery.cta': 'Voir la galerie complète',

      'testimonials.label': 'Avis',
      'testimonials.title': 'Ce que disent<br /><em>nos clientes</em>',
      "testimonials.score": "5.0 · 39 sur Fresha · 15 sur Google",
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
      "contact.hours.mon": "Lundi",
      "contact.hours.sat": "Samedi",
      "contact.hours.sun": "Dimanche",
      "contact.hours.mon.t": "10h – 17h30",
      "contact.hours.sat.t": "11h – 16h30",
      "contact.hours.sun.t": "11h – 15h",

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

      "cookie.title": "Un petit mot sur les cookies",
      "cookie.text": "Nous aimerions utiliser des cookies d'analyse pour comprendre comment les visiteurs trouvent le site. Vous pouvez refuser, tout fonctionnera quand même.",
      "cookie.more": "Notre usage des cookies",
      "cookie.decline": "Non merci",
      "service.details": "Voir les détails",
      'cookie.accept': 'Accepter',

      "service.moksha.note1": "Comprend un masque visage bio et végétal de 10 minutes offert.",
      'service.moksha.b1': "Lift naturel et réduction des gonflements",
      'service.moksha.b2': "Soulage les tensions du visage, de la mâchoire et du cou",
      'service.moksha.b3': "Améliore la circulation et la mobilité",
      'service.moksha.b4': "Soutient le drainage lymphatique",
      'service.moksha.b5': "Favorise une relaxation profonde",
      'service.savasana.b1': "Détente profonde et soulagement du stress",
      'service.savasana.b2': "Soutient la régulation du système nerveux",
      'service.savasana.b3': "Améliore la santé de la peau et la circulation",
      'service.savasana.b4': "Vous aide à paraître liftée et à vous sentir ressourcée",
      'service.antar.b1': "Libère les tensions profondes de la mâchoire et du visage",
      'service.antar.b2': "Aide à soulager le grincement des dents (bruxisme)",
      'service.antar.b3': "Affine et sculpte le bas du visage",
      'service.antar.b4': "Soutient la symétrie faciale et la relaxation",
      'service.reset.type': "Forfait · 4 Séances",
      "service.reset.b1": "Un soin personnalisé à chaque séance",
      "service.reset.b2": "Un masque visage holistique",
      "service.reset.b3": "Conseils d'après-soin et d'autosoins",
      "services.combo": "Combinaisons",
      "service.combo.badge": "Le plus populaire",
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
      "hero.fact.nurse": "Infirmière diplômée",
      "hero.fact.reviews": "5.0 sur 54 avis",
      "hero.fact.women": "Femmes uniquement, Surbiton",
      "nav.theme": "Mode sombre",
      "nav.theme.light": "Mode clair",
      "finder.label": "Guide des soins",
      "finder.title": "Quel soin <em>vous convient ?</em>",
      "finder.intro": "Touchez ce pour quoi vous aimeriez de l'aide, et nous vous suggérerons le soin par lequel commencer.",
      "finder.jaw": "Mâchoire et bruxisme",
      "finder.tension": "Visage, cou et épaules",
      "finder.stress": "Stress et mauvais sommeil",
      "finder.puffy": "Gonflement",
      "finder.surgery": "Après une chirurgie esthétique",
      "finder.jaw.why": "Libération myofasciale du visage, du cou et de la mâchoire, puis ANTAR travaille à l'intérieur des joues, là où se loge la tension du bruxisme.",
      "finder.tension.why": "Une pression douce et ciblée sur le visage, le cou, les épaules et la mâchoire pour libérer la tension retenue dans le fascia.",
      "finder.stress.why": "Un rituel plus léger et lent pour une relaxation profonde et le soulagement du stress, pensé pour apaiser le système nerveux.",
      "finder.puffy.why": "Favorise le drainage lymphatique et la circulation, pour un effet liftant naturel et moins de gonflement.",
      "finder.surgery.why": "Quatre séances lymphatiques douces à domicile sur quatre semaines, grâce à l'expérience d'infirmière de Mona en chirurgie maxillo-faciale.",
      "finder.small": "Mona lit chaque formulaire de santé avant de confirmer, et vous conseillera toujours ce qui vous convient le mieux.",
      "steps.label": "Réservation",
      "steps.title": "Quatre étapes <em>simples</em>",
      "steps.1.t": "Choisissez votre soin",
      "steps.1.p": "Choisissez votre soin, la date et l'heure sur Fresha.",
      "steps.2.t": "Remplissez le formulaire de santé",
      "steps.2.p": "Un court formulaire de santé, rempli lors de votre réservation Fresha.",
      "steps.2.card": "Formulaire de santé",
      "steps.2.c1": "Problèmes de santé",
      "steps.2.c2": "Soins ou interventions récents",
      "steps.2.c3": "Grossesse",
      "steps.3.t": "Mona confirme",
      "steps.3.p": "Mona lit votre formulaire et envoie un lien d'acompte de £30 par WhatsApp ou e-mail. Il est déduit du total le jour même.",
      "steps.3.card": "Votre rendez-vous est adapté et confirmé. Voici votre lien d'acompte.",
      "steps.3.meta": "acompte · déduit le jour même",
      "steps.4.t": "Arrivez et détendez-vous",
      "steps.4.p": "Venez au studio à Surbiton, installez-vous et laissez la tension partir. Un changement ? Prévenez 48 heures à l'avance.",
      "steps.4.meta": "Climatisé · femmes uniquement",
      "steps.policies": "Lire les conditions",
      "ba.title": "Avant <em>&amp; après</em>",
      "ba.intro": "De vraies clientes, photographiées au studio avant et après une séance. Les résultats varient d'une personne à l'autre.",
      "cta.line": "Quand vous êtes prête. Réservez votre soin sur Fresha.",
      "form.err.name": "Veuillez indiquer votre nom.",
      "form.err.email": "Veuillez indiquer une adresse e-mail à laquelle Mona peut répondre.",
      "form.err.summary": "Veuillez vérifier :",
      "form.err.send": "Une erreur s'est produite. Réessayez ou écrivez directement à mukha.faceyoga@gmail.com.",
      "form.sending": "Envoi…",
      "form.done.title": "Message reçu",
      "form.done.p1": "Merci pour votre message. Mona vous répondra très vite.",
      "form.done.p2": "Prête à réserver ? Rendez-vous sur Fresha pour choisir votre soin, la date et l'heure.",
      "service.ma.sub": "Libération myofasciale avec thérapie buccale",
      "service.ma.lead": "Un mélange de thérapie myofasciale et buccale conçu pour des résultats exceptionnels en lifting myofascial.",
      "service.ma.p1": "Un mélange de thérapie myofasciale et buccale conçu pour des résultats exceptionnels en lifting myofascial. Ce soin innovant cible les muscles profonds du visage, aidant à libérer les tensions et à améliorer le teint et la texture de la peau. Profitez d'une expérience revitalisante qui sublime votre beauté naturelle tout en favorisant la détente. Offrez-vous cette approche holistique pour un visage plus lifté et plus jeune.",
      "service.combo.note": "Le massage buccal est à 20 £ en complément s'il est choisi en combinaison.",
      "service.sa.sub": "Relaxation et lifting avec massage buccal",
      "service.sa.lead": "L'alliance ultime de la relaxation et du ressourcement, dans un soin unique.",
      "service.sa.p1": "L'alliance ultime de la relaxation et du ressourcement, dans un soin unique. Savasana offre un état de repos profond, permettant au corps et à l'esprit de se détendre complètement. Associé à Antar, un massage buccal spécialisé, ce soin lifte et sculpte le visage tout en favorisant le bien-être général. Offrez-vous une parenthèse sereine qui nourrit votre paix intérieure tout en revitalisant votre apparence. Découvrez l'harmonie de la relaxation et de la beauté en une seule séance apaisante.",
      "service.moksha.sub": "Massage de libération myofasciale",
      "service.moksha.p1": "Soin signature de libération myofasciale, entièrement réalisé à la main.",
      "service.moksha.p2": "MOKSHA signifie « libération » dans la philosophie du yoga : une libération des tensions et des restrictions.",
      "service.moksha.p3": "Appliqué au soin du visage, ce traitement utilise une pression douce et ciblée sur le visage, le cou, les épaules et la mâchoire pour libérer les tensions retenues dans le fascia (tissu conjonctif) et rétablir une circulation naturelle dans tout le corps.",
      "service.addon.note": "Tarif réduit en complément d'un soin de base : massage de libération buccale, 30 min, +20 £.",
      "service.savasana.sub": "Massage de relaxation profonde et liftant",
      "service.savasana.p1": "SAVASANA signifie « repos profond » en yoga : un état de relaxation et de restauration complètes du corps et de l'esprit.",
      "service.savasana.p2": "Choisissez Savasana si vous recherchez une relaxation profonde et un soulagement du stress, sans l'intensité ciblée de mon soin signature Moksha. Plutôt que de travailler le fascia par une pression soutenue, ce soin offre une expérience plus légère et apaisante qui vous laisse reposée, ancrée et ressourcée.",
      "service.savasana.p3": "Inspiré de cette pratique, ce rituel facial lent est conçu pour favoriser une réinitialisation du système nerveux grâce au toucher thérapeutique et à l'immobilité intentionnelle.",
      "service.savasana.p4": "Avec des soins bio et végétaux, un massage du visage et des huiles essentielles, ce soin aide à apaiser les tensions, rétablir l'équilibre et soutenir une peau saine et éclatante. Masque visage offert.",
      "service.antar.sub": "Libération buccale",
      "service.antar.p1": "ANTAR signifie « intérieur » dans la philosophie du yoga : la conscience tournée vers soi et la libération venue de l'intérieur.",
      "service.antar.p2": "Cette technique avancée intra-buccale (à l'intérieur de la bouche) travaille en profondeur les joues et la mâchoire par un massage précis et attentif, pour libérer les tensions accumulées et rééquilibrer le bas du visage.",
      "service.antar.p3": "Le soin est réalisé avec des gants en nitrile et limité à 30 minutes pour garantir le confort et éviter de surstimuler la zone.",
      "service.reset.withbuccal": "avec massage buccal",
      "service.reset.p1": "La formule MOKSHA RESET en 4 séances associe des techniques spécialisées de libération myofasciale pour un soulagement immédiat et un mieux-être général. Une séance vous ressource ; quatre séances consécutives amplifient les bienfaits, idéal avant une occasion spéciale où vous voulez être et vous sentir au meilleur de vous-même.",
      "service.reset.p2": "Le summum de la relaxation et du soin, entièrement adapté à vos besoins.",
      "service.reset.option": "Avec massage buccal : enrichissez votre expérience de 20 minutes supplémentaires de massage buccal, conçu pour soulager les tensions profondes de la mâchoire et sculpter le visage, le tout à prix réduit.",
      "contact.hours.tue": "Mardi",
      "contact.hours.tue.t": "10h – 18h",
      "contact.hours.wed": "Mercredi – Vendredi",
      "contact.hours.wed.t": "10h – 17h30",
      "testimonials.returning": "Cliente fidèle",
      "quote.line1": "Le corps garde la mémoire,",
      "quote.line2": "le fascia garde la tension,",
      "quote.line3": "la pratique crée l’espace du changement.",
      "quote.sub": "Peu à peu, le corps apprend. Non pas forcer le corps à changer, mais créer assez de sécurité, de conscience et de répétition pour qu'il vive quelque chose de différent.",
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
      "services.base": "Mga pangunahing paggamot",
      "services.addons": "Dagdag o hiwalay na paggamot",
      "services.packages": "Mga Pakete",

      'gallery.label': 'Galeriya',
      'gallery.title': 'Sa loob<br /><em>ng espasyo</em>',
      'gallery.intro': 'Isang sulyap sa mundo ng Mukha — kung saan nagtatagpo ang pagpapagaling, haplos at katahimikan.',
      'gallery.cta': 'Tingnan ang Buong Galeriya',

      'testimonials.label': 'Mga Pagsusuri',
      'testimonials.title': 'Ano ang sinasabi<br /><em>ng mga kliyente</em>',
      "testimonials.score": "5.0 · 39 sa Fresha · 15 sa Google",
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
      "contact.hours.mon": "Lunes",
      "contact.hours.sat": "Sabado",
      "contact.hours.sun": "Linggo",
      "contact.hours.mon.t": "10am – 5:30pm",
      "contact.hours.sat.t": "11am – 4:30pm",
      "contact.hours.sun.t": "11am – 3pm",

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

      "cookie.title": "Isang maikling paalala tungkol sa cookies",
      "cookie.text": "Gusto naming gumamit ng analytics cookies para malaman kung paano nahahanap ng mga bisita ang site. Puwede kang tumanggi at gagana pa rin ang lahat.",
      "cookie.more": "Paano namin ginagamit ang cookies",
      "cookie.decline": "Hindi, salamat",
      "service.details": "Tingnan ang detalye",
      'cookie.accept': 'Tanggapin',

      "service.moksha.note1": "Kasama ang libreng 10 minutong plant-based at organic na facial mask.",
      'service.moksha.b1': 'Natural na pagangat at nabawasang pamamaga',
      'service.moksha.b2': 'Nagrerelibo ng tensyon sa mukha, panga at leeg',
      'service.moksha.b3': 'Nagpapabuti ng sirkulasyon at kadaliang gumalaw',
      'service.moksha.b4': 'Sumusuporta sa lymphatic drainage',
      'service.moksha.b5': 'Hinihikayat ang malalim na relaxasyon',
      'service.savasana.b1': 'Malalim na relaxasyon at pagtanggal ng stress',
      'service.savasana.b2': 'Sumusuporta sa regulasyon ng nervous system',
      'service.savasana.b3': 'Nagpapabuti ng kalusugan ng balat at sirkulasyon',
      'service.savasana.b4': 'Tumutulong sa iyo na magmukhang naka-lift at maramdamang nabalik',
      'service.antar.b1': 'Nagpapalaya ng malalim na tensyon sa panga at mukha',
      'service.antar.b2': 'Tumutulong na maibsan ang pagngangalit ng ngipin (bruxism)',
      'service.antar.b3': 'Nagpapayat at humuhubog sa ibabang bahagi ng mukha',
      'service.antar.b4': 'Sumusuporta sa symmetry ng mukha at relaxasyon',
      'service.reset.type': 'Pakete · 4 Sesyon',
      "service.reset.b1": "Personalisadong paggamot sa bawat sesyon",
      "service.reset.b2": "Isang holistic na facial mask",
      "service.reset.b3": "Gabay sa aftercare at mga tip sa self-care",
      "services.combo": "Mga Kombinasyon",
      "service.combo.badge": "Pinakasikat",
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
      "hero.fact.nurse": "Registered Nurse",
      "hero.fact.reviews": "5.0 mula sa 54 na review",
      "hero.fact.women": "Mga babae lamang, Surbiton",
      "nav.theme": "Dark mode",
      "nav.theme.light": "Light mode",
      "finder.label": "Gabay sa paggamot",
      "finder.title": "Hindi sigurado kung aling paggamot <em>ang bagay sa iyo?</em>",
      "finder.intro": "I-tap kung saan mo pinakagustong matulungan, at imumungkahi namin ang paggamot na dapat simulan.",
      "finder.jaw": "Panga at paggiling ng ngipin",
      "finder.tension": "Mukha, leeg at balikat",
      "finder.stress": "Stress at hirap matulog",
      "finder.puffy": "Pamamaga",
      "finder.surgery": "Pagkatapos ng cosmetic surgery",
      "finder.jaw.why": "Myofascial release para sa mukha, leeg at panga, at pagkatapos ay gumagana ang ANTAR sa loob ng pisngi, kung saan naiipon ang tensyon ng paggiling.",
      "finder.tension.why": "Banayad at nakatutok na diin sa mukha, leeg, balikat at panga para mailabas ang tensyon sa fascia.",
      "finder.stress.why": "Isang mas magaan at mabagal na ritwal para sa malalim na relaxation at ginhawa sa stress, para matulungan ang nervous system.",
      "finder.puffy.why": "Tumutulong sa lymphatic drainage at sirkulasyon, para sa natural na lift at mas kaunting pamamaga.",
      "finder.surgery.why": "Apat na banayad na lymphatic session sa bahay sa loob ng apat na linggo, gamit ang karanasan ni Mona bilang nurse sa maxillofacial surgery.",
      "finder.small": "Binabasa ni Mona ang bawat health form bago kumpirmahin, at palagi siyang magmumungkahi ng pinakabagay sa iyo.",
      "steps.label": "Pag-book",
      "steps.title": "Apat na simpleng <em>hakbang</em>",
      "steps.1.t": "Piliin ang iyong paggamot",
      "steps.1.p": "Piliin ang paggamot, petsa at oras sa Fresha.",
      "steps.2.t": "Sagutan ang health form",
      "steps.2.p": "Isang maikling health intake form, sinasagutan bilang bahagi ng iyong Fresha booking.",
      "steps.2.card": "Health intake",
      "steps.2.c1": "Mga kondisyong medikal",
      "steps.2.c2": "Mga kamakailang paggamot o procedure",
      "steps.2.c3": "Pagbubuntis",
      "steps.3.t": "Kinukumpirma ni Mona",
      "steps.3.p": "Binabasa ni Mona ang iyong form at nagpapadala ng link para sa £30 na deposito sa WhatsApp o email. Ibabawas ito sa kabuuan sa araw mismo.",
      "steps.3.card": "Angkop at kumpirmado na ang iyong appointment. Narito ang link ng iyong deposito.",
      "steps.3.meta": "deposito · ibabawas sa araw mismo",
      "steps.4.t": "Dumating at mag-relax",
      "steps.4.p": "Pumunta sa studio sa Surbiton, umupo at hayaang mawala ang tensyon. Magbabago ng plano? Magbigay ng 48 oras na abiso.",
      "steps.4.meta": "May aircon · mga babae lamang",
      "steps.policies": "Basahin ang client policies",
      "ba.title": "Bago <em>&amp; pagkatapos</em>",
      "ba.intro": "Mga totoong kliyente, kinunan sa studio bago at pagkatapos ng isang session. Nag-iiba ang resulta sa bawat tao.",
      "cta.line": "Handa ka na? I-book ang iyong paggamot sa Fresha.",
      "form.err.name": "Pakilagay ang iyong pangalan.",
      "form.err.email": "Pakilagay ang email na masasagot ni Mona.",
      "form.err.summary": "Pakisuri:",
      "form.err.send": "May nangyaring mali. Subukang muli o mag-email nang direkta sa mukha.faceyoga@gmail.com.",
      "form.sending": "Ipinapadala…",
      "form.done.title": "Natanggap ang mensahe",
      "form.done.p1": "Salamat sa pakikipag-ugnayan. Sasagot si Mona sa lalong madaling panahon.",
      "form.done.p2": "Handa nang mag-book? Pumunta sa Fresha para piliin ang paggamot, petsa at oras.",
      "service.ma.sub": "Myofascial release na may Buccal therapy",
      "service.ma.lead": "Pinagsamang myofascial at buccal therapy na idinisenyo para sa natatanging resulta sa myofascial lifting.",
      "service.ma.p1": "Pinagsamang myofascial at buccal therapy na idinisenyo para sa natatanging resulta sa myofascial lifting. Tinututukan ng makabagong paggamot na ito ang malalalim na kalamnan ng mukha para mailabas ang tensyon at mapaganda ang kulay at texture ng balat. Isang nakapagpapasiglang karanasan na nagpapatingkad sa iyong natural na ganda habang nagpapa-relax. Isang holistic na paraan para sa mas lifted at mas batang hitsura.",
      "service.combo.note": "Ang buccal ay £20 bilang dagdag kapag pinili bilang kombinasyon.",
      "service.sa.sub": "Relaxation at lifting na may Buccal massage",
      "service.sa.lead": "Ang pinakamagandang pagsasama ng relaxation at pagpapanibago sa isang natatanging serbisyo.",
      "service.sa.p1": "Ang pinakamagandang pagsasama ng relaxation at pagpapanibago sa isang natatanging serbisyo. Ang Savasana ay nagbibigay ng malalim na pahinga para tuluyang makapag-relax ang katawan at isip. Kasama ang Antar, isang espesyal na Buccal massage, hindi lang nito nili-lift at sine-sculpt ang mukha kundi nakatutulong din sa kabuuang kagalingan. Isang payapang pahinga na nag-aalaga sa iyong panloob na kapayapaan habang pinasisigla ang iyong hitsura. Damhin ang pagkakaisa ng relaxation at ganda sa isang nakapapawing sesyon.",
      "service.moksha.sub": "Myofascial release massage",
      "service.moksha.p1": "Signature na myofascial release treatment, gamit lamang ang mga kamay.",
      "service.moksha.p2": "Ang MOKSHA ay nangangahulugang “paglaya” sa pilosopiya ng yoga — paglaya mula sa tensyon at paninikip.",
      "service.moksha.p3": "Sa facial therapy, gumagamit ang paggamot na ito ng banayad at nakatutok na diin sa mukha, leeg, balikat at panga para mailabas ang tensyong naipon sa fascia (connective tissue) at maibalik ang natural na daloy sa buong katawan.",
      "service.addon.note": "May discount sa dagdag kapag pinili kasama ng pangunahing paggamot: Buccal release massage, 30 minuto, +£20.",
      "service.savasana.sub": "Malalim na relaxation at lifting massage",
      "service.savasana.p1": "Ang SAVASANA ay nangangahulugang “malalim na pahinga” sa yoga — isang estado ng ganap na relaxation at pagpapanumbalik para sa isip at katawan.",
      "service.savasana.p2": "Piliin ang Savasana kung gusto mo ng malalim na relaxation at ginhawa sa stress nang walang tutok na intensidad ng aking signature na Moksha Myofascial Release. Sa halip na diinan ang fascia nang matagal, mas magaan at nakapapawi ang paggamot na ito, at mag-iiwan sa iyo ng pakiramdam na pahinga, panatag at panibago.",
      "service.savasana.p3": "Hango sa praktikang ito, ang mabagal na facial ritual na ito ay idinisenyo para matulungang mag-reset ang nervous system sa pamamagitan ng therapeutic touch at sinasadyang katahimikan.",
      "service.savasana.p4": "Gamit ang organic at plant-based na skincare kasama ng facial massage at essential oils, tumutulong ang paggamot na pahupain ang tensyon, ibalik ang balanse at suportahan ang malusog at maningning na balat. Kasama ang libreng face mask.",
      "service.antar.sub": "Buccal Release",
      "service.antar.p1": "Ang ANTAR ay nangangahulugang “panloob” sa pilosopiya ng yoga — kamalayan sa loob at paglaya mula sa loob.",
      "service.antar.p2": "Ang advanced na intra-oral (sa loob ng bibig) na teknik na ito ay malalim na gumagana sa pisngi at panga sa pamamagitan ng maingat at eksaktong masahe para mailabas ang naipong tensyon at maibalik ang balanse sa ibabang bahagi ng mukha.",
      "service.antar.p3": "Isinasagawa ito gamit ang nitrile gloves at limitado sa 30 minuto para matiyak ang ginhawa at maiwasan ang sobrang stimulation ng bahagi.",
      "service.reset.withbuccal": "may Buccal massage",
      "service.reset.p1": "Pinagsasama ng MOKSHA RESET PACKAGE sa 4 na sesyon ang espesyal na myofascial release techniques para sa agarang ginhawa at mas mabuting kabuuang kalusugan. Nakapagpapasigla na ang isang sesyon, pero mas lumalakas ang benepisyo sa apat na magkakasunod na paggamot — perpekto para sa mga naghahanda sa espesyal na okasyon kung saan gusto mong maging pinakamaganda ang hitsura at pakiramdam.",
      "service.reset.p2": "Damhin ang pinakamataas na antas ng relaxation at paggaling, iniangkop sa iyong mga pangangailangan.",
      "service.reset.option": "May Buccal massage: dagdagan ang karanasan ng 20 minutong Buccal Massage, na idinisenyo para mapawi ang malalim na tensyon sa panga at i-sculpt ang mukha, sa mas mababang presyo.",
      "contact.hours.tue": "Martes",
      "contact.hours.tue.t": "10am – 6pm",
      "contact.hours.wed": "Miyerkules – Biyernes",
      "contact.hours.wed.t": "10am – 5:30pm",
      "testimonials.returning": "Bumabalik na kliyente",
      "quote.line1": "Ang katawan ang nag-iingat ng alaala,",
      "quote.line2": "ang fascia ang nag-iingat ng tensyon,",
      "quote.line3": "ang praktika ang lumilikha ng puwang para sa pagbabago.",
      "quote.sub": "Unti-unti, natututo ang katawan. Hindi pinipilit ang katawan na magbago, kundi lumilikha ng sapat na kaligtasan, kamalayan at pag-uulit para maranasan nito ang isang bagay na iba.",
    },
  };

  const HTML_KEYS = new Set([
    'hero.headline', 'about.title', 'about.highlight',
    'services.title', 'services.packages', 'gallery.title',
    'testimonials.title', 'journal.title', 'contact.title',
    'contact.female', 'contact.policies',
    'policies.title', '404.title', '404.text',
    'finder.title', 'steps.title', 'ba.title',
  ]);

  let current = 'en';
  // Lets other scripts read a string in the current language
  window.mukhaT = key => (T[current] && T[current][key]) || (T.en && T.en[key]) || null;

  const LANG_LABELS = { en: 'EN', fr: 'FR', tl: 'TL' };

  function applyLang(lang) {
    const dict = T[lang];
    if (!dict) return;
    current = lang;

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
    document.dispatchEvent(new CustomEvent('mukha:lang', { detail: lang }));
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
