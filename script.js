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

    // --- Click anywhere in list item to toggle checkbox ---
    const allListItems = document.querySelectorAll('.checklist li');
    allListItems.forEach(listItem => {
        listItem.addEventListener('click', (event) => {
            // Don't trigger if clicking on the tooltip
            if (event.target.closest('.tooltip')) {
                return;
            }
            
            // Find the checkbox in this list item
            const checkbox = listItem.querySelector('input[type="checkbox"]');
            if (checkbox) {
                // Toggle the checkbox
                checkbox.checked = !checkbox.checked;
                // Trigger the change event to update styling
                checkbox.dispatchEvent(new Event('change'));
            }
        });
    });
});
