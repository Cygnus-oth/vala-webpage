  document.addEventListener("DOMContentLoaded", () => {
    const monthlyTab = document.getElementById("monthlytab");
    const quarterlyTab = document.getElementById("quarterlytab");
    const monthlyBtn = document.getElementById("monthlybutton");
    const quarterlyBtn = document.getElementById("quarterlybutton");

    // active is monthly button/tab
    monthlyBtn.addEventListener("click", () => {
      monthlyTab.style.display = "block";
      quarterlyTab.style.display = "none";
      monthlyBtn.style.backgroundColor = "#0774FF";
      quarterlyBtn.style.backgroundColor = "white";
      monthlyBtn.style.color = "white";
      quarterlyBtn.style.color = "#4C5671";
    });
    
    // active is quarterly button/tab
    quarterlyBtn.addEventListener("click", () => {
      monthlyTab.style.display = "none";
      quarterlyTab.style.display = "block";
      monthlyBtn.style.backgroundColor = "white";
      quarterlyBtn.style.backgroundColor = "#0774FF";
      monthlyBtn.style.color = "#4C5671";
      quarterlyBtn.style.color = "white";
    });
    
  });

    document.addEventListener('DOMContentLoaded', () => {
    const monthlyBtn = document.getElementById('monthlyBtn');
    const trimesterbtn = document.getElementById('trimesterbtn');
    // Removed the toggleIndicator element as it's no longer used for animation
    const priceToggleContainer = document.getElementById('priceToggleContainer'); // Get the parent container
    const basiquePriceBtn = document.getElementById('basiquePriceBtn');
    const standardPriceBtn = document.getElementById('standardPriceBtn');
    const premiumPriceBtn = document.getElementById('premiumPriceBtn');


function roundDown(num) {
  return Math.floor(num / 100) * 100;
}

let prices = {
  monthly: {
    basic: 1800,
    standard: 2800,
    premium: 5000
  },
  trimester: {} 
};

prices.trimester = {
  basic: roundDown(prices.monthly.basic * 3 * 0.9),
  standard: roundDown(prices.monthly.standard * 3 * 0.9),
  premium: roundDown(prices.monthly.premium * 3 * 0.9)
};

function updatePrices(isTrimester) {
  const currentPrices = isTrimester ? prices.trimester : prices.monthly;
  const periodText = isTrimester ? "DHS/Trimester (HT)" : "DHS/Mois (HT)";

  basiquePriceBtn.textContent = `Price: ${currentPrices.basic} ${periodText} \u2192`;
  standardPriceBtn.textContent = `Price: ${currentPrices.standard} ${periodText} \u2192`;
  premiumPriceBtn.textContent = `Price: ${currentPrices.premium} ${periodText}\u2192`;
}

monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active');
    trimesterbtn.classList.remove('active');
    updatePrices(false);
});

    trimesterbtn.addEventListener('click', () => {
      trimesterbtn.classList.add('active');
      monthlyBtn.classList.remove('active');
      updatePrices(true);
    });

    updatePrices(false);
    monthlyBtn.classList.add('active');
    trimesterbtn.classList.remove('active');
  });



  
        document.addEventListener('DOMContentLoaded', function() {
            const navItemContainers = document.querySelectorAll('.nav-item-circle-container');
            const stepContents = document.querySelectorAll('.process-step-content'); // Select all content sections

            function updateActiveState(clickedContainer) {
                // Remove 'active' and 'preceding-active' from all nav item containers and their circles
                navItemContainers.forEach(navContainer => {
                    navContainer.classList.remove('active', 'preceding-active');
                    navContainer.querySelector('.nav-item-circle').classList.remove('active');
                });

                // Add 'active' to the clicked nav item container and its circle
                clickedContainer.classList.add('active');
                clickedContainer.querySelector('.nav-item-circle').classList.add('active');

                // Add 'preceding-active' to all preceding siblings
                let current = clickedContainer.previousElementSibling;
                while (current) {
                    if (current.classList.contains('nav-item-circle-container')) {
                        current.classList.add('preceding-active');
                        current.querySelector('.nav-item-circle').classList.add('active'); // Also make the circle active
                    }
                    current = current.previousElementSibling;
                }

                // Hide all content sections
                stepContents.forEach(content => {
                    content.classList.add('d-none');
                });

                // Show the targeted content section
                const targetId = clickedContainer.dataset.target;
                document.getElementById(targetId).classList.remove('d-none');
            }

            navItemContainers.forEach(container => {
                container.addEventListener('click', function() {
                    updateActiveState(this);
                });
            });

            // Set the fifth tab as active on initial load and show its content
            if (navItemContainers.length > 0) {
                updateActiveState(navItemContainers[0]);
            } else if (navItemContainers.length > 0) {
                // Fallback to first tab if less than 5 exist
                updateActiveState(navItemContainers[0]);
            }
        });