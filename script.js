  window.addEventListener('load', () => {
    console.log(`Developed by: Jeremie R. Bacay | Student ID: 2024-00556`);
  });

  const menuItems = [
    { name: 'Farm Bowl',        icon: 'fa-bowl-rice',      desc: 'Rice, greens, roasted veggies & your choice of protein', price: '₱195', img: 'img/farm-bowl.jpg' },
    { name: 'Green Salad',      icon: 'fa-leaf',           desc: 'Mixed greens, cucumber, tomato & house vinaigrette',      price: '₱150', img: 'img/green-salad.jpg' },
    { name: 'Grilled Platter',  icon: 'fa-fire-flame-curved', desc: 'Grilled chicken or bangus with farm-fresh sides',      price: '₱260', img: 'img/grilled-platter.jpg' },
    { name: 'Harvest Wrap',     icon: 'fa-utensils',       desc: 'Whole wheat wrap with grilled veggies & cream cheese',   price: '₱175', img: 'img/food-wrao.png' },
    { name: 'Smoothie Bowl',    icon: 'fa-blender',        desc: 'Açai base, fresh fruit, granola & honey drizzle',        price: '₱185', img: 'img/smoothie-bowl.jpg' },
    { name: "Kids' Plate",      icon: 'fa-child',          desc: 'Smaller portions, big flavors — perfect for little ones', price: '₱120', img: 'img/kids-plate.jpg' },
  ];

  const menuGrid = document.getElementById('menu-grid');
  menuItems.forEach((item, i) => {
    const delay = ['','anim-delay-1','anim-delay-2'][i % 3];
    menuGrid.innerHTML += `
      <div class="bg-white rounded-3xl shadow-md card-hover overflow-hidden anim-fade-up ${delay} flex flex-col">
        <div class="h-44 overflow-hidden">
          <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
        <div class="p-5 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="bg-[#2d6a4f] text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm">
              <i class="fa-solid ${item.icon}"></i>
            </span>
            <h3 class="font-black text-[#2d6a4f] text-lg">${item.name}</h3>
          </div>
          <p class="text-gray-500 text-sm flex-1">${item.desc}</p>
          <div class="flex items-center justify-between mt-4">
            <span class="text-[#d4a373] font-black text-xl">${item.price}</span>
            <button class="add-to-cart bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold px-4 py-2 rounded-full transition-all hover:scale-105">
              <i class="fa-solid fa-plus mr-1"></i>Add
            </button>
          </div>
        </div>
      </div>
    `;
  });



  const tickerText = ' Fresh Daily &nbsp;•&nbsp;  Farm to Fork &nbsp;•&nbsp;  100% Natural &nbsp;•&nbsp;  Local Ingredients &nbsp;•&nbsp;  No Preservatives &nbsp;•&nbsp;  Eat Clean, Live Green &nbsp;•&nbsp; ';
  const ticker = document.getElementById('ticker-content');
  ticker.innerHTML = tickerText.repeat(4);
  ticker.nextElementSibling.innerHTML = tickerText.repeat(4);

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamIcon    = document.getElementById('ham-icon');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
      hamIcon.classList.remove('fa-bars');
      hamIcon.classList.add('fa-xmark');
    } else {
      hamIcon.classList.remove('fa-xmark');
      hamIcon.classList.add('fa-bars');
    }
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamIcon.classList.remove('fa-xmark');
      hamIcon.classList.add('fa-bars');
    });
  });

  const colorShiftBtn  = document.getElementById('color-shift-btn');
  const specialSection = document.getElementById('special-section');
  const shiftColors    = ['#fff3e0','#e8f5e9','#fce4ec','#e3f2fd','#f3e5f5','#fefae0'];
  let shiftIdx = 0;

  colorShiftBtn.addEventListener('click', () => {
    shiftIdx = (shiftIdx + 1) % shiftColors.length;
    specialSection.style.backgroundColor = shiftColors[shiftIdx];
    colorShiftBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles mr-2"></i>Shift Again!`;
  });

  const rewardsBtn    = document.getElementById('rewards-btn');
  const rewardsModal  = document.getElementById('rewards-modal');
  const modalClose    = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const rewardsSubmit = document.getElementById('rewards-submit');
  const rewardsMsg    = document.getElementById('rewards-msg');

  rewardsBtn.addEventListener('click', () => {
    rewardsModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });

  [modalClose, modalBackdrop].forEach(el => {
    el.addEventListener('click', () => {
      rewardsModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });

  rewardsSubmit.addEventListener('click', () => {
    const email = document.getElementById('rewards-email').value;
    if (!email || !email.includes('@')) {
      rewardsMsg.textContent = '⚠️ Please enter a valid email.';
      rewardsMsg.classList.remove('hidden', 'text-[#2d6a4f]');
      rewardsMsg.classList.add('text-red-500');
      return;
    }
    rewardsMsg.textContent = `🎉 Welcome to Farm Rewards, ${email.split('@')[0]}! Check your inbox.`;
    rewardsMsg.classList.remove('hidden', 'text-red-500');
    rewardsMsg.classList.add('text-[#2d6a4f]');
    setTimeout(() => { rewardsModal.classList.add('hidden'); document.body.classList.remove('overflow-hidden'); }, 2500);
  });

  const submitBtn      = document.getElementById('submit-btn');
  const formFeedback   = document.getElementById('form-feedback');

  submitBtn.addEventListener('click', () => {
    const name  = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const msg   = document.getElementById('form-message').value.trim();

    if (!name || !email || !msg) {
      formFeedback.textContent = 'Please fill in all required fields.';
      formFeedback.classList.remove('hidden', 'text-green-600');
      formFeedback.classList.add('text-red-500');
      return;
    }
    formFeedback.innerHTML = `Thanks, <strong>${name}</strong>! We'll reply to <em>${email}</em> soon.`;
    formFeedback.classList.remove('hidden', 'text-red-500');
    formFeedback.classList.add('text-green-600');
    ['form-name','form-email','form-message'].forEach(id => document.getElementById(id).value = '');
  });

  const newsletterBtn = document.getElementById('newsletter-btn');
  const newsletterMsg = document.getElementById('newsletter-msg');

  newsletterBtn.addEventListener('click', () => {
    const val = document.getElementById('newsletter-input').value.trim();
    if (!val || !val.includes('@')) {
      newsletterMsg.textContent = '⚠️ Enter a valid email.';
      newsletterMsg.classList.remove('hidden','text-[#74c69d]');
      newsletterMsg.classList.add('text-red-400');
    } else {
      newsletterMsg.textContent = '🎉 You\'re subscribed!';
      newsletterMsg.classList.remove('hidden','text-red-400');
      newsletterMsg.classList.add('text-[#74c69d]');
      document.getElementById('newsletter-input').value = '';
    }
  });

  document.addEventListener('click', e => {
    if (e.target.closest('.add-to-cart')) {
      const btn  = e.target.closest('.add-to-cart');
      const orig = btn.innerHTML;
      btn.innerHTML = `<i class="fa-solid fa-check mr-1"></i>Added!`;
      btn.classList.add('bg-[#74c69d]');
      btn.classList.remove('bg-[#2d6a4f]');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('bg-[#74c69d]');
        btn.classList.add('bg-[#2d6a4f]');
      }, 1500);
    }
  });

  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 60) {
      nav.classList.add('shadow-2xl');
    } else {
      nav.classList.remove('shadow-2xl');
    }
  });

  
const heroSection = document.getElementById('hero-section');
const viewMenuBtn = document.getElementById('view-menu-btn');
const heroColors  = ['#1b4332', '#3a5a8c', '#6b3a2a', '#4a3a6b', '#1a5c5c', '#2d6a4f'];
let heroColorIdx  = 0;

viewMenuBtn.addEventListener('mouseenter', () => {
  heroColorIdx = (heroColorIdx + 1) % heroColors.length;
  heroSection.style.backgroundColor = heroColors[heroColorIdx];
});

viewMenuBtn.addEventListener('mouseleave', () => {
  heroSection.style.backgroundColor = '';
});
