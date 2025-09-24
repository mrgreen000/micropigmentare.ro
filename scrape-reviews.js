const { chromium } = require('playwright');

async function scrapeGoogleReviews(businessUrl) {
    const browser = await chromium.launch({ headless: false }); // Set to true for production
    const page = await browser.newPage();

    try {
        // Navigate to the Google My Business page
        await page.goto(businessUrl, { waitUntil: 'networkidle' });

        // Wait for reviews section to load
        await page.waitForSelector('[data-review-id]', { timeout: 10000 });

        // Scroll to load more reviews
        for (let i = 0; i < 3; i++) {
            await page.evaluate(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });
            await page.waitForTimeout(2000);
        }

        // Extract review data
        const reviews = await page.evaluate(() => {
            const reviewElements = document.querySelectorAll('[data-review-id]');
            return Array.from(reviewElements).slice(0, 10).map(review => {
                // Extract reviewer name
                const nameElement = review.querySelector('[data-href^="/maps/contrib/"]');
                const name = nameElement ? nameElement.textContent.trim() : 'Anonymous';

                // Extract rating (count of filled stars)
                const ratingElement = review.querySelector('[data-value]');
                const rating = ratingElement ? parseInt(ratingElement.getAttribute('data-value')) : 5;

                // Extract review text
                const textElement = review.querySelector('[data-expandable-section]') ||
                                  review.querySelector('.ODSEW-ShBeI-text');
                const text = textElement ? textElement.textContent.trim() : '';

                // Extract date (approximate)
                const dateElement = review.querySelector('.ODSEW-ShBeI-RgZmSc-date');
                const date = dateElement ? dateElement.textContent.trim() : '';

                return {
                    name,
                    rating,
                    text,
                    date,
                    platform: 'Google'
                };
            }).filter(review => review.text); // Only include reviews with text
        });

        console.log(`Found ${reviews.length} reviews:`);
        console.log(JSON.stringify(reviews, null, 2));

        // Save to file
        const fs = require('fs');
        fs.writeFileSync('./google-reviews.json', JSON.stringify(reviews, null, 2));

        await browser.close();
        return reviews;

    } catch (error) {
        console.error('Error scraping reviews:', error);
        await browser.close();
        return [];
    }
}

// Usage
const BUSINESS_URL = 'YOUR_GOOGLE_MAPS_URL_HERE';
// Replace with your actual Google Maps/My Business URL
// Example: 'https://www.google.com/maps/place/YOUR_BUSINESS_NAME/@coordinates,data'

if (BUSINESS_URL !== 'YOUR_GOOGLE_MAPS_URL_HERE') {
    scrapeGoogleReviews(BUSINESS_URL);
} else {
    console.log('Please update the BUSINESS_URL with your Google Maps listing URL');
}