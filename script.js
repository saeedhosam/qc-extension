document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const categories = document.querySelectorAll('.category');
    const resetButton = document.getElementById('reset-btn');
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const allLabels = document.querySelectorAll('.checklist label');

    // --- Tab Switcher Logic ---
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;

            // Update button active state
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update content visibility
            categories.forEach(category => {
                if (category.id === targetId) {
                    category.classList.add('active');
                } else {
                    category.classList.remove('active');
                }
            });
        });
    });

    // --- Reset Button Logic ---
    resetButton.addEventListener('click', () => {
        // Uncheck all checkboxes
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Remove strikethrough from all labels
        allLabels.forEach(label => {
            label.style.textDecoration = 'none';
            label.style.color = '#172b4d';
        });
    });

    // --- Checkbox Strikethrough Logic (remains the same) ---
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
