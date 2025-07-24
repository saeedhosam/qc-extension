document.addEventListener('DOMContentLoaded', () => {
    const categorySwitcher = document.getElementById('category-switcher');
    const categories = document.querySelectorAll('.category');
    const resetButton = document.getElementById('reset-btn');
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const allLabels = document.querySelectorAll('.checklist label');

    // --- Dropdown Switcher Logic ---
    categorySwitcher.addEventListener('change', () => {
        const selectedValue = categorySwitcher.value;

        // Hide all categories
        categories.forEach(category => {
            category.classList.remove('active');
        });

        // Show the selected category
        const activeCategory = document.getElementById(selectedValue);
        if (activeCategory) {
            activeCategory.classList.add('active');
        }
    });

    // --- Reset Button Logic (Unchanged) ---
    resetButton.addEventListener('click', () => {
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        allLabels.forEach(label => {
            label.style.textDecoration = 'none';
            label.style.color = '#172b4d';
        });
    });

    // --- Checkbox Strikethrough Logic (Unchanged) ---
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            if (label) {
                if (checkbox.checked) {
                    label.style.textDecoration = 'line-through';
                    label.style.color = '#6b778c';
                } else {
                    label.style.textDecoration = 'none';
                    label.style.color = '#172b4d';
                }
            }
        });
    });
});
