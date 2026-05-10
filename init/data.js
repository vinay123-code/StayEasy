const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: { filename: "photo1.jpg", url: "/images/photo1.jpg" },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: { filename: "photo2.jpg", url: "/images/photo2.jpg" },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: { filename: "photo3.jpg", url: "/images/photo3.jpg" },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: { filename: "photo4.jpg", url: "/images/photo4.jpg" },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Trending",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: { filename: "photo5.jpg", url: "/images/photo5.jpg" },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: { filename: "photo6.jpg", url: "/images/photo6.jpg" },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Amazing Pools",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: { filename: "photo7.jpg", url: "/images/photo7.jpg" },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Farms",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: { filename: "photo8.jpg", url: "/images/photo8.jpg" },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: { filename: "photo9.jpg", url: "/images/photo9.jpg" },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: { filename: "photo10.jpg", url: "/images/photo10.jpg" },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Trending",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: { filename: "photo11.jpg", url: "/images/photo11.jpg" },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic Cities",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: { filename: "photo12.jpg", url: "/images/photo12.jpg" },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Trending",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: { filename: "photo13.jpg", url: "/images/photo13.jpg" },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Rooms",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: { filename: "photo14.jpg", url: "/images/photo14.jpg" },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: { filename: "photo15.jpg", url: "/images/photo15.jpg" },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: { filename: "photo16.jpg", url: "/images/photo16.jpg" },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: { filename: "photo17.jpg", url: "/images/photo17.jpg" },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: { filename: "photo18.jpg", url: "/images/photo18.jpg" },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: { filename: "photo30.jpg", url: "/images/photo30.jpg" },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: { filename: "photo20.jpg", url: "/images/photo20.jpg" },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: { filename: "photo21.jpg", url: "/images/photo21.jpg" },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Farms",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: { filename: "photo22.jpg", url: "/images/photo22.jpg" },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Amazing Pools",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: { filename: "photo23.jpg", url: "/images/photo23.jpg" },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: { filename: "photo24.jpg", url: "/images/photo24.jpg" },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: { filename: "photo25.jpg", url: "/images/photo25.jpg" },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: { filename: "photo26.jpg", url: "/images/photo26.jpg" },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: { filename: "photo27.jpg", url: "/images/photo27.jpg" },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Trending",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: { filename: "photo28.jpg", url: "/images/photo28.jpg" },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: { filename: "photo29.jpg", url: "/images/photo29.jpg" },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Arctic",
  },
];

module.exports = { data: sampleListings };