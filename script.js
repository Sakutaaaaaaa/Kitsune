{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }


        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }
        
        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

                window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');    
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = '';
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                card.dataset.originalIndex = index;
            });
        });

        window.sortProducts = function() {
            const grid = document.querySelector('.product-grid');
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            const sortType = document.getElementById('sortOptions').value;

            cards.sort((a, b) => {
                const titleA = a.querySelector('.product-title').innerText.toLowerCase();
                const titleB = b.querySelector('.product-title').innerText.toLowerCase();
                
                const priceA = parseFloat(a.querySelector('.product-price').innerText.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.querySelector('.product-price').innerText.replace(/[$,]/g, ''));

                if (sortType === 'az') return titleA.localeCompare(titleB);
                if (sortType === 'za') return titleB.localeCompare(titleA);
                if (sortType === 'price-low') return priceA - priceB;
                if (sortType === 'price-high') return priceB - priceA;

                return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
            });

            grid.innerHTML = '';
            cards.forEach(card => grid.appendChild(card));
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach(card => {
                if(card.querySelector('.btn-wishlist-toggle')) return;               
                const title = card.querySelector('.product-title').innerText;
                const price = card.querySelector('.product-price').innerText;
                const img = card.querySelector('.product-img img').getAttribute('src');
                
                const btn = document.createElement('button');
                btn.className = 'btn-wishlist-toggle';
                btn.innerHTML = '🤍';
                btn.setAttribute('data-name', title);
                btn.setAttribute('data-price', price);
                btn.setAttribute('data-img', img);
                
                btn.addEventListener('click', function() {
                    toggleWishlist(this);
                });
                
                card.prepend(btn);
            });
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            document.querySelectorAll('.btn-wishlist-toggle').forEach(button => {
                const name = button.getAttribute('data-name');
                if (wishlist.some(item => item.name === name)) {
                    button.innerText = '❤️';
                    button.classList.add('active');
                }
            });
        });
        
        window.toggleWishlist = function(button) {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.name === name);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                button.innerText = '🤍';
                button.classList.remove('active');
            } else {
                wishlist.push({ name, price, img });
                button.innerText = '❤️';
                button.classList.add('active');
            }
            
            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist));
        }
        
        window.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-bar');
            

            if (searchInput) {
                searchInput.addEventListener('input', (event) => {

                    const searchTerm = event.target.value.toLowerCase();

                    const productCards = document.querySelectorAll('.product-card');
                    
                    productCards.forEach(card => {

                        const titleElement = card.querySelector('.product-title');
                        
                        if (titleElement) {
                            const title = titleElement.innerText.toLowerCase();
                            
          
                            if (title.includes(searchTerm)) {
                                card.style.display = 'flex'; 
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                }
            });

                    window.addEventListener('DOMContentLoaded', () => {
   
            document.querySelectorAll('.btn-add').forEach(button => {

                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
           
                    const card = this.closest('.product-card');
                    
        
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
             
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
       
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
   
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }

        
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
          
            updateCartUI();
            
          
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
  
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                card.dataset.originalIndex = index;
            });
        });

        window.sortProducts = function() {
            const grid = document.querySelector('.product-grid');
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            const sortType = document.getElementById('sortOptions').value;

            cards.sort((a, b) => {
                const titleA = a.querySelector('.product-title').innerText.toLowerCase();
                const titleB = b.querySelector('.product-title').innerText.toLowerCase();
                
                const priceA = parseFloat(a.querySelector('.product-price').innerText.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.querySelector('.product-price').innerText.replace(/[$,]/g, ''));

                if (sortType === 'az') return titleA.localeCompare(titleB);
                if (sortType === 'za') return titleB.localeCompare(titleA);
                if (sortType === 'price-low') return priceA - priceB;
                if (sortType === 'price-high') return priceB - priceA;
                

                if (sortType === 'relevant') {
                    const isGpuA = titleA.includes('rtx') || titleA.includes('rx ');
                    const isGpuB = titleB.includes('rtx') || titleB.includes('rx ');

                    if (isGpuA && !isGpuB) return -1; 
                    if (!isGpuA && isGpuB) return 1;  
                    
                    return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
                }

                return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
            });

            grid.innerHTML = '';
            cards.forEach(card => grid.appendChild(card));
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach(card => {
                if(card.querySelector('.btn-wishlist-toggle')) return;
                
                const title = card.querySelector('.product-title').innerText;
                const price = card.querySelector('.product-price').innerText;
                const img = card.querySelector('.product-img img').getAttribute('src');
                
                const btn = document.createElement('button');
                btn.className = 'btn-wishlist-toggle';
                btn.innerHTML = '🤍';
                btn.setAttribute('data-name', title);
                btn.setAttribute('data-price', price);
                btn.setAttribute('data-img', img);
                
                btn.addEventListener('click', function() {
                    toggleWishlist(this);
                });
                
                card.prepend(btn);
            });
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            document.querySelectorAll('.btn-wishlist-toggle').forEach(button => {
                const name = button.getAttribute('data-name');
                if (wishlist.some(item => item.name === name)) {
                    button.innerText = '❤️';
                    button.classList.add('active');
                }
            });
        });
        
        window.toggleWishlist = function(button) {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.name === name);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                button.innerText = '🤍';
                button.classList.remove('active');
            } else {
                wishlist.push({ name, price, img });
                button.innerText = '❤️';
                button.classList.add('active');
            }
            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist));
        }
        window.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-bar');
            
            if (searchInput) {
                searchInput.addEventListener('input', (event) => {
                    const searchTerm = event.target.value.toLowerCase();
                    const productCards = document.querySelectorAll('.product-card');
                    
                    productCards.forEach(card => {
                        const titleElement = card.querySelector('.product-title');
                        
                        if (titleElement) {
                            const title = titleElement.innerText.toLowerCase();
                            if (title.includes(searchTerm)) {
                                card.style.display = 'flex'; 
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                }
            });

                    window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

    
        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

        const gpuDropdown = document.getElementById('gpu-dropdown');
        const selectedText = gpuDropdown.querySelector('.dropdown-selected');
        const list = gpuDropdown.querySelector('.dropdown-list');

        selectedText.addEventListener('click', () => {
            list.classList.toggle('show');
        });

        gpuDropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                selectedText.innerText = item.innerText;
                gpuDropdown.setAttribute('data-value', item.getAttribute('data-value'));
                gpuDropdown.setAttribute('data-size', item.getAttribute('data-size'));
                list.classList.remove('show');
            });
        });

        document.addEventListener('click', (e) => {
            if (!gpuDropdown.contains(e.target)) {
                list.classList.remove('show');
            }
        });


        window.checkCompatibility = function() {
            const cpuBrand = document.getElementById('cpu-brand').value;
            const moboSelect = document.getElementById('motherboard');
            const caseSelect = document.getElementById('case');
            const statusBox = document.getElementById('status');

            const gpuValue = gpuDropdown.getAttribute('data-value');
            const gpuSize = gpuDropdown.getAttribute('data-size');


            if (!cpuBrand || moboSelect.value === "" || gpuValue === "" || caseSelect.value === "") {
                statusBox.className = "status-box error";
                statusBox.innerText = "Please select all components before verifying.";
                return;
            }

            const selectedMobo = moboSelect.options[moboSelect.selectedIndex];
            const selectedCase = caseSelect.options[caseSelect.selectedIndex];

            const moboBrand = selectedMobo.getAttribute('data-brand');
            const moboSize = selectedMobo.getAttribute('data-size');
            const caseSize = selectedCase.getAttribute('data-size');

            let errors = [];

            if (cpuBrand !== moboBrand) {
                errors.push(`❌ Brand Mismatch: You selected an ${cpuBrand.toUpperCase()} CPU, but a motherboard that only supports ${moboBrand.toUpperCase()}.`);
            }


            if (caseSize === "micro" && moboSize === "atx") {
                errors.push("❌ Size Conflict: The Kawaii Neko Case is too small for a full ATX Motherboard. Please choose a Micro-ATX motherboard or a larger case.");
            }


            if (caseSize === "micro" && gpuSize === "large") {
                errors.push("❌ Clearance Issue: The selected Graphics Card is too large for the Micro-ATX case. Please choose a medium card or a larger chassis.");
            }


            if (errors.length > 0) {
                statusBox.className = "status-box error";
                statusBox.innerHTML = errors.join("<br><br>");
            } else {
                statusBox.className = "status-box success";
                statusBox.innerHTML = "✅ High Compatibility! These Kitsune components are perfectly matched for your build.";
            }
        }

                window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, img, quantity: 1 });
            }

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            

            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

                window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }


            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            

            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            

            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    

                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }          
            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }        
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

    const container = document.querySelector('.sakura-container');
    
    for (let i = 0; i < 25; i++) {
        let petal = document.createElement('div');
        petal.classList.add('sakura');
        petal.style.left = Math.random() * 100 + 'vw';
        let size = Math.random() * 10 + 10;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';

        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(petal);
    }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach(card => {
                if(card.querySelector('.btn-wishlist-toggle')) return;
                
                const title = card.querySelector('.product-title').innerText;
                const price = card.querySelector('.product-price').innerText;
                const img = card.querySelector('.product-img img').getAttribute('src');
                
                const btn = document.createElement('button');
                btn.className = 'btn-wishlist-toggle';
                btn.innerHTML = '🤍';
                btn.setAttribute('data-name', title);
                btn.setAttribute('data-price', price);
                btn.setAttribute('data-img', img);
                
                btn.addEventListener('click', function() {
                    toggleWishlist(this);
                });
                
                card.prepend(btn);
            });
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            document.querySelectorAll('.btn-wishlist-toggle').forEach(button => {
                const name = button.getAttribute('data-name');
                if (wishlist.some(item => item.name === name)) {
                    button.innerText = '❤️';
                    button.classList.add('active');
                }
            });
        });
        
        window.toggleWishlist = function(button) {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.name === name);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                button.innerText = '🤍';
                button.classList.remove('active');
            } else {
                wishlist.push({ name, price, img });
                button.innerText = '❤️';
                button.classList.add('active');
            }
            
            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist));
        }
        
        window.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-bar');
            
            if (searchInput) {
                searchInput.addEventListener('input', (event) => {
                    const searchTerm = event.target.value.toLowerCase();
                    const productCards = document.querySelectorAll('.product-card');
                    
                    productCards.forEach(card => {
                        const titleElement = card.querySelector('.product-title');
                        
                        if (titleElement) {
                            const title = titleElement.innerText.toLowerCase();                            
                            if (title.includes(searchTerm)) {
                                card.style.display = 'flex'; 
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                }
            });

                    window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);

                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            

            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.addEventListener('DOMContentLoaded', () => { 
            document.querySelectorAll('.product-card').forEach((card, index) => { 
                card.dataset.originalIndex = index; 
            }); 
        });

        window.sortProducts = function() {
            const grid = document.querySelector('.product-grid');
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            const sortType = document.getElementById('sortOptions').value;

            cards.sort((a, b) => {
                const titleA = a.querySelector('.product-title').innerText.toLowerCase();
                const titleB = b.querySelector('.product-title').innerText.toLowerCase();
                const priceA = parseFloat(a.querySelector('.product-price').innerText.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.querySelector('.product-price').innerText.replace(/[$,]/g, ''));

                if (sortType === 'az') return titleA.localeCompare(titleB);
                if (sortType === 'za') return titleB.localeCompare(titleA);
                if (sortType === 'price-low') return priceA - priceB;
                if (sortType === 'price-high') return priceB - priceA;
                
                if (sortType === 'relevant') {
                    const isGpuA = titleA.includes('rtx') || titleA.includes('rx ');
                    const isGpuB = titleB.includes('rtx') || titleB.includes('rx ');
                    
                    if (isGpuA && !isGpuB) return -1;
                    if (!isGpuA && isGpuB) return 1;
                    
                    return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
                }
                
                return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
            });
            
            grid.innerHTML = '';
            cards.forEach(card => grid.appendChild(card));
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach(card => {
                if(card.querySelector('.btn-wishlist-toggle')) return;
                
                const title = card.querySelector('.product-title').innerText;
                const price = card.querySelector('.product-price').innerText;
                const img = card.querySelector('.product-img img').getAttribute('src');
                
                const btn = document.createElement('button');
                btn.className = 'btn-wishlist-toggle';
                btn.innerHTML = '🤍';
                btn.setAttribute('data-name', title);
                btn.setAttribute('data-price', price);
                btn.setAttribute('data-img', img);
                
                btn.addEventListener('click', function() {
                    toggleWishlist(this);
                });
                
                card.prepend(btn);
            });
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            document.querySelectorAll('.btn-wishlist-toggle').forEach(button => {
                const name = button.getAttribute('data-name');
                if (wishlist.some(item => item.name === name)) {
                    button.innerText = '❤️';
                    button.classList.add('active');
                }
            });
        });
        
        window.toggleWishlist = function(button) {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.name === name);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                button.innerText = '🤍';
                button.classList.remove('active');
            } else {
                wishlist.push({ name, price, img });
                button.innerText = '❤️';
                button.classList.add('active');
            }
            
            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist));
        }

        window.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-bar');
            
            if (searchInput) {
                searchInput.addEventListener('input', (event) => {
                    const searchTerm = event.target.value.toLowerCase();
                    const productCards = document.querySelectorAll('.product-card');
                    
                    productCards.forEach(card => {

                        const titleElement = card.querySelector('.product-title');
                        
                        if (titleElement) {
                            const title = titleElement.innerText.toLowerCase();
                            
                            if (title.includes(searchTerm)) {
                                card.style.display = 'flex'; 
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                }
            });

                    window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            

            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            

            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                card.dataset.originalIndex = index;
            });
        });

        window.sortProducts = function() {
            const grid = document.querySelector('.product-grid');
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            const sortType = document.getElementById('sortOptions').value;

            cards.sort((a, b) => {
                const titleA = a.querySelector('.product-title').innerText.toLowerCase();
                const titleB = b.querySelector('.product-title').innerText.toLowerCase();
                const priceA = parseFloat(a.querySelector('.product-price').innerText.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.querySelector('.product-price').innerText.replace(/[$,]/g, ''));

                if (sortType === 'az') return titleA.localeCompare(titleB);
                if (sortType === 'za') return titleB.localeCompare(titleA);
                if (sortType === 'price-low') return priceA - priceB;
                if (sortType === 'price-high') return priceB - priceA;

                if (sortType === 'relevant') {
                    const isGpuA = titleA.includes('rtx') || titleA.includes('rx ');
                    const isGpuB = titleB.includes('rtx') || titleB.includes('rx ');
                    if (isGpuA && !isGpuB) return -1;
                    if (!isGpuA && isGpuB) return 1;
                    return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
                }

                return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
            });

            grid.innerHTML = '';
            cards.forEach(card => grid.appendChild(card));
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach(card => {
                if(card.querySelector('.btn-wishlist-toggle')) return;
                
                const title = card.querySelector('.product-title').innerText;
                const price = card.querySelector('.product-price').innerText;
                const img = card.querySelector('.product-img img').getAttribute('src');
                
                const btn = document.createElement('button');
                btn.className = 'btn-wishlist-toggle';
                btn.innerHTML = '🤍';
                btn.setAttribute('data-name', title);
                btn.setAttribute('data-price', price);
                btn.setAttribute('data-img', img);
                

                btn.addEventListener('click', function() {
                    toggleWishlist(this);
                });
                
                card.prepend(btn);
            });
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            document.querySelectorAll('.btn-wishlist-toggle').forEach(button => {
                const name = button.getAttribute('data-name');
                if (wishlist.some(item => item.name === name)) {
                    button.innerText = '❤️';
                    button.classList.add('active');
                }
            });
        });
        
        window.toggleWishlist = function(button) {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.name === name);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                button.innerText = '🤍';
                button.classList.remove('active');
            } else {
                wishlist.push({ name, price, img });
                button.innerText = '❤️';
                button.classList.add('active');
            }
            
            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist));
        }

        window.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-bar');
            
            if (searchInput) {
                searchInput.addEventListener('input', (event) => {
                    const searchTerm = event.target.value.toLowerCase();
                    const productCards = document.querySelectorAll('.product-card');
                    
                    productCards.forEach(card => {
                        const titleElement = card.querySelector('.product-title');
                        
                        if (titleElement) {
                            const title = titleElement.innerText.toLowerCase();
                            
                            if (title.includes(searchTerm)) {
                                card.style.display = 'flex'; 
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                }
            });

                    window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.btn-add').forEach(button => {
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
                    const card = this.closest('.product-card');
                    
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
            updateCartUI();
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                card.dataset.originalIndex = index;
            });
        });

        window.sortProducts = function() {
            const grid = document.querySelector('.product-grid');
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            const sortType = document.getElementById('sortOptions').value;

            cards.sort((a, b) => {
                const titleA = a.querySelector('.product-title').innerText.toLowerCase();
                const titleB = b.querySelector('.product-title').innerText.toLowerCase();
                
                const priceA = parseFloat(a.querySelector('.product-price').innerText.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.querySelector('.product-price').innerText.replace(/[$,]/g, ''));

                if (sortType === 'az') return titleA.localeCompare(titleB);
                if (sortType === 'za') return titleB.localeCompare(titleA);
                if (sortType === 'price-low') return priceA - priceB;
                if (sortType === 'price-high') return priceB - priceA;

                return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
            });

            grid.innerHTML = '';
            cards.forEach(card => grid.appendChild(card));
        }

        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }


        window.addEventListener('DOMContentLoaded', () => {

            document.querySelectorAll('.product-card').forEach(card => {

                if(card.querySelector('.btn-wishlist-toggle')) return;
                

                const title = card.querySelector('.product-title').innerText;
                const price = card.querySelector('.product-price').innerText;
                const img = card.querySelector('.product-img img').getAttribute('src');
                

                const btn = document.createElement('button');
                btn.className = 'btn-wishlist-toggle';
                btn.innerHTML = '🤍';
                btn.setAttribute('data-name', title);
                btn.setAttribute('data-price', price);
                btn.setAttribute('data-img', img);
                

                btn.addEventListener('click', function() {
                    toggleWishlist(this);
                });
                

                card.prepend(btn);
            });
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            document.querySelectorAll('.btn-wishlist-toggle').forEach(button => {
                const name = button.getAttribute('data-name');
                if (wishlist.some(item => item.name === name)) {
                    button.innerText = '❤️';
                    button.classList.add('active');
                }
            });
        });
        
        window.toggleWishlist = function(button) {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.name === name);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                button.innerText = '🤍';
                button.classList.remove('active');
            } else {
                wishlist.push({ name, price, img });
                button.innerText = '❤️';
                button.classList.add('active');
            }
            
            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist));
        }

        window.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-bar');

            if (searchInput) {
                searchInput.addEventListener('input', (event) => {

                    const searchTerm = event.target.value.toLowerCase();
  
                    const productCards = document.querySelectorAll('.product-card');
                    
                    productCards.forEach(card => {
   
                        const titleElement = card.querySelector('.product-title');
                        
                        if (titleElement) {
                            const title = titleElement.innerText.toLowerCase();
                            
  
                            if (title.includes(searchTerm)) {
                                card.style.display = 'flex'; 
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                }
            });

                    window.addEventListener('DOMContentLoaded', () => {

            document.querySelectorAll('.btn-add').forEach(button => {

                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {

                    const card = this.closest('.product-card');
                    

                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;

                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            

            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            

            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            

            updateCartUI();
            

            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
  
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            

            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{

        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.width = (Math.random() * 10 + 10) + 'px';
            petal.style.height = petal.style.width;
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }

        window.addEventListener('DOMContentLoaded', () => { 
            document.querySelectorAll('.product-card').forEach((card, index) => { 
                card.dataset.originalIndex = index; 
            }); 
        });

        window.sortProducts = function() {
            const grid = document.querySelector('.product-grid');
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            const sortType = document.getElementById('sortOptions').value;

            cards.sort((a, b) => {
                const titleA = a.querySelector('.product-title').innerText.toLowerCase();
                const titleB = b.querySelector('.product-title').innerText.toLowerCase();
                const priceA = parseFloat(a.querySelector('.product-price').innerText.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.querySelector('.product-price').innerText.replace(/[$,]/g, ''));

                if (sortType === 'az') return titleA.localeCompare(titleB);
                if (sortType === 'za') return titleB.localeCompare(titleA);
                if (sortType === 'price-low') return priceA - priceB;
                if (sortType === 'price-high') return priceB - priceA;
                
                if (sortType === 'relevant') {
                    const isGpuA = titleA.includes('rtx') || titleA.includes('rx ');
                    const isGpuB = titleB.includes('rtx') || titleB.includes('rx ');
                    
                    if (isGpuA && !isGpuB) return -1;
                    if (!isGpuA && isGpuB) return 1;
                    
                    return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
                }
                
                return parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex);
            });
            
            grid.innerHTML = '';
            cards.forEach(card => grid.appendChild(card));
        }


        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }


        window.addEventListener('DOMContentLoaded', () => {

            document.querySelectorAll('.product-card').forEach(card => {

                if(card.querySelector('.btn-wishlist-toggle')) return;
                

                const title = card.querySelector('.product-title').innerText;
                const price = card.querySelector('.product-price').innerText;
                const img = card.querySelector('.product-img img').getAttribute('src');
                

                const btn = document.createElement('button');
                btn.className = 'btn-wishlist-toggle';
                btn.innerHTML = '🤍';
                btn.setAttribute('data-name', title);
                btn.setAttribute('data-price', price);
                btn.setAttribute('data-img', img);
                

                btn.addEventListener('click', function() {
                    toggleWishlist(this);
                });
                
  
                card.prepend(btn);
            });
            

            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            document.querySelectorAll('.btn-wishlist-toggle').forEach(button => {
                const name = button.getAttribute('data-name');
                if (wishlist.some(item => item.name === name)) {
                    button.innerText = '❤️';
                    button.classList.add('active');
                }
            });
        });
        

        window.toggleWishlist = function(button) {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const img = button.getAttribute('data-img');
            

            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            const existingIndex = wishlist.findIndex(item => item.name === name);
            
            if (existingIndex > -1) {

                wishlist.splice(existingIndex, 1);
                button.innerText = '🤍';
                button.classList.remove('active');
            } else {

                wishlist.push({ name, price, img });
                button.innerText = '❤️';
                button.classList.add('active');
            }
            

            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist));
        }


        window.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-bar');
            
   
            if (searchInput) {
                searchInput.addEventListener('input', (event) => {

                    const searchTerm = event.target.value.toLowerCase();

                    const productCards = document.querySelectorAll('.product-card');
                    
                    productCards.forEach(card => {
      
                        const titleElement = card.querySelector('.product-title');
                        
                        if (titleElement) {
                            const title = titleElement.innerText.toLowerCase();
                            
                 
                            if (title.includes(searchTerm)) {
                                card.style.display = 'flex'; 
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                }
            });

                    window.addEventListener('DOMContentLoaded', () => {
   
            document.querySelectorAll('.btn-add').forEach(button => {
     
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
     
                    const card = this.closest('.product-card');
                    
  
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
         
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            

            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            

            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }


            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            

            updateCartUI();
            

            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            

            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    

                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            

            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}
{


        const container = document.querySelector('.sakura-container');
        for (let i = 0; i < 25; i++) {
            let petal = document.createElement('div');
            petal.classList.add('sakura');
            petal.style.left = Math.random() * 100 + 'vw';
            let size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(petal);
        }


        window.toggleSearch = function() {
            const input = document.getElementById('search-bar');
            if (input.style.width === '0px' || input.style.width === '') {
                input.style.width = '180px';
                input.style.padding = '5px 10px';
                input.focus();
            } else {
                input.style.width = '0px';
                input.style.padding = '0';
            }
        }

        window.toggleCart = function() {
            const cart = document.getElementById('cartSidebar');
            cart.style.right = (cart.style.right === '0px') ? '-350px' : '0px';
        }

  
        window.loadWishlistPage = function() {
            const grid = document.getElementById('dynamic-wishlist-grid');
            const countSpan = document.getElementById('wishlist-count');
            

            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            
   
            countSpan.innerText = wishlist.length;


            if (wishlist.length === 0) {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; font-size: 18px; margin-top: 50px;">Your wishlist is empty. Time to hunt for parts!</p>';
                return;
            }


            grid.innerHTML = ''; 
            wishlist.forEach((item, index) => {

                let btnClass = item.name.includes('FOX') ? 'btn-add btn-fox' : 'btn-add';
                let cardStyle = item.name.includes('FOX') ? 'style="border-color: var(--kitsune-orange);"' : '';

                grid.innerHTML += `
                    <div class="product-card" ${cardStyle}>
                        <button class="btn-remove-wishlist" onclick="removeFromWishlistPage(${index})" title="Remove from wishlist">✕</button>
                        <div class="product-img"><img src="${item.img}" alt="${item.name}"></div>
                        <div class="product-title">${item.name}</div>
                        <div class="product-price">${item.price}</div>
                        <button class="${btnClass}">ADD TO CART</button>
                    </div>
                `;
            });
        }

        window.removeFromWishlistPage = function(index) {
            let wishlist = JSON.parse(localStorage.getItem('kitsune_wishlist')) || [];
            wishlist.splice(index, 1); 
            localStorage.setItem('kitsune_wishlist', JSON.stringify(wishlist)); 
            loadWishlistPage(); 
        }

        window.addEventListener('DOMContentLoaded', loadWishlistPage);

                window.addEventListener('DOMContentLoaded', () => {
  
            document.querySelectorAll('.btn-add').forEach(button => {
     
                if(button.hasAttribute('data-cart-active')) return;
                button.setAttribute('data-cart-active', 'true');
                
                button.addEventListener('click', function() {
      
                    const card = this.closest('.product-card');
                    
           
                    const name = card.querySelector('.product-title').innerText;
                    const priceText = card.querySelector('.product-price').innerText;
             
                    const price = parseFloat(priceText.replace(/[$,]/g, '')); 
                    const img = card.querySelector('.product-img img').getAttribute('src');
                    
                    addToCart(name, price, img);
                });
            });
            
       
            updateCartUI();
        });
        
        window.addToCart = function(name, price, img) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            
  
            let existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                cart.push({ name, price, img, quantity: 1 }); 
            }

  
            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            
       
            updateCartUI();
            
       
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.style.right = '0px';
            }
        }
        
        window.updateCartUI = function() {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            const cartItemsContainer = document.getElementById('cartItems');
            const cartCountNav = document.getElementById('cart-count-nav');
            
        
            const totalSpan = document.querySelector('#cartSidebar div[style*="border-top"] span');
            
            let totalItems = 0;
            let totalPrice = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="margin-top: 50px;">The pack is empty. Time to hunt for parts!</p>';
                cartItemsContainer.style.overflowY = 'visible';
            } else {
                cartItemsContainer.innerHTML = ''; 
                cartItemsContainer.style.overflowY = 'auto'; 
                cartItemsContainer.style.overflowX = 'hidden';
                
                cart.forEach((item, index) => {
                    totalItems += item.quantity;
                    totalPrice += (item.price * item.quantity);
                    
        
                    cartItemsContainer.innerHTML += `
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; text-align: left; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <img src="${item.img}" style="width: 60px; height: 60px; object-fit: contain; background: #f5f5f5; border-radius: 8px; flex-shrink: 0;">
                        <div style="flex-grow: 1;">
                            <div style="font-size: 12px; font-weight: bold; color: var(--dark-text); line-height: 1.3; margin-bottom: 5px;">${item.name}</div>
                            <div style="color: #d81b60; font-weight: bold; font-size: 14px;">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                            </div>
                    
                            <!-- Plus/Minus Quantity Buttons -->
                            <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
                                    <button onclick="changeCartQty(${index}, -1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">-</button>
                                    <span style="font-size: 13px; font-weight: bold; padding: 0 5px; width: 15px; text-align: center;">${item.quantity}</span>
                                    <button onclick="changeCartQty(${index}, 1)" style="border: none; background: #f9f9f9; cursor: pointer; padding: 4px 10px; font-weight: bold; color: #666; transition: background 0.2s;">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (cartCountNav) cartCountNav.innerText = totalItems;
            if (totalSpan) totalSpan.innerText = '$' + totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        window.changeCartQty = function(index, amount) {
            let cart = JSON.parse(localStorage.getItem('kitsune_cart')) || [];
            cart[index].quantity += amount;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            

            localStorage.setItem('kitsune_cart', JSON.stringify(cart));
            updateCartUI();
        }
    
}