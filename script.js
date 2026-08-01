// Update the time on page load
document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('time');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleString();
    }
    
    // Log success message
    console.log('✅ Vercel test site loaded successfully!');
    console.log('📅 Current time:', new Date().toLocaleString());
    
    // Check if running on Vercel
    if (window.location.hostname.includes('vercel.app')) {
        console.log('🚀 This site is running on Vercel!');
    } else {
        console.log('💻 This site is running locally or on another platform.');
    }
});
