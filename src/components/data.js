// data.js
const treatments = [
  {
    id: 1,
    title: "Swedish Massage",
    description: "Light pressure, improves circulation, relaxes tension",
    detailedDescription: "This traditional technique uses light to medium pressure with long kneading and gliding strokes. Swedish massage is designed to enhance oxygen levels in the body, improve blood circulation, and relieve tension, promoting deep relaxation and overall well-being.",
    image: "/images/swedish-massage.jpg",
    category: "LIGHT",
    price: 100,
    duration: 60
  },
  {
    id: 2,
    title: "Balinese Massage",
    description: "Combining streches, pressures and oils",
    detailedDescription: "A harmonious blend of gentle stretches, acupressure, reflexology, and aromatherapy, this massage stimulates circulation, oxygen flow, and energy throughout your body. Techniques like kneading, skin rolling, and pressure point stimulation, combined with essential oils, create a deeply relaxing experience that restores balance and promotes a sense of calm.",
    image: "/images/deep-tissue.jpg",
    category: "MEDIUM",
    price: 120,
    duration: 60
  },
  {
    id: 3,
    title: "Deep Tissue Massage",
    description: "Relieves pain, tension and promotes recovery",
    detailedDescription: "This intensive therapy targets deeper layers of muscles and connective tissues using firm pressure and slow strokes. Ideal for relieving chronic pain, muscle tension, and stiffness, it enhances mobility, promotes circulation, and aids in recovery from physical strain.",
    image: "/images/couples-massage.jpg",
    category: "HARD",
    price: 220,
    duration: 90
  },
  {
    id: 4,
    title: "Aroma Therapy",
    description: "Fragrance therapy for mind and body",
    detailedDescription: "Experience the dual benefits of a relaxing body massage combined with the soothing power of aromatic essential oils. Long kneading strokes stimulate your body, while the calming scents promote mental clarity, reduce stress, and induce a deep sense of relaxation and wellness.",
    image: "/images/honeymoon-package.jpg",
    category: "LIGHT",
    price: 350,
    duration: 120
  },
  {
    id: 5,
    title: "Bella Vida Signature Massage",
    description: "Enhances Glow,Relaxation & Rejuvenation",
    detailedDescription: "This is a massage that will brighten your royal aura and bring to you that special internal glow of well being accompanied by a radiant and glowing appearance on the outside an exclusive body scrub will be given to you after the end of the massage.",
    image: "/images/coffee-scrub.jpg",
    category: ["SPECIAL","SCRUB"],
    price: 90,
    duration: 45
  },
  {
    id: 6,
    title: "Four Hands Massage",
    description: "Two therapists for synchronized relaxation",
    detailedDescription: "A four-hands massage is a luxurious and deeply relaxing experience where two expert therapists work in perfect synchronization, using coordinated techniques to target tension and stress. The synchronized movements allow for a more intense and balanced pressure, enhancing circulation, relieving muscle stiffness, and promoting overall relaxation. This indulgent treatment provides a heightened sense of calm, leaving you feeling rejuvenated and refreshed, as the synchronized strokes work together to restore balance and harmony to your body and mind.",
    image: "/images/salt-scrub.jpg",
    category: ["SPECIAL","HARD"],
    price: 85,
    duration: 45
  },
  {
    id: 7,
    title: "Thai Dry Massage",
    description: "Stretching, pressure, energy flow, no oil",
    detailedDescription: "A traditional therapy that combines gentle stretching, acupressure, and rhythmic movements, all performed without oil. This massage helps to improve flexibility, reduce tension, and enhance energy flow, promoting relaxation and balance throughout the body.",
    image: "/images/hot-stone.jpg",
    category: "MEDIUM",
    price: 130,
    duration: 75
  },
  {
    id: 8,
    title: "Herb Potli Massage",
    description: "Herbal pouches relieve tension, detoxify",
    detailedDescription: "This therapeutic massage uses warm herbal pouches filled with a blend of medicinal herbs, which are applied to the body. The heat from the pouches helps relieve muscle tension, improve circulation, and detoxify the body, while the herbal infusion nourishes the skin and promotes relaxation.",
    image: "/images/pregnancy-massage.jpg",
    category: "ALL",
    price: 110,
    duration: 60
  },
  {
    id: 9,
    title: "Foot Reflexology",
    description: "Foot reflexology with or without herb potli",
    detailedDescription: "A therapeutic treatment that applies pressure to specific points on the feet, which correspond to different areas of the body. It helps improve circulation, relieve stress, and promote overall relaxation and healing by stimulating the body’s natural energy flow.",
    image: "/images/weekend-special.jpg",
    category: "HARD",
    price: "Varies",
    duration: "Varies"
  },
  {
    id: 10,
    title: "Cleopatra Treatment",
    description: "Ancient technique for skin rejuvenation",
    detailedDescription: "Experience the ancient Egyptian technique of dissolving tension and stress while rejuvenating your skin. This soothing treatment combines a soft massage with a scrub and milk cream to nourish and hydrate. It improves skin elasticity, leaving your skin silky smooth with a natural glow and enhanced radiance!",
    image: "/images/first-time.jpg",
    category: ["SPECIAL","SCRUB"],
    price: 115,
    duration: 90
  },
  {
    id: 11,
    title: "Couples Therapeutic Massage",
    description: "Couples massage for relaxation and rejuvenation",
    detailedDescription: "Immerse yourselves in a deeply relaxing experience with a side-by-side therapeutic massage designed for couples. This intimate treatment eases tension, relieves stress, and enhances connection, providing both physical rejuvenation and emotional harmony. Let the soothing touch of skilled therapists create a tranquil atmosphere where you and your partner can unwind, reconnect, and leave feeling completely refreshed.",
    image: "/images/first-time.jpg",
    category: "COUPLES",
    price: 115,
    duration: 90
  },
 
];

export default treatments;
  