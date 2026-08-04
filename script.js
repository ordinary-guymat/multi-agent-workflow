const destinations = [
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80',
    description: 'Overwater villas, coral reefs, and a slow luxury escape.',
    climate: 'Tropical',
    bestSeason: 'Nov–Apr',
    travelStyle: 'Luxury, Relaxation',
    budget: 'Luxury',
    attractions: ['Reef snorkeling', 'Private sandbank', 'Spa rituals'],
    tags: ['Luxury', 'Beaches', 'Relaxation', 'Couple'],
    continent: 'Asia',
    adventure: 'Low',
    familyFriendly: false,
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80',
    description: 'Art, cafés, couture, and evening strolls by candlelit lanterns.',
    climate: 'Temperate',
    bestSeason: 'Apr–Jun',
    travelStyle: 'Food & Culture',
    budget: 'Mid-range',
    attractions: ['Louvre', 'Seine cruise', 'Montmartre'],
    tags: ['Food', 'Culture', 'Couple', 'Luxury'],
    continent: 'Europe',
    adventure: 'Medium',
    familyFriendly: true,
  },
  {
    id: 'banff',
    name: 'Banff',
    country: 'Canada',
    region: 'Rockies',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    description: 'Glacier lakes, alpine air, and postcard-worthy mountain vistas.',
    climate: 'Cool',
    bestSeason: 'Jun–Sep',
    travelStyle: 'Adventure',
    budget: 'Mid-range',
    attractions: ['Lake Louise', 'Moraine Lake', 'Hot springs'],
    tags: ['Mountains', 'Adventure', 'Nature', 'Couple'],
    continent: 'North America',
    adventure: 'High',
    familyFriendly: true,
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    description: 'Temple gardens, tea houses, and gently glowing lantern-lit streets.',
    climate: 'Temperate',
    bestSeason: 'Mar–Apr',
    travelStyle: 'Culture',
    budget: 'Mid-range',
    attractions: ['Fushimi Inari', 'Arashiyama', 'Kiyomizu-dera'],
    tags: ['Culture', 'Food', 'History', 'Solo'],
    continent: 'Asia',
    adventure: 'Medium',
    familyFriendly: true,
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Aegean',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
    description: 'Cliffside caldera views and a dramatically romantic island escape.',
    climate: 'Mediterranean',
    bestSeason: 'May–Sep',
    travelStyle: 'Luxury, Romance',
    budget: 'Luxury',
    attractions: ['Oia sunset', 'Wine tasting', 'Catamaran cruise'],
    tags: ['Luxury', 'Couple', 'Beaches', 'Relaxation'],
    continent: 'Europe',
    adventure: 'Low',
    familyFriendly: false,
  },
  {
    id: 'bali',
    name: 'Bali',
    country:'Indonesia',
    region:'Indonesia',
    image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
    description:'Tropical rice terraces, wellness retreats, and surf-ready coastlines.',
    climate:'Tropical',
    bestSeason:'Apr–Oct',
    travelStyle:'Relaxed, Adventure',
    budget:'Budget',
    attractions:['Ubud temples','Canggu beach','Uluwatu'],
    tags:['Beaches','Relaxation','Adventure','Food'],
    continent:'Asia',
    adventure:'High',
    familyFriendly:true,
  }
];

const filterOptions = ['Budget', 'Continent', 'Adventure level', 'Relaxation', 'Family friendly', 'Solo travel', 'Couple', 'Luxury', 'Food', 'Culture', 'Beaches', 'Mountains', 'Nightlife', 'History'];

const destinationProfiles = {
  maldives: {
    famousLandmarks: ['Ari Atoll', 'Vaadhoo Beach', 'Malé Waterfront', 'Baa Atoll'],
    signatureActivities: ['reef snorkeling with manta rays', 'a sunset cruise', 'a private sandbank picnic', 'a spa ritual'],
    breakfastSpot: 'Breakfast at a glass-walled overwater restaurant',
    lunchSpot: 'Lunch with grilled reef fish and coconut rice',
    dinnerSpot: 'Dinner beneath the stars in an overwater villa',
    shopping: 'A short stroll through local artisan stalls in Malé',
    eveningExperience: 'Moonlit stargazing and a calm jazz set',
    sunsetSpot: 'Golden-hour views from a luxury dhoni cruise',
    backupIndoor: ['A marine life center visit', 'A restorative spa afternoon'],
    localDishes: ['Mas huni', 'Garudhiya', 'Roshi'],
    hiddenGems: ['Underwater dining', 'Coral garden drift'],
    currency: 'USD',
  },
  paris: {
    famousLandmarks: ['The Eiffel Tower', 'The Louvre', 'Seine River cruise', 'Montmartre'],
    signatureActivities: ['a pastry crawl through patisseries', 'a Seine river cruise', 'a museum afternoon', 'sunset at a rooftop bar'],
    breakfastSpot: 'Breakfast at a classic café on the Left Bank',
    lunchSpot: 'Lunch in a bistro with duck confit and seasonal vegetables',
    dinnerSpot: 'Dinner in a candlelit brasserie near the Marais',
    shopping: 'A slow browse through Rue Saint-Honoré and Le Marais',
    eveningExperience: 'A twilight walk through the Seine and a jazz show',
    sunsetSpot: 'Golden-hour views from a rooftop terrace',
    backupIndoor: ['The Musée d’Orsay', 'A luxury spa session'],
    localDishes: ['Croque monsieur', 'Coq au vin', 'Macarons'],
    hiddenGems: ['Covered passages', 'Rue des Thermopyles'],
    currency: 'EUR',
  },
  banff: {
    famousLandmarks: ['Lake Louise', 'Moraine Lake', 'Johnston Canyon', 'Banff Gondola'],
    signatureActivities: ['an alpine lakeside walk', 'a guided canyon hike', 'a scenic gondola ride', 'a lakeside picnic'],
    breakfastSpot: 'Breakfast with mountain views at a lakeside lodge',
    lunchSpot: 'Lunch with hearty soup and local pastries',
    dinnerSpot: 'Dinner in Banff with regional bison and wild mushroom dishes',
    shopping: 'A browse through Banff Avenue boutiques',
    eveningExperience: 'A relaxed evening at the hot springs',
    sunsetSpot: 'Sunset lookout at Sulphur Mountain',
    backupIndoor: ['The Whyte Museum', 'A cozy tea house stop'],
    localDishes: ['Bison burger', 'Maple-glazed salmon', 'Wild berry pie'],
    hiddenGems: ['Bow Falls', 'Tunnel Mountain trail'],
    currency: 'CAD',
  },
  kyoto: {
    famousLandmarks: ['Fushimi Inari Taisha', 'Kiyomizu-dera', 'Arashiyama Bamboo Grove', 'Gion'],
    signatureActivities: ['a temple garden walk', 'a tea ceremony', 'an evening lantern stroll', 'a sushi dinner in Pontocho'],
    breakfastSpot: 'Breakfast with matcha and seasonal sweets',
    lunchSpot: 'Lunch of soba and grilled river fish',
    dinnerSpot: 'Dinner in Gion with Kyoto-style kaiseki',
    shopping: 'A browse through Nishiki Market and craft shops',
    eveningExperience: 'A lantern-lit walk through old streets and alleys',
    sunsetSpot: 'Sunset from the Kiyomizu hillside',
    backupIndoor: ['Kyoto National Museum', 'A traditional bathhouse'],
    localDishes: ['Yudofu', 'Obanzai', 'Matcha parfait'],
    hiddenGems: ['Philosopher’s Path', 'Okochi Sanso Garden'],
    currency: 'JPY',
  },
  santorini: {
    famousLandmarks: ['Oia', 'Fira', 'Akrotiri Ruins', 'Red Beach'],
    signatureActivities: ['a caldera cruise', 'a sunset photo walk', 'a winery tasting', 'a swim in the Aegean'],
    breakfastSpot: 'Breakfast with bakery pastries and sea views',
    lunchSpot: 'Lunch at a cliffside tavern with grilled octopus',
    dinnerSpot: 'Dinner overlooking the caldera at sunset',
    shopping: 'A browse through Oia’s artisan boutiques',
    eveningExperience: 'A relaxed evening of wine and sea breeze',
    sunsetSpot: 'Sunset at Oia Castle viewpoint',
    backupIndoor: ['Museum of Prehistoric Thera', 'A spa afternoon'],
    localDishes: ['Tomatokeftedes', 'Fava', 'Santorini tomato salad'],
    hiddenGems: ['Emporio village', 'Imerovigli terrace stroll'],
    currency: 'EUR',
  },
  bali: {
    famousLandmarks: ['Uluwatu Temple', 'Tegalalang Rice Terraces', 'Ubud Monkey Forest', 'Tanah Lot'],
    signatureActivities: ['a surf lesson', 'a temple and rice terrace day', 'a spa treatment', 'a clifftop sunset'],
    breakfastSpot: 'Breakfast with tropical fruit and freshly brewed coffee',
    lunchSpot: 'Lunch at a wellness café with nasi campur',
    dinnerSpot: 'Dinner at a beachfront restaurant in Uluwatu',
    shopping: 'A browse through Ubud artisan markets and beach boutiques',
    eveningExperience: 'A sunset beach ritual with live music',
    sunsetSpot: 'Sunset from Uluwatu cliffside',
    backupIndoor: ['A traditional Balinese massage', 'An art gallery visit'],
    localDishes: ['Nasi goreng', 'Satay', 'Bebek betutu'],
    hiddenGems: ['Campuhan Ridge Walk', 'Jatiluwih rice fields'],
    currency: 'IDR',
  },
};

const state = {
  currentStep: 1,
  selectedDestination: null,
  agent1Output: {},
  agent2Output: {},
  agent3Output: {},
  activeFilter: 'All',
};

const destinationGrid = document.getElementById('destinationGrid');
const filterBar = document.getElementById('filterBar');
const selectedName = document.getElementById('selectedName');
const selectedSummary = document.getElementById('selectedSummary');
const tripForm = document.getElementById('tripForm');
const agent1Insight = document.getElementById('agent1Insight');
const agent2Insight = document.getElementById('agent2Insight');
const agent3Insight = document.getElementById('agent3Insight');
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
const progressPercent = document.getElementById('progressPercent');
const progressPills = document.querySelectorAll('.step-pill');
const summaryCard = document.getElementById('summaryCard');
const itineraryList = document.getElementById('itineraryList');
const reviewCard = document.getElementById('reviewCard');
const finalGrid = document.getElementById('finalGrid');
const themeToggle = document.getElementById('themeToggle');
const resetBtn = document.getElementById('resetBtn');

function renderFilters() {
  const buttons = ['All', ...filterOptions];
  filterBar.innerHTML = buttons.map((option) => `
    <button class="filter-pill ${state.activeFilter === option ? 'active' : ''}" data-filter="${option}">${option}</button>
  `).join('');

  filterBar.querySelectorAll('.filter-pill').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFilter = button.dataset.filter;
      renderFilters();
      renderDestinations();
    });
  });
}

function renderDestinations() {
  let visible = destinations;
  if (state.activeFilter !== 'All') {
    visible = destinations.filter((destination) => {
      if (state.activeFilter === 'Budget') return destination.budget === 'Mid-range' || destination.budget === 'Luxury';
      if (state.activeFilter === 'Continent') return destination.continent === 'Europe' || destination.continent === 'Asia';
      if (state.activeFilter === 'Adventure level') return destination.adventure === 'High';
      if (state.activeFilter === 'Relaxation') return destination.tags.includes('Relaxation');
      if (state.activeFilter === 'Family friendly') return destination.familyFriendly;
      if (state.activeFilter === 'Solo travel') return destination.tags.includes('Solo');
      if (state.activeFilter === 'Couple') return destination.tags.includes('Couple');
      if (state.activeFilter === 'Luxury') return destination.budget === 'Luxury';
      if (state.activeFilter === 'Food') return destination.tags.includes('Food');
      if (state.activeFilter === 'Culture') return destination.tags.includes('Culture');
      if (state.activeFilter === 'Beaches') return destination.tags.includes('Beaches');
      if (state.activeFilter === 'Mountains') return destination.tags.includes('Mountains');
      if (state.activeFilter === 'Nightlife') return destination.tags.includes('Nightlife');
      if (state.activeFilter === 'History') return destination.tags.includes('History');
      return true;
    });
  }

  destinationGrid.innerHTML = visible.map((destination) => `
    <article class="destination-card ${state.selectedDestination?.id === destination.id ? 'selected' : ''}" data-id="${destination.id}">
      <img src="${destination.image}" alt="${destination.name}" />
      <div class="card-body">
        <p class="eyebrow">${destination.country}</p>
        <h4>${destination.name}</h4>
        <p>${destination.description}</p>
        <div class="meta-row">
          <span class="tag">${destination.climate}</span>
          <span class="tag">${destination.bestSeason}</span>
          <span class="tag">${destination.budget}</span>
        </div>
      </div>
    </article>
  `).join('');

  destinationGrid.querySelectorAll('.destination-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      state.selectedDestination = destinations.find((destination) => destination.id === id);
      selectedName.textContent = `${state.selectedDestination.name}, ${state.selectedDestination.country}`;
      selectedSummary.textContent = `${state.selectedDestination.description} Best for ${state.selectedDestination.travelStyle}.`;
      renderDestinations();
    });
  });
}

function updateProgress() {
  const percent = state.currentStep === 1 ? 33 : state.currentStep === 2 ? 66 : 100;
  progressFill.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}%`;
  progressLabel.textContent = state.currentStep === 1 ? 'Destination discovery' : state.currentStep === 2 ? 'Itinerary building' : 'Review & optimize';
  progressPills.forEach((pill) => {
    pill.classList.toggle('active', Number(pill.dataset.step) <= state.currentStep);
  });
}

function setActivePanel(step) {
  document.querySelectorAll('.panel').forEach((panel) => panel.classList.toggle('active', Number(panel.id.replace(/\D/g, '')) === step));
}

function buildAgent1Output() {
  const formData = new FormData(tripForm);
  const month = document.getElementById('travelMonth').value;
  const travelers = document.getElementById('travelerCount').value;
  const style = document.getElementById('travelStyle').value;
  const budget = document.getElementById('budget').value;
  const days = document.getElementById('tripDays').value;

  state.agent1Output = {
    destination: state.selectedDestination.name,
    country: state.selectedDestination.country,
    preferredTravelMonth: month,
    numberOfTravelers: Number(travelers),
    travelStyle: style,
    budget,
    vacationLengthDays: Number(days),
    selectedHighlights: state.selectedDestination.attractions,
  };
  agent1Insight.textContent = `${state.selectedDestination.name} has been paired with ${style.toLowerCase()} travel plans, a ${budget.toLowerCase()} budget, and famous highlights such as ${state.selectedDestination.attractions.join(', ')}.`;
  return state.agent1Output;
}

function buildAgent2Output(input) {
  const dayCount = input.vacationLengthDays;
  const profile = destinationProfiles[state.selectedDestination?.id] || destinationProfiles.paris;
  const dailyItinerary = Array.from({ length: dayCount }, (_, index) => {
    const dayNumber = index + 1;
    const landmark = profile.famousLandmarks[(dayNumber - 1) % profile.famousLandmarks.length];
    const activity = profile.signatureActivities[(dayNumber - 1) % profile.signatureActivities.length];

    return {
      day: dayNumber,
      morning: {
        breakfast: profile.breakfastSpot,
        activities: dayNumber === 1 ? `Begin with ${landmark}` : `Visit ${landmark} before the crowds`,
        travelTime: dayNumber <= 2 ? '10–15 min' : '20–30 min',
      },
      afternoon: {
        lunch: profile.lunchSpot,
        attractions: dayNumber === 1 ? `Spend the afternoon enjoying ${activity}` : `Continue with ${activity}`,
        shopping: profile.shopping,
      },
      evening: {
        dinner: profile.dinnerSpot,
        entertainment: profile.eveningExperience,
        sunset: profile.sunsetSpot,
      },
      optional: [
        `Backup plan: ${profile.backupIndoor[0]}`,
        `Extra downtime for ${profile.hiddenGems[0].toLowerCase()}`,
      ],
    };
  });

  state.agent2Output = {
    destination: input.destination,
    tripLength: `${input.vacationLengthDays} days`,
    dailyItinerary,
    hotels: {
      luxury: `A refined stay near ${profile.famousLandmarks[0]}`,
      midRange: 'A boutique property in the heart of the destination',
      budget: 'A stylish guesthouse with breakfast included',
    },
    transportation: {
      airport: 'Arrival transfer arranged with a direct car or shuttle service',
      publicTransit: 'Walkable core districts and easy local transit links',
      rentalCar: input.budget !== 'Budget' ? 'Recommended for flexibility' : 'Not necessary',
    },
    budget: {
      flights: 'Flexible depending on region and season',
      hotels: input.budget === 'Luxury' ? '$350-$600/night' : input.budget === 'Mid-range' ? '$180-$280/night' : '$90-$160/night',
      food: '$60-$120/day',
      activities: '$30-$90/day',
    },
    recommendations: {
      mustSee: state.selectedDestination.attractions,
      hiddenGems: profile.hiddenGems,
    },
    packing: ['Comfortable walking shoes', 'Light layer', 'Portable charger', 'Travel documents'],
    tips: ['Reserve dinner tables early', 'Carry a small cash buffer', 'Respect local dress codes'],
    mapsOrder: ['Arrival', 'Iconic landmarks', 'Food stops', 'Departure'],
    localCuisine: profile.localDishes,
  };
  agent2Insight.textContent = `${input.destination} is now presented as a polished itinerary with ${profile.famousLandmarks.slice(0, 3).join(', ')} and local cuisine woven into each day.`;
  return state.agent2Output;
}

function buildAgent3Output(plan) {
  const issues = [];
  if (plan.tripLength.includes('14')) issues.push('Reduced a few rushed stops to preserve energy and keep the pace elegant.');
  if (plan.budget.hotels.includes('$350')) issues.push('Adjusted one premium activity to a more efficient evening option.');
  if (plan.destination === 'Banff') issues.push('Added a rain-safe indoor alternative for mountain weather.');

  state.agent3Output = {
    destination: plan.destination,
    summary: {
      travelLength: plan.tripLength,
      bestExperiences: ['Signature landmarks', 'Local food stops', 'Relaxed pacing'],
      budgetEstimate: plan.budget,
      travelStyle: 'Balanced and efficient',
    },
    review: {
      checked: ['Opening hours', 'Travel times', 'Budget realism', 'Weather fit', 'Accessibility'],
      improvements: issues,
    },
    finalPackage: {
      hotels: plan.hotels,
      transportation: plan.transportation,
      restaurantGuide: ['Breakfast café', 'Lunch market', 'Dinner reservation'],
      packingChecklist: plan.packing,
      insiderTips: plan.tips,
    },
  };
  agent3Insight.textContent = `The final package highlights ${plan.recommendations.mustSee.join(', ')} while keeping the trip practical, scenic, and comfortable.`;
  return state.agent3Output;
}

function renderSummary(plan) {
  summaryCard.innerHTML = `
    <div class="panel-header compact">
      <div>
        <p class="eyebrow">Trip overview</p>
        <h4>${plan.destination}</h4>
      </div>
      <span class="status-badge">${plan.tripLength}</span>
    </div>
    <p><strong>Travel style:</strong> ${state.agent1Output.travelStyle}</p>
    <p><strong>Budget:</strong> ${state.agent1Output.budget}</p>
    <p><strong>Travelers:</strong> ${state.agent1Output.numberOfTravelers}</p>
    <p><strong>Month:</strong> ${state.agent1Output.preferredTravelMonth}</p>
    <p><strong>Famous highlights:</strong> ${plan.recommendations.mustSee.join(', ')}</p>
  `;

  itineraryList.innerHTML = plan.dailyItinerary.map((entry) => `
    <article class="day-card">
      <h4>Day ${entry.day}</h4>
      <div class="day-grid">
        <div class="block">
          <h5>Morning</h5>
          <p>${entry.morning.breakfast}</p>
          <p>${entry.morning.activities}</p>
        </div>
        <div class="block">
          <h5>Afternoon</h5>
          <p>${entry.afternoon.attractions}</p>
          <p>${entry.afternoon.shopping}</p>
        </div>
        <div class="block">
          <h5>Evening</h5>
          <p>${entry.evening.dinner}</p>
          <p>${entry.evening.entertainment}</p>
        </div>
      </div>
    </article>
  `).join('');
}

function renderReview(reviewOutput) {
  reviewCard.innerHTML = `
    <div class="panel-header compact">
      <div>
        <p class="eyebrow">Optimization review</p>
        <h4>${reviewOutput.destination}</h4>
      </div>
      <span class="status-badge">Approved</span>
    </div>
    <p>${reviewOutput.review.improvements.join(' ')}</p>
    <ul>
      ${reviewOutput.review.checked.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;

  finalGrid.innerHTML = `
    <div class="final-card">
      <h4>Final travel package</h4>
      <ul>
        <li>Luxury / mid-range / budget hotel zones: ${reviewOutput.finalPackage.hotels.luxury}</li>
        <li>Transportation: ${reviewOutput.finalPackage.transportation.airport}</li>
        <li>Restaurant guide: ${reviewOutput.finalPackage.restaurantGuide.join(', ')}</li>
      </ul>
    </div>
    <div class="final-card">
      <h4>Budget snapshot</h4>
      <ul>
        <li>Flights: ${state.agent2Output.budget.flights}</li>
        <li>Hotels: ${state.agent2Output.budget.hotels}</li>
        <li>Food: ${state.agent2Output.budget.food}</li>
        <li>Activities: ${state.agent2Output.budget.activities}</li>
      </ul>
    </div>
  `;
}

tripForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!state.selectedDestination) {
    selectedSummary.textContent = 'Please choose a destination first.';
    return;
  }

  const input = buildAgent1Output();
  const plan = buildAgent2Output(input);
  const review = buildAgent3Output(plan);
  renderSummary(plan);
  renderReview(review);
  state.currentStep = 2;
  setActivePanel(2);
  updateProgress();
});

renderFilters();
renderDestinations();
updateProgress();

progressPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    const nextStep = Number(pill.dataset.step);
    state.currentStep = nextStep;
    setActivePanel(nextStep);
    updateProgress();
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️ Light' : '🌙 Dark';
});

resetBtn.addEventListener('click', () => {
  state.currentStep = 1;
  state.selectedDestination = null;
  state.agent1Output = {};
  state.agent2Output = {};
  state.agent3Output = {};
  tripForm.reset();
  document.getElementById('travelMonth').value = 'January';
  document.getElementById('travelerCount').value = '2';
  document.getElementById('travelStyle').value = 'Luxury';
  document.getElementById('budget').value = 'Luxury';
  document.getElementById('tripDays').value = '7';
  selectedName.textContent = 'Pick a place to begin';
  selectedSummary.textContent = 'Choose a destination card and share a few details to unlock the itinerary.';
  summaryCard.innerHTML = '';
  itineraryList.innerHTML = '';
  reviewCard.innerHTML = '';
  finalGrid.innerHTML = '';
  agent1Insight.textContent = 'The destination is being refined into an inspiring, landmark-led experience.';
  agent2Insight.textContent = 'Your itinerary is being shaped around the destination’s signature landmarks, food, and pace.';
  agent3Insight.textContent = 'The final package is being polished for comfort, efficiency, and memorable highlights.';
  renderDestinations();
  setActivePanel(1);
  updateProgress();
});
