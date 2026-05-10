export const travellerReviews = [
  {
    stars: 5,
    name: 'Manthan Maharjan',
    avatar: '/travellers/traveller-1.png',
    text: 'Amazing experience from start to finish. Everything was well-organized, and I never had to worry about any details during the trip.',
  },
  {
    stars: 5,
    name: 'Rayon Maharjan',
    avatar: '/travellers/traveller-2.png',
    text: 'The team was professional, friendly, and always ready to help. They made the whole journey feel comfortable and stress-free.',
  },
  {
    stars: 5,
    name: 'Ashutosh Ghimire',
    avatar: '/travellers/traveller-3.png',
    text: 'Great value for money with a well-planned itinerary. Every part of the trip felt thoughtfully arranged and enjoyable.',
  },
  {
    stars: 3,
    name: 'Mandeep Acharya',
    avatar: '/travellers/traveller-4.png',
    text: 'Booking was simple and smooth, and communication was quick and clear. I always felt informed and confident in my plans.',
  },
  {
    stars: 5,
    name: 'Snigdha Joshi',
    avatar: '/travellers/traveller-5.png',
    text: 'A smooth and memorable journey overall. The service exceeded my expectations, and I would definitely travel with them again.',
  },
  {
    stars: 4,
    name: 'Priyanshui Labh',
    avatar: '/travellers/traveller-6.png',
    text: 'Excellent planning and support throughout the trip. Every detail was handled carefully, making it a truly relaxing experience.',
  },
]

const detailReviewDates = [
  'February 2026',
  'January 2026',
  'December 2025',
  'November 2025',
  'October 2025',
  'September 2025',
]

export const reviewsPerDetailPage = 2

const getSeedValue = (value) =>
  String(value)
    .split('')
    .reduce((total, character) => total + character.charCodeAt(0), 0)

const normalizeReviewIndex = (index) =>
  ((index % travellerReviews.length) + travellerReviews.length) % travellerReviews.length

export function getDetailPageReviews(pageIndex = 0) {
  const safePageIndex = Number.isFinite(Number(pageIndex)) ? Number(pageIndex) : getSeedValue(pageIndex)
  const startIndex = normalizeReviewIndex(safePageIndex * reviewsPerDetailPage)

  return Array.from({ length: reviewsPerDetailPage }, (_, offset) => {
    const reviewIndex = normalizeReviewIndex(startIndex + offset)
    return {
      ...travellerReviews[reviewIndex],
      date: detailReviewDates[reviewIndex % detailReviewDates.length],
    }
  })
}
