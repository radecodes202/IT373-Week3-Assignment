// Read More/Show Less Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-content');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const summaryContent = document.querySelector('.summary-content');
            const fullContent = document.querySelector('.full-content');
            const toggleText = document.querySelector('.toggle-text');
            const toggleIcon = document.querySelector('.toggle-icon');
            
            if (fullContent.style.display === 'none' || fullContent.style.display === '') {
                // Show full content
                summaryContent.style.display = 'none';
                fullContent.style.display = 'block';
                toggleText.textContent = 'Show Less';
                toggleIcon.classList.add('rotated');
                toggleButton.classList.remove('btn-outline-primary');
                toggleButton.classList.add('btn-outline-secondary');
            } else {
                // Show summary only
                summaryContent.style.display = 'block';
                fullContent.style.display = 'none';
                toggleText.textContent = 'Read More';
                toggleIcon.classList.remove('rotated');
                toggleButton.classList.remove('btn-outline-secondary');
                toggleButton.classList.add('btn-outline-primary');
            }
        });
    }
    
    // Add smooth scrolling to internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert:not(.alert-info)');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.transition = 'opacity 0.5s';
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 500);
        }, 5000);
    });
});