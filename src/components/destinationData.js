import ebcImage from '../assets/ebc.webp'
import abcImage from '../assets/abc.avif'
import langtangImage from '../assets/langtang.webp'
import singaporeCityImage from '../assets/singaporecity.jpg'
import dubaiDesertImage from '../assets/dubaidesert.jpg'
import bhutanThimphuImage from '../assets/bhutanthimpu.webp'
import pokharaNepalImage from '../assets/pokharanepal.avif'
import chitwanImage from '../assets/chitwan.jpg'
export const regions = ['Indonesia', 'Vietnam', 'Thailand', 'Singapore', 'Dubai', 'Bhutan', 'Nepal', 'Trek']

const makeItinerary = (items) => items.map(([title, text]) => ({ title, text }))

const tripDetails = {
  bali7: {
    description:
      'Experience the beauty of Bali with this amazing 7-day tour filled with adventure, culture, nature, and relaxation. Enjoy thrilling water sports, visit iconic temples, explore the scenic beauty of Ubud and Kintamani, and discover the breathtaking island of Nusa Penida. From beautiful beaches and rice terraces to shopping and cultural experiences, this trip offers the perfect combination of fun and unforgettable memories in Bali.',
    itinerary: makeItinerary([
      ['Arrive in Bali', 'Arrive in Bali, enjoy airport pickup, check in at the hotel, and spend free time relaxing or exploring nearby areas.'],
      ['Water Sports & Uluwatu Temple', 'Enjoy exciting water sports activities including banana boat rides and jet skiing, followed by a visit to the famous Uluwatu Temple.'],
      ['Ulun Danu, Handara Gate & Tanah Lot', 'Visit the beautiful Ulun Danu Beratan Temple, Handara Gate, and enjoy the sunset at Tanah Lot Temple.'],
      ['ATV Ride & Tegalalang Rice Terrace', 'Experience an adventurous ATV ride and explore the stunning Tegalalang Rice Terrace in Ubud.'],
      ['Nusa Penida Island Tour', "Take a full-day Nusa Penida island tour and visit Kelingking Beach, Angel's Billabong, and Broken Beach."],
      ['Bali Swing, Ubud & Kintamani', 'Enjoy the famous Bali Swing, Ubud village tour, coffee tasting, and panoramic views of Mount Batur in Kintamani.'],
      ['Shopping & Departure', 'Spend time shopping for souvenirs and local products before airport transfer for your departure flight.'],
    ]),
  },
  bali6: {
    description:
      'Experience the best of Bali with this exciting 6-day tropical getaway filled with cultural sightseeing, adventure activities, scenic landscapes, and relaxing beach vibes. From exploring iconic temples and lush rice terraces to thrilling ATV rides, Bali Swing adventures, shopping tours, and beautiful sunsets, this journey offers the perfect mix of relaxation, fun, and unforgettable memories.',
    itinerary: makeItinerary([
      ['Arrival in Bali', 'Arrival in Bali, airport pickup, hotel check-in, and free time to relax and explore nearby areas.'],
      ['Mengwi Temple, Monkey Forest & Tanah Lot', 'Visit Mengwi Temple, Alas Kedaton Monkey Forest, and the famous Tanah Lot sea temple.'],
      ['Bali Swing & Ubud Royal Palace', 'Enjoy Bali Swing, zipline adventure, sky bike experience, and visit the Ubud Royal Palace.'],
      ['Shopping & Leisure Day', 'Leisure day for shopping and exploring popular areas like Kuta, Seminyak, and Ubud markets.'],
      ['Quad Bike, Waterfall & Ubud Art Market', 'Experience an exciting Quad Bike adventure, visit Tegenungan Waterfall, and explore the Ubud Art Market.'],
      ['Kuta Beach, Seminyak & Departure', 'Visit Kuta Beach, enjoy a Seminyak city tour and shopping, then transfer to the airport for departure.'],
    ]),
  },
  bali5: {
    description:
      "Experience the beauty of Bali with this unforgettable 5-day getaway filled with adventure, culture, and scenic island experiences. Explore the lush rice terraces of Ubud, enjoy thrilling ATV rides and Bali Swing activities, discover the breathtaking beauty of Nusa Penida, and visit Bali's famous temples and shopping spots. This tour perfectly combines relaxation, sightseeing, and adventure for a memorable tropical holiday.",
    itinerary: makeItinerary([
      ['Arrival in Bali', 'Arrival in Bali, airport pickup, hotel check-in, and free time to relax.'],
      ['Ubud, Bali Swing & ATV Adventure', 'Enjoy the Ubud tour with Bali Swing, Tegalalang Rice Terrace, waterfall visit, and ATV adventure ride.'],
      ['Nusa Penida Island Tour', "Full-day Nusa Penida island tour including Kelingking Beach, Angel's Billabong, and Broken Beach."],
      ['Ulun Danu, Handara Gate & Tanah Lot', 'Visit Ulun Danu Beratan Temple, Handara Gate, and enjoy the sunset at Tanah Lot Temple.'],
      ['Shopping & Departure', 'Shopping tour for local souvenirs and transfer to the airport for departure.'],
    ]),
  },
  hcmc7: {
    description:
      "Ho Chi Minh City is a vibrant destination where modern city life blends beautifully with rich history, culture, and local traditions. From bustling markets and historic landmarks to river cruises, delicious street food, and nearby countryside adventures, this 7-day journey offers the perfect mix of sightseeing, relaxation, and unforgettable experiences in Vietnam's most energetic city.",
    itinerary: makeItinerary([
      ['Arrival in Ho Chi Minh City', 'Arrival in Ho Chi Minh City, airport transfer, hotel check-in, and leisure time.'],
      ['Landmarks & Ben Thanh Market', 'Visit Notre Dame Cathedral, Central Post Office, and Ben Thanh Market.'],
      ['Cu Chi Tunnels', "Explore the Cu Chi Tunnels and learn about Vietnam's wartime history."],
      ['Mekong Delta Tour', 'Enjoy a Mekong Delta tour with boat rides and local village visits.'],
      ['Opera House & City Cafes', 'Discover Saigon Opera House, Nguyen Hue Walking Street, and local cafes.'],
      ['Shopping, Street Food & River Cruise', 'Enjoy shopping, Vietnamese street food tasting, and a sunset river cruise.'],
      ['Relaxation & Departure', 'Free time for relaxation and airport transfer for departure.'],
    ]),
  },
  hcmc6: {
    description:
      'Discover the charm of Ho Chi Minh City with this exciting 6-day getaway filled with cultural attractions, local markets, historic sites, and scenic excursions. Experience the lively atmosphere of the city while exploring famous landmarks, tasting authentic Vietnamese cuisine, and enjoying memorable day tours around southern Vietnam.',
    itinerary: makeItinerary([
      ['Arrival in Ho Chi Minh City', 'Arrival in Ho Chi Minh City and hotel check-in.'],
      ['Independence Palace & War Remnants Museum', 'City tour including Independence Palace and War Remnants Museum.'],
      ['Cu Chi Tunnels Exploration', 'Full-day Cu Chi Tunnels exploration and local cultural experience.'],
      ['Mekong Delta Excursion', 'Mekong Delta excursion with coconut villages and boat cruise.'],
      ['Shopping Streets & Cafes', 'Visit shopping streets, cafes, and enjoy free leisure time in the city.'],
      ['Shopping & Departure', 'Last-minute shopping and airport transfer for departure.'],
    ]),
  },
  hcmc5: {
    description:
      'Experience the highlights of Ho Chi Minh City with this wonderful 5-day trip combining history, culture, shopping, and local adventures. Explore iconic city attractions, enjoy scenic countryside tours, taste delicious Vietnamese food, and immerse yourself in the energetic atmosphere of this fascinating destination.',
    itinerary: makeItinerary([
      ['Arrival in Ho Chi Minh City', 'Arrival in Ho Chi Minh City, hotel transfer, and relaxation.'],
      ['City Landmarks & Ben Thanh Market', 'Visit famous landmarks and explore Ben Thanh Market.'],
      ['Cu Chi Tunnels Tour', 'Enjoy a guided Cu Chi Tunnels tour and local sightseeing.'],
      ['Mekong Delta Experience', 'Discover the beauty of the Mekong Delta with boat rides and local food.'],
      ['Shopping & Departure', 'Shopping, leisure time, and airport transfer for departure.'],
    ]),
  },
  hanoi7: {
    description:
      'Hanoi, the charming capital of Vietnam, is a perfect blend of ancient culture, rich history, scenic landscapes, and vibrant city life. From peaceful lakes and traditional temples to bustling old streets and breathtaking natural wonders, this 7-day journey offers unforgettable experiences filled with local culture, delicious cuisine, and beautiful sightseeing across northern Vietnam.',
    itinerary: makeItinerary([
      ['Arrival in Hanoi', 'Arrival in Hanoi, airport transfer, hotel check-in, and leisure time.'],
      ['Hoan Kiem Lake & Old Quarter', 'Visit Hoan Kiem Lake, Ngoc Son Temple, and Hanoi Old Quarter.'],
      ['Historical Hanoi', 'Explore Ho Chi Minh Mausoleum, One Pillar Pagoda, and Temple of Literature.'],
      ['Ha Long Bay Cruise', 'Full-day cruise tour to Ha Long Bay with limestone caves and islands.'],
      ['Ninh Binh & Mua Cave', 'Visit Ninh Binh, Trang An boat ride, and Mua Cave viewpoint.'],
      ['Street Food, Shopping & Train Street', 'Enjoy local street food tour, shopping, and Hanoi Train Street visit.'],
      ['Leisure & Departure', 'Free leisure time and airport transfer for departure.'],
    ]),
  },
  hanoi6: {
    description:
      "Discover the beauty and culture of Hanoi with this exciting 6-day tour featuring historic landmarks, scenic countryside, local markets, and famous natural attractions. Experience Vietnam's rich traditions, taste authentic local cuisine, and explore some of the country's most beautiful destinations for a memorable holiday.",
    itinerary: makeItinerary([
      ['Arrival in Hanoi', 'Arrival in Hanoi and hotel check-in.'],
      ['Old Quarter Cyclo Tour', 'Explore the Hanoi Old Quarter and enjoy a cyclo city tour.'],
      ['Temple of Literature & Ho Chi Minh Complex', 'Visit the Temple of Literature and Ho Chi Minh historical complex.'],
      ['Ha Long Bay Cruise', 'Enjoy a full-day Ha Long Bay cruise with seafood lunch and cave exploration.'],
      ['Markets, Cafes & Water Puppet Show', 'Discover local markets, cafes, and enjoy a traditional water puppet show.'],
      ['Shopping & Departure', 'Last-minute shopping and airport transfer for departure.'],
    ]),
  },
  hanoi5: {
    description:
      "Experience the highlights of Hanoi with this wonderful 5-day getaway filled with cultural attractions, local experiences, and scenic adventures. Explore historic temples, lively streets, and nearby natural wonders while enjoying the warm hospitality and unique charm of Vietnam's capital city.",
    itinerary: makeItinerary([
      ['Arrival in Hanoi', 'Arrival in Hanoi, airport pickup, and hotel transfer.'],
      ['Hoan Kiem Lake, Old Quarter & Dong Xuan Market', 'Visit Hoan Kiem Lake, Hanoi Old Quarter, and Dong Xuan Market.'],
      ['Ha Long Bay Tour', 'Full-day Ha Long Bay tour with cruise and island sightseeing.'],
      ['Cafes, Street Food & Culture', 'Explore local cafes, street food spots, and cultural attractions.'],
      ['Shopping & Departure', 'Leisure time, shopping, and airport transfer for departure.'],
    ]),
  },
  bangkok7: {
    description:
      "Experience the perfect blend of vibrant city life and tropical beach vibes with this exciting Bangkok and Pattaya tour. Discover Thailand's rich culture, stunning temples, lively markets, beautiful islands, and thrilling nightlife while enjoying delicious Thai cuisine and unforgettable sightseeing experiences. This journey offers the perfect mix of relaxation, adventure, shopping, and entertainment for an amazing holiday in Thailand.",
    itinerary: makeItinerary([
      ['Arrival in Bangkok', 'Arrival in Bangkok, hotel transfer, and leisure time.'],
      ['Grand Palace, Wat Arun & Bangkok Attractions', 'Visit the Grand Palace, Wat Arun, and Bangkok city attractions.'],
      ['Transfer to Pattaya & Alcazar Show', 'Transfer to Pattaya and enjoy Alcazar Cabaret Show in the evening.'],
      ['Coral Island Tour', 'Full-day Coral Island tour with water sports and beach relaxation.'],
      ['Nong Nooch Garden & Floating Market', 'Visit Nong Nooch Tropical Garden and Pattaya Floating Market.'],
      ['Bangkok Shopping & Night Market', 'Return to Bangkok for shopping at MBK Center and night market visit.'],
      ['Leisure & Departure', 'Free leisure time and airport transfer for departure.'],
    ]),
  },
  bangkok6: {
    description:
      "Discover the beauty of Thailand with this wonderful 6-day Bangkok and Pattaya getaway filled with cultural landmarks, island adventures, shopping experiences, and lively entertainment. Explore famous temples, relax on beautiful beaches, and enjoy the vibrant atmosphere of Thailand's most popular tourist destinations.",
    itinerary: makeItinerary([
      ['Arrival in Bangkok', 'Arrival in Bangkok and transfer to hotel.'],
      ['Bangkok Temples, Markets & River Cruise', 'Explore Bangkok temples, local markets, and Chao Phraya River cruise.'],
      ['Travel to Pattaya', 'Travel to Pattaya and enjoy beachside leisure activities.'],
      ['Coral Island Excursion', 'Coral Island excursion with optional water sports and seafood lunch.'],
      ['Pattaya View Point & Shopping Streets', 'Visit Pattaya View Point, local cafes, and shopping streets.'],
      ['Return to Bangkok & Departure', 'Return to Bangkok and airport transfer for departure.'],
    ]),
  },
  bangkok5: {
    description:
      'Enjoy an unforgettable 5-day Thailand holiday exploring the exciting cities of Bangkok and Pattaya. From cultural sightseeing and shopping to island tours and beach relaxation, this trip offers the perfect balance of adventure, entertainment, and tropical experiences for a memorable getaway.',
    itinerary: makeItinerary([
      ['Arrival in Bangkok', 'Arrival in Bangkok, hotel check-in, and evening free time.'],
      ['Bangkok City Tour', 'Bangkok city tour including famous temples and shopping areas.'],
      ['Transfer to Pattaya & Coral Island', 'Transfer to Pattaya and enjoy Coral Island sightseeing tour.'],
      ['Pattaya Attractions & Beach Activities', 'Explore Pattaya attractions, local markets, and beach activities.'],
      ['Return to Bangkok & Departure', 'Return to Bangkok and transfer to the airport for departure.'],
    ]),
  },
  singapore: {
    description:
      'Singapore is a vibrant and modern destination known for its stunning skyline, world-class attractions, cultural diversity, and beautiful gardens. From iconic landmarks and exciting theme parks to luxury shopping streets and delicious local cuisine, this 5-day Singapore tour offers the perfect combination of sightseeing, entertainment, relaxation, and unforgettable city experiences.',
    itinerary: makeItinerary([
      ['Arrival in Singapore', 'Arrival in Singapore, hotel check-in, and evening visit to Marina Bay Sands area.'],
      ['Singapore City Attractions', 'Explore Singapore city attractions including Merlion Park, Chinatown, and Little India.'],
      ['Sentosa Island', 'Full-day visit to Sentosa Island with cable car ride and beach activities.'],
      ['Universal Studios & Orchard Road', 'Enjoy Universal Studios Singapore and shopping at Orchard Road.'],
      ['Shopping & Departure', 'Free leisure time, souvenir shopping, and airport transfer for departure.'],
    ]),
  },
  dubai: {
    description:
      "Experience the luxury, adventure, and modern beauty of Dubai with this exciting 5-day getaway. From breathtaking skyscrapers and vibrant city attractions to thrilling desert safaris and relaxing marina cruises, this tour offers the perfect mix of culture, entertainment, shopping, and unforgettable Arabian experiences. Explore the charm of Dubai's modern lifestyle while enjoying scenic views, desert adventures, and world-famous attractions.",
    itinerary: makeItinerary([
      ['Arrival in Dubai', 'Arrival in Dubai, hotel check-in, and evening visit to Dubai Marina.'],
      ['Dubai City Tour', 'Dubai city tour including Burj Khalifa, Dubai Mall, and Jumeirah Beach.'],
      ['Desert Safari', 'Enjoy a thrilling desert safari with dune bashing, camel ride, and BBQ dinner.'],
      ['Dubai Marina Cruise', 'Relax on a Dubai Marina cruise with stunning skyline views and entertainment.'],
      ['Shopping & Departure', 'Shopping and leisure time before airport transfer for departure.'],
    ]),
  },
  bhutan: {
    description:
      "Bhutan's beautiful valleys of Paro and Thimphu offer a peaceful journey through Himalayan landscapes, ancient monasteries, and vibrant Buddhist culture. Paro welcomes travelers with its scenic mountain valley, historic dzongs, and sacred temples, while Thimphu, the capital city, blends tradition with a quiet modern lifestyle. Together, they create a balanced travel experience filled with spiritual sites, nature views, cultural encounters, and serene walks through untouched Himalayan beauty.",
    itinerary: makeItinerary([
      ['Arrival in Paro', 'Arrive in Paro, Bhutan, check in and visit Rinpung Dzong followed by an evening stroll in Paro town and introduction to Bhutanese culture.'],
      ["Tiger's Nest Monastery", "Early morning hike to Paro Taktsang (Tiger's Nest Monastery) with scenic stops, explore the monastery complex and return for relaxation in the valley."],
      ['Drive to Thimphu', 'Drive to Thimphu, Bhutan with scenic stops en route, visit Buddha Dordenma and enjoy panoramic views of the valley in the evening.'],
      ['Thimphu Cultural Landmarks', 'Explore cultural landmarks including Tashichho Dzong, visit museums, local markets, and experience Bhutanese arts and crafts.'],
      ['Dochula Pass Excursion', 'Full-day excursion to Dochula Pass for Himalayan views, prayer stupas, and peaceful mountain scenery before returning to Thimphu.'],
      ['Kyichu Lhakhang & Departure', 'Return to Paro, visit Kyichu Lhakhang, enjoy a relaxed village walk, and transfer to the airport for departure.'],
    ]),
  },
  kathmanduPokhara: {
    description:
      "Kathmandu and Pokhara, Nepal offer an unforgettable mix of ancient culture, spiritual heritage, and breathtaking Himalayan landscapes. The journey begins in the vibrant capital Kathmandu, where centuries-old temples, UNESCO World Heritage Sites, and bustling streets reflect the country's deep traditions and living culture. It then continues to the peaceful lakeside city of Pokhara, known for its serene Phewa Lake, mountain panoramas, and relaxed atmosphere. Together, these destinations showcase the best of Nepal, combining culture, nature, spirituality, and light adventure in one journey.",
    itinerary: makeItinerary([
      ['Arrival in Kathmandu', 'Arrive in Kathmandu, check in, visit Swayambhunath Stupa (Monkey Temple) for sunset views, and explore the lively Thamel area with shops, cafes, and local street food.'],
      ['Kathmandu Cultural Tour', 'Full cultural tour including Pashupatinath Temple, the sacred Boudhanath Stupa, and historic Kathmandu Durbar Square with traditional architecture and local market exploration.'],
      ['Travel to Pokhara & Phewa Lake', 'Scenic drive or flight to Pokhara, check in near Phewa Lake, enjoy boating at Phewa Lake, visit Tal Barahi Temple, and relax with a lakeside sunset walk.'],
      ['Sarangkot, Caves & Peace Pagoda', 'Early sunrise trip to Sarangkot for Himalayan views, then visit Davis Falls, Gupteshwor Mahadev Cave, and the World Peace Pagoda, followed by cafe hopping in Lakeside.'],
      ['Adventure & Leisure in Pokhara', 'Adventure and leisure day with optional paragliding over Pokhara Valley, ziplining or short hikes in surrounding hills, visit local Gurung villages, and relax with spa or lakeside downtime in the evening.'],
      ['Return to Kathmandu & Departure', 'Return to Kathmandu, last-minute shopping in Thamel, optional short heritage visit or cafe relaxation, and transfer to the airport for departure.'],
    ]),
  },
  chitwan: {
    description:
      'Chitwan Jungle Safari in Nepal offers an exciting blend of wildlife adventure, lush subtropical forests, and rich indigenous culture in the heart of Chitwan National Park. Located in southern Nepal, this UNESCO-listed national park is famous for its rare one-horned rhinoceros, Bengal tigers, crocodiles, and diverse bird species. The experience also introduces visitors to the traditional lifestyle of the Tharu community, making it a perfect mix of nature, wildlife exploration, and cultural immersion in Nepal.',
    itinerary: makeItinerary([
      ['Arrival in Chitwan', 'Arrive at Chitwan region, check in near the park buffer zone, visit local Tharu village for cultural introduction, enjoy sunset by the Rapti River, and attend an evening cultural dance program.'],
      ['Chitwan National Park Safari', 'Full jungle safari inside Chitwan National Park, jeep safari for wildlife spotting, canoe ride on Rapti River to see crocodiles, and bird watching in the forest area.'],
      ['Jungle Walk & Tharu Culture', 'Early morning jungle walk with naturalists, visit Elephant Breeding Center, explore Tharu Cultural Museum, and enjoy an evening village tour with traditional food experience.'],
      ['Birdwatching & Departure', 'Morning birdwatching and short canoe ride, final nature walk around the buffer zone, souvenir shopping in Sauraha, and departure transfer.'],
    ]),
  },
  everest: {
    description:
      "The Everest Base Camp trek in Nepal is one of the world's most iconic high-altitude adventures, leading travelers deep into the Himalayas through dramatic mountain landscapes, Sherpa villages, and ancient monasteries. Starting from the gateway town of Lukla Airport, the trail passes through the vibrant Sherpa hub of Namche Bazaar and continues toward the breathtaking base of Mount Everest in Everest Base Camp. The journey combines natural beauty, cultural richness, and physical challenge in the heart of Nepal, making it a bucket-list trek for adventurers worldwide.",
    itinerary: makeItinerary([
      ['Arrival in Kathmandu', 'Arrive in Kathmandu, trek briefing, gear check, and explore Thamel area.'],
      ['Fly to Lukla & Trek to Phakding', 'Scenic flight to Lukla Airport, trek to Phakding, and enjoy a riverside walk.'],
      ['Phakding to Namche Bazaar', 'Trek from Phakding to Namche Bazaar via suspension bridges and forest trails.'],
      ['Acclimatization in Namche', 'Acclimatization in Namche, hike to Everest View Hotel, and explore the local market.'],
      ['Namche to Tengboche', 'Trek to Tengboche and visit the monastery with mountain views.'],
      ['Tengboche to Dingboche', 'Trek to Dingboche, passing Imja Valley landscapes.'],
      ['Acclimatization in Dingboche', 'Acclimatization day in Dingboche with a hike to Nagarjun Hill viewpoint.'],
      ['Dingboche to Lobuche', 'Trek to Lobuche via the memorial site for climbers.'],
      ['Everest Base Camp', 'Trek to Everest Base Camp, explore Khumbu Glacier, and return to Gorak Shep.'],
      ['Kala Patthar & Pheriche', 'Early hike to Kala Patthar for sunrise view of Everest, then descend to Pheriche.'],
      ['Pheriche to Namche Bazaar', 'Trek down to Namche Bazaar with a scenic descent through valleys.'],
      ['Namche Bazaar to Lukla', 'Trek back to Lukla and enjoy a final mountain celebration with the team.'],
      ['Fly Back to Kathmandu', 'Fly back to Kathmandu, with leisure time and rest.'],
      ['Departure', 'Final departure, souvenir shopping, and airport transfer.'],
    ]),
  },
  annapurna: {
    description:
      "The Annapurna Base Camp trek in Nepal is a spectacular Himalayan journey that takes you deep into the heart of the Annapurna mountain range, offering close-up views of towering peaks, glacier landscapes, and traditional mountain villages. Starting from the lakeside city of Pokhara, the trail passes through lush rhododendron forests, terraced farmlands, and charming Gurung settlements before reaching the breathtaking sanctuary of Annapurna Base Camp. This trek in Nepal is known for its perfect balance of natural beauty, cultural encounters, and moderate adventure, making it one of Nepal's most rewarding trekking experiences.",
    itinerary: makeItinerary([
      ['Arrival in Pokhara', 'Arrive in Pokhara, trek briefing, gear preparation, and lakeside exploration.'],
      ['Nayapul to Tikhedhunga', 'Drive to Nayapul, then trek to Tikhedhunga through villages and riverside trails.'],
      ['Tikhedhunga to Ghorepani', 'Trek to Ghorepani via Ulleri with steep stone stair climbs and forest scenery.'],
      ['Poon Hill & Tadapani', 'Early hike to Poon Hill viewpoint, then trek to Tadapani through rhododendron forests.'],
      ['Tadapani to Chhomrong', 'Trek to Chhomrong and enjoy views of Annapurna South and Machhapuchhre.'],
      ['Chhomrong to Bamboo', 'Descend to Modi Khola, cross suspension bridges, and climb to Bamboo village.'],
      ['Bamboo to Deurali', 'Trek through dense forest to Deurali with gradual altitude gain.'],
      ['Annapurna Base Camp', 'Trek to Annapurna Base Camp via Machhapuchhre Base Camp.'],
      ['Sunrise at Base Camp & Bamboo', 'Watch sunrise at Annapurna Base Camp, explore the glacier basin, and descend to Bamboo.'],
      ['Bamboo to Jhinu Danda', 'Trek back to Jhinu Danda and relax in natural hot springs.'],
      ['Return to Pokhara', 'Trek to Nayapul, drive back to Pokhara, enjoy a farewell dinner, and rest.'],
    ]),
  },
  langtang: {
    description:
      'The Langtang Valley Trek in Nepal is a beautiful and less-crowded Himalayan journey that takes you through pristine forests, traditional Tamang villages, and stunning mountain landscapes close to the Tibetan border. Starting from the region north of Kathmandu, the trail follows the scenic Langtang River into the heart of Langtang National Park, offering close views of snow-capped peaks like Langtang Lirung and serene alpine valleys. This trek in Nepal is ideal for those seeking an authentic cultural experience combined with moderate adventure and breathtaking natural beauty.',
    itinerary: makeItinerary([
      ['Kathmandu to Syabrubesi', 'Drive from Kathmandu to Syabrubesi, passing rivers, hills, and rural villages.'],
      ['Syabrubesi to Lama Hotel', 'Trek from Syabrubesi to Lama Hotel through forests, waterfalls, and suspension bridges.'],
      ['Lama Hotel to Langtang Village', 'Trek to Langtang Village, passing Ghodatabela and enjoying mountain views.'],
      ['Langtang Village to Kyanjin Gompa', 'Trek to Kyanjin Gompa, explore monasteries and cheese factory, and enjoy glacier scenery.'],
      ['Kyanjin Ri Acclimatization Hike', 'Acclimatization day with hike to Kyanjin Ri viewpoint for panoramic Himalaya views.'],
      ['Kyanjin Gompa to Lama Hotel', 'Trek back down to Lama Hotel through forest trails and river crossings.'],
      ['Lama Hotel to Syabrubesi', 'Trek to Syabrubesi, relaxing descent through villages and natural landscapes.'],
      ['Return to Kathmandu', 'Drive back to Kathmandu, final shopping and rest before departure.'],
    ]),
  },
}

export const baseDestinations = [
  { title: 'Bali, Indonesia', duration: '7 days & 6 nights', price: 'Rs. 3,999', priceValue: 3999, rating: '4.9', region: 'Indonesia', imageIndex: 0, ...tripDetails.bali7 },
  { title: 'Bali, Indonesia', duration: '6 days & 5 nights', price: 'Rs. 3,499', priceValue: 3499, rating: '4.8', region: 'Indonesia', imageIndex: 3, ...tripDetails.bali6 },
  { title: 'Bali, Indonesia', duration: '5 days & 4 nights', price: 'Rs. 2,999', priceValue: 2999, rating: '4.8', region: 'Indonesia', imageIndex: 4, ...tripDetails.bali5 },
  { title: 'Ho Chi Minh City, Vietnam', duration: '7 days & 6 nights', price: 'Rs. 2,499', priceValue: 2499, rating: '4.8', region: 'Vietnam', imageIndex: 1, ...tripDetails.hcmc7 },
  { title: 'Ho Chi Minh City, Vietnam', duration: '6 days & 5 nights', price: 'Rs. 2,199', priceValue: 2199, rating: '4.7', region: 'Vietnam', imageIndex: 6, ...tripDetails.hcmc6 },
  { title: 'Ho Chi Minh City, Vietnam', duration: '5 days & 4 nights', price: 'Rs. 1,999', priceValue: 1999, rating: '4.7', region: 'Vietnam', imageIndex: 7, ...tripDetails.hcmc5 },
  { title: 'Hanoi, Vietnam', duration: '7 days & 6 nights', price: 'Rs. 2,699', priceValue: 2699, rating: '4.8', region: 'Vietnam', imageIndex: 8, ...tripDetails.hanoi7 },
  { title: 'Hanoi, Vietnam', duration: '6 days & 5 nights', price: 'Rs. 2,399', priceValue: 2399, rating: '4.7', region: 'Vietnam', imageIndex: 9, ...tripDetails.hanoi6 },
  { title: 'Hanoi, Vietnam', duration: '5 days & 4 nights', price: 'Rs. 2,099', priceValue: 2099, rating: '4.7', region: 'Vietnam', imageIndex: 2, ...tripDetails.hanoi5 },
  { title: 'Bangkok & Pattaya, Thailand', duration: '7 days & 6 nights', price: 'Rs. 2,899', priceValue: 2899, rating: '4.8', region: 'Thailand', imageIndex: 12, ...tripDetails.bangkok7 },
  { title: 'Bangkok & Pattaya, Thailand', duration: '6 days & 5 nights', price: 'Rs. 2,599', priceValue: 2599, rating: '4.8', region: 'Thailand', imageIndex: 11, ...tripDetails.bangkok6 },
  { title: 'Bangkok & Pattaya, Thailand', duration: '5 days & 4 nights', price: 'Rs. 2,299', priceValue: 2299, rating: '4.7', region: 'Thailand', imageIndex: 10, ...tripDetails.bangkok5 },
  { title: 'Singapore City Lights', duration: '5 days & 4 nights', price: 'Rs. 3,299', priceValue: 3299, rating: '4.8', region: 'Singapore', imageIndex: 5, image: singaporeCityImage, ...tripDetails.singapore },
  { title: 'Dubai Desert & Marina Tour', duration: '5 days & 4 nights', price: 'Rs. 3,999', priceValue: 3999, rating: '4.8', region: 'Dubai', imageIndex: 0, image: dubaiDesertImage, ...tripDetails.dubai },
  { title: 'Thimphu & Paro, Bhutan', duration: '6 days & 5 nights', price: 'Rs. 3,799', priceValue: 3799, rating: '4.9', region: 'Bhutan', imageIndex: 1, image: bhutanThimphuImage, ...tripDetails.bhutan },
  { title: 'Kathmandu & Pokhara, Nepal', duration: '6 days & 5 nights', price: 'Rs. 2,499', priceValue: 2499, rating: '4.8', region: 'Nepal', imageIndex: 3, image: pokharaNepalImage, ...tripDetails.kathmanduPokhara },
  { title: 'Chitwan Jungle Safari, Nepal', duration: '4 days & 3 nights', price: 'Rs. 1,999', priceValue: 1999, rating: '4.7', region: 'Nepal', imageIndex: 4, image: chitwanImage, ...tripDetails.chitwan },
  { title: 'Everest Base Camp Trek', duration: '14 days & 13 nights', price: 'Rs. 6,499', priceValue: 6499, rating: '4.9', region: 'Trek', imageIndex: 5, image: ebcImage, ...tripDetails.everest },
  { title: 'Annapurna Base Camp Trek', duration: '11 days & 10 nights', price: 'Rs. 4,999', priceValue: 4999, rating: '4.8', region: 'Trek', imageIndex: 6, image: abcImage, ...tripDetails.annapurna },
  { title: 'Langtang Valley Trek', duration: '8 days & 7 nights', price: 'Rs. 3,499', priceValue: 3499, rating: '4.7', region: 'Trek', imageIndex: 7, image: langtangImage, ...tripDetails.langtang },
]

export const budgetMin = Math.min(...baseDestinations.map((destination) => destination.priceValue))
export const budgetMax = Math.max(...baseDestinations.map((destination) => destination.priceValue))

const destinationOrder = new Map()

baseDestinations.forEach((destination) => {
  if (!destinationOrder.has(destination.title)) {
    destinationOrder.set(destination.title, destinationOrder.size)
  }
})

const getTripDays = (duration) => Number(duration.match(/\d+/)?.[0] || 0)

export const sortByCountryAndDuration = (firstDestination, secondDestination) => {
  const regionDifference = regions.indexOf(firstDestination.region) - regions.indexOf(secondDestination.region)

  if (regionDifference !== 0) {
    return regionDifference
  }

  const destinationDifference =
    destinationOrder.get(firstDestination.title) - destinationOrder.get(secondDestination.title)

  if (destinationDifference !== 0) {
    return destinationDifference
  }

  return getTripDays(firstDestination.duration) - getTripDays(secondDestination.duration)
}

export const getDestinationImage = (destination, images = []) => {
  if (destination.image) {
    return destination.image
  }

  if (!images.length) {
    return ''
  }

  return images[destination.imageIndex % images.length]
}

const getDestinationReviewIndex = (destination) =>
  baseDestinations.findIndex(
    (baseDestination) =>
      baseDestination.title === destination.title &&
      baseDestination.duration === destination.duration &&
      baseDestination.price === destination.price,
  )

const languagesByRegion = {
  Indonesia: 'Indonesian / English',
  Vietnam: 'Vietnamese / English',
  Thailand: 'Thai / English',
  Singapore: 'Malay / English',
  Dubai: 'Arabic / English',
  Bhutan: 'Bhutanese / English',
  Nepal: 'Nepalese / English',
  Trek: 'Nepalese / English',
}

export const getDestinationTripDetails = (destination, images = []) => ({
  title: destination.title,
  location: destination.region,
  price: destination.price,
  rating: destination.rating,
  duration: destination.duration,
  language: languagesByRegion[destination.region] || 'Indonesian / English',
  description: destination.description,
  itinerary: destination.itinerary,
  image: getDestinationImage(destination, images),
  reviewIndex: destination.reviewIndex ?? getDestinationReviewIndex(destination),
  source: 'destination',
})

