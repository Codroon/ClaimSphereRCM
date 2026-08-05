// Curated, license-free healthcare-BUSINESS stock imagery (Unsplash CDN) —
// billing, finance, analytics, documents, teamwork, and professional portraits.
// No clinical / operating-room shots. Every URL was verified to resolve (HTTP 200).
//
// The pool holds 40 distinct images so the 40 blog posts each get a unique one
// (see blogImage), and service / specialty pages have plenty of variety too.
const PHOTOS = [
  "photo-1554224155-6726b3ff858f", // finance / accounting desk
  "photo-1450101499163-c8848c66ca85", // laptop + notes, office work
  "photo-1460925895917-afdab827c52f", // business analytics on laptop
  "photo-1551288049-bebda4e38f71", // charts / reporting dashboard
  "photo-1521737604893-d14cc237f11d", // team meeting
  "photo-1600880292203-757bb62b4baf", // business handshake / partnership
  "photo-1573496359142-b8d87734a5a2", // professional with laptop
  "photo-1454165804606-c3d57bc86b40", // financial planning / paperwork
  "photo-1559839734-2b71ea197ec2", // professional portrait (outdoor)
  "photo-1622253692010-333f2da6031d", // healthcare professional portrait
  "photo-1584982751601-97dcc096659c", // stethoscope on white (neutral)
  "photo-1612349317150-e413f6a5b16d", // professional portrait, arms crossed
  "photo-1631217868264-e5b90bb7e133", // consultation / meeting
  "photo-1576091160550-2173dba999ef", // hands on laptop, desk
  "photo-1587560699334-cc4ff634909a", // laptop + phone on desk
  "photo-1526304640581-d334cdbbf45e", // finance / money
  "photo-1504868584819-f8e8b4b6d7e3", // laptop analytics on couch
  "photo-1579621970563-ebec7560ff3e", // growth / coins + plant
  "photo-1554224154-26032ffc0d07", // documents + calculator
  "photo-1591696205602-2f950c417cb9", // line chart on screen
  "photo-1638202993928-7267aad84c31", // stethoscope close-up (neutral)
  "photo-1556742049-0cfed4f6a45d", // people at a table, coffee
  "photo-1554224155-8d04cb21cd6c", // phone + calculator, finance
  "photo-1543269865-cbf427effbad", // team collaboration
  "photo-1552664730-d307ca884978", // team brainstorm / whiteboard
  "photo-1553877522-43269d4ea984", // laptop, monochrome office
  "photo-1517245386807-bb43f82c33c4", // team discussion at laptop
  "photo-1583321500900-82807e458f3c", // dashboard stats
  "photo-1524178232363-1fb2b075b655", // classroom / training
  "photo-1531403009284-440f080d1e12", // whiteboard planning
  "photo-1573497491765-dccce02b29df", // professional portrait
  "photo-1542744173-8e7e53415bb0", // desk overhead, devices
  "photo-1521791136064-7986c2920216", // handshake, business deal
  "photo-1560472354-b33ff0c44a43", // KPI dashboard on screen
  "photo-1519389950473-47ba0277781c", // team at laptops overhead
  "photo-1497215728101-856f4ea42174", // modern office interior
  "photo-1486406146926-c627a92ad1ab", // office building exterior
  "photo-1568992687947-868a62a9f521", // meeting in warm-lit room
  "photo-1576091160399-112ba8d25d1d", // professional with phone
  "photo-1666214280557-f1b5022eb634", // clinicians reviewing data screens
];

export function img(id, w = 1100) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
}

function hash(seed) {
  let h = 0;
  const s = String(seed);
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

// Deterministically pick an image for a page from the hashed seed. `offset`
// lets a single page pull two different images (e.g. hero vs. mid-section).
export function pickImage(seed, offset = 0, w = 1100) {
  const index = (hash(seed) + offset) % PHOTOS.length;
  return img(PHOTOS[index], w);
}

// Assign an image to a blog post by its ORDER INDEX (0-based) rather than by
// hashing the slug. With 40 posts and 40 images this guarantees every post gets
// a distinct photo, and a post's hero, listing card, and "related" card all
// resolve to the same image.
export function blogImage(index, w = 1100) {
  const n = (((Number(index) || 0) % PHOTOS.length) + PHOTOS.length) % PHOTOS.length;
  return img(PHOTOS[n], w);
}
