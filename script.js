const products = [
  {
    id: 1, name: 'Огненный дракон', mood: 'дерзкий', tags: ['аниме', 'паттерн'], price: 490, badge: 'Хит',
    img: 'https://images.unsplash.com/photo-1759782178780-6b6c54dd42a7?w=600&h=600&fit=crop&q=80',
    desc: 'Яркие носки с принтом дракона в японском стиле. Каждая деталь прорисована вручную — от когтей до чешуи. Хлопок с добавлением лайкры держит форму весь день и не сползает.',
    material: '80% хлопок, 15% полиамид, 5% эластан',
    feel: 'Мягко как облако',
  },
  {
    id: 2, name: 'Mono Stripe', mood: 'минималист', tags: ['геометрия', 'паттерн'], price: 390, badge: null,
    img: 'https://images.unsplash.com/photo-1502830778456-7c68e5a3c5f2?w=600&h=600&fit=crop&q=80',
    desc: 'Чистая геометрия без лишнего шума. Классические полосы в нейтральной палитре — подойдут под любой образ, от делового до уличного. Детали говорят сами за себя.',
    material: '85% хлопок, 10% полиамид, 5% эластан',
    feel: 'Дышащие, не жмут',
  },
  {
    id: 3, name: 'Кот в матрице', mood: 'абсурдный', tags: ['котики', 'аниме'], price: 450, badge: 'Новинка',
    img: 'https://images.unsplash.com/photo-1727498830440-339a797d8423?w=600&h=600&fit=crop&q=80',
    desc: 'Коты, пиксели и немного хаоса. Эти носки — для тех, кто видит матрицу сквозь экран монитора и не прочь поговорить об этом. Принт нанесён сублимацией — не выгорит.',
    material: '78% хлопок, 17% полиамид, 5% эластан',
    feel: 'Плотные, держат форму',
  },
  {
    id: 4, name: 'Тихий час', mood: 'уютный', tags: ['паттерн'], price: 420, badge: null,
    img: 'https://plus.unsplash.com/premium_photo-1684952850099-396e7183bc6c?w=600&h=600&fit=crop&q=80',
    desc: 'Для диванных вечеров, горячего чая и сериала. Мягкая бархатная ткань с пастельным узором — максимум уюта минимальными средствами. Можно носить как тапки.',
    material: '90% хлопок, 7% полиамид, 3% эластан',
    feel: 'Как вторая кожа',
  },
  {
    id: 5, name: 'Пицца навсегда', mood: 'абсурдный', tags: ['еда'], price: 440, badge: null,
    img: 'https://images.unsplash.com/photo-1768145439317-5d342971c3df?w=600&h=600&fit=crop&q=80',
    desc: 'Потому что пицца — это не просто еда, это образ жизни. Принт с кусочками пепперони и моцареллой нарисован вручную художником Кириллом Соколовым. Ограниченная серия.',
    material: '82% хлопок, 13% полиамид, 5% эластан',
    feel: 'Стойкий принт, не линяет',
  },
  {
    id: 6, name: 'Жёсткий минимал', mood: 'минималист', tags: ['геометрия'], price: 370, badge: null,
    img: 'https://images.unsplash.com/photo-1635342587676-13a5570e9101?w=600&h=600&fit=crop&q=80',
    desc: 'Никаких компромиссов. Однотонный чёрный с едва заметной фактурой — идеальны под деловой костюм или кеды. Те самые носки, которые ты ищешь годами.',
    material: '88% хлопок, 9% полиамид, 3% эластан',
    feel: 'Классика на каждый день',
  },
  {
    id: 7, name: 'Неоновый тигр', mood: 'дерзкий', tags: ['аниме', 'паттерн'], price: 510, badge: 'Дроп',
    img: 'https://images.unsplash.com/photo-1635293882159-a68f138748ee?w=600&h=600&fit=crop&q=80',
    desc: 'Тигр не просто принт — это заявление. Флуоресцентные оттенки, прорисованные полосы, дерзкая энергия. Носи с белыми кроссовками и смотри, как люди оборачиваются.',
    material: '76% хлопок, 19% полиамид, 5% эластан',
    feel: 'Ярко, стойко, навсегда',
  },
  {
    id: 8, name: 'Авокадо тост', mood: 'абсурдный', tags: ['еда', 'арт'], price: 430, badge: null,
    img: 'https://images.unsplash.com/photo-1733410027829-c6622454c8b3?w=600&h=600&fit=crop&q=80',
    desc: 'Авокадо-тост — символ эпохи. Эти носки для тех, кто завтракает с вкусом и не стесняется говорить об этом ногами. Авторская иллюстрация, рисовая ткань.',
    material: '80% хлопок, 15% полиамид, 5% эластан',
    feel: 'Легко и иронично',
  },
  {
    id: 9, name: 'Советский арт', mood: 'уютный', tags: ['арт', 'паттерн'], price: 460, badge: null,
    img: 'https://images.unsplash.com/photo-1635293881505-658651a8f250?w=600&h=600&fit=crop&q=80',
    desc: 'Ретро-иллюстрации в духе советского плаката переосмыслены для современного гардероба. Косметика, ракеты, атомы. Тёплая палитра, мягкий ворс — уют с историей.',
    material: '83% хлопок, 12% полиамид, 5% эластан',
    feel: 'Тепло и с историей',
  },
];

let cart = [];
let currentProductId = null;

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => {
    const inCart = cart.some(c => c.id === p.id);
    return `
      <div class="product-card" onclick="openProduct(${p.id})">
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />
        </div>
        <div class="product-info">
          <div class="product-name">${p.name}${p.badge ? `<span class="badge">${p.badge}</span>` : ''}</div>
          <div class="product-mood">${p.mood} · ${p.tags.map(t=>'#'+t).join(' ')}</div>
          <div class="product-footer">
            <div class="product-price">${p.price} ₽</div>
            <button class="add-btn ${inCart?'added':''}" onclick="addToCart(event, ${p.id})">${inCart ? '✓' : '+'}</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function openProduct(id) {
  currentProductId = id;
  const p = products.find(x => x.id === id);
  const inCart = cart.some(c => c.id === id);
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = p.price + ' ₽';
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalBadges').innerHTML =
    (p.badge ? `<span class="badge">${p.badge}</span>` : '') +
    `<span class="modal-mood-tag">${p.mood}</span>` +
    p.tags.map(t => `<span class="modal-mood-tag">#${t}</span>`).join('');
  document.getElementById('modalSpecs').innerHTML = `
    <div class="spec"><div class="spec-label">Состав</div><div class="spec-val">${p.material}</div></div>
    <div class="spec"><div class="spec-label">Ощущение</div><div class="spec-val">${p.feel}</div></div>
  `;
  const btn = document.getElementById('modalAddBtn');
  btn.textContent = inCart ? '✓ В корзине' : 'Добавить в корзину';
  btn.className = 'modal-add-btn' + (inCart ? ' added' : '');
  document.querySelectorAll('.size-btn').forEach((b,i) => b.classList.toggle('active', i===0));
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function selectSize(el) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function addFromModal() {
  if (!currentProductId) return;
  const p = products.find(x => x.id === currentProductId);
  const inCart = cart.some(c => c.id === currentProductId);
  if (!inCart) {
    cart.push({ ...p });
    document.getElementById('modalAddBtn').textContent = '✓ В корзине';
    document.getElementById('modalAddBtn').className = 'modal-add-btn added';
  }
  updateCartCount();
  renderProducts();
  renderCart();
  showToast(`${p.name} добавлен в корзину`);
}

function filterMood(mood, el) {
  document.querySelectorAll('.mood-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

function addToCart(e, id) {
  e.stopPropagation();
  const p = products.find(x => x.id === id);
  if (!cart.some(c => c.id === id)) {
    cart.push({ ...p });
  } else {
    cart = cart.filter(c => c.id !== id);
  }
  updateCartCount();
  renderProducts();
  renderCart();
  const inCart = cart.some(c => c.id === id);
  showToast(inCart ? `${p.name} добавлен в корзину` : `${p.name} удалён из корзины`);
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.length;
}

function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    el.innerHTML = '<div class="empty-cart"><div class="empty-emoji">🧦</div><p>Корзина пуста.<br>Добавь что-нибудь!</p></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  el.innerHTML = cart.map(p => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:var(--light);overflow:hidden;border-radius:12px;">
        <img src="${p.img}" alt="${p.name}" style="width:64px;height:64px;object-fit:cover;display:block;" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${p.price} ₽</div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${p.id})">✕</button>
    </div>
  `).join('');
  const total = cart.reduce((s, p) => s + p.price, 0);
  document.getElementById('cartTotal').textContent = total.toLocaleString('ru') + ' ₽';
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartCount();
  renderCart();
  renderProducts();
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('overlay');
  panel.classList.toggle('open');
  overlay.classList.toggle('open');
  renderCart();
}

function checkout() {
  if (!cart.length) return;
  toggleCart();
  openDelivery();
}

/* ── DELIVERY FORM ── */
let selectedDeliveryType = 'standard';

function openDelivery() {
  document.getElementById('deliveryOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDelivery() {
  document.getElementById('deliveryOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeDeliveryOutside(e) {
  if (e.target === document.getElementById('deliveryOverlay')) closeDelivery();
}

function selectDelivery(el, type) {
  document.querySelectorAll('.delivery-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  selectedDeliveryType = type;
}

function updateDeliveryBtn() {
  const city = document.getElementById('dCity').value.trim();
  const street = document.getElementById('dStreet').value.trim();
  const house = document.getElementById('dHouse').value.trim();
  const btn = document.getElementById('deliveryConfirmBtn');
  if (city && street && house) {
    btn.classList.add('ready');
  } else {
    btn.classList.remove('ready');
  }
}

function confirmDelivery() {
  const city = document.getElementById('dCity').value.trim();
  const street = document.getElementById('dStreet').value.trim();
  const house = document.getElementById('dHouse').value.trim();
  if (!city || !street || !house) return;
  closeDelivery();
  const total = cart.reduce((s, p) => s + p.price, 0);
  cart = [];
  updateCartCount();
  renderCart();
  const deliveryLabels = { standard: '2–4 дня', express: 'завтра', pickup: 'самовывоз' };
  showToast(`🎉 Заказ на ${total.toLocaleString('ru')} ₽ оформлен! Доставим ${deliveryLabels[selectedDeliveryType]}`);
  document.getElementById('dCity').value = '';
  document.getElementById('dStreet').value = '';
  document.getElementById('dHouse').value = '';
  document.getElementById('dFlat').value = '';
  document.getElementById('dEntrance').value = '';
  document.getElementById('deliveryConfirmBtn').classList.remove('ready');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeInfo(); }
});

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function subscribeNewsletter() {
  const v = document.getElementById('nlInput').value.trim();
  if (!v || !v.includes('@')) { showToast('Введи корректный email'); return; }
  document.getElementById('nlInput').value = '';
  showToast('🎉 Ты подписан! Ждём тебя в пятницу');
}

const infoContent = {
  delivery: `
    <span class="info-tag">Доставка и оплата</span>
    <h3>Как мы доставляем</h3>
    <p>Отправляем заказы каждый будний день. Среднее время доставки — 24–48 часов после оформления.</p>
    <ul>
      <li><strong>Стандартная доставка</strong> — 2–4 дня, 299 ₽</li>
      <li><strong>Экспресс</strong> — 1 день, 499 ₽</li>
      <li><strong>Бесплатно</strong> — при заказе от 1500 ₽</li>
      <li><strong>Самовывоз</strong> — из пункта выдачи, бесплатно</li>
    </ul>
    <p style="margin-top:16px"><strong>Оплата:</strong> карты Visa/Mastercard/МИР, СБП, Apple Pay, Google Pay.</p>`,
  return: `
    <span class="info-tag">Возврат</span>
    <h3>14 дней — без вопросов</h3>
    <p>Не подошёл размер или просто передумал — возвращай в течение 14 дней. Носки должны быть в упаковке и без следов носки.</p>
    <ul>
      <li>Заполни форму на сайте или напиши нам</li>
      <li>Мы вышлем бесплатный ярлык для возврата</li>
      <li>Деньги вернём в течение 3 рабочих дней</li>
    </ul>
    <p style="margin-top:16px">Контакт: <strong>hello@socksy.shop</strong></p>`,
  sizes: `
    <span class="info-tag">Таблица размеров</span>
    <h3>Подбери свой размер</h3>
    <p>Все носки SOCKSY эластичны — каждый размер охватывает диапазон. При сомнении берите больший.</p>
    <table class="info-size-table">
      <thead><tr><th>Размер SOCKSY</th><th>Размер ноги (EU)</th><th>Длина стопы</th></tr></thead>
      <tbody>
        <tr><td>36–38</td><td>36–38</td><td>22–24 см</td></tr>
        <tr><td>39–41</td><td>39–41</td><td>25–27 см</td></tr>
        <tr><td>42–44</td><td>42–44</td><td>27–29 см</td></tr>
        <tr><td>45–47</td><td>45–47</td><td>29–31 см</td></tr>
      </tbody>
    </table>`,
  faq: `
    <span class="info-tag">FAQ</span>
    <h3>Частые вопросы</h3>
    <p><strong>Как стирать носки SOCKSY?</strong><br>При 30°C, деликатный режим. Не сушить в барабане — принт живёт дольше.</p>
    <p><strong>Выгорает ли принт?</strong><br>Нет. Мы используем сублимационную печать — принт вплавлен в ткань.</p>
    <p><strong>Есть ли подарочная упаковка?</strong><br>Да! Выбери «Подарочный набор» в каталоге — красивая коробка включена.</p>
    <p><strong>Можно купить без регистрации?</strong><br>Конечно. Корзина → адрес → оплата. Регистрация не нужна.</p>`,
  about: `
    <span class="info-tag">О нас</span>
    <h3>Мы — SOCKSY</h3>
    <p>Небольшая команда из 8 человек, которая верит: детали делают образ. Начали в 2023 году с 12 дизайнов. Сейчас их больше 200.</p>
    <p>Каждый принт — авторская иллюстрация. Работаем с художниками из разных городов. Ткань — только хлопок с минимальным синтетикой для стрейча.</p>
    <p>Дропы — каждую пятницу. Подпишись, чтобы не пропустить.</p>`,
  privacy: `
    <span class="info-tag">Конфиденциальность</span>
    <h3>Политика конфиденциальности</h3>
    <p>Мы собираем только email и адрес доставки — ничего лишнего. Не продаём данные третьим лицам.</p>
    <p>Для оформления заказа без регистрации данные хранятся только на время обработки заказа.</p>
    <p>По всем вопросам: <strong>privacy@socksy.shop</strong></p>`,
  terms: `
    <span class="info-tag">Условия</span>
    <h3>Условия использования</h3>
    <p>Используя сайт, вы соглашаетесь с нашими условиями. Все материалы сайта защищены авторским правом.</p>
    <p>Цены и наличие могут меняться. Заказ считается оформленным после подтверждения по email.</p>`,
};

function openInfo(key) {
  document.getElementById('infoModalContent').innerHTML = infoContent[key] || '';
  document.getElementById('infoModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeInfo() {
  document.getElementById('infoModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeInfoOutside(e) {
  if (e.target === document.getElementById('infoModalOverlay')) closeInfo();
}

renderProducts();